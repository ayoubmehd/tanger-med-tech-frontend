import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import type { AxiosResponse } from "axios";
import api from "../api/index";

export default function useQuery<T>(resource = "") {
  const { getAll } = api(resource);

  return () => {
    const [result, setResult] = useState<Paginate<T[]> | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<unknown | null>(null);
    const router = useRouter();

    useEffect(() => {
      (async () => {
        const currentPage = router.query.page || 1;
        const [err, res] = await getAll(+currentPage);

        setIsLoading(false);

        if (err) {
          return setError(err);
        }

        setResult(<Paginate<T[]>>(<AxiosResponse>res).data);
      })();
    }, [router.query]);

    return { result, isLoading, error };
  };
}

import { route } from "next/dist/server/router";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

interface UsePaginationReturnType {
  currentPage: number | "" | undefined;
}

function usePagination<T>(
  paginator: Paginate<T> | null
): UsePaginationReturnType {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(
    router.query.page ? +router.query.page : 1
  );

  useEffect(() => {
    setCurrentPage(router.query.page ? +router.query.page : 1);
  }, [router.query]);

  return {
    currentPage,
  };
}

export default usePagination;

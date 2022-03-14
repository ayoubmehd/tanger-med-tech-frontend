import { AxiosResponse } from "axios";
import axios from "../axios.config";

export default <T>(resource: string) => {
  return {
    getAll: async (
      currentPage: number
    ): Promise<Array<AxiosResponse | null | unknown>> => {
      try {
        const result = await axios(`/${resource}/?page=${currentPage}`);

        return [null, result];
      } catch (error) {
        return [error, null];
      }
    },
    create: async <TInput>(
      payload: TInput
    ): Promise<Array<AxiosResponse | null | unknown>> => {
      try {
        const result = await axios.post(`/${resource}`, payload);

        return [null, result];
      } catch (error) {
        return [error, null];
      }
    },
  };
};

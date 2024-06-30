import {
  useMutation,
  useQuery,
  type UseMutationOptions,
  type UseQueryOptions
} from "@tanstack/react-query";

import type { AxiosError } from "axios";
import {
  type ErrorData,
  type MutationResponse,
  createAuthenticatedAxiosInstance
} from "services/client";
import type { GetTestApiResponse, PostTestApiRequest } from "./type";

const instance = createAuthenticatedAxiosInstance(
  process.env.NEXT_PUBLIC_RISKFREE as string
);

// get test api

const getTestApiUrl = `/test`;

const getTestApiFn = async () => {
  const { data } = await instance.request<GetTestApiResponse>({
    url: getTestApiUrl
  });

  return data;
};

export const getTestApiKey = () => [getTestApiUrl];

export const useGetTestApi = (
  options?: UseQueryOptions<GetTestApiResponse, AxiosError<ErrorData>>
) => {
  return useQuery({
    queryFn: getTestApiFn,
    queryKey: getTestApiKey(),
    ...options
  });
};

// post test api

const postTestApiUrl = (req: PostTestApiRequest) => `/test?test=${req.test}`;

const postTestApiFn = async (req: PostTestApiRequest) => {
  const { data } = await instance.request<MutationResponse>({
    method: "POST",
    url: postTestApiUrl(req),
    data: req
  });
  return data;
};

export const usePostTestApi = (
  options?: UseMutationOptions<
    MutationResponse,
    AxiosError<ErrorData>,
    PostTestApiRequest
  >
) => {
  return useMutation({
    mutationFn: postTestApiFn,
    ...options
  });
};

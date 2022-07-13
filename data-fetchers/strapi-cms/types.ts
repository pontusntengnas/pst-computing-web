export interface ApiSingleResponse<TResponse> {
  data: ApiResponseData<TResponse>;
  meta: ApiResponseMeta;
}

export interface ApiCollectionResponse<TResponse> {
  data: Array<ApiResponseData<TResponse>>;
  meta: ApiResponseMeta;
}

export interface ApiResponseData<TResponse> {
  id: number;
  attributes: TResponse;
}

export interface ApiResponseMeta {
  pagination: ApiResponsePagination;
}

export interface ApiResponsePagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

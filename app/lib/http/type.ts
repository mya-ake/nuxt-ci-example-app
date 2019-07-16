export interface IHttp {
  request<R = unknown>(
    request: HttpRequest,
    option?: HttpRequestOption,
  ): Promise<HttpResponse<R>>;
}
type HttpWithoutBodyMethods = 'get';
type HttpWithBodyMethods = 'post';

interface HttpBaseRequest {
  url: string;
}

interface HttpWithoutBodyRequest extends HttpBaseRequest {
  method: HttpWithoutBodyMethods;
}

interface HttpWithBodyRequest extends HttpBaseRequest {
  method: HttpWithBodyMethods;
  body: unknown;
}

export type HttpRequest = HttpWithoutBodyRequest | HttpWithBodyRequest;

export type HttpRequestOption = {};
export type HttpResponse<R> = {
  ok: boolean;
  status: number | undefined;
  data: R;
  noResponse: boolean;
};

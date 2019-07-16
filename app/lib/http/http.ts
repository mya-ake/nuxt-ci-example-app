import ky, { Options } from 'ky-universal';
import { IHttp, HttpRequest, HttpRequestOption, HttpResponse } from './type';

export class Http implements IHttp {
  private client: typeof ky;
  constructor(client: typeof ky) {
    this.client = client;
  }

  async request<R>(
    request: HttpRequest,
    option?: HttpRequestOption,
  ): Promise<HttpResponse<R>> {
    const { url: input } = request;
    const kyOption = this.buildKyOption(request);
    const response = await this.client(input, kyOption);
    return await this.buildResponse(response, option);
  }

  private buildKyOption(request: HttpRequest) {
    switch (request.method) {
      case 'get': {
        return {
          method: request.method,
        };
      }
      case 'post': {
        const json = request.body;
        return {
          method: request.method,
          json,
        };
      }
    }
  }

  private async buildResponse<R>(
    response: Response,
    option?: HttpRequestOption,
  ): Promise<HttpResponse<R>> {
    const noResponse = typeof response === 'undefined';
    const { status = undefined, ok = false } = response || {};
    const data = !noResponse ? await response.json() : undefined;
    return {
      ok,
      status,
      data,
      noResponse,
    };
  }
}

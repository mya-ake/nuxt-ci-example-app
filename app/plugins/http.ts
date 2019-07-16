import ky from 'ky-universal';
import { Http } from '@/lib/http';
import { API_ORIGIN } from '@/configs/env';

export default (_, inject) => {
  const client = ky.create({
    prefixUrl: API_ORIGIN,
    throwHttpErrors: false,
  });

  const http = new Http(client);
  inject('_http', http);
};

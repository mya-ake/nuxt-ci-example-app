import { IHttp } from '@/lib/http';

declare module 'vue/types/vue' {
  export interface Vue {
    $_http: IHttp;
  }
}

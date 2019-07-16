export type User = {
  id: string;
  name: string;
  token?: string;
};

type ErrorItem = {
  code: string;
  message: string;
};

export type ErrorResponse = {
  errors: ErrorItem[];
};

export interface AuthDatatypes {
  name: string;
  email: string;
  password: string;
}
export interface SchemaTypes extends AuthDatatypes {
  confirmPassword: string;
}

export interface AuthDatatypes {
  name: string;
  email: string;
  password: string;
}
export interface SchemaTypes extends AuthDatatypes {
  confirmPassword: string;
}

export interface LoginTypes {
  email: string | undefined;
  password: string | undefined;
}
export interface WidgetProps {}

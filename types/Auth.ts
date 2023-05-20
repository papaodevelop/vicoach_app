export interface Auth {
  apiToken: string;
  tokenType: string;
  expiresIn: number;
  userId: number;
}
export interface AuthState {
  auth: Auth | null;
}
export interface PayloadLogin {
  username: string;
  password: string;
  remember?: boolean;
}
export interface Payloadregiter {
  username: string;
  password: string;
  email: string;
  name: string;
  password_confirmation: string;
}
export interface ForgotPass {
  email: string;
}

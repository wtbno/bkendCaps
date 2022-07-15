export interface IUser {
  id: number;

  email: string;

  password: string;

  passwordResetToken: string;

  passwordResetExpires: Date;
}

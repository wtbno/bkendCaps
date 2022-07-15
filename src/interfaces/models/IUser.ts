export interface IUser {
  id: number;

  name: string;
  
  email: string;

  password: string;

  passwordResetToken: string;

  passwordResetExpires: Date;
}

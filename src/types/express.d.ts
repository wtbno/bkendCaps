/* eslint-disable no-unused-vars */
import "express";
import { IClient } from "src/interfaces/models/IClient";
import { IProduct } from "src/interfaces/models/IProduct";
import { IUser } from "../interfaces/models/IUser";
import { INewUser } from "../interfaces/models/INewUser";
import { ILogin } from "../interfaces/models/ILogin";

declare global {
  namespace Express {
    export interface Request {
      userId?: IUser["id"];
      productId?: IProduct["id"];
      clientId?: IClient["id"];
      INewUser?: INewUser["id"];
      ILogin?: ILogin["id"];
    }
  }
}

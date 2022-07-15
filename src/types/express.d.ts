/* eslint-disable no-unused-vars */
import "express";
import { IClient } from "src/interfaces/models/IClient";
import { IProduct } from "src/interfaces/models/IProduct";
import { IUser } from "../interfaces/models/IUser";
import { INovo } from "../interfaces/models/INovo";
import { ILogin } from "../interfaces/models/ILogin";

declare global {
  namespace Express {
    export interface Request {
      userId?: IUser["id"];
      productId?: IProduct["id"];
      clientId?: IClient["id"];
      INovo?: INovo["id"];
      ILogin?: ILogin["id"];
    }
  }
}

/* eslint-disable no-unused-vars */
import "express";
import { IClient } from "src/interfaces/models/IClient";
import { IProduct } from "src/interfaces/models/IProduct";
import { IUser } from "../interfaces/models/IUser";

declare global {
  namespace Express {
    export interface Request {
      userId?: IUser["id"];
      productId?: IProduct["id"];
      clientId?: IClient["id"];
    }
  }
}

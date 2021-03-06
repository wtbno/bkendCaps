import express, { Request, Response } from "express";
import UserController from "../../controllers/UserController";
import Authorization from "../../middlewares/Authorization";

const routes = express.Router();

routes.post(
  "/user",
  //middleware
  (req: Request, res: Response) => UserController.store(req, res)
);
routes.get(
  "/users",

  (req: Request, res: Response) => UserController.index(req, res)
);
routes.get(
  "/user/:id",

  (req: Request, res: Response) => UserController.findOne(req, res)
);
routes.put(
  "/user/:id",

  (req: Request, res: Response) => UserController.update(req, res)
);
routes.delete(
  "/user/:id",

  (req: Request, res: Response) => UserController.destroy(req, res)
);

export default routes;

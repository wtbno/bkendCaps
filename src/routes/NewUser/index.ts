import express, { Request, Response } from "express";
import NewUserController from "../../controllers/NewUserController";

const routes = express.Router();

routes.post(
  "/newUser",

  (req: Request, res: Response) => NewUserController.store(req, res)
);
routes.get(
  "/newUsers",

  (req: Request, res: Response) => NewUserController.index(req, res)
);
routes.get(
  "/newUser/:id",

  (req: Request, res: Response) => NewUserController.findOne(req, res)
);
routes.put(
  "/newUser/:id",

  (req: Request, res: Response) => NewUserController.update(req, res)
);
routes.delete(
  "/newUser/:id",

  (req: Request, res: Response) => NewUserController.destroy(req, res)
);

export default routes;

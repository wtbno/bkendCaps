import express, { Request, Response } from "express";
import ClientController from "src/controllers/ClientController";
import Authorization from "../../middlewares/Authorization";

const routes = express.Router();

routes.post(
  "/clients",
  Authorization.authenticate,
  (req: Request, res: Response) => ClientController.store(req, res)
);
routes.get(
  "/clients",
  Authorization.authenticate,
  (req: Request, res: Response) => ClientController.index(req, res)
);
routes.get(
  "/clients/:id",
  Authorization.authenticate,
  (req: Request, res: Response) => ClientController.findOne(req, res)
);
routes.put(
  "/clients/:id",
  Authorization.authenticate,
  (req: Request, res: Response) => ClientController.update(req, res)
);
routes.delete(
  "/clients/:id",
  Authorization.authenticate,
  (req: Request, res: Response) => ClientController.destroy(req, res)
);

export default routes;

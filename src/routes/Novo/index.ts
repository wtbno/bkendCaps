import express, { Request, Response } from "express";
import NovoController from "../../controllers/NovoController";

const routes = express.Router();

routes.post(
  "/novo",

  (req: Request, res: Response) => NovoController.store(req, res)
);
routes.get(
  "/novos",

  (req: Request, res: Response) => NovoController.index(req, res)
);
routes.get(
  "/novo/:id",

  (req: Request, res: Response) => NovoController.findOne(req, res)
);
routes.put(
  "/novo/:id",

  (req: Request, res: Response) => NovoController.update(req, res)
);
routes.delete(
  "/novo/:id",

  (req: Request, res: Response) => NovoController.destroy(req, res)
);

export default routes;

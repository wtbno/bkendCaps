import express, { Request, Response } from "express";
import LoginController from "../../controllers/LoginController";
import Authorization from "../../middlewares/Authorization";

const routes = express.Router();

routes.post(
  "/login",
//middleware
  (req: Request, res: Response) => LoginController.store(req, res)
);
routes.get(
  "/login",

  (req: Request, res: Response) => LoginController.index(req, res)
);
routes.get(
  "/logins/:id",

  (req: Request, res: Response) => LoginController.findOne(req, res)
);
routes.put(
  "/login/:id",

  (req: Request, res: Response) => LoginController.update(req, res)
);
routes.delete(
  "/login/:id",

  (req: Request, res: Response) => LoginController.destroy(req, res)
);

export default routes;

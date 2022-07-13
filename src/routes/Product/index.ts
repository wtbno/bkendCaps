import express, { Request, Response } from "express";
import ProductController from '../../controllers/ProductController'
import Authorization from "../../middlewares/Authorization";

const routes = express.Router();

routes.post(
  "/products",
  Authorization.authenticate,
  (req: Request, res: Response) => ProductController.store(req, res)
);
routes.get(
  "/products",
  Authorization.authenticate,
  (req: Request, res: Response) => ProductController.index(req, res)
);
routes.get(
  "/products/:id",
  Authorization.authenticate,
  (req: Request, res: Response) => ProductController.findOne(req, res)
);
routes.put(
  "/products/:id",
  Authorization.authenticate,
  (req: Request, res: Response) => ProductController.update(req, res)
);
routes.delete(
  "/products/:id",
  Authorization.authenticate,
  (req: Request, res: Response) => ProductController.destroy(req, res)
);

export default routes;

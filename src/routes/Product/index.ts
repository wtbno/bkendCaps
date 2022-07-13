import express, { Request, Response } from "express";
import ProductController from "../../controllers/ProductController";
import Authorization from "../../middlewares/Authorization";

const routes = express.Router();

routes.post(
  "/products",

  (req: Request, res: Response) => ProductController.store(req, res)
);
routes.get(
  "/products",

  (req: Request, res: Response) => ProductController.index(req, res)
);
routes.get(
  "/products/:id",

  (req: Request, res: Response) => ProductController.findOne(req, res)
);
routes.put(
  "/products/:id",

  (req: Request, res: Response) => ProductController.update(req, res)
);
routes.delete(
  "/products/:id",

  (req: Request, res: Response) => ProductController.destroy(req, res)
);

export default routes;

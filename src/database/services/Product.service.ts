import bcrypt from "bcrypt";
import { IProduct } from "src/interfaces/models/IProduct";
import { IProductService } from "src/interfaces/services/IProductService";
import Product from "../models/Product";

class ProductService implements IProductService {
  async store(
    data: Pick<
      IProduct,
      "productCode" | "buyPrice" | "productDesc" | "salePrice" | "unitMeas"
    >
  ): Promise<IProduct> {
    const product = await Product.create({ ...data });
    return product;
  }

  async getAll(): Promise<IProduct[]> {
    const products = await Product.findAll();

    return products;
  }

  findByPk(id: number): Promise<IProduct> {
    return Product.findByPk(id);
  }

  findByCode(productCode: string): Promise<IProduct> {
    return Product.findOne({ where: { productCode } });
  }

  async update(id: number, data: IProduct): Promise<IProduct> {
    await Product.update(data, { where: { id } });

    const updatedProduct = await Product.findByPk(id);

    return updatedProduct;
  }

  async destroy(id: number): Promise<void> {
    await Product.destroy({ where: { id } });
  }
}

export default ProductService;

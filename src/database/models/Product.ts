import { DataTypes, Model } from "sequelize";
import db from "../db";
import { IProduct } from "src/interfaces/models/IProduct";

class Product extends Model<IProduct> {
  //table models
  declare id: number;

  declare productName: string;

  declare productCode: string;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "products", sequelize: db }
);

export default Product;

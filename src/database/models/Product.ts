import { DataTypes, Model } from "sequelize";
import db from "../db";
import { IProduct } from "src/interfaces/models/IProduct";

class Product extends Model<IProduct> {
  //table models
  id: number;
  productCode: string;

  productDesc: string;

  buyPrice: string;

  salePrice: string;

  unitMeas: string;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    productCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productDesc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    buyPrice: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salePrice: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    unitMeas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "products", sequelize: db }
);

export default Product;

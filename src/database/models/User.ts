import { DataTypes, Model } from "sequelize";
import db from "../db";
import { IUser } from "../../interfaces/models/IUser";

class User extends Model<IUser> {
  //table models
  declare id: number;



  declare email: string;

  declare password: string;

  declare passwordResetToken: string;

  declare passwordResetExpires: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },


    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    passwordResetToken: {
      type: DataTypes.STRING,
    },
    passwordResetExpires: {
      type: DataTypes.DATE,
    },
  },
  { tableName: "users", sequelize: db }
);

export default User;

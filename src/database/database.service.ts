import { Sequelize } from "sequelize";

enum DatabaseType {
    POSTGRES = "postgres",
    MYSQL = "mysql",
    SQLITE = "sqlite",
    MSSQL = "mssql"
}
export class DatabaseService {
  public static sequelize;

  public static init() {
    const dbInfo = {
      user: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD || "admin",
      host: process.env.DB_HOST || "localhost",
      dbName: process.env.DB_NAME || "postgres",
      dialect: DatabaseType.POSTGRES,
    };
    this.sequelize = new Sequelize(
      dbInfo.dbName,
      dbInfo.user,
      dbInfo.password,
      {
        host: dbInfo.host,
        dialect: dbInfo.dialect,
      }
    );
  }

  public static async close() {
    this.sequelize.close();
  }

  public static async authenticate() {
    try {
      await this.sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      // this.close();
    }
  }

  public static defineModels() {
    console.log("Defining models");
    const models = [
      require("./models/company.models"),
      require("./models/employee.models"),
    ];
    for (const model of models) {
      model(this.sequelize);
    }
  }

  public static applyExtraSetup() {
    console.log("Applying extra setup");
    const { company, employee } = this.sequelize.models;

    employee.belongsTo(company);
  }
}

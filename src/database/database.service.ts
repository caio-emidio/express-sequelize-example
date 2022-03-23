const { Sequelize } = require("sequelize");
export class DatabaseService {
  constructor() {
    DatabaseService.init();
  }

  public static sequelize;

  public static init() {
    const dbInfo = {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dbName: process.env.DB_NAME,
      dialect: "postgres",
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
      this.close();
    }
  }
}

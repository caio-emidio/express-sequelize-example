const { Sequelize } = require("sequelize");
export class DatabaseService {
  constructor() {
    this.init();
  }

  public sequelize;

  public init() {
    const dbInfo = {
      user: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD || "admin",
      host: process.env.DB_HOST || "localhost",
      port: process.env.DB_PORT || 5432,
      dbName: process.env.DB_NAME || "postgres",
      dialect: "postgres",
    };
    this.sequelize = new Sequelize(
      dbInfo.dbName,
      dbInfo.user,
      dbInfo.password,
      {
        host: dbInfo.host,
        port: dbInfo.port,
        dialect: dbInfo.dialect,
      }
    );
  }

  public async close() {
    this.sequelize.close();
  }

  public async authenticate() {
    try {
      await this.sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      // this.close();
    }
  }
}

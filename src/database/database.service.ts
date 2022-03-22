const { Sequelize } = require('sequelize');
export class DatabaseService {
    constructor(
        username: string, 
        password: string, 
        host: string, 
        database: string
    ) {
        DatabaseService.init();
    }

    public static sequelize;

    public static init() {
        this.sequelize = new Sequelize('postgres://:pass@example.com:5432/dbname');
    }

    public static async authenticate() {
        try {
            await this.sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }

    }
}
module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
	sequelize.define('employee', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		firstName: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		lastName: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		email: {
			allowNull: true,
			type: DataTypes.STRING,
		},
		phone: {
			allowNull: true,
			type: DataTypes.STRING,
		}
	});
};
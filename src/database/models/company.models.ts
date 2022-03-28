module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');

	sequelize.define('company', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		name: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: false,
		},
		email: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: true,
		},
		phone: {
			allowNull: true,
			type: DataTypes.STRING,
			unique: false,
		},
		website: {
			allowNull: true,
			type: DataTypes.STRING,
			unique: false,
		},
	});
};
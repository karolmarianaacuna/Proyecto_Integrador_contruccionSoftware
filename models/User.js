// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    identificacion: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    nombre_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rol: {
        type: DataTypes.ENUM('Administrador', 'Docente', 'Estudiante'),
        allowNull: false,
    },
    genero: {
        type: DataTypes.ENUM('Masculino', 'Femenino', 'Otro'),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contrasenna: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'usuarios',
    timestamps: false, // Deshabilitar timestamps si no tienes campos `createdAt` y `updatedAt`
});

module.exports = User;

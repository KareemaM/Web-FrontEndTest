const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
    'users',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {
            type: Sequelize.STRING
        },
        lastname: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        month: {
            type: Sequelize.STRING
        },
        day: {
            type: Sequelize.STRING
        },
        year: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING
        },
        zip: {
            type: Sequelize.STRING
        },
    },
    {
        timestamps: false
    }
);


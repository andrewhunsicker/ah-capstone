require('dotenv').config()
const Sequelize = require('sequelize')

const {CONNECTION_STRING} =process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        
        DROP TABLE IF EXISTS users;

        create table users (
            user_id SERIAL PRIMARY KEY,
            username VARCHAR(50),
           first_name VARCHAR(50),
           last_name VARCHAR(50),
           email VARCHAR(50),
           password VARCHAR(500)
        );

        `)
        .then(() => {
            console.log(`DB seeded!`)
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}


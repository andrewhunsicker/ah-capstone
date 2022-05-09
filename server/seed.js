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
        

        create table users (
            user_id SERIAL PRIMARY KEY,
            username VARCHAR(50),
           first_name VARCHAR(50),
           last_name VARCHAR(50),
           email VARCHAR(50),
           password VARCHAR(50)
        );

        INSERT INTO users (username, first_name, last_name, email, password)
        values ('ahunsicker888', 'andrew', 'hunsicker', 'ahunsicker888@gmail.com', 'Andrew888*');
        `)
        .then(() => {
            console.log(`DB seeded!`)
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}


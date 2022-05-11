const bcrypt = require(`bcryptjs`)
const users = []
require('dotenv').config()
const Sequelize = require('sequelize')

const { CONNECTION_STRING } = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
})



module.exports = {
  login: async (req, res) => {
    const { username, password } = req.body
    
   await sequelize.query(`
    SELECT * FROM users WHERE username = '${username}'
    `).then(dbRes => {
      console.log(dbRes[0][0].password)
      if (dbRes[0][0]) {
        const authenticated = bcrypt.compareSync(password, dbRes[0][0].password)
        if (authenticated) {
          let userReturn = { ...dbRes[0][0] }
          delete userReturn.password
          return res.status(200).send(userReturn)
          
          
        }

      }else{res.status(400).send("username or password does not match.")}
    })
   
    
  },

  register: async (req, res) => {
    const { username, email, firstName, lastName, password } = req.body
    const salt = bcrypt.genSaltSync(15)
    const pHash = bcrypt.hashSync(password, salt)
    console.log(`password = ` + password)
    console.log(`salt = ` + salt)
    console.log(`phash = ` + pHash)
     sequelize.query(`
   SELECT * FROM users WHERE username = '${username}';
   `).then(dbRes => {
        if (dbRes[0][0]) {
         res.status(400).send(`user already exists`)
        } else {
        sequelize.query(`
        INSERT INTO users (username, first_name, last_name, email, password)
        values ('${username}', '${firstName}', '${lastName}', '${email}', '${pHash}')
        RETURNING *;
        `)
        .then(dbRes => {
          res.status(200).send(dbRes[0][0])
        }
        )
   } })
          
      
  },
}


const configs = {
  db: {
    username: "infoClientUserDb",
    password: "infoClientUserPwd*!",
    database: "InfoClients",
    host: "db"
  },
  web: {
    url: 'http://localhost',
    port: 8000
  }
}

const globalConfig = {
  JWT_TOKEN: "BitsAmericas"
}

module.exports = { ...globalConfig, configs }
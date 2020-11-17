const env = {
  "username": "cis_admin@cis4375",
  "password": "rootuser;23",
<<<<<<< HEAD
  "database": "diversititechnology",
=======
  "database": "diversitechnologies",
>>>>>>> 52054ad... main DB name
  "host": "cis4375.mysql.database.azure.com",
  "port": 3306,
  "dialect": "mysql",
  "pool": {
      "max": 5,
      "min": 0,
      "acquire": 30000,
      "idle": 10000
    },
    "define": {
      freezeTableName: true,
      timestamps: false
    }
};

module.exports = env;
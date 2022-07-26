const express = require("express");
const pg = require("pg");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://postgres:postgres@my_db:5432/postgres"
);

const tryConnection = async () => {
  const table = Model.init(
    {
      // name: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      quote: {
        type: DataTypes.STRING,
      },
      author: {
        type: DataTypes.STRING,
      },
      created_at: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "quote",
      tableName: "quote",
      timestamps: false,
    }
  );

  const results = await table.findAll();
  console.log("results", results);
  return results;
};

app.get("/", async (req, res) => {
  res.json({ output: "hi" });
});

app.get("/api/test", async (req, res) => {
  console.log("test");
  const results = await tryConnection();
  console.log("results", results);
  res.json({ output: results });
});

app.listen("3002", () => {});
// Example for postgres

// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// });

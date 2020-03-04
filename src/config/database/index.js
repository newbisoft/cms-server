require("dotenv/config");
module.exports = {
    username: process.env.DATA_DB_USER || "root",
    password: process.env.DATA_DB_PASS || "",
    database: process.env.DB_DATABASE || "cms",
    host: process.env.DATA_DB_HOST || "localhost",
    port: process.env.DATA_DB_PORT || "",
    dialect: "postgres",
    underscored: true,
    timestamps: true
  };
  
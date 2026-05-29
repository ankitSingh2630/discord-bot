require("dotenv").config();

const app = require("./src/app");
const sequelize = require("./src/config/db");

const User= require("./src/models/User");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database Connected");

    await sequelize.sync();
    console.log("Tables Created");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Database connection failed:", err);
    process.exit(1); 
  }
};

startServer();
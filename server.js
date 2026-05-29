require("dotenv").config();

const app = require("./src/app");
const sequelize = require("./src/config/db");

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
.then(() => {

   console.log("Database Connected");

   app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
   });

})
.catch((err) => {
   console.log(err);
});
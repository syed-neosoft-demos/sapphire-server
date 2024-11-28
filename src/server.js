import app from "./app.js";
import sequelize from "./config/sequelize.js";

//CONNECT DATABASE
sequelize
  .authenticate()
  .then(async () => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log(error?.message);
  });

//START SERVER
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

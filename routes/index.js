const path = require("path")
const router = require("express").Router();
const databaseRoutes = require("./database");

router.use("/api", databaseRoutes);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, './app/build/index.html'));
});

module.exports = router;
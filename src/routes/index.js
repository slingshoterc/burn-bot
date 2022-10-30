const express = require("express");
const tokenCtrl = require("../controllers/token");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Success"
  });
});

router.use("/tokens", tokenCtrl.getTokens);
router.use("/token/:token", tokenCtrl.getToken);

module.exports = router;

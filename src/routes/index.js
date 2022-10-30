const express = require("express");
const tokenCtrl = require("../controllers/token");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Success"
  });
});

router.get("/tokens", tokenCtrl.getTokens);
router.get("/tokens/:token", tokenCtrl.getToken);

module.exports = router;

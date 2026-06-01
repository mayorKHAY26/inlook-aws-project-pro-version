const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const {
  getInbox,
  getSentMail,
  getDrafts,
  sendMail,
  saveDraft
} = require("../controllers/mailController");

const router = express.Router();

router.get("/inbox", authMiddleware, getInbox);
router.get("/sent", authMiddleware, getSentMail);
router.get("/drafts", authMiddleware, getDrafts);
router.post("/send", authMiddleware, sendMail);
router.post("/draft", authMiddleware, saveDraft);

module.exports = router;
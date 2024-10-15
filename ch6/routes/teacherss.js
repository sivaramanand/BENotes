import express from "express";
const router = express.Router();

router.get("/all", (req, res) => {
  res.send("all teacher");
});
router.post("/create", (req, res) => {
  res.send("new student created");
});
router.put("/update", (req, res) => {
  res.send("teacher updated");
});
router.delete("/delete", (req, res) => {
  res.send("teacher deleted");
});

export default router;

const router = require("express").Router();

const Goal = require("../models/Goal");

router.post("/", async (req, res) => {

  const goal = await Goal.create(req.body);

  res.json(goal);
});

router.get("/", async (req, res) => {

  const goals = await Goal.find();

  res.json(goals);
});

router.patch("/:id/approve", async (req, res) => {

  const updatedGoal = await Goal.findByIdAndUpdate(
    req.params.id,
    {
      status: "approved"
    },
    {
      new: true
    }
  );

  res.json(updatedGoal);
});

module.exports = router;
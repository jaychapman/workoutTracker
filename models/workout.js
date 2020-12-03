const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { type: Date, required: true },
  exercises: [
    {
      type: {
        type: String
      },
      name: {
        type: String,
        required: "Enter the exercise name"
      },
      duration: {
        type: Number,
        required: "How long (in minutes) did you exercise"
      },
      weight: {
        type: Number,
        required: "How much weight did you use?"
      },
      reps: {
        type: Number,
        required: "How many reps did you perform?"
      },
      sets: {
        type: Number,
        requried: "How many sets did you do?"
      }
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
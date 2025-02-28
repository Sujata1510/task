import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,

  },
  password: {
    type: String,
    required: true,
    min: [6, "Password must be at least 6 characters"],
    max: [12, "Password must be at most 12 characters"],
  },
  age: {
    type: Number,
    required: true,

  },
  course_enrolled: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

const Student = mongoose.model("Student", studentSchema);

export default Student;
import Student from '../models/Student.js';
import bcrypt from 'bcrypt';

export const getAllStudents = (req, res) => {
  return res.status(200).json({
    message: "Hello"
  })

}

export const loginStudent = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isExist = await Student.findOne({ email });
    if (!isExist) {
      return res.status(400).json({
        message: "User does not exist"
      });
    }
    return res.status(200).json({
      message: "Successfully logged in"
    });
  } catch (error) {
    return res.status(400).json({ message: `${error}` });
  }

}
export const registerStudent = async (req, res) => {
  const { email, password, username, age, course_enrolled } = req.body;
  try {
    const isExist = await Student.findOne({ email });
    if (isExist) {
      return res.status(400).json({
        message: "User already exists!!"
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    await User.create({
      email,
      password: hashPassword,
      username,
      age,
      course_enrolled
    });
    return res.status(200).json({
      message: "Successfully logged in"
    });
  } catch (error) {
    return res.status(400).json({ message: `${error}` });
  }

}
let courses = require("./../data/courses");
const { validationResult } = require("express-validator");

const getcourses = (req, res) => {
  res.json(courses);
};

const getcourse = (req, res) => {
  const id = req.params.id;
  const course = courses.find((course) => course.id == id);
  res.json(course);
};
const addcourse = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  courses.push({ id: courses.length + 1, ...req.body });
  res.status(200).json(courses);
};

const updatecourse = (req, res) => {
  const id = req.params.id;
  let course = courses.find((course) => course.id == id);
  if (!course) {
    return res.status(404).json("course not found");
  }
  course = { ...course, ...req.body };
  res.json(course);
};
const deletecourse = (req, res) => {
  let id = req.params.id;
  courses = courses.filter((course) => {
    return course.id != id;
  });
  res.json("deleted");
};
module.exports = {
  getcourses,
  getcourse,
  addcourse,
  updatecourse,
  deletecourse,
};

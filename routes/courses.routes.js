const express = require("express");
const router = express.Router();

const coursecontroller = require("./../controllers/courses.controllers");
const { validationSchema } = require("../middlewares/validationSchema.js");

router
  .route("/")
  .get(coursecontroller.getcourses)
  .post(validationSchema(), coursecontroller.addcourse);

router
  .route("/:id")
  .get(coursecontroller.getcourse)
  .patch(coursecontroller.updatecourse)
  .delete(coursecontroller.deletecourse);

module.exports = router;

const crypto = require('crypto');
const mailSender = require('../utils/mailSender');
const { buyCourseEmailTemplate } = require('../mail/templates/courseEnrollmentEmail');
require('dotenv').config();

const User = require('../models/user');
const Course = require('../models/course');
const CourseProgress = require("../models/courseProgress")


const { default: mongoose } = require('mongoose')


exports.sendCourseBuyEmail = async (req, res) => {
    const { courseId, firstName, lastName, } = req.body;
    const { email, id } = req.user;

    if (!courseId || !id) {
        return res.status(400).json({ success: false, message: "Please provide all the fields" });
    }

    try {
        // find student
        const enrolledStudent = await User.findById(id);
        // console.log("enrolledStudent = ", enrolledStudent)

        // find course
        const courseDetails = await Course.findById(courseId)
        // console.log("courseDetails = ", courseDetails)
        const { courseName, instructor } = courseDetails

        // find instructor
        // const instructorDetails = await User.findById(instructor);
        // console.log("instructorDetails = ", instructorDetails)
        // const { firstName, lastName, email } = instructorDetails


        await mailSender(
            enrolledStudent.email,
            `Course Registered successfully`,
            buyCourseEmailTemplate(`${enrolledStudent.firstName}`, `${enrolledStudent.lastName}`, courseName)
        )

        return res.status(200).json({
            success: true,
            message: 'Course Registered successfully'
        })
    }
    catch (error) {
        console.log("error in sending mail", error)
        return res.status(500).json({ success: false, message: "Could not send email" })
    }
}


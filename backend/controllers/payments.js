const mailSender = require('../utils/mailSender');
const { buyCourseEmailTemplate } = require('../mail/templates/courseEnrollmentEmail');
require('dotenv').config();

const User = require('../models/user');
const Course = require('../models/course');
const CourseProgress = require("../models/courseProgress")




exports.sendCourseBuyEmail = async (req, res) => {
    try {

        const { courseId, firstName, lastName, } = req.body;
        const { email, id } = req.user;

        if (!courseId || !id) {
            return res.status(400).json({ success: false, message: "Please provide all the fields" });
        }


        const enrolledCourse = await Course.findOneAndUpdate(
            { _id: courseId },
            { $push: { studentsEnrolled: id } },
            { new: true },
        )

        if (!enrolledCourse) {
            return res.status(500).json({ success: false, message: "Course not Found" });
        }
        // console.log("Updated course: ", enrolledCourse)

        // Initialize course preogres with 0 percent
        const courseProgress = await CourseProgress.create({
            courseID: courseId,
            userId: id,
            completedVideos: [],
        })


        // find student
        // Find the student and add the course to their list of enrolled courses
        const enrolledStudent = await User.findByIdAndUpdate(
            id,
            {
                $push: {
                    courses: courseId,
                    courseProgress: courseProgress._id,
                },
            },
            { new: true }
        )



        const { courseName, instructor } = enrolledCourse

        await mailSender(
            enrolledStudent.email,
            Course Registered successfully,
            buyCourseEmailTemplate(${enrolledStudent.firstName}, ${enrolledStudent.lastName}, courseName)
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
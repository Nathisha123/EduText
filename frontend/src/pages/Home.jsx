import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux';

import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import TimelineSection from '../components/core/HomePage/TimelineSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ReviewSlider from '../components/common/ReviewSlider'
import Course_Slider from '../components/core/Catalog/Course_Slider'

import { getCatalogPageData } from '../services/operations/pageAndComponentData'

import { MdOutlineRateReview } from 'react-icons/md'

// images
import studentWithTable from '../assets/Images/student-with-table.png'
//import profileImg from '../assets/Images/profile-img.webp'
import manImg from '../assets/Images/man.png'


// icons
import { FaLaptop, FaCloud, FaTwitter, FaLinkedin, FaRegCalendarAlt, FaBell } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { MdKeyboardArrowRight } from "react-icons/md";



const Card = ({ title, description, icon: Icon, link }) => {
    return (
        <Link to={link}
            className='flex flex-col gap-4 max-w-[300px] bg-white text-black text-lg rounded-xl p-5 hover:bg-purple-800 hover:text-white duration-300'
        >
            <div className='flex gap-4 items-center  '>
                <Icon />
                <p>{title}</p>
            </div>
            <p className='text-xs'>{description}</p>
            <p className='text-xs flex gap-2 items-center'>
                Learn More <MdKeyboardArrowRight />
            </p>
        </Link>


    )
}


const InstructorCard = ({ name, role,profileImg }) => {
    return (
        <div
            className='flex flex-col gap-3 max-w-[240px] items-center justify-center bg-purple-50 text-black text-xs rounded-xl p-5 shadow-md hover:shadow-2xl duration-300'
        >
            <img
                src={profileImg}
                className='rounded-full w-32 '
                alt='profile'
            />
            <div className='text-center'>
                <p>{name}</p>
                <p className='text-purple-800 font-semibold'>{role}</p>
            </div>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, cumque.</p>
            <div className='flex gap-4'>
                <FaTwitter />
                <FaLinkedin />
            </div>
        </div>
    )
}

const Home = () => {


    // get courses data
    const [CatalogPageData, setCatalogPageData] = useState(null);
    const categoryID = "6506c9dff191d7ffdb4a3fe2" // hard coded
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCatalogPageData = async () => {

            const result = await getCatalogPageData(categoryID, dispatch);
            setCatalogPageData(result);
            // console.log("page data ==== ",CatalogPageData);
        }
        if (categoryID) {
            fetchCatalogPageData();
        }
    }, [categoryID])




    return (
        <div className='px-5 sm:px-10 '>
            {/*Section1  */}
            <div className='mt-[30px] relative mx-auto flex flex-col sm:flex-row justify-between   items-center text-white '>
                {/* left part */}
                <div className='flex flex-col gap-5'>
                    <h1 className='text-3xl sm:text-7xl max-w-2xl  2xl:max-w-4xl font-bold leading-[45px] sm:leading-[90px]'>
                        <span className='text-purple-800'>Let&apos;s</span> Explore
                        A <span className='text-purple-800'>Magical </span>
                        Way To <span className='text-purple-800'>learn</span>
                    </h1>
                    <p>
                        Provide you with latest online learning system and <br />material that help your knowledge growing
                    </p>
                    <div className='flex gap-5 items-center'>
                        <CTAButton linkto={"/signup"}>
                            Get Started
                        </CTAButton>

                        {/* <Link to="/signup">
                            <div className='bg-purple-50 text-purple-800 text-center text-[13px] px-6 py-3 rounded-md font-bold hover:scale-95 transition-all duration-200 '>
                                Get Free Trial
                            </div>
                        </Link> */}
                    </div>
                </div>

                {/* right image */}
                <div>
                    <img
                        src={studentWithTable}
                        className='xl:w-[500px] xl:h-[500px] '
                        alt='student With Table'
                    />
                </div>
            </div>


            {/* section 2 */}
            <div className='my-[130px] relative mx-auto flex flex-col gap-7 justify-center  items-center text-white '>
                <h3 className='text-2xl sm:text-4xl text-center font-semibold capitalize '>
                    The <span className='text-purple-800'>best</span> platform <br />
                    to learn something online
                </h3>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
                <Card title='Web Development' description='Classes in development that cover the most recent advancements in web' icon={FaLaptop} link='/catalog/web-developement' />
                    <Card title='Android Development' description='Lessons on design that cover most recent developments' icon={DiAndroid} link='/catalog/android-developement' />
                    <Card title='AWS Cloud' description='AWS cousrses that cover the most recent in cloud' icon={FaCloud} link='/catalog/aws' />
                </div>
            </div>

            {/*Section 3 */}
            <div className='relative p-5 sm:py-0 mx-auto flex flex-col sm:flex-row justify-between gap-10  items-center rounded-2xl bg-purple-50 text-black shadow-xl'>
                {/* left image */}
                <div>
                    <img
                        src={manImg}
                        className='w-full h-full'
                        alt='student With Table'
                    />
                </div>

                <div className='flex flex-col gap-8'>
                    <h2 className='text-4xl font-semibold capitalize '>
                        Take your <span className='text-purple-800'>learning <br /> experience</span> to the next level
                    </h2>

                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center gap-5'>
                            <div className='bg-purple-800 text-white text-4xl p-3 rounded-xl'><FaRegCalendarAlt /></div>
                            <div className=''>
                                <p className='font-semibold'>Direct Scheduling</p>
                                <p className='text-richblack-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate delectus minima tempore.</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-5'>
                            <div className='bg-caribbeangreen-100 text-white text-4xl p-3 rounded-xl'><FaBell /></div>
                            <div className=''>
                                <p className='font-semibold'>Reminders</p>
                                <p className='text-richblack-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate delectus minima tempore.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* section 4 */}
            <div className='my-[80px] relative mx-auto flex flex-col gap-3 justify-center  items-center text-white '>
                <p className='text-lg text-purple-800 '>Tutors</p>
                <h3 className='text-2xl font-semibold'>Meet the Instructors</h3>
                <p className='text-sm text-center text-richblack-200'>
                    On Ed-Circle,inctructors from all over the world instruct million of students. <br />
                    We offer the knowledge and abilities
                </p>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-7'>
                    <InstructorCard name='Siddesh Patil' role='Application Support Lead' icon={FaLaptop} pro profileImg ={"data:image/jpeg;base64,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"} />
                    <InstructorCard name='Om raje' role='Career Educator' icon={DiAndroid}  profileImg={"https://www.google.com/imgres?q=instructor%20pics&imgurl=https%3A%2F%2Fwww.usnews.com%2Fobject%2Fimage%2F00000142-9263-d33c-abc6-ff77dfba0024%2F37985FE_DA_20130207_onlinemistakes-slide8.jpg%3Fupdate-time%3D1421878595148%26size%3Dresponsive640&imgrefurl=https%3A%2F%2Fwww.usnews.com%2Feducation%2Fonline-education%2Farticles%2F2015%2F01%2F23%2F6-signs-of-a-bad-online-instructor&docid=35pE8cST6461dM&tbnid=PbWoheLwndLrEM&vet=12ahUKEwiKi7-t96-GAxXkzQIHHUTPB7IQM3oECHYQAA..i&w=640&h=420&hcb=2&ved=2ahUKEwiKi7-t96-GAxXkzQIHHUTPB7IQM3oECHYQAA"}/>
                    <InstructorCard name='Kiran Gaikwad' role='Senior Full Stack Developer' icon={FaCloud} profileImg={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbSaTjY-2mu3Zq0ufV3ewFiooHcgj4pPLDKA&s"} />
                    <InstructorCard name='Yash Deshmukh' role='AWS Architecture' icon={FaCloud} profileImg={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAOPNztbXUfV_p7pN0t4HCCWXnOZ04W_zdQ&s"} />
                </div>
            </div>


            {/* animated code */}
            <div className='relative mx-auto flex flex-col  items-center text-white justify-between'>
                {/* Code block 1 */}
                <div className=''>
                    <CodeBlocks
                        position={"lg:flex-row"}
                        heading={
                            <div className='text-3xl lg:text-4xl font-semibold'>
                                Unlock Your
                                <HighlightText text={"coding potential "} />
                                with our online courses
                            </div>
                        }
                        subheading={
                            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                        }
                        ctabtn1={
                            {
                                btnText: "try it yourself",
                                linkto: "/signup",
                                active: true,
                            }
                        }
                        ctabtn2={
                            {
                                btnText: "learn more",
                                linkto: "/login",
                                active: false,
                            }
                        }

                        codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
                        codeColor={"text-yellow-25"}
                        backgroundGradient={"code-block1-grad"}
                    />
                </div>


                {/* Code block 2 */}
                <div>
                    <CodeBlocks
                        position={"lg:flex-row-reverse"}
                        heading={
                            <div className="w-[100%] text-3xl lg:text-4xl font-semibold lg:w-[50%]">
                                Start
                                <HighlightText text={"coding in seconds"} />
                            </div>
                        }
                        subheading={
                            "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                        }
                        ctabtn1={{
                            btnText: "Continue Lesson",
                            link: "/signup",
                            active: true,
                        }}
                        ctabtn2={{
                            btnText: "Learn More",
                            link: "/signup",
                            active: false,
                        }}
                        codeColor={"text-white"}
                        codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
                        backgroundGradient={"code-block2-grad"}
                    />
                </div>

                {/* course slider */}
                <div className='mx-auto box-content w-full Tab px- py-12'>
                    <h2 className='text-white mb-6 text-2xl '>
                        Popular Picks for You 🏆
                    </h2>
                    <Course_Slider Courses={CatalogPageData?.selectedCategory?.courses} />
                </div>
                <div className=' mx-auto box-content w-full Tab px- py-12'>
                    <h2 className='text-white mb-6 text-2xl '>
                        Top Enrollments Today 🔥
                    </h2>
                    <Course_Slider Courses={CatalogPageData?.mostSellingCourses} />
                </div>


            </div>

            {/*Section 2  */}
            <div className='bg-pure-greys-5 text-richblack-700 '>
                <div className='mx-auto  flex flex-col items-center justify-between gap-7'>

                    <TimelineSection />


                </div>
            </div>


            {/*Section 3 */}
            <div className='mt-14 mx-auto  flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>
                <InstructorSection />

                {/* Reviws from Other Learner */}
                <h1 className="mt-20 text-center text-3xl lg:text-4xl font-semibold flex justify-center items-center gap-x-3">
                    Reviews from other learners <MdOutlineRateReview className='text-yellow-25' />
                </h1>
                <ReviewSlider />
            </div>

            {/*Footer */}
            <Footer />
        </div >
    )
}

export default Home

import { toast } from "react-hot-toast";
import { studentEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";


const { COURSE_BUY_EMAIL_API } = studentEndpoints;



// ================ Buy Course ================ 
export function buyCourse(token, courseId, email, firstName, lastName,) {
    return async () => {

        const toastId = toast.loading("Loading...");

        try {
            const response = await apiConnector("POST", COURSE_BUY_EMAIL_API, {
                courseId, firstName, lastName,
            }, { Authorization: `Bearer ${token}`, })

            // console.log("COURSE PAYMENT API RESPONSE ---> ", response)

            if (!response.data.success) {
                throw new Error(response.data.message);
            }

            toast.success("Email sent Successfully");
        } catch (error) {
            console.log("COURSE PAYMENT API ERROR --> ", error);
            toast.error(error.response.data?.message);
        }
        toast.dismiss(toastId);
    }
}
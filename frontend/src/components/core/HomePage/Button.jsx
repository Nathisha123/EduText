import { Link } from "react-router-dom"

const Button = ({ children, linkto, otherStyles }) => {
  return (
    <Link to={linkto}>

      <div className={`bg-purple-800 text-white text-center text-[13px] px-6 py-3 rounded-md font-bold
         hover:scale-95 transition-all duration-200 ${otherStyles} `}
      >
        {children}
      </div>

    </Link>
  )
}

export default Button

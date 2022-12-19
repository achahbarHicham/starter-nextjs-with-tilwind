import Link from "next/link"

const MainLink = ({href,textLink}) => {
  return (
    <Link 
    href={href}
    className="hover:text-indigo-300"
    >
      {textLink}
    </Link>
  )
}

export default MainLink
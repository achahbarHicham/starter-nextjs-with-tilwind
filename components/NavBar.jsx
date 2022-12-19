import Link from "next/link"
import MainLink from "./MainLink"


const NavBar = () => {
  return (
    <header className="bg-black text-white">
        <div className="main-container flex justify-between items-center py-6">
            <div>
                <Link href="/">
                    <h1>LOGO</h1>
                </Link>
                
            </div>
            <nav>
                <ul className="flex space-x-4 md:space-x-8 lg:space-x-12">
                    <li>
                        <MainLink href="/" textLink="Home" />
                    </li>
                    <li>
                        <MainLink href="/about" textLink="About" />
                    </li>
                    <li>
                        <MainLink href="/events" textLink="Events" />
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default NavBar
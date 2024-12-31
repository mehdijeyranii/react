import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-start items-center gap-4 h-14 bg-gray-800 p-5">
            <span className="text-2xl">
                Learn<strong className="text-rose-400">React</strong>
            </span>
            <div className="w-[1px] h-7 bg-gray-400"></div>
            <nav className="flex justify-start items-center gap-4">
                <Link to="/">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;

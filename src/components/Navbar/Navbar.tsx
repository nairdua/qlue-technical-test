import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-red-600 p-4 shadow-md">
            <div className="flex items-center flex-no-shrink text-white mr-6">
                <Link to="/">
                    <span className="text-xl tracking-tight">
                        <span className="font-bold">Sample</span>
                        <span className="font-light">Dash</span>
                    </span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;
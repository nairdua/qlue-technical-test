import Container from "../Container/Container";
import { Link } from "react-router-dom";

const buttonStyle = "bg-neutral-200 p-16 mr-2 rounded"

function HomePage() {
    return (
        <div>
            <Container>
                <div className="mb-4">
                    <span className="text-4xl text-gray-700">Home</span>
                </div>
                <div className="flex flex-row">
                    <Link to="/users">
                        <button className={buttonStyle}>
                            Users
                        </button>
                    </Link>
                    <Link to="/Posts">
                        <button className={buttonStyle}>
                            Posts
                        </button>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default HomePage;
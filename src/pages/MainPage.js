import { Link } from "react-router-dom";

function MainPage() {
    return (
        <div>
            <Link to="/Chats">Chats</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/">MainPage</Link>
        </div>
    );
}

export default MainPage;

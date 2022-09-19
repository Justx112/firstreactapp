import { Link } from "react-router-dom";

function MainPage() {
    return (
        <div>
            <Link to="/Chats" style={{ Display: 'inline-block', margin:'15px' }}>Chats</Link>
            <Link to="/Profile" style={{ Display: 'inline-block', margin: '15px' }} >Profile</Link>
            <Link to="/" style={{ Display: 'inline-block', margin: '15px' }} >MainPage</Link>
            <Link to="/Users" style={{ Display: 'inline-block', margin: '15px' }} >Users</Link>
        </div>
    );
}

export default MainPage;

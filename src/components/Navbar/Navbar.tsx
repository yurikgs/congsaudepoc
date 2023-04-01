import withAuthorization from '../../layouts/Authentication/withAuthorization';
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
function Navbar () {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        navigate('/login')
    }

    return (
        <div id="Navbar">
            <nav>
                <button className="logout" onClick={handleLogout}>
                    Logout
                </button>
            </nav>
        </div>
    )
} export default withAuthorization(Navbar)
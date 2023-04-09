import { NavbarProps } from '../../common/props/navbar-props';
import Button from '../Button/Button';
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
function Navbar (props: NavbarProps) {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        navigate('/login')
    }
    

    return (
        <div id="navbar-container">
            <nav>
                <h1>
                    {props.title}
                </h1>
                <Button handleClick={handleLogout} text='Sair' classes='' />
            </nav>
        </div>
    )
} export default Navbar
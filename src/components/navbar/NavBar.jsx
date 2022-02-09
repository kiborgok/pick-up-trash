import './nav.css';
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <nav>
            <div className='logo'>
                <p>Pick Up Trash</p>
            </div>
            <ul className='links'>
                <li><Link className='link' to='/'>Home</Link></li>
                <li><Link className='link' to='/admin'>Admin</Link></li>
                <li><Link className='link' to='/about'>About</Link></li>
                <li><Link className='link' to='/contact'>Contact Us</Link></li>
                <li><Link className='link' to='/account'>Account</Link></li>
                <li><Link className='link login-btn' to='/login'>Login</Link></li>
                <li><Link className='link register-btn' to='/register'>Register</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
import './nav.css';
import { Link } from 'react-router-dom';

function NavBar({user}){
    return(
        <nav>
            <div className='logo'>
                <p>Pick Up Trash</p>
            </div>
            <ul className='links'>
                <li><Link className='link' to='/'>Home</Link></li>
                {user.client.isAdmin && <li><Link className='link' to='/admin'>Admin</Link></li>}
                <li><Link className='link' to='/about'>About</Link></li>
                <li><Link className='link' to='/contact'>Contact Us</Link></li>
                {user.isLoggedIn && !user.client.isAdmin && <li><Link className='link' to='/account'>Account</Link></li>}
                {user.isLoggedIn && <li className='log-out' onClick={() => window.location.replace("/")}>Log Out</li>}
                {!user.isLoggedIn && <li><Link className='link login-btn' to='/login'>Login</Link></li>}
                {!user.isLoggedIn && <li><Link className='link register-btn' to='/register'>Register</Link></li>}
            </ul>
        </nav>
    );
}

export default NavBar;
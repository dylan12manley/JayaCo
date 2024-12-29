import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <header id='header'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

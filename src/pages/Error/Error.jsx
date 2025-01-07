import { Link } from 'react-router-dom';
import './error.css';

export default function Error() {
  return (
    <main>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to='/'>Go back to the homepage</Link>
    </main>
  );
}

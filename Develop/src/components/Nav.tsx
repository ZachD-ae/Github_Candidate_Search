import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="flex gap-4 p-4 bg-gray-800 text-white">
      <Link to="/">Search Candidates</Link>
      <Link to="/SavedCandidates">Saved Candidates</Link>
    </nav>
  );
};

export default Nav;

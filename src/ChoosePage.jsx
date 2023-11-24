// src/ChoosePage.js
import { Link } from 'react-router-dom';
import dummyData from './dummyData';

function ChoosePage() {
  return (
    <div>
      <h2>Choose a user to display:</h2>
      <ul>
        {dummyData.map((user, index) => (
          <li key={index}>
            <Link to={`/user-info/${index}`}>
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChoosePage;

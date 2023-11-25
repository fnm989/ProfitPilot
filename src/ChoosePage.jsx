import { Link } from 'react-router-dom';
import dummyData from './dummyData';

function ChoosePage() {
  const pageStyle = {
    backgroundImage: 'linear-gradient(to bottom right, rgb(97, 195, 234), rgb(255, 255, 255))',
    minHeight: '100vh', // Ensure the background covers the entire viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={pageStyle}>
      <div>
        <div
          style={{
            backgroundColor: '#007dd9', // Same color as the names boxes
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '10px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ margin: 0, color: 'white' }}>Choose a user to display</h2>
        </div>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {dummyData.map((user, index) => (
            <li key={index} style={{ marginBottom: '10px', textAlign: 'center' }}>
              <Link
                to={`/user-info/${index}`}
                style={{
                  textDecoration: 'none',
                  display: 'inline-block', // Centering the link
                }}
              >
                <div
                  style={{
                    backgroundColor: '#007dd9',
                    padding: '10px', // Increase padding for better hover effect
                    color: 'white',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s', // Add transition for hover effect
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = 'darkblue')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#007dd9')}
                >
                  {user.firstName} {user.lastName}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ChoosePage;

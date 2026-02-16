import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();

  return (
    <div>
      <h1>👤 User Profile</h1>
      <p>You are viewing user: <strong>{id}</strong></p>
    </div>
  );
}

export default User;
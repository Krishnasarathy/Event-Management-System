// YourReactComponent.js

import  { useState, useEffect } from 'react';
import { getUserList } from '../services/user'; // Adjust the import path as per your project structure

const YourReactComponent = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUserList()
      .then(data => setUserList(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {userList.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default YourReactComponent;

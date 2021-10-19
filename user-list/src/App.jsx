import { useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const usersGetHandler = () => {
    setIsLoading(true);
    setTimeout(async () => {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();
      console.log(data.data);
      setUsers(data.data);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className='app'>
      <div className='nav'>
        <button onClick={usersGetHandler}>Get Users</button>
      </div>
      <div className='card-container'>
        {isLoading ? (
          <div>Loading...</div>
        ) : users.length === 0 ? (
          <div>No users</div>
        ) : (
          users.map((user) => (
            <div key={user.id} className='card'>
              <img src={user.avatar} alt='user image' />
              <p>
                {user.first_name} {user.last_name}
              </p>
              <p>{user.email}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;

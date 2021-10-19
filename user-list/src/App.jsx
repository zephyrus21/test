import { useState } from "react";
import "./App.css";
import Spinner from "./spinner.svg";

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
        <div className='logo'>Users List</div>
        <p onClick={usersGetHandler} className='btn'>
          Get Users
        </p>
      </div>
      <div className='card-container'>
        {isLoading ? (
          <img src={Spinner} alt='' />
        ) : users.length === 0 ? (
          <div className='no-users'>No users</div>
        ) : (
          users.map((user) => (
            <div key={user.id} className='card'>
              <img src={user.avatar} alt='user image' />
              <p className='user-name'>
                {user.first_name} {user.last_name}
              </p>
              <p className='user-email'>{user.email}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;

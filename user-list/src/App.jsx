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
      setUsers(data.data);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className='App'>
      <button onClick={usersGetHandler}>Get Users</button>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        users.map((user) => <div key={user.id}>{user.email}</div>)
      )}
    </div>
  );
};

export default App;

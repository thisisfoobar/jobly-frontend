import { BrowserRouter } from "react-router-dom";
import "./App.css";
import JoblyRoutes from "./Routes/JoblyRoutes";
import NavBar from "./NavBar";
import useLocalStorage from "./hooks/useLocalStorage";
import { useState, useEffect } from "react";
import JoblyApi from "./api";

function App() {
  const [token, setToken] = useLocalStorage("jobly-token", null);
  const [username, setUsername] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (token) {
      JoblyApi.token = token;
      // Fetch user data and set currentUser
      async function fetchUser() {
        if (username) {
          try {
            const user = await JoblyApi.getCurrentUser(username);
            setCurrentUser(user);
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        }
      }
      fetchUser();
    }
  }, [token]);

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar
          currentUser={currentUser}
          setUsername={setUsername}
          setCurrentUser={setCurrentUser}
          setToken={setToken}
        />
        <JoblyRoutes setToken={setToken} setUsername={setUsername} currentUser={currentUser} setCurrentUser={setCurrentUser} />
      </BrowserRouter>
    </div>
  );
}

export default App;

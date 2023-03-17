import { createContext, useContext, useState} from "react"

export const userContext = createContext({});

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

function UserContextProvider({children}) {

    const [user, setUser] = useState(null);

    // fetch user data
    const fetchUser = async (user) => {

      const response = await fetch(`${GITHUB_URL}/users/${user}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }})

      const data = await response.json();

      setUser(data);
    };


  return (
    <userContext.Provider value={{user, setUser, fetchUser}}>
        {children}
    </userContext.Provider>
  )
}

export default UserContextProvider
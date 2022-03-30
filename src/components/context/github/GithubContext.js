import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";


 const GithubContext = createContext()

 const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
 const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

 export const GitHubProvider = ({ children }) => {

    
    // let [users, setUsers] = useState([]);
    // let [loading, setLoading] = useState(true);

    const initialState = {
        users: [],
        loading: true
    }

    // const [state, dispatch] = useReducer(githubReducer, initialState)
    const [{ users, loading }, dispatch] = useReducer(githubReducer, initialState);

    const fetchUsers = async () => {
       const response = await fetch(
         `${ GITHUB_URL}/users`,
         {
           headers: {
             Authorization: `token ${GITHUB_TOKEN}`,
           },
         }
       );

       const data = await response.json();
       dispatch({
           type: 'GET_USERS',
           payload: data
       })
    //    setUsers(data);
    //    setLoading(false);
    };

    return <GithubContext.Provider value={{ users, loading, fetchUsers }}>
        {children}
    </GithubContext.Provider>
 }

 export default GithubContext;
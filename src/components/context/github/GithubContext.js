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
        user: {},
        loading: false
    }

    // const [state, dispatch] = useReducer(githubReducer, initialState)
    const [{ users, user, loading }, dispatch] = useReducer(githubReducer, initialState);

    // Search users
    const searchUsers = async (text) => {
        setLoading()

        
        const params = new URLSearchParams({
            q: text
        })

       const response = await fetch(
         `${GITHUB_URL}/search/users?${params}`,
         {
           headers: {
             Authorization: `token ${GITHUB_TOKEN}`,
           },
         }
       );

       const { items } = await response.json();

       dispatch({
         type: "GET_USERS",
         payload: items,
       });

      
    };


    // Get a single user
    const getUsers = async (login) => {
       setLoading();

       const response = await fetch(`${GITHUB_URL}/users/${login}`, {
         headers: {
           Authorization: `token ${GITHUB_TOKEN}`,
         },
       });

       if(response.status === 404){
         window.location = '/notfound'
       } else {

         const  data = await response.json()
         dispatch({
           type: "GET_USERS",
           payload: data,
         });
       }
    };


    const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });
    const setLoading = () => dispatch({ type: 'SET_LOADING' });

    return (
      <GithubContext.Provider value={{ users, user, loading, searchUsers, clearUsers  }}>
        {children}
      </GithubContext.Provider>
    );
 }

 export default GithubContext;
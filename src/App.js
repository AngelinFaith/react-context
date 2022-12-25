
import { useContext } from 'react';
import Home from './Components/Home.js';
import Auth from './Firebase-auth/Components/Auth.js';
import UserContext from './userContext';


function App() {
  // Get the data from the context using createContext().
  // const user= useContext(UserContext);
  return (
    // Pass the value to all the childcomponent which is inside the provider. We need to useContext hooks again
    // to fetch the data from the context in the required child component where we need the data.
    // <UserContext.Provider value={user}>
      <div className="App"> 
        {/* <Home /> */}
        <Auth/>
      </div>
    // </UserContext.Provider>
  );
}

export default App;

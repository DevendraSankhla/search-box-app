import React from "react";
import SearchBar from "./SearchBar";
import userData from "../data.json"
import Heading from "./Heading";

function App(){
const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/") 
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  console.log(data);
    return(
        <div className="App">
            <Heading />
            <SearchBar placeholder="Search users by ID, name, Address..." data={userData}/>
        </div>
    );
}

export default App;
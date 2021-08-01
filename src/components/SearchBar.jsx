import React, { useState } from "react"
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

function SearchBar({placeholder, data}){
    const[filteredData, setFilteredData]=useState([]);
    const[wordSearched, setWordSearched]=useState("");
    function HandleChange(event){
        const searchInput=event.target.value;
        setWordSearched(searchInput);
        const newFilteredData = data.filter((user)=>{
            return Object.values(user).join(" ").toLowerCase().includes(searchInput.toLowerCase());
        });
        searchInput===""?setFilteredData([]): setFilteredData(newFilteredData);
    }
    function clearFilterArray(){
        setFilteredData([]);
        setWordSearched("");
    }
    const KeyboardNavigation=(e)=>{
        console.log(e.name);
    }
    return (
        <div className="search">
            <div className="searchInputs">
                <div className="searchIcon"><SearchIcon/></div>
                <input type="text" placeholder={placeholder} onChange={HandleChange} value={wordSearched}></input>
                <div className="closeIcon"><CloseIcon id="clearBtn" onClick={clearFilterArray} onkeydown={e=>KeyboardNavigation(e)}/></div>
            </div>
            {filteredData.length!=0 &&
            (<div className="dataResult">
                {filteredData.map(user=>{
                    return (
                        <div className="dataItem">
                            <div className="userID">
                                <p><b>{user.id}</b></p>
                            </div>
                            <div clasName="userName">
                                <p>{user.name}</p>
                            </div>
                            <div clasName="userAddress">
                                <p>{user.address}</p>
                            </div>
                            <hr></hr>
                        </div>
                    );
                })}
            </div>)
            }
        </div>
    );
}

export default SearchBar;
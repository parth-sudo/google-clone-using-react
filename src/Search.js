import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {useStateValue} from "./StateProvider";
import { actionTypes} from "./reducer";

function Search({hideButtons = false}) {
   const [{}, dispatch] = useStateValue();
  // creating state to keep track of variable input.
  const [input, setInput] = React.useState(""); // initially blank.
  const history = useHistory();

  const search = (e) => {
    e.preventDefault(); // on refresh, does'nt do anything weird.
    console.log("You hit search.");

    dispatch({
        type : actionTypes.SET_SEARCH_TERM, // push it into the search bar.
        term : input,
    })

    history.push("/search"); // redirects to search.
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />

        <input value={input} onChange={(e) => setInput(e.target.value)} />

        <BeachAccessIcon />
      </div>
      
      {/* if buttons are not hidden/hidden */}
      {!hideButtons ? (
           <div className="search__Buttons">
           <Button type="submit" onClick={search} variant="outlined">
             PGoogle Search
           </Button>
   
           <Button variant="outlined"> I am not lucky.</Button>
         </div>

      ): (
        <div className="search__Buttons">
        <Button className="search__ButtonsHidden" type="submit" onClick={search} variant="outlined">
          PGoogle Search
        </Button>

        <Button className="search__ButtonsHidden" variant="outlined"> A little sprinkle of luck</Button>
      </div>

      )}
     

    </form>
  );
}

export default Search;

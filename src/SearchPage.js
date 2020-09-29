import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "./Search.js";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue(); // term=> whatever input you enter. and pull the data layer.

  // LIVE API CALL.
    const {data} = useGoogleSearch(term); // pass the term into the custom hook for search results.

  // mock api call.
//   const data = Response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="logo."
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />
        </div>
      </div>

      {/* main thing below (shows links of the data we pulled). */}
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About 10 results in 0.05 seconds for {term}
          </p>

          {data?.items.map((item) => (

            <div className="searchPage__result">

              <a href={item.link} className="searchPage__resultTitle">
                <h2> {item.title}  &#128512; </h2>
              </a>

              {/* <a >{item.displayLink}</a> */}

              <p className="searchPage__resultSnippet"> {item.snippet} </p>
            </div>

          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;

import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from './Search';


function Home() {
  return (
    <div className="home">
      {/* <h1> This is Homepage. </h1> */}

      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about"> About </Link>
          <Link to="/store"> Store</Link>
        
        </div>

        <div className="home__headerRight">
          <Link to="/gmail"> Gmail</Link>
          <Link to="/images"> Images</Link>

          <AppsIcon />
          <Avatar />

        </div>
      </div>

      <div className="home__body">
        
        <img src="https://myfonts-wtf.s3.amazonaws.com/6e/6e2bec2e3e6e8af63f31b11ae70dc6e7.14021.png" />
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
        
        <div className="home__inputContainer"> 
         {/* search bar */}
         <Search />
        </div>

      </div>
    </div>
  );
}

export default Home;

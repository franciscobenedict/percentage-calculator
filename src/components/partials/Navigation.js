import React, {
} from 'react';
// import { Link } from "react-router-dom";
import fbLogo from '../../assets/fb-logo-white-header.svg';
// import { ReactNavbar } from "react-responsive-animate-navbar";

const Navigation = () => {

  return (
    <>

      <header className="header align_middle_container">
        <div className="fbLogo"><img src={fbLogo} alt="" /></div>
        <div className="links_holder align_content_middle align_middle_container">
          <a className="align_content_middle" href="http://www.react.franciscobenedict.com/" rel="noopener noreferrer">Home</a>
          <a className="align_content_middle" href="https://github.com/franciscobenedict/percentage-calculator" target="_blank" rel="noopener noreferrer">Github</a>
          {/*<Link className="align_content_middle" to="/percentagecalculator">Percentage calculator</Link>*/}
        </div>
      </header>


      {/*
      <ReactNavbar
        color="rgb(51, 51, 51)"
        logo={fbLogo}
        menu={[
          { name: "HOME", to: "/" },
          { name: "PERCENTAGE", to: "/percentagecalculator" }
        ]}
        social={[]}
      />
      */}
    </>
  );
}

export default Navigation;

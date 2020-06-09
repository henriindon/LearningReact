import React from "react";
import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div className="jumbotron">
      <h1>Pluralsight Administration</h1>
      <p>React Home Page Testing</p>
      <Link to="about" className="btn btn-primary">
        About Page
      </Link>
    </div>
  );
}

export default HomePage;

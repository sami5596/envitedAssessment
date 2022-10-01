import * as React from "react";
import "./homepage.css";
import LandingPageImage from "../../assets/homepage/landing-page.svg";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

export default function LandingPage(props) {
  return (
    <div className="home-root">
      <Grid container spacing={2}>
      <Grid item xs={false} lg={1} xl={3}></Grid>
      <Grid item xs={12} lg={5} xl={3}>
          <div className="landing-image">
            <LandingPageImage />
          </div>
        </Grid>
        <Grid item xs={12} lg={5} xl={3}>
          <div className="container">
            <div className="sub-container">
              <div>
                <h1 className="main-heading">
                  Imagine if <p className="styled-text">Snapchat</p> had events
                </h1>
              </div>
              <div>
                <p className="sub-text">
                  Easily host and share events with your friends across any
                  social media.
                </p>
              </div>
              <div className="button-container">
                <Link to="/create">
                  <button className="create-button">
                    <p className="button-text">&#127881; Create my event</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={false} lg={1} xl={3}></Grid>
      </Grid>
    </div>
  );
}

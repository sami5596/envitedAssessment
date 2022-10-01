import * as React from "react";
import Grid from "@mui/material/Grid";
import EventImage from "../../assets/eventpage/birthday-cake.png";
import "./event.css";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import { FiChevronRight } from "react-icons/fi";

export default function Event(props) {
  return (
    <div className="event-root">
      <Grid container spacing={2}>
        <Grid item xs={false} lg={1} xl={3}></Grid>
        <Grid item xs={12} lg={5} xl={3}>
          <div>
            <h1 className="event-name">Birthday Bash</h1>
          </div>
          <div>
            <p className="host-name">
              Hosted by <strong>Elysia</strong>
            </p>
          </div>
          <div className="details-container-root">
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <div className="icon">
                  <IoCalendarOutline size={35} />
                </div>
              </Grid>
              <Grid item xs={8}>
                <div className="details">
                  <div className="details-container">
                    <p className="details-text-from">18 August 6:00PM</p>
                    <p className="details-text-to">
                      to <strong>19 August 1:00PM</strong> UTC +10
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={2}>
                <div className="arrow-container">
                  <div className="arrow">
                    <FiChevronRight size={25} />
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={2} className="address-container">
              <Grid item xs={2}>
                <div className="icon">
                  <IoLocationOutline size={35} />
                </div>
              </Grid>
              <Grid item xs={8}>
                <div className="details">
                  <div className="details-container">
                    <p className="details-text-from">Street name</p>
                    <p className="details-text-to">Suburb, State, Postcode</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={2}>
                <div className="arrow-container">
                  <div className="arrow">
                    <FiChevronRight size={25} />
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} lg={6} xl={6}>
          <div>
            <img
              src={EventImage}
              alt="Birthday Cake"
              width={500}
              height={500}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

import * as React from "react";
import "./create.css";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import Autocomplete from "@mui/material/Autocomplete";

export default function CreateEvent(props) {
  return (
    <div className="create-root">
      <Grid container spacing={2} className="form-container">
        <Grid item xs={1} xl={4} lg={4} md={2}></Grid>
        <Grid item xs={10} xl={4} lg={4} md={8}>
          <h1 className="create-event-heading">Create Event</h1>
          <div className="input-field-container">
            <p className="input-label">Event Name</p>
            <TextField
              id="outlined-basic"
              className="input-field"
              variant="outlined"
            />
          </div>
          <div className="input-field-container">
            <p className="input-label">Host Name</p>
            <TextField
              id="outlined-basic"
              className="input-field"
              variant="outlined"
            />
          </div>
          <div className="input-field-container">
            <p className="input-label">Start Date & Time</p>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DateTimePicker
                className="input-field"
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div className="input-field-container">
            <p className="input-label">End Date & Time</p>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DateTimePicker
                className="input-field"
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div className="input-field-container">
            <p className="input-label">Street Addres</p>
            <TextField
              id="outlined-basic"
              className="input-field"
              variant="outlined"
            />
          </div>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className="input-field-container">
                <p className="input-label">Suburb</p>
                <TextField
                  id="outlined-basic"
                  className="input-field"
                  variant="outlined"
                />
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="input-field-container">
                <p className="input-label">State</p>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={[
                    "ACT",
                    "NSW",
                    "NT",
                    "SA",
                    "TAS",
                    "QLD",
                    "VIC",
                    "WA",
                  ]}
                  className="input-field"
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="input-field-container">
                <p className="input-label">Postcode</p>
                <OutlinedInput
                  type="number"
                  className="input-field"
                  variant="outlined"
                />
              </div>
            </Grid>
          </Grid>

          <div className="next-button-container">
            <Link to="/event">
              <button className="next-button">
                <p className="next-button-text">Next</p>
              </button>
            </Link>
          </div>
        </Grid>
        <Grid item xs={1} xl={4} lg={4} md={2}></Grid>
      </Grid>
    </div>
  );
}
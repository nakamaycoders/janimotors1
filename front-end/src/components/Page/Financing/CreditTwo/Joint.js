import React, { useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import Layout from '../../../layout/layout/layout'


import { Link } from "react-router-dom";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  Grid,
  StepLabel,
  OutlinedInput,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import "./credit2.css";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));
function getSteps() {
  return [
    "Applicant Contact Info",
    "Applicant Housing",
    "Applicant Employment",
    "Co-Applicant Contact Info",
    "Co-Applicant Housing",
    "Co-Applicant Employment",
  ];
}
const IncomeSrc = [
  "Salary/Wages",
  "Incentive or Bonus Income",
  "Retirement",
  "Child Support**",
  "Family or Spousal Support (Alimony)**",
  "Disability",
  "Housing Allowance",
  "Municipal Bond Interest",
  "Public Assistance Programs",
  "Social Security Benefits",
  "Workers' Compensation",
  "Other (taxable)",
  "Other (non-taxable)",
];
const AllSuffix = ["SR", "JR", "I", "II", "III", "IV"];
const AllState = [
  "AL",
  "AK",
  "AS",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FM",
  "FL",
  "GA",
  "GU",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MH",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "MP",
  "OH",
  "OK",
  "OR",
  "PW",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VI",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];
const AllHouse = [
  "Mortgage",
  "Rent",
  "Own Outright",
  "Military",
  "Family",
  "Other",
];
const AllStreet = [
  "Avenue",
  "Boulevard",
  "Circle",
  "Crescent",
  "Court",
  "Drive",
  "Freeway",
  "Highway",
  "Lane",
  "Path",
  "Parkway",
  "Place",
  "Plaza",
  "Road",
  "Square",
  "Street",
  "Terrace",
  "Turnpike",
  "Trail",
  "Way",
];
const CoApplicantRelationship = ["Spouse", "Relative", "Other"];
const Step1 = () => {
  const { control } = useFormContext();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Controller
            control={control}
            name="fname"
            render={({ field }) => (
              <TextField
                id="fname"
                label="First Name"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Controller
            control={control}
            name="midName"
            render={({ field }) => (
              <TextField
                id="midName"
                label="Middle Name"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Controller
            control={control}
            name="lName"
            render={({ field }) => (
              <TextField
                id="lName"
                label="Last Name"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={4}>
          <InputLabel
            style={{ paddingBottom: "20px", paddingTop: "10px" }}
            id="Suffix"
          >
            Select Suffix (Optional)
          </InputLabel>
          <Controller
            control={control}
            name="Suffix"
            render={({ field }) => (
              <Select
                labelId="Suffix"
                id="Suffix"
                //   multiple
                fullWidth
                input={<OutlinedInput label="Suffix" />}
                {...field}
              >
                {AllSuffix.map((Suffix) => (
                  <MenuItem key={Suffix} value={Suffix}>
                    {Suffix}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </Grid>
         
         <hr />
      </Grid>
      <Grid container>
        <Typography md={3} style={{ paddingTop: "20px" }} variant="h5">
          primary phone number
        </Typography>
      </Grid>

      <Grid container>
        <Grid item xs={6} md={4}>
          <Controller
            control={control}
            name="homeNum"
            render={({ field }) => (
              <TextField
                id="homeNum"
                label="Home"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6} md={4}>
          <Controller
            control={control}
            name="cellNum"
            render={({ field }) => (
              <TextField
                id="cellNum"
                label="Cell"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid>
        <Typography>
          I consent to receive autodialed, pre-recorded and artificial voice
          telemarketing and sales calls and text messages from or on behalf of
          dealer (or any financing source to which dealer assigns my contract)
          at the telephone number(s) provided in this communication, including
          any cell phone numbers. I understand that this consent is not a
          condition of purchase or credit.
        </Typography>
      </Grid>

      <Grid container>
        <Grid item xs={6} md={4}>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6} md={4}>
          <Controller
            control={control}
            name="Vemail"
            render={({ field }) => (
              <TextField
                id="Vemail"
                label="Verify Email"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};
const Step2 = () => {
  // const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const { control } = useFormContext();
  return (
    <>
      <FormGroup style={{ width: "fit-content" }}>
        <FormControlLabel
          control={<Checkbox size="large" />}
          value={checked}
          onChange={() => setChecked((checked) => !checked)}
          label="I have a Rural Route"
        />
      </FormGroup>
      {checked ? (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <Controller
                control={control}
                name="rr"
                render={({ field }) => (
                  <TextField
                    id="rrr"
                    label="RR"
                    variant="outlined"
                    // style={{marginRight:'22px'}}
                    // placeholder="Street #"
                    halfWidth
                    margin="normal"
                    {...field}
                  />
                )}
              />
            </Grid>
            {/* <p style={{display:'inline-block',margin:'24px',fontSize:'22px'}}>RR</p> */}

            <Grid item xs={12} md={2}>
              <Controller
                control={control}
                name="box"
                render={({ field }) => (
                  <TextField
                    id="BOX"
                    label="BOX"
                    variant="outlined"
                    // placeholder=""
                    halfWidth
                    margin="normal"
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <span
                style={{
                  display: "inline-block",
                  margin: "24px",
                  fontSize: "18px",
                  fontWeight: "bolder",
                }}
              >
                BOX(Example: RR 2 BOX 152)
              </span>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <Controller
                control={control}
                name="street"
                render={({ field }) => (
                  <TextField
                    id="street #"
                    label="Street #"
                    variant="outlined"
                    // placeholder="Enter Your Phone Number"
                    halfWidth
                    margin="normal"
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Controller
                control={control}
                name="StreetName"
                render={({ field }) => (
                  <TextField
                    id="Street"
                    label="Street Name"
                    variant="outlined"
                    // placeholder="Enter Your Alternate Phone"
                    halfWidth
                    margin="normal"
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <InputLabel
                style={{ marginBottom: "10px", fontWeight: "bolder" }}
                id="streetOptional"
              >
                Select Street (Optional)
              </InputLabel>
              <Controller
                control={control}
                name="StreetOptional"
                render={({ field }) => (
                  <Select
                    labelId="Select Street"
                    id="selectStreet"
                    //   multiple
                    // label="Select State"
                    fullWidth
                    input={<OutlinedInput label="Street" />}
                    {...field}
                  >
                    {AllStreet.map((Street) => (
                      <MenuItem key={Street} value={Street}>
                        {Street}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <Controller
                control={control}
                name="apt"
                render={({ field }) => (
                  <TextField
                    id="apt #"
                    label="Apt #"
                    variant="outlined"
                    // placeholder="Enter Your Phone Number"
                    halfWidth
                    margin="normal"
                    {...field}
                  />
                )}
              />
            </Grid>
          </Grid>
        </>
      )}

      {/* -------------------SAME */}

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Controller
            control={control}
            name="zip"
            render={({ field }) => (
              <TextField
                id="zip"
                label="ZIP"
                variant="outlined"
                // placeholder="Enter Your Phone Number"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Controller
            control={control}
            name="city"
            render={({ field }) => (
              <TextField
                id="city"
                label="CITY"
                variant="outlined"
                // placeholder="Enter Your Alternate Phone"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="State"
          >
            Select State
          </InputLabel>
          <Controller
            control={control}
            name="State"
            render={({ field }) => (
              <Select
                labelId="State"
                id="State"
                //   multiple
                // label="Select State"
                fullWidth
                input={<OutlinedInput label="State" />}
                {...field}
              >
                {AllState.map((State) => (
                  <MenuItem key={State} value={State}>
                    {State}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </Grid>
      </Grid>
      <hr />

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="House"
          >
            Select Housing Status
          </InputLabel>
          <Controller
            control={control}
            name="House"
            render={({ field }) => (
              <Select
                labelId="House"
                id="House"
                fullWidth
                input={<OutlinedInput label="House" />}
                {...field}
              >
                {AllHouse.map((House) => (
                  <MenuItem key={House} value={House}>
                    {House}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="Year"
          >
            Time at Address
          </InputLabel>
          <Controller
            control={control}
            name="Year"
            render={({ field }) => (
              <TextField
                type="number"
                id="year"
                label="Years"
                variant="outlined"
                // placeholder="Enter Your Alternate Phone"
                halfWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <InputLabel
            style={{
              marginBottom: "10px",
              visibility: "hidden",
              fontWeight: "bolder",
            }}
            id="Month"
          >
            Time at Address
          </InputLabel>
          <Controller
            control={control}
            name="Month"
            render={({ field }) => (
              <TextField
                type="number"
                id="month"
                label="Months"
                variant="outlined"
                // placeholder="Enter Your Alternate Phone"
                halfWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="Mortgage"
          >
            Mortgage Payment/Rent
          </InputLabel>
          <Controller
            control={control}
            name="Mortgage"
            render={({ field }) => (
              <TextField
                type="number"
                id="mortgage"
                label="$"
                variant="outlined"
                // placeholder="Enter Your Alternate Phone"
                halfWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
      <hr />

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="dob"
          >
            Date Of Birth
          </InputLabel>
          <Controller
            control={control}
            name="Dob"
            render={({ field }) => (
              <TextField
                // type="number"
                id="Dob"
                // label="DOB"
                variant="outlined"
                placeholder="Enter Your DOB"
                halfWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="SSN"
          >
            SSN / ITIN
          </InputLabel>
          <Controller
            control={control}
            name="SSN"
            render={({ field }) => (
              <TextField
                // type="number"
                id="SSN"
                // label="DOB"
                variant="outlined"
                placeholder="***/**/****"
                halfWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid container spcaing={2}>
        <Grid item xs={12} md={4}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="CoApplicant"
          >
            Relationship to Co-Applicant
          </InputLabel>
          <Controller
            control={control}
            name="CoApplicantRelation"
            render={({ field }) => (
              <Select
                labelId="CoApplicant"
                id="CoApplicant"
                fullWidth
                input={<OutlinedInput label="CoApplicant" />}
                {...field}
              >
                {CoApplicantRelationship.map((Rel) => (
                  <MenuItem key={Rel} value={Rel}>
                    {Rel}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};
const Step3 = () => {
  let SURR = true;
  let EAO = false;
  let Self = false;
  let std = false;

  const [HousingStatus, setHousingStatus] = useState("");
  const handleChange = (event) => {
    setHousingStatus(event.target.value);
  };
  switch (HousingStatus) {
    case "Unemployed":
    case "Retired":
    case "Retired Military":
      SURR = true;
      EAO = false;
      Self = false;
      std = false;
      console.log("SURR", SURR);

      break;
    case "":
    case "Employed":
    case "Active Military":
    case "Other":
      SURR = false;
      EAO = true;
      Self = false;
      std = false;
      console.log("EAO", EAO);
      break;

    case "Self-Employed":
      SURR = false;
      EAO = false;
      Self = true;
      std = false;
      // setSURR(false);
      // setEAO(false);
      // setSelf(true);
      // setstd(false);
      console.log("self", Self);

      break;

    case "Student":
      SURR = false;
      EAO = false;
      Self = false;
      std = true;
      console.log("std", std);

      break;

    default:
      // console.log("Invalid ");

      break;
  }

  const { control } = useFormContext();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Select Housing Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={HousingStatus}
              onChange={handleChange}
              label="selectEmpStatus"
            >
              <MenuItem value={"Employed"}>Employed</MenuItem>
              <MenuItem value={"Unemployed"}>Unemployed</MenuItem>
              <MenuItem value={"Self-Employed"}>Self-Employed</MenuItem>
              <MenuItem value={"Student"}>Student</MenuItem>
              <MenuItem value={"Retired"}>Retired</MenuItem>
              <MenuItem value={"Active Military"}>Active Military</MenuItem>
              <MenuItem value={"Retired Military"}>Retired Military</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
          {/* {console.log(HousingStatus, SURR)} */}
        </Grid>
        {(EAO || std) && (
          <Grid item xs={12} md={2}>
            <InputLabel
              style={{ marginBottom: "10px", fontWeight: "bolder" }}
              id="employer"
            ></InputLabel>
            <Controller
              control={control}
              name="Employer"
              id="empController"
              render={({ field }) => (
                <TextField
                  type="text"
                  id="Employer"
                  // label="Employer"
                  label={std ? "School Name" : "Employer"}
                  variant="outlined"
                  // placeholder="Enter Your Alternate Phone"
                  halfWidth
                  margin="normal"
                  {...field}
                />
              )}
            />
          </Grid>
        )}
      </Grid>
      {/* Work Title--------------------------------------------------- */}
      {(EAO || std) && (
        <div>
          {
            <Grid item xs={6} md={2}>
              <InputLabel
                style={{ marginBottom: "10px", fontWeight: "bolder" }}
                id="WorkTitle"
              ></InputLabel>
              <Controller
                control={control}
                name="WorkTitle"
                render={({ field }) => (
                  <TextField
                    type="text"
                    id="WorkTitle"
                    label="Work Title"
                    variant="outlined"
                    // placeholder="Enter Your Alternate Phone"
                    halfWidth
                    margin="normal"
                    {...field}
                  />
                )}
              />
            </Grid>
          }
          {/* Work Phone--------------------------------------------------- */}
          {
            <Grid item xs={6} md={2}>
              <InputLabel
                style={{ marginBottom: "10px", fontWeight: "bolder" }}
                id="WorkPhone"
              ></InputLabel>
              <Controller
                control={control}
                name="WorkPhone"
                render={({ field }) => (
                  <TextField
                    type="text"
                    id="WorkPhone"
                    label={std ? "School Phone" : "Work Phone"}
                    variant="outlined"
                    // placeholder="Enter Your Alternate Phone"
                    halfWidth
                    margin="normal"
                    {...field}
                  />
                )}
              />
            </Grid>
          }
          <hr />
          {/* Time At jOb--------------------------------------------------*/}
          {
            <Grid container spacing={2}>
              <Grid item xs={12} md={2}>
                <InputLabel
                  style={{ marginBottom: "10px", fontWeight: "bolder" }}
                  id="yearss"
                >
                  Time At Job
                </InputLabel>
                <Controller
                  control={control}
                  name="yearss"
                  render={({ field }) => (
                    <TextField
                      type="number"
                      id="yearss"
                      label="Years"
                      variant="outlined"
                      // placeholder="Enter Your Alternate Phone"
                      halfWidth
                      margin="normal"
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <InputLabel
                  style={{ marginBottom: "10px", fontWeight: "bolder" }}
                  id="employer"
                ></InputLabel>
                <Controller
                  control={control}
                  name="monthss"
                  render={({ field }) => (
                    <TextField
                      type="number"
                      id="monthss"
                      label="Months"
                      variant="outlined"
                      // placeholder="Enter Your Alternate Phone"
                      halfWidth
                      margin="normal"
                      {...field}
                    />
                  )}
                />
              </Grid>
            </Grid>
          }
        </div>
      )}

      <hr />
      {Self && (
        <div>
          {/* Work Phone--------------------------------------------------- */}
          {
            <Grid item xs={6} md={2}>
              <InputLabel
                style={{ marginBottom: "10px", fontWeight: "bolder" }}
                id="WorkPhone"
              ></InputLabel>
              <Controller
                control={control}
                name="WorkPhone"
                render={({ field }) => (
                  <TextField
                    type="text"
                    id="WorkPhone"
                    label="Work Phone"
                    variant="outlined"
                    // placeholder="Enter Your Alternate Phone"
                    halfWidth
                    margin="normal"
                    {...field}
                  />
                )}
              />
            </Grid>
          }
          <hr />
          {/* Time At jOb--------------------------------------------------*/}
          {
            <Grid container spacing={2}>
              <Grid item xs={12} md={2}>
                <InputLabel
                  style={{ marginBottom: "10px", fontWeight: "bolder" }}
                  id="yearss"
                >
                  Time At Job
                </InputLabel>
                <Controller
                  control={control}
                  name="yearss"
                  render={({ field }) => (
                    <TextField
                      type="number"
                      id="yearss"
                      label="Years"
                      variant="outlined"
                      // placeholder="Enter Your Alternate Phone"
                      halfWidth
                      margin="normal"
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <InputLabel
                  style={{ marginBottom: "10px", fontWeight: "bolder" }}
                  id="employer"
                ></InputLabel>
                <Controller
                  control={control}
                  name="monthss"
                  render={({ field }) => (
                    <TextField
                      type="number"
                      id="monthss"
                      label="Months"
                      variant="outlined"
                      // placeholder="Enter Your Alternate Phone"
                      halfWidth
                      margin="normal"
                      {...field}
                    />
                  )}
                />
              </Grid>
            </Grid>
          }
        </div>
      )}
      {/* Source OF income----------------------------------------------- */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="EmpStatus"
            value={"Select one"}
          >
            Source of Income
          </InputLabel>
          <Controller
            control={control}
            name="EmpStatus"
            render={({ field }) => (
              <Select
                labelId="EmpStatus"
                id="EmpStatus"
                fullWidth
                input={<OutlinedInput label="EmpStatus" />}
                name="EmpStatus"
                value={"Select one"}
                {...field}
              >
                {IncomeSrc.map((incSource) => (
                  <MenuItem key={incSource} value={incSource}>
                    {incSource}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="PerYear"
          ></InputLabel>
          <Controller
            control={control}
            name="PerYear"
            render={({ field }) => (
              <TextField
                type="number"
                id="PerYear"
                label="Per Year ($)"
                variant="outlined"
                // placeholder="Enter Your Alternate Phone"
                halfWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};
const Step4 = () => {
  const { control } = useFormContext();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Controller
            control={control}
            name="Cofname"
            render={({ field }) => (
              <TextField
                id="Cofname"
                label="First Name"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Controller
            control={control}
            name="CoMidName"
            render={({ field }) => (
              <TextField
                id="CoMidName"
                label="Middle Name"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Controller
            control={control}
            name="ColName"
            render={({ field }) => (
              <TextField
                id="ColName"
                label="Last Name"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={4}>
          <InputLabel style={{ paddingBottom: "20px", paddingTop: "10px" }}>
            Select Suffix (Optional)
          </InputLabel>
          <Controller
            control={control}
            name="CoSuffix"
            render={({ field }) => (
              <Select
                labelId="CoSuffix"
                id="CoSuffix"
                //   multiple
                fullWidth
                input={<OutlinedInput label="Suffix" />}
                {...field}
              >
                {AllSuffix.map((Suffix) => (
                  <MenuItem key={Suffix} value={Suffix}>
                    {Suffix}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Typography md={3} style={{ paddingTop: "20px" }} variant="h5">
          primary phone number
        </Typography>
      </Grid>

      <Grid container>
        <Grid item xs={6} md={4}>
          <Controller
            control={control}
            name="CohomeNum"
            render={({ field }) => (
              <TextField
                id="CohomeNum"
                label="Home"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6} md={4}>
          <Controller
            control={control}
            name="CocellNum"
            render={({ field }) => (
              <TextField
                id="CocellNum"
                label="Cell"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid>
        <Typography>
          I consent to receive autodialed, pre-recorded and artificial voice
          telemarketing and sales calls and text messages from or on behalf of
          dealer (or any financing source to which dealer assigns my contract)
          at the telephone number(s) provided in this communication, including
          any cell phone numbers. I understand that this consent is not a
          condition of purchase or credit.
        </Typography>
      </Grid>

      <Grid container>
        <Grid item xs={6} md={4}>
          <Controller
            control={control}
            name="Coemail"
            render={({ field }) => (
              <TextField
                id="Coemail"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6} md={4}>
          <Controller
            control={control}
            name="CoVemail"
            render={({ field }) => (
              <TextField
                id="CoVemail"
                label="Verify Email"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};
const Step5 = () => {
  // const [status, setStatus] = React.useState(0);
  // const [status2, setStatus2] = React.useState(0);

  // const radioHandler = (status) => {
  //   setStatus(status);
  // };

  // const radioHandler2 = (status2) => {
  //   setStatus2(status2);
  // };

  // const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const { control } = useFormContext();
  return (
    <>
      {/* <h6>Same address as applicant?</h6>
      <Controller
        control={control}
        name="Applicant Address"
        render={({ field }) => (
          <input
            type="radio"
            name="Corelease"
            checked={status === 1}
            onClick={(e) => radioHandler(1)}
            {...field}
          />
        )}
      />
      No
      <Controller
        control={control}
        name="Corelease"
        render={({ field }) => (
          <input
            type="radio"
            checked={status === 2}
            onClick={(e) => radioHandler(2)}
            {...field}
          />
        )}
      />
      Yes */}
      {/* {status === 1 && ( */}
        <>
          <FormGroup style={{ width: "fit-content" }}>
            <FormControlLabel
              control={<Checkbox size="large" />}
              value={checked}
              onChange={() => setChecked((checked) => !checked)}
              label="I have a Rural Route"
            />
          </FormGroup>
          {checked ? (
            <>
              <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                  <Controller
                    control={control}
                    name="Corr"
                    render={({ field }) => (
                      <TextField
                        id="Corr"
                        label="RR"
                        variant="outlined"
                        halfWidth
                        margin="normal"
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <Controller
                    control={control}
                    name="Cobox"
                    render={({ field }) => (
                      <TextField
                        id="Cobox"
                        label="BOX"
                        variant="outlined"
                        halfWidth
                        margin="normal"
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <span
                    style={{
                      display: "inline-block",
                      margin: "24px",
                      fontSize: "18px",
                      fontWeight: "bolder",
                    }}
                  >
                    BOX(Example: RR 2 BOX 152)
                  </span>
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                  <Controller
                    control={control}
                    name="Costreet"
                    render={({ field }) => (
                      <TextField
                        id="Costreet #"
                        label="Street #"
                        variant="outlined"
                        // placeholder="Enter Your Phone Number"
                        halfWidth
                        margin="normal"
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <Controller
                    control={control}
                    name="CoStreetName"
                    render={({ field }) => (
                      <TextField
                        id="CoStreetName"
                        label="Street Name"
                        variant="outlined"
                        // placeholder="Enter Your Alternate Phone"
                        halfWidth
                        margin="normal"
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <InputLabel
                    style={{ marginBottom: "10px", fontWeight: "bolder" }}
                    id="CoStreetOptional"
                  >
                    Select Street (Optional)
                  </InputLabel>
                  <Controller
                    control={control}
                    name="CoStreetOptional"
                    render={({ field }) => (
                      <Select
                        labelId="Select Street"
                        id="CoStreetOptional"
                        //   multiple
                        // label="Select State"
                        fullWidth
                        input={<OutlinedInput label="Street" />}
                        {...field}
                      >
                        {AllStreet.map((Street) => (
                          <MenuItem key={Street} value={Street}>
                            {Street}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                  <Controller
                    control={control}
                    name="Coapt"
                    render={({ field }) => (
                      <TextField
                        id="Coapt #"
                        label="Apt #"
                        variant="outlined"
                        // placeholder="Enter Your Phone Number"
                        halfWidth
                        margin="normal"
                        {...field}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </>
          )}

          {/* -------------------SAME */}

          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Controller
                control={control}
                name="Cozip"
                render={({ field }) => (
                  <TextField
                    id="Cozip"
                    label="ZIP"
                    variant="outlined"
                    // placeholder="Enter Your Phone Number"
                    fullWidth
                    margin="normal"
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Controller
                control={control}
                name="Cocity"
                render={({ field }) => (
                  <TextField
                    id="Cocity"
                    label="CITY"
                    variant="outlined"
                    // placeholder="Enter Your Alternate Phone"
                    fullWidth
                    margin="normal"
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <InputLabel
                style={{ marginBottom: "10px", fontWeight: "bolder" }}
                id="CoState"
              >
                Select State
              </InputLabel>
              <Controller
                control={control}
                name="CoState"
                render={({ field }) => (
                  <Select
                    labelId="CoState"
                    id="CoState"
                    //   multiple
                    // label="Select State"
                    fullWidth
                    input={<OutlinedInput label="State" />}
                    {...field}
                  >
                    {AllState.map((State) => (
                      <MenuItem key={State} value={State}>
                        {State}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </Grid>
          </Grid>
        </>
      {/* )} */}
      <hr />
      {/* <h6>Same Mortgage/Rent information as applicant?</h6>
      <input
        type="radio"
        name="Corelease2"
        checked={status2 === 3}
        onClick={(e) => radioHandler2(3)}
      />
      No
      <input
        type="radio"
        name="Corelease2"
        checked={status2 === 4}
        onClick={(e) => radioHandler2(4)}
      />
      Yes */}
      {/* {status2 === 3 && ( */}
        <>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <InputLabel
                style={{ marginBottom: "10px", fontWeight: "bolder" }}
                id="CoHouse"
              >
                Select Housing Status
              </InputLabel>
              <Controller
                control={control}
                name="CoHouse"
                render={({ field }) => (
                  <Select
                    labelId="House"
                    id="CoHouse"
                    fullWidth
                    input={<OutlinedInput label="House" />}
                    {...field}
                  >
                    {AllHouse.map((House) => (
                      <MenuItem key={House} value={House}>
                        {House}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <InputLabel
                style={{ marginBottom: "10px", fontWeight: "bolder" }}
                id="CoYear"
              >
                Time at Address
              </InputLabel>
              <Controller
                control={control}
                name="CoYear"
                render={({ field }) => (
                  <TextField
                    type="number"
                    id="CoYear"
                    label="Years"
                    variant="outlined"
                    // placeholder="Enter Your Alternate Phone"
                    halfWidth
                    margin="normal"
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <InputLabel
                style={{
                  marginBottom: "10px",
                  visibility: "hidden",
                  fontWeight: "bolder",
                }}
                id="Month"
              >
                Time at Address
              </InputLabel>
              <Controller
                control={control}
                name="CoMonth"
                render={({ field }) => (
                  <TextField
                    type="number"
                    id="CoMonth"
                    label="Months"
                    variant="outlined"
                    // placeholder="Enter Your Alternate Phone"
                    halfWidth
                    margin="normal"
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <InputLabel
                style={{ marginBottom: "10px", fontWeight: "bolder" }}
                id="CoMortgage"
              >
                Mortgage Payment/Rent
              </InputLabel>
              <Controller
                control={control}
                name="CoMortgage"
                render={({ field }) => (
                  <TextField
                    type="number"
                    id="CoMortgage"
                    label="$"
                    variant="outlined"
                    // placeholder="Enter Your Alternate Phone"
                    halfWidth
                    margin="normal"
                    {...field}
                  />
                )}
              />
            </Grid>
          </Grid>
        </>
      {/* )} */}
      <hr />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="Codob"
          >
            Date Of Birth
          </InputLabel>
          <Controller
            control={control}
            name="Codob"
            render={({ field }) => (
              <TextField
                // type="number"
                id="Codob"
                // label="DOB"
                variant="outlined"
                placeholder="Enter Your DOB"
                halfWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="CoSSN"
          >
            SSN / ITIN
          </InputLabel>
          <Controller
            control={control}
            name="CoSSN"
            render={({ field }) => (
              <TextField
                // type="number"
                id="CoSSN"
                // label="DOB"
                variant="outlined"
                placeholder="***/**/****"
                halfWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};
const Step6 = () => {
  let SURR = true;
  let EAO = false;
  let Self = false;
  let std = false;

  // const [SURR, setSURR] = useState(true);
  // const [EAO, setEAO] = useState(false);
  // const [Self, setSelf] = useState(false);
  // const [std, setstd] = useState(false);
  const [HousingStatus, setHousingStatus] = useState("");
  const handleChange = (event) => {
    setHousingStatus(event.target.value);
  };
  switch (HousingStatus) {
    case "Unemployed":
    case "Retired":
    case "Retired Military":
      SURR = true;
      EAO = false;
      Self = false;
      std = false;
      // console.log("SURR", SURR)

      break;
    case "":
    case "Employed":
    case "Active Military":
    case "Other":
      SURR = false;
      EAO = true;
      Self = false;
      std = false;
      // console.log("EAO", EAO)
      break;

    case "Self-Employed":
      SURR = false;
      EAO = false;
      Self = true;
      std = false;
      // setSURR(false);
      // setEAO(false);
      // setSelf(true);
      // setstd(false);
      // console.log("self", Self)

      break;

    case "Student":
      SURR = false;
      EAO = false;
      Self = false;
      std = true;
      // console.log("std", std);

      break;

    default:
      // console.log("Invalid ");

      break;
  }

  const { control } = useFormContext();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Controller
            control={control}
            name="CoSelectHousingStatus"
            id="empController"
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Housing Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={HousingStatus}
                  onChange={handleChange}
                  label="selectEmpStatus"
                  {...field}
                >
                  <MenuItem value={"Employed"}>Employed</MenuItem>
                  <MenuItem value={"Unemployed"}>Unemployed</MenuItem>
                  <MenuItem value={"Self-Employed"}>Self-Employed</MenuItem>
                  <MenuItem value={"Student"}>Student</MenuItem>
                  <MenuItem value={"Retired"}>Retired</MenuItem>
                  <MenuItem value={"Active Military"}>Active Military</MenuItem>
                  <MenuItem value={"Retired Military"}>
                    Retired Military
                  </MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
              </FormControl>
            )}
          />
        </Grid>
        {(EAO || std) && (
          <Grid item xs={12} md={2}>
            <InputLabel
              style={{ marginBottom: "10px", fontWeight: "bolder" }}
              id="employer"
            ></InputLabel>
            <Controller
              control={control}
              name="CoEmployer"
              id="empController"
              render={({ field }) => (
                <TextField
                  type="text"
                  id="Employer"
                  // label="Employer"
                  label={std ? "School Name" : "Employer"}
                  variant="outlined"
                  // placeholder="Enter Your Alternate Phone"
                  halfWidth
                  margin="normal"
                  {...field}
                />
              )}
            />
          </Grid>
        )}
      </Grid>
      {/* Work Title--------------------------------------------------- */}
      {(EAO || std) && (
        <div>
          {
            <Grid item xs={6} md={2}>
              <InputLabel
                style={{ marginBottom: "10px", fontWeight: "bolder" }}
                id="CoWorkTitle"
              ></InputLabel>
              <Controller
                control={control}
                name="CoWorkTitle"
                render={({ field }) => (
                  <TextField
                    type="text"
                    id="WorkTitle"
                    label="Work Title"
                    variant="outlined"
                    // placeholder="Enter Your Alternate Phone"
                    halfWidth
                    margin="normal"
                    {...field}
                  />
                )}
              />
            </Grid>
          }
          {/* Work Phone--------------------------------------------------- */}
          {
            <Grid item xs={6} md={2}>
              <InputLabel
                style={{ marginBottom: "10px", fontWeight: "bolder" }}
                id="CoWorkPhone"
              ></InputLabel>
              <Controller
                control={control}
                name="CoWorkPhone"
                render={({ field }) => (
                  <TextField
                    type="text"
                    id="CoWorkPhone"
                    label={std ? "School Phone" : "Work Phone"}
                    variant="outlined"
                    // placeholder="Enter Your Alternate Phone"
                    halfWidth
                    margin="normal"
                    {...field}
                  />
                )}
              />
            </Grid>
          }
          <hr />
          {/* Time At jOb--------------------------------------------------*/}
          {
            <Grid container spacing={2}>
              <Grid item xs={12} md={2}>
                <InputLabel
                  style={{ marginBottom: "10px", fontWeight: "bolder" }}
                  id="Coyearss"
                >
                  Time At Job
                </InputLabel>
                <Controller
                  control={control}
                  name="Coyearss"
                  render={({ field }) => (
                    <TextField
                      type="number"
                      id="Coyearss"
                      label="Years"
                      variant="outlined"
                      // placeholder="Enter Your Alternate Phone"
                      halfWidth
                      margin="normal"
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <InputLabel
                  style={{ marginBottom: "10px", fontWeight: "bolder" }}
                  id="employer"
                ></InputLabel>
                <Controller
                  control={control}
                  name="Comonthss"
                  render={({ field }) => (
                    <TextField
                      type="number"
                      id="Comonthss"
                      label="Months"
                      variant="outlined"
                      // placeholder="Enter Your Alternate Phone"
                      halfWidth
                      margin="normal"
                      {...field}
                    />
                  )}
                />
              </Grid>
            </Grid>
          }
        </div>
      )}

      <hr />
      {Self && (
        <div>
          {/* Work Phone--------------------------------------------------- */}
          {
            <Grid item xs={6} md={2}>
              <InputLabel
                style={{ marginBottom: "10px", fontWeight: "bolder" }}
                id="CoSelfWorkPhone"
              ></InputLabel>
              <Controller
                control={control}
                name="CoSelfWorkPhone"
                render={({ field }) => (
                  <TextField
                    type="text"
                    id="CoSelfWorkPhone"
                    label="Work Phone"
                    variant="outlined"
                    // placeholder="Enter Your Alternate Phone"
                    halfWidth
                    margin="normal"
                    {...field}
                  />
                )}
              />
            </Grid>
          }
          <hr />
          {/* Time At jOb--------------------------------------------------*/}
          {
            <Grid container spacing={2}>
              <Grid item xs={12} md={2}>
                <InputLabel
                  style={{ marginBottom: "10px", fontWeight: "bolder" }}
                  id="CoSelfyear"
                >
                  Time At Job
                </InputLabel>
                <Controller
                  control={control}
                  name="CoSelfyear"
                  render={({ field }) => (
                    <TextField
                      type="number"
                      id="CoSelfyear"
                      label="Years"
                      variant="outlined"
                      // placeholder="Enter Your Alternate Phone"
                      halfWidth
                      margin="normal"
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <InputLabel
                  style={{ marginBottom: "10px", fontWeight: "bolder" }}
                  id="CoSelfemployer"
                ></InputLabel>
                <Controller
                  control={control}
                  name="CoSelfmonths"
                  render={({ field }) => (
                    <TextField
                      type="number"
                      id="CoSelfmonths"
                      label="Months"
                      variant="outlined"
                      // placeholder="Enter Your Alternate Phone"
                      halfWidth
                      margin="normal"
                      {...field}
                    />
                  )}
                />
              </Grid>
            </Grid>
          }
        </div>
      )}
      {/* Source OF income----------------------------------------------- */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="CoEmpStatus"
            value={"Select one"}
          >
            Source of Income
          </InputLabel>
          <Controller
            control={control}
            name="CoEmpStatus"
            render={({ field }) => (
              <Select
                labelId="EmpStatus"
                id="CoEmpStatus"
                fullWidth
                input={<OutlinedInput label="EmpStatus" />}
                // name="EmpStatus"
                value={"Select one"}
                {...field}
              >
                {IncomeSrc.map((incSource) => (
                  <MenuItem key={incSource} value={incSource}>
                    {incSource}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="CoPerYear"
          ></InputLabel>
          <Controller
            control={control}
            name="CoPerYear"
            render={({ field }) => (
              <TextField
                type="number"
                id="PerYear"
                label="Per Year ($)"
                variant="outlined"
                // placeholder="Enter Your Alternate Phone"
                halfWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Step1 />;
    case 1:
      return <Step2 />;
    case 2:
      return <Step3 />;
    case 3:
      return <Step4 />;
    case 4:
      return <Step5 />;
    case 5:
      return <Step6 />;
    default:
      return "unknown step";
  }
}

const LinearStepper = () => {
  
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      fname: "",
      midName: "",
      lName: "",
      Suffix: "",
      homeNum: "",
      cellNum: "",
      email: "",
      Vemail: "",
      rr: "",
      box: "",
      street: "",
      StreetName: "",
      StreetOptional: "",
      apt: "",
      zip: "",
      city: "",
      State: "",
      House: "",
      Year: "",
      Month: "",
      Mortgage: "",
      Dob: "",
      SSN: "",
      CoApplicantRelation: "",
      SelectHousingStatus: "",
      Employer: "",
      WorkTitle: "",
      WorkPhone: "",
      yearss: "",
      monthss: "",
      SelfWorkPhone: "",
      Selfyear: "",
      Selfmonths: "",
      EmpStatus: "",
      PerYear: "",
      // <..................CO-applicant info.............................>
      Cofname: "",
      CoMidName: "",
      ColName: "",
      CoSuffix: "",
      CocellNum: "",
      CohomeNum: "",
      Coemail: "",
      CoVemail: "",

      // <...........step2.........>
      Corelease: "",
      Corr: "",
      Cobox: "",
      Costreet: "",
      CoStreetName: "",
      CoStreetOptional: "",
      Coapt: "",
      Cozip: "",
      Cocity: "",
      CoState: "",
      Corelease2: "",
      CoHouse: "",
      CoYear: "",
      CoMonth: "",
      CoMortgage: "",
      Codob: "",
      CoSSN: "",

      CoSelectHousingStatus: "",
      CoEmployer: "",
      CoWorkTitle: "",
      CoWorkPhone: "",
      Coyearss: "",
      Comonthss: "",
      CoSelfWorkPhone: "",
      CoSelfyear: "",
      CoSelfemployer: "",
      CoSelfmonths: "",
      CoEmpStatus: "",
      CoPerYear: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      axios({
        method: "post",
        url: "http://localhost:5000/api/joint/send",
        data: data,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      }).then((res) => {
        console.log(res);
        alert("successfull");
        setActiveStep(activeStep + 1);
      });
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <Layout>
    <div style={{backgroundColor:"white"}}>
       <div className="btn11 p-5" style={{backgroundColor:"white"}}>
          <Typography variant="h5" style={{marginBottom:"10px"}}>Application Type</Typography>
        <Link to="/creditApproval" style={{textDecoration:"none", marginRight:'10px'}}>
          <Button variant="contained" color="primary" >Individual</Button>
        </Link>
        <Link to="/joint" style={{textDecoration:"none"}}>
          <Button variant="contained" color="primary">Joint</Button>
          </Link>
          <Typography style={{marginTop:"10px"}}>Please be aware that by selecting "Joint" the applicant and the co-applicant agree they intend to apply for joint credit. The co-applicant must be present and must indicate his or her acceptance of the Terms and Conditions at the end of this application before it is submitted.</Typography>
        </div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          return (
            <Step key={index}>
              <StepLabel>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography
          variant="h3"
          align="center"
          style={{ backgroundColor: "white", color: "black" }}
        >
          Thank You For Submitting
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(handleNext)}
              style={{ padding: "2px 39px" }}
            >
              {getStepContent(activeStep)}

              <div style={{ textAlign: "center", padding: "10px 0px" }}>
                <Button
                  className={classes.button}
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  back
                </Button>

                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  // onClick={handleNext}
                  type="submit"
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  </Layout>
  );
};

export default LinearStepper;

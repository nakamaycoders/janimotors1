import React, { useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useRef } from "react";
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
const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));
function getSteps() {
  return [
    "Applicant Contact Info",
    "Applicant Housing",
    "Personal Information",
  ];
}
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
                name="Suffix"
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
            name="homeNum"
            render={({ field }) => (
              <TextField
                id="homeNum"
                label="Home"
                variant="outlined"
                fullWidth
                margin="normal"
                name="homeNum"
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
                name="cellNum"
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
                name="email"
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
                name="Vemail"
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
  const [checked,setChecked] = useState(false); 
  const { control } = useFormContext();
  return (
    <>
      <FormGroup style={{width: 'fit-content'}}>
        <FormControlLabel
          control={<Checkbox size="large"/>}
          value={checked}
          onChange={() => setChecked(checked => !checked)}
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
            id="street"
          >
            Select Street (Optional)
          </InputLabel>
          <Controller
            control={control}
            name="Street"
            render={({ field }) => (
              <Select
                labelId="Select Street"
                id="selectStreet"
                //   multiple
                // label="Select State"
                fullWidth
                input={<OutlinedInput label="Street" />}
                name="Street"
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
      
      {/* {!visible && 
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
            id="street"
          >
            Select Street (Optional)
          </InputLabel>
          <Controller
            control={control}
            name="Street"
            render={({ field }) => (
              <Select
                labelId="Select Street"
                id="selectStreet"
                //   multiple
                // label="Select State"
                fullWidth
                input={<OutlinedInput label="Street" />}
                name="Street"
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
      } */}

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
                name="State"
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
                name="House"
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
    </>
  );
};
const Step3 = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="address1"
        render={({ field }) => (
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="address2"
        render={({ field }) => (
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="country"
        render={({ field }) => (
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
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
    // return < />;
    default:
      return "unknown step";
  }
}

const LinearStepper = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      fName: "",
      lastName: "",
      midName: "",
      Suffix: "",
      homeNum: "",
      cellNum: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
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
    <div>
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
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

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
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinearStepper;

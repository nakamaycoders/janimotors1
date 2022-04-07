import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControl from '@mui/material/FormControl';
import './LinearStepper.css'
import {Link} from 'react-router-dom'
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

const Step1 = () => {
  const { control } = useFormContext();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Controller
            control={control}
            name="fName"
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
            name="mName"
            render={({ field }) => (
              <TextField
                id="mName"
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
                fullWidth
                input={<OutlinedInput label="Suffix" />}
                // name="Suffix"
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
                // name="homeNum"
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
                // name="cellNum"
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
                    id="street"
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
  let SURR = true;
  let EAO = false;
  let Self = false;
  let std = false;

  // const [SURR, setSURR] = useState(true);
  // const [EAO, setEAO] = useState(false);
  // const [Self, setSelf] = useState(false);
  // const [std, setstd] = useState(false);
  const [HousingStatus, setHousingStatus] = useState('');
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
    case "" :
    case "Employed": 
    case "Active Military":
    case "Other":
      SURR = false;
      EAO = true;
      Self = false;
      std = false;
      console.log("EAO", EAO)
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
    console.log("self", Self)

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
        <Controller
            control={control}
            name="SelectHousingStatus"
            id="empController"
            render={({ field }) => (
              <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Select Housing Status</InputLabel>
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
          <MenuItem value={"Retired Military"}>Retired Military</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
        </Select>
      </FormControl>
            )}
          />
        </Grid>
        {(EAO || std) &&<Grid item xs={12} md={2}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="employer"
          >
          
          </InputLabel>
          <Controller
            control={control}
            name="Employer"
            id="empController"
            render={({ field }) => (
              <TextField
                type="text"
                id="Employer"
                // label="Employer"
                label={(std)?"School Name":"Employer"}
                variant="outlined"
                // placeholder="Enter Your Alternate Phone"
                halfWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>}
       
      </Grid>
      {/* Work Title--------------------------------------------------- */}
      {(EAO || std) && <div>
        {<Grid item xs={6} md={2}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="WorkTitle"
          >
          </InputLabel>
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
        </Grid>}
      {/* Work Phone--------------------------------------------------- */}
        {<Grid item xs={6} md={2}>
          <InputLabel
            style={{ marginBottom: "10px", fontWeight: "bolder" }}
            id="WorkPhone"
          >
          </InputLabel>
          <Controller
            control={control}
            name="WorkPhone"
            render={({ field }) => (
              <TextField
                type="text"
                id="WorkPhone"
                label={(std)? "School Phone": "Work Phone"}
                variant="outlined"
                // placeholder="Enter Your Alternate Phone"
                halfWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>}
        <hr />
      {/* Time At jOb--------------------------------------------------*/}
       {<Grid container spacing={2}>
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
          >
          
          </InputLabel>
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
       
      </Grid>}
      </div>}

      <hr />
      {Self && <div>

  {/* Work Phone--------------------------------------------------- */}
    {<Grid item xs={6} md={2}>
      <InputLabel
        style={{ marginBottom: "10px", fontWeight: "bolder" }}
        id="SelfWorkPhone"
      >
      </InputLabel>
      <Controller
        control={control}
        name="SelfWorkPhone"
        render={({ field }) => (
          <TextField
            type="text"
            id="SelfWorkPhone"
            label="Work Phone"
            variant="outlined"
            // placeholder="Enter Your Alternate Phone"
            halfWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </Grid>}
    <hr />
  {/* Time At jOb--------------------------------------------------*/}
   {<Grid container spacing={2}>
    <Grid item xs={12} md={2}>
      <InputLabel
        style={{ marginBottom: "10px", fontWeight: "bolder" }}
        id="selfyear"
      >
        Time At Job
      </InputLabel>
      <Controller
        control={control}
        name="Selfyear"
        render={({ field }) => (
          <TextField
            type="number"
            id="selfyears"
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
        id="Selfemployer"
      >
      
      </InputLabel>
      <Controller
        control={control}
        name="Selfmonths"
        render={({ field }) => (
          <TextField
            type="number"
            id="Selfmonthss"
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
   
  </Grid>}
  </div>}
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
            id="PerYear"
          >
          
          </InputLabel>
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
      lName: "",
      mName: "",
      Suffix: "",
      homeNum: "",
      cellNum: "",
      rr:"",
      box:"",
      street:"",
      StreetName:"",
      StreetOptional:"",
      apt:"",
      zip:"",
      city:"",
      State:"",
      House:"",
      Year:"",
      Month:"",
      Mortgage:"",
      Dob:"",
      SSN:"",
      SelectHousingStatus: "",
      Employer: "",
      WorkTitle: "",
      WorkPhone: "",
      yearss: "",
      monthss:"",
      SelfWorkPhone: "",
      Selfyear: "",
      Selfmonths: "",
      EmpStatus: "",
      PerYear: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = (data) => {
    console.log("data>>>>>>",data);
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
       <div className="btn11 p-5">
        <Link to="/creditApproval" style={{textDecoration:"none", marginRight:'10px'}}>
          <Button variant="contained" color="primary" >Individual</Button>
        </Link>
        <Link to="/joint" style={{textDecoration:"none"}}>
          <Button variant="contained" color="primary">Joint</Button>
          </Link>
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
          Thank You
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
  );
};

export default LinearStepper;

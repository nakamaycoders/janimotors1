import React, { useState } from "react";
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
  Select
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
              <InputLabel style={{paddingBottom:"20px",paddingTop:"10px"}} id="Suffix">Select Suffix (Optional)</InputLabel>
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
              telemarketing and sales calls and text messages from or on behalf
              of dealer (or any financing source to which dealer assigns my
              contract) at the telephone number(s) provided in this
              communication, including any cell phone numbers. I understand that
              this consent is not a condition of purchase or credit.
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
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="emailAddress"
        render={({ field }) => (
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="phoneNumber"
        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="alternatePhone"
        render={({ field }) => (
          <TextField
            id="alternate-phone"
            label="Alternate Phone"
            variant="outlined"
            placeholder="Enter Your Alternate Phone"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
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
      midName:"",
      Suffix:"",
      homeNum:"",
      cellNum:'',

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

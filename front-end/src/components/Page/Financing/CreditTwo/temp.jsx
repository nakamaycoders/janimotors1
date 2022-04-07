{self && <div>
  
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
  // {----------------------------------------------------------------------------------------------}
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
        console.log("SURR", SURR)
  
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
            
             <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Select Housing Status</InputLabel>
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
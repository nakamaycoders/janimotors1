{std && <div>
  {/* Work Title--------------------------------------------------- */}
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
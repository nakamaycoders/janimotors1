import LinearStepper from './LinearStepper'
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
function OuterCredit() {
  return (
  <>
      <CssBaseline />
       <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <LinearStepper />
        </Paper>
      </Container>
      </>
  );
}

export default OuterCredit;

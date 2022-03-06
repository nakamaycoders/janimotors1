import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'

// const vehiclePrice = document.getElementById("vehiclePrice");
// const downPayment = document.getElementById("downPay");
// const AmountOfLoan = document.getElementById("AofLoan");

// const loanTerm = document.getElementById("loanTerm");
// const CalculatedResult = document.getElementById("CalculatedResult");

function Calculator() {
  
  const interest = 4;
  const clearFields = ()=>{
    console.log("fields Cleared");
    setState({val: ""});
    setDPval({val: ""});
    setResult({val: ""});

  }
  const CalculateResult = () =>{
    
    if(isNaN(state.val) || isNaN(DPval.val) || isNaN(monthsStateVal.val)){   //will check if the entered value is a number or not 
      alert("enter a number");
    }else{ 
      let calculatedInterest = parseFloat(interest) /100 /12;
      const x = Math.pow(1 + calculatedInterest,  12);
      const monthly = ((parseFloat(state.val) - parseFloat(DPval.val)) * x * calculatedInterest)/(x-1);
      const finalizedPayment = monthly.toFixed(2);
      console.log(finalizedPayment);
      setResult({val: finalizedPayment});
    }

    
  }
  const [state, setState] = useState({val : ""});
  const [DPval, setDPval] = useState({val : ""});
  const [monthsStateVal, setMonthsStateVal] = useState({val : "12"});
  const [result, setResult] = useState({val: ""})
  // const [NumberError, setNumberError] = useState({style = {{border: "2px solid red"}}})

  return (
    <Container>
      
      <Row>
        <h1
          style={{ color: "white", textAlign: "center", margin: "7px 0 7px 0" }}
        >
          CALCULATOR
        </h1>
      </Row>
      <Row>
        <h3
          style={{ color: "white", textAlign: "left", margin: "7px 0 7px 0" }}
        >
          What Will My Payments Be?
        </h3>
      </Row>
      <Row>
        <p style={{ color: "white", textAlign: "left", margin: "7px 0 7px 0" }}>
          Do you need assistance finding out how to pay for your next car? Allow
          Jani Motor Cars' finance team to assist you. We work with some of the
          most reputable lenders in the industry, so we can get you the
          financing you need at the prices and conditions you deserve. You can
          use the form below to help you plan ahead. It will calculate a monthly
          loan payment estimate for you based on a number of parameters. Simply
          fill out the form with all of your pertinent data and best
          predictions, push calculate, and the form will take care of the rest.
          This is one another tool provided by Jani Motor Cars to make things
          simpler.
        </p>
      </Row>
      <Row>
        <h4
          style={{ color: "white", textAlign: "left", margin: "7px 0 7px 0" }}
        >
          <b>Finance Calculator:</b>
        </h4>
      </Row>
      <Row style={{ margin: "15px 0 15px 0" }}>
        <Col>
        <Form.Label style={{ color: "white" }}>Vehicle Price</Form.Label>
          <Form.Control value={state.val} onChange={e => setState({ val: e.target.value })} className="classForCleanUp" id="vehiclePrice" type="text" placeholder="Vehicle Price" />
        </Col>
        <Col>
        <Form.Label style={{ color: "white" }}>Down Payment</Form.Label>
          <Form.Control value={DPval.val} onChange={e => setDPval({ val: e.target.value })} className="classForCleanUp" id="downPay" type="text" placeholder="Down Payment" />
        </Col>
      </Row>
      <Row style={{ margin: "15px 0 15px 0" }}>
        <Col>
        <Form.Label style={{ color: "white" }}>Amount of Loan</Form.Label>
          <Form.Control className="classForCleanUp" value={state.val} id="AofLoan" type="text" placeholder="Amount of Loan" />
        </Col>
        <Col>
        <Form.Label style={{ color: "white" }}>Interest Rate <b>(ARP)</b></Form.Label>
          <Form.Control className="classForCleanUp" id="interest" value="3.9" type="text" placeholder="Interest" disabled />
        </Col>
      </Row>
      <Row style={{ margin: "15px 0 15px 0" }}>
        <Col>
        <Form.Label style={{ color: "white" }}>Loan Term <b>(months)</b></Form.Label>
          <Form.Control className="classForCleanUp" value={monthsStateVal.val} onChange={e => setMonthsStateVal({ val: e.target.value })} id="loanTerm" type="text" placeholder="Months to Repay" disabled/>
        </Col>
        <Col>
        <Form.Label style={{ color: "white" }}>Estimated payment </Form.Label>
          <Form.Control className="classForCleanUp" id="CalculatedResult" type="text" placeholder="Estimated Payment" value={result.val} disabled />
        </Col>
      </Row>
      <div style={{textAlign: "center", margin: "7px 0 7px 0" }}>
        <Button variant="primary" size="lg" active onClick={CalculateResult}>
        Calculate
        </Button>{" "}
        <Button style={{margin: "7px 0 7px 15px" }} variant="secondary" size="lg" active onClick={clearFields}>
          Clear
        </Button>
        </div>
    </Container>
  );
}

export default Calculator;

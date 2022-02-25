import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { Container } from "@material-ui/core";
import { Row, Col, Container } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
// import { makeStyles } from "@material-ui/styles";
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
// import { Navigate } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../actions'
import { CContainer } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [error,setError] = useState('');
  const auth = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  const userLogin = (e) => {
    e.preventDefault()

    const user = {
      email,
      password,
    }

    dispatch(login(user))
  }

  if (auth.authenticate) {
    return <Redirect to={`/`} />
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <Row style={{ marginTop: '100px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Typography variant="h5" style={{ fontWeight: 'bold' }}>
              Login to Access Dashboard
            </Typography>
            <hr />
            <Form onSubmit={userLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={email}
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </CContainer>
    </div>
  )
}

export default Login

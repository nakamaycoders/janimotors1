import React from 'react'
import './TradeInCar.css'
import { Form, FloatingLabel} from 'react-bootstrap';

const TradeINCar = () => {
    const {
        handleSubmit, // handles form submission
        handleChange, // handles input changes
        data, // access to the form data
        errors, // includes the errors to show
      } = useForm({ // the hook we are going to create
        validations: { // all our validation rules go here
          name: {
            pattern: {
              value: '^[A-Za-z]*$',
              message:
                "You're not allowed ...",
            },
          },
        },
        onSubmit: () => alert('User submitted!'),
        initialValues: { // used to initialize the data
          name: 'John',
        },
      });
    return (
        <div>
            <div className="container text-center">
                <h1 style={{ color: 'blue' }}>WHAT IS MY VEHICLE WORTH?</h1>
                <p>Bring your old car to us, and we can help you trade it in to get something newer and better. We love finding ways to help our customers get the vehicles that they really want. A trade-in will give your budget a boost. Before you know it, you will be able to afford vehicles that were previously out of your reach. This is a great way to get rid of that old car too. This way you can avoid going through the tedious private sale process. You don’t have to drive down here yet. You can get an appraisal for your old vehicle by simply filling out the form below. We want you to have the information that you need to make the right decision without any strings attached.</p>

                <div className="row ">
                    <div className='   col-md-6'>
                        <h2 style={{ color: 'blue' }}>Vehicle information</h2>
                        <Form className='text-start my-3 form1 '>
                            <span style={{ color: 'white' }}>Year</span>
                            <Form.Select className='forms' type="text" placeholder="Normal text" >
                                <option >Select the Year</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>

                            <span style={{ color: 'white' }}>Make</span>
                            <Form.Select className='forms' type="text" placeholder="Normal text" >
                                <option>Select the Make</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <span>Model</span>
                            <Form.Control type="text" placeholder="Model" />
                            <span>VIN</span>
                            <Form.Control type="text" placeholder="Vin" />
                            <span style={{ color: 'white' }}>Body Style</span>
                            <Form.Select className='forms' type="text" placeholder="Body Style" >
                                <option>Select the Body style</option>
                                <option value="1">2 door</option>
                                <option value="2">4 door</option>
                                <option value="3">Hatch Back</option>
                            </Form.Select>

                            <span>TRIM</span>
                            <Form.Control type="text" placeholder="Trim" />

                            <span>Exterior Color</span>
                            <Form.Control type="text" placeholder="Exterior Color" />

                            <span>Interior color</span>
                            <Form.Control type="text" placeholder="Interior color" />

                            <span>Cylinders</span>
                            <Form.Control type="text" placeholder="Cylinders" />

                            <span>Liters</span>
                            <Form.Control type="text" placeholder="Liters" />

                            <span>Mileage</span>
                            <Form.Control type="text" placeholder="Mileage" />

                            <span style={{ color: 'white' }}>Transmission</span>
                            <Form.Select className='forms' type="text" placeholder="Transmission" >
                                <option>Select The Transmission</option>
                                <option value="1">Automatic</option>
                                <option value="2">Manual</option>

                            </Form.Select>
                            
                            <span>Lien Holder</span>
                            <Form.Control type="text" placeholder="Lien Holder" />

                            <span>Estimated Payoff</span>
                            <Form.Control type="text" placeholder="Estimated Payoff" />
                            
                            
                            <span>Additional Options</span>
                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                        





                    </Form>

                </div>

                <div className='col-md-6'>
                    <h2 style={{ color: 'blue' }}>Contact information</h2>
                    <Form className='text-start my-3 '>
                        <span style={{ color: 'white' }}>Year</span>
                        <Form.Select className='forms' type="text" placeholder="Normal text" >
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>

                        <span style={{ color: 'white' }}>Make</span>
                        <Form.Select className='forms' type="text" placeholder="Normal text" >
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        



                    </Form>


                </div>


            </div>


        </div>
        </div >
    )
}

export default TradeINCar
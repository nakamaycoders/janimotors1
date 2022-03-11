import React, { useState, useEffect } from "react";
import "react-datetime/css/react-datetime.css";
import "./TradeInCar.css";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";



const message = "Please fill out th given field correctly you Dumb fuck";
function TradeINCar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  
  const [formError, setFormError] = useState(false);
  const [formmakeError, setFormmakeError] = useState(false);


  // ---------------------------------------------------------------------------

  const [value, setValue] = useState({ val: "" });
  const [makeValue, setmakeValue] = useState({ val: "" });


 
  const handleChange = (e) => {
    setValue({ val: e.target.value });

    setFormError(false);
  };
  // console.log(value.val);
  const handleMakeChange = (e) => {
    setmakeValue({ val: e.target.value });

    setFormmakeError(false);
  };

 

  
  const handleFormSubmission = () => {
    if (value.val == "") {
      setFormError(true);
    } else if (value.val == "") {
      setFormError(false);
    } 
    
    if (makeValue.val == "") {
      setFormmakeError(true);
    } else if (makeValue.val == "") {
      setFormmakeError(false);
    } 

    
    
   
   
  };

       //Gets Years from 1900 to 2022
       const arrayOfyears = [];
       const currentDate = new Date();
       for (let i = 1900; i <= currentDate.getFullYear(); i++) {
         arrayOfyears.push(i);
       }
     
       let optionsForYear = arrayOfyears.map((item) => (
         <option key={item} value={item}>
           {item}
         </option>
       ));
  const obj = [
    "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Bugatti",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Citroën",
    "Dacia",
    "Daewoo",
    "Daihatsu",
    "Dodge",
    "Donkervoort",
    "DS",
    "Ferrari",
    "Fiat",
    "Fisker",
    "Ford",
    "Honda",
    "Hummer",
    "Hyundai",
    "Infiniti",
    "Iveco",
    "Jaguar",
    "Jeep",
    "Kia",
    "KTM",
    "Lada",
    "Lamborghini",
    "Lancia",
    "Land Rover",
    "Landwind",
    "Lexus",
    "Lotus",
    "Maserati",
    "Maybach",
    "Mazda",
    "McLaren",
    "Mercedes-Benz",
    "MG",
    "Mini",
    "Mitsubishi",
    "Morgan",
    "Nissan",
    "Opel",
    "Peugeot",
    "Porsche",
    "Renault",
    "Rolls-Royce",
    "Rover",
    "Saab",
    "Seat",
    "Skoda",
    "Smart",
    "SsangYong",
    "Subaru",
    "Suzuki",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo",
  ];

  let optionItems = obj.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));




  return (
    <div>
      <div className="container text-center">
        <h1 style={{ color: "blue" }}>WHAT IS MY VEHICLE WORTH?</h1>
        <p style={{ color: "white" }}>
          Bring your old car to us, and we can help you trade it in to get
          something newer and better. We love finding ways to help our customers
          get the vehicles that they really want. A trade-in will give your
          budget a boost. Before you know it, you will be able to afford
          vehicles that were previously out of your reach. This is a great way
          to get rid of that old car too. This way you can avoid going through
          the tedious private sale process. You don’t have to drive down here
          yet. You can get an appraisal for your old vehicle by simply filling
          out the form below. We want you to have the information that you need
          to make the right decision without any strings attached.
        </p>

        <div className="row  " style={{margin: "15px 0 15px 0" }}>
          <div className="   col-md-6">
            <h2 style={{ color: "blue" }}>Vehicle Information</h2>
            {/* ---------------------------------------------------------------------------------------- */}
            <form handleSubmit={onSubmit}>
              <div className="form-group text-start">
                <label>Year</label>
                <select
                  className="form-select"
                  value={value.val}
                  onChange={handleChange}
                  
                  
                >
                  <option >Open this select menu</option>
                  {optionsForYear}
                </select>
                {formError && <small className="text-danger">{message}</small>}
              </div>

              <div className="form-group text-start">
                <label className="">Make</label>
                <select
                  className="form-select "
                  value={makeValue.val}
                  onChange={handleMakeChange}
                  aria-label="Default select"
                >
                  <option selected="">Open this select menu</option>
                  {optionItems}
                </select>
                {formmakeError && (
                  <small className="text-danger">{message}</small>
                )}
              </div>

              <div className="form-group text-start">
              <label >Model</label>
              <input
                type="text"
                className={`form-control ${errors.model && "invalid"}`}
                {...register("model", { required: "Model is Required" })}
                onKeyUp={() => {
                  trigger("model");
                }}
              />
              {errors.model && (
                <small className="text-danger">{errors.model.message}</small>
              )}
              </div>
                

              <div className="form-group text-start">
                <label className="">Vin</label>
                <input
                  className="form-control"
                  type="text"
                />
                
              </div>

              <div className="text-start">
                <label> Body Type </label>
                <select className="form-select " aria-label="Default select">
                  <option selected="">Open this select menu</option>
                  <option value="1">Two Door</option>
                  <option value="2">Four Door</option>
                  <option value="3">HatchBack</option>
                </select>
                <small> </small>
              </div>

              <div className="form-group text-start">
                <label className="">Trim</label>
                <input className="form-control" type="text" />
               
              </div>

              <div className="form-group text-start">
                <label className="">Exterior Color</label>
                <input className="form-control" type="text" />
              </div>

              <div className="form-group text-start">
                <label className="">Interior Color</label>
                <input className="form-control" type="text" />
              </div>

              <div className="form-group text-start">
                <label className="">Cylinders</label>
                <input className="form-control" type="text" />
              </div>

              <div className="form-group text-start">
                <label className="">Liters</label>
                <input className="form-control" type="text" />
              </div>

              <div className="form-group text-start">
                <label className="">Milage</label>
                <input className="form-control" type="text" />
              </div>

              <div className="text-start">
                <label> Transmission </label>
                <select className="form-select " aria-label="Default select">
                  <option selected="">Open this select menu</option>
                  <option value="1">Manual</option>
                  <option value="2">Automatic</option>
                  {/* <option value="3">Three</option> */}
                </select>
              </div>

              <div className="form-group text-start">
                <label className="">Lien Holder</label>
                <input className="form-control" type="text" />
              </div>

              <div className="form-group text-start">
                <label className="">Estimated Payoff</label>
                <input className="form-control" type="text" />
              </div>

              <div className="form-group text-start">
                <label htmlFor="">Addition options</label>
                <Form.Control as="textarea" rows={3} />
              </div>
            </form>
          </div>

          <div className="col-md-6">
           
          <h2 style={{ color: "blue" }}>Vehicle Information</h2>


           
           <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group text-start">
              <label >First Name</label>
              <input
                type="text"
                className={`form-control ${errors.FirstName && "invalid"}`}
                {...register("FirstName", { required: "First Name is Required" })}
                onKeyUp={() => {
                  trigger("FirstName");
                }}
              />
              {errors.FirstName && (
                <small className="text-danger">{errors.FirstName.message}</small>
              )}
            </div>
            <div className="form-group text-start">
              <label >Last Name</label>
              <input
                type="text"
                className={`form-control ${errors.LastName && "invalid"}`}
                {...register("LastName", { required: "Last Name is Required" })}
                onKeyUp={() => {
                  trigger("LastName");
                }}
              />
              {errors.LastName && (
                <small className="text-danger">{errors.LastName.message}</small>
              )}
            </div>

            <div className="form-group text-start">
                <label className="">Address</label>
                <input className="form-control" type="text" />
                
              </div>

              <div className="form-group text-start">
                <label className="">City</label>
                <input className="form-control" type="text" />
                
              </div>

              <div className="text-start">
                <label> State </label>
                <select className="form-select " aria-label="Default select">
                  <option selected="">Open this select menu</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AS">American Samoa</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FM">Federated States Of Micronesia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="GU">Guam</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="MP">Northern Mariana Islands</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PW">Palau</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VI">Virgin Islands</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
               
              </div>

              <div className="form-group text-start">
              <label >Zip</label>
              <input
                type="Num"
                className={`form-control ${errors.Zip && "invalid"}`}
                {...register("Zip", { required: "Zip is Required" })}
                onKeyUp={() => {
                  trigger("Zip");
                }}
              />
              {errors.Zip && (
                <small className="text-danger">{errors.Zip.message}</small>
              )}
            </div>

            
            <div  className="form-group text-start">
              <label  >Email</label>
              <input
                type="text"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", { required: "Email is Required" ,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>
            <div className="form-group text-start">
              <label  >Day Phone</label>
              <input
                type="text"
                className={`form-control ${errors.phone && "invalid"}`}
                {...register("phone", { required: "Phone is Required",
                pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no",
                },
               })}
               onKeyUp={() => {
                trigger("phone");
              }}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
            </div> 
            {/* <div className="form-group text-start">
              <label  >Message:</label>
              <textarea
                className={`form-control ${errors.message && "invalid"}`}
                {...register("message", { required: "Message is Required",
                minLength: {
                  value: 10,
                  message: "Minimum Required length is 10",
                },
                maxLength: {
                  value: 50,
                  message: "Maximum allowed length is 50 ",
                }
               })}
               onKeyUp={() => {
                trigger("message");
              }}
              ></textarea>
              {errors.message && (
                <small className="text-danger">{errors.message.message}</small>
              )}
            </div> */}
            <input
              type="submit"
              className="btn btn-primary my-3"
              value="Submit"
              onClick={handleFormSubmission}
            />
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradeINCar;

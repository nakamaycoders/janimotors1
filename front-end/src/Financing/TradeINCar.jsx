import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import "./TradeInCar.css";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Recaptcha from "../components/layout/Recaptcha ";

function TradeINCar() {
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
  let optionItems = obj.map((item) => <option key={item}>{item}</option>);
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
  //Executes when submit is pressed
  const handleSubmition = () => {
    console.log("submit clicked");
  };

  const [year, setYear] = useState("");

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

        <div className="row  ">
          <div className="   col-md-6">
            <h2 style={{ color: "blue" }}>Vehicle Information</h2>

            <form>
              <div className="form-group  text-start">
                <label className="">YEAR</label>
                <Datetime
                  closeOnSelect={true}
                  dateFormat="YYYY"
                  timeFormat={false}
                  onChange={(date) => setYear(date.year())}
                />

                <small>message</small>
              </div>

              <div className="form-group text-start">
                <label className="">Make</label>
                <select class="form-select " aria-label="Default select">
                  <option selected="">Open this select menu</option>
                  {optionItems}
                </select>
                <small>message</small>
              </div>

              <div className="form-group text-start">
                <label className="">Model</label>
                <input className="form-control" type="text" />
                <small>message</small>
              </div>

              <div className="form-group text-start">
                <label className="">Vin</label>
                <input className="form-control" type="text" />
                <small>message</small>
              </div>

              <div className="text-start">
                <label> Body Type </label>
                <select class="form-select " aria-label="Default select">
                  <option selected="">Open this select menu</option>
                  <option value="1">Two Door</option>
                  <option value="2">Four Door</option>
                  <option value="3">HatchBack</option>
                </select>
                <small>message</small>
              </div>

              <div className="form-group text-start">
                <label className="">Trim</label>
                <input className="form-control" type="text" />
                <small>message</small>
              </div>

              <div className="form-group text-start">
                <label className="">Exterior Color</label>
                <input className="form-control" type="text" />
                <small>message</small>
              </div>

              <div className="form-group text-start">
                <label className="">Interior Color</label>
                <input className="form-control" type="text" />
                <small>message</small>
              </div>

              <div className="form-group text-start">
                <label className="">Cylinders</label>
                <input className="form-control" type="text" />
                <small>message</small>
              </div>

              <div className="form-group text-start">
                <label className="">Liters</label>
                <input className="form-control" type="text" />
                <small>message</small>
              </div>

              <div className="form-group text-start">
                <label className="">Milage</label>
                <input className="form-control" type="text" />
                <small>message</small>
              </div>

              <div className="text-start">
                <label> Transmission </label>
                <select class="form-select " aria-label="Default select">
                  <option selected="">Open this select menu</option>
                  <option value="1">Manual</option>
                  <option value="2">Automatic</option>
                  {/* <option value="3">Three</option> */}
                </select>
                <small>message</small>
              </div>

              <div className="form-group text-start">
                <label className="">Lien Holder</label>
                <input className="form-control" type="text" />
                <small>message</small>
              </div>

              <div className="form-group text-start">
                <label className="">Estimated Payoff</label>
                <input className="form-control" type="text" />
                <small>message</small>
              </div>

              <div className="form-group text-start">
                <label htmlFor="">Addition options</label>
                <Form.Control as="textarea" rows={3} />
              </div>
            </form>
          </div>

          <div className="col-md-6">
            <h2 style={{ color: "blue" }}>Contact Information</h2>

            <div className="form-group text-start">
              <label className="">first Name </label>
              <input className="form-control" type="text" required />
              <small>message</small>
            </div>

            <div className="form-group text-start">
              <label className="">Last Name </label>
              <input className="form-control" type="text" required />
              <small>message</small>
            </div>

            <div className="form-group text-start">
              <label className="">Address</label>
              <input className="form-control" type="text" />
              <small>message</small>
            </div>

            <div className="form-group text-start">
              <label className="">City</label>
              <input className="form-control" type="text" />
              <small>message</small>
            </div>

            <div className="text-start">
              <label> State </label>
              <select class="form-select " aria-label="Default select">
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
              <small>message</small>
            </div>

            <div className="form-group text-start">
              <label className="">Zip</label>
              <input className="form-control" type="text" />
              <small>message</small>
            </div>

            <div className="form-group text-start">
              <label className="">Day Phone</label>
              <input className="form-control" type="text" />
              <small>message</small>
            </div>

            <div className="form-group text-start">
              <label className="">Email</label>
              <input className="form-control" type="text" />
              <small>message</small>
            </div>

            <div className="my-3 py-3">
              <Button
                className="but1"
                as="input"
                type="submit"
                value="Submit"
                onClick={handleSubmition}
              />
              <Button className="but1" as="input" type="reset" value="Reset" />
            </div>

            <Recaptcha />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradeINCar;

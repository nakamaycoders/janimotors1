import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../../layout/layout/layout";
import '../Contactus/Contactus.css'
function Contactus() {
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

  // console.log(watch());

  // console.log(errors.name)
  return (
    <Layout>
    <div>
      <div className="container text-center pt-2">
        <h1 className="pt-2" style={{ color: "blue " }}>
          Contact Us
        </h1>
        <p style={{ color: "white" }}>
          Don’t let your questions go unanswered. Call on Jani motors. We can
          answer any questions that you may have about our vehicles, the car
          buying process, or any aspect of our business. If you don’t want to
          pick up the phone, then just use your keyboard and send us an email
          using the provided form below. You can always stop by and see us in
          person too. We have two locations in Chicago and one more out in Las
          Vegas. Our locations are highlighted on the map we have on this page.
          See exactly where we are located and come over to see us today.
        </p>

        <div className="container">
          <div className="row justify-content-sm-center ">
            <div className="col-sm-6 shadow round pt-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group ">
                  <label className="col-form-label col-form-labell" style={{ color: "white" }}>First Name:</label>
                  <input
                    type="text"
                    className={`form-control ${errors.FirstName && "invalid"}`}
                    {...register("FirstName", {
                      required: "First Name is Required",
                    })}
                    onKeyUp={() => {
                      trigger("FirstName");
                    }}
                  />
                  {errors.FirstName && (
                    <small className="text-danger">
                      {errors.FirstName.message}
                    </small>
                  )}
                </div>
                <div className="form-group ">
                  <label className="col-form-label col-form-labell" style={{ color: "white" }}>Last Name:</label>
                  <input
                    type="text"
                    className={`form-control ${errors.LastName && "invalid"}`}
                    {...register("LastName", {
                      required: "Last Name is Required",
                    })}
                    onKeyUp={() => {
                      trigger("LastName");
                    }}
                  />
                  {errors.LastName && (
                    <small className="text-danger">
                      {errors.LastName.message}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label className="col-form-label col-form-labell" style={{ color: "white" }}>Email:</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email && "invalid"}`}
                    {...register("email", {
                      required: "Email is Required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("email");
                    }}
                  />
                  {errors.email && (
                    <small className="text-danger">
                      {errors.email.message}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label className="col-form-label col-form-labell" style={{ color: "white" }}>Phone:</label>
                  <input
                    type="number"
                    className={`form-control ${errors.phone && "invalid"}`}
                    {...register("phone", {
                      required: "Phone is Required",
                      pattern: {
                        value:
                          /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                        message: "Invalid phone no",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("phone");
                    }}
                  />
                  {errors.phone && (
                    <small className="text-danger">
                      {errors.phone.message}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label className="col-form-label col-form-labell" style={{ color: "white !important" }}>Message:</label>
                  <textarea
                    className={`form-control ${errors.message && "invalid"}`}
                    {...register("message", {
                      required: "Message is Required",
                      minLength: {
                        value: 10,
                        message: "Minimum Required length is 10",
                      },
                      maxLength: {
                        value: 50,
                        message: "Maximum allowed length is 50 ",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("message");
                    }}
                  ></textarea>
                  {errors.message && (
                    <small className="text-danger">
                      {errors.message.message}
                    </small>
                  )}
                </div>
                <input
                  type="submit"
                  className="btn btn-primary my-3"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default Contactus;

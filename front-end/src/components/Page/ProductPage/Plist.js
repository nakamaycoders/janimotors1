import React from 'react'

function Plist() {
  return (
    <div className="container-fluid  ">
      <div className="row">
        <div className="col-md-3 col-sm-12" >
          
          filter
        </div>

        <div
          className=" img-fluid  col-md-5 col-sm-12"
          
        >
          <img className="img-fluid"
            src="https://www.chicagomotorcars.com/imagetag/8861/main/f/Used-2020-Aston-Martin-DB11-AMR-V12-Coupe-Stealth-PPF-B-O-Surround-Sound-Carbon-Fiber-LOADED.jpg"
            alt="car"
          />
        </div>

        <div className=" col-md-4 col-sm-12 " >
          <h3>2020 Aston Martin</h3>

		  <div>
			<span className="fw-bolder">Price:</span>
			<span>$54000</span>
			</div>

			<div className="d-flex pt-2">
			<div>
			<span className="fw-bolder">milage:</span>
			<span>$54000</span>
			</div>

			<div className="">
			<span className="fw-bolder ms-5">stock:</span>
			<span>$54000</span>
			</div>

			


			</div>
			<div className=" pt-2">
			<span className="fw-bolder ">Engine:</span>
			<p>5.2L Twin Turbo V12 630hp 516ft. lbs.</p>
			</div>

			<div className="">
			<span className="fw-bolder ">Transmission:</span>
			<p>8-Speed Shiftable Automatic</p>
			</div>
			

        </div>
      </div>
    </div>

  )
}

export default Plist
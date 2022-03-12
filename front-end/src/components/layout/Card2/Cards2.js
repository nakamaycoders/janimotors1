import React from "react";
import "./cards.css";


function Cards2() {
    const useViewport = () => {
        const [width, setWidth] = React.useState(window.innerWidth);
      
        React.useEffect(() => {
          const handleWindowResize = () => setWidth(window.innerWidth);
          window.addEventListener("resize", handleWindowResize);
          return () => window.removeEventListener("resize", handleWindowResize);
        }, []);
      
        // Return the width so we can use it in our components
        return { width };
      }
    //   {console.log(useViewport().width)}
    return (
        <>

            <div className={`container ${!(useViewport().width>800)?"d-flex flex-column":`d-flex flex-row`}`} style={{ marginLeft: "0", width: "100%" }}>
                <div className="sellCar col-md-4 text-center container_foto" >
                    <article className="text-left">
                        <h2>Sell Your Car</h2>
                        <h4>WE'LL BUY YOUR CAR TODAY <br /> START HERE</h4>
                        <button className="btn-go">Click Here</button>
                    </article>
                    <img src="https://www.chicagomotorcars.com/wp-content/uploads/2018/08/sellUsCar.jpg" alt="" />
                </div>

                <div className="creditApp col-md-4 text-center container_foto" >
                    <article className="text-left" >
                        <h2>CREDIT APPLICATION</h2>
                        <h4>GET APPROVED TODAY <br /> START HERE</h4>
                        <button className="btn-go">Click Here</button>
                    </article>
                    <img src="https://www.chicagomotorcars.com/wp-content/uploads/2018/08/credit.jpg" alt="" />
                </div>
                <div className="wrapper2 col-md-6 text-center " >
                    <div className="value container_foto1" >
                    <article className="text-left">
                        <h2>VALUE TRADE IN</h2>
                        <h4>TRADE IN YOUR CAR TODAY <br /> START HERE</h4>
                        <button className="btn-go">Click Here</button>
                    </article>
                    <img src="https://www.chicagomotorcars.com/wp-content/uploads/2018/08/trade_in.jpg" alt="" />
                    </div>
                    <div className="payCal container_foto1" >
                    <article className="text-left resPayCal">
                        <h2>PAYMENT CALCULATOR</h2>
                        <h4>CALCULATE YOUR PAYMENT<br /> START HERE</h4>
                        <button className="btn-go">Click Here</button>
                    </article>
                    <img src="https://www.chicagomotorcars.com/wp-content/uploads/2018/08/calc.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards2;
















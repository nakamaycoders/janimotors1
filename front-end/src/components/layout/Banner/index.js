import React,{useState} from "react";
// import { slidersImages } from "../Navbar/data";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import './style.css'
import Carousel from 'react-bootstrap/Carousel'
import First from '../../../assets/1.jpg'

export const Banner = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
<Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src='https://cdn.pixabay.com/photo/2016/12/03/18/57/car-1880381_960_720.jpg'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={First}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    // <Carousel  infiniteLoop={true} autoFocus={true}>
    //   {slidersImages.map((item) => {
    //     return (
    //       <div key={item.id}>
    //         <img src={item.img} className="img-fluid" alt={item.cName} />
    //       </div>
    //     );
    //   })}
    // </Carousel>
  );
};

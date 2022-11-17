import React from "react";
import { CarouselItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function ProductGen({ title, description, image, image2, image3, image4}) {
  

  return (
    <div className="flex flex-col md:flex-row bg-black gap-x-12 md:mx-36 mb-12">
      <Carousel slide={false} className='w-full md:w-1/2'>
          <CarouselItem >
            <img src={image} alt="product" className="w-full" />
          </CarouselItem>
        <CarouselItem>
          <img src={image2} alt="product" className="w-full" />
        </CarouselItem>
        <CarouselItem>
          <img src={image3} alt="product" className="w-full" />
        </CarouselItem>
        <CarouselItem>
          <img src={image4} alt="product" className="w-full" />
        </CarouselItem>
      </Carousel>
      <div className="text-holder-products py-12 flex-col flex px-12 gap-y-8">
        <h1>{title}</h1>
        <div className="descProd">
          {description.split(";").map((txt) => (
            <p>{txt}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductGen;

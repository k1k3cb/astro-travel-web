import { useState } from "react";
import { sliderData } from "../data/slider";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const Caroussel = () => {

    const [activeSlide, setactiveSlide] = useState(0);
    const length = sliderData.length;

    const prevSlide = () => {
        setactiveSlide(activeSlide === length - 1 ? 0 : activeSlide + 1);
      };
      const nextSlide = () => {
        setactiveSlide(activeSlide === 0 ? length - 1 : activeSlide - 1);
      };
  
  return( 
  
  <section className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center itmes-center" >
      <BsArrowLeftSquareFill className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'onClick={prevSlide}/>
      <BsArrowRightSquareFill className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'onClick={nextSlide}/>
{sliderData.map((slide, index) => (
    <div className={index === activeSlide ? "opacity-100" : "opacity-0"} key={index}>
       {index ===activeSlide && <img src={slide.url} alt="/" className='w-full rounded-md'/>}
    </div>
))}



  </section>
  
  
  
  
  );
};

export default Caroussel;

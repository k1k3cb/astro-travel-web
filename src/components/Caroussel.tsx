import { useState } from "react";
import { sliderData } from "../data/slider";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const Caroussel = () => {

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const length = sliderData.length;

    const prevSlide = () => {
        setActiveSlideIndex(activeSlideIndex === length - 1 ? 0 : activeSlideIndex + 1);
      };
      const nextSlide = () => {
        setActiveSlideIndex(activeSlideIndex === 0 ? length - 1 : activeSlideIndex - 1);
      };
  
  return( 
  
  <section className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center itmes-center" >
      <BsArrowLeftSquareFill className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'onClick={prevSlide}/>
      <BsArrowRightSquareFill className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'onClick={nextSlide}/>
{sliderData.map((slide, index) => (
    <div className={index === activeSlideIndex ? "opacity-100" : "opacity-0"} key={index}>
       {index ===activeSlideIndex && <img src={slide.url} alt="/" className='w-full rounded-md'/>}
    </div>
))}



  </section>
  
  
  
  
  );
};

export default Caroussel;

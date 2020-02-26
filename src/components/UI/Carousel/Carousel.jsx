import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 


const Carousel = (props) => (
    <div>
        <OwlCarousel items={3}
                     className={"owl-theme"}
                     loop
                     nav
                     margin={8} 
                     autoPlay={true}>
          <div ><img  className={"img"} src= {"../../../Images/darkMovieBG.jpg"} alt={"demo"}/></div>  
           <div><img  className={"img"} src= {"../../../Images/darkMovieBG.jpg"} alt={"demo"}/></div>  
           <div><img  className={"img"} src= {"../../../Images/darkMovieBG.jpg"} alt={"demo"}/></div>  
           <div><img  className={"img"} src= {"../../../Images/darkMovieBG.jpg"} alt={"demo"}/></div>  
           <div><img className={"img"} src= {"../../../Images/darkMovieBG.jpg"} alt={"demo"}/></div>  
           <div><img className={"img"} src= {"../../../Images/darkMovieBG.jpg"} alt={"demo"}/></div>  
           <div><img className={"img"} src= {"../../../Images/darkMovieBG.jpg"} alt={"demo"}/></div>               

        </OwlCarousel>
    </div>
)

export default Carousel;
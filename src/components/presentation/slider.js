import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const slider = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 400, min: 300 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 300, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
export default slider;
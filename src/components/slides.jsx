
import { Carousel } from 'rsuite'
import '../assets/CSS/slide.css'
const Carousels = () => {
  return (
    <div>
    <Carousel autoplay className="custom-slider">
    <img src="https://wallpapercave.com/wp/wp9378636.jpg" height="250" />
    <img src="https://images.squarespace-cdn.com/content/v1/5af303183917ee03d2dcddd5/1553720498051-6W57YWNYH4S26PF54HF7/1_dDSCgah8ktW1-HXj_EnhTw.jpeg?format=1500w" height="250" />
    <img src="https://wallpapercave.com/wp/wp2349440.jpg" height="250" />
    <img src="https://images.squarespace-cdn.com/content/v1/545070b7e4b03ea792c15d50/1578530030976-4CLXSVUK3GHRL4HZ4YW1/DSC00771.jpg?format=2500w" height="250" />
    <img src="https://www.icsevents.com/wp-content/uploads/2016/09/Conference3.jpg" height="250" />
  </Carousel>
    </div>
  )
}

export default Carousels

import "./about.css";
import stiger2 from '../images/stiger2.png';

const Home = () => {
  return (
    <>
      <div name="home" className="home">
        <div>Hi there! <br></br>I'm Gagan Gupta, an experienced Full Stack developer with a mission to turn clients' ideas into digital reality</div>
        <div> <img src={stiger2} alt='img' /></div>
      </div>
    </>
  )
}

export default Home
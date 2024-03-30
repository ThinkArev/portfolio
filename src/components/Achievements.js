import "./about.css";
import achievement from '../images/achievement.png';
import achievement1 from '../images/achievement1.JPG';
import achievement2 from '../images/achievement2.png';
import achievement3 from '../images/achievement3.jpg';

const Achievements = () => {
    return (
        <>
            <div name="achievements" className="achievements">
                <p className="text-5xl font-bold border-b-4 border-gray-500 pt-20 text-center">Achievements</p>
                <p className="">Here is an overview of my recent achievements in successfully delivering projects and contributing to their success</p>

                <div className="achievements-cont">
                    <div className="starleft"><img src={achievement} alt='achievement' /></div>
                    <div><img src={achievement1} alt='achievement1' /></div>
                    <div className="cash"><img src={achievement3} alt='achievement' /></div>
                    <div><img src={achievement2} alt='achievement1' /></div>
                    <div className="starright"><img src={achievement} alt='achievement' /></div>
                </div>


            </div>
        </>
    )
}

export default Achievements
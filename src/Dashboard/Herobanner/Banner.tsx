import "./Banner.css";
import Avatar from '../../Images/Avatar.png';
import watcher from '../../Images/Thewitcher.jpg';
import { LuPlus } from "react-icons/lu";

const Banner = () => {
  return (
    <section>
      <div className="banner_section">
        {/* <img src={watcher} alt="" /> */}
        <div className="banner_content">
          <h4 className="banner_h1">10XP / episode</h4>
          <div className="banner_content_images">
            <img src={Avatar} alt="avatar" />
            <img src={Avatar} alt="avatar" />
            <img src={Avatar} alt="avatar" />
          </div>
          <p>+5 friends are watching</p>
        </div>

        <div className="banner_titles">
          <h1>The Witcher</h1>
          <div className="banner_titles_info">
            <p>98% Match</p>
            <p>2 seasons</p>
          </div>
        </div>

        <div className="banner_description">
          <div className="banner_buttons">
            <button className="banner_btn1">Watch</button>
            <button className="banner_btn2"><LuPlus size={20}/></button>
          </div>

          <div className="banner_subimages">
            <img src={watcher} alt="" />
            <img src={watcher} alt="" />
            <img src={watcher} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

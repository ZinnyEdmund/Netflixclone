import './Avatar.css'
import { LuPlus } from "react-icons/lu";
import My_Avatar from '../../Images/Avatar.png'

const Avatar = () => {
  return (
    <section>
      <div className="avatar_section">
        <button className="avatar_button">
          <LuPlus size={24} color='white'/>
        </button>
        <picture className="my_avatar">
          <img src={My_Avatar} alt="My_Avatar" />
          <img src={My_Avatar} alt="My_Avatar" />
          <img src={My_Avatar} alt="My_Avatar" />
          <img src={My_Avatar} alt="My_Avatar" />
          <img src={My_Avatar} alt="My_Avatar" />
          <img src={My_Avatar} alt="My_Avatar" />
          <img src={My_Avatar} alt="My_Avatar" />
        </picture>
      </div>
    </section>
  );
};

export default Avatar;

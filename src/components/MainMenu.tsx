import mainMenu from "../data/main-menu.json";
import { IoMdMenu } from "react-icons/io";

const MainMenu = () => {
  return (
    <div className="main-menu">
      {mainMenu.map((item, index) => (
        <span key={index} className="desktop-menu-item">
          {item}
        </span>
      ))}
      <IoMdMenu size={40} className="mobile-menu-icon" />
    </div>
  );
};

export default MainMenu;

import { IoSearchOutline, IoHeartOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";

const NavIcons = () => {
  return (
    <div className="nav-icons">
      <FiUserPlus />
      <IoSearchOutline />
      <IoHeartOutline />
      <BsCart2 />
    </div>
  );
};

export default NavIcons;

import logoImg from "../assets/Meubel House_Logos-05.svg";

const Logo = () => {
  return (
    <div className="mainLogo">
      <img src={logoImg} alt="" />
      <span>Furniro</span>
    </div>
  );
};

export default Logo;

import Homelogo from "../assets/HomeLogo.svg";
import Mylogo from "../assets/MyLogo.svg";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <img
        src={Homelogo}
        alt="Homelogo"
        className="Homelogo"
        onClick={() => navigate("/Main")}
      ></img>
      <img
        src={Mylogo}
        alt="Mylogo"
        className="Mylogo"
        onClick={() => navigate("/Mypage")}
      ></img>
    </div>
  );
}

export default Header;

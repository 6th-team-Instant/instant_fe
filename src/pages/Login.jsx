import "./../styles/Login.css";
import Logo from "../assets/Logo.svg";
import LoginBar from "../assets/LoginBar.svg";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="Login-top">
        <img src={Logo} alt="Logo" className="Logo"></img>
        <img src={LoginBar} alt="Loginbar" className="Loginbar"></img>
      </div>
      <div className="Login-bottom">
        <div className="Id-password">
          <input type="text" placeholder="아이디를 입력하세요" />
          <input type="password" placeholder="비밀번호를 입력하세요" />
        </div>
        <button className="Login-button" onClick={() => navigate("/Main")}>
          로그인
        </button>
      </div>
      <button className="Signup-button">회원가입</button>
    </div>
  );
}

export default Login;

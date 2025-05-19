import { useNavigate } from "react-router-dom";
import "../styles/SignUp.css";
import Myphoto from "../assets/Myphoto.svg";

function SignUp() {
  const navigate = useNavigate();
  return (
    <div className="SignUp">
      <div className="SmyPhoto">
        <img src={Myphoto} alt="Smyphoto" />
      </div>

      <div className="input-container">
        <p className="Signtitle">이름</p>
        <input type="text" placeholder="이름을 입력하세요" />
      </div>
      <div className="input-container">
        <p className="Signtitle">아이디</p>
        <input type="text" placeholder="아이디를 입력하세요" />
      </div>
      <div className="input-container">
        <p className="Signtitle">비밀번호</p>
        <input type="password" placeholder="비밀번호를 입력하세요" />
      </div>
      <div className="input-container">
        <p className="Signtitle">이메일</p>
        <input type="text" placeholder="이메일을 입력하세요" />
      </div>
      <div className="input-container">
        <p className="Signtitle">전화번호</p>
        <input type="text" placeholder="전화번호를 입력하세요" />
      </div>
      <div className="Sign-button">
        {" "}
        <button className="Signup-button" onClick={() => navigate("/")}>
          회원가입
        </button>
        <button className="cancel-button" onClick={() => navigate("/")}>
          취 소
        </button>
      </div>
    </div>
  );
}

export default SignUp;

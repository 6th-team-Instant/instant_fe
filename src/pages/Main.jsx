import { useState } from "react";
import Header from "../components/Header";
import TabMenu from "../components/TabMenu";
import "../styles/TabMenu.css";
import "../styles/MainPage.css"; 
import Eungtal from "../assets/Eungtal.svg";
import Bookmarkimg from "../assets/Bookmarkimg.svg";

function Main() {
  const [activeTab, setActiveTab] = useState("Main");

  return (
    <div>
      <Header />
      <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="ContentArea">
        {activeTab === "Main" && (
          <div className="PageWrapper">
            <p className="PageTitle">응현이의 일탈</p>

            <div className="ImageRow">
              <img src={Eungtal} alt="응현" className="PreviewImage" />
            </div>

            <div className="TextBlock">
              <p>금요일에 개강을 하는 것에
              큰 충격을 받은 김응현씨는 
              그만 다변량 수업을 들어오지
              않는 큰 실수를 하는데...</p>

              
            </div>
            <div className="Bookmark">
              <img src={Bookmarkimg} alt="북마크" className="Bookmarkimgs" />
            </div>
          </div>
        )}

        {activeTab === "Sports" && <p>Sports 콘텐츠</p>}
        {activeTab === "Politics" && <p>Politics 콘텐츠</p>}
        {activeTab === "Entertainments" && <p>Entertainments 콘텐츠</p>}
      </div>
    </div>
  );
}

export default Main;

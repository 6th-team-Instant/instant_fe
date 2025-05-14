import { useState } from "react";
import Header from "../components/Header";
import TabMenu from "../components/TabMenu";
import "../styles/TabMenu.css";
import "../styles/MainPage.css"; 
import Eungtal from "../assets/EungEnt.svg";
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
            <p className="PageTitle">김지완의 연애의혹</p>

            <div className="ImageRow">
              <img src={Eungtal} alt="응현" className="PreviewImage" />
            </div>

            <div className="TextBlock">
              <p>김지완, 문씨와 비밀 연애 의혹 
                아직 소속사 측 공식의견은 나오지
                않아... 
                </p>

              
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


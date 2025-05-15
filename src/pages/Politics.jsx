import { useState } from "react";
import Header from "../components/Header";
import TabMenu from "../components/TabMenu";
import "../styles/TabMenu.css";
import "../styles/MainPage.css";
import Eungtal from "../assets/EungNone.svg";
import Bookmarkimg from "../assets/Bookmarkimg.svg";
import FullBookmarkimg from "../assets/FullBookmarkimg.svg";

function Main() {
  const [activeTab, setActiveTab] = useState("Main");
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div>
      <Header />
      <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="ContentArea">
        {activeTab === "Main" && (
          <div className="PageWrapper">
            <p className="PageTitle">송주원의 시사토론</p>

            <div className="ImageRow">
              <img src={Eungtal} alt="응현" className="PreviewImage" />
            </div>

            <div className="TextBlock">
              <p>
                KAIST 학생 자살을 계기로 경쟁 중심의 교육 개혁과 그 부작용에
                대한 논란이 커져만가...
              </p>
            </div>
            <div className="Bookmark">
              <img
                src={bookmarked ? FullBookmarkimg : Bookmarkimg}
                alt="북마크"
                className="Bookmarkimgs"
                onClick={toggleBookmark}
                style={{ cursor: "pointer" }}
              />
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

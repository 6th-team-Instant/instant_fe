import { useState } from "react";
import Header from "../components/Header";
import TabMenu from "../components/TabMenu";
import "../styles/TabMenu.css";
import "../styles/MainPage.css";
import Eungtal from "../assets/Eungil.svg";
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
            <p className="PageTitle">박지섭의 풋살</p>

            <div className="ImageRow">
              <img src={Eungtal} alt="응현" className="PreviewImage" />
            </div>

            <div className="TextBlock">
              <p>박지섭의 풋살 실력 하락세 컴공 축구를 이끌어갈 수 있나..</p>
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

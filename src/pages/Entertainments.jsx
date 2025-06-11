import { useState } from "react";
import Header from "../components/Header";
import TabMenu from "../components/TabMenu";
import "../styles/TabMenu.css";
import "../styles/MainPage.css";
import Bookmarkimg from "../assets/Bookmarkimg.svg";
import FullBookmarkimg from "../assets/FullBookmarkimg.svg";
import LinkIcon from "../assets/Link.svg";

function Main() {
  const [activeTab, setActiveTab] = useState("Main");
  const [bookmarked, setBookmarked] = useState(false); // 북마크 상태 저장

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
            <p className="PageTitle">
              타진요에 연예인도 있었다 타블로, 15년만에 밝힌 충격 진실
            </p>

            <div className="TextBlock">
              <p>
                - 타블로는 타진요 사건 당시 자신을 공격한 가담자 중 연예인이
                있었다고 밝혔다.
                <br />
                <br />- 그는 해당 인물과 친구였다고 생각했지만 법적 대응에
                포함시키지 않았다고 말했다.
                <br />
                <br />- 타진요는 2010년 타블로의 스탠퍼드 학력을 조작이라 주장한
                카페로, 주요 회원들은 명예훼손 혐의로 실형 또는 집행유예를
                선고받았다.
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
              <img src={LinkIcon} alt="공유" className="Link" />
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

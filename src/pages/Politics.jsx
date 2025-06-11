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
            <p className="PageTitle">
              인도 “현지 투자시 EV 관세혜택”…테슬라 불참에 현대차·기아 ‘기회’
            </p>

            <div className="TextBlock">
              <p>
                - 인도 정부는 현지 전기차 공장에 5억 달러 이상 투자하는 기업에
                수입산 전기차 관세를 15%로 낮춰주는 정책을 도입했다.
                <br />
                <br />- 테슬라는 현지 공장 설립을 보류한 반면, 현대차·기아는
                정책 참여를 검토 중이며 시장 점유율 확대 기회로 평가된다.
                <br />
                <br />- 중국 BYD는 안보 이유로 투자 승인을 받지 못해, 인도
                정부의 정책이 현대차·기아에 유리하게 작용할 가능성이 크다.
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

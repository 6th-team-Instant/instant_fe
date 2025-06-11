import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";
import Header from "../components/Header";
import TabMenu from "../components/TabMenu";
import dummyData from "../data/dummyData.jsx";
import "../styles/TabMenu.css";
import "../styles/MainPage.css";
import Bookmarkimg from "../assets/Bookmarkimg.svg";
import FullBookmarkimg from "../assets/FullBookmarkimg.svg";
import LinkIcon from "../assets/Link.svg";

function Main() {
  const [activeTab, setActiveTab] = useState("Main");
  const [cards, setCards] = useState(dummyData);

  const toggleBookmark = (id) => {
    setCards((prev) =>
      prev.map((c) => (c.id === id ? { ...c, bookmarked: !c.bookmarked } : c))
    );
  };

  return (
    <div>
      <Header />
      <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="ContentArea">
        {activeTab === "Main" && (
          <Swiper
            direction="vertical"
            slidesPerView={1}
            spaceBetween={0}
            mousewheel
            modules={[Mousewheel]}
            style={{
              height: "calc(100vh - 56px - 48px)",
            }}
          >
            {cards.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="PageWrapper">
                  <p className="PageTitle">{item.title}</p>
                  <div className="TextBlock">
                    <p style={{ whiteSpace: "pre-wrap" }}>{item.summary}</p>
                  </div>
                  <div className="Bookmark">
                    <img
                      src={item.bookmarked ? FullBookmarkimg : Bookmarkimg}
                      alt="북마크"
                      onClick={() => toggleBookmark(item.id)}
                      style={{ cursor: "pointer" }}
                    />
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={LinkIcon} alt="공유" className="Link" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default Main;

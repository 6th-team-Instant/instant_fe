import "./../styles/MyPage.css";
import Myphoto from "../assets/Myphoto.svg";
import MyBar from "../assets/MypageBar.svg";
import Fullbookmark from "../assets/FullBookmark.svg";
import Emptybookmark from "../assets/EmptyBookmark.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dummyData from "../data/DummyDate";

function MyPage() {
  const [bookmarks, setBookmarks] = useState([]);
  const navigate = useNavigate();

  const toggleBookmark = (id) => {
    const updated = bookmarks.map((item) =>
      item.id === id ? { ...item, bookmark: !item.bookmark } : item
    );
    setBookmarks(updated);
    localStorage.setItem("bookmarkData", JSON.stringify(updated));
  };

  useEffect(() => {
    const saved = localStorage.getItem("bookmarkData");
    if (saved) {
      setBookmarks(JSON.parse(saved));
    } else {
      setBookmarks(dummyData);
      localStorage.setItem("bookmarkData", JSON.stringify(dummyData));
    }
  }, []);

  return (
    <div>
      <div className="Mypage-top">
        <p>My page</p>
        <button>수정</button>
      </div>
      <div className="Mypage-mid">
        <img src={Myphoto} alt="Myphoto" />
        <p className="Myname">송주원</p>
        <img src={MyBar} alt="MyBar" />
      </div>
      <div className="Mypage-bottom">
        <button className="More-button" onClick={() => navigate("/Bookmark")}>
          더보기
        </button>
        {bookmarks
          .filter((item) => item.bookmark)
          .map((item) => (
            <div className="Mypage-box" key={item.id}>
              <span>{item.title}</span>
              <button onClick={() => toggleBookmark(item.id)}>
                <img
                  src={item.bookmark ? Fullbookmark : Emptybookmark}
                  alt="bookmark"
                />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MyPage;

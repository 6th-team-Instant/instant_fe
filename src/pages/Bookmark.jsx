import { useEffect, useState } from "react";
import Fullbookmark from "../assets/FullBookmark.svg";
import Emptybookmark from "../assets/EmptyBookmark.svg";
import "../styles/Bookmark.css";

function Bookmark() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("bookmarkData");
    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  }, []);

  const toggleBookmark = (id) => {
    const updated = bookmarks.map((item) =>
      item.id === id ? { ...item, bookmark: !item.bookmark } : item
    );
    setBookmarks(updated);
    localStorage.setItem("bookmarkData", JSON.stringify(updated));
  };

  return (
    <div className="Bookmark-top">
      <p>Bookmark</p>
      {bookmarks
        .filter((item) => item.bookmark)
        .map((item) => (
          <div className="Bookmark-box" key={item.id}>
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
  );
}

export default Bookmark;

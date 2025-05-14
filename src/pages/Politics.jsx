import { useState } from "react";
import Header from "../components/Header";
import TabMenu from "../components/TabMenu"; 
import "../styles/TabMenu.css";

function Main() {
  const [activeTab, setActiveTab] = useState("Politics");

  return (
    <div>
      <Header />
      <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="ContentArea">
        {activeTab === "Main" && <p>Main 콘텐츠</p>}
        {activeTab === "Sports" && <p>Sports 콘텐츠</p>}
        {activeTab === "Politics" && <p>Politics 콘텐츠</p>}
        {activeTab === "Entertainments" && <p>Entertainments 콘텐츠</p>}
      </div>
    </div>
  );
}

export default Main;

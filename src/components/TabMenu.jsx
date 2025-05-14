import { NavLink } from "react-router-dom";
import "../styles/TabMenu.css";

function TabMenu() {
  const tabs = [
    { name: "Main", path: "/Main" },
    { name: "Sports", path: "/sports" },
    { name: "Politics", path: "/politics" },
    { name: "Entertainments", path: "/entertainments" },
  ];

  return (
    <div className="TabMenu">
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          to={tab.path}
          className={({ isActive }) =>
            `TabItem${isActive ? " active" : ""}`
          }
          end={tab.path === "/"} 
        >
          {tab.name}
        </NavLink>
      ))}
    </div>
  );
}

export default TabMenu;

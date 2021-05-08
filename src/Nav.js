import React from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`Nav ${show && "Nav-black"}`}>
      <img
        className="Nav-logo"
        src="https://logosmarken.com/wp-content/uploads/2020/04/Netflix-Logo.png"
        alt="Netflix logo"
      />
      <img
        className="Nav-avatar"
        src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E.jpg"
        alt="Smiley Avatar"
      />
    </div>
  );
}

export default Nav;

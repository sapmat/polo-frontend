import LeftBar from "./LeftBar";
import "./style.css"

const CenterBody = () => {
  return (
    <div className="center-body">
      <LeftBar />
      {/* router page (main page / current playlist / profile) */}
      {/* right bar (current song / queue) */}
    </div>
  );
};

export default CenterBody;

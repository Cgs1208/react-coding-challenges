import "./App.css";
import { HeartIcon, SpinnerIcon } from "./icons";
import { useState } from "react";

function App() {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="App">
      <button
        className={`likeBtn ${liked ? "liked" : ""}`}
        onClick={handleLike}
      >
        <HeartIcon />
        {liked ? "Liked" : "Like"}
      </button>
    </div>
  );
}

export default App;

import "./App.css";
import { HeartIcon, SpinnerIcon } from "./icons";
import { useState } from "react";
import { URL } from "./constants";

function App() {
  const [liked, setLiked] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const handleLikeUnlike = async () => {
    setIsFetching(true);
    setError(null);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: liked ? "unlike" : "like" }),
      });
      console.log(await response.json());
    } finally {
      setIsFetching(false);
    }

    setLiked(!liked);
  };

  return (
    <div className="App">
      <button
        className={`likeBtn ${liked ? "liked" : ""}`}
        onClick={handleLikeUnlike}
      >
        <HeartIcon />
        {liked ? "Liked" : "Like"}
      </button>
    </div>
  );
}

export default App;

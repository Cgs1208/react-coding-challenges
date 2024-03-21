import "./App.css";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="user-search-container">
      <div className="user-search-input">
        {/* pills */}
        {/* input field with suggestions */}
        <div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search an user"
          />
          {/* search suggestions */}
        </div>
      </div>
    </div>
  );
}

export default App;

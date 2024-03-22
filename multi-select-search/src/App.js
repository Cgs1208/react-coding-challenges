import "./App.css";
import { useState, useEffect } from "react";

const URL = "https://dummyjson.com/users/search?q=";

function App() {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const [selectedUsersSet, setSelectedUsersSet] = useState(new Set());

  const fetchUsers = async () => {
    const response = await fetch(`${URL}${searchText}`);
    const data = await response.json();
    setSuggestions(data);
  };

  useEffect(() => {
    if (searchText.trim() === "") {
      setSuggestions([]);
      return;
    }
    fetchUsers();
  }, [searchText]);

  const handleSelectedUsers = (user) => {
    if (typeof user === "object" && user !== null) {
      setSelectedUsers([...selectedUsers, user]);
      setSelectedUsersSet(new Set([...selectedUsersSet, user.email]));
      setSearchText("");
      setSuggestions([]);
    }
  };
  console.log(selectedUsers);

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
          <ul className="suggestions-list">
            {suggestions?.users?.map((user, index) => {
              return !selectedUsersSet.has(user.email) ? (
                <li key={user.email} onClick={() => handleSelectedUsers(user)}>
                  <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                  />
                  <span>
                    {user.firstName} {user.lastName}
                  </span>
                </li>
              ) : (
                <></>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

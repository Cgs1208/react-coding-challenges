import "./App.css";
import { useState, useEffect, useRef } from "react";
import Pills from "./components/Pills";

const URL = "https://dummyjson.com/users/search?q=";

function App() {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const inputRef = useRef(null);

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
      inputRef.current.focus();
    }
  };

  const handleRemoveUser = (user) => {
    const updatedUsers = selectedUsers.filter(
      (selectedUser) => selectedUser.email !== user.email
    );
    setSelectedUsers(updatedUsers);

    const updatedEmails = new Set(selectedUsersSet);
    updatedEmails.delete(user.email);
    setSelectedUsersSet(updatedEmails);
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" &&
      e.target.value === "" &&
      selectedUsers.length > 0
    ) {
      const lastUser = selectedUsers[selectedUsers.length - 1];
      handleRemoveUser(lastUser);
      setSuggestions([]);
    }
  };

  return (
    <div className="user-search-container">
      <div className="user-search-input">
        {/* pills */}
        {selectedUsers.map((user) => {
          return (
            <Pills
              key={user.email}
              image={user.image}
              text={`${user.firstName} ${user.lastName}`}
              onClick={() => handleRemoveUser(user)}
            />
          );
        })}
        {/* input field with suggestions */}
        <div>
          <input
            ref={inputRef}
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search an user"
            onKeyDown={handleKeyDown}
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

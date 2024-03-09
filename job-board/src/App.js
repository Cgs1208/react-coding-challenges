import "./App.css";
import JobPosting from "./components/JobPosting";
import { API_ENDPOINT, ITEMS_PER_PAGE } from "./constants";
import { useState } from "react";

const EXAMPLE = {
  by: "jamilbk",
  id: 35908337,
  score: 1,
  time: 1683838872,
  title: "Firezone (YC W22) is hiring Elixir and Rust engineers",
  type: "job",
  url: "https://www.ycombinator.com/companies/firezone/jobs",
};

function App() {
  const [items, setItems] = useState([EXAMPLE, EXAMPLE]); //holds all of our job hostings

  return (
    <div className="app">
      <h1 className="title">Hacker News Job Board</h1>
      {items.length < 1 ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="items" role="list">
          {items.map((item) => {
            return <JobPosting key={item.id} {...item} />;
          })}
        </div>
      )}
      <button className="load-more">Load more jobs</button>
    </div>
  );
}

export default App;

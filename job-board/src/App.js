import "./App.css";
import JobPosting from "./components/JobPosting";
import { API_ENDPOINT, ITEMS_PER_PAGE } from "./constants";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]); //holds all of our job hostings
  const [itemsId, setItemsId] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchItems = async (currentPage) => {
    setCurrentPage(currentPage);
    setIsFetching(true);

    let itemsIdList = itemsId;
    if (itemsIdList === null) {
      const response = await fetch(`${API_ENDPOINT}/jobstories.json`);
      itemsIdList = await response.json();
      setItemsId(itemsIdList);
    }

    //pagination logic
    const itemsIdForPage = itemsIdList.slice(
      currentPage * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );

    const itemsPerPage = await Promise.all(
      itemsIdForPage.map((itemId) =>
        fetch(`${API_ENDPOINT}/item/${itemId}.json`).then((res) => res.json())
      )
    );

    setItems([...items, ...itemsPerPage]);
    setIsFetching(false);
  };

  useEffect(() => {
    if (currentPage === 0) fetchItems(0);
  }, []);

  return (
    <div className="app">
      <h1 className="title">Hacker News Job Board</h1>
      {itemsId === null || items.length < 1 ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="items" role="list">
          {items.map((item) => {
            return <JobPosting key={item.id} {...item} />;
          })}
        </div>
      )}
      <button className="load-more" onClick={() => fetchItems(currentPage + 1)}>
        {isFetching ? "Loading" : "Load more jobs"}
      </button>
    </div>
  );
}

export default App;

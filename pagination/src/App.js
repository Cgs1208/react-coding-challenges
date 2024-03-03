import "./App.css";
import { useEffect, useState } from "react";
import { URL } from "./utils/constants";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    if (data && data.products) {
      setProducts(data.products);
      console.log(data.products);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const selectedPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  return (
    <div>
      <div className="products">
        {products.length > 0 &&
          products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <span className="products__single" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            );
          })}
      </div>
      {products.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectedPageHandler(page - 1)}
            className={page > 1 ? "" : "pagination__disabled"}
          >
            ⏮️
          </span>
          {[...Array(products.length / 10)].map((_, i) => (
            <span
              key={i + 1}
              onClick={() => selectedPageHandler(i + 1)}
              className={page === i + 1 ? "pagination__selected" : ""}
            >
              {i + 1}
            </span>
          ))}
          <span
            onClick={() => selectedPageHandler(page + 1)}
            className={
              page < products.length / 10 ? "" : "pagination__disabled"
            }
          >
            ⏭️
          </span>
        </div>
      )}
    </div>
  );
}

export default App;

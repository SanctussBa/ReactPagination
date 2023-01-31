import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import { Data } from "./types";
import Pagination from "./components/Pagination";

function App() {
  const [list, setList] = useState<Data[]>([] as Data[]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(4);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setList(data.products);
    };
    fetchData();
  }, []);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = list.slice(firstItemIndex, lastItemIndex);
  return (
    <div className="main">
      <h1> React Pagination </h1>
      <List list={currentItems} />
      <Pagination
        totalItems={list.length}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;

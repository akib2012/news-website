import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Newscard from "./Newscard";

const CaterogiNews = () => {
  const [news, setNews] = useState([]);
  const [allNews, setAllNews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Fetch data once when component mounts
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setAllNews(data))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  useEffect(() => {
    if (allNews.length === 0) return; // Wait until data is loaded

    // Filter by category
    const filteredByCategory = allNews.filter(
      (item) => String(item.category_id) === id
    );

    // Filter breaking news
    const breakingNews = allNews.filter(
      (item) => item.others?.is_today_pick === true
    );

    if (id === "0") {
      setNews(allNews);
    } else if (id === "1") {
      setNews(breakingNews);
    } else {
      setNews(filteredByCategory);
    }
  }, [id, allNews]);

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Dragon News Home</h3>

      {news.length === 0 ? (
        <p>No news found for this category.</p>
      ) : (
        news.map((singleNews, index) => (
          <Newscard key={index} news={singleNews} />
        ))
      )}
    </div>
  );
};

export default CaterogiNews;

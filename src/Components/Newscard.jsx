import React from "react";
import { Link } from "react-router";

const Newscard = ({ news }) => {
  
  const rating = Math.round(news?.rating?.number || 0);

  return (
    <div>
      <div className="max-w-fit px-4 mb-4 mx-5 bg-white rounded-xl shadow-md overflow-hidden">
        {/* Author & Date */}
        <div className="flex items-center p-4">
          <img
            className="w-10 h-10 rounded-full mr-3"
            src={news.author.img}
            alt="Author"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">
              {news.author.name}
            </p>
            <p className="text-xs text-gray-500">
              {new Date(news.author.published_date).toLocaleDateString()}
            </p>
          </div>
          <div className="ml-auto flex space-x-2 text-gray-400">
            <button title="Bookmark" className="hover:text-gray-600">
              🔖
            </button>
            <button title="Share" className="hover:text-gray-600">
              🔗
            </button>
          </div>
        </div>

        {/* Title */}
        <h2 className="px-4 text-lg font-bold text-gray-900">{news.title}</h2>

        {/* Image */}
        <img
          className="w-full h-48 object-cover mt-2"
          src={news.thumbnail_url}
          alt="News"
        />

        {/* Description */}
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-2">
            {news.details.length > 200
              ? `${news.details.slice(0, 200)}...`
              : news.details}
          </p>
          <Link to={`/newsdetils/${news.id}`} href="#" className="text-red-500 font-medium hover:underline">
            Read More
          </Link>
        </div>

        {/* Ratings & Views */}
        <div className="px-4 pb-4 flex items-center justify-between text-gray-500 text-sm">
          <div className="flex items-center space-x-1">
            {/* Dynamic Stars */}
            <span className="text-yellow-400 text-lg">
              {Array.from({ length: rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </span>
            <span>{news.rating.number}</span>
          </div>

          <div className="flex items-center space-x-1">
            <span>👁️</span>
            <span>{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newscard;

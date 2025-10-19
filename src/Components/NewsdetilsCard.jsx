import React from "react";
import { Link, Navigate } from "react-router";

const NewsdetilsCard = ({ news }) => {
  return (
    <div className="max-w-[700px] flex justify-end">
      <div className="bg-white rounded-xl shadow-md overflow-hidden border">
        {/* Image */}
        <img
          className="w-full h-64 object-cover"
          src={news.image_url || news.thumbnail_url}
          alt={news.title}
        />

        {/* Content */}
        <div className="p-6">
          {/* Author */}
          <div className="flex items-center mb-4">
            <img
              src={news.author?.img}
              alt={news.author?.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-semibold text-gray-800">{news.author?.name}</p>
              <p className="text-sm text-gray-500">
                {news.author?.published_date
                  ? new Date(news.author.published_date).toLocaleDateString()
                  : ""}
              </p>
            </div>
            {news.rating?.number && (
              <span className="ml-auto text-sm bg-yellow-100 text-yellow-600 font-medium px-3 py-1 rounded-full">
                ⭐ {news.rating.number}
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 mb-3">{news.title}</h2>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {news.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Details */}
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            {news.details}
          </p>

          <div className="flex items-center justify-between">
            <Link to={`/categorisnews/${news.category_id}`}><button
             /*  onClick={() => Navigate(-1)} */
              className="flex items-center text-sm text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition"
            >
              ← All news in this category
            </button></Link>

            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <span>👁️ {news.total_view}</span>
              {news.rating?.badge && (
                <span className="uppercase text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-medium">
                  {news.rating.badge}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsdetilsCard;

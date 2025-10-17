import React from "react";

const Newscard = ({ news }) => {

    
  return (
    <div>
      <div className="max-w-fit  px-4 mb-4 mx-5 bg-white rounded-xl shadow-md overflow-hidden">
        {/* Author & Date */}
        <div className="flex items-center p-4">
          <img
            className="w-10 h-10 rounded-full mr-3"
            src={news.author.img}
            alt="Author"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">Awlad Hossain</p>
            <p className="text-xs text-gray-500">2022-08-21</p>
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
        <h2 className="px-4 text-lg font-bold text-gray-900">
          Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
          Aid Package Yet
        </h2>

        {/* Image */}
        <img
          className="w-full h-48 object-cover mt-2"
          src={news.thumbnail_url}
          alt="News"
        />

        {/* Description */}
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-2">
            Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
            Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
            United States, Worthy News (Worthy News) – U.S. President Joe Biden
            has announced nearly $3 billion in new U.S. military a...
          </p>
          <a href="#" className="text-red-500 font-medium hover:underline">
            Read More
          </a>
        </div>

        {/* Ratings & Views */}
        <div className="px-4 pb-4 flex items-center justify-between text-gray-500 text-sm">
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">★ ★ ★ ★ ★</span>
            <span>4.9</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>👁️</span>
            <span>499</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newscard;

import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
  console.log(news.id);

  return (
    <div className="w-[789px] h-  mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image */}
      <img
        className="w-[789px] h-[441px] object-cover"
        src={news.image_url}
        alt={news.title}
      />

      {/* Card Content */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-3 text-start">{news.title}</h2>

        {/* Details */}
        <p className="text-gray-600 mb-4 text-start">
          {news.details}
        </p>

        {/* Back to Category Button */}
        <div className="flex justify-start">
          <Link
            to={`/category/${news.category_id}`}
            className="btn btn-secondary text-white w-[328px] font-medium "
          >
            All news in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;

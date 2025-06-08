import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job, onFavoriteToggle }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Load favorite state from localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteJobs")) || [];
    setIsFavorite(storedFavorites.includes(job.job_id));
  }, [job.job_id]);

  const handleFavoriteClick = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteJobs")) || [];

    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = storedFavorites.filter((id) => id !== job.job_id);
    } else {
      updatedFavorites = [...storedFavorites, job.job_id];
    }

    localStorage.setItem("favoriteJobs", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);

    if (onFavoriteToggle) onFavoriteToggle(job.job_id, !isFavorite); // notify parent
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-2xl mx-auto my-6 transform transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
      <div className="flex items-start justify-between gap-4">
        {/* Content */}
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{job.job_title}</h2>
          <p className="text-gray-600 text-sm sm:text-base mt-1">
            {job.company_name} • {job.location}
          </p>
          <div className="mt-3 flex items-center gap-2 text-lg font-semibold text-gray-800">
            <span className="text-green-500">💰</span> {job.salary}
          </div>
          <p className="mt-2 text-gray-700 text-sm sm:text-base">
            {job.post_type === "internship" ? (
              <span><strong>Duration:</strong> {job.duration}</span>
            ) : (
              <span><strong>Experience:</strong> {job.duration}</span>
            )}
          </p>
          <p className="mt-2 text-gray-600 text-sm sm:text-base line-clamp-2">{job.description}</p>
          <div className="mt-4">
            <strong className="text-gray-900 text-sm sm:text-base">Skills Required:</strong>
            <div className="flex flex-wrap gap-2 mt-2">
              {job.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-indigo-200 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={job.logo}
            alt={job.company_name}
            className="h-24 w-24 sm:h-32 sm:w-32 object-contain rounded-full border border-gray-200"
          />
        </div>
      </div>
      <div className="flex items-center mt-6 justify-between">
        <Link
          to={`/job/${job.job_id}`}
          target="_self"
          className="inline-flex items-center bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm sm:text-base font-semibold hover:bg-indigo-600 transition-all duration-300"
        >
          View More
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <button
          onClick={handleFavoriteClick}
          className={`inline-flex items-center px-4 py-2 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 ${
            isFavorite
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {isFavorite ? (
            <>
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Remove
            </>
          ) : (
            <>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Add to Favorites
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default JobCard;
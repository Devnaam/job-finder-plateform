import React, { useState, useEffect } from "react";
import axios from "axios";

const ResumeUpload = ({ setFilteredJobs, loading, setLoading }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [name, setName] = useState("");
  const [resumeFileName, setResumeFileName] = useState("");

  useEffect(() => {
    const savedSkills = JSON.parse(localStorage.getItem("UserSkills"));
    const savedJobs = JSON.parse(localStorage.getItem("userJobs"));
    const savedFileName = localStorage.getItem("uploadedResumeFileName");
    const savedName = localStorage.getItem("userName");

    if (savedSkills?.length > 0) setSkills(savedSkills);
    if (savedJobs?.length > 0) setFilteredJobs(savedJobs);
    if (savedFileName) setResumeFileName(savedFileName);
    if (savedName) setName(savedName);
  }, [setFilteredJobs]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setResumeFileName(e.target.files[0]?.name || "");
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert("Please select a file.");
    setLoading(true);

    const formData = new FormData();
    formData.append("resume", selectedFile);

    try {
      const response = await axios.post(
        "https://job-finder-backend-vqg6.onrender.com/upload-resume",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      const { skills: parsedSkills, jobs: matchedJobs, name: parsedName } = response.data;

      setSkills(parsedSkills);
      setFilteredJobs(matchedJobs);
      setName(parsedName || "");

      localStorage.setItem("UserSkills", JSON.stringify(parsedSkills));
      localStorage.setItem("userJobs", JSON.stringify(matchedJobs));
      localStorage.setItem("uploadedResumeFileName", selectedFile.name);
      localStorage.setItem("userName", parsedName || "");
    } catch (error) {
      console.error("Error uploading resume:", error);
      alert("Resume upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 sm:p-8 bg-white rounded-2xl shadow-lg transform transition-all hover:shadow-xl duration-300">
      <div className="flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
          Upload Your Resume
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <label className="flex-1 relative">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
            id="resume-upload"
            disabled={loading}
          />
          <div className={`flex items-center w-full px-4 py-3 rounded-lg border ${loading ? 'border-gray-300 bg-gray-100' : 'border-indigo-300 bg-indigo-50 hover:bg-indigo-100'} text-gray-700 text-sm sm:text-base transition-all duration-200 cursor-pointer`}>
            <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 0116 8a5 5 0 014 4v1m-7-8v8m-4-4h8" />
            </svg>
            {resumeFileName || "Choose a PDF file"}
          </div>
        </label>
        <button
          onClick={handleUpload}
          disabled={loading || !selectedFile}
          className={`px-6 py-3 rounded-lg text-sm sm:text-base font-semibold flex items-center justify-center transition-all duration-200 ${loading || !selectedFile ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-md'}`}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          {loading ? "Uploading..." : "Upload"}
        </button>
      </div>

      {resumeFileName && (
        <p className="text-sm text-gray-600 mt-4 text-center sm:text-left flex items-center justify-center sm:justify-start">
          <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Uploaded: {resumeFileName}
        </p>
      )}

      {(name || skills.length > 0) && (
        <div className="mt-6 space-y-6">
          {name && (
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Extracted Name
              </h3>
              <p className="text-sm sm:text-base text-gray-700 bg-indigo-50 px-3 py-2 rounded-lg">
                {name}
              </p>
            </div>
          )}
          {skills.length > 0 && (
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Extracted Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-indigo-200 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResumeUpload;
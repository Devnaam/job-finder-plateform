JobFinder
JobFinder is a modern, user-friendly web application designed to help users discover job opportunities tailored to their skills. By uploading a resume, users can receive personalized job recommendations based on extracted skills and name. The platform also allows users to browse all available jobs, view detailed job descriptions, save favorite jobs, and navigate seamlessly with a responsive interface.
Features

Personalized Job Recommendations: Upload a PDF resume to extract skills and name, then receive job listings matched to your profile.
Job Browsing: Explore all available jobs with detailed views including salary, skills required, and company information.
Favorite Jobs: Save jobs to a favorites list for quick access, stored locally in the browser.
Responsive Design: Fully responsive UI with a modern, vibrant aesthetic, optimized for mobile, tablet, and desktop devices.
Smooth Navigation: Intuitive navigation with a fixed navbar, pagination for job listings, and a consistent footer across all pages.
Interactive UI/UX: Smooth animations, hover effects, and clear visual feedback enhance user engagement.
Local Storage: Persists user data (skills, jobs, favorites, resume filename) in the browser for a seamless experience.

Technologies Used

Frontend:
React (with React Router for navigation)
Tailwind CSS for styling
Lucide React for icons
Axios for API requests


Backend:
External API (https://job-finder-backend-vqg6.onrender.com) for job data and resume processing


Others:
Local Storage for client-side data persistence
Markdown for documentation



Installation
To run JobFinder locally, follow these steps:

Clone the Repository:
git clone https://github.com/Devnaam/JobFinder.git
cd JobFinder


Install Dependencies:Ensure you have Node.js installed, then run:
npm install


Set Up Environment:The app relies on an external backend API (https://job-finder-backend-vqg6.onrender.com). Ensure the API is accessible. No additional environment variables are required for the frontend.

Run the Application:Start the development server:
npm start

The app will be available at http://localhost:3000.


Usage

Home Page:

Navigate to / to view all available jobs (AllJobs component).
Browse jobs displayed as cards with details like title, company, location, salary, and skills.


Job Details:

Click "View More" on a job card to visit /job/:jobId and see detailed information (JobDetails component), including description, skills, and an apply link.


Personalized Jobs:

Go to /personlized-jobs to upload a PDF resume (PersonlizedJobs component).
The app extracts skills and name, then displays matched jobs based on your profile.
Use pagination to navigate through job listings.


Favorite Jobs:

Save jobs by clicking "Add to Favorites" on job cards.
View saved jobs at /favjobs (FavJobs component).


Navigation:

Use the fixed navbar to switch between "All Jobs," "Personalized Jobs," and "Favorite Jobs."
The footer provides quick links, contact info, and social media connections.



Folder Structure
JobFinder/
├── src/
│   ├── assets/
│   │   └── logo.png                # Logo image for branding
│   ├── Shimmers/
│   │   └── JobCardShimmer.js       # Loading shimmer for job cards
│   ├── App.jsx                     # Main app with routing and layout
│   ├── Navbar.jsx                  # Fixed navigation bar
│   ├── Footer.jsx                  # Footer with links and contact info
│   ├── JobDetails.js               # Detailed job view
│   ├── JobCard.js                  # Job card component
│   ├── Pagination.js               # Pagination for job listings
│   ├── PersonlizedJobs.js          # Personalized job recommendations
│   ├── ResumeUpload.js             # Resume upload and skill/name extraction
│   ├── AllJobs.js                  # All jobs listing
│   ├── FavJobs.js                  # Favorite jobs listing
│   ├── Dashboard.js                # Unused dashboard component
│   └── index.js                    # Entry point
├── public/
│   └── index.html                  # HTML template
├── package.json                    # Project dependencies
└── README.md                       # Project documentation

API Integration
The app interacts with an external backend API at https://job-finder-backend-vqg6.onrender.com for:

Fetching job listings (/jobs, /job/:jobId)
Uploading resumes for skill and name extraction (/upload-resume)

Ensure the backend API is running and accessible. The API is expected to return data in the following format for resume uploads:
{
  "skills": ["skill1", "skill2", ...],
  "jobs": [{ "job_id": "", "job_title": "", ... }, ...],
  "name": "User Name"
}

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.

Please ensure your code follows the project's coding style and includes relevant tests.
Contact
For questions or feedback, reach out to:

Email: workwithdevnaam@gmail.com
LinkedIn: Raj Priyadershi
GitHub: Devnaam
Portfolio: devnaam4s.vercel.app
Phone: +91 6205791382

License
This project is licensed under the MIT License. See the LICENSE file for details.

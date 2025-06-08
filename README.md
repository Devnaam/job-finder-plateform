# JobFinder

JobFinder is a modern, user-friendly web application designed to help users discover job opportunities tailored to their skills. By uploading a PDF resume, users can receive personalized job recommendations based on extracted skills and name. The platform also allows users to browse all available jobs, view detailed job descriptions, save favorite jobs, and navigate seamlessly with a responsive interface.

## Features

- **Personalized Job Recommendations**: Upload a PDF resume to extract skills and name, then receive job listings matched to your profile.
- **Job Browsing**: Explore all available jobs with detailed views including salary, skills required, and company information.
- **Favorite Jobs**: Save jobs to a favorites list for quick access, stored locally in the browser.
- **Responsive Design**: Fully responsive UI with a modern, vibrant aesthetic, optimized for mobile, tablet, and desktop devices.
- **Smooth Navigation**: Intuitive navigation with a fixed navbar, pagination for job listings, and a consistent footer across all pages.
- **Interactive UI/UX**: Smooth animations, hover effects, and clear visual feedback enhance user engagement.
- **Local Storage**: Persists user data (skills, jobs, favorites, resume filename) in the browser for a seamless experience.

## Technologies Used

- **Frontend**:
  - React (with React Router for navigation)
  - Tailwind CSS for styling
  - Lucide React for icons
  - Axios for API requests
- **Backend**:
  - External API (`https://job-finder-backend-vqg6.onrender.com`) for job data and resume processing
- **Others**:
  - Local Storage for client-side data persistence
  - Markdown for documentation

## Installation

To run JobFinder locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Devnaam/job-finder-plateform.git
   cd job-finder-plateform
   ```

2. **Add Screenshots** (optional, for README visuals):
   - Create a `screenshots/` directory in the project root.
   - Add the following images (available in the repository or provided separately):
     - `job-listings.png` (job listings page)
     - `job-details.png` (job details page)
     - `personalized-jobs.png` (personalized jobs page with resume upload)

3. **Install Dependencies**:
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

4. **Set Up Environment**:
   The app relies on an external backend API (`https://job-finder-backend-vqg6.onrender.com`). Ensure the API is accessible. No additional environment variables are required for the frontend.

5. **Run the Application**:
   Start the development server:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

## Usage

1. **Home Page**:
   - Navigate to `/` to view all available jobs (`AllJobs` component).
   - Browse jobs displayed as cards with details like title, company, location, salary, and skills.

2. **Job Details**:
   - Click "View More" on a job card to visit `/job/:jobId` and see detailed information (`JobDetails` component), including description, skills, and an apply link.

3. **Personalized Jobs**:
   - Go to `/personlized-jobs` to upload a PDF resume (`PersonlizedJobs` component).
   - The app extracts skills and name, then displays matched jobs based on your profile.
   - Use pagination to navigate through job listings.

4. **Favorite Jobs**:
   - Save jobs by clicking "Add to Favorites" on job cards.
   - View saved jobs at `/favjobs` (`FavJobs` component).

5. **Navigation**:
   - Use the fixed navbar to switch between "All Jobs," "Personalized Jobs," and "Favorite Jobs."
   - The footer provides quick links, contact info, and social media connections.

## Screenshots

Here are some snapshots of the JobFinder application in action:

- **Job Listings Page** (`AllJobs`): Browse all available jobs with key details.
  ![Job Listings Page](/screenshots/image2.png)

- **Job Details Page** (`JobDetails`): View detailed job information and apply directly.
  ![Job Details Page](/screenshots/image.png)

- **Personalized Jobs Page** (`PersonlizedJobs`): Upload your resume to get tailored job recommendations.
  ![Personalized Jobs Page](/screenshots/image1.png)

## Folder Structure

```plaintext
job-finder-plateform/
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
├── screenshots/
│   ├── job-listings.png            # Screenshot of job listings page
│   ├── job-details.png             # Screenshot of job details page
│   ├── personalized-jobs.png       # Screenshot of personalized jobs page
├── package.json                    # Project dependencies
└── README.md                       # Project documentation
```

## API Integration

The app interacts with an external backend API at `https://job-finder-backend-vqg6.onrender.com` for:
- Fetching job listings (`/jobs`, `/job/:jobId`)
- Uploading resumes for skill and name extraction (`/upload-resume`)

Ensure the backend API is running and accessible. The API is expected to return data in the following format for resume uploads:
```json
{
  "skills": ["skill1", "skill2", ...],
  "jobs": [{ "job_id": "", "job_title": "", ... }, ...],
  "name": "User Name"
}
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please ensure your code follows the project's coding style and includes relevant tests.

## Contact

For questions or feedback, reach out to:
- **Email**: [workwithdevnaam@gmail.com](mailto:workwithdevnaam@gmail.com)
- **LinkedIn**: [Raj Priyadershi](https://www.linkedin.com/in/raj-priyadershi-56a256282/)
- **GitHub**: [Devnaam](https://github.com/Devnaam)
- **Portfolio**: [devnaam4s.vercel.app](https://devnaam4s.vercel.app/)
- **Phone**: +91 6205791382

## Thank You

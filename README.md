<div align='center'>
  <h1 align='center'>InfoStore: Your Personal Information Hub</h1>
  <h3 align='center'>A personal hub to organize and access your information easily.</h3>

  <img src='https://img.shields.io/badge/License-MIT-blue.svg' />
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/devi5040/infostore_MERN">
  <img src='https://img.shields.io/badge/Frontend-React-blue' />
  <img src='https://img.shields.io/badge/Backend-Node.js-green' />
   <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/devi5040/infostore_MERN">
  
</div>

---

## 2. Table of Contents

* [Project Overview/Purpose](#project-overviewpurpose)
* [Features/Functionality](#featuresfunctionality)
* [Tech Stack](#tech-stack)
* [Installation/Setup Instructions](#installationsetup-instructions)
* [Coding standards/Linting](#coding-standardslinting)
* [Author Details](#author-details)


---

## 3. Project Overview/Purpose

InfoStore is a personal information management system designed to help users securely store and organize their important data.  It allows users to keep track of documents, educational qualifications, and passwords in a centralized and easily accessible location.  This project aims to simplify the management of personal information and enhance security for individual users.


---

## 4. Features/Functionality

* Secure storage of personal documents.
* Centralized management of educational qualifications.
* Secure password storage and management.
* User authentication and authorization.
* User profile management.


---

## 5. Tech Stack

**Frontend:**

* React
* Redux
* React Router DOM
* Tailwind CSS
* Axios


**Backend:**

* Node.js
* Express.js
* MongoDB
* Mongoose
* bcryptjs
* jsonwebtoken
* AWS SDK (for S3)
* nodemailer
* express-validator
* cookie-parser
* cors


---

## 6. Installation/Setup Instructions

These instructions assume you have Node.js and npm (or yarn) installed.

**Backend:**

1. Clone the repository:
   ```sh
   git clone <repository url>
   ```
2. Navigate to the backend directory:
   ```sh
   cd backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Configure environment variables (see below).
5. Start the server:
   ```sh
   npm start
   ```

**Frontend:**

1. Navigate to the frontend directory:
   ```sh
   cd infostore-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```


---

## 7. Config/Environment Variables

You need to create a `.env` file in both the `backend` and `infostore-frontend` directories with the following variables:


**Backend `.env`:**

* `MONGODB_URI`: Your MongoDB connection string.
* `JWT_SECRET`: A secret key for JSON Web Tokens.
* `AWS_ACCESS_KEY_ID`: Your AWS access key ID.
* `AWS_SECRET_ACCESS_KEY`: Your AWS secret access key.
* `AWS_REGION`: Your AWS region.
* `AWS_BUCKET_NAME`: Name of your S3 bucket.
* `EMAIL_USER`: Your email address for sending OTP.
* `EMAIL_PASS`: Your email password for sending OTP.


**Frontend `.env`:**

* `REACT_APP_BACKEND_URL`: The base URL of your backend API.


---

## 10. Coding standards/Linting

The frontend utilizes ESLint for code linting.  Run `npm run lint` in the `infostore-frontend` directory to check for code style issues.


---

## 11. License

[MIT License](LICENSE)


---

## 12. Author details

Deviprasad Rai P
<dpraidola@gmail.com>

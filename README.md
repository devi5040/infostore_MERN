# InfoStore: Your Personal Information Hub 🧑‍💻

A comprehensive web application designed to securely store and manage your personal information, including documents, educational credentials, and passwords.  InfoStore prioritizes user privacy and data security.

---

## Project Overview

InfoStore is a full-stack application built to help users centralize and organize their important personal data. It provides a user-friendly interface for adding, editing, and deleting various types of information, all while employing robust security measures.  The application is split into a frontend built with React and a backend built using Node.js, Express.js, and MongoDB.

---

## Features

* **Secure Password Management:**  Store and manage your passwords securely with encryption and strong validation.
* **Document Storage:**  Upload and organize important documents, with secure storage and access controls.
* **Educational Credential Management:**  Maintain a record of your educational background, including degrees, certifications, and coursework.
* **Profile Management:**  Edit and update your personal profile information securely.
* **User Authentication:**  Robust user authentication with secure password handling, including forgot password functionality.

---

## Tech Stack

**Frontend:**

* React
* Redux
* React Router
* Tailwind CSS
* Axios

**Backend:**

* Node.js
* Express.js
* Mongoose (MongoDB ODM)
* bcrypt.js (Password Hashing)
* jsonwebtoken (JWT Authentication)
* AWS SDK (for S3 storage - likely for document uploads)
* Nodemailer (for email sending - likely for password resets and OTPs)

---

## Installation and Setup

**Backend:**

1. Clone the repository:
```sh
git clone <repository_url>
```
2. Navigate to the backend directory:
```sh
cd backend
```
3. Install dependencies:
```sh
npm install
```
4. Set up environment variables (see below).
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

## Configuration / Environment Variables (`.env`)

You'll need to create a `.env` file in both the `backend` and `infostore-frontend` directories  (if applicable, values may be different in each).  Here are some of the environment variables likely needed:

**Backend (.env):**

* `DATABASE_URL`: Your MongoDB connection string.
* `JWT_SECRET`:  A secret key for JWT authentication.
* `AWS_ACCESS_KEY_ID`: Your AWS access key ID.
* `AWS_SECRET_ACCESS_KEY`: Your AWS secret access key.
* `AWS_BUCKET_NAME`: The name of your S3 bucket.
* `EMAIL_USER`: Your email address for sending notifications.
* `EMAIL_PASSWORD`: Your email password (Consider using a dedicated email service for security).


**Frontend (.env):**  (Likely only needs backend API URL)

* `REACT_APP_API_URL`: The base URL of your backend API.

---

## Contributing Guidelines

Contributions are welcome! Please open an issue to discuss proposed changes before submitting a pull request.  Follow the existing coding style and ensure all tests pass.

---

## Coding Standards / Linting

The project uses ESLint for linting and code quality checks. Run `npm run lint` in the `infostore-frontend` directory to check your code.

---

## Usage / Examples

After setting up the backend and frontend, you can access the application through your web browser at `http://localhost:3000` (or the port specified in your frontend configuration).  The application provides a user-friendly interface for managing your various types of information.



This README will be continuously updated as the project evolves.  Let me know if you have any other questions.

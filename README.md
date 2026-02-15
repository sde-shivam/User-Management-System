# User Management System

A modern full-stack application designed to demonstrate a robust administrative workflow. This project integrates a cutting-edge **Java 25** backend with a high-performance **React** frontend powered by **Vite**.



## 🚀 Overview
This system provides a complete interface for managing user data, focusing on clean architecture, seamless API integration, and modern development standards.

---

## 🛠️ Tech Stack

### Backend
- **Java 25:** Utilizing the latest JVM features for optimized performance.
- **Spring Boot 3.x:** Core framework for building scalable RESTful APIs.
- **Spring Data JPA:** For simplified database interaction and persistence.
- **Maven:** Lifecycle and dependency management.

### Frontend
- **React.js:** Component-based UI for a dynamic user experience.
- **Vite:** Blazing fast build tool and development server.
- **Axios:** Efficient handling of HTTP requests to the backend.
- **CSS3:** Custom styling for a clean, professional interface.

---

## ✨ Features
- **Full CRUD Functionality:** Create, Read, Update, and Delete user records.
- **RESTful API:** Decoupled architecture for better maintainability.
- **CORS Configuration:** Enabled secure communication between the Vite dev server and Spring Boot.
- **Input Validation:** Ensuring data integrity across the entire stack.

---

## 📁 Project Structure
```text
├── src/main/java        # Spring Boot Backend (Controllers, Models, Services)
├── src/main/resources   # Application properties & SQL configurations
├── public/              # Static assets and icons for React
├── index.html           # React Frontend entry point
├── package.json         # Frontend dependencies (React, Vite, Axios)
├── pom.xml              # Backend dependencies (Spring Boot, JPA)
└── vite.config.js       # Vite configuration

⚙️ Setup and Installation
1. Backend Setup
Ensure you have Java 25 and Maven installed.
# Clean and run the Spring Boot application
mvn clean install
mvn spring-boot:run

The API will be live at http://localhost:8080

2. Frontend Setup
Ensure you have Node.js installed.
# Install dependencies
npm install

# Start the Vite development server
npm run dev

The UI will be available at http://localhost:5173

🔌 API Endpoints
Method----->  Endpoint  --------->  Description
GET -------->/api/users --------->Retrieve all users
POST--------->/api/users---------->Add a new user
PUT----------->/api/users/{id}----->Update existing user details
DELETE--------->/api/users/{id}----->Remove a user

Developed by Shivam singh — Aspiring Java Developer.

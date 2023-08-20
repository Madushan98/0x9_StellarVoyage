
# 0x9_StellarVoyage Tech-Triathlon Hackathon Challenge
## Intergalactic Space Travel Booking Application
![UI MOCKUPS](https://github.com/Madushan98/0x9_StellarVoyage/assets/65262773/f556ba29-61b6-47fa-a4fb-c6c7fc597b0b)

The Intergalactic Space Travel Booking Application is designed to simplify and streamline the process of booking interplanetary travel tickets for citizens who wish to travel from one planet to another. This application consists of both a backend developed using the Spring Boot framework and a frontend developed using React Native, providing a seamless and user-friendly experience.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
     - [Backend Features](#backend-features)
    - [Frontend Features](#frontend-features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

In a galaxy filled with diverse planets and cultures, the Intergalactic Space Travel Booking Application aims to make the process of interplanetary travel easy and efficient. By utilizing the Spring Boot framework for the backend and React Native for the frontend, we have created a reliable and robust platform that allows citizens to book their space travel tickets hassle-free.

## Features

### Backend Features

- **User Registration and Authentication**: Users can create accounts, log in, and securely manage their bookings.

- **Search and Book Flights**: Users can search for available flights between planets and book tickets for their desired travel dates.

- **User Profiles**: Users can view and edit their profiles, including contact information and travel preferences.

- **Booking Management**: Users can view their booking history, upcoming trips, and cancel bookings if needed.

-  **Email Verificaiton**: The application include user email verification for testing the verifcaiton code -**123456** can be used with any email.

- **Continuous Integration and Deployment (CI/CD)**: The application's backend is integrated with a CI/CD pipeline using GitHub Actions. This automates the process of testing, building, and deploying the backend codebase to the production environment, enhancing efficiency and reducing manual errors.
  

### Frontend Features

- **Cross-Platform Experience**: The frontend is developed using React Native, providing a consistent experience on both iOS and Android devices.

- **User-friendly Interface**: The intuitive and user-friendly interface makes it easy for users to browse available flights and manage their bookings.


## Getting Started

Follow these steps to get the Intergalactic Space Travel Booking Application up and running on your local machine.

### Prerequisites

- Java Development Kit (JDK) 8 or higher
- Maven
- MySQL or any preferred relational database
- Node.js and npm (for Spring Boot backend)
- Node.js and Expo CLI (for React Native with Expo frontend)

### Installation Backend
Backend Is Already Deloyed to the Difgital Ocean Droplet Using Github Action Ci/CD
1. Clone the repository:

   ```bash
   git clone https://github.com/intergalactic-travel/booking-app.git

2. cd backend
    
    ```bash
    spring.datasource.url=jdbc:mysql://localhost:3306/intergalactic_db
    spring.datasource.username=your_db_username
    spring.datasource.password=your_db_password

3. Build the backend application using Maven:
    ```bash
    mvn clean install

### Installation Frontend

1. Navigate to the frontend directory::

   ```bash
   cd frontend

2. Install dependencies and start the React Native app:

   ```bash
   npm install
   npm start

   You can use the mobile app to run theaplicaiton by scanning the QR Code

## Usage

1. Open the Expo app on your simulator or device.

2. Visit the application URL in your web browser to access the backend.

3. Register an account or log in if you already have one.

4. Search for available flights between planets.

5. Select a flight, provide passenger details, and make a payment.

6. Receive a booking confirmation and any relevant notifications.


## License

This project is licensed under the [MIT License](LICENSE).

---

By simplifying the booking process and providing a seamless user experience, the Intergalactic Space Travel Booking Application aims to make interplanetary travel accessible and exciting for citizens across the galaxy. If you have any questions or feedback, please don't hesitate to contact us

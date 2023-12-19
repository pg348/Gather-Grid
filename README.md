
# GatherGrid - Team Formation for Hackathons


GatherGrid is a web application designed to help individuals participate in hackathons, collaborate with like-minded team members, and leverage machine learning for team recommendations. Additionally, the project incorporates web scraping to gather relevant hackathon information.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Machine Learning Model](#machine-learning-model)
- [Web Scraping](#web-scraping)
- [Contributing](#contributing)

## Introduction

Hackathons are collaborative events where participants bring their skills and creativity to solve problems. GatherGrid simplifies the process of forming hackathon teams by allowing users to create and join teams, providing personalized team recommendations using a machine learning model, and scraping information about upcoming hackathons.

## Features

- **Team Creation and Joining:** Users can create teams for hackathons or join existing teams to collaborate with others.
- **Machine Learning Recommendations:** GatherGrid uses a machine learning model to suggest team members based on user preferences, skills, and experience.
- **Web Scraping:** The application scrapes data from websites to provide information about upcoming hackathons and populate the platform with hackathon events.
- **User Profiles:** Users can create profiles, showcase their skills, and specify their interests.
- **User Authentication:** Secure user authentication to protect user data and maintain privacy.

## Technologies Used

Frontend: HTML, CSS, JavaScript, React
Backend: SQL,GO,Springboot,node.js
Database: = SQL (main backend data)
Machine Learning: Python, scikit-learn
Web Scraping: Python, Beautiful Soup, Selenium
User Authentication: JSON Web Tokens (JWT)

## Getting Started

To run GatherGrid locally, follow these steps:

1. Clone the repository:
   ```shell
   git clone https://github.com/yourusername/gathergrid.git
   cd gathergrid
   ```

2. Install dependencies for the frontend and backend:
   ```shell
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Set up your database and configure environmental variables.

4. Run the frontend and backend servers:
   ```shell
   cd frontend
   npm start
   cd ../backend
   npm start
   ```

5. Access the application in your browser at `http://localhost:3000` or you can use the deployed version of the same to.

## Usage

1. Register and log in to your GatherGrid account.

2. Create a team for an upcoming hackathon or join an existing team.

3. Complete your user profile, including skills and interests.

4. Use the machine learning recommendation feature to find suitable team members or teams.

5. Stay updated on upcoming hackathons by checking the platform's event listings obtained through web scraping.

## Machine Learning Model

GatherGrid's recommendation system is powered by a machine learning model that analyzes user profiles, skills, and interests. The model suggests potential team members for users based on their preferences and the requirements of a given hackathon.

For more details on the machine learning model and its implementation, please refer to the `machine_learning` directory in the repository.

## Web Scraping

The web scraping component of GatherGrid collects data about upcoming hackathons, such as event dates, locations, and themes. This information is used to populate the platform with relevant hackathon events.

For more details on the web scraping process and implementation, please refer to the `web_scraping` directory in the repository.

## Contributing

We welcome contributions from the community. If you'd like to contribute to GatherGrid, please read our [Contribution Guidelines](CONTRIBUTING.md) to get started.


Thank you for using GatherGrid! If you have any questions or encounter issues, please feel free to contact us or open an issue in the repository. We hope this platform enhances your hackathon experience and collaboration with fellow innovators.
- YOU CAN ALSO POST YOUR ISSUE IN THE CONTACT US OPTION PRESENT IN THE PAGE 
- THANK YOU

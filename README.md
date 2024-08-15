# Dashboard

A dynamic dashboard application built using React, Tailwind CSS, and Redux Toolkit. The application allows users to add and remove widgets, search for specific widgets, and clear the search history. The dashboard features a clean and responsive UI with various widgets related to cloud security and risk assessment.

## Features

- **Dynamic Widgets**: Add and remove widgets dynamically.
- **Search Functionality**: Filter widgets using a search bar.
- **Clear Search**: Clear search history with a 'Clear Search' button.
- **Responsive Design**: Tailwind CSS for styling, ensuring a responsive and modern design.
- **Icons**: Integrated with React Icons for visual enhancements.

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling and responsive design.
- **Redux Toolkit**: For managing the state of the widgets.
- **React Icons**: For adding icons to the UI.

## State Management using "Redux Toolkit"

- **Redux Slice (widgetSlice.js)**:
- **Initial State**: Contains categories with widgets and a search term.

**Reducers** :
- **addWidget**: Adds a widget to a specific category.
- **removeWidget**: Removes a widget from a specific category.
- **setSearchTerm**: Sets the search term used for filtering widgets.
- **filterWidgets**: Filters widgets based on the search term and updates availableWidgets.

## Installation

To run this project locally, follow these steps:

1. Install Dependencies
Make sure you have Node.js and npm installed. Then, in the terminal, run:
 
 ## npm install

2. Start the Development Server
In the terminal, run the following command to start the application:

 ## npm start

3. View the Application
Open your browser and go to http://localhost:3000 to view the application.


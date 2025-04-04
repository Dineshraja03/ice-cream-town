# Ice Cream Parlour Website

Welcome to the Ice Cream Parlour Website project! This is a React.js application designed to showcase an ice cream parlour, featuring various sections for customers to explore and interact with.

## Project Structure

The project is organized as follows:

```
ice-cream-parlour-website
├── public
│   ├── index.html          # Main HTML file
│   └── favicon.ico         # Favicon for the website
├── src
│   ├── components          # Reusable components
│   │   ├── HeroSection.jsx
│   │   ├── PopularItemsGrid.jsx
│   │   ├── CTAButton.jsx
│   │   ├── OrderButtons.jsx
│   │   ├── ContactDetails.jsx
│   │   ├── GoogleMapEmbed.jsx
│   │   ├── BookingForm.jsx
│   │   ├── EventGallery.jsx
│   │   └── AboutSection.jsx
│   ├── pages               # Page components
│   │   ├── Homepage.jsx
│   │   ├── OrderPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── CelebrationBookingPage.jsx
│   │   └── AboutPage.jsx
│   ├── styles              # CSS modules for styling
│   │   ├── HeroSection.module.css
│   │   ├── PopularItemsGrid.module.css
│   │   ├── CTAButton.module.css
│   │   ├── OrderButtons.module.css
│   │   ├── ContactDetails.module.css
│   │   ├── GoogleMapEmbed.module.css
│   │   ├── BookingForm.module.css
│   │   ├── EventGallery.module.css
│   │   └── AboutSection.module.css
│   ├── App.jsx             # Main application component
│   ├── index.js            # Entry point for the React application
│   └── assets              # Images and logo
│       ├── images
│       │   ├── hero-image.jpg
│       │   ├── pastry1.jpg
│       │   ├── icecream1.jpg
│       │   ├── event1.jpg
│       │   └── event2.jpg
│       └── logo.png
├── package.json            # Project metadata and dependencies
├── .gitignore              # Files to ignore in version control
└── README.md               # Project documentation
```

## Features

- **Homepage**: A visually appealing hero section with a catchy tagline, showcasing popular pastries and ice creams in a grid layout, and a call-to-action button for online ordering.
- **Order Page**: Buttons redirecting customers to Swiggy and Zomato for easy ordering.
- **Contact Page**: Displays contact details and an embedded Google Map for location.
- **Celebration Booking Page**: A form for booking events like weddings and birthday parties, along with a gallery of previous celebrations.
- **About Page**: Highlights the brand identity and specialties of the parlour.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd ice-cream-parlour-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. Your feedback and contributions are welcome!

## License

This project is open-source and available under the [MIT License](LICENSE).
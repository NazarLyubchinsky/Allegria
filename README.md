# Demo website of the ALLEGRIA store.

This repository contains code for a React application developed to create a user interface for a store. The store includes many features to provide convenience and functionality for users.

##### Please note that there are only 14 products available. JSON-server has a limit. If you want to see more, download the repository and modify the link in the context.js file (src -> utils -> context.js) in the getProducts function to point to "http://localhost:4444"

## Table of Contents

- [Live Demo](#live-demo)
- [Description](#description)
- [The main features of the store include](#main-features)
- [Backend](#backend)
- [Frontend](#frontend)
- [UI Requirements](#ui-requirements)
- [Instructions](#instructions)
- [Contact](#contact)

## Live Demo

Check out the live project on Netlify: (https://master--boisterous-moxie-b83abd.netlify.app/)

Please note that there might be issues with loading products from server on the live demo.


## Description

 The application is designed with user-friendly features and a responsive layout.

## main features

- Product Catalog: We offer a product catalog that can be easily browsed by users. You can search for products in different categories and filter them by price.
- Add to Cart: Users can add selected products to their cart for convenient order placement.
- Order Placement: When the cart is filled, users can place an order, specifying delivery and other necessary details.
- Product Filtering: The product catalog supports the ability to filter by price, sorting them in ascending or descending order. This allows users to quickly find products that meet their requirements.
- On our website, you have the ability to easily switch the interface language from Ukrainian to English and vice versa. Simply select the desired language in the top right corner of the page, and the website will automatically switch to the chosen language."

Our application is designed with user convenience and the needs of a modern online store in mind. It is a convenient and efficient tool for shopping and managing products.
## Backend

The application uses a fake REST API provided by [json-server](https://my-json-server.typicode.com/NazarLyubchinsky/json-server) 
or download the repository and use it "http://localhost:4444" information from above

## Frontend
- The latest version of React is used.
- Functional components and JSX are employed.
- Icons from the [lucide-react](https://mui.com/material-ui/material-icons/) library are used.
- React Forms: I leveraged React to create and manage forms within the application. This allows for a dynamic and responsive user experience when capturing and submitting data.
- Reduce
- custom UseContext

## UI Requirements

The application follows an eye-friendly design and is responsive.

## Instructions

To run the project on your local machine:

1. Clone this repository: `git clone [repo-link]`
2. Navigate to the project directory: `cd [project-folder]`
3. Install dependencies: `npm install`
4. Run the Vite development server: `npm run start`
5. Start the front-end and back-end development servers with "npm run dev."
6. Access the application in your browser at `http://localhost:3000` or link provided by vite

## Contact

For any inquiries or feedback, feel free to contact:

- Nazar Lyubchinskyi
- GitHub: (https://github.com/NazarLyubchinsky)
- linkedin: (https://www.linkedin.com/in/nazar-lyubchynskyi-37a89026b/)



Enjoy exploring the React application and its features!

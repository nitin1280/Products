# React Product App
This is a simple React application that fetches and displays a list of products from an API endpoint. The application consists of two main components - Home and Details, along with some features like a search bar and a basic shopping cart functionality.

# Getting Started
Clone the repository:

bash
Copy code
git clone https://github.com/nitin1280/Products.git

# Install dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
npm run dev

# Components

1. Home
Fetches a list of products from the https://dummyjson.com/products endpoint.
Displays basic product information such as name, price, and an image.
Implements an interactive product list where clicking on a product redirects the user to the product details page.

2. Details
A separate React component for displaying detailed information about a specific product.
Accepts the product ID as a parameter to fetch specific product details from https://dummyjson.com/products/:id.
Displays product details, including name, description, price, images , category, brand, and rating.
Styled attractively and responsively.

# Features:

The UI seamlessly integrates a search bar, clickable home logo for easy navigation, a product list for initial product exploration, and a dedicated product details page to delve into comprehensive information about the selected product.


# User Interface Description:-
The initial page features a home logo with clickable functionality, alongside a search navigation bar Search and Cart buttons positioned in the header. In the middle section of the page, there is a product list populated by fetching data from a specified API(https://dummyjson.com/products).

Upon clicking on a product within the list, the user is instantly redirected to the product details page, which provides comprehensive information about the selected product.

Additionally, clicking on the search navigation button in the header leads to the second page, where users can search for products by name. After performing a search, users can select a product from the results and navigate to the corresponding product details page.

The UI concludes with a basic footer at the bottom of the pages.

# Tech Stack
React
Axios for API requests
React Router for navigation
Redux for state mangements
CSS for styling




ShopCart Product Screen is a simple React app that displays individual product details on a separate product screen.

Step 1: Create a new React app
Open your terminal/command prompt.
Navigate to the directory where you want to create the app.
Type npx create-react-app product-screen and press enter to create a new folder called product-screen with all the initialized React code.

Step 2: Install React Router
In your terminal, navigate to the product-screen folder.
Type npm install react-router-dom and press enter to install the react-router-dom package to handle routing.

Step 3: Create ProductScreen component
In the src/components folder, create a new file called ProductScreen.js
Import React at the top of the file with import React from 'react'
Create a functional component called ProductScreen.

Step 4: Create product data
In src/data.js, create a new array of product objects with fields like _id, name, image, price, etc.
Export this array as default export.

Step 5: Import product data
In ProductScreen.js, import the product data array.

Step6: Map through data
Loop through the product data array using .map().
Return a <div> with the product info displayed for each product.

Step 7: Use React Router
In App.js, import BrowserRouter and Route from react-router-dom.
Wrap App component in <BrowserRouter>.
Add a <Route> that renders ProductScreen.

Step 8: Link to product screen
In App.js add a <Link> to navigate to the product screen.
Pass the product _id in the link.

Step 9: Get product from data
In ProductScreen.js, we will access the product id from the route params.
Next we need to find the product that matches that id, the find() method will return the product object that matches the id.
Display the details for this product.

Step 10: Style product screen
Add CSS styles for image, name, price etc.
Import stylesheet in ProductScreen.js.
Use classNames to apply styles.


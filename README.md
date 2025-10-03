# Foodies 2.0 - Responsive Online Restaurant Application

**Foodies 2.0** is a responsive online restaurant application where users can browse the menu, view dish details, add items to their cart, and proceed to checkout for placing an order. Built using the **MERN stack** (MongoDB, Express, React, Node.js), it provides a smooth and modern shopping experience. The application integrates a Dialogflow chatbot for interactive support, with the frontend deployed on Vercel, backend on Render, and MongoDB as the database for storing orders and menu items.

**LIVE DEMO** :[FOOIES 2.0](https://newprojects-nine.vercel.app/)

**Note:** The backend may take 15–30 seconds to respond initially as it wakes from Render’s free tier sleep mode. 😊

----

![Foodies-2.0.photos](https://github.com/DEEPAK-RAMGIRI/newprojects/blob/main/Foodies/foodies%202.0.png)

----
### Tech Stack
* Frontend: React.js, React Router, axios.
* Backend: Node.js, Express
* Database: MongoDB (Atlas)
* Dialogflow – Chatbot integration
* npm – Dependency management
* Vercel – Deployment (frontend)
* Render - Backend Deployment(backend)
* CSS – UI and responsiveness
* GitHub – Version control and source hosting
* Dev tooling: nodemon, dotenv

### Features
* Browse Menu – Users can explore dishes with images, descriptions, and prices.
* Add to Cart – Select multiple items, update quantities, or remove items easily.
* Cart & Checkout – View the cart summary and proceed to place an order.
* Responsive Design – Works seamlessly on mobile, tablet, and desktop.
* Fast Deployment – Frontend hosted on Vercel, backend on Render for scalable performance.
* Database Integration – MongoDB stores menu items, user carts, and orders.

### Run Locally
* Clone or Download
```
git clone https://github.com/DEEPAK-RAMGIRI/newprojects.git
cd Foodies
```
Backend

```
cd backend
npm install
npm run dev
```

Frontend
```
cd frontend
npm install
npm run dev
```
### Environment Variables
add ```.env ``` file in both frontend and backend
Backend ```.env```
```
PORT=5000
MONGODB_URI=your mongo db url
NODE_ENV=development
CORS_ORIGIN = your local host or development server
```

Frontend ```.env```
```
REACT_APP_API_URL= your backend url
```

### Folder Structure
```
Foodies/
├── Backend/                       # Backend (Express + MongoDB)
│   ├── models/                    # Database schemas
│   │   ├── cart.model.js          # Cart schema
│   │   └── product.model.js       # Product schema
│   ├── routes/                    # API routes
│   │   ├── cart.routes.js         # Cart-related routes (add, delete, view)
│   │   └── api.routes.js          # General API routes
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json               # Backend dependencies
│   └── server.js                  # Entry point for Express server
│
├── frontend/                      # Frontend (React + Vercel)
│   ├── public/                    
│   │   ├── images/                # Static assets (menu images, logos, etc.)
│   │   └── index.html             # Main HTML file
│   ├── api/                       
│   │   └── api.js                 # API helper for backend requests
│   ├── src/                       
│   │   ├── components/            # Reusable React components
│   │   │   ├── About.js
│   │   │   ├── Cart.js
│   │   │   ├── Home.js
│   │   │   ├── Menu.js
│   │   │   ├── Navbar.js
│   │   │   ├── Order.js
│   │   │   ├── Review.js
│   │   │   └── chatbot.js         # Dialogflow chatbot component
│   │   ├── pages/                 
│   │   │   └── CartPage.js        # Cart page view
│   │   ├── Styles/                # CSS styles
│   │   │   ├── About.css
│   │   │   ├── Cart.css
│   │   │   ├── Home.css
│   │   │   ├── Menu.css
│   │   │   ├── Navbar.css
│   │   │   ├── Order.css
│   │   │   ├── Review.css
│   │   │   ├── chatbot.css
│   │   │   └── global.css         # Shared global styles
│   │   ├── app.js                 # Main app component
│   │   └── index.js               # React entry point
│   ├── .gitignore
│   ├── foodies.png                # preview image
│   ├── package-lock.json
│   └── package.json               # Frontend dependencies
└── README.md                      # Project documentation
```
### Explanation
* Backend: Handles API endpoints, cart management, product management, and connects to MongoDB.
* Frontend: React-based UI with components for menu browsing, cart, orders, chatbot, etc.
* API Layer: api.js ensures all frontend requests go through a single wrapper.
* Chatbot: Integrated via chatbot.js with Dialogflow.
* Styles: Organized per-component CSS for maintainability.
* Deployment:
  *  Frontend → Vercel
  *  Backend → Render
  *  Database → MongoDB Atlas

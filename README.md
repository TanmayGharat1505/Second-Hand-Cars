🚗 SecondHand Car Marketplace

A full-stack web application for browsing and purchasing second-hand cars, built with the MERN Stack (MongoDB, Express, React, Node.js).

🌐 Website Preview (Screenshot):
1. <img width="1470" alt="Screenshot 2025-06-25 at 4 41 59 PM" src="https://github.com/user-attachments/assets/e5478a53-e588-4c4c-92a1-ce7cc07a00c1" />

2. <img width="1470" alt="Screenshot 2025-06-25 at 4 42 15 PM" src="https://github.com/user-attachments/assets/35be6def-0962-423b-9458-73d61cb88e7a" />

3. <img width="1470" alt="Screenshot 2025-06-25 at 4 42 29 PM" src="https://github.com/user-attachments/assets/d6c74a73-8c1f-4964-90a4-ba9741fe7608" />

4. <img width="1470" alt="Screenshot 2025-06-25 at 4 42 58 PM" src="https://github.com/user-attachments/assets/b170c232-22b5-4984-a16d-139f586abc18" />

5. <img width="1470" alt="Screenshot 2025-06-25 at 4 43 27 PM" src="https://github.com/user-attachments/assets/0eab875e-d784-4e51-b7c6-92b723bfceb9" />


📦 Features

🏠 Landing Page with hero image, navbar, footer, and top-selling cars
🔍 Car Detail Page with:
Variant and color selection
Dynamic price update based on selections
Add to Cart functionality
🛒 Cart Page:
List of selected cars with variants, color, and updated price
Remove items from cart
Checkout button (future enhancement)
📡 Backend API with:
Car listing, car detail, add/remove from cart
MongoDB integration via Mongoose
🛠️ Tech Stack

Frontend: React (JSX), React Router, Axios, Context API
Backend: Node.js, Express.js
Database: MongoDB (Mongoose ODM)
Other Tools: CORS, REST APIs

Backend
cd backend
npm install
node server.js
# Runs on http://localhost:5000
Frontend
cd frontend
npm install
npm start
# Runs on http://localhost:3000
Make sure MongoDB is running locally (mongodb://localhost:27017/secondhandcars) or use MongoDB Atlas.

✨ Future Improvements

User login & authentication
Ratings & reviews for each car
Filtering & sorting options (brand, year, price)
Payment integration
📄 License

This project is open-source and available under the MIT License.

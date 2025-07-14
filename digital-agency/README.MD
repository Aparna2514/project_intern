# 🌐 Digital Marketing Agency Website

This is a full-stack web application developed as part of an internship task. The site is designed for a fictional digital marketing agency and includes modern frontend design, backend integration, and a contact form powered by MongoDB.

---

## 🚀 Features

### ✅ Frontend
- Responsive and modern UI using **HTML**, **CSS**, and **JavaScript**
- Smooth navigation and Lottie-based animation on hero section
- Modal-based service descriptions
- 3D rotating cube to display portfolio/campaigns
- User contact form with form validation

### ✅ Backend
- Built using **Node.js** and **Express.js**
- Handles form submissions and stores data in **MongoDB**
- Admin interface to view submitted messages (locally)

---

## ⚙️ Setup Instructions

> 📌 Both the **website and database run on localhost**  
> This is a development setup — production hosting will require deployment adjustments.

### 1. Clone the Repository
```bash
git clone https://github.com/Aparna2514/project_intern.git
cd project_intern

Install Backend Dependencies
npm install

Start MongoDB Locally
Make sure MongoDB is installed and running on your machine.
By default, the backend connects to mongodb://localhost:27017/digital_agency.

Run the Server
node server.js

View the Website
Visit: http://localhost:3000
Admin panel: http://localhost:3000/admin/messages

Tech Stack
Frontend: HTML, CSS, JavaScript, Lottie
Backend: Node.js, Express.js
Database: MongoDB (local instance)
Version Control: Git & GitHub

Contact Form Flow
User fills out name, email, and message
Form sends data to /contact route (POST)
Server saves data to MongoDB
Admin can view submissions on the /admin/messages route

Notes
This project is built for internship
Currently hosted on localhost for both frontend and backend
Easily adaptable to MongoDB Atlas and cloud deployment if needed

Acknowledgments
All visuals, icons, and sample campaigns are for demonstration only.
Thanks to Flaticon and LottieFiles for resources.


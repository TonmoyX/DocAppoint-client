# DocAppoint - Doctor Appointment Booking System

A modern, full-featured web application for booking and managing doctor appointments. Users can search for doctors, view their profiles, book appointments, and manage their appointment history through an intuitive user interface.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Routes](#api-routes)
- [Key Components](#key-components)
- [Authentication](#authentication)
- [Deployment](#deployment)

## 🎯 Project Overview

DocAppoint is a comprehensive doctor appointment booking system built with Next.js. It allows patients to:
- Browse and search for available doctors
- View detailed doctor profiles
- Book appointments with their preferred doctors
- Manage and track their appointments
- Access personalized dashboards

The application features a responsive design and seamless user experience for both desktop and mobile devices.

## 🛠️ Tech Stack

### Frontend
- **Next.js 13+** - React framework with App Router
- **React** - UI library for building interactive components
- **CSS** - Styling with PostCSS for advanced CSS features
- **JavaScript (ES6+)** - Modern JavaScript for dynamic functionality

### Backend
- **Next.js API Routes** - Serverless backend endpoints
- **Authentication** - Custom auth implementation with client and server-side support

### Development Tools
- **ESLint** - Code quality and linting
- **PostCSS** - CSS processing and optimization
- **npm** - Package management

### Additional Libraries & Utilities
- Custom authentication client (`auth-client.js`)
- Built-in API route handlers for authentication

## ✨ Features

### User Authentication
- **User Signup** - New user registration with validation
- **User Login** - Secure login with session management
- **Authentication Guard** - Protected routes and API endpoints
- **Session Management** - User session persistence

### Doctor Management
- **Browse Doctors** - View all available doctors
- **Search Doctors** - Search doctors by specialty, name, or location
- **Doctor Profiles** - Detailed doctor information including:
  - Professional background
  - Specialization
  - Availability
  - Ratings and reviews

### Appointment Booking
- **Booking Modal** - Easy-to-use booking interface
- **Schedule Selection** - Choose preferred date and time slots
- **Instant Confirmation** - Immediate appointment confirmation
- **Booking History** - View all past and upcoming appointments

### Dashboard
- **Patient Dashboard** - Personalized appointment management
- **Appointment Management** - Edit or cancel appointments
- **Appointment History** - View all previous appointments
- **User Profile** - Manage personal information

### User Interface
- **Responsive Design** - Works seamlessly on all devices
- **Navigation** - Clean and intuitive navigation system
- **Banner Section** - Eye-catching homepage banner
- **Footer** - Comprehensive footer with links
- **Loading States** - Loading indicators during data fetching
- **Error Handling** - 404 pages and error boundaries

### Search & Filtering
- **Doctor Search** - Search and filter doctors by specialty
- **Advanced Filtering** - Filter by availability, ratings, and more

## 📁 Project Structure

```
docappoint/
├── src/
│   ├── app/
│   │   ├── layout.js              # Main layout component
│   │   ├── page.js                # Homepage
│   │   ├── loading.jsx            # Loading component
│   │   ├── not-found.jsx          # 404 page
│   │   ├── globals.css            # Global styles
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...all]/
│   │   │           └── route.js   # Auth API routes
│   │   ├── allappoint/
│   │   │   ├── page.jsx           # All appointments page
│   │   │   └── [id]/
│   │   │       └── page.jsx       # Appointment details page
│   │   ├── dashboard/
│   │   │   └── page.jsx           # User dashboard
│   │   ├── login/
│   │   │   └── page.jsx           # Login page
│   │   ├── signup/
│   │   │   └── page.jsx           # Signup page
│   │   └── appointment/           # Appointment related routes
│   ├── component/
│   │   ├── AllAppoint.jsx         # All appointments list
│   │   ├── Banner.jsx             # Homepage banner
│   │   ├── BookingModal.jsx       # Appointment booking modal
│   │   ├── DashBoard.jsx          # Dashboard component
│   │   ├── DoctorCard.jsx         # Doctor card display
│   │   ├── DoctorDetails.jsx      # Detailed doctor view
│   │   ├── EditModal.jsx          # Edit appointment modal
│   │   ├── Footer.jsx             # Footer component
│   │   ├── Navbar.jsx             # Navigation bar
│   │   ├── Navlink.jsx            # Navigation links
│   │   ├── PatientCard.jsx        # Patient information card
│   │   ├── ProfilePage.jsx        # User profile page
│   │   ├── SearchDoctor.jsx       # Doctor search component
│   │   ├── TopDoctor.jsx          # Top doctors section
│   │   └── Chosse.jsx             # Category selection
│   ├── assets/
│   │   └── banner.avif            # Banner image
│   └── lib/
│       ├── auth.js                # Server-side auth logic
│       └── auth-client.js         # Client-side auth logic
├── public/                        # Static assets
├── package.json                   # Project dependencies
├── next.config.mjs                # Next.js configuration
├── postcss.config.mjs             # PostCSS configuration
├── jsconfig.json                  # JavaScript configuration
├── eslint.config.mjs              # ESLint configuration
└── README.md                      # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd docappoint
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
Create a `.env.local` file in the root directory and add necessary environment variables:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Running the Application

**Development Mode:**
```bash
npm run dev
```
The application will start at [http://localhost:3000](http://localhost:3000)


## 🧩 Key Components

### AllAppoint
Lists and displays all appointments with filtering and sorting capabilities.

### BookingModal
Modal dialog for booking new appointments with date/time selection.

### DashBoard
Personalized user dashboard showing appointments and recommendations.

### DoctorCard
Reusable card component for displaying doctor information.

### EditModal
Modal for editing existing appointment details.

### SearchDoctor
Search interface for finding doctors by specialty or name.

### Banner
Hero section with call-to-action and featured content.

## 🔐 Authentication

The application uses a custom authentication system with:
- Client-side auth context and hooks
- Server-side session validation
- Protected API routes
- Secure session storage


### Alternative Deployment Options
- Docker containerization
- Self-hosted servers
- Cloud platforms (AWS, Google Cloud, etc.)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Coding! 🎉** For support and questions, please open an issue in the repository.

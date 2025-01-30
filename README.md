# InTheLoop

## Project Overview

**InTheLoop** is a full-stack podcast app that helps users stay up-to-date with trending news and discussions. Users can search for podcasts by topics and countries, add them to their favorites, and manage their podcast collection.

## Features

- Search for podcasts using the Spotify API
- Add podcasts to a favorites list
- Rate favorite podcasts
- Remove podcasts from favorites
- User authentication (Register/Login)

## Tech Stack

### Back End

- **Node.js / Express.js** (API Server)
- **MySQL2** (Database)
- **Axios** (HTTP Requests)
- **bcrypt** (Password hashing)
- **JSON Web Tokens (JWT)** for authentication
- **dotenv** (Environment variable management)

### Front End

- **React.js**
- **React Router**
- **Bootstrap** (for UI components)
- **Axios** (for API requests)
- **CSS** for styling

## Installation & Setup

### Clone the Repository

```sh
git clone https://github.com/vicrodgim/my_codeopmvp.git
```

### Database Setup

Access MySQL in your terminal:

```sh
mysql -u root -p
```

Run the SQL scripts located in `server/data/init_db.sql` to create the database and tables.

Run database migrations:

```sh
npm run migrate
```

### Back-End Setup

Navigate to the server directory:

```sh
cd server
```

Install dependencies:

```sh
npm install
```

Create a `.env` file and add the following environment variables:

```sh
# Database Configuration
DB_HOST=localhost
DB_NAME=codeopmvp
DB_USERNAME=root
DB_PASSWORD=yourpassword

# Authentication Secret
SUPER_SECRET=your_secret_key

# Spotify API Credentials
CLIENT_ID=your_spotify_client_id
CLIENT_SECRET=your_spotify_client_secret
```

Start the server:

```sh
npm run start
```

The server will run on [http://localhost:4000](http://localhost:4000)

### Front-End Setup

Navigate to the client directory:

```sh
cd client
```

Install dependencies:

```sh
npm install
```

Start the React application:

```sh
npm run dev
```

The app will run on [http://localhost:5173](http://localhost:5173)

## API Endpoints

### Authentication

- `POST /api/auth/register` → Registers a new user
- `POST /api/auth/login` → Logs in and returns a JWT token
- `GET /api/auth/profile` → Retrieves the logged-in user's profile

### Spotify API

- `GET /api/spotify/token` → Fetches an access token
- `GET /api/spotify/search?topic={topic}&market={country}` → Searches for podcasts
  - `market` should be a two-letter country code (e.g., US, IT, FR)

### Favorites

- `POST /api/favorites` → Adds a podcast to favorites
- `GET /api/favorites` → Fetches all favorite podcasts
- `GET /api/favorites/:id` → Fetches a specific podcast
- `PUT /api/favorites/:id/rating` → Adds a rating to a podcast
- `DELETE /api/favorites/:id` → Deletes a podcast from favorites

## Project Structure

### Backend Structure

server/
│── bin/ # Server entry point
│── config/ # Database configuration
│── controllers/ # Business logic
│── data/ # Database initialization scripts
│── guard/ # Authentication middleware
│── public/ # Public assets (if needed)
│── routes/ # API route handlers
│── .env # Environment variables (ignored in Git)
│── .gitignore # Git ignore file

### Client-Side Structure

client/
│── src/
│ ├── components/ # Reusable UI components
│ │ ├── AuthForm/ # Authentication components (Login, Register)
│ │ ├── FavoritePodcast/ # Favorite podcast components
│ │ ├── NavBar/ # Navigation bar component
│ │ ├── Podcast/ # Podcast search and display components
│ ├── pages/ # Full-page components (Login, Register, Search, Favorites, etc.)
│ ├── assets/ # Static assets like images
│── .gitignore # Git ignore file
│── package.json # Project dependencies and scripts
│── README.md # Project documentation

## Usage Instructions

1. **Search for Podcasts:** Enter a topic and country to fetch relevant podcasts.
   - Use a two-letter country code for the market parameter (e.g., US, IT, FR).
2. **Add to Favorites:** Click "Add to Favorites" to save podcasts.
3. **Rate a Podcast:** Assign a rating to favorite podcasts.
4. **Remove from Favorites:** Click "Delete" to remove a podcast from the list.

## Notes

This project was created as part of the **CodeOp Full-Stack Development Bootcamp**. It's an MVP project demonstrating CRUD operations, authentication, and API integration with Spotify.

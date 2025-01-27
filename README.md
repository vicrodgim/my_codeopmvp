# In the Loop

This project is a React-based web application that allows users to search for podcasts, add them to favorites, rate them, and delete them.

## Features

- Search Podcasts: users can search for podcasts by topic and country using the Spotify API
- Favorite Podcasts: users can add podcasts to their favorites list.
- Rate Podcasts: users can rate their favorite podcasts from 1 to 5.
- Delete favorites: users can remove podcasts from their favorite list.

## Technologies used

Frontend:

1. React
2. React Router
3. Axios
4. React Bootstrap
5. CSS
6. CodePen

Backend:

1. Node.js
2. Express.js
3. MySQL
4. Spotify API
5. Postman

## File Structure

src/
├── components/
│ ├── FavoritePodcast/
│ │ ├── FavoriteList.css  
│ │ ├── FavoriteList.jsx #Component to display the favorite podcasts list
│ │
│ ├── NavBar/
│ │ ├── NavBar.jsx # Component for the navigation bar
│ │
│ ├── Podcast/
│ ├── BannerSearch.css  
│ ├── BannerSearch.jsx # Component for the banner
│ ├── DisplayPodcast.css  
│ ├── DisplayPodcast.jsx # Component to display podcast details
│ ├── PodcastList.css  
│ ├── PodcastList.jsx # Component to display a list of podcasts
│ ├── SearchPodcast.css  
│ ├── SearchPodcast.jsx # Component for searching podcasts
│
├── pages/
│ ├── SearchPage.jsx # Page container for searching podcasts
│ ├── FavoritesPage.jsx # Page container for managing favorite podcasts

## Endpoints Favorites

### Add a Podcast to favorites

/api/favorites

### Get a Single Podcast

/api/favorites/:id

### Add a Rating to a Podcast

/api/favorites/:id/rating

### Delete a Podcast from Favorites

/api/favorites/:id

## Spotify API

### Get Spotify access token

/api/spotify/token

### Search Podcast

/api/spotify/search

## Running the Project

### Server

npm run start

### Client

npm run dev

# NextMovies

A movie browsing application built with a Backend-for-Frontend (BFF) architecture, featuring a clean UI and responsive design.

## Getting Started

### Prerequisites

- Docker and Docker Compose installed on your system

### Running the Application

1. Clone the repository
2. In the terminal, navigate to the project root
3. Run the following command: `docker compose up -d`
4. The application should now be running in detached mode

## Key Features and Notes

### Current Implementation

- API service acts as a BFF with hardcoded `movies.json` data
- Client-side filtering for movie titles (debounced search)
- Responsive design optimized for desktop and mobile
- Environment variables included in `.env` file.

### Development Notes

- The `.env` file is included in the repository solely for quality control by the Next Insurance team. In a production environment, this should be excluded and managed through secure configuration.
- Client-side filtering is currently sufficient due to limited data, but this approach won't scale efficiently with larger datasets.

### Known Limitations

- No "Reset Defaults" button for filters
- Tablet responsiveness may be inconsistent on uncommon devices
- Initial load time for images and data
- Filter button animation not perfectly synced with search bar
- No "No Results Found" message for empty search/filter results

### Improvements

- Move filtering/search to API routes for better scalability
- Implement Autocomplete search with dropdown suggestions
- Add Skeleton components for better loading experience
- Include "Reset Filters" functionality
- Add "No Results Found" messaging
- Improve filter button animation timing

## Technical Details

### Data Flow

![User Data Flow](./assets/data-flow.png)

### UI Components

![UI Components Flow](./assets/ui-flow.png)

## Video Demonstrations

Click the thumbnails below to view showcase videos on YouTube:

### Desktop Experience

[![Desktop Showcase](https://img.youtube.com/vi/LhDB5hKoniE/0.jpg)](https://www.youtube.com/watch?v=LhDB5hKoniE)

### Mobile Experience

[![Mobile Showcase](https://img.youtube.com/vi/VN8Q9iHa3f8/0.jpg)](https://www.youtube.com/shorts/VN8Q9iHa3f8)

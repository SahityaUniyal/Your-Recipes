# Your Recipes

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Link](#project-link)
- [Project Process](#project-process)

## Tech Stack

- Tailwind CSS
- appwrite
- @reduxjs/toolkit and react-redux
- react-router-dom
- react-hook-form
- @tinymce/tinymce-react
- @tailwindcss/typography
- html-rect-parser

## Project Link

## Project Link

Live Version: [https://your-recipes.vercel.app/](https://your-recipes.vercel.app/).

## Functionality

- You can view just the preview on the home page without logging in.
- Create an account using the Signup button.
- Log in to your existing account using the Login button.
- After login:
  - View all recipes.
  - View your own recipes under "My Recipes".
  - Add a new recipe using the "Add Recipe" option.
  - Make a recipe active so that everyone can view it
  - Make it inactive so that only you can see it in `my recipes`

## Running Locally

1. Clone the repository
2. Navigate into the project directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up a .env file with the following environment variables:
   ```plaintext
       VITE_APPWRITE_API_ENDPOINT=your_appwrite_api_endpoint
       VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
       VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
       VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
       VITE_APPWRITE_BUCKET_ID=your_appwrite_bucket_id
       VITE_TINY_API_KEY=your_tinymce_api_key
   ```
   Replace your_appwrite_api_endpoint, your_appwrite_project_id, your_appwrite_database_id, your_appwrite_collection_id, your_appwrite_bucket_id, and your_tinymce_api_key with your actual Appwrite API endpoint, project ID, database ID, collection ID, bucket ID, and TinyMCE API key respectively.
5. Run the development server
   ```bash
       npm run dev
   ```
6. Open the localhost link provided by the development server in your browser

## Project Process

Check the project process: [here](https://github.com/SahityaUniyal/Your-Recipes/blob/main/PROJECT-PROCESS.MD)

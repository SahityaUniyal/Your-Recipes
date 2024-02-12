# Project Process

## Techstack used

    - Tailwind : for styling
    - appwrite : backend-as-a-service
    - @reduxjs/toolkit and react-redux : data fetching and maintaining store
    - react-router-dom:

### Basic set up

    - Set up a gitignore
    - Install prettier and set basic settings and ignore
    - Set up tailwind

### Env

    - set up .env file
    - Set up a conf/conf.js inside source where you import environment variables and export them in String format
    - Need to to above step to avoid in case an env variable in not imported as string

### Appwrite

    - Set up an account on appwrite
    - Create document, collection, bucket on appwrite site
    - Install appwrite in your project modules
    - Create appwrite Folder
        - Create an `auth.js` file where user authentication is handled
            - We do all authentication function inside this file
                - create account, Login, Logout, get current user, update password
        - Create a `database.js` file where database is handled
            - create post, get post, get all post, update post, delete post, get user's post
        - Create a `file.js` file where featuredImage is handled
            - create upload image , get preview image, delete image
        - We export the object of class created in each file

### Redux toolkit store

- Set up the store and wrap the App component in the Provider and pass store
- Create auth slice and post slice
  - Auth slice stores the user authorization status and userData
  - Post slice stores all posts, users own posts and clear posts

### Create all the components

- Container: container that wraps all the elements
- Button : button that will be used everywhere
- Logo: sites logo
- Logout: Logout button conditianally rendered in header

- header: main header for the website
- footer
- input
- select {recipie active or inactive}
- recipies Card : display the recipies
- login
- signup
- Auth
- RTE
- post recipe uses rte

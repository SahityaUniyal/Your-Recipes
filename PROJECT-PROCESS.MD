# Project Process

## Techstack used

    - Tailwind : for styling
    - appwrite : backend-as-a-service
    - @reduxjs/toolkit and react-redux : data fetching and maintaining store
    - react-router-dom:
    - react-hook-form : manage forms
    - @tinymce/tinymce-react : editor

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

  - create a array of objects of items to be displayed in navbar
  - render them as list items in `ul`
  - useNvigate object to navigate to respective link for them
  - Conditional render the logout button based on the auth status

- footer: footer component

- input : common input for all components

  - will use forwardRef so that function where it is used can get the reference to it

- select {recipie active or inactive}
  - will use forwardRef to incase we want a reference to it
- recipies Card : display the recipie

- login : Login component

  - use react-hook-form to manage the form
  - form vaildation errors are displayed using react-hook-forms `errors`
  - Error that appear after form submission are managed and shown using React useState()
  - If user logs in successfully
    - get all the recipes AND user own recipes using appwriteDatabaseService
    - dispatch the user details to the redux-store using authLogin
    - dispatch the users recipies and all the recipes to redux store using allRecipes & usersRecipes
  - After this navigate to the home('/') router using react-router-dom `useNavigate`

- signup

  - same as login
  - the only difference is createUser is used in appwriteAuthService

- AuthLayout

  - Layout container for the pages
  - Purpose:
    - redirect to login in case the user wants to access the page which requires authentication and is not logged in redux-store
    - redirect to home if user accesses the page and authentication is false and authStatus is true

- RTE
  - Realtime editor that will be used to input the recipe
  - We will use tiny-mce
  - Render the Editor from tiny-mce with all the plugins and settings you want using `Controller` from react-hook-form
  - provide the default value as a props in case we use it in edit post
- post form
  - use to create new recipe or edit recipe
  - input all the components that you will use and use them using react-hook-forms
  - if the user passes the recipe prop means it is an edit request
    - get the data on submit using react-hook-forms `handleSubmit`
    - then make use of appwrite and redux store to handle the request
    - If everything is successful navigate the user to the recipe
  - If there is no recipe prop means a new recipe to be created
    - get the data on submit
    - then make use of appwrite and redux store to create a new recipe
    - If everything goes well navigate the user to the recipe

Create the pages

- Set up routing
- create a home path
- wrap login,logout ... pages inside AuthLayout
- Then render the router provider

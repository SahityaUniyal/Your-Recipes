# Project Process

## Techstack used

    - Tailwind
    - appwrite

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

# Backend - Database Advanced - Add Schemas and Models

First, read and try to understand everything already in the app. Look at each file (except `package-lock.json`). Ask if you have questions!

This API should be usable for reading, creating and (**BONUS**) deleting users and messages. Keep the implementation very simple for now;

- ✅ A client can request to add a new user
- ✅ A client can request to add a new message
- ✅ A client can request to get all users
- ✅ A client can request to get all messages

- **BONUS** ✅ A client can request to delete all users
- **BONUS** ✅ A client can request to delete all messages


Questions:
what does "database.connect()" do?
    <Nothing, it was /programmed>

whats the difference between the two routers?
    <they are just for two different routes>

- ✅ Add a seeder script that adds a default set of Users and Messages
- ✅ The seeder script should only work if there is no data in the database
- ✅ Add an `npm` script to run the seeder; `npm run seed`
- ✅ Add an endpoint for deleting individual messages based on _id
- ✅ Add an endpoint for deleting individual users based on _id
- Add (if you don't have them already) into your Messages a number field, a boolean field and a date field
- **ULTRA BONUS** Create a frontend using one single .html file (no .css, no .js files either, use Live Server to develop)


//Further To Do's
Server not crashing with bad Data in post request
setting the frontent urls in .env
securing the connection between front- and backend with password

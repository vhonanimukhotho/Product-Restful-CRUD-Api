## About NODE.js API

This project create a Restful CRUD API with Node.js, Express and MongoDB.

How the project is developed. You can visit https://www.youtube.com/watch?v=FPYlicctQMM&list=PLbKN8A2wssqUlVHRBeJIgIvkbyrX4kR0V or https://www.youtube.com/watch?v=9OfL9H6AmhQ&feature=youtu.be

### API Features

The application can create, read, update and delete data, for example: products, in a database.

## Running the application

1. Install node modules by " npm install"
2. Create a .env file : enter the MONGO_URL and NODE_ENV can be "production|development", FRONTEND is the domain
3. To run "npm run dev"
4. Application runs on http://localhost:3000/
5. Go to test page by http://localhost:3000/About
6. Use API
    -> Get all products http://localhost:3000/api/products/
    -> Gell a product http://localhost:3000/api/products/productID
    -> Save a product http://localhost:3000/api/products/add
    -> Update a product http://localhost:3000/api/products/productID
    -> Delete a product http://localhost:3000/api/products/productID

## Dependencies

The project was initiated by "npm init -y"
express https://expressjs.com/en/starter/hello-world.html
nodemon https://www.npmjs.com/package/nodemon 
mongoose https://www.npmjs.com/package/mongoose
dotenv https://www.npmjs.com/package/dotenv
express-async-handler https://www.npmjs.com/package/express-async-handler


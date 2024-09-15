# GraphQL API with Rate Limiting, Caching, and i18n

This project is a simple GraphQL API that features rate limiting, caching with DataLoader, and internationalization (i18n). It also includes basic user management operations with MongoDB integration.

## Features

- **GraphQL API**: Built with Apollo Server and Express.
- **Rate Limiting**: Prevents abuse by limiting the number of requests a user can make in a given time window.
- **Caching with DataLoader**: Optimizes database queries by batching and caching requests.
- **Internationalization (i18n)**: Supports multiple languages (e.g., English, Spanish).
- **Validation**: Basic input validation for queries and mutations.
- **Error Handling**: Graceful error handling with user-friendly messages.
- **MongoDB Integration**: User data is stored in MongoDB.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kindrew/graphql-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd graphql-api
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   Create a `.env` file and add your MongoDB connection URL:

   ```
   MONGODB_URI=mongodb://localhost:27017/graphql-demo
   ```

5. Run the application:

   ```bash
   npm start
   ```

6. Open the GraphQL Playground:

   Visit `http://localhost:4000/graphql` to access the GraphQL Playground.

## Available Queries and Mutations

### Queries

- `getUser(id: ID!)`: Fetch a single user by ID.
- `getUsers`: Fetch all users.

### Mutations

- `createUser(name: String!, email: String!)`: Create a new user.

## Enhancements

- **Rate Limiting**: Limits each IP to 100 requests per 15 minutes.
- **DataLoader**: Optimizes database queries with batching and caching.
- **Internationalization (i18n)**: Supports multiple languages (default is English).

## Contributing

Feel free to open issues or submit pull requests for improvements or bug fixes.


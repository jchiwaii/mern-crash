# MERN Stack Product Store

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing products.

## Features

- Create, read, update, and delete products
- Image upload for products
- Modern React frontend with Chakra UI
- Express.js backend with MongoDB
- Single server deployment (frontend + backend)

## Local Development

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)
- MongoDB (local or cloud)

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:

   ```env
   NODE_ENV=development
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. Run the application:

   ```bash
   # Development mode (with auto-reload)
   npm run dev

   # Production mode
   npm start
   ```

## Deployment on Render

### Method 1: Using render.yaml (Recommended)

1. Make sure you have a `render.yaml` file in your root directory (already included)
2. Connect your GitHub repository to Render
3. Render will automatically detect the `render.yaml` file and deploy according to the configuration

### Method 2: Manual Configuration

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Use these settings:
   - **Build Command**: `npm install && npm install --prefix frontend && npm run build --prefix frontend`
   - **Start Command**: `npm start`
   - **Environment**: `Node`
   - **Node Version**: `18` or higher

### Environment Variables

Set these in your Render dashboard:

- `NODE_ENV`: `production`
- `MONGO_URI`: Your MongoDB connection string
- `PORT`: Leave empty (Render will set automatically)

### Database Setup

1. Create a MongoDB database (MongoDB Atlas recommended)
2. Get your connection string
3. Add it to the `MONGO_URI` environment variable in Render

## API Endpoints

- `GET /api/products` - Get all products
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

## Frontend Routes

- `/` - Homepage with product listing
- `/create` - Create new product page

## Project Structure

```
mern-crash/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── productController.js
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── Product.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── store/
│   ├── dist/ (built files)
│   └── package.json
├── render.yaml
└── package.json
```

## Troubleshooting

### Common Issues

1. **Express module not found**: Make sure all dependencies are installed with `npm install`
2. **Build fails**: Check that Node.js version is 18 or higher
3. **Database connection fails**: Verify your MongoDB connection string

### Deployment Issues

If you encounter issues with deployment:

1. Check the build logs in Render
2. Ensure all environment variables are set correctly
3. Verify your MongoDB connection string is correct and accessible
4. Make sure your repository is connected properly to Render

## Scripts

- `npm run dev` - Development mode with auto-reload
- `npm start` - Production server
- `npm run build` - Build frontend for production
- `npm run frontend` - Run only frontend development server
- `npm run backend` - Run only backend development server

## Technologies Used

- **Frontend**: React, Chakra UI, Vite, Zustand
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Deployment**: Render (or any Node.js hosting platform)

...

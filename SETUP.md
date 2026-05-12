# Setup Guide - Indabo za Mariya

## Quick Start (5 minutes)

### Prerequisites
- Node.js v14+ installed
- MongoDB running locally (or MongoDB Atlas account)
- Git

### Step 1: Install Dependencies

From the root directory:

```bash
# Install root dependencies
npm install

# Or manually:
cd backend
npm install
cd ../frontend
npm install
```

### Step 2: Configure Backend

1. Navigate to the backend directory:
```bash
cd backend
```

2. The `.env` file is already configured with default settings. Update it if needed:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/indabo_za_mariya
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

3. If using MongoDB Atlas, change MONGODB_URI to:
```
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/indabo_za_mariya?retryWrites=true&w=majority
```

### Step 3: Start the Application

From the root directory, run both frontend and backend:

```bash
npm run dev
```

Or start them separately:

**Terminal 1 - Backend:**
```bash
npm run backend
# or: cd backend && npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run frontend
# or: cd frontend && npm start
```

### Step 4: Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Default Login**: username: `admin` / password: `••••••••`

## Docker Setup (Alternative)

### Prerequisites
- Docker and Docker Compose installed

### Steps

1. Ensure you're in the project root directory

2. Start all services:
```bash
docker-compose up --build
```

3. Access the application at http://localhost:3000

4. Stop services:
```bash
docker-compose down
```

## Database Setup

### MongoDB Local

1. **Install MongoDB Community** from https://docs.mongodb.com/manual/installation/

2. **Start MongoDB**:
   - **Windows**: MongoDB should start automatically after installation
   - **Mac**: `brew services start mongodb-community`
   - **Linux**: `sudo systemctl start mongod`

3. **Verify it's running**:
```bash
mongo
# You should see the MongoDB shell
# Type 'exit' to quit
```

### MongoDB Atlas (Cloud)

1. Go to https://www.mongodb.com/cloud/atlas

2. Create a free account and cluster

3. Create database user credentials

4. Get connection string and update `.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/indabo_za_mariya
```

5. Whitelist your IP address in Atlas security settings

## Initial Data Setup

After the application starts, you can create initial data using the API:

### Create Admin User (if needed)

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Père",
    "lastName": "Munyankindi",
    "username": "admin",
    "password": "admin123",
    "email": "admin@indabo.com",
    "phone": "+250 788 001 001",
    "role": "Administrateur"
  }'
```

### Login to Get Token

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "password": "admin123"
  }'
```

This will return a JWT token to use in API requests.

## Project Structure

```
Indabo_za_Maria-1/
├── backend/                 # Node.js/Express server
│   ├── models/             # MongoDB models
│   ├── routes/             # API endpoints
│   ├── middleware/         # Authentication middleware
│   ├── server.js           # Main server file
│   ├── package.json
│   ├── .env                # Configuration
│   └── Dockerfile
├── frontend/               # React application
│   ├── public/             # Static files
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── styles/         # CSS files
│   │   ├── index.jsx       # Main component
│   │   └── index.js        # Entry point
│   ├── package.json
│   └── Dockerfile
├── package.json            # Root package.json
├── docker-compose.yml      # Docker configuration
└── README.md              # Documentation
```

## Troubleshooting

### MongoDB Connection Error
- **Error**: `MongoServerError: connect ECONNREFUSED`
- **Solution**: Make sure MongoDB is running. Start it with `mongod` on Windows or `brew services start mongodb-community` on Mac.

### Port Already in Use
- **Backend (5000)**: `lsof -i :5000` (Mac/Linux) or check Windows Task Manager
- **Frontend (3000)**: `lsof -i :3000` (Mac/Linux) or check Windows Task Manager
- Change port in `.env` for backend or pass `PORT=3001` for frontend

### npm install Issues
- Delete `node_modules` and `package-lock.json`
- Clear npm cache: `npm cache clean --force`
- Reinstall: `npm install`

### Blank React Page After Login
- Check browser console for errors (F12)
- Ensure backend is running at http://localhost:5000
- Check network tab to see if API calls are successful

## Development Tips

### Hot Reload
- Frontend: React automatically reloads on file changes
- Backend: Nodemon watches for changes and restarts the server

### API Testing
Use Postman or curl to test API endpoints:
- Import backend routes into Postman
- Remember to include JWT token in Authorization header

### Adding New Features
1. Create backend route in `backend/routes/`
2. Create React component in `frontend/src/components/`
3. Wire up components in Navigation and pages
4. Test frontend and backend integration

## Next Steps

1. Customize colors in `frontend/src/styles/globals.css`
2. Add more member fields in backend/models/Member.js
3. Implement full Members, Events, and Payments screens
4. Add report generation features
5. Set up email notifications
6. Deploy to production (Heroku, AWS, etc.)

## Support

For issues:
1. Check error messages in browser console (F12)
2. Check backend console output
3. Verify MongoDB is connected
4. Check that ports 3000 and 5000 are available

## Production Deployment

### Environment Variables for Production
- Set `NODE_ENV=production`
- Use strong `JWT_SECRET` (generate with `openssl rand -hex 32`)
- Use MongoDB Atlas (secure)
- Use HTTPS
- Enable CORS for frontend domain only

### Deployment Platforms
- Backend: Heroku, AWS, Digital Ocean, Railway
- Frontend: Vercel, Netlify, AWS S3 + CloudFront

See individual platform documentation for specific steps.

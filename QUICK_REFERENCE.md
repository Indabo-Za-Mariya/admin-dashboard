# Quick Reference - Indabo za Mariya

## ⚡ Essential Commands

### Initial Setup
```bash
# One-time setup
npm install              # Install all dependencies

# Or manually
cd backend && npm install && cd ../frontend && npm install
```

### Running the App
```bash
# Option 1: Run both frontend & backend together
npm run dev

# Option 2: Run separately
npm run backend          # Terminal 1 - Backend API
npm run frontend         # Terminal 2 - React App
```

### Accessing the App
```
Frontend: http://localhost:3000
Backend:  http://localhost:5000/api/health (to check if running)
```

### Login Credentials
```
Username: admin
Password: ••••••••
```

## 🗂️ File Locations

| Component | File | Location |
|-----------|------|----------|
| Backend Server | server.js | `/backend/server.js` |
| Frontend Entry | index.jsx | `/frontend/src/index.jsx` |
| Environment Config | .env | `/backend/.env` |
| Database Models | *.js | `/backend/models/` |
| API Routes | *.js | `/backend/routes/` |
| React Components | *.jsx | `/frontend/src/components/` |
| Styles | *.css | `/frontend/src/styles/` |

## 🔧 Common Tasks

### Add a New Member (via Frontend)
1. Login at http://localhost:3000
2. Click "+ Nouveau Membre" button
3. Fill in the form (to be implemented)
4. Click "Enregistrer"

### Record a Payment (via Frontend)
1. Click "+ Enregistrer Paiement" button
2. Fill in payment details (to be implemented)
3. Click "Sauvegarder"

### Test Backend API with cURL

**Check if backend is running:**
```bash
curl http://localhost:5000/api/health
```

**Register a new user:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName":"Test",
    "lastName":"User",
    "username":"testuser",
    "password":"test123",
    "role":"Coordinateur"
  }'
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"••••••••"}'
```

**Get all members (replace TOKEN with actual JWT):**
```bash
curl http://localhost:5000/api/members \
  -H "Authorization: Bearer TOKEN"
```

## 📦 Install New Package

```bash
# Frontend package (from frontend directory)
cd frontend
npm install package-name

# Backend package (from backend directory)
cd backend
npm install package-name
```

## 🚨 Troubleshooting Quick Fixes

### Port 3000 or 5000 in use
```bash
# Find and kill process
# Windows: Use Task Manager or:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -i :3000
kill -9 <PID>
```

### MongoDB connection fails
```bash
# Start MongoDB
# Windows: Check MongoDB is in Services
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod
```

### npm modules broken
```bash
# Clean reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### React blank page
1. Check browser console (F12)
2. Check backend is running: http://localhost:5000/api/health
3. Check network tab for failed requests

## 🏗️ Project Structure Quick Navigation

```
backend/
  ├── models/           👤 Data models
  ├── routes/           🔌 API endpoints
  ├── middleware/       🔐 Auth & middleware
  └── server.js         🚀 Main server

frontend/
  ├── src/
  │   ├── components/   ⚛️ React components
  │   ├── pages/        📄 Page layouts
  │   └── styles/       🎨 CSS styling
  └── public/           📦 Static files
```

## 🔄 Development Workflow

1. **Make changes** to code files
2. **Frontend reloads automatically** when you save (React dev server)
3. **Backend restarts automatically** when you save (nodemon)
4. **No need to restart** - just refresh browser!

## 📊 Database Collections

```
Database: indabo_za_mariya

Collections:
  ├── users      (Login credentials, roles)
  ├── members    (Church members)
  ├── events     (Pilgrimages & events)
  └── payments   (Financial transactions)
```

## 🌍 Environment Variables

Located in `/backend/.env`:

```
PORT=5000                    # Backend port
MONGODB_URI=...             # Database connection
JWT_SECRET=...              # Token secret key
NODE_ENV=development        # Environment mode
```

## 📱 Features Status

```
✅ = Implemented
⏳ = In Progress  
⚪ = To Do

✅ Login/Authentication
✅ Dashboard layout
✅ Sidebar navigation
⚪ Members list & management
⚪ Events management
⚪ Payments tracking
⚪ Reports & export
⚪ User management
```

## 🎨 Color Palette

```
--blue-deep:    #0d1f3c    (Main dark blue)
--gold:         #c9a84c    (Accent gold)
--success:      #2e7d4f    (Green)
--warning:      #c07a1a    (Orange)
--red-accent:   #9b2335    (Red)
```

## 📚 Additional Resources

- Full README: `README.md`
- Setup Guide: `SETUP.md`
- Build Summary: `BUILD_SUMMARY.md`
- API Routes: Check `/backend/routes/*.js`

## 🚀 Deploy to Production

```bash
# Build frontend
cd frontend && npm run build

# Set production .env
NODE_ENV=production
JWT_SECRET=<strong-secret>
(etc.)

# Would deploy to: Heroku, AWS, Digital Ocean, etc.
```

## 💡 Tips

- Use VSCode Extensions: ES7+ React/Redux snippets
- Install MongoDB Compass for visual database management
- Use Postman to test API endpoints before frontend
- Comment your code as you develop
- Test API routes before building UI

## 🆘 Need Help?

1. Check SETUP.md for detailed troubleshooting
2. Review backend console for errors
3. Check browser console (F12) for frontend errors
4. Verify MongoDB is running
5. Ensure correct .env configuration

---

**Happy coding!** 🎉

For more details, see the comprehensive guides in:
- `SETUP.md` - Complete setup instructions
- `README.md` - Project overview
- `BUILD_SUMMARY.md` - What's been built

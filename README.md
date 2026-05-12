# Indabo za Mariya - Church Management System

A comprehensive web-based church management system built with React and Node.js/Express.

## Features

- **Dashboard**: Real-time overview of members, finances, and events
- **Member Management**: Register and manage church members
- **Event Management**: Create and manage pilgrimages and church events
- **Payment Tracking**: Record and track member contributions
- **Financial Reports**: Generate detailed financial reports
- **User Management**: Role-based access control

## Technology Stack

- **Frontend**: React 18, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Indabo_za_Maria-1
```

2. **Backend Setup**:
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
npm run dev
```

3. **Frontend Setup**:
```bash
cd ../frontend
npm install
npm start
```

The application will be available at `http://localhost:3000`

### Default Credentials

- **Username**: admin
- **Password**: ••••••••

## Project Structure

```
Indabo_za_Maria-1/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Member.js
│   │   ├── Event.js
│   │   └── Payment.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── members.js
│   │   ├── events.js
│   │   ├── payments.js
│   │   └── users.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── index.jsx
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Members
- `GET /api/members` - Get all members
- `POST /api/members` - Create new member
- `GET /api/members/:id` - Get member details
- `PUT /api/members/:id` - Update member
- `DELETE /api/members/:id` - Delete member

### Events
- `GET /api/events` - Get all events
- `POST /api/events` - Create new event
- `GET /api/events/:id` - Get event details
- `PUT /api/events/:id` - Update event
- `POST /api/events/:id/register/:memberId` - Register member to event

### Payments
- `GET /api/payments` - Get all payments
- `POST /api/payments` - Record new payment
- `PUT /api/payments/:id/confirm` - Confirm payment
- `PUT /api/payments/:id/reject` - Reject payment

### Users
- `GET /api/users` - Get all users
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Environment Variables

Create a `.env` file in the backend directory:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/indabo_za_mariya
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

## Color Scheme

- Primary Blue: `#0d1f3c`
- Gold Accent: `#c9a84c`
- Success Green: `#2e7d4f`
- Warning Orange: `#c07a1a`
- Error Red: `#9b2335`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email support@indaboZaMariya.com or open an issue on GitHub.

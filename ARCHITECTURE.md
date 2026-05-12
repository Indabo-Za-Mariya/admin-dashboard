# Indabo za Mariya - System Architecture

## 🏗️ Application Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    INTERNET / CLIENT BROWSERS                    │
└─────────────────┬───────────────────────────────────────────────┘
                  │ HTTP(S)
        ┌─────────▼──────────┐
        │   REACT FRONTEND   │  Port 3000
        │  (React 18 + Axios)│
        ├────────────────────┤
        │ • Login Screen     │
        │ • Dashboard        │
        │ • Members UI       │
        │ • Events UI        │
        │ • Payments UI      │
        │ • Reports UI       │
        │ • Users UI         │
        └────────┬───────────┘
                 │ REST API (JSON)
      ┌──────────▼──────────────┐
      │  EXPRESS.JS BACKEND    │  Port 5000
      │  (Node.js + Express)   │
      ├───────────────────────────┤
      │ • Authentication (JWT)  │
      │ • User Routes          │
      │ • Member Routes        │
      │ • Event Routes         │
      │ • Payment Routes       │
      │ • Error Handling       │
      └──────────┬──────────────┘
                 │ MongoDB Driver
      ┌──────────▼──────────────┐
      │     MONGODB DATABASE   │
      │   (Local or Atlas)     │
      ├───────────────────────────┤
      │ Collections:           │
      │ • users (auth)        │
      │ • members (fidèles)   │
      │ • events (pèlerinages)│
      │ • payments (finances) │
      └────────────────────────┘
```

## 📊 Data Flow

```
USER LOGIN
    │
    ├─► React: Username + Password
    │   │
    │   └─► Axios POST /api/auth/login
    │       │
    │       └─► Express: Validate credentials
    │           │
    │           ├─► Hash & Compare password (bcrypt)
    │           │
    │           └─► Generate JWT Token (7 days)
    │
    └─► Store Token in localStorage
        └─► Frontend: Authenticated!


LIST MEMBERS (Example)
    │
    ├─► React: GET /api/members (with JWT)
    │   │
    │   └─► Express Middleware: Verify Token
    │       │
    │       ├─► Valid? ✓
    │       │   │
    │       │   └─► MongoDB: Find all members
    │       │       │
    │       │       └─► Return JSON array
    │       │
    │       └─► React: Display Members Table
```

## 🔐 Authentication Flow

```
┌────────────────────────────────────────────┐
│         LOGIN CREDENTIALS SENT             │
│  (username: admin, password: ••••••••)    │
└────────────────┬─────────────────────────┘
                 │
                 ▼
        ┌────────────────────┐
        │ Express /login     │
        │ Route Handler      │
        └────────┬───────────┘
                 │
       ┌─────────▼──────────────┐
       │ Find user in MongoDB   │
       │ by username            │
       └─────────┬──────────────┘
                 │
        ┌────────▼──────────────┐
        │ bcrypt.compare()      │
        │ Password verification │
        └────────┬──────────────┘
                 │
      ┌──────────▼───────────┐
      │ Passwords match? ✓   │
      └──────────┬───────────┘
                 │
        ┌────────▼──────────────────┐
        │ jwt.sign({user data})      │
        │ Create JWT Token           │
        │ Expires in 7 days          │
        └────────┬───────────────────┘
                 │
        ┌────────▼──────────────┐
        │ Send to Frontend       │
        │ Token + User Info      │
        └────────┬──────────────┘
                 │
        ┌────────▼──────────────┐
        │ localStorage.setItem() │
        │ Save token in browser  │
        └────────┬──────────────┘
                 │
        ┌────────▼──────────────┐
        │ ✓ USER LOGGED IN      │
        │ Show Dashboard        │
        └───────────────────────┘
```

## 🗃️ Database Schema

```
┌─────────────────────────────────────────┐
│        USERS COLLECTION                 │
├─────────────────────────────────────────┤
│ _id: ObjectId                           │
│ firstName: String                       │
│ lastName: String                        │
│ username: String (unique)               │
│ password: String (hashed)               │
│ email: String                           │
│ phone: String                           │
│ role: String (Administrateur/Trésorier)│
│ isActive: Boolean                       │
│ lastLogin: Date                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│      MEMBERS COLLECTION                 │
├─────────────────────────────────────────┤
│ _id: ObjectId                           │
│ memberId: String (MEM-0001)             │
│ fullName: String                        │
│ email: String                           │
│ phone: String                           │
│ address: String                         │
│ registrationDate: Date                  │
│ status: String (Actif/Inactif)          │
│ totalPaid: Number (RWF)                 │
│ notes: String                           │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│       EVENTS COLLECTION                 │
├─────────────────────────────────────────┤
│ _id: ObjectId                           │
│ eventId: String (EVT-2026-001)          │
│ name: String                            │
│ destination: String                     │
│ startDate: Date                         │
│ capacity: Number                        │
│ ticketPrice: Number (RWF)               │
│ status: String (Ouvert/Fermé)           │
│ registeredCount: Number                 │
│ registeredMembers: [ObjectId]           │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│     PAYMENTS COLLECTION                 │
├─────────────────────────────────────────┤
│ _id: ObjectId                           │
│ paymentId: String (PAY-00241)           │
│ memberId: ObjectId (ref: Member)        │
│ type: String (Cotisation/Pèlerinage)   │
│ amount: Number (RWF)                    │
│ paymentDate: Date                       │
│ method: String (Espèces/Mobile Money)   │
│ status: String (Payé/En attente)        │
│ notes: String                           │
└─────────────────────────────────────────┘
```

## 🔌 API Endpoint Structure

```
┌────────────────────────────┐
│   AUTHENTICATION ROUTES    │
├────────────────────────────┤
│ POST   /api/auth/register  │  Create User
│ POST   /api/auth/login     │  Login
└────────────────────────────┘

┌────────────────────────────┐
│    MEMBER ROUTES           │
├────────────────────────────┤
│ GET    /api/members        │  List
│ POST   /api/members        │  Create
│ GET    /api/members/:id    │  Read
│ PUT    /api/members/:id    │  Update
│ DELETE /api/members/:id    │  Delete
└────────────────────────────┘

┌────────────────────────────┐
│    EVENTS ROUTES           │
├────────────────────────────┤
│ GET    /api/events         │  List
│ POST   /api/events         │  Create
│ GET    /api/events/:id     │  Read
│ PUT    /api/events/:id     │  Update
│ POST   /api/events/:id/... │  Register Member
└────────────────────────────┘

┌────────────────────────────┐
│    PAYMENT ROUTES          │
├────────────────────────────┤
│ GET    /api/payments       │  List
│ POST   /api/payments       │  Record
│ PUT    /api/payments/:id/..│  Confirm/Reject
└────────────────────────────┘

┌────────────────────────────┐
│    USER ROUTES             │
├────────────────────────────┤
│ GET    /api/users          │  List
│ GET    /api/users/:id      │  Read
│ PUT    /api/users/:id      │  Update
│ DELETE /api/users/:id      │  Delete
└────────────────────────────┘
```

## 🎨 Frontend Component Tree

```
App (index.jsx)
├── Login (pages/Login.jsx)
│   └── Login Screen
│
└── Dashboard (pages/Dashboard.jsx)
    ├── Sidebar (components/Sidebar.jsx)
    │   └── Navigation Items
    │
    ├── Topbar (components/Topbar.jsx)
    │   └── Page Title + Action Buttons
    │
    └── Active Screen:
        ├── Dashboard (components/Dashboard.jsx)
        │   ├── StatCard (4x)
        │   ├── RevenueCard
        │   ├── PaymentsTable
        │   ├── EventsList
        │   └── ActivityLog
        │
        ├── Members (components/Members.jsx) [TODO]
        ├── Events (components/Events.jsx) [TODO]
        ├── Payments (components/Payments.jsx) [TODO]
        ├── Reports (components/Reports.jsx) [TODO]
        └── Users (components/Users.jsx) [TODO]
```

## 🚀 Deployment Architecture

```
┌──────────────────────────────────────┐
│         PRODUCTION SETUP             │
├──────────────────────────────────────┤
│                                      │
│  ┌─────────────────────────────┐    │
│  │   CDN / Static Files        │    │
│  │   (Frontend Build)          │    │
│  │   Vercel / Netlify          │    │
│  └──────────────┬──────────────┘    │
│                 │                    │
│  ┌──────────────▼──────────────┐    │
│  │   API Server                │    │
│  │   (Node.js + Express)       │    │
│  │   Heroku / AWS / Railway    │    │
│  └──────────────┬──────────────┘    │
│                 │                    │
│  ┌──────────────▼──────────────┐    │
│  │   Database                  │    │
│  │   (MongoDB Atlas)           │    │
│  └─────────────────────────────┘    │
│                                      │
└──────────────────────────────────────┘
```

## 📈 Request/Response Cycle

```
USER BROWSER                    EXPRESS SERVER              MONGODB
    │                                │                         │
    │──► Login Form ─────────────────►                          │
    │                                │                          │
    │                         ┌───────▼──────────────┐           │
    │                         │ POST /api/auth/login │           │
    │                         │ (username, password) │           │
    │                         └───────┬──────────────┘           │
    │                                 │                          │
    │                                 ├────► Find User ────────►│
    │                                 │      by username         │
    │                                 │◄──── {user data} ◄────│
    │                                 │                          │
    │                         ┌───────▼──────────────┐           │
    │                         │ Compare Passwords    │           │
    │                         │ (bcrypt.compare)     │           │
    │                         └───────┬──────────────┘           │
    │                                 │                          │
    │                         ┌───────▼──────────────┐           │
    │                         │ Generate JWT Token   │           │
    │                         │ Sign with secret     │           │
    │                         └───────┬──────────────┘           │
    │                                 │                          │
    │◄─────── JWT + User Data ────────┤                          │
    │                                 │                          │
    └─ Store in localStorage ─────────┘
        Ready for authenticated requests!
```

---

This architecture provides:
- ✅ Scalable API structure
- ✅ Secure authentication
- ✅ Efficient database queries
- ✅ Clean separation of concerns
- ✅ Easy to extend & maintain

# Restaurant Management System

Complete restaurant management system for North Macedonia with 5 user roles, 155+ API endpoints, and real-time features.

## Overview

- **Frontend**: Flutter (iOS, Android, Web)
- **Backend**: Node.js/Express
- **Database**: PostgreSQL
- **Real-time**: Server-Sent Events (SSE)
- **Auth**: JWT with role-based access control
- **Languages**: English, Macedonian, Serbian, Greek, Albanian

## Features

### User Roles

1. **Owner** - Revenue analytics, staff management, leaderboards
2. **Admin** - Approvals, operations monitoring, reports
3. **Waiter** - Table management, orders, payments, shifts
4. **Customer** - QR menu, ordering, ratings
5. **Developer** - System health, monitoring, debugging

### Core Features

- **Order Management**: Complete lifecycle from placement to payment
- **Macedonian VAT**: 18%, 10%, 5%, 0% rates with fiscal compliance
- **Real-Time Updates**: SSE for orders, notifications, system alerts
- **Payment Processing**: Cash, card, and mixed payments
- **Ratings System**: Post-payment customer feedback
- **Shift Management**: Revenue tracking per waiter
- **Multi-language**: 5 languages with O(1) lookups
- **Theme System**: Light, dark, and system themes

## Tech Stack

### Backend
- Node.js v18+
- Express.js
- PostgreSQL 14+
- Sequelize ORM
- JWT authentication
- bcrypt for password hashing
- SSE for real-time events

### Frontend
- Flutter 3.x
- Material Design 3
- Provider for state management
- Secure storage for tokens
- HTTP client with interceptors

## Database Models (28+)

- User, Waiter, Customer
- Order, OrderItem, Payment, Rating
- MenuItem, Category, Table, Zone
- Shift, ClockRecord, ClosingReport
- FiscalReceipt, VoidCompRequest
- CashDrawer, CashTransaction, TaxConfig
- And more...

## API Endpoints (155+)

| Category | Count | Key Features |
|----------|-------|-------------|
| Authentication | 5 | Login, logout, refresh, validate |
| Users | 6 | CRUD, performance tracking |
| Waiters | 8 | Leaderboard, revenue, PIN management |
| Orders | 18+ | Full lifecycle, payment, fiscal |
| Shifts | 12 | Start/end, revenue, statistics |
| Tables | 8 | Status, zones, orders |
| Menu | 14+ | Items, categories, search |
| Ratings | 6 | Customer feedback, waiter performance |
| Cash | 10 | Drawer management, reconciliation |
| Analytics | 8+ | Dashboard, revenue, trends |
| And more... | 85+ | Complete restaurant operations |

## Setup Instructions

### Prerequisites

- Node.js v18 or higher
- PostgreSQL 14 or higher
- Flutter SDK 3.x
- Git

### Backend Setup

```bash
cd backend
npm install

# Configure database
cp .env.example .env
# Edit .env with your database credentials

# Initialize database
npm run init:db

# Seed test data
npm run seed

# Start development server
npm run dev
```

### Frontend Setup

```bash
cd frontend
flutter pub get

# Run on desired platform
flutter run -d chrome    # Web
flutter run -d android   # Android
flutter run -d ios       # iOS
```

### Verify Installation

```bash
# Check backend health
curl http://localhost:5000/health

# Expected response:
# {"status":"ok","database":"connected","sse":"active"}
```

## Test Credentials

### Staff Accounts
```
Owner:     username: owner     | password: owner123
Admin:     username: admin     | password: admin123
Developer: username: developer | password: dev123
```

### Waiter PINs
```
Waiter 1: PIN 1001 (Zone A)
Waiter 2: PIN 1002 (Zone B)
Waiter 3: PIN 1003 (Zone C)
```

### Customer Access
```
Table-based authentication via QR code
Test Table IDs: 1-15
```

## Macedonian VAT Compliance

### Tax Rates
- **18%** - Standard rate (most items)
- **10%** - Reduced rate (basic supplies)
- **5%** - Super-reduced rate (bread, drinks)
- **0%** - Zero-rated (exempt items)

### Fiscal Features
- Fiscal number generation (FIS-YYYYMMDD-NNNNN)
- Per-item tax calculation
- Tax breakdown on receipts
- Daily tax reports by rate
- UPS (tax authority) export format
- Complete audit trail

## Real-Time Features (SSE)

### Event Types
- `order_new` - New order placed
- `order_accepted` - Order accepted by kitchen
- `order_ready` - Order ready for pickup
- `order_served` - Order delivered
- `void_request` - Approval needed
- `system_alert` - System announcements

### Channels
- Kitchen: New orders, ready notifications
- Bar: Drink orders, ready notifications
- Waiter: Ready orders, customer requests
- Admin: Approvals, system alerts
- All: System-wide broadcasts

## Project Structure

```
restaurant-management-system/
├── backend/
│   ├── src/
│   │   ├── config/          # Database, JWT, SSE config
│   │   ├── models/          # 28+ Sequelize models
│   │   ├── routes/          # 155+ API endpoints
│   │   ├── middleware/      # Auth, validation, error handling
│   │   ├── services/        # Business logic
│   │   ├── utils/           # Helpers, validators
│   │   └── app.js           # Express app setup
│   ├── scripts/
│   │   ├── init-db.js       # Database initialization
│   │   └── seed.js          # Test data seeding
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── lib/
│   │   ├── models/          # Data models
│   │   ├── screens/         # 12+ screens
│   │   ├── widgets/         # Reusable components
│   │   ├── services/        # API, auth, storage
│   │   ├── providers/       # State management
│   │   ├── utils/           # Helpers, constants
│   │   └── main.dart        # App entry point
│   ├── pubspec.yaml
│   └── assets/
│       └── translations/    # 5 language files
│
└── docs/
    ├── API.md               # API documentation
    ├── DATABASE.md          # Schema documentation
    └── DEPLOYMENT.md        # Deployment guide
```

## Security

- JWT authentication with 7-day access tokens
- Refresh tokens (30-day validity)
- bcrypt password hashing (10 salt rounds)
- Role-based access control on all endpoints
- SQL injection prevention (parameterized queries)
- XSS protection
- CORS configuration
- Rate limiting on auth endpoints
- Secure token storage on device

## Performance

- **Frontend**: O(1) language lookups, lazy loading
- **Backend**: Database indexes, connection pooling
- **Real-Time**: Sub-100ms SSE delivery
- **API Response**: < 200ms (95th percentile)
- **Language Switch**: < 50ms

## Status

✅ All 5 user roles implemented
✅ 155+ API endpoints complete
✅ 28+ database models
✅ 5 languages with instant switching
✅ Macedonian VAT compliance
✅ Real-time SSE working
✅ Complete payment flow
✅ Rating system functional
✅ Responsive design (phone/tablet/web)
✅ Production-ready

## License

MIT License - See LICENSE file for details

## Support

For issues or questions, please open an issue on GitHub.

---

**Built for North Macedonian restaurants with compliance and performance in mind.**

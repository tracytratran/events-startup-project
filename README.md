# HackYourFuture Events App

An event ticketing platform built during the HackYourFuture Frontend Specialism course.

## Features

- **Browse events** — Grid layout with event cards showing name, date, venue, price, and ticket availability
- **Search & filter** — Filter events by keyword, category, and price range; sort results
- **Pagination** — Events are paginated for easier browsing
- **Event detail** — Full event information on a dedicated page
- **User authentication** — Register and log in with email and password; session persisted in localStorage
- **Shopping cart** — Add tickets, adjust quantities, remove items; cart persisted in localStorage
- **Checkout** — Place orders as an authenticated user
- **Order history** — View past orders on the Account page
- **Responsive design** — Mobile and desktop layouts

## Tech Stack

- **React 18** — UI framework
- **Vite** — Dev server and build tool
- **React Router v6** — Client-side routing
- **Material-UI** — Component library
- **CSS Modules** — Scoped component styles
- **Context API** — State management (auth, cart, orders, snackbar)

## Project Structure

```
app/
├── api/
│   ├── db.json          # Mock database (users, events, orders)
│   └── server.cjs       # json-server + json-server-auth setup
├── src/
│   ├── pages/           # Homepage, EventList, EventDetail, Cart, Account, Login, Register
│   ├── components/      # Header, Footer, EventCard, SideBar, SearchSection, FilterOption,
│   │                    # SortBar, CartItem, CartSummary, OrderItem, Pagination, Menu, Input
│   ├── context/         # AuthContext, CartContext, OrderContext, SnackbarContext
│   ├── hooks/           # useEvents, useEventById, useEventFilters, useEventsPerPage
│   ├── api.js           # API base URL helper
│   └── main.jsx         # App entry point
└── package.json
```

## Prerequisites

- Node.js `^20.12.1`
- npm `^10.5.0`

## Getting Started

```bash
npm install
npm run dev:all
```

- **Frontend**: http://localhost:5173
- **Mock API**: http://localhost:3001

## Commands

| Command           | Description                |
| ----------------- | -------------------------- |
| `npm run dev`     | Start Vite dev server only |
| `npm run api`     | Start mock API only        |
| `npm run dev:all` | Start both together        |
| `npm run build`   | Build for production       |
| `npm run format`  | Format with Prettier       |
| `npm run check`   | Lint with ESLint           |

## Mock API

Powered by **json-server** and **json-server-auth**. Data lives in `api/db.json`.

| Method | Endpoint      | Auth required | Description                       |
| ------ | ------------- | ------------- | --------------------------------- |
| POST   | `/register`   | No            | Create a new account              |
| POST   | `/login`      | No            | Log in and receive a JWT          |
| GET    | `/events`     | No            | List all events                   |
| GET    | `/events/:id` | No            | Get a single event                |
| GET    | `/orders`     | Yes           | Get orders for the logged-in user |
| POST   | `/orders`     | Yes           | Place a new order                 |

## Common Issues

**Port conflict** — If port 5173 or 3001 is already in use, stop the conflicting process and try again.

**Mock API not starting** — Make sure you're running `npm run api` or `npm run dev:all` from the `app/` folder.

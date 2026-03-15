# goodGoods — Ecommerce Frontend (Next.js)

A dummy ecommerce **frontend** project built to practice frontend development skills as part of an internship at **Upcode Software Labs**.

It includes product browsing (all products + category-wise), product detail pages, and a working cart (add/remove/update quantity + totals). Product data is fetched from a public products API (via the services layer).

---

## Tech Stack

- **Next.js (App Router)** + **React**
- **TypeScript**
- **Bootstrap 5** + **React-Bootstrap**
- **Font Awesome** + **React Icons**
- ESLint (Next.js config)

---

## Features

- **Home page**
  - Hero **carousel/banner**
  - **Category listing** with preview images
  - Quick CTA to explore products
- **Explore / Products**
  - Fetches and renders product cards for all products
- **Category pages**
  - Dynamic route: `/categories/[category]`
  - Displays products for a selected category
- **Product details**
  - Dynamic route: `/products/[product_id]`
  - Product info + **Add to Cart** action
- **Shopping Cart**
  - Add/remove items
  - Increase/decrease quantity
  - Subtotal & total calculation
  - Cart count badge in navbar
- **Static pages**
  - `/about-us`
  - `/contact-us`

---

## Pages / Routes

- `/` — Home (carousel + categories)
- `/products` — All products
- `/products/[product_id]` — Product detail
- `/categories/[category]` — Products by category
- `/cart` — Cart page
- `/about-us` — About page
- `/contact-us` — Contact page

> Note: Navbar also includes links for `/login` and `/signup` (UI links), but those routes may not be implemented yet.

---

## Project Structure (high-level)

- `goodgoods/src/app` — Next.js App Router routes (pages/layout)
- `goodgoods/src/components` — UI components (Navbar, Footer, Carousel, Categories, etc.)
- `goodgoods/src/contexts` — React context (Cart state management)
- `goodgoods/src/services` — API/service layer for products & categories

---

## Installation

Clone the repo and install dependencies **inside the `goodgoods/` folder** (that’s where the Next.js app lives):

```bash
git clone https://github.com/abhajkhan/goodGoods.git
cd goodGoods/goodgoods
npm install
```

---

## Getting Started (Development)

Run the development server:

```bash
npm run dev
```

Then open:

- `http://localhost:3000`

---

## Build & Production

```bash
npm run build
npm run start
```

---

## Lint

```bash
npm run lint
```

---

## Notes

- This is a **frontend-only** project (no custom backend included).
- Product/category data is fetched through the app’s `services` layer.

---

## Author

**Abhaj Khan**

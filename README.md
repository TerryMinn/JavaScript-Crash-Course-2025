# 📦 Inventory Manager

**Part of the “Modern JavaScript Crash Course – Learn JS in `hr` Hours (2025 Edition)”**  
Build a minimalist inventory manager with pure JavaScript, HTML & CSS — designed to teach DOM manipulation, CRUD operations, and UI logic the way real developers use it today.

## 📋 Table of Contents

- 🤖 Introduction
- ⚙️ Tech Stack
- 🔋 Features
- 🤸 Quick Start
- 💻 Snippets
- 🔗 Assets
- 🚨 Tutorial
- 🚀 More

## 🤖 Introduction

Learn modern JavaScript the way pros use it today — in just `hr` hours.  
In this crash course, we’ll build a **real, interactive Inventory Manager** that helps you understand DOM manipulation, form handling, dynamic rendering, and clean code structure.

You’ll learn to:

- Work with data using pure JS arrays & objects
- Add, edit, and delete items from the UI
- Understand how rendering loops and conditionals work
- Use beginner-friendly logic that scales into professional patterns

> 🎓 Whether you're just starting or reviewing fundamentals — this is the best place to learn how JavaScript really works in the browser.

## ⚙️ Tech Stack

No frameworks. No bundlers. Just:

- ✅ HTML5
- ✅ CSS3
- ✅ JavaScript (ES6+)

## 🔋 Features

✅ Add new products with name, price, and quantity  
✅ Inline edit any product in the list  
✅ Delete individual products  
✅ Total inventory value auto-calculates  
✅ Responsive, clean UI with dashboard-like layout  
✅ Beginner-friendly code & UX  
✅ Checkbox UI structure for future extensibility (multi-select ready)

## 🤸 Quick Start

### 1. Clone the repo

```bash
git clone https://github.com/your-username/inventory-manager-js-crashcourse.git
cd inventory-manager-js-crashcourse
```

### 2. Open in your browser

Just open `index.html` directly — no server required.

## 💻 CodeSnippets

<details>
<summary>📄 HTML Snippet</summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Inventory Manager</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body class="page">
    <div class="layout">
      <aside class="sidebar">
        <h2 class="logo">📦 Inventory</h2>
        <nav class="nav">
          <a href="#" class="nav-link active">Products</a>
        </nav>
      </aside>

      <main class="main-content">
        <header class="header">
          <h1 class="heading">Inventory Manager</h1>
        </header>

        <form id="product-form" class="form-bar">
          <div class="form-group">
            <label for="name">Product Name</label>
            <input type="text" id="name" class="input" required />
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input
              type="number"
              id="price"
              class="input"
              min="0"
              step="0.01"
              required
            />
          </div>
          <div class="form-group">
            <label for="quantity">Quantity</label>
            <input type="number" id="quantity" class="input" min="1" required />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">Add Product</button>
          </div>
        </form>

        <section class="table-section">
          <div class="table-controls">
            <h2 class="subheading">Product List</h2>
            <button id="delete-selected" class="btn btn-danger hidden">
              Delete Selected
            </button>
          </div>
          <table id="product-table" class="product-table hidden">
            <thead>
              <tr>
                <th><input type="checkbox" id="select-all" /></th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="product-body"></tbody>
          </table>
        </section>

        <section class="summary">
          <h3 class="total">
            💰 Total Inventory Value: $<span id="total-value">0.00</span>
          </h3>
        </section>
      </main>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

</details>

<details>
<summary>🎨 CSS Snippet</summary>

```css
.page {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
  background: #f3f4f6;
}
.layout {
  display: flex;
  min-height: 100vh;
}
.sidebar {
  width: 220px;
  background-color: #111827;
  color: white;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
}
.menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.menu-item {
  background: none;
  border: none;
  color: white;
  text-align: left;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
}
.menu-item:hover,
.menu-item.active {
  background-color: #1f2937;
}
.main-content {
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.header {
  text-align: left;
}
.heading {
  font-size: 1.75rem;
  font-weight: bold;
  color: #1f2937;
}
.form-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-end;
}
.form-group {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 160px;
}
.input {
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  font-size: 1rem;
  background-color: white;
}
.btn {
  padding: 0.5rem 1.25rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-primary {
  background-color: #2563eb;
  color: white;
}
.btn-primary:hover {
  background-color: #1d4ed8;
}
.btn-danger {
  background-color: #dc2626;
  color: white;
}
.btn-danger:hover {
  background-color: #b91c1c;
}
.btn-secondary {
  background-color: #6b7280;
  color: white;
}
.btn-secondary:hover {
  background-color: #4b5563;
}
.table-section {
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}
.table-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.subheading {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
}
.product-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}
.product-table th,
.product-table td {
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  text-align: left;
}
.actions button {
  margin-right: 0.5rem;
}
.summary {
  text-align: right;
}
.total {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
}
.hidden {
  display: none;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-link {
  color: #cbd5e1; /* slate-300 */
  text-decoration: none;
  font-weight: 500;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.nav-link:hover {
  background-color: #1e293b; /* slate-800 */
  color: #fff;
}

.nav-link.active {
  background-color: #2563eb; /* blue-600 */
  color: #fff;
  font-weight: 600;
}
```

</details>

---

## 🚀 More

📚 Want to go further?  
Check out [jsmastery.pro](https://jsmastery.pro) to unlock the full **JavaScript Mastery Path**, covering:

- DOM mastery
- API integration
- ES6+ patterns
- Project-based learning
- and more.

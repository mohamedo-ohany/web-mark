# 🔖 Web Mark

A modern bookmark manager built with React and Material-UI. Save, organize, and track your favorite web links with a clean, intuitive interface.

![React](https://img.shields.io/badge/React-19.1-61DAFB?style=flat&logo=react&logoColor=white)
![Material-UI](https://img.shields.io/badge/MUI-7.1-007FFF?style=flat&logo=mui&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?style=flat&logo=vite&logoColor=white)

## ✨ Features

- **Add Bookmarks** — Save web links with custom titles
- **Edit & Delete** — Easily manage your saved bookmarks
- **Mark as Opened** — Track which links you've visited
- **Filter View** — Show All, Opened, or Not Opened bookmarks
- **Persistent Storage** — Data saved to localStorage
- **Responsive Design** — Works on desktop and mobile

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/web-mark.git

# Navigate to project directory
cd web-mark

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 19](https://react.dev/) | UI Framework |
| [Material-UI v7](https://mui.com/) | Component Library |
| [Vite](https://vite.dev/) | Build Tool |
| [UUID](https://www.npmjs.com/package/uuid) | Unique ID Generation |

## 📁 Project Structure

```
src/
├── components/
│   ├── Card.jsx          # Bookmark card component
│   ├── DeleteDialog.jsx  # Delete confirmation dialog
│   ├── FormButton.jsx    # Add bookmark button
│   ├── FormDialog.jsx    # Add/Edit bookmark form
│   └── SnackBar.jsx      # Notification component
├── reducers/
│   └── WebMarkReducer.jsx # State management
├── App.jsx               # Main application
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## 🎯 Usage

1. **Add a bookmark** — Click the green "Add New Mark" button
2. **Edit a bookmark** — Click the blue edit icon on any card
3. **Delete a bookmark** — Click the red delete icon
4. **Mark as opened** — Click the green checkmark icon
5. **Filter bookmarks** — Use the toggle buttons (All / Opened / Not Opened)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

Made with ❤️ using React

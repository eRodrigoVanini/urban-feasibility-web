<center><h1># Locus Web 🖥️📍</h1></center>

<center><h2>Urban Feasibility Study Calculator - Client Interface</h2></center>

The **Locus Web** is the frontend interface for the Locus platform, designed to simplify and automate urban feasibility analysis. This application allows users to simulate the usage potential of urban lots by verifying construction parameters, zoning, and permitted use types in real-time, integrating directly with the [Locus API](../locus-api).

![Badge Status](https://img.shields.io/badge/Status-Developing-yellow)
![Badge React](https://img.shields.io/badge/React-19.0-blue)
![Badge Typescript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Badge License](https://img.shields.io/badge/License-MIT-green)

---

## 🎯 Project Objective

To provide an elegant, minimalist, and responsive interface that democratizes access to complex urban legislation. The web application acts as the visual bridge between the user and the calculation engine, transforming raw data into clear, actionable feasibility reports for architects, real estate agents, and investors.

---

## 🛠️ Technologies Used

This project is a **Single Page Application (SPA)** built for performance and maintainability.

- **Build Tool:** Vite
- **Core Library:** React 19
- **Language:** TypeScript
- **Routing:** React Router DOM
- **HTTP Client:** Axios
- **Styling:** CSS Modules (Scoped styling)
- **Linting:** ESLint

> **Note:** This frontend requires the **Locus API** to be running locally or remotely to function correctly.

---

## ⚙️ Key Features (Current Version)

### 📊 Simulation Dashboard

- **Interactive Forms:** User-friendly input for lot data (Area, Location) and parameter selection.
- **Dynamic Selects:** Context-aware dropdowns for Cities, Zones, and Use Types fetched from the API.

### 🔍 Real-Time Analysis

- **Instant Feedback:** Immediate processing of "Viable" or "Non-Viable" status based on municipal laws.
- **Urban Indexes:** distinct display of calculated FAR (Floor Area Ratio) and LCR (Lot Coverage Ratio).

### 📱 User Experience

- **Responsive Layout:** Adaptive design for seamless usage on desktops, tablets, and mobile devices.
- **Result Visualization:** Clear visual hierarchy (`/analyzes`) to interpret complex zoning data easily.

---

## 📁 Project Structure

```bash
locus-web/
├── src/
│   ├── assets/           # Static assets (Images, SVGs)
│   ├── components/       # Reusable UI components
│   │   └── SimulationForm/ # Logic for feasibility inputs
│   ├── layout/           # Global layout components (Footer, etc.)
│   ├── pages/            # Application views
│   │   ├── HOME/         # Landing and main dashboard
│   │   ├── Analyzes/     # Analysis results view
│   │   └── Users/        # User management view
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Entry point
├── public/               # Public static files
└── vite.config.ts        # Vite configuration
```

## 🚀 Getting Started

Prerequisites
Node.js (v18+)

npm or yarn


Installation
Bash

# Clone the repository

git clone [https://github.com/eRodrigoVanini/locus-web.git](https://github.com/eRodrigoVanini/locus-web.git)

# Navigate to project directory

cd locus-web

# Install dependencies

npm install

## 🚀 Future Enhancements

Aligned with the API roadmap, the frontend will evolve to support:

# Phase 2 - Visualization

3D volumetric rendering of the calculated building potential.

Shadow analysis overlay using canvas/WebGL.

# Phase 3 - Interactive Mapping

Integration with Leaflet/Mapbox for "Pin-and-Analyze" functionality.

Visual zoning layers overlay.

# Phase 4 - Reporting

One-click PDF export of feasibility studies.

Printable "Descriptive Memorial" generation.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Rodrigo Vanini

# GitHub: @eRodrigoVanini

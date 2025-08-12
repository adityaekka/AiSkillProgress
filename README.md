# 📊 Skill Progress Tracker

A React-based web application to track skill development over time.
It visualizes the **creation**, **start**, and **completion** timeline of subtopics using an interactive **Chart.js line graph**.

---

## 🖼️ Demo Preview
<img width="2880" height="1366" alt="image" src="https://github.com/user-attachments/assets/d293b918-80ea-4397-b128-ec55786f8369" />


---

## 🚀 Features

* Track subtopic lifecycle (**Created**, **Started**, **Completed** dates)
* Interactive tooltips showing all events for each skill
* Color-coded datasets:

  * 🟦 Created
  * 🟩 Started
  * 🟧 Completed
* Smooth animations and responsive layout
* Supports multiple chart types (Line, Bar, Doughnut)
* Easy to extend and customize

---

## 📂 Project Structure

```
skill-progress-tracker/
│
├── src/
│   ├── components/
│   │   ├── SkillProgressChart.jsx   # Chart visualization
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
│
├── public/
│   └── index.html
│
├── assets/                           # Images for README
│   ├── dashboard.png
│   └── skill-progress-chart.png
│
├── package.json
├── README.md
└── ...
```

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Charts:** Chart.js
* **Date Parsing:** date-fns / dayjs
* **Styling:** Tailwind CSS

* **Backend:** MongoDB, Node.js, Express.js
---

## 📦 Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/yourusername/skill-progress-tracker.git

# 2️⃣ Move into the project folder
cd skill-progress-tracker

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm start
```

---

## ⚙️ Setup

1. **Ensure Node.js is installed**
   Recommended: Node.js v18+
   [Download Node.js](https://nodejs.org/)

2. **Install required packages**

   ```bash
   npm install chart.js date-fns
   ```

3. **Optional (for dayjs adapter)**

   ```bash
   npm install dayjs chartjs-adapter-dayjs-4
   ```

---

## 🤝 Contributing

I welcome contributions!

**Steps to contribute:**

1. **Fork** the repository
2. **Clone** your fork

   ```bash
   git clone https://github.com/yourusername/skill-progress-tracker.git
   ```
3. **Create a new branch**

   ```bash
   git checkout -b feature/new-feature
   ```
4. Make your changes and **commit**

   ```bash
   git commit -m "Add new feature"
   ```
5. **Push** to your branch

   ```bash
   git push origin feature/new-feature
   ```
6. Create a **Pull Request** from your fork to the main repo

---

## 📜 License

This project is licensed under the **MIT License** — you are free to use and modify it.

---

## 🌟 Support

If you find this project helpful, give it a ⭐ on GitHub!

---

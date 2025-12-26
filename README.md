# JavaScript Counter: setTimeout vs setInterval

This project demonstrates the **core difference between `setTimeout` and `setInterval`** in JavaScript using a simple and visual **counter application**.

The goal is to help beginners clearly understand **how and when each timer function executes**, not just their syntax.

---

## 📌 Project Overview

The app contains **two counters**:

### 1️⃣ setInterval Counter
- Starts automatically when clicked
- Increments the number every second
- Runs continuously until stopped
- Best for **repeating tasks**

### 2️⃣ setTimeout Counter
- Increments only when the button is clicked
- Each click schedules **one delayed execution**
- Does **not loop**
- Best for **controlled, one-time execution**

---

## 🧠 Why This Project Exists

Many beginners believe:

> `setTimeout` works like `setInterval`

This is **incorrect**.

This project visually proves that:

- `setInterval` → repeats automatically
- `setTimeout` → runs **once** after a delay

By interacting with the UI, the difference becomes obvious without reading heavy theory.

---

## ⚙️ Key Learning Points

- `setInterval` creates an automatic loop
- `setTimeout` schedules a single task
- Event listeners should be attached **once**, not inside other listeners
- Clean state management prevents unexpected behavior
- UI interactions can explain concepts better than text

---

## 🛠️ Technologies Used

- HTML
- CSS
- Vanilla JavaScript (No libraries)

---

## 🚀 Live Demo

You can try the live version here:

👉 **GitHub Pages Link:**  
_(Add your deployed link here)_


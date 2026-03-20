# Pothole-Nashak

A web-based pothole reporting system that allows users to report road damages and helps authorities track and manage repairs efficiently.

---

## Live Demo

🔗 https://pothole-nashak.netlify.app

---

## Features

*  Report potholes with exact location using map
*  Upload images of potholes
*  Select severity level (Minor / Major / Critical)
*  Interactive map using Leaflet
*  Dashboard to track:

  * Total reports
  * Pending reports
  * Fixed potholes
*  Admin panel to manage and update report status
*  User authentication (LocalStorage-based)

---

## Tech Stack Used

* HTML
* CSS
* JavaScript
* Leaflet.js (for maps)
* Netlify (deployment)

---

## 📂 Project Structure

```
Potholes-Nashak/
│
├── index.html
├── Assets/
├── css/
├── js/
├── auth/
└── pages/
```

---

##  How It Works

1. User signs up and logs in
2. User selects pothole location on map
3. Uploads image and description
4. Report is stored in browser (localStorage)
5. Admin can mark potholes as fixed
6. Dashboard updates in real time

---

## Limitations

* Data is stored in localStorage (not persistent across devices)
* No backend/database integration yet

---

## If you like this project

Give it a star ⭐ on GitHub!

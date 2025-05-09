# 📌 GitHub Candidate Search

**GitHub Candidate Search** is a React-based application that lets users browse random GitHub profiles, view detailed information about each candidate, and save potential candidates for future consideration. It leverages the GitHub REST API and features persistent storage via `localStorage`.

---

## 🚀 Features

- 🔎 Search and display real GitHub users using the GitHub API
- 👤 View full candidate profiles including name, location, bio, company, and contact
- 💾 Save candidates locally for later review
- ❌ Reject candidates to load new ones instantly
- 📄 Display saved candidates in a styled table with option to remove

---

## 🛠️ Technologies Used

- **React** with functional components and hooks
- **Vite** for fast development and bundling
- **TypeScript** for type safety
- **GitHub REST API** for live data
- **localStorage** for client-side persistence
- **Custom CSS** (no Tailwind or external frameworks)

---

## 📂 Folder Structure

```
/Develop
├── public/
├── src/
│   ├── api/API.tsx              # API functions (searchGithub, searchGithubUser)
│   ├── pages/
│   │   ├── CandidateSearch.tsx  # Random GitHub user profile viewer
│   │   ├── SavedCandidates.tsx  # Table of saved candidates
│   │   └── ErrorPage.tsx        # 404 fallback
│   ├── components/Nav.tsx       # Navigation bar
│   ├── interfaces/Candidate.interface.tsx
│   ├── App.tsx
│   └── main.tsx
├── .env                         # Contains VITE_GITHUB_TOKEN
├── index.html
└── style.css                    # Custom global CSS
```

---

## 🔐 Environment Setup

Create a `.env` file in the root of your `/Develop` directory:

```env
VITE_GITHUB_TOKEN=ghp_your_github_token_here
```

> You can generate a [GitHub Personal Access Token](https://github.com/settings/tokens) with **no scopes required** to access public user data.

---

## 📦 Installation

```bash
# Navigate into your project folder
cd Develop

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

---


## ✅ Future Improvements

- Add user filtering by location, language, or followers
- Implement backend persistence (e.g., MongoDB or PostgreSQL)
- Allow tagging or rating candidates
- Add animations and transitions for better UX
- Add pagination or infinite scroll for bulk viewing

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

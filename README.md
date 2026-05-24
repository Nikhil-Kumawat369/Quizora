# Quizora

A feature-rich quiz platform that combines strategic scoring, hybrid question formats, and customizable quiz sessions into a fast, engaging learning experience.

---

## Overview

Most quiz applications follow a predictable structure:

- Standard MCQs only
- Basic positive-only scoring
- Limited customization
- Minimal interaction feedback
- Generic user experience

Quizora was built to create a more dynamic and strategy-driven quiz experience.

Instead of limiting users to simple right-or-wrong gameplay, Quizora introduces:

- Hybrid question formats
- Multiple difficulty modes
- Category-based quiz exploration
- Strategic negative marking
- Real-time score tracking
- Detailed performance summaries

The result is a quiz application that feels more interactive, competitive, and engaging than traditional quiz platforms.

Whether users want casual practice, competitive scoring, or category-specific quizzes, Quizora delivers a highly customizable experience with a polished UI and responsive interaction flow.

---

## Features

### 24+ Quiz Categories

Explore quizzes across a wide variety of categories, giving users flexibility to choose topics based on their interests.

The platform supports:

- General mixed quizzes
- Topic-specific quizzes
- Diverse category exploration
- Randomized learning sessions

---

### Hybrid Question Formats

Unlike traditional quiz apps that rely only on multiple-choice questions, Quizora supports:

- Multiple Choice Questions (MCQs)
- Boolean Questions (True / False)

This creates a more dynamic and less repetitive quiz experience.

---

### Strategic Scoring System

Quizora introduces a competitive scoring model designed to reward accuracy and decision-making.

### Scoring Rules

| Action | Score |
| :----: | :---: |
| Correct Answer | +4 |
| Wrong Answer | -2 |
| Skipped Question | 0 |

This system encourages users to think carefully before answering instead of blindly guessing.

---

### Skip Question Mechanism

One of Quizora’s core gameplay features.

Users can skip difficult questions without losing points, adding a strategic layer to quiz sessions.

This transforms quizzes from simple guessing games into decision-based gameplay where risk management matters.

---

### Multiple Difficulty Modes

Users can customize quiz difficulty using:

- Easy
- Medium
- Hard
- Any (Mixed Difficulty)

The mixed mode combines all difficulty levels into one unpredictable quiz session.

---

### Custom Quiz Length

Quiz sessions can be customized from:

- 1 Question
- Up to 6 Questions

This allows both quick practice sessions and longer challenge rounds.

---

### Real-Time Progress Tracking

During gameplay, Quizora continuously displays:

- Current score
- Current question number
- Quiz progression
- Visual progress indicators

This creates a more engaging and transparent experience.

---

### Instant Answer Feedback

Selected answers immediately display visual feedback:

- Correct answers highlight in green
- Incorrect answers highlight in red

This improves interaction clarity and user engagement.

---

### Detailed Quiz Summary

After completing a quiz session, users receive a full performance breakdown including:

- Final score
- Accuracy percentage
- Correct attempts
- Wrong attempts
- Quiz statistics

The end screen provides a complete overview instead of a simple completion message.

---

### Step-Based Navigation System

Users can safely move backward during quiz setup without restarting the application.

This allows users to:

- Change category selections
- Modify difficulty levels
- Adjust quiz count
- Reconfigure sessions smoothly

---

### Dynamic Loading Screen

Quizora includes a theme-matched animated loading screen while quiz data is being fetched.

This prevents static waiting screens and keeps the experience visually engaging during loading delays.

---

### Responsive Interface

The application is optimized across:

- Desktop
- Tablets
- Mobile devices

While fully responsive, the experience is especially optimized for larger displays such as desktops and tablets.

---

### Dedicated About Section

Quizora includes a detailed About page explaining:

- The purpose of the project
- How the scoring system works
- How to use the platform
- Why Quizora was created

This helps users understand the product beyond basic gameplay.

---

## Live Demo

Experience the project live:

🔗 [View Live Demo](https://nikhil-kumawat369.github.io/Quizora/HomePage/index.html)

---

## Tech Stack

Built entirely using lightweight front-end technologies.

- HTML5 — Structure and semantic layout
- CSS3 — Styling, animations, responsiveness, and UI effects
- Vanilla JavaScript — Quiz logic, scoring system, interactions, and state handling

---

## Installation & Setup

Getting started is simple and requires no external dependencies.

### Step 1 → Clone the Repository

```bash
git clone https://github.com/Nikhil-Kumawat369/Quizora.git
```

---

### Step 2 → Navigate Into the Project Directory

```bash
cd Quizora
```

---

### Step 3 → Launch the Application

Open the project directly in your browser.

**Option A**

Double-click:

```bash
index.html
```

**Option B**

Use VS Code Live Server for a smoother development workflow.

---

## Usage

Using Quizora is designed to feel intuitive and structured

---

### Homepage Navigation

The application includes:

- Home Page
- Categories Page
- About Page

The About section explains the project, scoring logic, and gameplay flow in detail.

---

### Starting a Quiz

**Option 1 → Quick Start**

- Click Start Quiz
- Select difficulty
- Select question count
- Start the session instantly

The default category mode is Any, which mixes multiple categories together.

---

**Option 2 → Category-Based Quiz**

- Click Explore Categories
- Select a category
- Choose difficulty
- Choose quiz count
- Start the quiz

---

### During the Quiz

**Users can:**

- Attempt questions
- Skip difficult questions
- Track live score
- Monitor progress visually
- Exit to homepage anytime

Question formats include both MCQs and Boolean questions.

---

### End of Quiz

Once the session ends, Quizora displays a detailed summary including:

- Final score
- Accuracy
- Correct answers
- Incorrect answers
- Overall performance statistics

---

## Project Structure

```bash
Quizora/
│
├── AboutPage/
│   ├── about.css
│   └── about.html
│
├── Boolean/
│   ├── Boolean.css
│   ├── Boolean.html
│   └── Boolean.js
│
├── CategoriesPage/
│   ├── Categories.css
│   └── Categories.html
│
├── CategoriesSelectionPage/
│   ├── CategoriesSelectionPage.css
│   └── CategoriesSelectionPage.html
│
├── DifficultySelectionPage/
│   ├── DifficultySelectionPage.css
│   ├── DifficultySelectionPage.html
│   └── DifficultySelectionPage.js
│
├── endPage/
│   ├── endPage.css
│   └── endPage.html
│
├── FormatSelectionPage/
│   ├── FormatSelectionPage.css
│   └── FormatSelectionPage.html
│
├── HomePage/
│   ├── dom.js
│   ├── function.js
│   ├── index.html
│   ├── quizManager.js
│   ├── script.js
│   ├── style.css
│   └── validityChecker.js
│
├── loadingScreen/
│   ├── loadingScreen.css
│   ├── loadingScreen.html
│   └── loadingScreen.js
│
├── MCQ/
│   ├── MCQ.css
│   ├── MCQ.html
│   └── MCQ.js
│
├── QuizCountSelectionPage/
│   ├── QuizCountSelectionPage.css
│   ├── QuizCountSelectionPage.html
│   └── QuizCountSelectionPage.js
│
├── StartQuizPage/
│   ├── StartQuizPage.css
│   └── StartQuizPage.html
│
├── LICENSE
└── README.md
```

---

## Design Philosophy

Quizora was designed around a simple idea:

> Quiz applications should feel interactive, strategic, and engaging — not repetitive

The project focuses heavily on:

- Better gameplay flow
- Strong visual feedback
- User-friendly navigation
- Competitive scoring mechanics
- Cleaner interaction design
- Session flexibility

Rather than behaving like a static quiz form, Quizora aims to feel closer to an actual quiz experience.

---

## Roadmap

Although Quizora is already fully functional and production-ready as a front-end project, several refinements could improve the experience even further.

---

### Enhanced Mobile Optimization

Further refine typography scaling and spacing for smaller screens to improve readability on compact devices.

---

### Advanced Quiz Analytics

Potential future additions:

- Performance trends
- Session history
- Category-wise statistics
- Accuracy tracking over time

---

## Contributing

Contributions are welcome and appreciated.

Whether you're interested in:

- Improving UI/UX
- Optimizing performance
- Enhancing responsiveness
- Expanding quiz functionality
- Refining animations
- Improving accessibility

your contributions can help push Quizora further.

---

### Contribution Workflow

**Step 1 → Fork the Repository**

---

**Step 2 → Create a Feature Branch**

```bash
git checkout -b feature/YourFeatureName
```

---

**Step 3 → Commit Your Changes**

```bash
git commit -m "Add: meaningful improvement"
```

---

**Step 4 → Push to Your Branch**

```bash
git push origin feature/YourFeatureName
```

---

**Step 5 → Open a Pull Request**

All pull requests are reviewed carefully before merging.

---

## License

This project is licensed under the MIT License.

You are free to use, modify, and distribute this project with proper attribution.

For complete licensing details, refer to the LICENSE file included in the repository.

---

## 💡 Final Note

Quizora demonstrates how even a familiar concept like online quizzes can feel significantly more engaging when interaction design, strategic gameplay, and user experience are treated as core priorities instead of afterthoughts.

Rather than functioning as a basic question-and-answer application, Quizora focuses on creating a more competitive and decision-driven experience through hybrid question formats, negative marking, live progress tracking, and strategic skipping mechanics.

The goal wasn’t just to build another quiz app — it was to make quiz sessions feel more immersive, responsive, and intentionally designed.

**If you found this project useful, consider giving the repository a ⭐**

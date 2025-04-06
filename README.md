# 🎮 TicTacToe Game

A simple and responsive TicTacToe game built with **React**. This two-player game features customizable player names, score tracking, and a clean UI, making it perfect for friendly matchups on both desktop and mobile.

## Live Demo
Access the live app here: [TicTacToe Game](https://tictactoeks.netlify.app/)

## ✨ Features
- Two-player mode
- Customizable Player Names
- Score Tracking
- Responsive Design
- Restart Game

## 🛠 Tech Stack
- **Frontend**: React.js
- **Styling**: CSS
- **Hosting**: Netlify

## ⚙️ Installation
### Prerequisites
**Ensure you have the following installed:**
- Node.js (v18+)

### Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/karanshah1561998/TicTacToe.git
   cd TicTacToe
   
2. **Install dependencies:**
   ```bash
   npm install
   
3. **Start the app:**  
   ```bash
   npm start

   Open http://localhost:3000 to view the game in your browser.

## 🎲 How to Play
- Click the "Start Game" button to begin.
- Enter names for Player 1 and Player 2 in the popup modal.
- Players take turns clicking on the board to place their symbol (X or O).
- The first player to align 3 symbols in a row, column, or diagonal wins the round.
- The board resets automatically after each round, and scores are updated.
- Click "Restart Game" anytime to reset the board while keeping the current scores.

## 🧩 Troubleshooting

### 1. App Not Starting
- Make sure you have Node.js (v18+) installed.
- Delete `node_modules` and run `npm install` again if there are dependency issues.

### 2. Styles Not Loading
- Check if CSS files are correctly imported in your components.
- Try clearing your browser cache or doing a hard refresh.

### 3. Game Board Not Rendering
- Ensure you didn’t modify or delete core components like `Board` or `Square`.
- Check the console for any React-related errors.

### 4. Scores Not Updating
- Verify that the score state logic is functioning and not being reset unintentionally.
- Debug state updates using React DevTools.

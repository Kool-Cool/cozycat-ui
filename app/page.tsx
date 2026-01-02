"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="page-container">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="title"
      >
        🐾 Welcome to Orange Cat Core
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="subtitle"
      >
        A cozy, sunlit design theme inspired by warm fur, soft paws, and afternoon naps.
        Crafted for friendly, comforting UI/UX experiences.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="button-group"
      >
        <button className="btn primary">Explore Theme</button>
        <button className="btn secondary">View Components</button>
      </motion.div>

      {/* Sample cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="card-grid"
      >
        <div className="cat-card">
          <h3>Primary Color</h3>
          <div className="color-box primary" />
          <code>#FF8C42</code>
        </div>
        <div className="cat-card">
          <h3>Secondary Color</h3>
          <div className="color-box secondary" />
          <code>#FFB75E</code>
        </div>
        <div className="cat-card">
          <h3>Accent Color</h3>
          <div className="color-box accent" />
          <code>#FFD97D</code>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="footer">
        Made with 🧡 and naps
      </footer>

      {/* Inline CSS */}
      <style jsx>{`
        .page-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #fff3e0;
          color: #5c4033;
          padding: 2rem;
          text-align: center;
          font-family: 'Inter', sans-serif;
        }

        .title {
          font-size: 3rem;
          font-weight: 700;
          color: #ff8c42;
          margin-bottom: 1rem;
        }

        .subtitle {
          font-size: 1.125rem;
          color: #9c7b60;
          max-width: 600px;
          margin-bottom: 2rem;
        }

        .button-group {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 3rem;
        }

        .btn {
          padding: 0.75rem 1.5rem;
          border-radius: 1.25rem;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }

        .btn.primary {
          background-color: #ff8c42;
          color: #fff;
        }

        .btn.primary:hover {
          background-color: #ff7a1f;
        }

        .btn.secondary {
          background-color: #ffb75e;
          color: #5c4033;
        }

        .btn.secondary:hover {
          opacity: 0.9;
        }

        .card-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .cat-card {
          background: #ffe6cc;
          border-radius: 1.25rem;
          padding: 1.5rem;
          width: 200px;
          box-shadow: 0 4px 8px rgba(92, 64, 51, 0.15);
        }

        .cat-card h3 {
          font-size: 1.125rem;
          color: #5c4033;
          margin-bottom: 0.5rem;
        }

        .color-box {
          width: 100%;
          height: 60px;
          border-radius: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .color-box.primary {
          background: #ff8c42;
        }

        .color-box.secondary {
          background: #ffb75e;
        }

        .color-box.accent {
          background: #ffd97d;
        }

        .footer {
          position: absolute;
          bottom: 1rem;
          font-size: 0.875rem;
          color: #9c7b60;
        }

        @media (max-width: 640px) {
          .title {
            font-size: 2.25rem;
          }
          .subtitle {
            font-size: 1rem;
          }
          .cat-card {
            width: 90%;
          }
        }
      `}</style>
    </main>
  );
}

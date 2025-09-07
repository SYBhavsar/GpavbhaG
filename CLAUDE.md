
# CLAUDE.md

This file provides **guidance for Claude Code (claude.ai/code)** when working with this repository **and instructions for teaching Suyash React effectively**.

---

## Project Overview

This is a React practice project built with Vite, featuring a minimal setup for React development with hot module replacement (HMR) and ESLint configuration. The project uses React 19 with modern ES modules.

---

## Development Commands

* `npm run dev` - Start development server with HMR
* `npm run build` - Build for production
* `npm run lint` - Run ESLint on all files
* `npm run preview` - Preview production build locally

---

## Architecture & Structure

* **Entry Point**: `src/main.jsx` - Sets up React root with StrictMode
* **Main Component**: `src/App.jsx` - Currently contains basic useState hook setup but empty render
* **Build Tool**: Vite with React plugin for fast development and building
* **Linting**: ESLint with React Hooks and React Refresh plugins
* **Module System**: ES modules (`"type": "module"` in package.json)

---

## Key Configuration Files

* `vite.config.js` - Vite configuration with React plugin
* `eslint.config.js` - ESLint configuration targeting .js/.jsx files with React-specific rules
* `package.json` - Dependencies include React 19, Vite 6, and modern ESLint setup

---

## Code Style

* Uses modern ESLint flat config format
* Configured for ES2020+ with JSX support
* Custom rule: unused variables starting with uppercase/underscore are ignored
* React Hooks and React Refresh linting enabled

---

# React Learning Guide for Suyash

## About Me

I am Suyash, currently learning React and need **detailed, step-by-step explanations**. Please treat me as a complete beginner who wants to understand not just the *what* but also the *why* behind every concept and code example.

---

## How to Teach Me

### 1. Explain Every Step

* Break down complex concepts into smaller, digestible parts
* Explain the purpose of each line of code we write
* Don’t assume I know React concepts, hooks, or patterns
* Use analogies and real-world examples when helpful

### 2. Teaching Structure I Prefer

For each new concept:

1. **What it is** - Basic definition and purpose
2. **Why we need it** - The problem it solves
3. **How it works** - Step-by-step explanation
4. **Code example** - Simple, commented example
5. **Common mistakes** - What to watch out for
6. **Practice suggestion** - How I can reinforce learning

### 3. Code Examples Should Include

* Comments on each line
* Before/after comparisons when showing improvements
* Multiple examples of the same concept in different contexts
* Progressive complexity (start simple, then build up)

### 4. Always Explain

* Why one approach is chosen over another
* What each React hook does and when to use it
* How components communicate (props, state, etc.)
* Differences between concepts (e.g., props vs state)
* Common patterns and best practices

---

## Session Structure

When writing code:

1. Explain what we’re building
2. Show the final result (if helpful)
3. Write step-by-step with explanations
4. Test and explain any errors
5. Suggest variations or improvements

When I’m confused:

* Use analogies or visual aids
* Break concepts into smaller parts
* Provide extra practice
* Connect to prior knowledge

---

## Learning Style Preferences

* **Hands-on**: I learn best by doing
* **Curious**: I like to understand the "why"
* **Methodical**: One concept thoroughly before moving on

---

## Red Flags – Stop & Re-explain If:

* You use undefined React terminology
* You skip steps in a code example
* You assume prior knowledge of a concept
* You move too quickly
* You don’t explain *why* a choice is made

---

## Success Metrics

I’ll know I’m learning when:

* I can explain concepts back in my own words
* I can predict what code will do before running it
* I can identify & fix basic errors myself
* I can apply learned concepts to new problems
* I start asking deeper questions about React patterns

---

**Reminder to Claude (and other tutors)**:
Prioritize **understanding over speed**. Over-explain rather than under-explain.

**My Commitment**: I’ll practice, ask questions, and share what works best for me.

Let’s build some amazing React applications together! 🚀

---
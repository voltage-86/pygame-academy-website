# Pygame Academy

A modern, responsive educational website for learning Python game development using Pygame. Created for a school assessment project.

## Overview

Pygame Academy is a responsive educational website designed to help beginners learn Python programming and game development using Pygame.

The website provides structured lessons, an interactive Python code editor, coding challenges, and guided projects. It includes progress tracking to help users keep track of their learning and completed activities.

The design focuses on a clean, modern interface with responsive layouts for different screen sizes.

## Pages

- Home (`index.html`)
- Learn (`learn.html`)
- Lesson (`lesson.html`)
- Try It Yourself (`tryityourself.html`)
- Challenges (`challenges.html`)
- Projects (`projects.html`)

## Features

- Fully responsive multi page layout
- Responsive navigation bar with mobile hamburger menu
- Structured Python learning lessons
- Interactive browser based code editor with syntax highlighting
- Python code execution using Pyodide
- Pygame code examples and previews
- Coding challenges with completion tracking
- Guided projects with goals and progress tracking
- LocalStorage for saving learning progress in the browser
- Consistent navigation and footer across all pages
- Favicon and website logo
- Accessibility considerations, including readable typography, clear headings, and keyboard friendly navigation

## Design

The website uses a modern interface with a purple and dark themed colour scheme.

- Purple accents for branding, buttons, and interactive elements
- Dark backgrounds for the code editor and related interface components
- Consistent cards and interface elements throughout the website
- Open Sans for readable body text
- JetBrains Mono for code and other monospace text

The layout was designed to work across desktop, tablet, and mobile screen sizes.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- CodeMirror 5 for the browser based code editor
- Pyodide for running Python in the browser
- Web Workers for background code execution
- LocalStorage for saving user progress
- Google Fonts (Open Sans and JetBrains Mono)
- Canva for creating the website logo

## Running the Website

### Requirements

- A modern web browser
- Python 3 installed for running a local web server

### Start a Local Server

Open a terminal in the project's root directory and run:

```bash
python -m http.server 8080
```

Then open the following URL in your browser:

http://localhost:8080/index.html

To stop the server, press `Ctrl+C` in the terminal.

### Opening the Website Directly

You can also open `index.html` directly in your browser. However, some features may not work correctly when the website is opened using the `file://` protocol.

In particular, **Pyodide and the Python code execution features require the website to be served over HTTP**. Web Workers and other browser features may also be restricted when opening files directly.

For the full experience, use the local web server instructions above.

## Saving and Resetting Progress

Pygame Academy uses the browser's LocalStorage to save learning progress, completed challenges, project progress, and project goals.

This data is stored locally in the browser and is not automatically shared between different browsers or devices.

To reset the saved data, open the browser's developer console while viewing the website and run the relevant commands.

Clear learning progress:

```javascript
localStorage.removeItem("pygameAcademyProgress");
```

Reset completed challenges:

```javascript
localStorage.removeItem("pygame-academy-completed-challenges");
```

Reset project progress:

```javascript
localStorage.removeItem("pygame-academy-project-progress");
```

Reset project goals:

```javascript
localStorage.removeItem("pygame-academy-project-goals");
```

To reset all four categories at once, run:

```javascript
localStorage.removeItem("pygameAcademyProgress");
localStorage.removeItem("pygame-academy-completed-challenges");
localStorage.removeItem("pygame-academy-project-progress");
localStorage.removeItem("pygame-academy-project-goals");
```

Refresh the page after clearing the data. These commands only remove the specified Pygame Academy entries from the current browser's LocalStorage.

## Purpose

This website was created for a school assessment to demonstrate:

- Multi page website development
- Responsive web design
- User interface and user experience considerations
- Accessibility considerations
- Interactive JavaScript functionality
- Browser based Python execution
- Progress tracking and data persistence
- Testing across different devices and browsers

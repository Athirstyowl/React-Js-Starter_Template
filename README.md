React Starter Template

This is a comprehensive React starter template designed to help developers quickly set up and maintain a scalable React application. It includes essential configurations, tools, and libraries to enhance productivity and maintain code quality.

Features

Vite for blazing-fast build and development.

Material-UI for elegant and responsive UI components.

Redux Toolkit for state management.

React Query for efficient server state handling.

SuperTokens for robust authentication.

ECharts for data visualizations.

Formik and Yup for form handling and validation.

Prettier and ESLint for code formatting and linting.

Jest and Testing Library for unit and integration testing.

Husky for managing Git hooks.

Prerequisites

Ensure you have the following installed:

Node.js (>= 16.x)

npm (>= 8.x) or yarn (>= 1.x)

Getting Started

1. Clone the Repository

git clone <repository-url>
cd react-starter-template

2. Install Dependencies

npm install

3. Start Development Server

npm run dev

Open http://localhost:5173 in your browser.

4. Build for Production

npm run build

5. Preview the Production Build

npm run preview

Project Structure

.
├── public/ # Static assets
├── src/ # Source files
│ ├── components/ # Reusable components
│ ├── features/ # Feature-specific logic
│ ├── hooks/ # Custom hooks
│ ├── pages/ # Page components
│ ├── redux/ # Redux-related files
│ ├── styles/ # Global styles
│ └── utils/ # Utility functions
├── .husky/ # Git hooks
├── .gitignore # Git ignore rules
├── package.json # Project metadata and scripts
├── vite.config.js # Vite configuration
├── jest.config.cjs # Jest configuration
└── README.md # Project documentation

Available Scripts

Development

npm run dev: Start the development server.

Build

npm run build: Build the application for production.

npm run preview: Preview the production build locally.

Linting and Formatting

npm run lint: Run ESLint to check code quality.

npm run lint:fix: Automatically fix linting issues.

npm run format: Format the code using Prettier.

Testing

npm run test: Run tests using Jest.

npm run coverage: Generate test coverage report.

Git Hooks

npm run prepare: Install Husky hooks.

Key Dependencies

Runtime

React: UI library for building user interfaces.

React Router DOM: Routing library for React.

Material-UI: UI framework for React.

Redux Toolkit: State management library.

React Query: Data-fetching library.

SuperTokens: Authentication solution.

ECharts: Data visualization library.

Formik: Form handling library.

Yup: Schema validation library.

Development

Vite: Fast build tool for modern web projects.

ESLint: Linting tool for identifying problematic patterns in code.

Prettier: Code formatter.

Jest: Testing framework.

Testing Library: Utilities for testing React components.

Husky: Git hooks manager.

Testing

Ensure all tests pass:

npm run test

Generate a coverage report:

npm run coverage

The report will be located in the coverage/ directory.

Git Hooks

This project uses Husky to manage Git hooks:

pre-commit: Runs linting before committing.

commit-msg: Ensures commit messages follow the standard format.

To manually install hooks, run:

npm run prepare

Contribution Guidelines

Fork the repository and clone your fork.

Create a feature branch:

git checkout -b feature/your-feature

Commit your changes following conventional commits.

Push to your branch and create a pull request.

Feedback

Feel free to submit issues or feature requests through the [Issues](/issues) tab.

<a name="readme-top"></a>

---

# INcBlog 🚀

Empowering Founders, Sharing Insights: Your Platform for Startup Stories.

[![GitHub license](https://img.shields.io/github/license/himanshuvkm/INcBlog?style=flat-square)](https://github.com/himanshuvkm/INcBlog/blob/main/LICENSE)
[![GitHub top language](https://img.shields.io/github/languages/top/himanshuvkm/INcBlog?style=flat-square)](https://github.com/himanshuvkm/INcBlog)
[![GitHub Stars](https://img.shields.io/github/stars/himanshuvkm/INcBlog?style=social)](https://github.com/himanshuvkm/INcBlog/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/himanshuvkm/INcBlog?style=social)](https://github.com/himanshuvkm/INcBlog/network/members)
[![GitHub Issues](https://img.shields.io/github/issues/himanshuvkm/INcBlog?style=flat-square)](https://github.com/himanshuvkm/INcBlog/issues)
[![Deployment Status](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/himanshuvkm/INcBlog) <!-- Placeholder for Vercel deployment, common for Next.js projects -->

---

## 📖 Description

Welcome to **INcBlog** – a dynamic and community-driven platform designed specifically for founders, innovators, and startup enthusiasts to share their journeys, insights, and lessons learned. In a rapidly evolving startup ecosystem, authentic stories and practical advice are invaluable. INcBlog aims to be the go-to space where these narratives thrive, fostering a vibrant community of like-minded individuals.

This repository hosts the full-stack application for INcBlog, built with modern web technologies to ensure a seamless and engaging user experience. From intuitive content creation tools to robust user authentication and a sleek, responsive design, INcBlog is engineered to empower its users to publish compelling content with ease.

Whether you're looking to share your startup's latest milestone, offer advice on overcoming entrepreneurial challenges, or simply connect with other founders, INcBlog provides the perfect canvas. Dive in, explore the codebase, and join us in building the definitive platform for startup storytelling!

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

---

## ✨ Key Features

INcBlog comes packed with features to make content creation and community engagement a breeze:

*   ✍️ **Intuitive Content Creation:** Easily craft and publish blog posts with a user-friendly interface, complete with a powerful editor.
*   🔐 **Secure User Authentication:** Leverage NextAuth.js for robust and flexible authentication, supporting multiple providers.
*   👤 **Personalized User Profiles:** Users can create and manage their unique profiles, showcasing their contributions and startup affiliations.
*   🚀 **Startup Pages:** Dedicated pages for individual startups, allowing founders to highlight their ventures and share their company's story.
*   🔍 **Content Studio/Admin Panel:** A versatile `studio` interface (likely Sanity.io or a custom CMS) for streamlined content management.
*   🎨 **Modern & Responsive UI:** A beautiful and adaptive design ensures a great experience on any device, powered by Tailwind CSS.
*   📊 **Real-time Error Tracking:** Integrated with Sentry for proactive error monitoring and improved application stability.
*   📏 **Type-safe Development:** Built with TypeScript for enhanced code quality, better maintainability, and fewer runtime errors.

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

---

## 🛠️ Tech Stack

INcBlog is built upon a robust and modern technology stack, ensuring scalability, performance, and a delightful developer experience.

### Frontend
*   **[Next.js](https://nextjs.org/)** - React framework for production
*   **[React](https://react.dev/)** - A JavaScript library for building user interfaces
*   **[TypeScript](https://www.typescriptlang.org/)** - Typed superset of JavaScript
*   **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework (inferred from `components.json` and `globals.css`)
*   **[Shadcn/ui](https://ui.shadcn.com/)** - Beautifully designed components (inferred from `components.json`)
*   **[Work Sans](https://fonts.google.com/specimen/Work+Sans)** - Custom typography for a distinct visual identity

### Backend
*   **[Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)** - For backend logic and API endpoints
*   **[Node.js](https://nodejs.org/en)** - JavaScript runtime
*   **[NextAuth.js](https://next-auth.js.org/)** - Authentication for Next.js applications

### Database (Inferred)
*   **[Prisma](https://www.prisma.io/)** (ORM) / **[Mongoose](https://mongoosejs.com/)** (ODM) - For type-safe database access
*   **[PostgreSQL](https://www.postgresql.org/)** / **[MongoDB](https://www.mongodb.com/)** - Scalable database solution

### Tools & Services
*   **[Sentry](https://sentry.io/)** - Real-time error tracking and performance monitoring
*   **[ESLint](https://eslint.org/)** - Pluggable JavaScript linter
*   **[Prettier](https://prettier.io/)** - Opinionated code formatter
*   **[Vercel](https://vercel.com/)** - Cloud platform for frontend developers (common Next.js deployment)

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

---

## 🚀 Getting Started

Follow these steps to get INcBlog up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js**: `v18.x` or higher (LTS recommended)
    ```bash
    node -v
    ```
*   **npm** (comes with Node.js), **Yarn**, or **pnpm**:
    ```bash
    npm -v
    # or
    yarn -v
    # or
    pnpm -v
    ```
*   **Git**:
    ```bash
    git --version
    ```

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/himanshuvkm/INcBlog.git
    cd INcBlog
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

### Environment Setup

Create a `.env.local` file in the root of the project based on `.env.example` (if provided, otherwise create manually) and populate it with your environment variables.

```env
# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="YOUR_NEXTAUTH_SECRET_HERE" # Generate with `openssl rand -base64 32`

# Database (Example for PostgreSQL with Prisma)
DATABASE_URL="postgresql://user:password@localhost:5432/incblog_db" 
# Or for MongoDB:
# DATABASE_URL="mongodb+srv://user:password@cluster.mongodb.net/incblog_db?retryWrites=true&w=majority"

# Sentry (Optional, only if you're using Sentry)
SENTRY_DSN="YOUR_SENTRY_DSN_HERE"

# Add any other API keys or sensitive variables here
# E.g., GOOGLE_CLIENT_ID, GITHUB_CLIENT_SECRET for NextAuth providers
```
**Note:** For `NEXTAUTH_SECRET`, generate a strong random string (e.g., using `openssl rand -base64 32` in your terminal).

### Database Setup (Example for Prisma)

If you're using Prisma with a database like PostgreSQL:

1.  **Update your Prisma schema:** (located in `prisma/schema.prisma` if present) based on your database and model requirements.
2.  **Generate Prisma client:**
    ```bash
    npx prisma generate
    ```
3.  **Run database migrations:**
    ```bash
    npx prisma migrate dev --name init
    ```
    This will apply your schema to the database and create tables.

### First Run

Once dependencies are installed and environment variables are set, you can run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be accessible at `http://localhost:3000`.

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

---

## 💻 Usage

After starting the development server, navigate to `http://localhost:3000` in your web browser.

Here are some key routes and functionalities you can explore:

*   **Homepage (`/`)**: Discover the latest blog posts and trending startup stories.
*   **Create Startup Post (`/startup/create`)**: Begin crafting your own startup's story or insights.
    *   Example: Visit `http://localhost:3000/startup/create`
*   **Individual Startup Page (`/startup/[id]`)**: View detailed information and posts related to a specific startup.
    *   Example: `http://localhost:3000/startup/cl33d4s8s000030h8u91b7g7e` (replace `[id]` with an actual startup ID)
*   **User Profile (`/user/[id]`)**: See a user's published content and profile details.
    *   Example: `http://localhost:3000/user/cl33d4s8s000030h8u91b7g7e` (replace `[id]` with an actual user ID)
*   **Content Studio (`/studio`)**: Access the content management interface (if enabled and configured).
    *   Example: `http://localhost:3000/studio`

### Screenshot Placeholders

*   **Homepage View**
    ![Homepage Screenshot](https://via.placeholder.com/800x450/000000/FFFFFF?text=INcBlog+Homepage)
    _A glimpse of the INcBlog homepage, showcasing recent articles and featured startups._

*   **Content Creation Interface**
    ![Content Creation Screenshot](https://via.placeholder.com/800x450/000000/FFFFFF?text=INcBlog+Create+Post)
    _The intuitive editor for drafting and publishing your startup stories._

*   **User Profile Example**
    ![User Profile Screenshot](https://via.placeholder.com/800x450/000000/FFFFFF?text=INcBlog+User+Profile)
    _An example of a user's personalized profile page._

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

---

## 📁 Project Structure

INcBlog follows a standard Next.js `app` directory structure, which helps in organizing the codebase efficiently.

```
INcBlog/
├── .gitignore
├── README.md
├── app/
│   ├── (root)/                 # Root layout and pages for the main application
│   │   ├── layout.tsx          # Main layout for the application
│   │   ├── page.tsx            # Homepage of the application
│   │   ├── startup/            # Pages related to startup posts/profiles
│   │   │   ├── [id]/page.tsx   # Dynamic route for individual startup pages
│   │   │   └── create/page.tsx # Page for creating new startup posts
│   │   └── user/               # Pages related to user profiles
│   │       └── [id]/page.tsx   # Dynamic route for individual user profiles
│   ├── api/                    # Next.js API Routes
│   │   ├── auth/               # Authentication API routes (NextAuth.js)
│   │   │   └── [...nextauth]/route.ts # Catch-all route for NextAuth
│   │   ├── sentry-example-api/ # Sentry example API route for testing
│   │   │   └── route.ts
│   │   └── ...                 # Other API routes
│   ├── favicon.ico             # Application favicon
│   ├── fonts/                  # Custom font files
│   │   ├── WorkSans-Black.ttf
│   │   └── ...                 # Other WorkSans font weights
│   ├── global-error.tsx        # Global error boundary for the app directory
│   ├── globals.css             # Global CSS styles (likely TailwindCSS base)
│   ├── layout.tsx              # Root layout for the entire application
│   ├── sentry-example-page/    # Sentry example page for testing
│   │   └── page.tsx
│   ├── studio/                 # Content management studio/admin panel
│   │   └── [[...tool]]/page.tsx # Catch-all route for studio tools (e.g., Sanity.io studio)
│   └── ...
├── auth.ts                     # NextAuth.js configuration
├── components.json             # Shadcn/ui configuration file
├── components/                 # Reusable UI components
│   ├── Navbar.tsx              # Main navigation bar component
│   ├── Ping.tsx                # Example component (e.g., for status indicators)
│   └── ...
└── ...                         # Other configuration files (e.g., next.config.js, tsconfig.json)
```

### Key Directories and Files Explained:

*   **`app/`**: This is the core of the Next.js App Router.
    *   **`(root)/`**: A route group used to apply a shared layout (`layout.tsx`) to the main application pages, excluding other parts like a potential admin dashboard if it were outside this group.
    *   **`api/`**: Contains server-side API routes.
        *   `auth/[...nextauth]/route.ts`: Handles all authentication-related API calls using NextAuth.js.
        *   `sentry-example-api/route.ts`: Demonstrates Sentry error tracking for API routes.
    *   **`startup/[id]/page.tsx`**: Dynamic page for displaying a single startup's details and related posts.
    *   **`startup/create/page.tsx`**: Page for users to create new startup-related content.
    *   **`user/[id]/page.tsx`**: Dynamic page for viewing individual user profiles.
    *   **`studio/[[...tool]]/page.tsx`**: A catch-all dynamic route, highly suggestive of an integrated content management studio (e.g., Sanity.io Studio, or a custom CMS).
    *   **`globals.css`**: Contains global CSS styles, likely including Tailwind CSS directives.
*   **`auth.ts`**: Central configuration file for NextAuth.js.
*   **`components/`**: Houses all reusable React components, such as `Navbar.tsx` and `Ping.tsx`.
*   **`components.json`**: Configuration file, typically for `shadcn/ui` components, indicating a component library setup.

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

---

## 🔧 Configuration

INcBlog leverages environment variables for sensitive data and flexible configuration.

### Environment Variables

Ensure your `.env.local` file contains the following:

| Variable            | Description                                                                                             | Example Value                                                 |
| :------------------ | :------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------ |
| `NEXTAUTH_URL`      | The URL of your application. Crucial for NextAuth.js callbacks.                                         | `http://localhost:3000` or `https://incblog.vercel.app`      |
| `NEXTAUTH_SECRET`   | A random string used to hash tokens, sign cookies, and generate cryptographic keys. **Crucial for security.** | `openssl rand -base64 32` output (e.g., `s+r5G...`)          |
| `DATABASE_URL`      | Connection string for your database (e.g., PostgreSQL, MongoDB).                                        | `postgresql://user:pass@host:port/db?schema=public`         |
| `SENTRY_DSN`        | Your Sentry Data Source Name for error tracking.                                                        | `https://examplePublicKey@o0.ingest.sentry.io/0`            |
| `GITHUB_ID`         | Client ID for GitHub OAuth provider (if enabled in NextAuth.js)                                         | `your_github_client_id`                                       |
| `GITHUB_SECRET`     | Client Secret for GitHub OAuth provider (if enabled in NextAuth.js)                                     | `your_github_client_secret`                                   |
| `GOOGLE_CLIENT_ID`  | Client ID for Google OAuth provider (if enabled in NextAuth.js)                                         | `your_google_client_id`                                       |
| `GOOGLE_CLIENT_SECRET` | Client Secret for Google OAuth provider (if enabled in NextAuth.js)                                  | `your_google_client_secret`                                   |
| `NEXT_PUBLIC_SENTRY_DSN` | Public Sentry DSN for client-side error tracking.                                                    | `https://examplePublicKey@o0.ingest.sentry.io/0`            |

**Security Note:** Never commit your `.env.local` file to version control. Use `.env.example` (if present) for guidance without including actual secrets.

### Next.js Configuration

The `next.config.js` file (not explicitly listed but standard for Next.js) allows for advanced configurations, such as image optimization, internationalization, or custom webpack settings.

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add your Next.js configurations here
  images: {
    domains: ['res.cloudinary.com', 'avatars.githubusercontent.com'], // Example for image sources
  },
  experimental: {
    appDir: true, // Enables the app directory
  },
  // Other configurations
};

module.exports = nextConfig;
```

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

---

## 🧪 Testing

INcBlog is built with testing in mind to ensure reliability and maintainability. While specific test files are not listed, it's expected to utilize common JavaScript testing frameworks.

### Running Tests

To execute the test suite (if configured with a framework like Jest and React Testing Library):

```bash
npm test
# or
yarn test
# or
pnpm test
```

This command will run all tests in the project and provide a summary of the results.

### Code Coverage

To view code coverage reports (if configured):

```bash
npm test -- --coverage
# or
yarn test --coverage
# or
pnpm test --coverage
```

This will typically generate an HTML report in a `coverage/` directory, which you can open in your browser to see detailed coverage information.

### End-to-End (E2E) Testing (Optional)

For more comprehensive testing of user flows, you might integrate an E2E testing framework like Cypress or Playwright.

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

---

## 🚀 Deployment

Deploying INcBlog is straightforward, especially with its Next.js foundation.

### Local Production Build

To build and run the application locally in production mode:

1.  **Build the application:**
    ```bash
    npm run build
    # or
    yarn build
    # or
    pnpm build
    ```
    This command compiles the Next.js application for production, generating an optimized build in the `.next` directory.

2.  **Start the production server:**
    ```bash
    npm start
    # or
    yarn start
    # or
    pnpm start
    ```
    The application will serve from `http://localhost:3000` in production mode.

### Cloud Deployment (Vercel Recommended)

Next.js applications are seamlessly deployed to Vercel, the creators of Next.js.

1.  **Install Vercel CLI (if not already installed):**
    ```bash
    npm i -g vercel
    ```

2.  **Log in to Vercel:**
    ```bash
    vercel login
    ```
    Follow the prompts to authenticate via email or GitHub.

3.  **Deploy your project:**
    Navigate to your project directory and run:
    ```bash
    vercel
    ```
    Vercel will detect that it's a Next.js project and guide you through the deployment process, asking for project name, scope, and linking to an existing Git repository. It will automatically detect and apply environment variables configured in your Vercel project settings.

    For subsequent deployments after pushing to your linked GitHub repository, Vercel will automatically redeploy.

### CI/CD Integration

While no explicit CI/CD workflow files are provided, you can easily set up GitHub Actions (or similar services) to automate your build and deployment process.

A typical `main.yml` workflow for a Next.js project might look like this:

```yaml
# .github/workflows/main.yml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm' # or 'yarn', 'pnpm'

      - name: Install dependencies
        run: npm install # or yarn, pnpm

      - name: Run ESLint
        run: npm run lint

      - name: Run tests
        run: npm test -- --coverage # if tests are configured

      - name: Build project
        run: npm run build
        env:
          NEXTAUTH_URL: "http://localhost:3000" # Dummy URL for build
          NEXTAUTH_SECRET: ${{ secrets.NEXTAUTH_SECRET }} # Use a dummy or real secret for build
          DATABASE_URL: ${{ secrets.DATABASE_URL }} # Dummy for build or a test DB

  # deploy: # Optional: Add a deploy job for services like Vercel, Netlify, etc.
  #   needs: build
  #   runs-on: ubuntu-latest
  #   steps:
  #     - name: Deploy to Vercel
  #       uses: vercel/actions@v1
  #       with:
  #         vercel-token: ${{ secrets.VERCEL_TOKEN }}
  #         vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
  #         vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```
**Note:** Remember to configure `NEXTAUTH_SECRET`, `DATABASE_URL`, and Vercel-specific secrets in your GitHub repository settings.

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

---

## 🤝 Contributing

We welcome contributions from the community to make INcBlog even better! If you have suggestions, bug reports, or want to contribute code, please follow these guidelines.

### How to Contribute

1.  **Fork the repository:** Start by forking the `INcBlog` repository to your GitHub account.
2.  **Clone your forked repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/INcBlog.git
    cd INcBlog
    ```
3.  **Create a new branch:**
    ```bash
    git checkout -b feature/your-feature-name # for new features
    # or
    git checkout -b bugfix/issue-description # for bug fixes
    ```
4.  **Make your changes:**
    *   Ensure your code adheres to the project's coding style (ESLint and Prettier are configured).
    *   Write clear, concise commit messages.
    *   Add or update tests for your changes.
5.  **Commit your changes:**
    ```bash
    git add .
    git commit -m "feat: Add new feature" # or "fix: Resolve bug"
    ```
6.  **Push to your branch:**
    ```bash
    git push origin feature/your-feature-name
    ```
7.  **Open a Pull Request (PR):**
    *   Go to the original `INcBlog` repository on GitHub.
    *   Click on the "New pull request" button.
    *   Provide a clear title and detailed description of your changes. Link any relevant issues.
    *   Ensure all CI/CD checks pass.

### Code Style

This project uses ESLint for linting and Prettier for code formatting. Please ensure your code passes linting checks and is formatted correctly before submitting a PR.

```bash
npm run lint
npm run format # or `npm run lint -- --fix` to auto-fix
```

### Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project, you agree to abide by its terms.

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>


---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](https://github.com/himanshuvkm/INcBlog/blob/main/LICENSE) file for details.

```
MIT License

Copyright (c) 2023 himanshuvkm

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

---

## 👥 Authors & Acknowledgments

*   **Owner/Lead Developer:**
    *   **Himanshu V.K.M** - [@himanshuvkm](https://github.com/himanshuvkm)

### 🙏 Acknowledgments

A special thank you to:

*   The **Next.js** team for building an incredible framework.
*   The **React** community for fostering innovation in UI development.
*   The creators of **NextAuth.js**, **Tailwind CSS**, **Shadcn/ui**, and **Sentry** for their outstanding libraries and tools.
*   All open-source contributors and communities that make modern web development possible.

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

---

## 📞 Support & Contact

If you have any questions, suggestions, or need further assistance, please feel free to reach out!

*   **GitHub Issues:** For bug reports, feature requests, or general questions, please open an issue on the [INcBlog GitHub Issues page](https://github.com/himanshuvkm/INcBlog/issues).
*   **Email:** You can also reach out to the owner directly at `himanshuvkm [at] example.com` (replace with actual email).

---

⭐ **Star** the repository if you find it useful!
🍴 **Fork** it to contribute!
📬 Open an **Issue** for any questions or suggestions!

# Everyday Logic Blog

A static blog built with 11ty (Eleventy) and Tailwind CSS, exploring the intersection of human wisdom and artificial intelligence.

## Features

- Static site generation with 11ty
- Tailwind CSS for styling
- Markdown blog posts
- Responsive design
- Mobile-friendly navigation

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

\`\`\`bash
npm install
\`\`\`

### Development Server

\`\`\`bash
npm run dev
\`\`\`

This will start the development server with hot reloading for both 11ty and Tailwind CSS.

### Build

\`\`\`bash
npm run build
\`\`\`

This will build the site for production in the `_site` directory.

## Project Structure

\`\`\`
src/
├── _includes/          # 11ty templates and partials
│   ├── base.njk       # Base layout
│   ├── post.njk       # Blog post layout
│   ├── navigation.njk # Navigation component
│   └── blog-post-card.njk # Blog post card component
├── _data/             # Global data files
│   └── site.json      # Site metadata
├── css/               # Stylesheets
│   └── input.css      # Tailwind CSS input file
├── posts/             # Blog posts (Markdown)
└── *.njk              # Page templates
\`\`\`

## Deployment

The site can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `_site`

## License

MIT

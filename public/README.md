# GitHub Pages Portfolio Website

A professional portfolio website built with React, TypeScript, and Tailwind CSS, designed to showcase your skills, projects, and professional experience.

## Features

- Responsive design that works on all devices
- Modern, clean UI with subtle animations
- Dark/light mode toggle
- Project showcase with filtering
- Skills visualization
- Experience timeline
- Contact form with validation
- SEO optimized

## Setup Instructions

### Local Development

1. Clone this repository
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Deployment to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub Pages URL
   ```json
   "homepage": "https://yourusername.github.io"
   ```

2. Build the project
   ```bash
   npm run build
   ```

3. Deploy to GitHub Pages
   ```bash
   npm run deploy
   ```

## Customization

1. Update personal information in the components
2. Replace project images and descriptions
3. Modify skills, experience, and education sections
4. Update contact information and social media links
5. Customize colors and design elements

## Structure

- `src/components/` - Contains all React components
- `public/` - Static assets
- `src/index.css` - Global styles and Tailwind configuration

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite

## Maintenance

To update your portfolio:

1. Modify the relevant component files
2. Test changes locally with `npm run dev`
3. Rebuild and redeploy with `npm run build` and `npm run deploy`

## License

MIT License

---

Feel free to customize this portfolio website to showcase your unique skills and projects!
# My Professional Portfolio

A modern, responsive portfolio website showcasing my projects, skills, and experience. Built with React and Vite for optimal performance and developer experience.

## 🌐 Live Demo

Visit the live portfolio: [portfolio2-nu-brown.vercel.app](https://portfolio2-nu-brown.vercel.app)

## ✨ Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean and professional interface
- **Fast Performance**: Built with Vite for lightning-fast load times
- **Component-Based**: Modular React components for easy maintenance
- **Smooth Animations**: Engaging transitions and interactions
- **SEO Optimized**: Structured for search engines
- **Dark Mode Support**: Easy on the eyes in any lighting condition

## 🛠️ Tech Stack

- **Framework**: React 18+
- **Build Tool**: Vite
- **Language**: JavaScript
- **Styling**: CSS/TailwindCSS (or your CSS approach)
- **Deployment**: Vercel
- **Version Control**: Git & GitHub

## 📋 Prerequisites

- Node.js 14.0 or higher
- npm or yarn package manager
- Git

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/sharath900/portfolio2.git
cd portfolio2
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Run Development Server
```bash
npm run dev
# or
yarn dev
```

The application will start at `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
# or
yarn build
```

### 5. Preview Production Build
```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
portfolio2/
├── src/
│   ├── components/        # Reusable React components
│   ├── pages/            # Page components
│   ├── styles/           # CSS stylesheets
│   ├── assets/           # Images, fonts, and other assets
│   ├── App.jsx           # Main App component
│   └── main.jsx          # Entry point
├── public/               # Static files
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
├── package.json          # Project dependencies
└── README.md             # This file
```

## 🎨 Customization

### Adding Your Information

1. **Update Personal Info**: Edit contact details and bio in the appropriate components
2. **Add Projects**: Create new project entries in the projects section
3. **Update Skills**: Modify the skills section with your expertise
4. **Change Colors**: Update CSS variables or Tailwind config for your brand colors
5. **Add Images**: Replace placeholder images with your own in the `assets` folder

### Styling

The portfolio uses modern CSS. To customize:
- Edit component-specific styles in their respective CSS files
- Update global styles in the main stylesheet
- Maintain consistent spacing and typography throughout

## 🚀 Deployment

This portfolio is deployed on Vercel. To deploy your own:

### Option 1: Deploy with Vercel
```bash
npm install -g vercel
vercel
```

### Option 2: Deploy with GitHub Pages
1. Add to `vite.config.js`:
```javascript
export default {
  base: '/portfolio2/'
}
```
2. Push to GitHub
3. Enable GitHub Pages in repository settings

## 📊 Performance Optimization

- **Code Splitting**: Lazy loading of components
- **Image Optimization**: Optimized image assets
- **Minification**: Automatic via Vite build
- **Caching**: Vercel edge caching for fast delivery

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint (if configured)

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Node Modules Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
- Clear cache: `rm -rf dist node_modules`
- Reinstall: `npm install`
- Check Node version: `node --version` (should be 14+)

## 🤝 Contributing

While this is a personal portfolio, feedback and suggestions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License - feel free to use it as inspiration for your own portfolio.

## 💬 Contact

For questions or collaborations, reach out to me:
- GitHub: [@sharath900](https://github.com/sharath900)
- Portfolio: [portfolio2-nu-brown.vercel.app](https://portfolio2-nu-brown.vercel.app)

---

Made with ❤️ using React and Vite

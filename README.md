# Anupam Kumar - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This website showcases professional experience, skills, certifications, education, and publications in an elegant and user-friendly interface.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices (desktop, tablet, mobile)
- **Modern UI**: Clean and professional design with smooth animations
- **Easy Customization**: All content managed through a simple JSON configuration file
- **Smooth Scrolling**: Seamless navigation between sections
- **Mobile Navigation**: Hamburger menu for mobile devices
- **No Dependencies**: Pure HTML, CSS, and JavaScript - no frameworks required

## File Structure

```
.
├── index.html      # Main HTML structure
├── styles.css      # Styling and responsive design
├── script.js       # Interactive functionality
├── data.json       # Content configuration
└── README.md       # Documentation
```

## Customization

### Updating Content

All content is managed through the `data.json` file. Simply edit this file to update your portfolio information:

1. **Profile Information**: Update name, title, tagline, and about section
2. **Skills**: Add or modify skill categories and items
3. **Experience**: Update work history with positions, companies, and responsibilities
4. **Certifications**: List your professional certifications
5. **Education**: Add your educational background
6. **Publications**: Include research papers or articles
7. **Contact**: Update contact information

### Customizing Colors

To change the color scheme, edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;    /* Main brand color */
    --secondary-color: #1e40af;  /* Secondary brand color */
    --text-color: #1f2937;       /* Main text color */
    --text-light: #6b7280;       /* Light text color */
}
```

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select the branch (usually `main`) and root directory
4. Your site will be available at `https://username.github.io/repository-name`

### Local Testing

To test the website locally:

1. Open `index.html` in a web browser
2. For better experience, use a local web server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```
3. Navigate to `http://localhost:8000` in your browser

### Other Hosting Options

- **Netlify**: Drag and drop your files or connect to GitHub
- **Vercel**: Import your GitHub repository
- **AWS S3**: Upload files to an S3 bucket configured for static hosting
- **Any Web Host**: Upload files via FTP to your web hosting service

## Browser Support

This website is compatible with all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

## Support

For issues, questions, or suggestions, please create an issue in the repository or contact via the information provided in the website.
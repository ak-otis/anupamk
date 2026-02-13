# Quick Start Guide

Get your portfolio website up and running in 5 minutes!

## Step 1: Customize Your Content

Edit the `data.json` file with your personal information:

```bash
# Open data.json in any text editor
nano data.json
# or
code data.json
```

Update the following sections:
- ✏️ Profile (name, title, tagline, about)
- 🛠️ Skills (programming languages, technologies)
- 💼 Experience (work history)
- 🏆 Certifications
- 🎓 Education
- 📝 Publications
- 📧 Contact information

## Step 2: Test Locally

Open a terminal in the project directory and run:

```bash
# Using Python 3 (most common)
python3 -m http.server 8000

# OR using Python 2
python -m SimpleHTTPServer 8000

# OR using Node.js
npx http-server
```

Then open your browser to `http://localhost:8000`

## Step 3: Deploy to GitHub Pages

The easiest way to publish your website:

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select your branch (usually `main`)
4. Click **Save**
5. Your site will be live at: `https://yourusername.github.io/repository-name/`

That's it! 🎉

## Customization Tips

### Change Colors

Edit `styles.css` and modify the CSS variables:

```css
:root {
    --primary-color: #2563eb;    /* Change this to your brand color */
    --secondary-color: #1e40af;  /* Complementary color */
}
```

### Add Your Photo

1. Add your photo to the project (e.g., `profile.jpg`)
2. Update the hero section in `index.html`
3. Style it in `styles.css`

### Modify Sections

You can easily show/hide sections by:
- Commenting out sections in `index.html`
- Removing corresponding data from `data.json`

## Need Help?

- 📖 See `README.md` for detailed documentation
- 🚀 See `DEPLOYMENT.md` for deployment options
- 💬 Open an issue in the repository

## What You Get

✅ Professional portfolio website
✅ Fully responsive (mobile, tablet, desktop)
✅ Modern design with smooth animations
✅ Easy to customize (no coding required)
✅ Free hosting on GitHub Pages
✅ Fast and secure

Enjoy your new portfolio website! 🌟

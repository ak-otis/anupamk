# Deployment Guide

This guide will help you deploy your portfolio website to various hosting platforms.

## Quick Start - GitHub Pages (Recommended)

GitHub Pages is the easiest and fastest way to deploy your portfolio website for free.

### Steps:

1. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select the branch (e.g., `main`)
   - Select the root folder `/`
   - Click "Save"

2. **Access Your Site**
   - Your site will be available at: `https://ak-otis.github.io/anupamk/`
   - It may take a few minutes for the site to be published

### Custom Domain (Optional)

1. In repository Settings > Pages, add your custom domain
2. Update your DNS records to point to GitHub Pages
3. GitHub will automatically provision an SSL certificate

## Alternative Deployment Options

### Netlify

1. **Via Git**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Deploy settings: Leave empty (no build command needed)
   - Click "Deploy site"

2. **Via Drag & Drop**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag your project folder
   - Done! You'll get a URL instantly

### Vercel

1. Go to [Vercel](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"
5. Your site will be live in seconds

### AWS S3 + CloudFront

1. **Create an S3 Bucket**
   ```bash
   aws s3 mb s3://your-portfolio-website
   ```

2. **Upload Files**
   ```bash
   aws s3 sync . s3://your-portfolio-website --exclude ".git/*"
   ```

3. **Enable Static Website Hosting**
   - Go to S3 bucket properties
   - Enable "Static website hosting"
   - Set index.html as the index document

4. **Set Bucket Policy** (for public access)
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [{
       "Sid": "PublicReadGetObject",
       "Effect": "Allow",
       "Principal": "*",
       "Action": "s3:GetObject",
       "Resource": "arn:aws:s3:::your-portfolio-website/*"
     }]
   }
   ```

5. **Optional: Add CloudFront for HTTPS and CDN**

### Traditional Web Hosting

If you have traditional web hosting with FTP access:

1. Connect via FTP using FileZilla or similar
2. Upload all files to your public_html or www folder
3. Your site will be live at your domain

## Customization Before Deployment

Before deploying, make sure to customize `data.json` with your information:

1. Update profile information (name, title, tagline, about)
2. Add your skills and expertise
3. Include your work experience
4. List your certifications
5. Add your education background
6. Include publications if applicable
7. Update contact information

## Testing Locally

Always test your changes locally before deploying:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Continuous Deployment

For automatic deployments when you push changes:

- **GitHub Pages**: Automatically deploys from your selected branch
- **Netlify**: Automatically deploys on every push to connected branch
- **Vercel**: Automatically deploys on every push to connected branch

## Performance Tips

1. **Optimize Images**: If you add images, use optimized formats (WebP) and compress them
2. **Enable Caching**: Most hosting platforms enable this by default
3. **Use a CDN**: CloudFront (AWS), Cloudflare, or built-in CDN from Netlify/Vercel
4. **Minify Files**: For production, consider minifying CSS and JS

## Security Considerations

1. Never commit sensitive information to data.json
2. Use HTTPS (enabled by default on GitHub Pages, Netlify, Vercel)
3. Keep contact information professional (consider using a contact form service)

## Support

If you encounter issues:
- Check the hosting platform's documentation
- Ensure all files are uploaded correctly
- Verify data.json is valid JSON
- Check browser console for JavaScript errors

## Cost

- **GitHub Pages**: Free
- **Netlify**: Free tier available (100GB bandwidth)
- **Vercel**: Free tier available
- **AWS S3**: Pay-as-you-go (typically < $1/month for small sites)

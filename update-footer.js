const fs = require('fs');
const path = require('path');

// List of all HTML files in your project
const htmlFiles = [
    'index.html',
    'about.html',
    'events.html',
    'speakers.html',
    'team.html',
    'blogs.html',
    'sponsors.html',
    'moneta-for-schools.html',
    'moneta-for-teachers.html',
    'institutional-social-responsibility.html',
    'run-for-literacy.html',
    'testimonials.html',
    'theme.html'
];

// The footer script to add
const footerScript = '    <script src="js/footer.js"></script>\n    <script src="script.js"></script>\n</body>';

// The comment to identify where to add the footer
const footerComment = '    <!-- Footer will be inserted here by footer.js -->';

// Process each HTML file
htmlFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    
    // Check if file exists
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if the file already has the footer script
        if (content.includes('js/footer.js')) {
            console.log(`✓ ${file} already has the footer script`);
            return;
        }
        
        // Replace the closing body tag with our footer script
        if (content.includes('</body>')) {
            // Add the footer comment if it doesn't exist
            if (!content.includes(footerComment)) {
                content = content.replace('</body>', `${footerComment}\n    <script src="js/footer.js"></script>\n    <script src="script.js"></script>\n</body>`);
            } else {
                content = content.replace(footerComment + '[\s\S]*?<\/body>', 
                    `${footerComment}\n    <script src="js/footer.js"></script>\n    <script src="script.js"></script>\n</body>`);
            }
            
            // Ensure Font Awesome is in the head
            if (!content.includes('font-awesome')) {
                content = content.replace('</head>', '    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">\n</head>');
            }
            
            // Save the file
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✓ Updated ${file}`);
        } else {
            console.log(`⚠️ Could not find </body> tag in ${file}`);
        }
    } else {
        console.log(`⚠️ File not found: ${file}`);
    }
});

console.log('\n✅ Footer update complete!');

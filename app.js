// Import the wjst templating engine and the file system module
const wjst = require('wjst');
const fs = require('fs');

// Read JSON data from 'data.json' file
// The file must contain valid JSON data that will be used to populate the HTML template
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

// Render the HTML by combining the template from 'pages/index.html' with the data
// This generates the final HTML content based on the provided JSON data
const html = wjst.renderFile('pages/index.html', data);

// Write the rendered HTML to 'index.html'
// This output file will be served as the final result, incorporating the data from 'data.json'
fs.writeFileSync('index.html', html);

// Exit the process after completing the file write operation
// This ensures that the script terminates successfully once the output file is generated
process.exit();

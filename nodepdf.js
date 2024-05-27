npm install pdfkit


const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('output.pdf'));

doc.fontSize(25).text('Hello world!', 100, 100);
doc.fontSize(18).text('This is a generated PDF document.', 100, 150);

// Adding a placeholder for dropdown (interactive dropdowns are complex in PDFs)
doc.rect(100, 200, 150, 20).stroke();
doc.fontSize(12).text('Option 1', 105, 205);

doc.end();

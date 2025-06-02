document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const recipient = document.getElementById('recipient').value;
    const subject = document.getElementById('subject').value;
    const fileName = document.getElementById('fileName').value;
    const downloadLink = document.getElementById('downloadLink').value;
    const senderName = document.getElementById('senderName').value;
    const senderTitle = document.getElementById('senderTitle').value;
    const senderContact = document.getElementById('senderContact').value;

    // Generate email template
    const emailTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${subject}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        h2 {
            color: #2c3e50;
        }
        .download-button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #3498db;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
        }
        .download-button:hover {
            background-color: #2980b9;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Download Instructions</h2>
        <p>Dear ${recipient},</p>
        <p>I hope this email finds you well.</p>
        <p>Please download the ${fileName} by clicking the 
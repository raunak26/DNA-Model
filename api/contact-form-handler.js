const { parse } = require('querystring');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const formData = parse(body);
      const { name, email, message } = formData;

      // Create the email content (similar to your PHP code)
      const to = 'himay75@gmail.com, anandraunak2000@gmail.com'; // Replace with your email address
      const subject = 'New Contact Form Submission';
      const messageBody = `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`;

      // In a real-world scenario, you would send an email using a Node.js email library or an external service

      // Send a response to the client
      res.status(200).send('Thank you for contacting us! We will get back to you soon.');
    });
  } else {
    // Return an error for non-POST requests
    res.status(405).send('Method Not Allowed');
  }
};
const { parse } = require('querystring');
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      const formData = parse(body);
      const { name, email, message } = formData;

      // Configure the email transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'cornsandemails@yahoo.com', // Replace with your Gmail address
          pass: 'cornucopiabio12345', // Replace with your Gmail password
        },
      });

      // Email content
      const mailOptions = {
        from: 'cornsandemails@yahoo.com', // Replace with your Gmail address
        to: 'himay75@gmail.com', // Replace with your email address
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      };

      try {
        // Send the email
        await transporter.sendMail(mailOptions);

        // Send a response to the client
        res.status(200).send('Thank you for contacting us! We will get back to you soon.');
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    });
  } else {
    // Return an error for non-POST requests
    res.status(405).send('Method Not Allowed');
  }
};

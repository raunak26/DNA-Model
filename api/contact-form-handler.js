// const nodemailer = require("nodemailer");

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method Not Allowed" });
//   }

//   const { name, email, message } = req.body;

//   // Replace these values with your actual email configuration
//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user: "anandraunak2000@gmail.com",
//       pass: "jyez uwhs bakb sgke",
//     },
//   });

//   const mailOptions = {
//     from: `"${name}" <${email}>`,
//     to: "himay75@gmail.com",
//     subject: "[IMPORTANT] New Contact Form Submission",
//     text: message,
//   };

//   try {
//     console.log("Trying to send email");
//     // await transporter.sendMail(mailOptions);
//     console.log("Successfully sent email");
//     res.status(200).send('Thank you for contacting us! We will get back to you soon.');
//   } catch (error) {
//     console.log("Something broke");
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// }

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
      const to = 'himay75@gmail.com'; // Replace with your email address
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
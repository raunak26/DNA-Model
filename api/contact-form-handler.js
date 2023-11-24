const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  // Replace these values with your actual email configuration
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "anandraunak2000@gmail.com",
      pass: "uftd hrkw jdcg aypu",
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "anandraunak2000@gmail.com",
    subject: "[IMPORTANT] New Contact Form Submission",
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Thank you for contacting us! We will get back to you soon.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

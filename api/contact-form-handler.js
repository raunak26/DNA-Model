const { parse } = require('querystring');
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
    if (req.method === 'POST') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const formData = parse(body);
            const { name, email, message } = formData;

        // Create the email content
        const to = 'himay75@gmail.com';
        const subject = '[IMPORTANT] New Contact Form Submission';
        const messageBody = `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`;

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'anandraunak2000@gmail.com',
                pass: 'jyez uwhs bakb sgke',
            },
        });

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: to,
            subject: subject,
            text: messageBody,
        };

        try {
            console.log('Trying to send email');
            transporter.sendMail(mailOptions)
                .then(() => {
                    console.log('Successfully sent email');
                    res.status(200).send('Thank you for contacting us! We will get back to you soon.');
                })
                .catch((error) => {
                    console.log('Something broke');
                    console.error(error);
                    res.status(500).send('Internal Server Error');
                });
        } catch (error) {
            console.log('Something broke');
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    });
    } else {
        // Return an error for non-POST requests
        res.status(405).send('Method Not Allowed');
    }
};

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

app.post('/send', upload.single('upload'), (req, res) => {
    const { name, email, subject, message } = req.body;

    console.log('Data:', req.body);
    console.log('File Recieved:', req.file);

    const mailOptions = {
        from: email,
        to: process.env.GMAIL_USER,
        subject: `Contact Form Submission: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        attachments: req.file ? [{ filename: req.file.originalname, content: req.file.buffer }] : []
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Error sending email' });
        }
        res.status(200).json({ message: 'Email sent successfully!' });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
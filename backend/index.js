const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
const corsOptions = {
  origin: "https://peanutswebsite1.onrender.com",
  Credential: true,
};
app.use(cors(corsOptions));

const __dirname = path.resolve();

app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { fullName, email, phone, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "gmagroindustries2020@gmail.com",
      pass: "evjk psik fmpv caks",
    },
  });

  const mailOptions = {
    from: `"Contact Form" <${email}>`,
    to: "gmagroindustries2020@gmail.com",
    subject: `New Contact Form Submission: ${subject}`,
    html: `
    <div style="max-width: 600px; margin: 0 auto; font-family: 'Segoe UI', Roboto, Tahoma, Geneva, Verdana, sans-serif; color: #333; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
      
      <!-- Header with Logo -->
    <div style="padding: 20px 30px 0px 30px; text-align: center;">
  <a href="#" style="text-decoration: none;">
    <img src="https://i.postimg.cc/x81D94JL/logo.png" alt="Company Logo" style="max-width: 120px; transition: opacity 0.3s ease;" />
  </a>
  <h2 style="margin: 15px 0 0; font-size: 20px; color: #2c3e50;">New Contact Form Submission</h2>
</div>

      <!-- Body Content -->
      <div style="padding: 30px;">
        <p style="font-size: 15px; line-height: 1.7; margin-bottom: 20px;">
          Dear Team,<br><br>
          You have received a new inquiry through the website contact form. The details are as follows:
        </p>

        <div style="background-color: #fafafa; padding: 20px; border-radius: 6px; border-left: 4px solid #2c3e50;">
          <p style="margin: 0 0 10px;"><strong>Full Name:</strong> ${fullName}</p>
          <p style="margin: 0 0 10px;"><strong>Email Address:</strong> ${email}</p>
          <p style="margin: 0 0 10px;"><strong>Phone Number:</strong> ${phone}</p>
          <p style="margin: 0;"><strong>Subject:</strong> ${subject}</p>
        </div>

        <div style="margin-top: 25px;">
          <p style="font-size: 15px; line-height: 1.7;"><strong>Message:</strong></p>
          <p style="background-color: #fff; border: 1px solid #ddd; padding: 15px; border-radius: 5px; font-size: 14.5px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>

        <p style="margin-top: 25px; font-size: 15px; line-height: 1.6;">
          Best regards,<br>
          <span style="color: #555;">G.M Agro Industries.</span>
        </p>
      </div>

    
    </div>
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

app.use(express.static(path.join(__dirname, "/peanuts/dist")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.resolve(__dirname, "peanuts", "index.html"));
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));

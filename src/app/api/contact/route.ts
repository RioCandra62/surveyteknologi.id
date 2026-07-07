import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, company, phone, service, message } = await request.json();

    if (!name || !email || !service) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    // Configure the SMTP transport using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587/other
      auth: {
        user: process.env.SMTP_USER, // e.g. your Gmail or cPanel email
        pass: process.env.SMTP_PASS, // app password or email password
      },
    });

    const mailOptions = {
      from: `"${name} (${company || 'Company N/A'})" <${process.env.SMTP_USER}>`, 
      to: process.env.CONTACT_RECEIVER_EMAIL || "info@surveyteknologi.id", 
      replyTo: email,
      subject: `STI Inquiry: ${service} from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || "N/A"}
Phone: ${phone || "N/A"}
Service requested: ${service}

Message:
${message || "No description provided."}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 10px; padding: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
          <div style="text-align: center; border-bottom: 2px solid #00a3e0; padding-bottom: 15px; margin-bottom: 20px;">
            <h2 style="color: #004b87; margin: 0; text-transform: uppercase;">Survey Teknologi Indonesia</h2>
            <span style="color: #00a3e0; font-size: 11px; font-weight: bold; text-transform: uppercase;">New Inquiry Received</span>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px; border-bottom: 1px solid #f1f1f1;">Full Name:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f1f1;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f1f1;">Email Address:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f1f1;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f1f1;">Company Name:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f1f1;">${company || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f1f1;">Phone Number:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f1f1;">${phone || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f1f1;">Service Requested:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f1f1; color: #00a3e0; font-weight: bold;">${service}</td>
            </tr>
          </table>

          <div style="background-color: #f9f9f9; border-radius: 5px; padding: 15px; border-left: 4px solid #004b87; margin-bottom: 20px;">
            <h4 style="margin: 0 0 10px 0; color: #004b87;">Message / Project Description:</h4>
            <p style="margin: 0; white-space: pre-wrap; font-size: 14px;">${message || "No description provided."}</p>
          </div>

          <div style="font-size: 11px; color: #888; text-align: center; border-top: 1px solid #eaeaea; padding-top: 15px;">
            This email was sent automatically from the STI web portal.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}

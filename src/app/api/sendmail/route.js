import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dns from 'dns';
export async function POST(req, res) {
    let payload = await req.json();
    let { name, email, message } = payload;
    let sucess;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.email",
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: process.env.USER,
            clientId: process.env.CLIENTID,
            clientSecret: process.env.CLIENTSECRET,
            refreshToken: process.env.REFRESHTOKEN
        }
    });
    const mailOptions = {
        from: `Malay Kumar<${process.env.USER}>`,
        to: email,
        subject: 'Thank You for Your Interest',
        text: `
        Hello ${name},
        
        Thank you for your interest. I will review your request and get back to you soon. Please feel free to contact me if needed.
        `
    };
    const mailOptions2 = {
        from: `Malay Kumar<${process.env.USER}>`,
        to: process.env.USER,
        subject: `Message from ${name}`,
        text: `
        Sender ${name},
        Email ${email},

           ${message}
        `
    };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                    sucess = false;
                } else {
                    console.log('Email sent: ' + info.response);
                    sucess = true;

                }
            });
            transporter.sendMail(mailOptions2, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent:' + info.response);
                }
            });


            
    return NextResponse.json({ sucess }, { status: 200 });
};


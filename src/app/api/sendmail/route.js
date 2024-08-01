import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { USER, Pass} from "@/config/constant";
export async function POST(req, res) {
    let payload = await req.json();
    let { name, email, message } = payload;
    let sucess=true;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.email",
        port: 587,
        secure: false,
        auth: {
            user: USER,
            pass:Pass
        },
        
    });
    const mailOptions = {
        from: `Malay Kumar<${USER}>`,
        to: email,
        subject: 'Thank You for Your Interest',
        text: `
        Hello ${name},
        
        Thank you for your interest. I will review your request and get back to you soon. Please feel free to contact me if needed.
        `
    };
    const mailOptions2 = {
        from: `Malay Kumar<${USER}>`,
        to:USER,
        subject: `Message from ${name}`,
        text: `
        Sender ${name},
        Email ${email},

           ${message}
        `
    };
    await new Promise((resolve,reject)=>{
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                reject(error)
                return NextResponse.json({ sucess: false }, { status: 200 });
            } else {
                console.log('Email sent: ' + info.response);
                sucess = true;
                resolve(info);

            }
        });
        transporter.sendMail(mailOptions2, function (error, info) {
            if (error) {
                console.log(error);
                reject(error)
                return NextResponse.json({ Sucess: false }, { status: 200 });
            } else {
                console.log('Email sent:' + info.response);
                resolve(info);
            }
        });

    })
    
            
    return NextResponse.json({ sucess }, { status: 200 });
};


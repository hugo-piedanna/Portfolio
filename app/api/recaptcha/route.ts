import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY ?? "NOT DEFINED";

    const postData = await request.json();

    const { gRecaptchaToken } = postData;

    let res;
    const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;
    try {
        res = await axios.post(
            "https://www.google.com/recaptcha/api/siteverify",
            formData,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        );
        
    } catch(e: unknown) {
        console.log(e);
        return NextResponse.json({ success: false, message: "Nous ne parvenons pas à contacter les services de Google. Réessayez plus tard ou contactez moi via linkedin." });
    }

    if(res && res.data?.score && res.data?.score > 0.5){
        return NextResponse.json({
            success: true
        });
    } else {
        return NextResponse.json({ success: false, message: `Votre score est insuffisant. Etes-vous un robot ?` });
    }
}
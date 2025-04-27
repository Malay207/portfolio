"use client"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from "@/config/constant";
export function SendMsg() {
    const notify = (data) => toast(data);
    const [data, setdata] = useState({
        name: "",
        email: "",
        message: ""
    })
    const handlechange = (e) => {
        const { name, value } = e.target;
        setdata((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const handlesubmit = async () => {

        if (!API_URL) {
            return null;
        }
        const res = await fetch(`${API_URL}/api/sendmail`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: data.name, email: data.email, message: data.message })

        });
        const resdata = await res.json();
        console.log(resdata.sucess);
        setdata({
            name: "",
            email: "",
            message: ""
        })
        return resdata.sucess;

    }

    return (
        <>
            <form>
                <input type="text" name="name" value={data.name} onChange={handlechange} placeholder="Name" className="border-2 border-gray-200 rounded-3xl p-3 w-full my-7 text-black" required minLength={3} />

                <input type="email" name="email" value={data.email} onChange={handlechange} placeholder="Email" className="border-2 border-gray-200 rounded-3xl p-3 w-full my-7 text-black" required />

                <textarea placeholder="Message" name="message" value={data.message} onChange={handlechange} className="border-2 border-gray-200 rounded-3xl p-3 w-full my-7 text-black" cols="5" rows="5" required minLength={5}></textarea>

                <button className="text-xl border-2 border-white flex items-center  rounded-3xl px-8 py-1.5 hover:bg-white hover:text-black " onClick={async (e) => {
                    e.preventDefault();
                    const data = await handlesubmit();
                    if (data) {
                        notify("Thank you! I will reach out to you very soon!");
                    }
                    else {
                        notify("Failed to send mail.Try again Later!");
                    }

                }} disabled={data.name === "" || data.email === "" || data.message === "" ? true : false}>

                    <span className="">submit</span>
                </button>
                <ToastContainer />
            </form>
        </>
    )
}
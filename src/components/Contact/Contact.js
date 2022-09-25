import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import SocialIcons from "../../helpers/SocialIcons";

import email from "../../images/email.png";
import phone from "../../images/phone.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
    const info = [
        {
            image: phone,
            title: "Phone Number",
            value: "+91 7386000126",
        },
        {
            image: email,
            title: "Email",
            value: "saipraneethpegada@gmail.com",
        },
    ];

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_gio73qd",
                "contact_form",
                form.current,
                "dJDxmk0W2-f8LThT8"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    if (result.status === 200) {
                        toast.success("Message Sent!");
                    } else {
                        toast.error("Try Again");
                    }
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <>
            <ToastContainer />
            <div className="m-5">
                <h1 className="headings text-center">Contact Me</h1>
                <div className="d-flex justify-content-evenly flex-wrap my-5">
                    <div className="form-container">
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="row my-2 d-flex flex-column g-3">
                            <div className="col-md-12">
                                <label htmlFor="name" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="user_name"
                                    className="form-control rounded-2"
                                    placeholder="Your name please!"
                                    required
                                />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="email" className="form-label">
                                    Email Id
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="user_email"
                                    className="form-control rounded-2"
                                    placeholder="Your email"
                                    required
                                />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="message" className="form-label">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    cols="30"
                                    className="form-control rounded-2"
                                    placeholder="Type your message here..."
                                />
                            </div>
                            <div>
                                <input
                                    type="submit"
                                    value="Send"
                                    className="btn btn-primary"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="d-flex flex-column flex-wrap justify-content-center m-3 p-3">
                        {info.map((item, index) => (
                            <div className="p-2 m-3" key={index}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-5"
                                />
                                <span className="mx-3 fs-5"> {item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="d-flex justify-content-center flex-column flex-wrap align-items-center my-5 py-5">
                    <div>
                        <h1 className="text-center py-2">
                            Let's work together!
                        </h1>
                        <p className="sizing">
                            Currently I'm specializing in{" "}
                            <span style={{ color: "#8ffbf7" }}>
                                Back-end Development!
                            </span>
                        </p>
                        <p className="sizing">
                            Feel free to get in touch and talk more about your
                            projects.
                        </p>
                        <p className="sizing text-center">
                            I can't wait to hear all about it.
                        </p>
                        <p className="sizing text-end fst-italic">-Praneeth.</p>
                    </div>
                    <SocialIcons />
                </div>
            </div>

            <footer className="text-center" style={{ marginTop: "15vh" }}>
                <p>Designed and developed by Sai Praneeth.</p>
                <p>
                    Built with{" "}
                    <span className="footerTextColor">ReactJS, </span>Deployed
                    in <span className="footerTextColor">Netlify.</span>
                </p>
            </footer>
        </>
    );
}

"use client"
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  const testSiteKey = "6LcgkwApAAAAAO3aILJwmebdXVAE3NjRJRQeglNn";
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formResponse, setResponse] = useState("");

  const isValidName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNameError("");
    setEmailError("");
    let isValid = true;
    if (name === "") {
      setNameError("Name is required");
      isValid = false;
    } else if (!isValidName(name)) {
      setNameError("Name should only contain text");
      isValid = false;
    }

    if (email === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Email should be in a valid format");
      isValid = false;
    }

    if (isValid) {
      axios
      .post("https://madpopo.com/contact-us-form-save-data.php", {
        name: name,
        email: email,
        subject: subject,
        message: message,
      })
      .then((response) => {
        if (response && response.data) {
          if (response.data.type === "success") {
            setResponse(response.data.message);
            setSuccessMessage(response.data.message);
          } else {
            setResponse(response.data.message);
          }
        } else {
          console.error("Invalid response format:", response);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY >= 1580);
    });
  }, []);
  const handleRecaptchaSuccess = () => {
    setRecaptchaChecked(true);
  };
  const handleCancel = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setSuccessMessage("");
  };
  return (
    <div className="contact-form-container bg-white border-opacity px-8 pt-8 pb-9 px-sm-11 py-sm-11 shadow-2 rounded-20 position-relative overflow-hidden">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div
          className={`output_message ${
            successMessage ? "success_message" : ""
          }`}
        >
          {successMessage ? (
            <div>
              <span className="output_message_text coodiv-text-6 font-weight-bold color-blackish-blue">
                {successMessage}
              </span>
              <Link
                className="btn btn-danger mx-auto"
                onClick={() => {
                  setSuccessMessage("");
                  handleCancel();
                  window.location.reload();
                }}
              >
                Ok
              </Link>
            </div>
          ) : null}
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group mb-7">
              <label
                htmlFor="name"
                className="coodiv-text-11 font-weight-bold text-blackish-blue"
              >
                Your name
              </label>
              <input
                className="form-control coodiv-text-11 border"
                type="text"
                id="name"
                placeholder="i.e. John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="error-message" id="name-error">
                {nameError}
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group mb-7">
              <label
                htmlFor="email"
                className="coodiv-text-11 font-weight-bold text-blackish-blue"
              >
                Email
              </label>
              <input
                className="form-control coodiv-text-11 border"
                type="text"
                id="email"
                placeholder="i.e. john@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="error-message" id="name-error">
                {emailError}
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group mb-7">
              <label
                htmlFor="subject"
                className="coodiv-text-11 font-weight-bold text-blackish-blue"
              >
                Subject
              </label>
              <input
                className="form-control coodiv-text-11 border"
                type="text"
                id="subject"
                placeholder="i.e. I need help"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group mb-7">
              <label
                htmlFor="message"
                className="coodiv-text-11 font-weight-bold text-blackish-blue"
              >
                Message
              </label>
              <textarea
                name="textblock"
                id="message"
                className="form-control coodiv-text-11 border-gray-3 coodiv-textarea-height"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="col-md-12">
            <div className="g-recaptcha mb-5">
              <ReCAPTCHA
                sitekey={testSiteKey}
                onChange={handleRecaptchaSuccess}
              />
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-group button-block mt-3">
              <button
                className="form-btn btn btn-warning d-block w-100"
                disabled={!recaptchaChecked}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

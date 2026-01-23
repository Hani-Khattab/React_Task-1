import React, { useState } from "react";
import style from "./ContactMe.module.css";
import { FaStar } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function ContactMe() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <section className={style.ContactMe}>
      <div className="ContactMeTitle">
        <h1 className={`mt-4 fw-bold text-center ${style.ContactMe}`}>
          Contact Me
        </h1>

        <div className={`${style.divider} d-flex align-items-center justify-content-center gap-2 my-4`}>
          <span className={style.line}></span>
          <FaStar className={style.FaStar} />
          <span className={style.line}></span>
        </div>
      </div>

    <Form noValidate validated={validated} onSubmit={handleSubmit} className={`${style.ContactForm} mx-auto `} >
  
  <Form.Group className="mb-3">
    <Form.Label>Full name</Form.Label>
    <Form.Control required type="text" placeholder="Full name" />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Email Address</Form.Label>
    <InputGroup hasValidation>
      <Form.Control required type="text" placeholder="Email" />
      <Form.Control.Feedback type="invalid">
        Please Enter your Email.
      </Form.Control.Feedback>
    </InputGroup>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control required type="number" placeholder="Enter Your Phone Number" />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Message</Form.Label>
    <Form.Control required type="text" placeholder="Enter Your Message" />
  </Form.Group>

  <div className="text-start">
    <Button type="submit" className={style.submitBtn}> Send </Button>
  </div>
</Form>

    </section>
  );
}

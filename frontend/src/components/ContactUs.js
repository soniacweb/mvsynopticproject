import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Grid, CardContent } from "@mui/material";
import AlertComponent from "../components/reusableComponents/Alert";
import {
  YellowButton,
  BlueContainer,
  BlueCard,
  WhiteTextField,
  ContactUsTitle,
  ContactUsSubtitle,
} from "./ReusableTheme.styled";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_r7qwpfj",
        "template_wq3g7ka",
        form.current,
        "Ym-QSPwzxt7HfvHyf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setShowAlert(true);
  };

  return (
    <BlueContainer>
      <BlueCard
        style={{
          maxWidth: 450,
          margin: "50px auto",
          padding: "20px 5px",
        }}
      >
        <CardContent>
          <ContactUsTitle gutterBottom variant="h5">
            Contact Us
          </ContactUsTitle>
          <ContactUsSubtitle gutterBottom variant="body2" component="p">
            Fill outthe form and our team will get back to you!
          </ContactUsSubtitle>
          {showAlert && (
            <AlertComponent
              gutterBottom
              severity="success"
              message="Thanks for getting in touch, your email has been sent!"
              onClose={() => setShowAlert(!showAlert)}
            />
          )}
          <form ref={form} onSubmit={sendEmail}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <WhiteTextField
                  name="name"
                  label="First Name"
                  placeholder="Enter your name"
                  variant="outlined"
                  fullWidth
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></WhiteTextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <WhiteTextField
                  name="lastName"
                  label="Last Name"
                  placeholder="Enter your last name"
                  variant="outlined"
                  fullWidth
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></WhiteTextField>
              </Grid>

              <Grid item xs={12}>
                <WhiteTextField
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="Email"
                  variant="outlined"
                  fullWidth
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></WhiteTextField>
              </Grid>

              <Grid item xs={12}>
                <WhiteTextField
                  name="phone"
                  type="number"
                  label="Phone"
                  placeholder="Phone"
                  variant="outlined"
                  fullWidth
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></WhiteTextField>
              </Grid>

              <Grid item xs={12}>
                <WhiteTextField
                  name="message"
                  rows={4}
                  multiline
                  label="Message"
                  placeholder="Message"
                  variant="outlined"
                  fullWidth
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></WhiteTextField>
              </Grid>

              <Grid item xs={12}>
                <YellowButton
                  type="submit"
                  variant="contained"
                  value="Send"
                  fullWidth
                >
                  Submit
                </YellowButton>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </BlueCard>
    </BlueContainer>
  );
};

export default ContactUs;

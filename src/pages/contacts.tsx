import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Box } from "@mui/system";
import { Input, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { cursorTo } from "readline";

const contacts = () => {
  const [sent, setSent] = useState(false);

  const form = useRef("0");

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qcfk9nr",
        "template_2fd2kl4",
        form.current,
        "qVxnTO2UiIyXswu1b"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Box
        padding={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: { xs: 8, sm: 14 },
        }}
      >
        <Typography variant="h3">Get in Touch</Typography>
        <Typography variant="body2" sx={{ color: "#6C3D83" }}>
          <a href="mailto:dimitrovaleko@gmail.com"> dimitrovaleko@gmail.com</a>
        </Typography>

<<<<<<< HEAD
        <Box padding={{ sm: 10 }} mt={{ xs: 4 }}>
          <form ref={form} onSubmit={sendEmail} className="contactsForm">
            <label className="contactsLables">Name</label>
            <Input
              type="text"
              name="user_name"
              className="contactsInput"
              required
            />

            <label className="contactsLables">Email</label>
            <Input
              type="email"
              name="user_email"
              className="contactsInput"
              required
            />

            <label className="contactsLables contactsMessage">Message</label>
            <TextField
              multiline
              name="message"
              className="contactsTextField"
              required
            />
=======
        <Box padding={10}>
          <form ref={form} onSubmit={sendEmail} className="contactsForm">
            <label className="contactsLables">Name</label>
            <Input type="text" name="user_name" required />

            <label className="contactsLables">Email</label>
            <Input type="email" name="user_email" required />

            <label className="contactsLables contactsMessage"></label>
            <TextField multiline name="message" required />
>>>>>>> 9af82c4c53326b1508d8167af1a1801278646156

            <Input
              type="submit"
              value="SEND"
              className="contactsInputButton"
              sx={{ color: "#6C3D83" }}
            />
          </form>
        </Box>
        <Box display={"flex"} justifyContent="center">
          {sent && (
            <motion.p
              initial={{ opacity: 0, color: "#6C3D83" }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Sent Successfully
            </motion.p>
          )}
        </Box>
      </Box>
    </>
  );
};

export default contacts;

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Box } from "@mui/system";
import { Input, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [sent, setSent] = useState<boolean>(false);

  // const form = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qcfk9nr",
        "template_2fd2kl4",
        e.target,
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

        <Box padding={{ sm: 10 }} mt={{ xs: 4 }}>
          <form onSubmit={sendEmail} className="contactsForm">
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

export default ContactForm;

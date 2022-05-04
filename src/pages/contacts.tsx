import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Box } from "@mui/system";
import { Input, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

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
        <Box padding={10}>
          <form ref={form} onSubmit={sendEmail} className="contactsForm">
            <label className="contactsLables">Name</label>
            <Input type="text" name="user_name" />

            <label className="contactsLables">Email</label>
            <Input type="email" name="user_email" />

            <label className="contactsLables contactsMessage">Message</label>
            <textarea name="message" className="contactsInput" />

            <Input type="submit" value="SEND" className="contactsInputButton" />
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

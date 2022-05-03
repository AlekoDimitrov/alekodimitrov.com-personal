import { Box, Divider, Link, List, ListItem } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Divider />
      <Box padding={"24px"}>
        <List>
          <ListItem className="footerListItems">
            <Link
              href="#"
              color={"#00000"}
              underline={"none"}
              fontSize={"small"}
            >
              Home
            </Link>
          </ListItem>
          <ListItem className="footerListItems">
            <Link
              href="#"
              color={"#00000"}
              underline={"none"}
              fontSize={"small"}
            >
              Blog
            </Link>
          </ListItem>
          <ListItem className="footerListItems">
            <Link
              href="#"
              color={"#00000"}
              underline={"none"}
              fontSize={"small"}
            >
              About
            </Link>
          </ListItem>
          <ListItem className="footerListItems">
            <Link
              href="#"
              color={"#00000"}
              underline={"none"}
              fontSize={"small"}
            >
              Projects
            </Link>
          </ListItem>
          <ListItem className="footerListItems">
            <Link
              href="#"
              color={"#00000"}
              underline={"none"}
              fontSize={"small"}
            >
              Github
            </Link>
          </ListItem>
          <ListItem className="footerListItems">
            <Link
              href="#"
              color={"#00000"}
              underline={"none"}
              fontSize={"small"}
            >
              Contacts
            </Link>
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default Footer;

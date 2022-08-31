import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import whiteArrow from "../../assets/chevron-down-white.svg";
import arrow from "../../assets/chevron-down.svg";

import styles from "./styles";

const pages = [
  { title: "Home", arrow: false },
  { title: "About", arrow: false },
  { title: "Categories", arrow: true },
  { title: "Products", arrow: true },
  { title: "Contact", arrow: false },
];

const Navbar = ({ white }) => {
  return (
    <Box sx={styles.navbar}>
      {pages.map((page) => (
        <Link
          key={page}
          sx={{ ...styles.link, color: white ? "#fff" : "#000" }}
        >
          {page.title}
          {page.arrow && (
            <Box
              component="img"
              src={white ? whiteArrow : arrow}
              sx={styles.arrow}
            />
          )}
        </Link>
      ))}
    </Box>
  );
};

export default Navbar;

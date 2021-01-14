import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};

// markup
const Budipest = () => {
  return (
    <main style={pageStyles}>
      <title>Budipest | dnlgrgly</title>
      <h1 style={headingStyles}>Budipest</h1>
      <p style={paragraphStyles}>
        <span role="img" aria-label="Construction emoji">
          🚧
        </span>
        This page is under construction.
        <span role="img" aria-label="Construction emoji">
          🚧
        </span>
      </p>
      <p stlye={paragraphStyles}>Please check back later.</p>
    </main>
  );
};

export default Budipest;

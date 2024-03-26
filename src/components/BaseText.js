import React from "react";

export default function BaseText({
  children,
  className = "",
  fontSize = "12px",
  fontWeight = "600",
  fontColor = "black",
  style = {},
  ...rest
}) {
  const styles = {
    ...style,
    fontSize: fontSize,
    fontWeight: fontWeight,
    color: fontColor,
  };
  return (
    <p className={className} style={styles} {...rest}>
      {children}
    </p>
  );
}

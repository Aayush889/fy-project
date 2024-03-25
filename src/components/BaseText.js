import React from "react";

export default function BaseText({
  children,
  fontSize = "12px",
  fontWeight = "600",
  fontColor = "red",
}) {
  return (
    <p style={{ fontSize: fontSize, fontWeight: fontWeight, color: fontColor }}>
      {children}
    </p>
  );
}

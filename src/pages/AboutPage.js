import React from "react";
import { COLORS } from "../constants/Color";

import BaseText from "../components/BaseText";
import { useParams } from "react-router";

export default function AboutPage({}) {
  return (
    <div>
      <BaseText fontColor={COLORS().Text} fontSize="50px">
        {" "}
        About page
      </BaseText>
    </div>
  );
}

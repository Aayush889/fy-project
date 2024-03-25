import React from "react";
import { COLORS } from "../constants/Color";

import BaseText from "../components/BaseText";

export default function TranscribePage({}) {
  return (
    <div>
      <BaseText fontColor={COLORS().Text} fontSize="50px">
        {" "}
        TranscribePage
      </BaseText>
    </div>
  );
}

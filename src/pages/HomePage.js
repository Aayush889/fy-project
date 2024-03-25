import React from "react";
import { COLORS } from "../constants/Color";

import BaseText from "../components/BaseText";
import { useNavigate } from "react-router";
import { NAV } from "../navigation/navigationConfig";
import { navbarRoutes } from "../navigation/AppRouter";

export default function HomePage({}) {
  const navigate = useNavigate();

  console.log(navbarRoutes);

  return (
    <div>
      <BaseText fontColor={COLORS().Text} fontSize="50px">
        {" "}
        HomePage
      </BaseText>

      <button onClick={() => navigate(NAV.ABOUT)}>asdf</button>
    </div>
  );
}

import React, { useRef, useState } from "react";
import { COLORS } from "../constants/Color";

import BaseText from "../components/BaseText";
import { useNavigate } from "react-router";
import { NAV } from "../navigation/navigationConfig";
import { navbarRoutes } from "../navigation/AppRouter";
import ReactAudioPlayer from "react-audio-player";
import Mic from "../Icons/Mic";

import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

import { AudioVisualizer } from "react-audio-visualize";

export default function HomePage({}) {
  const navigate = useNavigate();

  const [audioRecorded, setAudioRecorded] = useState(false);

  const refreshPage = () => {
    window.location.reload();
  };

  const recorderControls = useAudioRecorder(
    {
      noiseSuppression: true,
      echoCancellation: true,
    },
    (err) => console.table(err) // onNotAllowedOrFound
  );
  const [blob, setBlob] = useState();
  const visualizerRef = useRef(null);

  const addAudioElement = (blob) => {
    setBlob(blob);
    setAudioRecorded(true);
  };

  return (
    <div>
      <BaseText fontColor={COLORS().Text} fontSize="50px">
        {" "}
        HomePage
      </BaseText>

      {blob && (
        <>
          <AudioVisualizer
            ref={visualizerRef}
            blob={blob}
            width={500}
            height={75}
            barWidth={1}
            gap={0}
            barColor={"#f76565"}
          />
          <ReactAudioPlayer src={URL.createObjectURL(blob)} autoPlay controls />
        </>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            transform: "scale(2)",
            alignItems: "center",
          }}
        >
          {!audioRecorded && (
            <>
              <Mic style={{ position: "absolute", pointerEvents: "none" }} />
              <AudioRecorder
                onRecordingComplete={(blob) => addAudioElement(blob)}
                recorderControls={recorderControls}
                showVisualizer={true}
              />
            </>
          )}
        </div>
      </div>
      <button onClick={() => navigate(NAV.ABOUT)}>asdf</button>
    </div>
  );
}

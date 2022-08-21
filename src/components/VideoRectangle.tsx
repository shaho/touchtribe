import { useEffect, useState } from "react";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
} from "video-react";
import _get from "lodash/get";
import styled from "styled-components";
import { useSelector } from "react-redux";

import HLSSource from "./HLSSource";
import { RootState } from "../types/state";

const Wrapper = styled.div`
  flex-shrink: 0;
  flex-basis: 70%;
  padding: 10px;
  margin: 1rem;
`;

export default function VideoRectangle() {
  const { videos, videoSelected } = useSelector((s: RootState) => s.player);
  const [videoSource, setVideoSource] = useState(null);

  useEffect(() => {
    setVideoSource(_get(videos, `${videoSelected}.path`, ""));
  }, [videoSelected, videoSource, videos]);

  return (
    <Wrapper>
      <Player>
        <HLSSource src={videoSource} />
        <ControlBar>
          <ReplayControl seconds={10} order={1.1} />
          <ForwardControl seconds={30} order={1.2} />
          <CurrentTimeDisplay order={4.1} />
          <TimeDivider order={4.2} />
          <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
          <VolumeMenuButton disabled />
        </ControlBar>
      </Player>
    </Wrapper>
  );
}

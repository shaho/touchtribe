import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import VideoList from "./VideoList";
import VideoRectangle from "./VideoRectangle";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 550px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export default function VideoPlayer() {
  return (
    <Wrapper>
      <Switch>
        <Route
          exact
          path={"/"}
          component={() => (
            <>
              <VideoRectangle />
              <VideoList />
            </>
          )}
        />
        <Route
          exact
          path={"/vidoes/:title"}
          component={() => (
            <>
              <VideoRectangle />
              <VideoList />
            </>
          )}
        />
      </Switch>
    </Wrapper>
  );
}

import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import actions from "../redux/actions";
import VideoThumbnail from "./VideoThumbnail";
import { RootState } from "../types/state";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 1rem;

  div.list {
    height: 550px;
    overflow-y: scroll;
  }
`;

const LoadMore = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export default function VideoList() {
  const { videos, videoSelected } = useSelector((s: RootState) => s.player);
  const dispatch = useDispatch();
  const history = useHistory();
  const offset = useSelector((s: RootState) => s.player.offset);

  return (
    <Wrapper>
      <div className="list">
        {videos.slice(0, offset).map((video: any, i: number) => {
          return (
            <VideoThumbnail
              key={`${video.name}-thumbnail`}
              name={video.name}
              selected={i === videoSelected}
              onClick={() => {
                dispatch({ type: actions.SELECT_VIDEO, payload: i });
                history.push(`/vidoes/${video.name.replaceAll(" ", "_")}`);
              }}
              src={video.thumbnail}
            />
          );
        })}
      </div>

      {videos.length > offset && (
        <LoadMore
          onClick={() => {
            dispatch({ type: actions.SET_OFFSET, payload: offset });
          }}
        >
          Load more
        </LoadMore>
      )}
    </Wrapper>
  );
}

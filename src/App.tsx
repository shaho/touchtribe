import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import actions from "./redux/actions";
import VideoPlayer from "./components/VideoPlayer";
import videoData from "./video-data.json";
import "video-react/dist/video-react.css";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.HYDRATE_VIDEO_DATA,
      payload: videoData.videos.sort((n, p) => n.name.localeCompare(p.name)),
    });
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Video Player</h1>
      </div>
      <div>
        <BrowserRouter>
          <VideoPlayer />
        </BrowserRouter>
      </div>
    </>
  );
}

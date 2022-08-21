/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen } from "@testing-library/react";

import VideoThumbnail from "./VideoThumbnail";

describe("Spinner Component", () => {
  test("renders", () => {
    const { container } = render(
      <VideoThumbnail
        src="https://fed-dss-challenge-qa.s3.amazonaws.com/assets/vid/1/how-a-watch-works-thumb.jpg"
        name="How a Watch Works"
        selected={true}
        onClick={() => {}}
      />,
    );
    expect(container).toBeTruthy();
    expect(container.querySelector("img")).toBeInTheDocument();
    expect(screen.getByText(/How a Watch Works/)).toBeTruthy();
  });
});

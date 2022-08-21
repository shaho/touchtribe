import React, { Component } from "react";

/*
    This file is based on an example from the video-react docs. See
    how just below this comment we destructure a variable called Hls
    off of window? That's a class provided by the hls.js library that
    lets us use HLS technology to load and play our videos.

    Long story short, HLS is a protocol that lets us divide and
    conquer video files or streams so that we can play them in the
    most efficient manner. You can read more about it here:
    https://en.wikipedia.org/wiki/HTTP_Live_Streaming
*/

const { Hls } = window;

interface HLSProps {
  src: string | null;
  type?: string;
  video?: HTMLVideoElement;
}

export default class HLSSource extends Component<HLSProps> {
  private hls: any;
  constructor(props: HLSProps) {
    super(props);
    this.hls = new Hls();
  }

  componentDidUpdate(prevProps: HLSProps) {
    const { src, video } = this.props;
    if (src !== prevProps.src) {
      if (Hls.isSupported()) {
        this.hls.loadSource(src);
        this.hls.attachMedia(video);
        this.hls.on(Hls.Events.MANIFEST_PARSED, async () => {
          if (this.props.video !== null) {
            await this.props.video?.play().catch((err) => {});
          }
        });
      }
    }
  }

  componentWillUnmount() {
    if (this.hls) {
      this.hls.destroy();
    }
  }

  render() {
    return (
      <source
        src={this.props.src!}
        type={this.props.type || "application/x-mpegURL"}
      />
    );
  }
}

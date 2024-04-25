"use client";
import ReactPlayer from "react-player";

export function Media() {
  return (
    <>
      <div id="media">
        <ReactPlayer
          controls={true}
          url="https://www.youtube.com/watch?v=61KV3jRzckM&t=72s"
        />
      </div>
    </>
  );
}

import React, { useRef, useState } from "react";

const MediaPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();

  const handlePlay = () => {
    const video = videoRef.current;
    isPlaying ? video.pause() : video.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video-player">
      <video width={400} ref={videoRef}>
        <source src="videos/planet.mp4" type="video/mp4" />
      </video>
      <button onClick={handlePlay}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default MediaPlayer;

"use client"
import React, { useRef, useState } from 'react'

function Videocomponent() {
    const [showControls, setShowControls] = useState(false);
    const [showPlayIcon, setShowPlayIcon] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
    const handleVideoClick = () => {
      setShowControls(true);
      setShowPlayIcon(false);
  
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
  
      setIsPlaying(!isPlaying);
    };
  return (
    <section className="infraCenterSection">
    <div className="gb_infraBoxTitle">
      <h5 className="gb_infraTitle">
        Version Next MadPopo Infrastructure Facility Center
      </h5>
    </div>
    <div className="centerVideo">
      <div className="row">
        <div className="col-lg-8 col-md-11 col-11 mx-auto">
          <div className="videoWrapper">
            <div
              className={`playIconWrapper ${showPlayIcon ? "" : "show"}`}
            >
              <div className="playIcon" onClick={handleVideoClick}></div>
            </div>
            <video
              ref={videoRef}
              id="my-video"
              className={`video-js ${
                showControls
                  ? "vjs-controls-enabled"
                  : "vjs-controls-disabled"
              }`}
              controls={showControls ? "controls" : ""}
              preload="auto"
              poster="/image/videos/thumbnail.png"
              data-setup=""
              loop
              onClick={handleVideoClick}
            >
              <source
                src="/image/videos/madpopo-data-center-video.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Videocomponent
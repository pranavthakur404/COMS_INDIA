import React from "react";
import BannerVideo from "../../assets/homeBanner.mp4";

const VideoComponent = () => {
  return (
    <div style={{ width: "100%" }}>
      <video width="100%" controls>
        <source src={BannerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;

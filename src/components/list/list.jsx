import React from "react";
import styles from "./list.module.css";
import VideoItem from "../item/video_item";

const List = ({ videos, onVideoClick, display }) => {
  const displayType = display === "list" ? styles.list : styles.grid;
  return (
    <ul className={`${styles.video_main_wrap} ${displayType}`}>
      {videos.map((video, index) => (
        <VideoItem
          key={index}
          video={video}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  );
};

export default List;

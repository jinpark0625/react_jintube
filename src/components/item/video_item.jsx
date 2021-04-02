import React, { memo } from "react";
import styles from "./video_item.module.css";

const VideoItem = memo(
  ({
    video,
    video: { snippet, statistics, channelInfo },
    onVideoClick,
    display,
  }) => {
    // 시간구하기
    const displayType = display === "list" ? styles.list : styles.grid;

    const date = new Date();
    const uploadDate = new Date(snippet.publishedAt);
    const iso = date.toISOString();
    const currentTime = date.getTime(iso);
    const uploadTime = uploadDate.getTime();
    const timeGap = currentTime - uploadTime;

    const hours = new Date(timeGap);
    const displayTime = hours.getHours();

    const checkTime = () => {
      if (displayTime === 0) {
        return "조금";
      } else if (displayTime > 24) {
        return displayTime / 24 + "일";
      } else {
        return displayTime + "시간";
      }
    };

    return (
      <li
        onClick={() => onVideoClick(video)}
        className={`${styles.video} ${displayType}`}
      >
        <figure className={`${styles.figure} ${displayType}`}>
          <img
            src={snippet.thumbnails.medium.url}
            alt="youtube_videos"
            className={`${styles.video_thumbnails} ${displayType}`}
          />
        </figure>
        <div className={`${styles.div} ${displayType}`}>
          <ul className={`${styles.video_text} ${displayType}`}>
            <li>
              <img
                src={
                  channelInfo.thumbnails.medium.url
                    ? channelInfo.thumbnails.medium.url
                    : ""
                }
                alt="profile_image"
                className={`${styles.channel_img} ${displayType}`}
              />
            </li>
            <li className={styles.video_list_wrap}>
              <p className={`${styles.video_titles} ${displayType}`}>
                {snippet.title}
              </p>
              <p className={`${styles.video_uploader} ${displayType}`}>
                {snippet.channelTitle}
              </p>
              <p className={`${styles.video_details} ${displayType}`}>
                조회수{" "}
                {statistics.viewCount > 10000
                  ? statistics.viewCount.slice(0, -4) + "만"
                  : statistics.viewCount}
                회 &#183; {checkTime()} 전
              </p>
            </li>
          </ul>
        </div>
      </li>
    );
  }
);

export default VideoItem;

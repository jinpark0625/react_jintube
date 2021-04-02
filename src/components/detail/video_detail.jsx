import React, { useRef, useEffect } from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({
  video,
  video: { snippet, channelInfo, statistics },
}) => {
  const publishedTime = channelInfo.publishedAt.slice(0, 10);

  const videoTop = useRef();

  const scrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollTop();
  }, [video]);

  return (
    <section className={styles.detail} ref={videoTop}>
      <div className={styles.video_container}>
        <iframe
          className={styles.video}
          type="text/html"
          title="youtube video player"
          width="100%"
          height="600px"
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <ul className={styles.title_part_wrap}>
        <li className={styles.fc}>
          <h3 className={styles.detail_title}>
            {snippet.title}
            <p>
              조회수{" "}
              {statistics.viewCount > 10000
                ? statistics.viewCount.slice(0, -4) + "만"
                : statistics.viewCount}
              회 &#183; {publishedTime}
            </p>
          </h3>
        </li>
        <li className={styles.sc}>
          <ul className={styles.like_icons}>
            <li>
              <i className="far fa-thumbs-up"></i>
            </li>
            <li>
              <i className="far fa-thumbs-down"></i>
            </li>
            <li>
              <i className="far fa-share-square"></i>
            </li>
            <li>
              <i className={`fas fa-ellipsis-h ${styles.lastIcon}`}></i>
            </li>
          </ul>
        </li>
      </ul>
      <ul className={styles.channel_desc_wrap}>
        <li className={styles.channel_img}>
          <img src={channelInfo.thumbnails.default.url} alt="" />
        </li>
        <li>
          <h4 className={styles.channel_name}>{snippet.channelTitle}</h4>
          <p className={styles.published_date}>
            구독자{" "}
            {statistics.subscriberCount > 10000
              ? statistics.subscriberCount.slice(0, -4) + "만"
              : statistics.subscriberCount}
            명
          </p>
          <p className={styles.channel_info}>{snippet.description}</p>
        </li>
        <li>
          <span className={styles.subscribe_btn}>Subscribe</span>
        </li>
      </ul>
    </section>
  );
};
export default VideoDetail;

import React, { useState, useEffect, useCallback } from "react";
import Nav from "./components/search/nav";
import List from "./components/list/list";
import Aside from "./components/aside/aside";
import styles from "./app.module.css";
import VideoDetail from "./components/detail/video_detail";

const App = ({ youtube }) => {
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const randomNum = Math.random() * 1000;

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback(
    (query) => {
      setLoading(false);
      setSelectedVideo(null);
      youtube
        .search(query) //
        .then((videos) => {
          setLoading(true);
          setVideos(videos);
        });
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => {
        setLoading(true);
        setVideos(videos);
      });
  }, [youtube]);

  return (
    <>
      <Nav onSearch={search}></Nav>
      <main className={styles.main}>
        {selectedVideo ? (
          <></>
        ) : (
          <>
            <Aside></Aside>
          </>
        )}
        {loading ? (
          <>
            {selectedVideo && (
              <div className={styles.detail}>
                <VideoDetail video={selectedVideo} />
              </div>
            )}
            <List
              key={randomNum}
              videos={videos}
              onVideoClick={selectVideo}
              display={selectedVideo ? "list" : "grid"}
            ></List>
          </>
        ) : (
          <span className={styles.loading}>
            <i className="fas fa-spinner fa-5x fa-spin"></i>
          </span>
        )}
      </main>
    </>
  );
};

export default App;

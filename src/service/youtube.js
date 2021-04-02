class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
    this.channelList = [];
    this.finalList = [];
    this.channels = {};
  }
  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: "25",
        regionCode: "KR",
      },
    });

    this.finalList = [];
    response.data.items.map((item) => {
      return this.finalList.push(this.channel(item.snippet.channelId, item));
    });
    return Promise.all(this.finalList).then((values) => values);
  }

  async search(query) {
    const channelList = [];
    const newList = [];
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        q: query,
        maxResults: "25",
        type: "video",
      },
    });
    const changedId = [];

    response.data.items.map((item) => {
      return changedId.push({ ...item, id: item.id.videoId });
    });

    this.finalList = [];

    changedId.map((item) => {
      return this.finalList.push(this.channel(item.snippet.channelId, item));
    });
    return Promise.all(this.finalList).then((values) => values);
  }

  async channel(id, videos) {
    const response = await this.youtube.get("channels", {
      params: {
        part: "snippet, statistics",
        id,
      },
    });

    if (response.data.items[0].hasOwnProperty("snippet")) {
      response.data.items[0].channelInfo = response.data.items[0].snippet;
      delete response.data.items[0].snippet;
    }

    return (this.channels = { ...response.data.items[0], ...videos });
  }
}

export default Youtube;

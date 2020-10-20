import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './viderDetail';
import { useState } from 'react';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideos] = useState(null);

  useEffect(() => {
    onTermSubmit('buildings');
  }, []);

  const onTermSubmit = async (myInput) => {
    const response = await youtube.get('/search', {
      params: {
        q: myInput,
      },
    });

    setVideos(response.data.items);
    setSelectedVideos(response.data.items[0]);
  };

  return (
    <div className="ui container">
      <SearchBar callMeWhenSubmitted={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideos} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

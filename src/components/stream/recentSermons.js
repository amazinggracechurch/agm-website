import React, { useState, useEffect } from 'react';

const YouTubeLivestreams = ( { apiKey, channelId } ) => {
  const [ videos, setVideos ] = useState( [] );

  useEffect( () => {
    const getLivestreams = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${ channelId }&eventType=completed&type=video&order=date&maxResults=3&key=${ apiKey }`
      );
      const data = await response.json();
      setVideos( data.items );
    };
    getLivestreams();
  }, [ apiKey, channelId ] );

  return (
    <div>
      {videos.map( video => (
        <iframe
          key={video.id.videoId}
          title={video.snippet.title}
          src={`https://www.youtube.com/embed/${ video.id.videoId }`}
          allowFullScreen
          style={{ border: 0 }}
        />
      ) )}
    </div>
  );
};

export default YouTubeLivestreams;

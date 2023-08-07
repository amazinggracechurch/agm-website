import React, { useState, useEffect } from 'react';

const YouTubeLivestreams = ( { apiKey, channelId } ) => {
  const [ videos, setVideos ] = useState( [] );

  useEffect( () => {
    const getLivestreams = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${ channelId }&eventType=completed&type=video&order=date&maxResults=3&key=${ apiKey }`
      );
      const data = await response.json();
      // setVideos( data.items );
      const sundayVideos = data.items.filter( ( item ) => {
        const publishedAt = new Date( item.snippet.publishedAt );
        return publishedAt.getDay() === 0;
      } );
      setVideos( sundayVideos );
    };
    getLivestreams();
  }, [ apiKey, channelId ] );

  return (
    <div>
      { videos.map( video => (
        <iframe
          className="video-container"
          key={ video.id.videoId }
          title={ video.snippet.title }
          src={ `https://www.youtube.com/embed/${ video.id.videoId }` }
          allowFullScreen
        />
      ) ) }
    </div>
  );
};

export default YouTubeLivestreams;

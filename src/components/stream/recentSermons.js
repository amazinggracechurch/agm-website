import React, { useState, useEffect, useRef } from 'react';
import './recentSermons.css';

const YouTubeLivestreams = ( { apiKey, channelId } ) => {
  const [ videos, setVideos ] = useState( [] );
  const scrollContainerRef = useRef( null );

  useEffect( () => {

    const getLivestreams = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${ channelId }&eventType=completed&type=video&order=date&maxResults=9&key=${ apiKey }`
      );

      const data = await response.json();

      const sundayVideos = data.items.filter( ( item ) => {
        const publishedAt = new Date( item.snippet.publishedAt );
        return publishedAt.getDay() === 0;
      } );

      // Sort videos by date, latest first
      sundayVideos.sort( ( a, b ) => new Date( b.snippet.publishedAt ) - new Date( a.snippet.publishedAt ) );
      setVideos( sundayVideos );
    };
    getLivestreams();
  }, [ apiKey, channelId ] );

  const scrollLeft = () => {
    if ( scrollContainerRef.current ) {
      scrollContainerRef.current.scrollBy( { left: -300, behavior: 'smooth' } );
    }
  };

  const scrollRight = () => {
    if ( scrollContainerRef.current ) {
      scrollContainerRef.current.scrollBy( { left: 300, behavior: 'smooth' } );
    }
  };

  return (
    <div>
    <h3>Latest Sermon</h3>
      { videos.length > 0 && (
        <iframe
          className="featured-video-container"
          key={ videos[ 0 ].id.videoId }
          title={ videos[ 0 ].snippet.title }
          src={ `https://www.youtube.com/embed/${ videos[ 0 ].id.videoId }` }
          allowFullScreen
        />
      ) }
      <h3>Recent Sermons</h3>
      <div className="scroll-buttons-container">
        <button onClick={ scrollLeft } className="scroll-button left">&lt;</button>
        <div className="horizontal-scroll-container" ref={ scrollContainerRef }>
          { videos.slice( 1 ).map( video => (
            <iframe
              className="video-container"
              key={ video.id.videoId }
              title={ video.snippet.title }
              src={ `https://www.youtube.com/embed/${ video.id.videoId }` }
              allowFullScreen
            />
          ) ) }
        </div>
        <button onClick={ scrollRight } className="scroll-button right">&gt;</button>
      </div>
    </div>
  );
};

export default YouTubeLivestreams;

import React, { useState, useEffect } from 'react';
import Nav from '../../nav/nav';
import Footer from '../../footer/footer';

export default function Livestream() {
  const [ video, setVideo ] = useState( null );

  useEffect( () => {
    fetchVideo();
  } );

  const fetchVideo = async () => {
    const channelId = process.env.REACT_APP_CHANNEL_ID;
    const apiKey = process.env.REACT_APP_API_KEY;
    const baseUrl = 'https://www.googleapis.com/youtube/v3';

    try {
        // Check for live video
        let response = await fetch( `${ baseUrl }/search?part=snippet&channelId=${ channelId }&eventType=live&type=video&key=${ apiKey }` );
        let data = await response.json();

        if ( data?.items?.length === 0 ) {
            // Fetch video from the previous Sunday if no live video is found
            const lastSunday = getLastSunday();
            response = await fetch( `${ baseUrl }/search?part=snippet&channelId=${ channelId }&publishedAfter=${ lastSunday.toISOString() }&maxResults=1&order=date&type=video&key=${ apiKey }` );
            data = await response.json();
        }

        if ( data?.items?.length > 0 ) {
            setVideo( data.items[ 0 ] );
        }
    } catch ( error ) {
        console.error( 'Error fetching video:', error );
    }
};

const getLastSunday = () => {
    const today = new Date();
    const lastSunday = new Date( today.setDate( today.getDate() - today.getDay() ) );
    lastSunday.setHours( 0, 0, 0, 0 ); // Reset time to start of the day
    return lastSunday;
};

  return (
    <>
      <Nav />
      <div className="main-img half-section page-header-container">
        <h1>Livestream</h1>
      </div>
      { video && (
          <div style={ { 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '50px'
          } }>
              {/* <h2>{ video.snippet.title }</h2> */}
              <iframe
                  width="800"
                  height="450"
                  style={ { borderRadius: '10px' } }
                  src={ `https://www.youtube.com/embed/${ video.id.videoId }` }
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
              ></iframe>
          </div>
      ) }
      <Footer />
    </>  
  );
}
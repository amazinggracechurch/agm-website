document.addEventListener( 'DOMContentLoaded', function() {
    const lazyBackgrounds = document.querySelectorAll( '.lazy-background' );
  
    const lazyLoad = target => {
      const io = new IntersectionObserver( ( entries, observer ) => {
        entries.forEach( entry => {
          if ( entry.isIntersecting ) {
            const img = entry.target;
            const src = img.getAttribute( 'data-src' );
  
            img.style.backgroundImage = `url('${ src }')`;
  
            observer.disconnect();
          }
        } );
      } );
  
      io.observe( target );
    };
  
    lazyBackgrounds.forEach( lazyLoad );
  } );
  
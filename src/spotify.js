window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQBrkVF8OuAezCa6gZfB6UnhuhLiY5SrGuOYTqIMFtkgFg5Djd-jlHqan3OPcid1ZognLAoeBQGGX6LSk0lsoB0_JsvuKsF2piMJ8aYU9SNgxsf_KWvkqjmaiWTBoNPGw-JGx_aJLfGUcSLL88T_NZ5EALg56ybZ';
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); }
    });
  
    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });
  
    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });
  
    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });
  
    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });
  
    // Connect to the player!
    player.connect();
  };
import { useEffect, useState } from 'react';
import PlaylistItem from './playlist-item/playlist-item';
import contentStyles from '../centerblock/centerblock-content/content.module.css';

function Playlist() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch('https://painassasin.online/catalog/track/all/')
      .then((response) => response.json())
      .then((data) => setTracks(data));
  }, []);

  const elements = tracks?.map((item) => (
    <PlaylistItem item={item} key={item.id} />
  ));

  return <div className={`${contentStyles.playlist} playlist`}>{elements}</div>;
}

export default Playlist;

'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';


const AudioPlayer = () => {
  const [audioSrc, setAudioSrc] = useState('');

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/audio', {
          responseType: 'blob'
        });
        const url = URL.createObjectURL(new Blob([response.data]));
        setAudioSrc(url);
      } catch (error) {
        console.error('Error fetching audio:', error);
      }
    };

    fetchAudio();
  }, []);

  return (
    <div>
      {audioSrc ? (
        <audio controls>
          <source src={audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      ) : (
        <p>Loading audio...</p>
      )}
    </div>
  );
};

export default AudioPlayer;
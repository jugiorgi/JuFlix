import React from 'react';
import { VideoCardContainer } from './styles';

function VideoCard({ videoURL, videoImage, categoryColor }) {

  return (
    <VideoCardContainer
      url={videoImage}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
    />
  );
}

export default VideoCard;

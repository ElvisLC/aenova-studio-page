import React, { useEffect, useRef, useState } from 'react';
import ImagePlaceholder from './ImagePlaceholder.jsx';
import { IconPlay, IconClose } from './Icons.jsx';

export default function ProjectMedia({ type = 'image', src, poster, alt, width, height, ratio = '16/10' }) {
  const previewRef = useRef(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [previewPlaying, setPreviewPlaying] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxOpen]);

  if (type === 'video' && src) {
    const playPreview = () => {
      const video = previewRef.current;
      if (video) video.play().catch(() => {});
      setPreviewPlaying(true);
    };
    const pausePreview = () => {
      const video = previewRef.current;
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      setPreviewPlaying(false);
    };
    // No mouse on mobile: tapping the media toggles the same preview a hover
    // would trigger on desktop. The play button always opens the full lightbox.
    const handleContainerClick = () => {
      if (previewPlaying) pausePreview();
      else playPreview();
    };
    const handlePlayButtonClick = (e) => {
      e.stopPropagation();
      pausePreview();
      setLightboxOpen(true);
    };

    return (
      <>
        <div
          className={`project-media${previewPlaying ? ' is-playing' : ''}`}
          style={{ aspectRatio: ratio }}
          onMouseEnter={playPreview}
          onMouseLeave={pausePreview}
          onClick={handleContainerClick}
        >
          <video ref={previewRef} src={src} poster={poster} muted loop playsInline preload="metadata" width={width} height={height} aria-label={alt} />
          <span className="project-media-play" onClick={handlePlayButtonClick}><IconPlay /></span>
        </div>

        {lightboxOpen && (
          <div className="media-lightbox" onClick={() => setLightboxOpen(false)}>
            <div className="media-lightbox-content" onClick={(e) => e.stopPropagation()}>
              <span className="media-lightbox-close" onClick={() => setLightboxOpen(false)}><IconClose /></span>
              <video src={src} controls autoPlay />
            </div>
          </div>
        )}
      </>
    );
  }

  if (src) {
    return (
      <div className="project-media" style={{ aspectRatio: ratio }}>
        <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
      </div>
    );
  }

  return <ImagePlaceholder label={alt} ratio={ratio} />;
}

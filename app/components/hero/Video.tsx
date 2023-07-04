'use client';

const Video = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-neutral-800 bg-opacity-25" />
      <video
        src="/videos/tesla-video.webm"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
    </>
  );
};

export default Video;

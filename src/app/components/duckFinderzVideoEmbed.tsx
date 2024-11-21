import React from 'react'

const DuckFinderzVideo = () => {
  const embedUrl =
    'https://www.loom.com/embed/347847eb94ef4a2da0bc03813e62884a?sid=87c05796-75f8-4723-a718-fe81d8af6247'
  return (
    <div
      className="video-duckFinderz"
      style={{
        position: 'relative',
        paddingBottom: '56.25%',
        height: 0,
        overflow: 'hidden',
      }}
    >
      <iframe
        src={embedUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: '5rem',
          width: '40rem',
          height: '22.6rem',
        }}
        title="Loom Video"
      />
    </div>
  )
}

export default DuckFinderzVideo

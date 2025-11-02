import { useState, useEffect, CSSProperties } from 'react';

const galleryImages = [
  '/images/cafe/bar%20stool.jpg',
  '/images/cafe/all%20items.jpg',
  '/images/cafe/waffle%20landscape.jpg',
  '/images/cafe/seating%20image.jpg',
  '/images/cafe/one%20chair.jpg',
  '/images/cafe/display%20.jpg',
];

const SLIDE_INTERVAL = 3000;

const carouselStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  maxWidth: '90vw',
  height: '70vh',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#111',
  borderRadius: 16,
  overflow: 'hidden',
};

const Gallery = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % galleryImages.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => setCurrent(idx);
  const goLeft = () => setCurrent(current === 0 ? galleryImages.length - 1 : current - 1);
  const goRight = () => setCurrent((current + 1) % galleryImages.length);

  return (
    <section style={{ padding: '3rem 1rem', background: '#000', color: '#fff' }}>
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-yellow-500 text-center">Virtual cafe tour</h2>
      <div style={carouselStyle}>
        <img
          src={galleryImages[current]}
          alt={`Cafe view ${current + 1}`}
          style={{
            height: '100%',
            width: 'auto',
            maxWidth: '100%',
            objectFit: 'contain',
            display: 'block',
            background: '#222',
            margin: '0 auto',
          }}
        />
        {/* Left arrow */}
        <button
          onClick={goLeft}
          style={{
            position: 'absolute',
            top: '50%',
            left: 16,
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.4)',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: 36,
            height: 36,
            fontSize: 24,
            cursor: 'pointer',
            zIndex: 1,
          }}
          aria-label="Previous image"
        >&#8592;</button>
        {/* Right arrow */}
        <button
          onClick={goRight}
          style={{
            position: 'absolute',
            top: '50%',
            right: 16,
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.4)',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: 36,
            height: 36,
            fontSize: 24,
            cursor: 'pointer',
            zIndex: 1,
          }}
          aria-label="Next image"
        >&#8594;</button>
      </div>
      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
        {galleryImages.map((_, idx: number) => (
          <div
            key={idx}
            onClick={() => goTo(idx)}
            style={{
              height: 12,
              width: 12,
              borderRadius: '50%',
              background: idx === current ? '#FFD600' : '#ddd',
              margin: '0 6px',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;

const EasterEgg = () => {
  return (
    <div style={{
      margin: 0,
      padding: 0,
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: '#000'
    }}>
      <img 
        src="/artefacts/dollarbill.jpg" 
        alt="Dollar Bill" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }}
      />
    </div>
  );
};

export default EasterEgg;

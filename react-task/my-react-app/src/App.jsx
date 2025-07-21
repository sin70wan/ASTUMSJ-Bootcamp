import React, { useState } from 'react';
import ColorButton from './components/ColorButton';
import ColorPreview from './components/ColorPreview';



function App() {
  const [selectedColor, setSelectedColor] = useState(null);

  const colors = ['red', 'green', 'blue'];

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleReset = () => {
    setSelectedColor(null);
  };

  return (
    
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>🎨 Color Palette Picker</h1>
      <div>
        {colors.map((color) => (
          <ColorButton key={color} color={color} onClick={handleColorSelect} />
        ))}
      </div>

      
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
  <ColorPreview color={selectedColor} />
</div>

</div>

      <button
        onClick={handleReset}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#444',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;

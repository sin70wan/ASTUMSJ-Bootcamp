

function ColorPreview({ color }) {
  const previewStyle = {
    width: '200px',
    height: '200px',
    marginTop: '20px',
    backgroundColor: color || '#ccc',
    border: '2px solid #888',
    borderRadius: '50%',
  };

  return <div style={previewStyle}></div>;
  
}

export default ColorPreview;



function ColorButton({ color, onClick }) {
  return (
    <button
      onClick={() => onClick(color)}
      style={{
        backgroundColor: color,
        color: 'white',
        border: 'none',
        margin: '5px',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      {color}
    </button>
  );
}

export default ColorButton;

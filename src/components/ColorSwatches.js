import styled from "styled-components";

const ColorSwatches = ({ selectColor, selectedColor }) => {
  const colors = [
    "#000000",
    "#FF0000",
    "#E62993",
    "#8F3FB5",
    "#004CFF",
    "#3FA1B5",
    "#42B836",
    "#FFFFFF"
  ];

  const handleColorPick = (color) => {
    selectColor(color);
  };
  return (
    <div>
      <SwatchesContainer>
        {colors.map((color, id) => {
          let baseColor = { backgroundColor: color };
          if (color.toLowerCase() === selectedColor.toLowerCase()) {
            baseColor.border = "2px solid blue";
            baseColor.borderRadius = "10px";
          }
          return (
            <Button
              key={id}
              style={baseColor}
              onClick={() => {
                handleColorPick(color);
              }}
            ></Button>
          );
        })}
      </SwatchesContainer>
      <div></div>
    </div>
  );
};

export default ColorSwatches;

const SwatchesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  cursor: pointer;
  width: 40px;
  height: 25px;
`;

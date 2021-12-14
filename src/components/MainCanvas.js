import React, { useState } from "react";
import styled from "styled-components";
import CanvasDraw from "react-canvas-draw";
import ColorPicker from "./ColorPicker";
import BrushSlider from "./BrushSlider";
import ColorSwatches from "./ColorSwatches";
import HistoryBox from "./HistoryBox";

function MainCanvas() {
  const [brushSize, setBrushSize] = useState(5);
  const [brushColor, setBrushColor] = useState("#FF0000");
  const [lines, setLines] = useState("");

  const updateCanvas = (canvasDraw) => (this.modify = canvasDraw);
  const canvasProperties = {
    brushColor: brushColor,
    brushRadius: brushSize,
    saveData: null,
    ref: updateCanvas,
    lazyRadius: 0.5,
    gridSizeX: 25,
    gridSizeY: 25,
    gridLineWidth: 1,
    hideGridX: false,
    hideGridY: false,
    enablePanAndZoom: true,
    canvasWidth: 500,
    canvasHeight: 500,
    onChange: null
  };
  const updateSize = (value) => {
    setBrushSize(value);
  };
  const handleColorChange = (color) => {
    setBrushColor(color.hex8String);
  };

  const handleSwatchChange = (color) => {
    setBrushColor(color);
  };

  const changeHere = (val) => {
    setLines(this.modify.getSaveData());
  };

  // const toolbarBtn = [
  //   {
  //     name: "",
  //     icon: ""
  //   }
  // ];

  // const handleClick = (event) => {
  //   console.log(event);
  //   const yCoord = event.y;
  //   const xCoord = event.x;
  //   console.log(
  //     "Y Coordinate = " + yCoord + "\n X Coordinate = " + xCoord + "."
  //   );

  //   switch (event.which) {
  //     case 1: {
  //       console.log("Left Mouse button pressed.");
  //       break;
  //     }
  //     case 2: {
  //       console.log("Middle Mouse button pressed.");
  //       break;
  //     }
  //     case 3: {
  //       console.log("Right Mouse button pressed.");
  //       break;
  //     }
  //     default: {
  //       console.log("You have a strange Mouse!");
  //     }
  //   }
  // };

  return (
    <Container>
      <div className="m-8 flex">
        <input type="checkbox" id="drawer-toggle" name="drawer-toggle" />
        <label htmlFor="drawer-toggle" id="drawer-toggle-label"></label>
        <div id="drawer" className="border mx-2 w-64 rounded">
          <ColorSwatches
            selectedColor={brushColor}
            selectColor={handleSwatchChange}
          />
          <div className="py-4 px-1">
            <ColorPicker color={brushColor} onColorChange={handleColorChange} />
          </div>
          <BrushSlider updateAttribute={updateSize} />
          <button
            className="m-4 px-2 py-1 border rounded-lg"
            onClick={() => {
              this.modify.undo();
            }}
          >
            UNDO
          </button>
          <button
            className="m-4 px-2 py-1 border rounded-lg"
            onClick={() => {
              this.modify.clear();
            }}
          >
            CLEAR
          </button>
          <button
            className="m-4 px-2 py-1 border rounded-lg"
            onClick={() => {
              // console.log(this.modify.getDataURL());
              // console.log(this.modify.getSaveData());
              setLines(this.modify.getSaveData());
            }}
          >
            SAVE
          </button>
        </div>
        <div className="mx-2">
          <CanvasDraw
            {...canvasProperties}
            onChange={() => setLines(this.modify.getSaveData())}
            // onMouseUp={(e) => handleClick(e.nativeEvent)}
          />
        </div>
        <div className="border-2 w-1/3">
          <HistoryBox lineHistory={lines} />
        </div>
      </div>
    </Container>
  );
}

export default MainCanvas;

const Container = styled.div`
  border: solid;
`;

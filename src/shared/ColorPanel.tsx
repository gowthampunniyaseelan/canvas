import { 
  useDispatch 
} from "react-redux"
import { 
  setStrokeColor 
} from "../actions"



const COLORS = [
  "#000000",
	"#0000FF",
  "#808080",
	"#008000",
	"#800080",
	"#FF0000",
  "#FFFFFF",
  "#F0F8FF",
  "#FF7F50",
  "#B22222",
  "#FF69B4",
  "#FFFACD",
  "#FFD700",
  "#DAA520",
  "#CD5C5C",
  "#F08080",
  "#FA8072",
  "#E9967A",
  "#FFA07A",
  "#FF4500",
  "#FF8C00",


  
]


export const ColorPanel = () => {
  const dispatch = useDispatch();
const onColorChange = (
  color: string
) => {
  dispatch(setStrokeColor(color));
};
  // ...
  return (
    <div 
      className="window colors-panel">
      <div className="title-bar">
        <div 
          className="title-bar-text">
          Colors
        </div>
      </div>
      <div 
        className="window-body colors">
        {COLORS.map(
          (color: string) => (
          <div
            key={color}
            onClick={() => {
              onColorChange(color);
            }}
            className="color"
            style={{
              backgroundColor: color,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
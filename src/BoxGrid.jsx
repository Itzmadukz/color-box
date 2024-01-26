import Box from "./Box";
import "./BoxGrid.css";

function BoxGrid({ colors }) {

    const boxes = [];
    for (let i = 0; i < 25; i++) {
        boxes.push(<Box colors={colors} />);
    }
    return <div className="BoxGrid">{boxes}</div>;
}


export default BoxGrid;
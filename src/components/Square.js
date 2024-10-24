import "./Style.css";

const Square = ({ value, idx, handleSquareClick }) => {

    const renderSwitch = (value) => {
        switch (value) {
        case 1:
            return <div id="grid-square-1" className="grid-square cross"></div>;
        case 2:
            return <div id="grid-square-1" className="grid-square circle"></div>;
        default:
            return (
                <div id="grid-square-1" className="grid-square" onClick={(e) => handleSquareClick(e, idx)} />
            );
        }
    };

    return <> { renderSwitch(value) } </>;
};

export default Square;
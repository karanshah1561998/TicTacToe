import "./Style.css";
import { useState } from "react";

const Modal = ({ handleNamesInput }) => {

    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");

    const handleFirstNameInput = (e) => {
        e.preventDefault();
        let firstNa = e.target.value.trim();
        setFirstName(firstNa);
    };

    const handleSecondNameInput = (e) => {
        e.preventDefault();
        let secondNa = e.target.value.trim();
        setSecondName(secondNa);
    };

    return (
        <div id="modal">
            <div id="modal-content">
                <h2> Enter Player Name </h2>
                <form>
                    <label htmlFor="player1"> Player 1 </label>
                    <input type="text" id="player1" name="Player 1" placeholder="Player 1" maxLength="10" required value={firstName} onChange={handleFirstNameInput} />
                    
                    <label htmlFor="player2">Player 2</label>
                    <input type="text" id="player2" name="Player 2" placeholder="Player 2" maxLength="10" required value={secondName} onChange={handleSecondNameInput} />
                    
                    <input type="submit" value="Start Game" onClick={(e) => { e.preventDefault(); handleNamesInput( firstName, secondName); }} />
                </form>
            </div>
        </div>
    );
};

export default Modal;
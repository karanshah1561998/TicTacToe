import Grid from "./Grid";
import Modal from "./Modal";
import { useState } from "react";

const Game = () => {

    const [mountModalView, setMountModalView] = useState(false);
    const [hasGameStarted, setHasGameStarted] = useState(false);
    const [firstPlayerName, setFirstPlayerName] = useState("Player 1");
    const [secondPlayerName, setSecondPlayerName] = useState("Player 2");

    const handleNamesInput = (first, second) => {
        setFirstPlayerName(first);
        setSecondPlayerName(second);
        setMountModalView(false);
        setHasGameStarted(true);
    };

    const mountModal = () => {
        setMountModalView(true);
    };

    return (
        <>
            { mountModalView && (
                <Modal handleNamesInput={handleNamesInput} />
            )}
            <Grid mountModal={mountModal} hasGameStarted={hasGameStarted} firstPlayerName={firstPlayerName} secondPlayerName={secondPlayerName} />
        </>
    );
};

export default Game;
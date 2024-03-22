import React, {useState, useEffect} from "react";

const Game = () => {
    const [startGame, setStartGame] = useState(false);
    const [ballPosition, setBallPosition] = useState({x : 0, y : 0});
    const [hasMoved, setHasMoved] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowRight" && startGame && !hasMoved) {
                setBallPosition((prevPosiotion) => ({
                    ...prevPosiotion,
                    x: prevPosiotion.x + 5;
                }));
                setHasMoved(true);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [startGame, hasMoved]);

    const handleKeyDown = () => {
        setStartGame(true);
    };

    return (
        <div>
            {!startGame ? (
                <button className="start" onClick={handleKeyDown}>
                    Start
                </button>
            ) : (
                <div
                    className="ball"
                    style={{
                        position: "absolute",
                        top: `${ballPosition.y}px`,
                        left: `${ballPosition.x}px`,
                    }}
                />
            )}
        </div>
    );
};

export default Game;
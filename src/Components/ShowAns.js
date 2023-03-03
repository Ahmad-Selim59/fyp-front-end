import React from "react";
import { checkWinOrLose } from "../Utilities/win-or-lose";
import { IoLogoGameControllerA } from "react-icons/io";

const ShowAns = ({ playNext, selectedWord, correctLetters, wrongLetters }) => {
  const existing = [
    ...(JSON.parse(localStorage.getItem("hangmanwords")) || []),
  ];
  let ansMessage = "";
  let ans = "";

  if (checkWinOrLose(correctLetters, wrongLetters, selectedWord) === "win") {
    ansMessage = "Congratulations! You won.";
  } else if (
    checkWinOrLose(correctLetters, wrongLetters, selectedWord) === "lose"
  ) {
    ansMessage = "Sorry! You lost.";
    ans = `The ans was: ${selectedWord}`;
  }

  if (
    existing.length >= 5 &&
    checkWinOrLose(correctLetters, wrongLetters, selectedWord) === "win"
  ) {
    ansMessage =
      "Congratulations! You won the game. You have completed all the words.";
  }
  if (
    existing.length >= 5 &&
    checkWinOrLose(correctLetters, wrongLetters, selectedWord) === "lose"
  ) {
    ansMessage = "Sorry! You lost. You have completed all the words.";
  }

  return (
    <div
      className="popup-container"
      style={ansMessage !== "" ? { display: "flex" } : {}}
    >
      <div
        className="popup"
        style={{
          padding: "0px",
        }}
      >
        <IoLogoGameControllerA
          size={74}
          style={{
            color: "green",
            paddingTop: "30px",
          }}
        />
        <h2
          style={{
            marginTop: "0px",
          }}
        >
          {ansMessage}
        </h2>
        <h3>{ans ? ans : ""}</h3>
        <button
          onClick={() => playNext(ansMessage)}
          style={{
            width: "100%",
            borderRadius: "0px",
            padding: "20px 0",
            backgroundColor: "#3498db",
            color: "#fff",
          }}
        >
          {" "}
          {ansMessage ===
          "Congratulations! You won the game. You have completed all the words."
            ? "Game Over"
            : ansMessage ===
              "Sorry! You lost. You have completed all the words."
            ? "Game Over"
            : "Play Next"}{" "}
        </button>
      </div>
    </div>
  );
};

export default ShowAns;

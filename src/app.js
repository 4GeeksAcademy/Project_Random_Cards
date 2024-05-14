/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here

  let generateRandomSuit = () => {
    let suits = ["♦", "♥", "♠", "♣"];
    let randomIndexSuit = Math.floor(Math.random() * suits.length);
    let topSuitElement = document.querySelector(".top");
    let bottomSuitElement = document.querySelector(".bottom");
    if (suits[randomIndexSuit] === "♠" || suits[randomIndexSuit] === "♣") {
      topSuitElement.style.color = "black";
      bottomSuitElement.style.color = "black";
    }
    return suits[randomIndexSuit];
  };

  let randomSuit = generateRandomSuit();
  document.querySelector(".top").textContent = randomSuit;
  document.querySelector(".bottom").textContent = randomSuit;

  let generateRandomNumber = () => {
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let randomIndexNumber = Math.floor(Math.random() * numbers.length);
    return numbers[randomIndexNumber];
  };

  let randomNumber = generateRandomNumber();
  document.querySelector(".number").textContent = randomNumber;
};

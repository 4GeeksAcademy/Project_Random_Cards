/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  console.log("hello");
  //write your code here
  // document.querySelector(".card").classList.add(generateRandomSuit());
  // document.querySelector(".card").innerHTML = generateRandomNumber();

  let generateRandomSuit = () => {
    let suit = ["♦", "♥", "♠", "♣"];
    let indexSuit = Math.floor(Math.random() * suit.length);
    console.log(suit[indexSuit]);
    return suit[indexSuit];
  };
  generateRandomSuit();

  let randomSuit = generateRandomSuit();
  document.querySelector(".top").textContent = randomSuit;
  document.querySelector(".bottom").textContent = randomSuit;
  let generateRandomNumber = () => {
    let number = [
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
    let indexNumber = Math.floor(Math.random() * number.length);
    return number[indexNumber];
  };

  let randomNumber = generateRandomNumber();
  document.querySelector(".number").textContent = randomNumber;
};

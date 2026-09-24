const firstRow = "Slow and steady wins the race";
const secondRow = "You can say that again";

function countLetters(row, letter) {
  let count = 0;

  for (let i = 0; i < row.length; i++) {
    if (row.charAt(i).toLowerCase() === letter.toLowerCase()) {
      count = count + 1;
    }
  }

  return count;
}

function getRow(firstRow, secondRow) {
  const first = countLetters(firstRow, "a");
  const second = countLetters(secondRow, "a");

  if (second > first) {
    return secondRow;
  } else {
    return firstRow;
  }
}

console.log(getRow(firstRow, secondRow));

function showResult() {
  const result = getRow(firstRow, secondRow);
  document.getElementById("result").innerText = "Більше літери 'a' у рядку: " + result;
}

function startInteractive() {
  const row1 = prompt("Введіть перший рядок:");
  const row2 = prompt("Введіть другий рядок:");
  const letter = prompt("Яку літеру рахувати?");

  const count1 = countLetters(row1, letter);
  const count2 = countLetters(row2, letter);

  if (count2 > count1) {
    alert("Більше літери '" + letter + "' у другому рядку: " + row2);
  } else {
    alert("Більше літери '" + letter + "' у першому рядку: " + row1);
  }
}

let count = 0;

const values = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// console.log(btns);
// we use query selector all

btns.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      values.style.color = "green";
    } else if (count < 0) {
      values.style.color = "red";
    } else {
      values.style.color = "black";
    }

    values.textContent = count;
  });
});

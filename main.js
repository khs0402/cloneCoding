const input = document.getElementById("input");
const x = document.getElementById("x");
const bt = document.getElementById("bt");

const X = () => {
  if (input.value) {
    x.style.visibility = "visible";
    bt.style.borderRight = "solid 1px #dadce0";
  } else {
    x.style.visibility = "hidden";
    bt.style.borderRight = "solid 0 #dadce0";
  }
};

const Remove = () => {
  input.value = "";
  x.style.visibility = "hidden";
  bt.style.borderRight = "solid 0px #dadce0";
};

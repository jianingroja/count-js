window.onload = function () {
  document.getElementById("plus").addEventListener("click", plus);
  document.getElementById("minus").addEventListener("click", minus);
  function plus() {
    document.getElementById("result").innerText++;
  }

  function minus() {
    document.getElementById("result").innerText--;
  }
};

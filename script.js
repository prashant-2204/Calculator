document.addEventListener("DOMContentLoaded", function () {
  let input = document.getElementById('inputbox');
  let buttons = document.querySelectorAll("button");
  console.log(buttons);
  

  
  let string = "";
  let arr = Array.from(buttons);
  console.log(arr);
  console.log(arr[1]);


  const handleOnClick = (event) => {
    console.log("Button clicked:", event.target.innerText);
    console.log("hi");

    if (event.target.innerText === '=') {
      string = eval(string);
      input.value = string;
    } else if (event.target.innerText === 'AC') {
      string = "";
      input.value = string;
    } else if (event.target.innerText === 'DEL') {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += event.target.innerText;
      input.value = string;
    }
  };

  arr.forEach(button => {
    button.addEventListener('click', handleOnClick);
  });
});

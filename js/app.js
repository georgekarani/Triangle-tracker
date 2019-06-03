function triangle() {

  //create an array to store the sides
  var sides = [];

  //push all the sides into the array
  sides.push(document.getElementById("num1").value);
  sides.push(document.getElementById("num2").value);
  sides.push(document.getElementById("num3").value);

  //assign the values of the array to variables a,b,c
  var [a,b,c] = sides;
  var display = document.getElementById("display");
  var explanation = document.getElementById("explanation");
  if(a.length === 0 || b.length === 0 || c.length === 0 ) {

    //check whether the user has typed something
    display.innerHTML = "<p>Please <span class='fill'>FILL</span> all the fields</p>"
  } else {

    //convert the strings to numbers
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);

    //track the triangle
    track(a,b,c);
  }

}
function track(a,b,c) {
  if(a + b > c && b + c > a && c + a > b) {
    if(a === b && a === c) {
      display.innerHTML = "<p class='display-text'>That is an <span class='type'>Equilateral</span> triangle<p><span class='fill'>ALL</span> All sides are equal";
    }
    else if(a === b || b === c || a === c) {
      display.innerHTML = "<p class='display-text'>That is an <span class='type'>Isosceles</span> triangle<p><span class='fill'>TWO</span> Two sides are equal";
    }
    else {
      display.innerHTML = "<p class='display-text'>That is a <span class='type'>Scalene</span> triangle<p><span class='not'>NO</span> No sides are equal";
    }
  }
  else if(isNaN(a) || isNaN(b) || isNaN(c)) {
      display.innerHTML = "<p class='display-text'>That is <span class='not'>NOT</span> a number</p>";
  }
  else {
    display.innerHTML = "<p class='display-text'>That is <span class='not'>NOT</span> a triangle</p><p>The sum of any two sides should be <span class='fill'>GREATER</span> than the third side</p>"
  }
}

function reset() {
  location.reload();
}

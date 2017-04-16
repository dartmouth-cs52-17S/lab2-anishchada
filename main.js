// THe below 5 lines were provided with the assignment

$('.button').on('click', function(e) {

  // gather all checked radio-button values

  var choices = $("input[type='radio']:checked").map(function(i, radio) {
    return $(radio).val();
  }).toArray();

  let sum = 0;
  for (i=0; i<choices.length; i++) {
    choices[i] = parseInt(choices[i]);
    sum = sum + choices[i];
  }

  document.getElementById("demo1").innerHTML = sum;

  // http://stackoverflow.com/questions/7647095/getting-html-elements-by-their-attribute-names
  // https://www.w3schools.com/jsref/prop_node_parentelement.asp
  // https://www.w3schools.com/jsref/dom_obj_radio.asp

  function changeState(el) {

    var k;
    var t;
    var toggle = 0;

    for (k=0; k<el.length; k++) {
      if (el[k].checked==true) {
        toggle = 1;
        break;
      }
    }

    if (toggle == 1) {
      for (t=0; t<el.length; t++) {
        if (el[t].checked==false) {
          el[t].parentElement.style.opacity=0.5;
        }
        if (el[t].checked==true) {
          el[t].parentElement.style.opacity=1;
        }
      }
    }

    return toggle;
  }

  var arr = []

  var el1 = document.querySelectorAll('[name=team]');
  var toggle1 = changeState(el1);
  arr.push(toggle1);

  var el2 = document.querySelectorAll('[name=food]');
  var toggle2 = changeState(el2);
  arr.push(toggle2);

  var el3 = document.querySelectorAll('[name=major]');
  var toggle3 = changeState(el3);
  arr.push(toggle3);

  var el4 = document.querySelectorAll('[name=tv]');
  var toggle4 = changeState(el4);
  arr.push(toggle4);

  var el5 = document.querySelectorAll('[name=book]');
  var toggle5 = changeState(el5);
  arr.push(toggle5);

  var el6 = document.querySelectorAll('[name=seinfeld]');
  var toggle6 = changeState(el6);
  arr.push(toggle6);

  var el7 = document.querySelectorAll('[name=coffee]');
  var toggle7 = changeState(el7);
  arr.push(toggle7);

  let arr_sum = 0;
  for (z=0; z<arr.length; z++) {
    arr_sum = arr_sum + arr[z];
  }

  console.log(arr_sum);

  if (arr_sum < 7) {

    document.getElementById("toggle_answer").innerHTML = "Please complete all questions!";
    document.getElementById("imagechange").src="img/stop.jpg";
    document.getElementById("imagechange").style="width:240px;height:309px";

  } else if (sum == 7) {

    document.getElementById("toggle_answer").innerHTML = "Investment Banker";
    document.getElementById("imagechange").src="img/goldman.jpg";
    document.getElementById("imagechange").style="width:475px;height:307px";

  } else if (sum > 7 && sum <= 14) {

    document.getElementById("toggle_answer").innerHTML = "Trader";
    document.getElementById("imagechange").src="img/trader.jpg";
    document.getElementById("imagechange").style="width:600px;height:300px";

  } else if (sum > 14 && sum <= 21) {

    document.getElementById("toggle_answer").innerHTML = "Software Engineering (are you coding right now??)";
    document.getElementById("imagechange").src="img/software.jpg";
    document.getElementById("imagechange").style="width:512px;height:341px";

  } else if (sum > 21 && sum <= 28) {

    document.getElementById("toggle_answer").innerHTML = "Consulting";
    document.getElementById("imagechange").src="img/consulting.jpg";
    document.getElementById("imagechange").style="width:380px;height:285px";

  } else if (sum > 28 && sum <= 35) {

    document.getElementById("toggle_answer").innerHTML = "Product Management";
    document.getElementById("imagechange").src="img/pm.jpg";
    document.getElementById("imagechange").style="width:450px;height:274px";

  } else if (sum > 35 && sum <= 42) {

    document.getElementById("toggle_answer").innerHTML = "Other -- how am I supposed to tell you what you want to do??";
    document.getElementById("imagechange").src="img/earth.jpg";
    document.getElementById("imagechange").style="width:324px;height:240px";

  }

  // console.log(choices);
  // now you have an choices = ["valueofradiobox1", "valueofradiobox2", "valueofradiobox2"]
  // you'll need to do some calculations with this
  // a naive approach would be to just choose the most common option - seems reasonable
});

// Code below taken from W3 schools: https://www.w3schools.com/howto/howto_css_modals.asp

// This is the modal itself
var modal = document.getElementById('modal');

// This button opens the modal
var modal_button = document.getElementById("modal_button");

// This is the span that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
modal_button.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// http://stackoverflow.com/questions/11722400/programmatically-change-the-src-of-an-img-tag
// https://www.w3schools.com/jquery/misc_toarray.asp
// https://www.w3schools.com/jsref/jsref_tostring_array.asp
// http://stackoverflow.com/questions/9618504/get-radio-button-value-with-javascript
// https://www.w3schools.com/js/js_loop_for.asp
// https://www.w3schools.com/jsref/jsref_parseint.asp
// https://www.w3schools.com/js/js_array_methods.asp

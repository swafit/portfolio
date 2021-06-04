function addCookie(cname, value, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + value + ";" + expires + ";path=/";
}

function editCookie(cname, newValue) {
  var cookies = document.cookie;
  indCookies = cookies.split(";");
  for (i = 0; i < indCookies.length; i++) {
    parts = indCookies[i].split("=");
    name = parts[0];
    if (cname == name) {
      parts[1] = newValue;
      return newValue;
      break;
    } else {
      continue;
    }
  }
  return "";
}

// function getCookie(cname) {
//   var cookie = String(cname); // Get cookie name
//   var cookies = document.cookie.replace("", ""); // Retrieve cookies string
//   var parts = cookies.split(";"); // Split the mutiple cookies
//   for (const someCookie of parts) {
//     var cookieData = someCookie.split("="); // Split a cookie's data into name and value
//     var cookieName = cookieData[0]; // Get cookie name
//     var cookieValue = cookieData[1]; // Get cookie value
//     // Return cookie value if cookie is requested name is found
//     if (cookie == cookieName) return cookieValue;
//   }
//
//   return null; // Cookie not found
// }
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

//always verifies once a page is loaded to see if a darkmode cookie exists and makes one if there is not
if (getCookie("darkmode") == null) {
  addCookie("darkmode", 0, 30);
}

function myFunction() {
  var code = getCookie("darkmode");
  if (code == 0) {
    // alert("first if");
    addCookie("darkmode", 1, 30);
  } else {
    addCookie("darkmode", 0, 30);
    // alert("else");
  }

}
//sets the webpage to darkmode if 'darkmode' is 1
var element = document.body;
if (getCookie("darkmode") == 1) {
  element.classList.add("dark-mode");
} else if (element.classList.contains("darkmode")==true){
  element.classList.remove("dark-mode");
}

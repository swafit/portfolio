function addCookie(cname, value) {
  var newCookie = cname + "=" + value;
  document.cookie = newCookie;
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

function getCookie(cname) {
  var cookie = String(cname); // Get cookie name
  var cookies = document.cookie.replace("", ""); // Retrieve cookies string
  var parts = cookies.split(";"); // Split the mutiple cookies
  for (const someCookie of parts) {
    var cookieData = someCookie.split("="); // Split a cookie's data into name and value
    var cookieName = cookieData[0]; // Get cookie name
    var cookieValue = cookieData[1]; // Get cookie value
    // Return cookie value if cookie is requested name is found
    if (cookie == cookieName) return cookieValue
  }

  return null; // Cookie not found
}


//always verifies once a page is loaded to see if a darkmode cookie exists and makes one if there is not
if (getCookie("darkmode") == null) {
  addCookie("darkmode", 0);
}



function myFunction() {
  window.alert("function called");
  if (getCookie("darkmode", 0)) {
    window.alert("first if");

    editCookie("darkmode", 1);
  } else {
    editCookie("darkmode", 0);
    window.alert("else");

  }

}
//sets the webpage to darkmode if 'darkmode' is 1
var cookieValue = getCookie("darkmode");
//window.alert(getCookie('darkmode'));
if (getCookie("darkmode") == "1") {
  var element = document.body;
  document.body.classList.add("dark-mode");
}

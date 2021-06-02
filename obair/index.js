/*if (getCookie("darkmode")==null) {
  addCookie("darkmode", 0);
}*/

function myFunction() {
  var element = document.body;
  if (getCookie("darkmode")==0) {
    editCookie("darkmode", 1);
  }else{
    editCookie("darkmode", 0);
  }


}
if (getCookie("darkmode")==1) {
  element.classList.add("dark-mode");
}else{

}
var editCookie = function(cname, newValue) {
    var cookies = document.cookie;
    indCookies = cookies.split(";");
    for(i=0;i<indCookies.length;i++) {
      parts = indCookies[i].split("=");
      name = parts[0];
      if(cname==name) {
        parts[1] = newValue;
        return newValue;
        break;
      }
      else {
        continue;
      }
    }
    return false;
  };

  var getCookie = function(cname) {
    var cookies = document.cookie;
    indCookies = cookies.split(";");
    for(i=0;i<indCookies.length;i++) {
      parts = indCookies[i].split("=");
      name = parts[0];
      if(cname==name) {
        cvalue = parts[1];
        return cvalue;
        break;
      }
      else {
        continue;
      }
    }
    return false;
  };

  var addCookie = function(cname, value) {
    var newCookie = cname + "=" + value;
    document.cookie += newCookie;
  };

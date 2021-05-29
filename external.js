//I used JavaScript to set the opacity effect to make it easy to turn off (by disabling JavaScript)
//and instead of 'target' which doesn't exist in XHTML 1.1 I used JavaScript for the same reason
function externalLinks() {
  //turning back old browsers
  if (!document.getElementsByTagName) return;
  var anchors = document.getElementsByTagName("a");
  for (var i = 0; i < anchors.length; i++) {
    var anchor = anchors[i];
    if (anchor.getAttribute("rel") == "external") anchor.target = "_blank";
  }  
}

function opacity() {
  document.write("<style type='text/css'>");
  document.write("  a.opacity img { filter: alpha(opacity = 80); opacity: 0.80; }");
  document.write("  a.opacity:hover img { filter: alpha(opacity = 100); opacity: 1.0; }");
  document.write("</style>");
}

opacity();
window.onload = externalLinks;

function f(im,sub) {
  //this function handles the left changing menu
  document.getElementById('i').src = im;
  document.getElementById('t').innerHTML = sub;
}

function gal(im,id,prev,next) {
  var gb = document.getElementById('galbox');
  var bt = "";
  //calculating previous and next im/id
  previd = id - 1;
  if (previd == 0) previd = 31;
  if (previd < 10) previm = "0" + parseInt(previd); else previm = parseInt(previd);
  nextid = id + 1;
  if (nextid == 32) nextid = 1;
  if (nextid < 10) nextim = "0" + parseInt(nextid); else nextim = parseInt(nextid);
  
  bt += "<h2>" + A[id] + "</h2>";
  bt += "<table width='100%' id='galtable'><tr>";
  bt += "<td class='galboxleft'><a href=\"#nav\"><span onclick=\"gal('" + previm + "'," + previd + ",'" + prev + "','" + next + "');\">&laquo; " + prev + "</span></a></td>";
  bt += "<td class='galboxright'><a href=\"#nav\"><span onclick=\"gal('" + nextim + "'," + nextid + ",'" + prev + "','" + next + "');\">" + next + " &raquo;</span></a></td>";
  bt += "</tr></table>";
  bt += "<img src='data/pic/gal" + im + ".jpg' alt='' />";
  
  gb.innerHTML = bt;
}
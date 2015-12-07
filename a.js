function load(id){
  var c = document.getElementById(id,loadAxes);
  var ctx = c.getContext("2d");
  ctx["x"]=0;
  ctx["y"]=0;
  ctx["z"]=0;
  return ctx;
}

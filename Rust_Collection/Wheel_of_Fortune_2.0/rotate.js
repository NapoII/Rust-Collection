let betPercentages = new Map();
betPercentages.set('0', {
  betColor: "5x (BLUE)",  
  kellyBetPct: "0.023972872",
  currentColor: "20x (RED)" 
});
betPercentages.set('1', {
  betColor: "5x (BLUE)",
  kellyBetPct: "0.024021592",
  currentColor: "1x (YELLOW)"
});
betPercentages.set('2', {
  betColor: "5x (BLUE)",
  kellyBetPct: "0.015140644",
  currentColor: "3x (Green)"
});
betPercentages.set('3', {
  betColor: "10x (PURPLE)",
  kellyBetPct: "0.010842996",
  currentColor: "1x (YELLOW)"
});
betPercentages.set('4', {
  betColor: "10x (PURPLE)",
  kellyBetPct: "0.017316848",
  currentColor: "5x (BLUE)"
});
betPercentages.set('5', {
  betColor: "10x (PURPLE)",
  kellyBetPct: "0.017370286",
  currentColor: "1x (YELLOW)"
});
betPercentages.set('6', {
  betColor: "10x (PURPLE)",
  kellyBetPct: "0.009207527",
  currentColor: "3x (Green)"
});
betPercentages.set('7', {
  betColor: "5x (BLUE)",
  kellyBetPct: "0.016999792",
  currentColor: "1x (YELLOW)"
});
betPercentages.set('8', {
  betColor: "5x (BLUE)",
  kellyBetPct: "0.023926348",
  currentColor: "10x (PURPLE)"
});
betPercentages.set('9', {
  betColor: "5x (BLUE)",
  kellyBetPct: "0.01513888",
  currentColor: "1x (YELLOW)"
});
betPercentages.set('10', {
  betColor: "NONE",
  kellyBetPct: "0",
  currentColor: "3x (Green)"
});
betPercentages.set('11', {
  betColor: "NONE",
  kellyBetPct: "0",
  currentColor: "5x (BLUE)"
});
betPercentages.set('12', {
  betColor: "20x (RED)",
  kellyBetPct: "0.0059727175",
  currentColor: "1x (YELLOW)"
});
betPercentages.set('13', {
  betColor: "20x (RED)",
  kellyBetPct: "0.0060228235",
  currentColor: "5x (BLUE)"
});
betPercentages.set('14', {
  betColor: "20x (RED)",
  kellyBetPct: "0.00602548",
  currentColor: "1x (YELLOW)"
});
betPercentages.set('15', {
  betColor: "20x (RED)",
  kellyBetPct: "0.0059895385",
  currentColor: "3x (Green)"
});
betPercentages.set('16', {
  betColor: "20x (RED)",
  kellyBetPct: "0.006000217",
  currentColor: "1x (YELLOW)"
});
betPercentages.set('17', {
  betColor: "20x (RED)",
  kellyBetPct: "0.0059564845",
  currentColor: "10x (PURPLE)"
});
betPercentages.set('18', {
  betColor: "20x (RED)",
  kellyBetPct: "0.0059984845",
  currentColor: "1x (YELLOW)"
});
betPercentages.set('19', {
  betColor: "20x (RED)",
  kellyBetPct: "0.006039634",
  currentColor: "3x (Green)"
});
betPercentages.set('20', {
  betColor: "20x (RED)",
  kellyBetPct: "0.0059838685",
  currentColor: "1x (YELLOW)"
});
betPercentages.set('21', {
  betColor: "20x (RED)",
  kellyBetPct: "0.0060115465",
  currentColor: "5x (BLUE)"
});
betPercentages.set('22', {
  betColor: "20x (RED)",
  kellyBetPct: "0.0060124495",
  currentColor: "1x (YELLOW)"
});
betPercentages.set('23', {
  betColor: "NONE",
  kellyBetPct: "0",
  currentColor: "3x (Green)"
});
betPercentages.set('24', {
  betColor: "5x (BLUE)",
  kellyBetPct: "0.016948948",
  currentColor: "1x (YELLOW)"
});

let betReturns = new Map();
betReturns.set("NONE", {ret: 0});
betReturns.set("1x (YELLOW)", {ret: 2});
betReturns.set("3x (Green)", {ret: 4});
betReturns.set("5x (BLUE)", {ret: 6});
betReturns.set("10x (PURPLE)", {ret: 11});
betReturns.set("20x (RED)", {ret: 21});


(function() {
  var R2D, active, angle, center, init, rotate, rotation, start, startAngle, stop;

  active = false;

  angle = 0;

  rotation = 0;

  startAngle = 0;

  center = {
    x: 0,
    y: 0
  };

  document.ontouchmove = function(e) {
    return e.preventDefault();
  };

  init = function() {
    target.addEventListener("mousedown", start, false);
    target.addEventListener("mousemove", rotate, false);
    target.addEventListener("mouseup", stop, false);
    
    target.addEventListener("touchstart", start, false);
    target.addEventListener("touchmove", rotate, false);
    target.addEventListener("touchend", stop, false);
  };
  

  R2D = 180 / Math.PI;

  start = function(e) {
    var height, left, top, width, x, y, _ref;
    e.preventDefault();
    _ref = this.getBoundingClientRect(), top = _ref.top, left = _ref.left, height = _ref.height, width = _ref.width;
    center = {
      x: left + (width / 2),
      y: top + (height / 2)
    };
    x = e.clientX - center.x;
    y = e.clientY - center.y;
    startAngle = R2D * Math.atan2(y, x);
    return active = true;
  };

  rotate = function(e) {
    var d, x, y;
    e.preventDefault();
    x = e.clientX - center.x;
    y = e.clientY - center.y;
    d = R2D * Math.atan2(y, x);
    rotation = d - startAngle;
    updateGraphics();
    if (active) {
      return this.style.webkitTransform = "rotate(" + (angle + rotation) + "deg)";
    }
  };

  stop = function() {
    angle += rotation;
    return active = false;
  };

  updateGraphics = function() {
  var slot = (Math.floor(angle % 360 / (360 / 25)) + 25) % 25;
    document.getElementById('currPos').innerHTML = slot;
    document.getElementById('currCol').innerHTML = betPercentages.get("" + slot).currentColor;
  };

  init();

}).call(this);

function clearBets() {
document.getElementById("betAmt").innerHTML = 0;
  document.getElementById("betAdvice").innerHTML = "NONE";
}


function updateTable() {
  var scrap = document.getElementById("currScrap").value;
  var position = document.getElementById("currPos").innerHTML;
  var positionField = document.getElementById("currCol").innerHTML;
  var bet = document.getElementById("betAmt").innerHTML;
  var prediction = document.getElementById("betAdvice").innerHTML;
  
  var table = document.querySelector("table");
  var newRow = table.insertRow(-1);
  var scrapCell = newRow.insertCell(0);
  var positionCell = newRow.insertCell(1);
  var positionFieldCell = newRow.insertCell(2);
  var betCell = newRow.insertCell(3);
  var predictionCell = newRow.insertCell(4);
  
  scrapCell.innerHTML = scrap;
  positionCell.innerHTML = position;
  positionFieldCell.innerHTML = positionField;
  betCell.innerHTML = bet;
  predictionCell.innerHTML = prediction;
}



function calcButtonClicked() {
  var intvalue = document.getElementById('currPos').innerHTML;
  var betPct = 0;
  var betColor = "nothing";
  var currentColor = "NONE";
  if (betPercentages.has(intvalue)) {
    betPct = betPercentages.get(intvalue).kellyBetPct;
    betColor = betPercentages.get(intvalue).betColor;
    currentColor = betPercentages.get(intvalue).currentColor;
  } else {
    console.error("Didn't land for " + intvalue);
  }

  var currentScrap = parseInt(document.getElementById('currScrap').value);
  if (document.getElementById('doScrapCalc').checked) {
    var lastAmtToBet = parseInt(document.getElementById('betAmt').innerHTML);
    var lastBetColor = document.getElementById('betAdvice').innerHTML;
    currentScrap -= lastAmtToBet;
    if (currentColor == lastBetColor) {
      currentScrap += lastAmtToBet * parseInt(betReturns.get(currentColor).ret); // TODO fix this as well
    }
  }
  var currentScrap = document.getElementById('currScrap').value = currentScrap;

  var amtToBet = Math.floor(betPct * currentScrap);
  document.getElementById("betAmt").innerHTML = amtToBet;
  document.getElementById("betAdvice").innerHTML = betColor;
  updateTable();
}


console.log("%cHello, curious explorer! 👋\n%cIf you've ventured into the console, I ask kindly that you treat everything with respect. Let's keep things positive and helpful. If you have questions or suggestions, I'd love to hear from you on Discord or GitHub. Thanks for your consideration!",
"color: #f8f8f2; background-color: #282a36; font-size: 16px; font-weight: bold; padding: 8px;",
"color: #50fa7b; font-size: 14px;"
);

console.log(
    "%cDiscord: %chttps://discord.gg/Gd23KJ76Tq",
    "color: #f8f8f2; background-color: #282a36; font-size: 16px; font-weight: bold; padding: 8px;",
    "color: #50fa7b; text-decoration: underline;"
  );
  
  console.log(
    "%cGitHub: %chttps://github.com/NapoII/Rust-Collection",
    "color: #f8f8f2; background-color: #282a36; font-size: 16px; font-weight: bold; padding: 8px;",
    "color: #50fa7b; text-decoration: underline;"
  );
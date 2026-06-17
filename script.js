const message = "hello eveeee, i just wanted to say that i really like you and i hope you have a wonderful day! i will never gonna leave you again im sorry na nawala ako bigla kagabi hehehe i care and yearn for you a lot and i just want you to know that im here for you whenever you need someone to talk to or if u just wanna hang out and have fun together. i hope we can spend more time together and create more happy memories. take care always and remember that you are loved and appreciated by me. \u2764\uFE0F";

function startSong() {
  document.getElementById('myaudio').play();
  document.getElementById('startBtn').style.display = 'none';
}


function showYes() {
  // hide intro elements
  document.getElementById("btnRow").style.display        = "none";
  document.getElementById("question").style.display      = "none";
  document.getElementById("hello").style.display         = "none";
  document.querySelector(".conf-sub").style.display      = "none";
  document.querySelector(".petal-row").style.display     = "none";


  document.getElementById("hk").style.display            = "none";
  document.getElementById("cinnamon").style.display      = "none";
  document.getElementById("peng").style.display          = "none";
  document.getElementById("happy").style.display         = "block";
  document.getElementById("cute").style.display          = "block";
  document.getElementById("cute2").style.display         = "block";
  document.getElementById("cute3").style.display         = "block";


  const resp = document.getElementById("response");
  resp.style.display = "flex";

 
  document.getElementById('myaudio2').play();


  typeMessage();
  burstPetals();
  launchStars();
}


function typeMessage() {
  const el = document.getElementById('typed');
  if (!el) return;
  let i = 0;
  el.innerHTML = '<span class="cursor"></span>';

  const interval = setInterval(() => {
    if (i < message.length) {
      el.innerHTML =
        '\u201c' + message.slice(0, i + 1) +
        (i < message.length - 1 ? '<span class="cursor"></span>' : '\u201d');
      i++;
    } else {
      clearInterval(interval);
      const sub = document.getElementById('revealSub');
      if (sub) sub.style.opacity = '1';
    }
  }, 60);
}


function runAway() {
  const btn = document.getElementById('noBtn');
  const pad = 120;
  const maxX = window.innerWidth  - pad;
  const maxY = window.innerHeight - pad;
  btn.style.position = "fixed";
  btn.style.zIndex   = "9998";
  btn.style.left     = Math.max(10, Math.random() * maxX) + "px";
  btn.style.top      = Math.max(10, Math.random() * maxY) + "px";
  btn.style.transition = "left 0.25s ease, top 0.25s ease";
}


function burstPetals() {
  const emojis = ['🌸','💕','🌷','✨','💖','🌺','🩷','⭐','🎀'];
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const p = document.createElement("span");
      p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      Object.assign(p.style, {
        position:      "fixed",
        fontSize:      (18 + Math.random() * 16) + "px",
        left:          Math.random() * 100 + "vw",
        top:           "-40px",
        zIndex:        "9999",
        pointerEvents: "none",
        transition:    `top ${2.5 + Math.random() * 2}s linear, opacity 1s ease 2s`,
        userSelect:    "none",
      });
      document.body.appendChild(p);
      requestAnimationFrame(() => {
        setTimeout(() => {
          p.style.top     = "110vh";
          p.style.opacity = "0";
        }, 50);
      });
      setTimeout(() => p.remove(), 5000);
    }, i * 150);
  }
}


function ambientPetals() {
  const emojis = ['🌸','💕','✨','🩷'];
  const container = document.getElementById('bgPetals');

  function spawnOne() {
    const p = document.createElement("span");
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    const dur = 5 + Math.random() * 5;
    Object.assign(p.style, {
      position:      "absolute",
      fontSize:      (12 + Math.random() * 10) + "px",
      left:          Math.random() * 100 + "vw",
      top:           "-30px",
      opacity:       "0.45",
      pointerEvents: "none",
      transition:    `top ${dur}s linear, opacity 0.8s ease ${dur - 1}s`,
      userSelect:    "none",
    });
    container.appendChild(p);
    requestAnimationFrame(() => {
      setTimeout(() => {
        p.style.top     = "110vh";
        p.style.opacity = "0";
      }, 30);
    });
    setTimeout(() => p.remove(), (dur + 1) * 1000);
  }

  setInterval(spawnOne, 700);
}


function launchStars() {
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const s = document.createElement("span");
      s.textContent = "⭐";
      Object.assign(s.style, {
        position:  "fixed",
        fontSize:  "20px",
        left:      20 + Math.random() * 60 + "vw",
        top:       20 + Math.random() * 60 + "vh",
        zIndex:    "9999",
        pointerEvents: "none",
        opacity:   "1",
        transition: "transform 0.8s ease, opacity 0.8s ease",
        transform: "scale(0)",
      });
      document.body.appendChild(s);
      requestAnimationFrame(() => {
        setTimeout(() => {
          s.style.transform = "scale(1.4)";
          setTimeout(() => {
            s.style.transform = "scale(0)";
            s.style.opacity   = "0";
          }, 500);
        }, 30);
      });
      setTimeout(() => s.remove(), 1500);
    }, i * 120);
  }
}


setTimeout(() => {
  const popup = document.getElementById("popupMsg");
  popup.style.display = "flex";
}, 5000);


window.addEventListener('DOMContentLoaded', ambientPetals);
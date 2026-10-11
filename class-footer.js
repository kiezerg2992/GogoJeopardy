/* Shared footer + class photo popup + tab icon. Add to any game with:
   <script src="class-footer.js"></script>   (put it right before </body>) */
(function () {
  var BG = 'assets/bg.png';
  var PHOTO = 'assets/class-photo.jpg';
  var ICON = 'assets/favicon.png';   // <-- replace this file to change the tab icon

  var css = document.createElement('style');
  css.textContent =
    'html,body{background-color:#4857a8 !important;background-image:url("' + BG + '") !important;background-repeat:repeat !important;background-attachment:fixed !important;}' +
    /* footer is pinned to the bottom of the screen on EVERY screen (lobby, games, popups) */
    'body{padding-bottom:var(--ffh,44px) !important;}' +
    '.fixed.inset-0{bottom:var(--ffh,44px) !important;}' +
    '#classFooter{position:fixed;left:0;right:0;bottom:0;z-index:100;background:rgba(15,23,42,.94);border-top:1px solid rgba(255,255,255,.12);padding:10px 16px;text-align:center;font-size:12px;line-height:1.35;color:#94a3b8;}' +
    '#classFooterBtn{background:none;border:0;color:inherit;font:inherit;cursor:pointer;text-decoration:underline;text-underline-offset:3px;}' +
    '#classFooterBtn:hover{color:#fff;}' +
    '#classPhotoModal{position:fixed;inset:0;z-index:9999;background:rgba(2,6,23,.92);display:none;align-items:center;justify-content:center;padding:16px;cursor:zoom-out;}' +
    '#classPhotoModal.open{display:flex;}' +
    '#classPhotoModal img{max-width:100%;max-height:92vh;border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.6);}' +
    '#classPhotoClose{position:absolute;top:14px;right:18px;background:none;border:0;color:#fff;font-size:34px;line-height:1;cursor:pointer;}';
  document.head.appendChild(css);

  // tab icon (only added if the page does not already have one)
  if (!document.querySelector('link[rel~="icon"]')) {
    var ic = document.createElement('link');
    ic.rel = 'icon'; ic.type = 'image/png'; ic.href = ICON;
    document.head.appendChild(ic);
  }

  var old = document.querySelector('footer');
  if (old) old.remove();

  var footer = document.createElement('footer');
  footer.id = 'classFooter';
  footer.innerHTML =
    '<button id="classFooterBtn" type="button">GoGoGrandparent Orientation Training Arcade &bull; Made by Ki and Tene\'s Favorite Class - September 2026- Orientation Class2</button>';
  document.body.appendChild(footer);

  function fit() { document.documentElement.style.setProperty('--ffh', footer.offsetHeight + 'px'); }
  fit(); addEventListener('resize', fit); addEventListener('load', fit);

  var modal = document.createElement('div');
  modal.id = 'classPhotoModal';
  modal.innerHTML = '<button id="classPhotoClose" type="button" aria-label="Close">&times;</button><img src="' + PHOTO + '" alt="Orientation Class2">';
  document.body.appendChild(modal);

  function open() { modal.classList.add('open'); }
  function close() { modal.classList.remove('open'); }
  footer.querySelector('#classFooterBtn').addEventListener('click', open);
  modal.addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();

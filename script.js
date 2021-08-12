//Controla se o botão está clicado
let homeClicked = false;
let explorerClicked = false;
let subsClicked = false;
let libraryClicked = false;
let historyClicked = false;
let videosClicked = false;
let timeClicked = false;
let likeClicked = false;
let arrowClicked = false;

let menuClosed = false;
let isModal = false;

let divHome = document.getElementById('div-home');   
let divExplorer = document.getElementById('div-explorer');
let divSubs = document.getElementById('div-subs');
let divLibrary = document.getElementById('div-library');
let divHistory = document.getElementById('div-history');
let divVideos = document.getElementById('div-videos');
let divTime = document.getElementById('div-time');
let divLike = document.getElementById('div-like');
let divArrow = document.getElementById('div-arrow');    

let divHomeSecondary = document.getElementById('div-home-secondary');   
let divExplorerSecondary = document.getElementById('div-explorer-secondary');
let divSubsSecondary = document.getElementById('div-subs-secondary');
let divLibrarySecondary = document.getElementById('div-library-secondary');

let buttonHome = document.querySelector("#home");
let buttonExplorer = document.querySelector("#explorer");
let buttonSubs = document.querySelector("#subs");
let buttonLibrary = document.querySelector("#library");
let buttonHistory = document.querySelector("#history");
let buttonVideos = document.querySelector("#videos");
let buttonTime = document.querySelector("#time");
let buttonLike = document.querySelector("#like");
let buttonArrow = document.querySelector("#arrow");

let buttonHomeSecondary = document.querySelector("#home-secondary");
let buttonExplorerSecondary = document.querySelector("#explorer-secondary");
let buttonSubsSecondary = document.querySelector("#subs-secondary");
let buttonLibrarySecondary = document.querySelector("#library-secondary");

let searchFocused = false;
let keyboard = document.querySelector("#keyboard");
let scrollValueLeft = 0;
let scrollValueRight = 0;
let offSet = 200;

//imagens dos botões clicados e não clicados
let homeSvg = 
  `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"
  version="1.1" id="svg838" sodipodi:docname="home.svg" inkscape:version="1.1 (c68e22c387, 2021-05-23)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <defs id="defs842" /> <sodipodi:namedview id="namedview840" pagecolor="#ffffff" bordercolor="#111111" borderopacity="1" inkscape:pageshadow="0"
  inkscape:pageopacity="0" inkscape:pagecheckerboard="1" showgrid="false" inkscape:zoom="34.416667" inkscape:cx="12" inkscape:cy="12" inkscape:window-width="2560" inkscape:window-height="1034" inkscape:window-x="-8" inkscape:window-y="15"
  inkscape:window-maximized="1" inkscape:current-layer="svg838" /> <g class="style-scope yt-icon" id="g836"> <path d="m 10,20 v -6 h 4 v 6 h 5 v -8 h 3 L 12,3 2,12 h 3 v 8" class="style-scope yt-icon"
  fill="#606060"id="path834" /> </g> </svg>`   

let homeSvgClicked =
  `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"
   version="1.1" id="svg838" sodipodi:docname="home.svg" inkscape:version="1.1 (c68e22c387, 2021-05-23)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <defs id="defs842" /> <sodipodi:namedview id="namedview840" pagecolor="#ffffff" bordercolor="#111111" borderopacity="1" inkscape:pageshadow="0"
   inkscape:pageopacity="0" inkscape:pagecheckerboard="1" showgrid="false" inkscape:zoom="34.416667" inkscape:cx="12" inkscape:cy="12" inkscape:window-width="2560" inkscape:window-height="1034" inkscape:window-x="-8" inkscape:window-y="15"
   inkscape:window-maximized="1" inkscape:current-layer="svg838" /> <g class="style-scope yt-icon" id="g836"> <path d="m 10,20 v -6 h 4 v 6 h 5 v -8 h 3 L 12,3 2,12 h 3 v 8" class="style-scope yt-icon"
   fill="#ff0000" id="path834" /> </g> </svg>`   

let explorerSvg =
  `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;" version="1.1"
   id="svg1409" sodipodi:docname="explorer.svg"  version="1.1 (c68e22c387, 2021-05-23)" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <defs id="defs1413" /> <sodipodi:namedview id="namedview1411" pagecolor="#ffffff" 
   bordercolor="#111111" borderopacity="1" pageshadow="0" pageopacity="0" pagecheckerboard="1" showgrid="false" zoom="34.416667" cx="12" cy="12" window-width="2560" window-height="1034" window-x="-8" window-y="15" window-maximized="1" current-layer="svg1409" />
   <g class="style-scope yt-icon" id="g1407"> <path d="m 11.23,13.08 c -0.29,-0.21 -0.48,-0.51 -0.54,-0.86 -0.06,-0.35 0.02,-0.71 0.23,-0.99 0.21,-0.29 0.51,-0.48 0.86,-0.54 0.35,-0.06 0.7,0.02 0.99,0.23 0.29,0.21 0.48,0.51 0.54,0.86 0.06,0.35 -0.02,0.71 -0.23,0.99 A 1.327,1.327 0 0 1 12,13.33 c -0.28,0 -0.55,-0.08 -0.77,-0.25 z M 22,12 C 22,17.52 17.52,22 12,22 6.48,22 2,17.52 2,12 2,6.48 6.48,2 12,2 17.52,2 22,6.48 22,12 Z M 18.03,5.97 9.8,9.8 5.97,18.03 14.2,14.2 Z"
   class="style-scope yt-icon"
   fill="#606060" id="path1405" /> </g> </svg>
  `   
let explorerSvgClicked =
  `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;" version="1.1"
   id="svg1409" sodipodi:docname="explorer.svg"  version="1.1 (c68e22c387, 2021-05-23)" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <defs id="defs1413" /> <sodipodi:namedview id="namedview1411" pagecolor="#ffffff" 
   bordercolor="#111111" borderopacity="1" pageshadow="0" pageopacity="0" pagecheckerboard="1" showgrid="false" zoom="34.416667" cx="12" cy="12" window-width="2560" window-height="1034" window-x="-8" window-y="15" window-maximized="1" current-layer="svg1409" />
   <g class="style-scope yt-icon" id="g1407"> <path d="m 11.23,13.08 c -0.29,-0.21 -0.48,-0.51 -0.54,-0.86 -0.06,-0.35 0.02,-0.71 0.23,-0.99 0.21,-0.29 0.51,-0.48 0.86,-0.54 0.35,-0.06 0.7,0.02 0.99,0.23 0.29,0.21 0.48,0.51 0.54,0.86 0.06,0.35 -0.02,0.71 -0.23,0.99 A 1.327,1.327 0 0 1 12,13.33 c -0.28,0 -0.55,-0.08 -0.77,-0.25 z M 22,12 C 22,17.52 17.52,22 12,22 6.48,22 2,17.52 2,12 2,6.48 6.48,2 12,2 17.52,2 22,6.48 22,12 Z M 18.03,5.97 9.8,9.8 5.97,18.03 14.2,14.2 Z"
   class="style-scope yt-icon"
   fill="#FF0000" id="path1405" /> </g> </svg>
  `   
let subsSvg =
  `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;" version="1.1" id="svg1030"
   sodipodi:docname="subs.svg" version="1.1 (c68e22c387, 2021-05-23)" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <defs id="defs1034" /> <sodipodi:namedview id="namedview1032" pagecolor="#ffffff" bordercolor="#111111" borderopacity="1" pageshadow="0"
   pageopacity="0" pagecheckerboard="1" showgrid="false" zoom="34.416667" cx="12" cy="12" window-width="2560" window-height="1034" window-x="-8" window-y="15" window-maximized="1" current-layer="svg1030" /> <g class="style-scope yt-icon" id="g1028"> <path
   d="M 18.7,8.7 H 5.3 V 7 H 18.7 Z M 17,3.7 H 7 v 1.6 h 10 z m 3.3,8.3 v 6.7 c 0,1 -0.7,1.6 -1.6,1.6 H 5.3 c -1,0 -1.6,-0.7 -1.6,-1.6 V 12 c 0,-1 0.7,-1.7 1.6,-1.7 h 13.4 c 1,0 1.6,0.8 1.6,1.7 z m -5,3.3 -5,-2.7 V 18 Z" class="style-scope yt-icon" 
   fill="#606060" id="path1026" /> </g> </svg>
  `  
let subsSvgClicked =
  `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;" version="1.1" id="svg1030"
   sodipodi:docname="subs.svg" version="1.1 (c68e22c387, 2021-05-23)" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <defs id="defs1034" /> <sodipodi:namedview id="namedview1032" pagecolor="#ffffff" bordercolor="#111111" borderopacity="1" pageshadow="0"
   pageopacity="0" pagecheckerboard="1" showgrid="false" zoom="34.416667" cx="12" cy="12" window-width="2560" window-height="1034" window-x="-8" window-y="15" window-maximized="1" current-layer="svg1030" /> <g class="style-scope yt-icon" id="g1028"> <path
   d="M 18.7,8.7 H 5.3 V 7 H 18.7 Z M 17,3.7 H 7 v 1.6 h 10 z m 3.3,8.3 v 6.7 c 0,1 -0.7,1.6 -1.6,1.6 H 5.3 c -1,0 -1.6,-0.7 -1.6,-1.6 V 12 c 0,-1 0.7,-1.7 1.6,-1.7 h 13.4 c 1,0 1.6,0.8 1.6,1.7 z m -5,3.3 -5,-2.7 V 18 Z" class="style-scope yt-icon" 
   fill="#FF0000" id="path1026" /> </g> </svg>
  `    
let librarySvg = 
  `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;" version="1.1" id="svg1605" 
   sodipodi:docname="library.svg" version="1.1 (c68e22c387, 2021-05-23)" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <defs id="defs1609" /> <sodipodi:namedview id="namedview1607" pagecolor="#ffffff" bordercolor="#111111" borderopacity="1" pageshadow="0" 
   pageopacity="0" pagecheckerboard="1" showgrid="false" zoom="34.416667" cx="12" cy="12" window-width="2560" window-height="1034" window-x="-8" window-y="15" window-maximized="1" current-layer="svg1605" /> <g class="style-scope yt-icon" id="g1603"> <path fill="none" d="M 0,0 H 24 V 24 H 0 Z"
   class="style-scope yt-icon" id="path1599" /> <path d="M 4,6 H 2 v 14 c 0,1.1 0.9,2 2,2 H 18 V 20 H 4 Z M 20,2 H 8 C 6.9,2 6,2.9 6,4 v 12 c 0,1.1 0.9,2 2,2 h 12 c 1.1,0 2,-0.9 2,-2 V 4 C 22,2.9 21.1,2 20,2 Z m -8,12.5 v -9 l 6,4.5 z" class="style-scope yt-icon" 
   fill="#606060" id="path1601" /> </g> </svg>
  `  
let librarySvgClicked = 
  `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;" version="1.1" id="svg1605" 
   sodipodi:docname="library.svg" version="1.1 (c68e22c387, 2021-05-23)" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <defs id="defs1609" /> <sodipodi:namedview id="namedview1607" pagecolor="#ffffff" bordercolor="#111111" borderopacity="1" pageshadow="0" 
   pageopacity="0" pagecheckerboard="1" showgrid="false" zoom="34.416667" cx="12" cy="12" window-width="2560" window-height="1034" window-x="-8" window-y="15" window-maximized="1" current-layer="svg1605" /> <g class="style-scope yt-icon" id="g1603"> <path fill="none" d="M 0,0 H 24 V 24 H 0 Z"
   class="style-scope yt-icon" id="path1599" /> <path d="M 4,6 H 2 v 14 c 0,1.1 0.9,2 2,2 H 18 V 20 H 4 Z M 20,2 H 8 C 6.9,2 6,2.9 6,4 v 12 c 0,1.1 0.9,2 2,2 h 12 c 1.1,0 2,-0.9 2,-2 V 4 C 22,2.9 21.1,2 20,2 Z m -8,12.5 v -9 l 6,4.5 z" class="style-scope yt-icon" 
   fill="#FF0000" id="path1601" /> </g> </svg>
  `  
let historySvg = 
  `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;" version="1.1" id="svg1798" sodipodi:docname="history.svg"
   version="1.1 (c68e22c387, 2021-05-23)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <defs id="defs1802" /> <sodipodi:namedview id="namedview1800"
   pagecolor="#ffffff" bordercolor="#111111" borderopacity="1" pageshadow="0" pageopacity="0" pagecheckerboard="1" showgrid="false" zoom="34.416667" cx="12" cy="12" window-width="2560" window-height="1034" window-x="-8" window-y="15" window-maximized="1" current-layer="svg1798" /> <g class="style-scope yt-icon"
   id="g1796"> <path d="M 11.9,3.75 C 7.35,3.75 3.67,7.45 3.67,12 H 0.92 L 4.49,15.57 4.53,15.7 8.23,12 H 5.5 c 0,-3.54 2.87,-6.42 6.42,-6.42 3.54,0 6.4,2.88 6.4,6.42 0,3.54 -2.86,6.42 -6.4,6.42 -1.78,0 -3.38,-0.73 -4.54,-1.9 l -1.3,1.3 c 1.5,1.5 3.55,2.43 5.83,2.43 4.58,0 8.28,-3.7 8.28,-8.25 0,-4.56 -3.7,-8.25 -8.26,-8.25 z M 11,8.33 v 4.6 l 3.92,2.3 0.66,-1.1 -3.2,-1.9 v -3.9 z"
   class="style-scope yt-icon"
   fill="#606060" id="path1794" /> </g> </svg>
  `
let historySvgClicked = 
  `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;" version="1.1" id="svg1798" sodipodi:docname="history.svg"
   version="1.1 (c68e22c387, 2021-05-23)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <defs id="defs1802" /> <sodipodi:namedview id="namedview1800"
   pagecolor="#ffffff" bordercolor="#111111" borderopacity="1" pageshadow="0" pageopacity="0" pagecheckerboard="1" showgrid="false" zoom="34.416667" cx="12" cy="12" window-width="2560" window-height="1034" window-x="-8" window-y="15" window-maximized="1" current-layer="svg1798" /> <g class="style-scope yt-icon"
   id="g1796"> <path d="M 11.9,3.75 C 7.35,3.75 3.67,7.45 3.67,12 H 0.92 L 4.49,15.57 4.53,15.7 8.23,12 H 5.5 c 0,-3.54 2.87,-6.42 6.42,-6.42 3.54,0 6.4,2.88 6.4,6.42 0,3.54 -2.86,6.42 -6.4,6.42 -1.78,0 -3.38,-0.73 -4.54,-1.9 l -1.3,1.3 c 1.5,1.5 3.55,2.43 5.83,2.43 4.58,0 8.28,-3.7 8.28,-8.25 0,-4.56 -3.7,-8.25 -8.26,-8.25 z M 11,8.33 v 4.6 l 3.92,2.3 0.66,-1.1 -3.2,-1.9 v -3.9 z"
   class="style-scope yt-icon"
   fill="#FF0000" id="path1794" /> </g> </svg>
  `
let videosSvg =
  `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;" version="1.1" id="svg2179" sodipodi:docname="video.svg" version="1.1 (c68e22c387, 2021-05-23)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <defs id="defs2183" /> <sodipodi:namedview id="namedview2181" pagecolor="#ffffff" bordercolor="#111111" borderopacity="1" pageshadow="0" pageopacity="0" pagecheckerboard="1"
   showgrid="false" zoom="34.416667" cx="12" cy="12" window-width="2560" window-height="1034" window-x="-8" window-y="15" window-maximized="1" current-layer="svg2179" /> <g class="style-scope yt-icon" id="g2177"> <path d="M 18.4,5.6 V 18.4 H 5.6 V 5.6 Z m 0,-1.8 H 5.6 A 1.8,1.8 0 0 0 3.8,5.6 v 12.8 a 1.8,1.8 0 0 0 1.8,1.9 h 12.8 a 1.8,1.8 0 0 0 1.9,-1.9 V 5.6 A 1.8,1.8 0 0 0 18.4,3.8 Z"
   class="style-scope yt-icon"          
   fill="#606060" id="path2173" /> <path d="m 10.2,9 v 6.5 l 5,-3.2 -5,-3.2 z" class="style-scope yt-icon"
   fill="#606060" id="path2175" /> </g> </svg>  
  `
let videosSvgClicked =
  `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;" version="1.1" id="svg2179" sodipodi:docname="video.svg" version="1.1 (c68e22c387, 2021-05-23)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <defs id="defs2183" /> <sodipodi:namedview id="namedview2181" pagecolor="#ffffff" bordercolor="#111111" borderopacity="1" pageshadow="0" pageopacity="0" pagecheckerboard="1"
   showgrid="false" zoom="34.416667" cx="12" cy="12" window-width="2560" window-height="1034" window-x="-8" window-y="15" window-maximized="1" current-layer="svg2179" /> <g class="style-scope yt-icon" id="g2177"> <path d="M 18.4,5.6 V 18.4 H 5.6 V 5.6 Z m 0,-1.8 H 5.6 A 1.8,1.8 0 0 0 3.8,5.6 v 12.8 a 1.8,1.8 0 0 0 1.8,1.9 h 12.8 a 1.8,1.8 0 0 0 1.9,-1.9 V 5.6 A 1.8,1.8 0 0 0 18.4,3.8 Z"
   class="style-scope yt-icon"          
   fill="#FF0000" id="path2173" /> <path d="m 10.2,9 v 6.5 l 5,-3.2 -5,-3.2 z" class="style-scope yt-icon"
   fill="#FF0000" id="path2175" /> </g> </svg>  
  `
let timeSvg =
  `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;" version="1.1" id="svg2372" sodipodi:docname="time.svg" version="1.1 (c68e22c387, 2021-05-23)" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
   <defs id="defs2376" /> <sodipodi:namedview id="namedview2374" pagecolor="#ffffff" bordercolor="#111111" borderopacity="1" pageshadow="0" pageopacity="0" pagecheckerboard="1" showgrid="false" zoom="34.416667" cx="12" cy="12" window-width="2560" window-height="1034" window-x="-8" window-y="15" window-maximized="1" current-layer="svg2372" /> <g class="style-scope yt-icon" id="g2370"> <path
   d="m 12,3.67 c -4.58,0 -8.33,3.75 -8.33,8.33 0,4.58 3.75,8.33 8.33,8.33 4.58,0 8.33,-3.75 8.33,-8.33 0,-4.58 -3.75,-8.33 -8.33,-8.33 z m 3.5,11.83 -4.33,-2.67 v -5 h 1.25 v 4.34 l 3.75,2.25 z" class="style-scope yt-icon" 
   fill="#606060" id="path2368" /> </g> </svg>    
  `  
let timeSvgClicked =
  `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;" version="1.1" id="svg2372" sodipodi:docname="time.svg" version="1.1 (c68e22c387, 2021-05-23)" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
   <defs id="defs2376" /> <sodipodi:namedview id="namedview2374" pagecolor="#ffffff" bordercolor="#111111" borderopacity="1" pageshadow="0" pageopacity="0" pagecheckerboard="1" showgrid="false" zoom="34.416667" cx="12" cy="12" window-width="2560" window-height="1034" window-x="-8" window-y="15" window-maximized="1" current-layer="svg2372" /> <g class="style-scope yt-icon" id="g2370"> <path
   d="m 12,3.67 c -4.58,0 -8.33,3.75 -8.33,8.33 0,4.58 3.75,8.33 8.33,8.33 4.58,0 8.33,-3.75 8.33,-8.33 0,-4.58 -3.75,-8.33 -8.33,-8.33 z m 3.5,11.83 -4.33,-2.67 v -5 h 1.25 v 4.34 l 3.75,2.25 z" class="style-scope yt-icon" 
   fill="#FF0000" id="path2368" /> </g> </svg>    
  ` 
let likeSvg = 
  `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;" version="1.1" id="svg2564" sodipodi:docname="thumbsup.svg" version="1.1 (c68e22c387, 2021-05-23)" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
   <defs id="defs2568" /> <sodipodi:namedview id="namedview2566" pagecolor="#ffffff" bordercolor="#111111" borderopacity="1" pageshadow="0" pageopacity="0" pagecheckerboard="1" showgrid="false" zoom="34.416667" cx="12" cy="12" window-width="2560" window-height="1034" window-x="-8" window-y="15" window-maximized="1" current-layer="svg2564" /> <g class="style-scope yt-icon" id="g2562"> 
   <path d="m 3.75,18.75 h 3 v -9 h -3 z M 20.25,10.5 C 20.25,9.67 19.57,9 18.75,9 h -4.73 l 0.7,-3.43 0.03,-0.24 c 0,-0.3 -0.13,-0.6 -0.33,-0.8 L 13.62,3.75 8.7,8.7 C 8.4,8.96 8.25,9.34 8.25,9.75 v 7.5 c 0,0.82 0.67,1.5 1.5,1.5 h 6.75 c 0.62,0 1.15,-0.38 1.38,-0.9 l 2.27,-5.3 c 0.06,-0.18 0.1,-0.36 0.1,-0.55 z" class="style-scope yt-icon"
   fill="#606060" id="path2560" /> </g> </svg>    
  `
let likeSvgClicked = 
  `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;" version="1.1" id="svg2564" sodipodi:docname="thumbsup.svg" version="1.1 (c68e22c387, 2021-05-23)" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
   <defs id="defs2568" /> <sodipodi:namedview id="namedview2566" pagecolor="#ffffff" bordercolor="#111111" borderopacity="1" pageshadow="0" pageopacity="0" pagecheckerboard="1" showgrid="false" zoom="34.416667" cx="12" cy="12" window-width="2560" window-height="1034" window-x="-8" window-y="15" window-maximized="1" current-layer="svg2564" /> <g class="style-scope yt-icon" id="g2562"> 
   <path d="m 3.75,18.75 h 3 v -9 h -3 z M 20.25,10.5 C 20.25,9.67 19.57,9 18.75,9 h -4.73 l 0.7,-3.43 0.03,-0.24 c 0,-0.3 -0.13,-0.6 -0.33,-0.8 L 13.62,3.75 8.7,8.7 C 8.4,8.96 8.25,9.34 8.25,9.75 v 7.5 c 0,0.82 0.67,1.5 1.5,1.5 h 6.75 c 0.62,0 1.15,-0.38 1.38,-0.9 l 2.27,-5.3 c 0.06,-0.18 0.1,-0.36 0.1,-0.55 z" class="style-scope yt-icon"
   fill="#FF0000" id="path2560" /> </g> </svg>    
  `
let arrowSvg = 
  `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;" version="1.1" id="svg2756" sodipodi:docname="arrow-down.svg" version="1.1 (c68e22c387, 2021-05-23)" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">     <defs
   id="defs2760" /> <sodipodi:namedview id="namedview2758" pagecolor="#ffffff" bordercolor="#111111" borderopacity="1" pageshadow="0" pageopacity="0" pagecheckerboard="1" showgrid="false" zoom="34.416667" cx="12" cy="12" window-width="2560" window-height="1034" window-x="-8" window-y="15" window-maximized="1" current-layer="svg2756" /> <g class="style-scope yt-icon" id="g2754"> <path d="M 16.59,8.59 12,13.17 7.41,8.59 6,10 l 6,6 6,-6 z"
   class="style-scope yt-icon"
   fill="#606060" id="path2752" /> </g> </svg>  
  `
let arrowSvgClicked = 
  `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;" version="1.1" id="svg2756" sodipodi:docname="arrow-down.svg" version="1.1 (c68e22c387, 2021-05-23)" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">     <defs
   id="defs2760" /> <sodipodi:namedview id="namedview2758" pagecolor="#ffffff" bordercolor="#111111" borderopacity="1" pageshadow="0" pageopacity="0" pagecheckerboard="1" showgrid="false" zoom="34.416667" cx="12" cy="12" window-width="2560" window-height="1034" window-x="-8" window-y="15" window-maximized="1" current-layer="svg2756" /> <g class="style-scope yt-icon" id="g2754"> <path d="M 16.59,8.59 12,13.17 7.41,8.59 6,10 l 6,6 6,-6 z"
   class="style-scope yt-icon"
   fill="#FF0000" id="path2752" /> </g> </svg>  
  `


let themes =
  [
    'Tudo',
    'Cursos',
    'JavaScript',
    'Desenhos',
    'Websites',
    'CSS',
    'Músicas',
    'Vídeos',
    'Culinária',
    'Vendas',
    'Jogos',
    'Consoles',
    'Html',
    'ReactJS',
    'NodeJs',
    'Programação',
    'Inglês',
    'Filmes',
    'Séries',
    'Cachorros',
    'Gatos',
    'Família',
    'Podcast',
    'Ações',
    'CriptoMoedas'
  ]

function loadButtons(){
  let top = document.querySelector('#top-grid-middle');
  
   for (let i=0; i < themes.length; i++) {

    top.innerHTML +=          
    `
      <div class="top-button">
         <button>${themes[i]}</button>
      </div>
    `
  }
}  


//Carrega a área de vídeos
//Load the videos area 
function loadVideos(){
  let cards = document.querySelector('div#video-grid');
  let hora = 'hora';

  // <div class="video-card" style=" animation: 2s bgrandom infinite">

  for (let i=0; i<30; i++){
    if (i>1){hora = 'horas'}
    cards.innerHTML += 
    `<div class="cards">
      <a href="#">
          <div class="video-card">
            <h1>Video ${i+1}</h1>
          </div>
          <div class="profile"> 
            <div class="avatar"> ${i+1} </div>

            <div class="video-text">
              <span> Título do vídeo ${i+1} </span>
              <span> Nome do canal ${i+1} </span>
              <span> ${i+(1 * 100)} visualizações • há ${i+1} ${hora}</span>
            </div>
          </div>
      </a>  
    </div>
    `
  }

  //inicializa o botão home como clicado
  //initializes the home button as clicked
  buttonClicked('home');
} 


function changeImageClicked(menu){

  //Troca a imagem e a classe do botão que está clicado
  //Changes the image and class from clicked button
  if (homeClicked === false){  
    divHome.innerHTML = homeSvg;
    divHomeSecondary.innerHTML = homeSvg;
    buttonHome.classList.remove('sidebar-link-clicked');
  }else{
    divHome.innerHTML = homeSvgClicked;
    divHomeSecondary.innerHTML = homeSvgClicked;
    buttonHome.classList.add('sidebar-link-clicked');
  };

  if (explorerClicked === false){
    divExplorer.innerHTML = explorerSvg;
    divExplorerSecondary.innerHTML = explorerSvg;
    buttonExplorer.classList.remove('sidebar-link-clicked');
  }else{
    divExplorer.innerHTML = explorerSvgClicked;
    divExplorerSecondary.innerHTML = explorerSvgClicked;
    buttonExplorer.classList.add('sidebar-link-clicked');
  };

  if (subsClicked === false){
    divSubs.innerHTML = subsSvg;
    divSubsSecondary.innerHTML = subsSvg;
    buttonSubs.classList.remove('sidebar-link-clicked');
  }else{
    divSubs.innerHTML = subsSvgClicked;
    divSubsSecondary.innerHTML = subsSvgClicked;
    buttonSubs.classList.add('sidebar-link-clicked');
  };  

  if (libraryClicked === false){
    divLibrary.innerHTML = librarySvg;
    divLibrarySecondary.innerHTML = librarySvg;
    buttonLibrary.classList.remove('sidebar-link-clicked');
  }else{
    divLibrary.innerHTML = librarySvgClicked;
    divLibrarySecondary.innerHTML = librarySvgClicked;
    buttonLibrary.classList.add('sidebar-link-clicked');
  };  

  if (historyClicked === false){
    divHistory.innerHTML = historySvg;
    buttonHistory.classList.remove('sidebar-link-clicked');
  }else{
    divHistory.innerHTML = historySvgClicked;
    buttonHistory.classList.add('sidebar-link-clicked');
  };    

  if (videosClicked === false){
    divVideos.innerHTML = videosSvg;
    buttonVideos.classList.remove('sidebar-link-clicked');
  }else{
    divVideos.innerHTML = videosSvgClicked;
    buttonVideos.classList.add('sidebar-link-clicked');
  };  

  if (timeClicked === false){
    divTime.innerHTML = timeSvg;
    buttonTime.classList.remove('sidebar-link-clicked');
  }else{
    divTime.innerHTML = timeSvgClicked;
    buttonTime.classList.add('sidebar-link-clicked');
  }; 
  
  if (likeClicked === false){
    divLike.innerHTML = likeSvg;
    buttonLike.classList.remove('sidebar-link-clicked');
  }else{
    divLike.innerHTML = likeSvgClicked;
    buttonLike.classList.add('sidebar-link-clicked');
  };    

  if (arrowClicked === false){
    divArrow.innerHTML = arrowSvg;
    buttonArrow.classList.remove('sidebar-link-clicked');
  }else{
    divArrow.innerHTML = arrowSvgClicked;
    buttonArrow.classList.add('sidebar-link-clicked');
  };    

}

function buttonClicked(idButton){
  let button = document.getElementById(idButton);

  //marca qual botão está clicado
  //Set what button is flaged
  if (button.id.substring(0,4) == 'home'){
    homeClicked = true;
    explorerClicked = !homeClicked; 
    subsClicked =     !homeClicked;
    libraryClicked =  !homeClicked; 
    historyClicked =  !homeClicked; 
    videosClicked =   !homeClicked;
    timeClicked =     !homeClicked; 
    likeClicked =     !homeClicked; 
    arrowClicked =    !homeClicked;
  }
  else
  if (button.id.substring(0,8) == 'explorer'){
    explorerClicked = true;
    homeClicked =    !explorerClicked; 
    subsClicked =    !explorerClicked;
    libraryClicked = !explorerClicked; 
    historyClicked = !explorerClicked;
    videosClicked =  !explorerClicked;
    timeClicked =    !explorerClicked; 
    likeClicked =    !explorerClicked; 
    arrowClicked =   !explorerClicked;
  }
  else
  if (button.id.substring(0,4) == 'subs'){
    subsClicked = true;
    homeClicked =     !subsClicked; 
    explorerClicked = !subsClicked;
    libraryClicked =  !subsClicked; 
    historyClicked =  !subsClicked;
    videosClicked =   !subsClicked;
    timeClicked =     !subsClicked; 
    likeClicked =     !subsClicked; 
    arrowClicked =    !subsClicked;
  }
  else
  if (button.id.substring(0,7) == 'library'){
    libraryClicked = true;
    homeClicked =     !libraryClicked; 
    explorerClicked = !libraryClicked;
    subsClicked =     !libraryClicked; 
    historyClicked =  !libraryClicked;
    videosClicked =   !libraryClicked;
    timeClicked =     !libraryClicked; 
    likeClicked =     !libraryClicked; 
    arrowClicked =    !libraryClicked;
  }
  else
  if (button.id == 'history'){
    historyClicked = true;
    homeClicked =     !historyClicked; 
    explorerClicked = !historyClicked;
    subsClicked =     !historyClicked; 
    libraryClicked =  !historyClicked;
    videosClicked =   !historyClicked;
    timeClicked =     !historyClicked; 
    likeClicked =     !historyClicked; 
    arrowClicked =    !historyClicked;
  }
  else
  if (button.id == 'videos'){
    videosClicked = true;
    homeClicked =     !videosClicked; 
    explorerClicked = !videosClicked;
    subsClicked =     !videosClicked; 
    libraryClicked =  !videosClicked;
    historyClicked =  !videosClicked;
    timeClicked =     !videosClicked; 
    likeClicked =     !videosClicked; 
    arrowClicked =    !videosClicked;
  }
  else
  if (button.id == 'time'){
    timeClicked = true;
    homeClicked =     !timeClicked; 
    explorerClicked = !timeClicked;
    subsClicked =     !timeClicked; 
    libraryClicked =  !timeClicked;
    historyClicked =  !timeClicked;
    videosClicked =   !timeClicked; 
    likeClicked =     !timeClicked; 
    arrowClicked =    !timeClicked;
  }
  else
  if (button.id == 'like'){
    likeClicked = true;
    homeClicked =     !likeClicked; 
    explorerClicked = !likeClicked;
    subsClicked =     !likeClicked; 
    libraryClicked =  !likeClicked;
    historyClicked =  !likeClicked;
    videosClicked =   !likeClicked; 
    timeClicked =     !likeClicked; 
    arrowClicked =    !likeClicked;
  }
  else
  if (button.id == 'arrow'){
    arrowClicked = true;
    homeClicked =     !arrowClicked; 
    explorerClicked = !arrowClicked;
    subsClicked =     !arrowClicked; 
    libraryClicked =  !arrowClicked;
    historyClicked =  !arrowClicked;
    videosClicked =   !arrowClicked; 
    timeClicked =     !arrowClicked; 
    likeClicked =     !arrowClicked;
  }  

  //Troca a imagem e a classe do botão que está clicado
  //Changes the image and class from clicked button
  if(menuClosed === false){
    changeImageClicked('sidebar-main')
  }else{
    changeImageClicked('sidebar-secondary')
  }

}

function menuClose(){
  let sideBar = document.querySelector("#sidebar-main");
  let sideBarSec = document.querySelector(".sidebar-secondary");

  menuClosed = !menuClosed;


  if (menuClosed === true){
    sideBar.classList.add('menu-closed');
    sideBarSec.classList.add('menu-opened');
    sideBar.classList.remove('.sidebar-main');

    document.querySelector('section').classList.remove('modal');
  }
  else{
    sideBar.classList.remove('menu-closed');
    sideBarSec.classList.remove('menu-opened');
    document.getElementById('sidebar-main').style.width = "260px !important";

    if (isModal === false){ 
      document.querySelector('section').classList.remove('modal');
      document.getElementById('sidebar-main').classList.remove('sidebar-main');
    }else{  
      document.querySelector('section').classList.add('modal');  
      document.getElementById('sidebar-main').classList.add('sidebar-main'); 
    }
  }

  if(menuClosed === false){
    changeImageClicked('sidebar-main')
    console.log('aberto');
  }else{
    changeImageClicked('sidebar-secondary')
    console.log('fechado');
  }  
}

function getScrollValue(){
  scrollValueLeft = document.getElementById('top-grid-middle').scrollLeft;
  scrollValueRight = document.getElementById('top-grid-middle').scrollWidth - document.getElementById('top-grid-middle').scrollLeft;
}

function validateScroll(){
  if (scrollValueLeft === 0){
    document.getElementById('top-grid-first').classList.add('hide');
  }
  else{
    document.getElementById('top-grid-first').classList.remove('hide');
  }

  if ( scrollValueRight ===  document.getElementById('top-grid-middle').clientWidth ){
    document.getElementById('top-grid-last').classList.add('hide');
  }
  else{
    document.getElementById('top-grid-last').classList.remove('hide');
  } 
}

function scrolllLeft(){
  document.getElementById('top-grid-middle').scrollLeft -= document.getElementById('top-grid-middle').offsetLeft + offSet;
  getScrollValue();
  validateScroll();
}

function scrollRigth(){
  document.getElementById('top-grid-middle').scrollLeft += document.getElementById('top-grid-middle').offsetLeft + offSet;

  getScrollValue();
  validateScroll();
}

// function scrollIntoView(selector, offset = 0) {
  // window.scroll(document.querySelector(selector).offsetLeft - offset, 0 );
  // console.log('entrou');
  // console.log(selector);
  // document.getElementById(selector).scrollLeft = document.getElementById(selector).offsetLeft + offset;
  
// }

window.onresize = function(event) {
  // if (window.innerWidth < 768) {
  //   console.log("Largura da janela menor que 768 px");
  // }
  if (window.matchMedia("(max-width: 500px)").matches) {
    offSet = 60;
  }else{
    offSet = 200;
  };

  if (window.matchMedia("(max-width: 807px)").matches) {
    document.getElementById('sidebar-main').style.width = "0px !important";
    document.getElementById('sidebar-secondary').style.display = "none";  
    document.getElementById('sidebar-main').classList.add('sidebar-main');
    
    isModal = true;
  }
  else
  if (window.matchMedia("(max-width: 1312px)").matches) {
    menuClosed = false;
    document.getElementById('sidebar-secondary').style.display = "flex";  
    document.querySelector('section').classList.remove('modal');
    menuClose();
    isModal = false;
  }
  else
  if (window.matchMedia("(min-width: 1312px)").matches)  
  {
    menuClosed = true;
    document.getElementById('sidebar-secondary').style.display = "flex";  
    document.querySelector('section').classList.remove('modal');
    menuClose();
    isModal = false;
  }else{
    isModal = false;
  } 

  getScrollValue();
  validateScroll();

};


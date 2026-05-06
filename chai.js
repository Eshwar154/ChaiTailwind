// chai.js


// 1. Map short keywords → CSS property names
const propMap = {
  p:    'padding',
  m:    'margin',
  pt:   'padding-top',
  pb:   'padding-bottom',
  pl:   'padding-left',
  pr:   'padding-right',
  mt:   'margin-top',
  mb:   'margin-bottom',
  fs:   'font-size',
  bg:   'background-color',
  text: 'color',
};

// 2. Classes that don't have a number — fixed values
const flagMap = {
  'rounded':      { 'border-radius': '6px' },
  'border':       { 'border': '1px solid #ccc' },
  'flex':         { 'display': 'flex', 'flex-wrap': 'wrap' },
  'hidden':       { 'display': 'none' },
  'text-center':  { 'text-align': 'center' },
  'text-left':    { 'text-align': 'left' },
  'text-right':   { 'text-align': 'right' },
};

const hoverMap ={
    'hover-bg-blue':{backgroundColor:'blue'},
    'hover-bg-red':{backgroundColor:'red'},
    'hover-text-white':{color:'white'}
}

const darkModeMap = {
  'dark-bg':   { backgroundColor: '#1a1a1a' },
  'dark-text': { color: '#ffffff' },
  'dark-border': { borderColor: '#444' },
};


function applyDarkMode(isDark) {
  const elements = document.querySelectorAll('*');

  elements.forEach(el => {
    el.classList.forEach(cls => {
      if (!cls.startsWith('chai-dark-')) return;

      const name = cls.replace('chai-', ''); // "dark-bg"

      if (darkModeMap[name]) {
        if (isDark) {
          Object.assign(el.style, darkModeMap[name]); // apply dark styles
        } else {
          // Remove dark styles (reset)
          Object.keys(darkModeMap[name]).forEach(prop => {
            el.style[prop] = '';
          });
        }
      }
    });
  });
}

// Toggle dark mode on button click
function toggleDarkMode() {
  const isDark = document.body.classList.toggle('dark-mode');
  applyDarkMode(isDark);
}
function applyHoverStyles(){
    const elements = document.querySelectorAll('*');

    elements.forEach(el=>{
        el.classList.forEach(cls=>{
            if(!cls.startsWith('chai-hover-'))return;

            const name = cls.replace('chai-','');

            if(hoverMap[name]){
                const originalStyles ={};

                el.addEventListener('mouseenter',()=>{
                    Object.keys(hoverMap[name]).forEach(prop =>{
                        originalStyles[prop] = el.style[prop];
                        el.style[prop] = hoverMap[name][prop];
                    });
                }
            );
                        el.addEventListener('mouseleave',()=>{
                            Object.keys(hoverMap[name]).forEach(prop=>{
                                el.style[prop]=originalStyles[prop];
                            });
                        });

                    }
                }
                )
                
            }
        )
        }
    



function applyChaiStyles() {

  const elements = document.querySelectorAll('*');

  elements.forEach(el => {
    el.classList.forEach(cls => {
      if (!cls.startsWith('chai-')) return; 

      const name = cls.replace('chai-', ''); 

     
      if (flagMap[name]) {
        Object.assign(el.style, flagMap[name]);
        return;
      }

     
      const dashIdx = name.indexOf('-');
      if (dashIdx === -1) return; 

      const prop  = name.slice(0, dashIdx);   
      const value = name.slice(dashIdx + 1);  

      const cssProp = propMap[prop];
      if (!cssProp) return; 

     
      const cssValue = isNaN(value) ? value : value + 'px';

      el.style[cssProp] = cssValue;
    });
  });
}


document.addEventListener('DOMContentLoaded', ()=>{
    applyChaiStyles();
    applyHoverStyles();

    // auto detect system dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) applyDarkMode(true);
});
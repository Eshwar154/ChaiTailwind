☕ ChaiTailwindA lightweight, zero-dependency, utility-first styling engine that brings Tailwind-inspired syntax to the web using a pure JavaScript runtime.  
🚀 Features
Zero-Build Utility Classes: Apply styles like chai-p-20 or chai-bg-steelblue directly in your HTML without a CSS compiler. 
Dynamic Property Mapping: Automatically translates shorthand keywords such as pt, fs, and bg into full CSS properties like padding-top, font-size, and background-color.  Built-in 
State Handling:Hover States: Native support for hover effects (e.g., chai-hover-bg-blue) using JavaScript event listeners. 
Dark Mode: Supports manual toggling and automatic system preference detection via prefers-color-scheme. 
Intelligent Unit Scaling: Automatically appends px to numerical values while correctly handling string-based values for colors and named units.  
Layout Quick-Flags: Instant access to common layouts with classes like chai-flex, chai-rounded, and chai-text-center. 
🛠️ How It WorksThe engine, contained within chai.js, operates through three primary layers: 
The Property Map: A dictionary that maps short keys (like m) to their corresponding CSS property names (like margin).
The Flag System: Manages non-numerical classes such as rounded or border to apply pre-defined style objects. 
The Runtime Scanner: Triggered on DOMContentLoaded, the script scans every DOM element for the chai- prefix and dynamically injects the calculated styles into the element's style object.  


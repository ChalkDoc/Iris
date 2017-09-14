# Chalkdoc Iris

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

##Prerequisites
You will need the following things properly installed on your computer

  * Git
  * Node.js (with NPM)
  * Angular2

## Installation and Deployment
   * git clone this repository - https://github.com/ahorod/chalkdoc-graphinator.git
   * cd chalkdoc-graphinator
   * npm install
   * npm start
   * navigate to http://localhost:4200/

## User Interactivity
  * Click on the initial input, the keyboard will appear.
  * Use the keyboard to type in desired equation that you want graphed.
  * Use the "download me" button to save a snapshot of the graph if desired.
  * To change the size of the graph scroll with the mouse or drag the graph to change the view.
  * Press enter or the "+" button to add another equation to your graph.

## Developer Tips
  * The graph were plotted with functionPlot https://github.com/mauriciopoppe/function-plot.git
  * functionPlot uses D3 V 3.5.7
  * Guppy is used to translate the input into a recognizable mathematical equation. https://github.com/daniel3735928559/guppy.git

## Known Bugs
  * Application cannot plot inequalty equations
  * If 7 or more input fields are desired, guppy will overlap the keyboard
  * EXCEPTION: Cannot read property 'lo' of undefined -> this is because when you call the function say COS() it has ('') nothing in the parameter and it runs it immediately to functionplot, we can add validation to stop this error. not a huge deal but it'd be nice to fix this. 

## Future Goals
  * Set the x and y axis
  * Focus on one or more quadrant

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



##  KEYBOARD tips: I deleted this from symbols.js (Modified the keyboard majorly - mind the commas) We need the operations tab, or else we can't do x<3 for instance:

For reference you can access the full keyboard here: https://cdn.rawgit.com/daniel3735928559/guppy/24d744fd/examples/osk.html

Things I removed:
1. Calculus tab
2. Infinity button as it doesn't work / unknown reason.
3. ||?|| Strange function not needed and floor function LL 
4. 

"norm":
    {"output":{
        "latex":"||{$1}||",
        "text":"norm({$1})"},
     "current":0,
     "type":"norm",
     "group":"functions",
     "attrs":[{"delete":"1"}]
    },

    "_literal":[{"group":"greek",
    "symbols":["alpha","beta","gamma","delta","epsilon","zeta","eta","theta","iota","kappa","lambda","mu","nu","xi","omicron","pi","rho","sigma","tau","upsilon","phi","chi","psi","omega","Gamma","Delta","Theta","Lambda","Xi","Pi","Sigma","Phi","Psi","Omega"]}]

    {"group":"qwerty",
	 "symbols":{
	     "infty":{"latex":"\\infty","text":" $infinity "}}}

"text":
    {"output":{
        "latex":"\\text{{$1}}",
        "text":"text({$1})"},
     "current":0,
     "type":"text",
     "group":"editor",
     "attrs":[{"mode":"text"}]
    },
    
    "sym_name":
    {"output":{
        "latex":"\\backslash\\texttt{{$1}}",
        "text":"SYMBOL({$1})"},
     "current":0,
     "type":"symbol",
     "group":"editor",
     "attrs":[{"mode":"symbol"}]
    },
    

    "int":
    {"output":{
        "latex":"\\displaystyle\\int{{$1}}d{$2}",
        "small_latex":"\\int{{$1}}d{$2}",
	"text":"integrate({$1},{$2})"},
     "current":0,
     "type":"indefinite_integral",
     "group":"calculus",
     "attrs":[
	 {"delete":"1","name":"integrand"},
	 {"delete":"1","bracket":"yes","name":"variable"}
     ]
    },
    
    "defi":
    {"output":{
        "latex":"\\displaystyle\\int_{{$1}}^{{$2}}{$3}d{$4}",
        "small_latex":"\\int_{{$1}}^{{$2}}{$3}d{$4}",
	"text":"integrate({$3},{$4},{$1},{$2})"},
     "current":0,
     "type":"definite_integral",
     "group":"calculus",
     "attrs":[
	 {"down":"1","up":"2","small":"yes","name":"lower_limit"},
	 {"down":"1","up":"2","small":"yes","name":"upper_limit"},
	 {"down":"1","up":"2","delete":"3","name":"integrand"},
	 {"down":"1","up":"2","bracket":"yes","delete":"4","name":"variable"}
     ]
    },
    
    "deriv":
    {"output":{
        "latex":"\\displaystyle\\frac{d}{d{$1}}{$2}",
        "small_latex":"\\frac{d}{d{$1}}{$2}",
	"text":"diff({$2},{$1})"},
     "current":0,
     "type":"derivative",
     "group":"calculus",
     "attrs":[
	 {"down":"1","up":"2","bracket":"yes","name":"function"},
	 {"down":"1","up":"2","bracket":"yes","name":"variable"}
     ]
    },
        

    "floor":
    {"output":{
        "latex":"\\lfloor{$1}\\rfloor",
	"text":"floor({$1})"},
     "current":0,
     "type":"floor",
     "group":"functions",
     "attrs":[{"delete":"1"}]
    },
{
    "norm":
    {"output":{
        "latex":"||{$1}||",
        "text":"norm({$1})"},
     "current":0,
     "type":"norm",
     "group":"functions",
     "attrs":[{"delete":"1"}]
    },
    
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
    
    "abs":
    {"output":{
        "latex":"\\left|{$1}\\right|",
	"text":"abs({$1})"},
     "current":0,
     "type":"absolute_value",
     "group":"functions",
     "attrs":[{"delete":"1"}]
    },
    
    "sqrt":
    {"output":{
        "latex":"\\sqrt{{$1}}",
        "text":"sqrt({$1})"},
     "current":0,
     "type":"square_root",
     "group":"functions",
     "attrs":[{"delete":"1"}]
    },
    
    "paren":
    {"output":{
        "latex":"\\left({$1}\\right)",
	"text":"({$1})"},
     "current":1,
     "type":"bracket",
     "group":"functions",
     "attrs":[{"delete":"1","is_bracket":"yes"}]
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
    
    "exp":
    {"output":{
        "latex":"{{$1}}^{{$2}}",
	"text":"({$1})^({$2})"},
     "current":1,
     "type":"exponential",
     "current_type":"token",
     "group":"functions",
     "attrs":[
	 {"up":"2","bracket":"yes","delete":"1","name":"base"},
	 {"down":"1","delete":"1","name":"exponent","small":"yes"}
     ]
    },
    
    "sub":
    {"output":{
        "latex":"{{$1}}_{{$2}}",
	"text":"{$1}{$2}"},
     "current":1,
     "type":"subscript",
     "current_type":"token",
     "group":"functions",
     "attrs":[
	 {"down":"2","bracket":"yes","delete":"1","name":"base"},
	 {"up":"1","delete":"1","name":"subscript","small":"yes"}
     ]
    },
    
    "frac":
    {"output":{
        "latex":"\\dfrac{{$1}}{{$2}}",
        "small_latex":"\\frac{{$1}}{{$2}}",
	"text":"({$1})/({$2})"},
     "current":0,
     "type":"fraction",
     "group":"functions",
     "attrs":[
	 {"up":"1","down":"2","name":"numerator"},
	 {"up":"1","down":"2","name":"denominator"}
     ]
    },
    
    "slash":
    {"output":{
        "latex":"\\dfrac{{$1}}{{$2}}",
        "small_latex":"\\frac{{$1}}{{$2}}",
	"text":"({$1})/({$2})"},
     "current":1,
     "current_type":"token",
     "type":"fraction",
     "group":"functions",
     "attrs":[
	 {"up":"1","down":"2","name":"numerator"},
	 {"up":"1","down":"2","name":"denominator"}
     ]
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
        
    "sum":
    {"output":{
        "latex":"\\displaystyle\\sum_{{$1}}^{{$2}}{$3}",
        "small_latex":"\\sum_{{$1}}^{{$2}}{$3}",
	"text":"sum({$3},{$1},{$2})"},
     "current":0,
     "type":"summation",
     "group":"functions",
     "attrs":[
	 {"down":"1","up":"2","small":"yes","name":"lower_limit"},
	 {"down":"1","up":"2","small":"yes","name":"upper_limit"},
	 {"down":"1","up":"2","delete":"3","bracket":"yes","name":"summand"}
     ]
    },

    "root":
    {"output":{
        "latex":"\\sqrt[{$1}]{{$2}}",
	"text":"nroot({$1},{$2})"},
     "current":0,
     "type":"root",
     "group":"functions",
     "attrs":[
	 {"down":"2","up":"1","small":"yes","delete":"1","name":"index"},
	 {"down":"2","up":"1","delete":"1","name":"radicand"}
     ]
    },
    
    "_func":[{
	"group":"functions",
	"symbols":["sin","cos","tan","sec","csc","cot","log","ln"]
    }],
    
    "_raw":[
	{"group":"operations",
	 "symbols":{
	     "*":{"latex":"\\cdot","text":"*"},
	     "leq":{"latex":"\\leq","text":" <= "},
	     "less":{"latex":"<","text":" < "},
	     "geq":{"latex":"\\geq","text":" >= "},
	     "greater":{"latex":">","text":" > "}}},
	{"group":"qwerty",
	 "symbols":{
	     "infty":{"latex":"\\infty","text":" $infinity "}}}
    ]
}
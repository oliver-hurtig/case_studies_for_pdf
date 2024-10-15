window.MathJax = {
    loader: {load: ['[tex]/textmacros', '[tex]/textcomp']},
    tex: {
      inlineMath: [["\\(", "\\)"]],
      displayMath: [["\\[", "\\]"]],
      processEscapes: true,
      processEnvironments: true,
      packages: {'[+]': ['textmacros']},
      textmacros: {packages: {'[+]': ['textcomp']}},
    },    
    
    
    options: {
      ignoreHtmlClass: ".*|",
      processHtmlClass: "arithmatex"
    }
  };
  
  document$.subscribe(() => { 
  
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    MathJax.startup.output.clearCache()
    MathJax.typesetClear()
    MathJax.texReset()
    MathJax.typesetPromise()
  })
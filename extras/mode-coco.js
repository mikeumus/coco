(function(){var a=function(a,b){function c(){}c.prototype=(a.superclass=b).prototype;return(a.prototype=new c).constructor=a};define("ace/mode/coco",function(b,c,d){var e,f,g;c.Mode=e=function(c){function f(){this.$tokenizer=new(b("ace/tokenizer").Tokenizer)(f.Rules),this.$outdent=new(b("ace/mode/matching_brace_outdent").MatchingBraceOutdent)}var d,e=a(f,c).prototype;f.displayName="CocoMode",d=/(?:[({[=:]|[-~]>|\b(?:else|d(?:o|efault)|try|finally|catch(?:\s*[$A-Za-z_\x7f-\uffff][$\w\x7f-\uffff]*)?))\s*$/,e.getNextLineIndent=function(a,b,c){var e,f;e=this.$getIndent(b),f=this.$tokenizer.getLineTokens(b,a).tokens,(!f.length||f[f.length-1].type!=="comment")&&a==="start"&&d.test(b)&&(e+=c);return e},e.toggleCommentLines=function(a,c,d,e){var f,g,h,i,j;f=/^(\s*)#/,g=new(b("ace/range").Range)(0,0,0,0);for(h=d;h<=e;++h)(j=f.test(i=c.getLine(h)))?i=i.replace(f,"$1"):i=i.replace(/^\s*/,"$&#"),g.end.row=g.start.row=h,g.end.column=i.length+1,c.replace(g,i);return 1-j*2},e.checkOutdent=function(a,b,c){return this.$outdent.checkOutdent(b,c)},e.autoOutdent=function(a,b,c){return this.$outdent.autoOutdent(b,c)};return f}(b("ace/mode/text").Mode),f="[$A-Za-z_\\x7f-\\uffff][$\\w\\x7f-\\uffff]*",g={token:"string",regex:".+"},e.Rules={start:[{token:"identifier",regex:"(?:@|(?:\\.|::)\\s*)"+f},{token:function(a){switch(a){case"this":case"super":case"return":case"throw":case"break":case"continue":case"if":case"else":case"for":case"while":case"switch":case"case":case"default":case"try":case"catch":case"finally":case"class":case"extends":case"new":case"do":case"delete":case"typeof":case"in":case"instanceof":case"import":case"function":case"debugger":case"then":case"of":case"unless":case"until":case"is":case"not":case"and":case"or":case"arguments":case"eval":return"keyword";case"true":case"false":case"null":case"void":return"constant.language";case"var":case"with":case"const":case"enum":case"export":case"implements":case"interface":case"let":case"package":case"private":case"protected":case"public":case"static":case"yield":return"invalid.illegal";case"Array":case"Boolean":case"Date":case"Function":case"Number":case"Object":case"RegExp":case"String":case"Error":case"EvalError":case"RangeError":case"ReferenceError":case"SyntaxError":case"TypeError":case"URIError":return"language.support.buildin.class";case"Math":case"JSON":case"isNaN":case"isFinite":case"parseInt":case"parseFloat":case"encodeURI":case"decodeURI":case"encodeURIComponent":case"decodeURIComponent":return"language.support.buildin.function";case"it":case"that":case"from":case"to":case"til":case"by":case"own":case"ever":case"fallthrough":return"variable";default:return"identifier"}},regex:f+"(?:\\s*:)?"},{token:"keyword",regex:"@@?(?!@)"},{token:"string",regex:"\\\\\\S[^\\s,;)}\\]]*"},{token:"string.doc",regex:"'''",next:"qdoc"},{token:"string.doc",regex:'"""',next:"qqdoc"},{token:"string",regex:"'",next:"qstring"},{token:"string",regex:'"',next:"qqstring"},{token:"string",regex:"`",next:"js"},{token:"string",regex:"<\\[",next:"words"},{token:"string.regex",regex:"///",next:"heregex"},{token:"comment.doc",regex:"/\\*",next:"comment"},{token:"comment",regex:"#.*"},{token:"string.regex",regex:"/(?!\\s)[^[/\\n\\\\]*(?: (?:\\\\.|\\[[^\\]\\n\\\\]*(?:\\\\.[^\\]\\n\\\\]*)*\\])[^[/\\n\\\\]*)*/[imgy]{0,4}(?!\\w)"},{token:"constant.numeric",regex:"(?:0x[\\da-fA-F]+|(?:[1-9]\\d?)[rR][\\da-zA-Z]+|(?:\\d+(?:\\.\\d+)?)(?:[eE][+-]?\\d+)?[a-zA-Z_]*)"},{token:"lparen",regex:"[({[]"},{token:"rparen",regex:"[)}\\]]"},{token:"keyword.operator",regex:"\\S+"},{token:"text",regex:"\\s+"}],heregex:[{token:"string.regex",regex:".*?///(?:\\?|[imgy]{0,4})",next:"start"},{token:"comment.regex",regex:"\\s+(?:#.*)?"},{token:"string.regex",regex:"\\S+"}],qdoc:[{token:"string",regex:".*?'''",next:"start"},g],qqdoc:[{token:"string",regex:'.*?"""',next:"start"},g],qstring:[{token:"string",regex:"[^\\\\']*(?:\\\\.[^\\\\']*)*'",next:"start"},g],qqstring:[{token:"string",regex:'[^\\\\"]*(?:\\\\.[^\\\\"]*)*"',next:"start"},g],js:[{token:"string",regex:"[^\\\\`]*(?:\\\\.[^\\\\`]*)*`",next:"start"},g],words:[{token:"string",regex:".*?]>",next:"start"},g],comment:[{token:"comment.doc",regex:".*?\\*/",next:"start"},{token:"comment.doc",regex:".+"}]}})}).call(this)
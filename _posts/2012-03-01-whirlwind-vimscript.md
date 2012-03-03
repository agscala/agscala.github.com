---
layout: post
title: Whirlwind Vimscript
tags: []
published: true
---

## Setting Variables

`let/unlet <var>` = set/unset.  (unlet! supresses error if variable doesn't exist)
`<var>` is presistent across script runs.

{% highlight vimscript %}
b:var - buffer
w:var - window
g:var - global
a:var - function argument variable (only inside a function)
v:var - Predefined Vim variable.
{% endhighlight %}

`&<option>` gives you the value of a "set" style option
`$<variable>` gives the value of a system variable


{% highlight %}
while <expr>
endwhile
{% endhighlight %}

{% highlight %}
for <var> in <list>
	continue
	break
endfor
{% endhighlight %}

{% highlight %}
for [var1, var2] in [[1, 2], [3, 4]]
	// on 1st loop, var1 = 1 and var2 = 2
	// on 2nd loop, var1 = 3 and var2 = 4
endfor
{% endhighlight %}

{% highlight %}
function <name>(arg1, arg2, ...)
	// ... is variable length index. Access element 3 with "a:1"
	let index = 1
	let variable_arg_1 = a:{index}
	let local_var = a:arg1
	return local_var
endfunction
{% endhighlight %}

delfunction deletes a function

{% highlight %}
function! function_name() range
	// "function!" redefines the function
	// "range" keyword gives you access to the line number of the range
	// sample call: 10,30call function_name()
	// a:firstline is 10
	// a:lastline is 30
endfunction
{% endhighlight %}

if <expr>
elseif <expr>
else
endif

try
catch
finally
endtry

Comparisons
	==, !=, >, >=, <, <=
String:
	<operator># Match case.
	<operator>? Don't match case.
	<string> =~ <pattern> String matches
	<string> !~ <pattern> String doesn't match
	<string> . <string> Concatinate

execute <string> - Run ex-mode commands
normal <string> - Run normal-mode commands (normal "ggVG" selects whole document)
eval(<string>) - Get expression value

to just call a function, "call" is necessary unless it's part of an expression
call <function_name>(<args>)

MAKING A PACKAGE

" This is the XXX package
if exists("XXX_loaded")
	delfun XXX_one
	delfun XXX_two
endif

function XXX_one(a)
	... body of function ...
endfun

function XXX_two(b)
	... body of function ...
endfun

let XXX_loaded = 1


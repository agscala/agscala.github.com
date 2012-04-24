---
layout: post
title: Whirlwind Vimscript
category:
tags: []
published: false
---

This article is intended so that you can learn the basics of vimscript as quickly as possible.
You might even be able to consider this to be a cheat sheet.
Nearly all of the following information can be found in vim's internal documentation.

You should probably already know how to program before reading this.

*Note:*
Examples may contain tokens resembling `<token>`.
These are meant to be replaced completely, including the `<` and the `>`.
Vimscript does use `<` and `>` as comparison operators.

## Variables

Vimscript is both *dynamically* and *weakly* typed.

`let` is used to set a variable.
`unlet` is used to unset a variable.
`unlet!` unsets a variable and surpresses the error if it doesn't exist.

{% highlight vim %}
" Variable scoping:

b:var - buffer.
w:var - window.
g:var - global.
a:var - function argument variable.
v:var - Predefined Vim variable.

&<option> gives the value of a "set" style option.
$<variable> gives the value of a system variable.
{% endhighlight %}

## Comparisons
Numeric Comparisons:
	==, !=, >, >=, <, <=
String Comparison:
	<operator># Match case.
	<operator>? Don't match case.
	<string> =~ <pattern> String matches
	<string> !~ <pattern> String doesn't match
	<string> . <string> Concatinate

## If, For, While, and Try/Catch

{% highlight vim %}
if <expr>
	...
elseif <expr>
	...
else
	...
endif
{% endhighlight %}

{% highlight vim %}
while <expr>
endwhile
{% endhighlight %}

{% highlight vim %}
for <var> in <list>
	continue
	break
endfor

for [var1, var2] in [[1, 2], [3, 4]]
	" on 1st loop, var1 = 1 and var2 = 2
	" on 2nd loop, var1 = 3 and var2 = 4
endfor
{% endhighlight %}

{% highlight vim %}
try
	...
catch <pattern (optional)>
	...
finally
	...
endtry
{% endhighlight %}

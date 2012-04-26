---
layout: post
title: Whirlwind Vimscript
category:
tags: []
published: true
---

This article is intended so that you can learn the basics of vimscript as quickly as possible.
You might even be able to consider this to be a cheat sheet.
Nearly all of the following information can be found in vim's internal documentation.

You should probably already know how to program before reading this.

*Note:
Examples may contain tokens resembling `<token>`.
These are meant to be replaced completely, including the `<` and the `>`.
Vimscript does use `<` and `>` as comparison operators.*

## Variables

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
{% endhighlight %}

## Data Types

`Number`: 32-bit signed number.

{% highlight vim %}
-123
0x10
0177
{% endhighlight %}

`Float`: Floating point number.

{% highlight vim %}
123.456
1.15e-6
-1.1e3
{% endhighlight %}

`String`: NUL terminated string of 8-bit unsigned characters.

{% highlight vim %}
"ab\txx\"--"
'x-z''a,c'
{% endhighlight %}

`Funcref`: A reference to a function.

{% highlight vim %}
function("strlen")
{% endhighlight %}

`List`: An ordered sequence of items.

{% highlight vim %}
[1, 2, ['a', 'b']]
{% endhighlight %}

There is no `Boolean` type.
Numeric value 0 is treated as *false*, while anything else is *true*.

Strings are converted to integers before checking truthiness.
Most strings will covert to 0, unless the string starts with a number.

`Dictionary`: An associative, unordered array. Each entry has a key and a value.

{% highlight vim %}
{'blue': "#0000ff", 'red': "#ff0000"}
{% endhighlight %}

Vimscript is **dynamically** and **weakly** typed.

{% highlight vim %}
>>> 1 . "foo"
1foo
>>> 1 + "1"
2

" Note: Complete vim expressions aren't included for
" berevity's sake. true indicates the if condition
" passes, false means it fails.
>>> if "foobar"
false
>>> if "1000"
true
>>> if "x1000"
false
>>> if "0"
false
{% endhighlight %}

## String Conditionals and Operators:

`<string> == <string>`: String equals.

`<string> != <string>`: String equals.

`<string> =~ <pattern>`: String matches pattern.

`<string> !~ <pattern>`: String doesn't match pattern.

`<operator>#`: Additionally match case.

`<operator>?`: Additionally don't match case.

*Note: Vim option `ignorecase` sets default case sensitivity for `==` and `!=` operators.
Add `?` or `#` to the end of the operator to match based on a case or not.*


`<string> . <string>`: Concatinate two strings.

`&<option>`: Get the value of a "set" style option.

`$<variable>`: Get the value of a system variable.

{% highlight vim %}
>>> if "X start" =~ 'X$'
false
>>> if "end X" =~ 'X$'
true
>>> if "end x" =~# 'X$'
false
{% endhighlight %}

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

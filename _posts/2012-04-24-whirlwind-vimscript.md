---
layout: post
title: Whirlwind Vimscript
category:
tags: []
published: true
---

This article is intended so that you can learn the basics of vimscript as quickly as possible.
You might even be able to consider this to be a cheat sheet.
Nearly all of the following information can be found in [Vim's internal documentation](http://vimdoc.sourceforge.net/htmldoc/usr_41.html).

You should probably already know how to program before reading this.

*Note:
Examples may contain tokens resembling `<token>`.
These are meant to be replaced completely, including the `<` and the `>`.
Vimscript does use `<` and `>` as comparison operators.*

## Variables

`let` is used to set a variable.

`unlet` is used to unset a variable.

`unlet!` unsets a variable and surpresses the error if it doesn't exist.

By default, a variable is scoped globally if it is initially defined outside a function or it is local to the function it was initialized in in.
You can explicitly scope variables by prepending a specific prefix to their name:

{% highlight vim %}
g:var - global.
a:var - function argument.
l:var - local to function.
b:var - local to buffer.
w:var - local to window.
t:var - local to tab.
v:var - Predefined by Vim.
{% endhighlight %}

## Data Types

`Number`: 32-bit signed number.

{% highlight vim %}
-123
0x10
0177
{% endhighlight %}

`Float`: Floating point number. *Requires `+float` on vim compile*

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
Numeric value 0 is treated as *falsy*, while anything else is *truthy*.

Strings are converted to integers before checking truthiness.
Most strings will covert to 0, unless the string starts with a number.

`Dictionary`: An associative, unordered array. Each entry has a key and a value.

{% highlight vim %}
{'blue': "#0000ff", 'red': "#ff0000", "foo": 2}
{% endhighlight %}

Vimscript is **dynamically** and **weakly** typed.

{% highlight vim %}
>>> 1 . "foo"
1foo
>>> 1 + "1"
2

" Note: true indicates the if condition passes, 
"       false means it fails.
>>> if "foobar"
false
>>> if "1000"
true
>>> if "x1000"
false
>>> if "1000x"
true
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
if <expression>
	...
elseif <expression>
	...
else
	...
endif
{% endhighlight %}

{% highlight vim %}
while <expression>
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

## Functions

Define a function with the `function` keyword.
If you want to overwrite a function, use `function!` instead.
Functions can be defined in a specific scope, just like variables.

***Note:***
*Functions names must start with a capital letter.*

{% highlight vim %}
function! <Name>(arg1, arg2, etc)
	<function body>
endfunction
{% endhighlight %}

`delfunction <function>` deletes a function.

`call <function>` executes a function and is required *unless the call is part of an expression.*

**Example:** Create global function `Foobar` forcefully (with !).
including `...` as the last arg creates variable length arg list.
To fetch the first value from `...`, use `a:1`.
To get the second value, use `a:2` and so on.
`a:0` is special and contains the number of arguments held in `...`.

{% highlight vim %}
function! g:Foobar(arg1, arg2, ...)
	let first_argument = a:arg1
	let index = 1
	let variable_arg_1 = a:{index} " same as a:1
	return variable_arg_1
endfunction
{% endhighlight %}

There's a special way to call functions, and that is on a range of lines from a buffer.
Calling a function this way looks like `1,3call Foobar()`.
A function called with a range is executed once for every line in the range. In this case, `foobar` is called three times total.

If you add the keyword `range` after the argument list, the function will only be defined once.
Two special variables will be available within the scope of the function: `a:firstline` and `a:lastline`.
These variables contain the start and end line numbers for the range on the function call.

**Example:** Create buffer function `RangeSize` forcefully which will print out the size of the range it is called with.

{% highlight vim %}
function! b:RangeSize() range
    echo a:lastline - a:firstline
endfunction
{% endhighlight %}


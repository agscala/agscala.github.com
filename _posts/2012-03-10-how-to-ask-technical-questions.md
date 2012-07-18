---
layout: post
title: How To Ask Technical Questions.
category:
tags: []
published: false
---

Anyone who tries to do something new and doesn't run into issues is some sort of genius or is
trying to tackle a problem that is too easy.  Unfortunately, we aren't all geniuses and not
everything is as easy as we'd like it to be.  Inevitably, you'll need to ask someone for help.
Having seen an awful lot of terrible questions on the internet, knowing how to ask a good
question doesn't exactly seem to be common knowledge. Here's some tips for asking better questions
and getting more useful answers.

## Nobody owes you anything.

Understand that *you* are the one who doesn't know the answer.  You need to approach other people
with humility.  If people are getting upset at you, you're doing something wrong.

No matter where you're asking your questions, it's important to realize that there are probably guidelines that you
need to follow.  If you're asking a question on the internet like on some forum, website, or IRC channel,
follow their code of conduct rules.  There are rules to the real world too: you wouldn't want a coworker
asking you for help by shouting or whining, do you?

## Narrow down your problem.

Don't ask your question until you narrow the problem down to something reasonably small.
Very few people will spend more than five minutes of their time helping you out.  Your goal
when constructing a question is to require the smallest amount of effort for anyone to answer.

Lets say you need to pick database software to use on your current project, and you're
debating whether or not you should use a traditional RDBMS or a NoSQL database. Don't ask "Why would
anyone use MongoDB instead of MySQL?" You should say "I am working on a project and I need
to fragment my database across multiple servers, would MySQL be a good solution, or should I use
MongoDB instead?" The first question is broad and might even start debates and arguments, while
the second question shows that you know the problem you need to solve (spreading data across multiple
servers) and you artiulate your specific issue clearly as part of the question.

## Strip away implementation details.

Don't ask questions that require someone to know information unrelated to the problem.

Consider the following problem:

{% highlight python %}
# "How come when I pass m_numbers into square(),
# m_numbers isn't [1, 4, 9]??"

def square(numbers):
	numbers = [n ** 2 for n in numbers]

m_numbers = [1, 2, 3]
square(m_numbers)

print m_numbers
{% endhighlight %}

The question asked requires to look at the example code and it requires the answerer to figure out
what `m_numbers` and `square()` is.  Don't force people to have to figure out your code when the question
could have been stated much more clearly: "How do I modify the contents of a list by only passing it into a function?"


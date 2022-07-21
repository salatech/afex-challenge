import React from 'react'
import Footer from './Footer';
const Body = () => {
  return (
    <div className='body'>
      <article className='hi'>
        <div className='scrolling'> 
<p className='paragraph'>
So, a few years ago, I was teaching web development at a local coding bootcamp, and a student asked me this question:
</p>
<blockquote>
What's the difference between a “statement” and an “expression” in JavaScript?
</blockquote>
<p className='paragraph'>
I felt like I knew the answer to this question, but when I tried to explain it, I couldn't put it into words. I had a feeling about it, but my actual knowledge was surprisingly hazy.
</p>
<p className='paragraph'>
There's nothing more humbling than teaching 😅. Students have a knack for identifying the "fuzzy spots" in our understanding.
</p>
<p className='paragraph'>
I've since come to realize that this question is supremely important. It's a load-bearing concrete pillar that will help support a ton of JavaScript knowledge.
</p>
<p className='paragraph'>
This is especially true for React developers. Most of those JSX rules you've had to memorize, and always forget to follow, are the result of this statement/expression duality.
</p>
<p className="paragraph">
In this blog post, I'm going to share some of the epiphanies I've had about this distinction, and how we can use this information in our day-to-day work.
</p>

<aside className='contain'>
<div className="ectFKQ"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></div>

<strong className="rnTvD">Intended audience</strong><div className="efWPdU"><p className="Paragraph-sc-d2u36h-0 dWwFxy">This tutorial assumes that you're comfortable with basic JavaScript syntax, but is otherwise written to be beginner-friendly.</p><p className="dWwFxy">Towards the end of the tutorial, we look at some React implications, and this section requires some React experience. If you're not a React dev, feel free to skip this section; hopefully, the rest of the tutorial will still offer a ton of value!</p></div>
</aside>
<h2 className="eSPvHL">Expressions</h2>
<p className="paragraph">At its core, an expression is a bit of JavaScript code that produces a value.</p>
<p className="paragraph">For example, these are all expressions:</p>
<ul>
    <li className='paragraph'>→ <code>1</code> → produces <code>1</code> </li>
    <li className='paragraph'>→ <code>Hello</code> → produces <code>Hello</code> </li>
    <li className='paragraph'>→ <code>num &gt; 100</code> → produces either <code>True</code> or <code>False</code></li>
    <li className='paragraph'>→ <code>isHappy ? "🙂" : "🙁"</code> → produces an emoji </li>
    <li className='paragraph'>→ <code>[1, 2, 3].pop()</code> → produces the number <code>3</code> </li>
</ul>
<p className="paragraph">Expressions can contain expressions. For example, how many expressions do you count in this chunk of JS code? Make a guess, and then <span style={{color:"red"}}>drag the slider</span>  to see them each highlighted:</p>
    <div className='dt'>
<h2> (5 + 1) * 2 </h2>

</div>
<h2 className="eSPvHL">Statements</h2>
<p className="paragraph">A JavaScript program is a sequence of statements. Each statement is an instruction for the computer to do something.</p>
<p className="paragraph">Here are some examples of statements in JavaScript:</p>
<div className='codeExample'>
<code className='js'>js</code>
<code className='code'> let hi = /* some expression */;</code>
</div>
       <p className="paragraph">We can use any of the expressions we saw earlier in that slot:</p>
<div className='codeExample'>
<code className='js'>js</code>
<code className='code'> 
let hi = 1; <br />
let hi = "hello"; <br />
let hi = 5 * 10; <br />
let hi = num &gt; 100; <br />
let hi = isHappy ? "🙂" : "🙁"; <br />
let hi = [1, 2, 3].pop();</code>
</div>
<p className="paragraph">In terms of valid syntax, expressions are interchangeable. If a statement has an expression slot, we can put any expression there, and the code will run. We won't get a syntax error.</p>
<p className="paragraph">That said, we can still run into other issues. For example, the following code is syntactically valid, but we'll crash the browser tab if we try to run it, since it causes an infinite loop:</p>

<div className='codeExample'>
<code className='js'>js</code>
<code className='code'> 
while ("hello") { 
  <pre>
  // Because “hello” never changes, this loop will <br/>
  // run over and over until the script crashes. <br/>
  // Syntactically valid, but still problematic. <br/>
  </pre>
}</code>
</div>
<h2 className="eSPvHL">A handy trick</h2>
<p className="paragraph">Want to know whether a chunk of JS is an expression or a statement? Try to log it out!</p>
<div className='codeExample'>
<code className='js'>js</code>
<code className='code'>console.log(/* Some chunk of JS here */);</code>
</div>
<p className="paragraph">If it runs, the code is an expression. If you get an error, it's a statement (or, possibly, invalid JS).</p>
<p className="paragraph">As a bonus, we can even see what the expression resolves to, since it'll be printed in the browser console!</p>
<p className="paragraph">This works because all function arguments must be expressions. Expressions produce a value, and that value will be passed into the function. Statements don't produce a value, and so they can't be used as function arguments.</p>
<p className="paragraph">Even as an experienced developer, I rely a ton on console.log. It's a wonderfully versatile tool!</p>
<h2 className="eSPvHL">Practical implications in React</h2>
<p className="paragraph">If you've worked with React before, you're probably aware that squiggly brackets   allow us to embed bits of JavaScript within our JSX, like this:</p>

<div className='codeExample'>
<code className='js'>js</code>
<code className='code'> 
let hi = 1; <br />
let hi = "hello"; <br />
let hi = 5 * 10; <br />
let hi = num &gt; 100; <br />
let hi = isHappy ? "🙂" : "🙁"; <br />
let hi = [1, 2, 3].pop();</code>
</div>
<h2 className="eSPvHL">A front-end web development newsletter that sparks joy</h2>
<p className="paragraph">My goal with this blog is to create helpful content for front-end web devs, and my newsletter is no different! I'll let you know when I publish new content, and I'll even share exclusive newsletter-only content now and then.</p>
<form action="">
    <div><p>First Name <br /></p><input type="text" name="" id="" /> </div><div><p>Last Name <br /></p><input type="email" name="" id="" /></div> <div className='btn'> Submit</div>
</form>
</div>
 <div className='tracker'>  <ul><li>Table of contents</li>
 <li>Introduction</li>
 <li>Expresion</li>
 <li>Statement</li>
 <li>A handy trick</li>
 <li>Expression as statement</li></ul> </div>
      </article>
      <Footer />
    </div>
 
  )
}

export default Body

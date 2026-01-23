# Tutorials
This web development project was requested by my friend Ethan Southard in exchange for pay. It is a chance for me to grow as a software developer and learn new technologies and to expand my technology stack. In 2026, the most popular technology stack is Next.js, Node.js, Express.js, and PostgreSQL. Therefore this project will be using those tools.

## What is the Tutorials Folder For?
The `📁 tutorials` folder is for me to practice certain skills in preparation for creating this web application for Ethan.

## An Understanding of Modern Web Development Tools:
This technology stack is very similar to the MERN stack and it's helpful for us to have an analogy of what is going on here and why we need all of these different technologies. But before we do, we have to have an understanding of modules, libraries, and frameworks.
![NNEP Tech Stack Banner](../readme_images/NNEP%20Tech%20Stack%20Banner.png)

#### Understanding Terminologies
In today's programming landscape, sometimes people use the words "modules", "libraries", and "frameworks" loosely without a rigorous definition for what they are. The following table will help us simplify the difference between the terms. Imagine that we are in a workshop. Then we would have the following:

| Term | Workshop Analogy | What it Means | Examples
|---|---|---|---|
| Module | A tool *attachment* or a small labeled box of related tools. | A file or small unit grouping related code. | `utils/date.js` |
| Library | A shelf of specialized tools that we use. Or a kit of tool attachments. A library usually consists of many *modules* | Cell B3 | asdf | `import * as THREE from "three";` (we are basically importing the THREE module from the three.js library) |
| Framework | A jig/workbench with rules: it tells you where parts go (router table, assembly line station) | It's a structure that calls your code in a defined pattern. | `Next.js` |

React.js is a library, but Next.js is a framework. 

#### A Kitchen Analogy for Front End Stacks
Traditioanlly speaking, Javascript could have only ran on the browser. This is the V8 engine. However, what Node.js allows us to do is to run Javascript **outside** the browser. For development purposes, this basically means that our local computer acts as the server. However, when we do publish this on the web
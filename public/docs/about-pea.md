# About the Pea programming language

## What is pea
The Pea general purpose procedural programming language. The langauge is still conceptual and the parser is still under construction. The language aims to be easy to parse for beginners to programming language development, whilst not loosing too much usability. It will also aim to be transpiled to many different targets including Javascript, Python, PHP, and AL.

The syntax and concepts are mainly inspired by the Microsoft AL programming language, with some improvements, some simplifications for parsing reasons, and some inspirations from other languages like algol/pascal/ada.

## Inspiration
Most of the inspiration for Pea came from the AL programming language which is an event based language for making extensions on Microsoft Business Central. AL is in turn inspired by C/AL, which was in turn inspired by pascal. I took the AL programming language, worked out all aspects of which I hate (it being an event based language, inconsistency with scope brackets, it not being able to be ran standalone, it being partially closed source, the silly string escape system, and much more), and tried to improve it on these aspects. I also made the syntax a lot more easy to parse by having the syntax be a bit verbose.

I want Pea to be able to run basically anywhere (in the web, in the JVM, on low level systems, as native executable), and thats why I decided to have multiple runtime options for the language. The first runtime option I will start developing will be the interpreter, but later im also planning to make build in transpilation to other languages like Javascript, Python, PHP, and AL.

## Work in progress
Pea is still very much under development, and currently its not ready for production nor is there a functional interpreter/compiler. Currently the idea of the language is fully developed and planned out, and there is good progress in development of the parser, and im already very happy with it.

The following list is the list of features that the parser can currently handle:
 - [x] multiline comments
 - [x] function return types
 - [x] lexing strings
 - [x] placing filename/col/row numbers in errors
 - [x] displaying code in colors in the errors
 - [x] displaying code with context in the errors
 - [x] include statements
 - [ ] expressions
 - [ ] set statements for variables
 - [ ] function call statements
 - [ ] return statements
 - [ ] set to value statements
 - [ ] build in functions
 - [ ] if statements
 - [ ] else
 - [ ] else if statements
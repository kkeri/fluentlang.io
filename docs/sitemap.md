# Sitemap


Getting started
===============



Roadmap
=======



Learn
=====



Docs
====

## Syntax

- Core syntax

- Fluent syntax

## Error handling

- Syntax errors
- Runtime errors
- Signalling errors by quotation?
  - including source location complicates and slows down the interpreter
  - how to identify errors in the source code without source location?


## Quotations



## Modules

- What is a module?
- How to load a module?
- Module resolution
- Importing modules
  - namespace imports and mixin imports


## Standard library


## Build system

- No compilation means no build system?


## Packages

- What is a package?
- What does a package provide?
  - metadata
  - code
  - resources
  - dependencies
  - scripts
- Do we need a package registry?

- Do we need a package manager?
  - It's a wrong idea that languages need package management
  - Projects need package management

- How to install packages
  - locally or globally
    -> locally must be the default
  - but sometimes you want to install command line tools globally



Tutorials
=========


## Working witn data structures



## How to write a Fluent interpreter

Writing a basic interpreter for the Fluent language.

- Interpreter API

- Loading modules


- Error handling



## Advanced interpreter techniques

Writing production quality interpreters.

Recommended functionality:
- preemptive and non-preemptive mode

- Optimizations
  - custom symbols
  - providing primitives for library functions
  - an interpreter can perform arbitrary term rewriting
- Quotations
  - Quoations must be supported at least to the core language
- Internal symbols
- Garbage collection
- Fast vs debuggable interpreters
- Module loader
  - Caching
  - Provide separate module loader that handles module resolution
- Security
- Limiting resource usage
  - memory
  - CPU (preemptive scheduling, time slicing)
- Don't access system resources directly (file system, network, time, etc.)
  - Let the integration layer handle resources
  - Benefits:
    - increased portability
    - avoids security vulnerabilities
    - supports sandboxing 
    - the interpreter can be tested in isolation


In depth
========

## Building fluent syntax

## Building a type system



Interactive tutorials
=====================

## Program cards

## Abstract machines



Playgrounds
===========

## Cards playground

## Machines playground

## Code playground



Fluent Cookbook
===============

A collection of common code patterns and idioms.

## Task automation

- Search, filter, and sort

## Persistent processes

## Writing interpreters

## Logic programming

## Metaprogramming



Community
=========


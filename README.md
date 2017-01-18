A method of client Javascript unit testing in nodejs using Rewire.

Instead of using module.exports, Rewire lets you require a module and use a __get__ method to give access to its members.

This means you can unit test without a webpage, PhantomJS or a task runner.

To try, copy the project, run "npm install", then run "npm test".

var test = require("tape");
var spawn = require("child_process").spawn;
var streamWhen = require("../stream-when");

test("Works with functions", function(t){
  t.plan(1);

  var child = spawn("echo", ["hello"]);
  child.stdout.setEncoding("utf8");
  var promise = streamWhen(child.stdout, function(data){
    return data.trim() === "hello";
  });

  promise.then(function(){
    t.pass("Promise did resolve");
  });
});

test("Works with RegExps", function(t){
  t.plan(1);

  var child = spawn("echo", ["hello"]);
  child.stdout.setEncoding("utf8");
  var promise = streamWhen(child.stdout, /hello/);

  promise.then(function(){
    t.pass("Promise did resolve");
  });
});

test("Works with strings", function(t){
  t.plan(1);

  var child = spawn("echo", ["hello"]);
  child.stdout.setEncoding("utf8");
  var promise = streamWhen(child.stdout, /hello/);

  promise.then(function(){
    t.pass("Promise did resolve");
  });
});


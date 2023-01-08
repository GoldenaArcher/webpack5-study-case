import { addImage } from './add-image';
import { Heading } from './components/heading/heading';
import { HelloWorldButton } from './components/hello-world-button/hello-world-button';
import { helloWorld } from './hello-world';

helloWorld();
addImage();
new HelloWorldButton().render();

function add(x) {
  return x + 10;
}

function subtract(x) {
  return x - 5;
}

// Without pipeline operator
let val1 = add(subtract(add(subtract(10))));
console.log(val1);

// Using pipeline operator

// First 10 is passed as argument to subtract
// function then returned value is passed to
// add function then value we get is passed to
// subtract and then the value we get is again
// passed to add function
let val2 = 10 |> subtract |> add |> subtract |> add;
console.log(val2);

@annotation
class MyClass {}

function annotation(target) {
  target.annotated = true;
}

Heading.render();

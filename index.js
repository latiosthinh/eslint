if (foo) foo++; // curly

a == b // eqeqeq

console.log('asd'); // no-console

function isTruthy(x) { // no-debugger
    debugger;
    return Boolean(x);
}

switch (a) {
    case 1:
        break;
    case 2:
        break;
    case 1:         // no-duplicate-case
        break;
    default:
        break;
}

var foo = {
    bar: "baz",
    bar: "qux"  // no-dupe-keys
};


if (isSomething(x)) {
    foo();
} else if (isSomething(x)) { // no-dupe-else-if
    bar();
}

function foo(a, b, a) {
    console.log("value of the second a:", a); // no-dupe-args
}

function foo() { // no-else-return
    if (x) {
        return y;
    } else {
        return z;
    }
}

var x = 5;; // no-extra-semi

if (foo) {} // no-empty

function foo() {} // no empty-function

var obj = {'foo': 'bar'}; //object-curly-spacing

var foo3;var bar; // semi-spacing

if (value === "red") { // yoda
    // ...
}

if (foo)
{
    bar();
}

var x=1 , y=0; // comma-style

//var x = {[b]: a} // computed-property-spacing

fn ();

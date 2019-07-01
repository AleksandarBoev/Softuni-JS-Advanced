function outerFunc() {
    console.log(this);
}

const outerFatArrow = () => {
    console.log(this);
};

const hello = {
    innerFunc: function() {
        console.log(this);
    },
    innerFatArrow: () => {
        console.log(this);
    }
};


hello['outerFunc'] = outerFunc;
hello['outerFatArrow'] = outerFatArrow; //does not copy it, but creates a reference. So when it is called, in reality the first function above is called

console.log('Inner func from hello:');
hello.innerFunc();
console.log('Inner fat arrow from hello:');
hello.innerFatArrow();


console.log('Outer func from hello:');
hello.outerFunc();
console.log('Outer fat arrow from hello:');
hello.outerFatArrow();

console.log('Outer func:');
outerFunc();
console.log('Outer fat arrow:');
outerFatArrow();
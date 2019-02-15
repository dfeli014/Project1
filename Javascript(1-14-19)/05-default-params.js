function defaultValues(one, two = 10, three = 15) {
    console.log('one = ' + one, 'two = ' + two, 'three = ' + three);
}

defaultValues(5);
defaultValues(5, 2);
defaultValues(5,undefined, 2);
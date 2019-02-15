function equality(one, two) {
    console.log(`one is type: ${typeof(one)} and value: ${one}
two is type: ${typeof(two)} and value: ${two}
    one == two returns: ${one == two}
    one === two returns: ${one === two}`)
}

equality(0, '0');
equality(true, 'true');
equality(null, null);
equality(null, undefined);
equality(NaN, NaN);
equality(['a', 'b'], 'ab');
equality({a: 'test'}, {a: 'test'});

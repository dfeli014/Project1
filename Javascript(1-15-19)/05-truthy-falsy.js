/**
 * In a boolean context, if we have a non-boolean type
 * JS iwll yse a set of rules to determine if it should be true or false
 * 0, "", null, undefined, NaN, false are the values that evaluate to false
 * Everything else evalutes to true
 */

function truthyFalsy(val) {
    console.log(`the value ${val}
    is of type ${typeof(val)}
    and the truthy-falsy value of ${!!val}`) // !! forces val into a boolean value
}

truthyFalsy(0);
truthyFalsy('0');
truthyFalsy('hello');
truthyFalsy(null);
truthyFalsy(truthyFalsy);
truthyFalsy(true);
truthyFalsy({});
truthyFalsy(undefined);
truthyFalsy(NaN);
truthyFalsy(`template literal ${true}`);
truthyFalsy(-1);
truthyFalsy(1);

if ('hello') {
    console.log('hello is truthy')
}
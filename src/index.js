module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
    let openBr = [];
    let closeBr = [];
    for (var i = 0; i < bracketsConfig.length; i++) {
        openBr[i] = bracketsConfig[i][0];
        closeBr[i] = bracketsConfig[i][1];
    }
    stack.push(str[0]);
    for (var i = 1; i < str.length; i++) {
        if (openBr.includes(str[i]) && !closeBr.includes(str[i]))
            stack.push(str[i]);
        else {
            // if (stack.length === 0)
            //     return false;
            //let last = stack.pop();
            if (stack[stack.length-1] === openBr[closeBr.indexOf(str[i])])
                stack.pop();
            else {
                stack.push(str[i]);
            }
            // if (str[i] === closeBr[openBr.indexOf(last)])
            //     continue;
            // else return false;
        }
    }
    return stack.length === 0
}
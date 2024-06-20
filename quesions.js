// Ques 1 -> Palindrome Number
// An Integer is a Palindrome Number when it reads the same forward and backward

const isPalindrome = function(x) {
    x === x.toString().split("").reverse().join("");
};

const res = isPalindrome(131);
console.log(res);
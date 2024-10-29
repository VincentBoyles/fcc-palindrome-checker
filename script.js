const textInt = document.getElementById("text-input");
const results = document.getElementById("result");


function inputEmpty() {
    if (textInt.value == "") {
       alert("Please input a value");
    } else {
        const noWhiteSpace = textInt.value.replace(/[^a-zA-Z0-9]/g, "");
        const originalArray = [...noWhiteSpace];
        const reverseArray = [...originalArray].reverse();
        const original = originalArray.toString();
        const reverse = reverseArray.toString();
        if (original.toLowerCase() === reverse.toLowerCase()) {
            results.innerHTML = `<b>${textInt.value}</b> is a palindrome.`
        } else {
            results.innerHTML = `<b>${textInt.value}</b> is not a palindrome.`
        }
    }
}



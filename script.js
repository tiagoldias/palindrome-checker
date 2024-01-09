const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

result.style.visibility = 'hidden';

checkBtn.addEventListener('click', () => {
  if(!textInput.value) {
    alert("Please input a value")
    return 
  };
  
  const word = textInput.value.toLowerCase().match(/[0-9a-z]/gi).join('');
  
  let isPalindrome = true;

  for(let i = 0; i < word.length / 2; i++) {
    if(word[i] !== word[word.length - 1 - i]) {
      isPalindrome = false
    }
  }
  if(isPalindrome) {
    result.textContent = `${textInput.value} is a palindrome`
  } else {
    result.textContent = `${textInput.value} is not a palindrome`
  }
  result.style.visibility = 'visible'
  console.log(result.innerHTML)
})

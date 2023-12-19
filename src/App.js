import './App.css';

const App = () => {

  let randomNum = Math.ceil(Math.random()*10); //Math.ceil() round up number to the nearest integer, ex: Math.ceil(0.6) = 1
  
  //initialize counter for how many user take a guess 
  let counter = 0; 

  const verifyNumber = () => {
    let input = document.getElementById("numberInput"); 
    let inputValue = input.value; // get value from user input

    //Counter for how many times user input number to take a guess
    //Maximum is 3 times
    if(counter >= 3) {
      alert("Sorry, maximum limit is 3 times only");
      input.value = ''; //number input will be automatically empty
      return;
    }

    //If inputValue by user is a same number with randomNum
    if(inputValue === randomNum) {
      alert("Correct guess!");
      return;

    } else {
      alert("Sorry incorrect guess!");
      input.value = ''; //number input will be automatically empty
      counter++;

    }
  }

  return (
    <>
      <div>
        <div><h1>Guess a number!</h1></div>
        <div><input type='number' id='numberInput' placeholder='Enter a number' /></div>
        <div><button onClick={verifyNumber}>Verify</button></div>
      </div>
    </>
  );
}

export default App;

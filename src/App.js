import React,{useState} from 'react';
import './App.css';

function App() {

  const [userBill,setUserBill] = useState(0);
  const [cash,setCash] = useState(0);
  const [final,setFinal] = useState([{}]);
  var result = [
    {Note: 0, NumberofNotes:0 }
  ]
  const notes = [2000,500,100,20,10,5,1];

  function userBillAmount(event){
    const amount = event.target.value;
    setUserBill(amount);
  }

  function cashGivenByUser(event){
   const givenCash = event.target.value;
   setCash(givenCash);
  }

  function evaluate(){
    const enterCash = Number(cash);
    const enterBill = Number(userBill);
    if(enterCash>enterBill) {
      let netAmount = enterCash-enterBill;
      if(netAmount>0){
        notes.map((n) => {
  
          let quo;
            if(n<netAmount){
              quo = Math.floor(netAmount/n);
              netAmount = netAmount%n;
              result.push({Note: n, NumberofNotes:quo});
            
            }
          })
      }
      setFinal(result);
    }
    else if(enterCash === enterBill){
      alert("No return! Balanced cash")
    }
    else{
      alert("Cash should be given more than your bill");
    }

  }

  return (
    <div className="App">
      <h1>Cash Manager App</h1>
      <input placeholder="Your Bill Amount"  onChange={userBillAmount}/>
      <input placeholder="Cash Given"  onChange={cashGivenByUser} />
      <button onClick={evaluate}>Evaulate</button>
      <div>No.of Notes to be given
        {
          final !== undefined &&
          final.map((r,index) => {
          return <div key={index}> Note: {r.Note} ,NumberOfNotes:{r.NumberofNotes} </div>
          })
        }
      </div>
    </div>
  );
}

export default App;

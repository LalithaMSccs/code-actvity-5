
import { useState } from "react";
import "./code_activity_5_1.css";

function Deposit_3(){
    const [value,setValue]=useState();
    let [balance,setBalance]=useState(0);
    const [isDeposit,setIsDeposit]=useState('');
    const depos=(e)=>{
        e.preventDefault();
        console.log(isDeposit);
        if(!value){
            alert("Enter amount");
        }else if(isDeposit=='Deposit'){
            balance+=Number(value);
            setBalance(balance);
        }
        else if(isDeposit=='Withdraw'){
            if(balance==0){
                alert("There is no balance");
            }else{
                balance-=Number(value);
                setBalance(balance);
            }
            
        }

           
        let bal=document.getElementById("balance");        
        bal.innerHTML=balance;
        setValue(""); 
              
    }
    

    return(
        <>
        <form >
            <h1>ATM Deposit</h1>
            <br></br>
            <br></br>
            <h3>Account Balance:<h3 id="balance"></h3></h3>
            <br></br>
            <br></br>
            <label ><b>  Enter the Amount:</b></label>&nbsp; &nbsp; 
            <input type="number" id="Amount" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <h3 id="Withdraw"></h3>
            <select value={isDeposit}  onChange={(e)=>setIsDeposit(e.target.value)}>
                <option>select</option>
                <option value="Deposit" >Deposit</option>
                <option value="Withdraw">Withdraw</option>
            </select>
            <br></br>
            <br></br>
            <button onClick={depos}>Submit</button>
        </form>
        </>

    );
}
export default Deposit_3;
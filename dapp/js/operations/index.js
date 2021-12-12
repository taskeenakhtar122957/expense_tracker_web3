

function getAccountBalance(){
    const account = document.getElementById("account").value;
    document.getElementById("text").value = "";
    document.getElementById("value").value = "";
    document.getElementById("myUl").innerText="";
 
    console.log(account);

        et_contract.methods.getBalance(account).call((err, balance) => {
        console.log("Balance:", balance);
        document.getElementById("balance").innerHTML = balance;
          }); 

    et_contract.methods.getTransactions(account).call((error,result) => {
    console.log(result);
   
    result.forEach(element => { $("#myUl").append("<li>"+element+"</li>");
              
        });
    
    });
}


function onSubmit()
{
   
    const text = document.getElementById("text").value;
    const value = document.getElementById("value").value;

    console.log(" text = "+text+" value = "+value);


    et_contract.methods.addTransaction(text,value).send({from: myaccount[0],gasPrice: web3.utils.toWei("4.1","Gwei")},
    (error,result) => 
    {
        if(result) 
        {
            console.log(result);

            $("#resultdiv").text(result);
        }
        else
            console.log(error);
    });
   
}



 

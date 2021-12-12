let EtContractAddress = "0x800205eB19bf1eF625F3E59C31A1e87198C874F8";
let et_contract = null;

const getExpenseTrackerContract = async(web3) => {

    const et_data = await $.getJSON("./js/contracts/ExpenseTracker.json");

    et_contract = await new web3.eth.Contract(et_data.abi,EtContractAddress);
    
    console.log("ExpenseTracker Contract Object is Loaded: "+et_contract)

    return et_contract;
}

async function initSetup()
{
    web3 = await getWeb3();

     await getExpenseTrackerContract(web3);

}

initSetup();
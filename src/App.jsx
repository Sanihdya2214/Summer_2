import InputBox from './components/InputBox/';
import useCurrencyinfo from "./Hooks/useCurrencyinfo"
import {useState} from "react"
function App() {
     const [amount, setamount] = useState(0);
     const [from, setfrom] = useState("usd");
     const [to, setto] = useState("inr");
     const [convertedAmount, setconvertedAmount] = useState(0);

       const currencyInfo=useCurrencyinfo(from)
       const options=Object.keys(currencyInfo)

       const swap=()=>{
         setfrom(to)
         setto(from)
         setconvertedAmount(amount)
         setamount(convertedAmount)
       }
       const convert=()=>{
        setconvertedAmount(amount*currencyInfo[to])
       }

       return (
        <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
        style={{backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}
        >
          <div className='w-full'>
            <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
              <form onSubmit={(e) => {
                e.preventDefault()
                convert()
              }}>
                <div className='w-full mb-1'>
                  <InputBox
                  label="from"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setfrom(currency)}
                  onAmountChange={(amount) => setamount(amount)}
                  selectedCurrency={from}
                  />
                </div>
                <div className='relative w-full h-0.5'>
                  <button
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                  onClick={swap}
                  >Swap</button>
                </div>
                <div className='w-full mb-1'>
                  <InputBox
                  label="to"
                  currencyOptions={options}
                  amount={convertedAmount}
                  onCurrencyChange={(currency) => setto(currency)}
                  selectedCurrency={to}
                  amountDisabled
                  />
                </div>
                <button
                type='submit'
                className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
                >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
              </form>
            </div>
          </div>
    
        </div>
      )
    }
    
    export default App
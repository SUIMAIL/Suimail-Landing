//import QuickAction from "./Home/QuickAction"
//import { Eye,  } from "lucide-react"
//import { NavLink } from "react-router-dom"
import { Plus,ArrowLeftRight,MoveUpRight, House,RefreshCcw,TabletSmartphone,QrCode,AtSign,ShieldAlert} from 'lucide-react';
import { Button, Tooltip,Modal,Label, TextInput,  Dropdown  } from "flowbite-react";
import { useState } from "react";
import { NavLink } from 'react-router-dom';

// Currency exchange rates (example values)
const exchangeRates = {
    AVAX: { NGN: 1500, ETH: 0.02, SUI: 10, ARB: 5, POLY: 12, BASE: 8, TON: 6 },
    ETH: { NGN: 3000000, AVAX: 50, SUI: 500, ARB: 200, POLY: 240, BASE: 160, TON: 120 },
    SUI: { NGN: 1500, AVAX: 0.1, ETH: 0.002, ARB: 0.5, POLY: 1.2, BASE: 0.8, TON: 0.6 },
    NGN: { AVAX: 0.00067, ETH: 0.00000033, SUI: 0.00067, ARB: 0.0004, POLY: 0.00048, BASE: 0.00032, TON: 0.00024 },
    ARB: { NGN: 250, AVAX: 0.2, ETH: 0.005, SUI: 2, POLY: 2.4, BASE: 1.6, TON: 1.2 },
    POLY: { NGN: 200, AVAX: 0.15, ETH: 0.004, SUI: 1.5, ARB: 0.8, BASE: 1.2, TON: 1.1 },
    BASE: { NGN: 180, AVAX: 0.12, ETH: 0.003, SUI: 1.2, ARB: 0.6, POLY: 0.8, TON: 0.9 },
    TON: { NGN: 170, AVAX: 0.1, ETH: 0.0025, SUI: 1, ARB: 0.5, POLY: 0.7, BASE: 0.75 },
  };
  
  // Currency images
  const currencyImages = {
    AVAX: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
    ETH: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    SUI: "https://cryptologos.cc/logos/sui-sui-logo.png",
    NGN: "https://upload.wikimedia.org/wikipedia/commons/7/79/Naira_Sign.svg",
    ARB: "https://cryptologos.cc/logos/arbitrum-arb-logo.png",
    POLY: "https://cryptologos.cc/logos/polygon-matic-logo.png",
    BASE: "https://cryptologos.cc/logos/base-base-logo.png",
    TON: "https://cryptologos.cc/logos/toncoin-ton-logo.png",
  };



export default function Etherum(){
    const [openModal, setOpenModal] = useState(false);
    const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
//const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

    const [fromCurrency, setFromCurrency] = useState("ETH");
    const [toCurrency, setToCurrency] = useState("AVAX");
    const [amount, setAmount] = useState("");
    const [convertedAmount, setConvertedAmount] = useState(0);
  
    // Function to update converted amount in real-time
    const handleAmountChange = (value) => {
      setAmount(value);
      const rate = exchangeRates[fromCurrency]?.[toCurrency] || 1;
      setConvertedAmount(value * rate);
    };
    return(
        <div className=" w-full ">
<div className="w-[94%] bg-white pb-10 pt-5 mt-3 mx-auto shadow-xl rounded-lg flex flex-col justify-center items-center gap-8">
    <div  className='flex flex-col items-center gap-2'>
        <h3 className='font-semibold text-2xl flex items-center gap-3'>Available ETH balance <Tooltip content="Your avaliable balance is money avaliable for you and you can transfer it out. You can send this money to any crypto assets we support " className='w-[60%] md:w-[30%]' placement="left">
        <p> <ShieldAlert size={20}/></p>
      </Tooltip></h3>
    <h1 className='font-semibold text-2xl md:text-3xl'>$200.00</h1></div>
    <div className='text-gray-900 flex items-center gap-4 md:gap-8 mt- md:flex-row flex-col'>
<div>
<Button color="gray" onClick={() => setOpenModal(true)} className="flex items-center gap-4 text-sm outline-none focus:ring-0">Add Money <Plus className='size-5 ml-3'/></Button>
<Modal
  show={openModal}
  size="md"
  className="flex items-center justify-center pt-32"  // Added to center modal
  onClose={() => setOpenModal(false)}
  popup
>
  <Modal.Header />
  <Modal.Body className='flex justify-center flex-col py-3'>
    <div className="text-cente flex flex-col gap-3 pb-8">
      <h3 className="mb-2 text-2xl font-semibold text-gray-950 "> Add Assets </h3>
      <NavLink className='flex md:flex-row flex-col md:items-center gap-1 md:gap-3 border px-3 py-3'>
      <div className='bg-blue-100 p-3 w-fit rounded-full'><House className='text-blue-400'/></div>
      <div>
        <h3 className='text-xl font-semibold'>Add via bank transfer</h3>
        <p className='text-xs'>Fund your account by sending money to your unique bank account</p>
      </div>
      </NavLink>
      <NavLink className='flex md:flex-row flex-col md:items-center gap-1 md:gap-3  border px-3 py-3 mt-4'>
      <div className='bg-blue-100 p-3 w-fit rounded-full'><RefreshCcw className='text-blue-400'/></div>
      <div>
        <h3  className='text-xl font-semibold'>Add via crypto address</h3>
        <p className='text-xs'>Convert funds from another balance to your wallet balance</p>
      </div>
      </NavLink>


      </div>
  </Modal.Body>
</Modal>

</div>

<>
<Button color="gray" onClick={() => setIsFirstModalOpen(true)} className="flex items-center gap-4 text-sm outline-none focus:ring-0">Convert Funds <ArrowLeftRight className='size-5 ml-3'/> </Button>

<Modal show={isFirstModalOpen} size="md" className='pt-20' onClose={() => setIsFirstModalOpen(false)} popup>
  <Modal.Header />
  <Modal.Body>
    <div className="space-y-6 ">
     <div className='text-center'>
     <h3 className="text-xl font-medium text-gray-900 ">Convert money</h3>
      <p className='text-sm text-'>Enter amount and select currency to convert to</p>

     </div>
      {/* Select Currency to Swap From */}
      <div>
        <Label htmlFor="fromCurrency" value="Amount to convert" />
       <div className='flex justify-between border px-3 py-1 mt-2 rounded-lg'>
       <Dropdown 
          label={
            <div className="flex items-center gap-2 ">
              <img src={currencyImages[fromCurrency]} alt={fromCurrency} className="w-6 h-6" />
              {fromCurrency}
            </div>
          }
          inline
        >
          {Object.keys(exchangeRates).map((currency) => (
            <Dropdown.Item key={currency} onClick={() => setFromCurrency(currency)}>
              <div className="flex items-center gap-2 w-32">
                <img src={currencyImages[currency]} alt={currency} className="w-6 h-6" />
                {currency}
              </div>
            </Dropdown.Item>
          ))}
        </Dropdown>
        <TextInput
  id="amount"
  type="number"
  placeholder="00.00"
  value={amount}
  onChange={(e) => handleAmountChange(e.target.value)}
  className="appearance-none bg-transparent border-none focus:outline-none focus:ring-0"
  required
/>

        
       </div>
      </div>

      
      
      {/* Select Currency to Swap To */}
      <div>
        <Label htmlFor="toCurrency" value="Amount you will receive" />
        <div className='flex justify-between border px-3 py-3 mt-2 rounded-lg' >
        <Dropdown
          label={
            <div className="flex items-center gap-2">
              <img src={currencyImages[toCurrency]} alt={toCurrency} className="w-6 h-6" />
              {toCurrency}
            </div>
          }
          inline
        >
          {Object.keys(exchangeRates).map((currency) => (
            <Dropdown.Item key={currency} onClick={() => setToCurrency(currency)}>
              <div className="flex items-center gap-2">
                <img src={currencyImages[currency]} alt={currency} className="w-6 h-6" />
                {currency}
              </div>
            </Dropdown.Item>
          ))}
        </Dropdown>
        {/* Converted Amount Display */}
      {amount && (
        <div className="text-lg font-semibold">
         {convertedAmount.toFixed(4)} {toCurrency}
        </div>
      )}

      
        </div>
       <div className='flex justify-center my-6 '>

       <Button color="warning" className="flex items-center gap-4 text-sm outline-none focus:ring-0">Continue</Button>
       </div>
      </div>

      
    </div>
  </Modal.Body>
</Modal>
</>

<div>
<Button color="gray" onClick={() => setOpenModal(true)} className="flex items-center gap-2 text-sm outline-none focus:ring-0">Send Funds <MoveUpRight className='size-5 ml-3'/></Button>
<Modal
  show={openModal}
  size="md"
  className="flex items-center justify-center pt-1"  // Added to center modal
  onClose={() => setOpenModal(false)}
  popup
>
  <Modal.Header />
  <Modal.Body className='flex justify-center flex-col py-3'>
    <div className="text-cente flex flex-col gap-3 pb-8">
      <h3 className="mb-2 text-2xl font-semibold text-gray-950 "> Send Money </h3>
      <NavLink className='flex md:flex-row flex-col md:items-center gap-1 md:gap-3 border px-3 py-3'>
      <div className='bg-blue-100 p-3 w-fit rounded-full'><House className='text-blue-400'/></div>
      <div>
        <h3 className='text-xl font-semibold'>Send via bank transfer</h3>
        <p className='text-xs'>Transfer money securely to any bank account with ease and speed.</p>  
      </div>
      </NavLink>
      <NavLink className='flex md:flex-row flex-col md:items-center gap-1 md:gap-3  border px-3 py-3 mt-4'>
      <div className='bg-blue-100 p-3 w-fit rounded-full'><TabletSmartphone className='text-blue-400'/></div>
      <div>
        <h3  className='text-xl font-semibold'>Send via Mobile Money</h3>
        <p className='text-xs'>Send funds instantly to mobile wallets for quick and seamless transactions.</p> 
      </div>
      </NavLink>
      <NavLink className='flex md:flex-row flex-col md:items-center gap-1 md:gap-3 border px-3 py-3'>
      <div className='bg-blue-100 p-3 w-fit rounded-full'><QrCode className='text-blue-400'/></div>
      <div>
        <h3 className='text-xl font-semibold'>Send via QR CODE</h3>
        <p className='text-xs'>Scan and pay with QR codes for a fast and contactless payment experience.</p>  
      </div>
      </NavLink>
      <NavLink className='flex md:flex-row flex-col md:items-center gap-1 md:gap-3  border px-3 py-3 mt-4'>
      <div className='bg-blue-100 p-3 w-fit rounded-full'><AtSign className='text-blue-400'/></div>
      <div>
        <h3  className='text-xl font-semibold'>Send via crypto address        </h3>
        <p className='text-xs'>Send crypto directly to wallet addresses with secure blockchain transactions.</p> 
      </div>
      </NavLink>

      </div>
  </Modal.Body>
</Modal>

</div>

    </div>
</div>
        </div>
    )
}
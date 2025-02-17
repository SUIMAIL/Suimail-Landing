import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ChevronDown, ChevronUp,  } from "lucide-react";
import { NavLink } from "react-router-dom";


const images = ["/img/sign1.jpg"];

const Signup = () => {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Nigeria");
  const [isOpen, setIsOpen] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  //const closeSidebar = () => setSidebarOpen(false);
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));
  const toggleLogin = () => setIsLogin((prev) => !prev);
  const toggleDropdown = () => setIsOpen((prev) => !prev);
  
  const handleLanguageChange = (code) => {
    setSelectedLanguage(code);
    setIsOpen(false);
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState(""); // "success" or "error"
  
  const handleSubmit = () => {
    const isValidCode = true; // Replace with actual validation logic
  
    if (isValidCode) {
      setModalMessage("Congratulations! Your email has been verified successfully.");
      setModalType("success");
    
      setStep(5); // Proceed to next step
    } else {
      setModalMessage("Error: Invalid verification code. Please try again.");
      setModalType("error");
    }
  
    setModalVisible(true);
  };
  
  const [selectedCode, setSelectedCode] = useState("+234");
  const [selectedGender, setSelectedGender] = useState("Gender ");

  const handleSelect = (code) => {
    setSelectedCode(code);
    setIsOpen(false);
  };

  const handleSelectGender = (gender) => {
    setSelectedGender(gender);
    setIsOpen(false);
  };

  return (
    <div className=" text-gray-900 mb-10 md:mb-20 pt-[30%] md:pt-[10%] flex items-center justify-center px-4 md:px-0">
      <div className="flex items-center w-full md:max-w-5xl rounded-lg shadow-lg pb-4  px-5">
        <div className="hidden md:block  -z-30 md:w-1/2 ">
          <Swiper modules={[Autoplay]} loop autoplay={{ delay: 2000, disableOnInteraction: false }}>
            {images.map((img, index) => (
              <SwiperSlide key={index} className="">
                <img src={img} alt={`Slide ${index + 1}`} className="object-cover  w-full h-[500px]" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full md:w-1/2 md:p-8 py-6 space-y-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            {isLogin ? "Log In to Key-Chain" : "Create Account"}
          </h2>

          {!isLogin && (
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="h-2 rounded-full bg-yellow-500" style={{ width: `${(step / 5) * 100}%` }}></div>
            </div>
          )}

          {isLogin ? (
            <LoginForm toggleLogin={toggleLogin} />
          ) : (
            <SignupSteps
              step={step}
              nextStep={nextStep}
              prevStep={prevStep}
              setShowModal={setShowModal}
              selectedLanguage={selectedLanguage}
              isOpen={isOpen}
              toggleDropdown={toggleDropdown}
              handleLanguageChange={handleLanguageChange}
              handleSubmit={handleSubmit}
              modalVisible={modalVisible}
              modalMessage={modalMessage}
              modalType={modalType}
              selectedCode={selectedCode}
              handleSelect={handleSelect}
              handleSelectGender={handleSelectGender}
              selectedGender={selectedGender}
              
            />
          )}

          <p className="text-center text-gray-400 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button onClick={toggleLogin} className="text-[#FAD129] hover:underline ml-1">
              {isLogin ? "Sign Up" : "Log In"}
            </button>
          </p>
        </div>
      </div>

      {showModal && <VerificationModal setShowModal={setShowModal} nextStep={nextStep} />}
    </div>
  );
};

const SignupSteps = ({handleSelectGender, handleSelect,selectedCode,selectedGender,  step,modalVisible,modalType,modalMessage,setModalVisible, nextStep, prevStep, setShowModal, selectedLanguage, handleSubmit, isOpen, toggleDropdown, handleLanguageChange }) => {
  const languages = [
    { code: "EN", name: "Nigeria" },
    { code: "ES", name: "Spanish" },
    { code: "FR", name: "French" },
    { code: "DE", name: "German" },
    { code: "ZH", name: "Chinese" },
    { code: "JA", name: "Japanese" },
    { code: "RU", name: "Russian" },
    { code: "AR", name: "Arabic" },
    { code: "PT", name: "Portuguese" },
    { code: "HI", name: "Hindi" },
  ];

  return (
    <div>
      {step === 1 && (
        <div  className="">
          <h3 className="text-xl font-semibold">Step 1: Country of Residence</h3>
          <p className="text-sm my-2">What country do you live in?</p>
          <div className="relative">
            <div className="flex text-gray-900 items-center justify-between border rounded-full py-2 px-3 cursor-pointer" onClick={toggleDropdown}>
             
              <span className="ml-2 ">{selectedLanguage}</span>
              {isOpen ? <ChevronUp className="ml-2 size-5 text-gray-900" /> : <ChevronDown className="ml-2 size-5 text-gray-900" />}
            </div>
            {isOpen && (
              <div className="absolute top-full z-20 md:left-0 mt-2 text-gray-900 bg-white p-4 border rounded-md w-[250px] md:w-[300px] ">
                {languages.map((language) => (
                  <div
                    key={language.code}
                    onClick={() => handleLanguageChange(language.name)}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                  >
                    {language.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button onClick={() => setShowModal(true)} className="w-full py-3 mt-4 bg-[#FAD129] rounded-md">
            Continue
          </button>
        </div>
      )}

{step === 2 && (
        <div className="space-y-4 ">
          <h3 className="text-xl font-semibold">Step 2: Set Up Your Account</h3>
          <input type="text" placeholder="Your Name" required className="w-full p-3 mt-1 border rounded-md" />
              <input type="email" placeholder="Email" required  className="w-full p-3 mt-1 border rounded-md" />
           
              <div className="relative group z-30">
      <div className="flex items-center gap-3 w-full p-3 mt-1 border rounded-md">
        <div className="flex items-center gap-3 text-gray-400 cursor-pointer">
          {selectedCode} <ChevronDown className="size-4" />
        </div>
        <input type="phone" placeholder="Phone Number" required className="w-full " />
      </div>
      <div className="absolute left-[0%] w-[300px] top-8 space-y-3 text-sm rounded-lg p-4 shadow-2xl bg-white text-gray-950 hidden group-hover:block">
        {["+234", "+233", "+235", "+236"].map((code) => (
          <p key={code} className="block py-2 px-4 hover:text-gray-600 cursor-pointer" onClick={() => handleSelect(code)}>
            {code}
          </p>
        ))}
      </div>
    </div>

    <div className="relative group z-20">
      <div className="flex items-center gap-3 w-full p-3 mt-1 border rounded-md">
        <div className="flex items-center gap-3 text-gray-400 cursor-pointer">
          {selectedGender} <ChevronDown className="size-4" />
        </div>
            </div>
      <div className="absolute left-[0%] w-[300px]  top-8 space-y-3 text-sm rounded-lg p-4 shadow-2xl bg-white text-gray-950 hidden group-hover:block">
        {[ "Male", "Female"].map((gender) => (
          <p key={gender} className="block py-2 px-4 hover:text-gray-600 cursor-pointer" onClick={() => handleSelectGender(gender)}>
            {gender}
          </p>
        ))}
      </div>
    </div>

         <div className="mt-32 md:flex gap-8 items-center">
         <button onClick={nextStep} className="w-full py-3 mt- bg-[#FAD129] rounded-md">
            Continue
          </button>
          <button onClick={prevStep} className="w-full py-3 mt-2 text-gray-700 bg-gray-100">Back</button>
   
         </div>
         
         
              </div>
      )}

{step === 3 && (
        <div className="space-y-5">
          <h3 className="text-xl font-semibold">Step 3: Create Password</h3>
          <input type="password" placeholder="Password"  required className="w-full p-3 mt-1 border rounded-md" />
          <input type="password" placeholder="Confirm Password" required className="w-full p-3 mt-1 border rounded-md" />
          <button onClick={nextStep} className="w-full py-3 mt-4 bg-[#FAD129] rounded-md">
            Continue
          </button>
          <button onClick={prevStep} className="w-full py-3 mt-2 text-gray-700 bg-gray-100">Back</button>
        </div>
      )}

{step === 4 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Step 4: Verify Your Email</h3>
          <input type="password" placeholder="Enter your code" className="w-full p-3 mt-1 border rounded-md" />
             <p className="text-sm text-gray-400 flex items-center">Did&apos;nt Get Code Request ? <button className="text-gray-900 font-semibold ml-3 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-loader-circle size-4"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Resent</button> </p>
             
               <button  onClick={handleSubmit} className="w-full py-3 mt-4 bg-[#FAD129] rounded-md">
            Submit
          </button>
          <button onClick={prevStep} className="w-full py-3 bg-slate-100 mt-2 text-gray-700">Back</button>
        </div>
      )}

{modalVisible && (
  <div className="fixed inset-0 flex items-center justify-center z-20 bg-gray-900 bg-opacity-50">
    <div className="bg-white px-10 py-16 rounded-md w-[90%] max-w-md mt-20">
    <img 
        src={modalType === "success" ? "/img/verifymark.png" : "/img/Union.png"} 
        alt={modalType === "success" ? "Success" : "Error"} 
        className="mx-auto w-32 h-32 mb-5"
      />
      <h3 className={`text-3xl pb-3 text-center font-semibold ${modalType === "success" ? "text-green-600" : "text-red-600"}`}>
        {modalType === "success" ? "Congratulation" : "Error"}
      </h3>
      <p className="text-center text-sm">{modalMessage}</p>
      <NavLink  to="/dashboard/overview" >
      <button onClick={() => setModalVisible(false)} className="w-full  py-2 mt-12 bg-[#FAD129] rounded-md">
        OK
      </button>
      </NavLink>
    </div>
  </div>
)}


    </div>
  );
};


const LoginForm = () => (
  <form className="space-y-4 text-gray-900">
    <input type="email" placeholder="Email" className="w-full p-3 border rounded-md" required />
    <input type="password" placeholder="Password" className="w-full p-3 border rounded-md" required />
    <button  className="w-full py-3 bg-[#FAD129] rounded-md"> <NavLink to="/dashboard/overview">Log In</NavLink></button>
   
    <button className="w-full py-3  rounded-md"><NavLink  to='/login'>forgot password</NavLink></button>

  </form>
);

const VerificationModal = ({ setShowModal, nextStep }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div className="bg-white space-y-4 text-center md:p-12 py-20 px-6 rounded-md w-[90%] max-w-md">
      <h3 className="text-3xl font-semibold">Confirm ID Validity</h3>
      <p className="text-sm">Only documents issued from your selected country will be accepted.</p>
      <button onClick={() => { setShowModal(false); nextStep(); }} className="w-full py-2 mt-4 bg-[#FAD129] rounded-md">
        Proceed
      </button>
      <button onClick={() => setShowModal(false)} className="w-full py-2 mt-2 text-gray-700">Go Back</button>
    </div>

  </div>
);




export default Signup;

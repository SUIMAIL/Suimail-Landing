import { Button, Label, TextInput, Modal } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export function LoginPage() {
  const [openModal, setOpenModal] = useState(false);
  const [step, setStep] = useState(1); // Step tracker
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setStep(1); // Reset steps
    setEmail("");
    setCode("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <div className="pt-52 flex w-[80%] mx-auto gap-8">
      <img src="/img/sign1.jpg" className="object-cover md:block hidden w-[50%] h-[300px]" />

      <form className="flex w-[100%] flex-col gap-4 mx-auto">
        <h3 className="text-2xl font-semibold">Login to your Key-Chain Account</h3>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@.com"
            required
            className="bg-transparent border-none focus:ring-0"
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required className="border-none focus:ring-0" />
        </div>

        <Button color="warnin" size="lg" className="w-[60%] bg-[#FAD129] mx-auto mt-5" type="submit">
        <NavLink to="/dashboard/overview" > Login</NavLink>
        </Button>

        <p className="text-[#FAD129] text-center cursor-pointer" onClick={() => setOpenModal(true)}>
          Forgotten password
        </p>

        {/* Modal */}
        <Modal show={openModal} size="md" className="pt-32" onClose={onCloseModal} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-2xl text-center font-medium text-gray-900 dark:text-white">
                Forgotten password
              </h3>

              {step === 1 && (
                <div>
                  <Label htmlFor="email" value="Enter your email" />
                  <TextInput
                    id="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-none focus:ring-0"
                  />
                  <div className="w-full flex justify-center mt-4">
                    <Button className="bg-[#FAD129]" onClick={() => setStep(2)}>
                      Enter
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <Label htmlFor="code" value="Enter confirmation code" />
                  <TextInput
                    id="code"
                    placeholder="6-digit code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                    className="border-none focus:ring-0"
                  />
                  <div className="w-full flex justify-center mt-4">
                    <Button className="bg-[#FAD129]" onClick={() => setStep(3)}>
                      Enter
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <Label htmlFor="password" value="New password" />
                  <TextInput
                    id="password"
                    type="password"
                    placeholder="Enter new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-none focus:ring-0"
                  />
                  <Label htmlFor="confirmPassword" value="Confirm password" />
                  <TextInput
                    id="confirmPassword"
                    type="password"
                    placeholder="Re-enter password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="border-none focus:ring-0"
                  />
                  <div className="w-full flex justify-center mt-4">
                    <Button className="bg-[#FAD129]" onClick={onCloseModal}>
                      Submit
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Modal.Body>
        </Modal>

        <p className="text-center my-[-2%]">OR</p>
        <div className="text-sm text-center">
          <p>
            Don&apos;t have an account?{" "}
            <NavLink to="/signup" className="text-[#FAD129]">
              Sign up
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}

import "react"

const HowItWorksAndFuturePlans = () => {
  return (
    <div className="bg-white px-6 py-16">
      {/* How it Works Section */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-10">How it works?</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
          <div className="text-center max-w-xs">
            <div className="bg-black text-white rounded-xl p-3 inline-block mb-4">
              <img
                src={"/images/How1.png"}
                alt="Zk-Login"
                className="text-2xl  "
              />
            </div>
            <h3 className="font-semibold text-lg">Zk-Login</h3>
            <p className="text-sm text-gray-500 mt-2">
              Securely log in to Suimail using zero-knowledge proofs, ensuring
              privacy and security.
            </p>
          </div>

          <div className="text-center max-w-xs">
            <div className="bg-black text-white rounded-xl p-4 inline-block mb-4">
              <img
                src={"/images/IT2.png"}
                alt="Advanced EnCryption"
                className="text-2xl "
              />{" "}
            </div>
            <h3 className="font-semibold text-lg">Mail Encryption</h3>
            <p className="text-sm text-gray-500 mt-2">
              Protect your emails with advanced encryption, ensuring your
              communication stays private.
            </p>
          </div>

          <div className="text-center max-w-xs">
            <div className="bg-black text-white rounded-xl p-4 inline-block mb-4">
              <img
                src={"/images/Works1.png"}
                alt="Walrus"
                className="text-2xl "
              />{" "}
            </div>
            <h3 className="font-semibold text-lg">Storage on Walrus</h3>
            <p className="text-sm text-gray-500 mt-2">
              Store your emails securely on decentralized storage powered by
              Walrus.
            </p>
          </div>
        </div>
      </div>

      {/* Future Plans Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-10">FUTURE PLANS</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white h-70 rounded-xl shadow p-6 text-center">
            <div className="mb-4">
              <img
                src={"/images/Voice.png"}
                alt="Video Call"
                className="h-62 w-full object-cover rounded"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Voice and Video Call Features
            </h3>
            <p className="text-sm text-gray-500">
              Enable decentralized voice and video communication directly within
              Suimail.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow p-8 text-center">
            <div className="mb-4">
              <div className="bg-gray-100 rounded h-70 flex items-center justify-center">
                <img
                  src={"/images/Ns.png"}
                  alt="Video Call"
                  className="h-62 w-full object-cover rounded"
                />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Integrating SUINs</h3>
            <p className="text-sm text-gray-500">
              Use Sui Name Service (SuiNS) for seamless email sending and
              receiving.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <div className="mb-4">
              <div className="bg-gray-100 rounded h-70 flex items-center justify-center">
                <img
                  src={"/images/In-app.png"}
                  alt="Video Call"
                  className="h-62 w-full object-cover rounded"
                />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">In-App Transactions</h3>
            <p className="text-sm text-gray-500">
              Allow users to send and receive tokens directly within the Suimail
              app.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorksAndFuturePlans

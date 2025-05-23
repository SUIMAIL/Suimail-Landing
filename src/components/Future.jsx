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
          <div className="bg-white h-70 rounded-xl shadow p-6 flex flex-col transition hover:shadow-lg hover:-translate-y-1">
            <div className="mb-4">
              <img
                src={"/images/male.jpg"}
                alt="Video Call"
                className="h-62 w-full object-cover rounded"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Empower Your Organization
            </h3>
            <p className="text-sm text-gray-500">
             Private branded communication branded by blockchain
            </p>
            <div className="flex justify-start mt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
                Explore enterprise suite
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow p-8 flex flex-col transition hover:shadow-lg hover:-translate-y-1">
            <div className="mb-4">
              <div className="bg-gray-100 rounded h-70 flex items-center justify-center">
                <img
                  src={"/images/small.jpg"}
                  alt="Video Call"
                  className="h-62 w-full object-cover rounded"
                />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Build Your Web3 Community</h3>
            <p className="text-sm text-gray-500">
              Token Gated communication, events and secure collaboration
            </p>
            <div className="flex justify-start mt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
                Start your Community
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col transition hover:shadow-lg hover:-translate-y-1">
            <div className="mb-4">
              <div className="bg-gray-100 rounded h-70 flex items-center justify-center">
                <img
                  src={"/images/creator.png"}
                  alt="creator"
                  className="h-64 w-full object-cover rounded"
                />
              </div>
            </div>
            <h3 className="font-semibold text-lg">Tools For Web3 Creators</h3>
            <p className="text-sm text-gray-500">
              Monetize Your Content, Reach Your Audience, own your Platform
            </p>
            <div className="flex justify-start mt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
                Launch your Newsletter
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorksAndFuturePlans

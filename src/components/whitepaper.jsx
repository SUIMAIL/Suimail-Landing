import { useNavigate } from "react-router-dom";

const WhitePaper = () => {
      const navigate = useNavigate();

    return (
  <div className="max-w-3xl mx-auto py-12 px-4">

        <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition"
      >
        &larr; Back
      </button>
    <h1 className="text-3xl font-bold mb-8 text-center">Suimail White Paper</h1>

    {/* Abstract */}
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">Abstract</h2>
      <p className="text-gray-700 mb-2">
        Today’s email infrastructure is dominated by centralized platforms that extract user data, monetize attention, and control inbox access. Users lack ownership, are exposed to unsolicited content, and have little transparency over their data. Most Web3 solutions focus on finance, leaving messaging untouched.
      </p>
      <p className="text-gray-700 mb-2">
        <b>SuiMail</b> addresses this by introducing a decentralized, wallet-native communication protocol prioritizing <b>data ownership</b> and <b>privacy</b>. Built on the Sui Blockchain, every message is an on-chain object owned by the recipient, encrypted by the sender, stored via decentralized blob storage (Walrus), and filtered through a <b>pay-to-send model</b> that rewards users for relevant messages and blocks spam.
      </p>
      <p className="text-gray-700 mb-2">
        SuiMail integrates zkLogin for frictionless access and SUINS for human-readable wallet identities. From DAOs to individuals, SuiMail provides a transparent, censorship-resistant communication layer that returns control to users.
      </p>
      <p className="text-gray-700">
        By restoring inbox control and offering economic incentives, SuiMail aims to become the default communication layer for a decentralized internet.
      </p>
    </section>

    {/* Introduction */}
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
      <p className="text-gray-700 mb-2">
        Today’s digital communication is dominated by tech giants who monetize user data with little transparency. Users rarely own their messages; instead, their data is harvested and resold. This poses ethical and security risks.
      </p>
      <p className="text-gray-700 mb-2">
        While Web3 has revolutionized finance and governance, messaging remains centralized and lacks usability. SuiMail closes this gap with a <b>data ownership-first architecture</b> on Sui Blockchain. Messages are user-owned, encrypted, economically filtered, and censorship-resistant.
      </p>
      <p className="text-gray-700 mb-2">
        Decentralized storage (Walrus) ensures persistence without central servers. SuiMail offers a high-integrity communication layer for DAOs, protocols, and users, aligning with the Confidentiality, Integrity, and Availability (CIA) triad.
      </p>
      <p className="text-gray-700">
        SuiMail bridges the trustless ethos of Web3 with the demands of modern communication, empowering users to truly own their inbox.
      </p>
    </section>

    {/* Problem Statement */}
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">Problem Statement</h2>
      <ol className="list-decimal ml-6 space-y-2 text-gray-700">
        <li>
          <b>Centralized Control and Data Ownership:</b> Email platforms are controlled by providers who harvest user data for profit. Users lack true ownership or transparency.
        </li>
        <li>
          <b>Economic Value and Lack of User Compensation:</b> User data is valuable, but users are not compensated. All surplus value goes to platforms.
        </li>
        <li>
          <b>Email Spam and Productivity Loss:</b> 45–85% of emails are spam, causing productivity loss and economic cost. Users are not rewarded for managing spam.
        </li>
        <li>
          <b>Security and Trust Concerns:</b> Email lacks end-to-end encryption, making it vulnerable to breaches and phishing attacks.
        </li>
        <li>
          <b>Gap in Web3 Communication Protocols:</b> No enterprise-grade, decentralized messaging protocol exists for Web3. Users must rely on legacy systems.
        </li>
      </ol>
      <p className="text-gray-700 mt-4">
        <b>Toward a Decentralized Email (SuiMail):</b> SuiMail restores data ownership and privacy, tackling compensation, spam, and security to deliver a user-centric protocol.
      </p>
    </section>

    {/* Proposed Solution */}
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">Proposed Solution: SuiMail</h2>
      <ul className="list-disc ml-6 text-gray-700 mb-2">
        <li>
          <b>Decentralized, wallet-native messaging</b> on Sui Blockchain; each inbox is an on-chain object.
        </li>
        <li>
          <b>Pay-to-Send mechanism</b> lets users set fees for message delivery, turning spam into revenue.
        </li>
        <li>
          <b>Off-chain storage</b> via Walrus, anchored on-chain for trustless integrity.
        </li>
        <li>
          <b>Whitelist/blacklist controls</b> for customizable communication policies.
        </li>
      </ul>
      <p className="text-gray-700">
        SuiMail combines on-chain ownership, economic permissions, and verifiable storage for a secure, scalable, user-sovereign messaging system.
      </p>
    </section>

    {/* Architecture & Technical Design */}
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">Architecture & Technical Design</h2>
      <ul className="list-disc ml-6 text-gray-700 mb-2">
        <li>
          <b>Message Objects & Storage:</b> Each message is a Sui Object with metadata; payloads are encrypted and stored off-chain on Walrus.
        </li>
        <li>
          <b>Ownership & Privacy:</b> Messages are tied to wallets; future upgrades will enable client-side encryption.
        </li>
        <li>
          <b>Gas Optimization:</b> Sui’s parallel engine enables low-latency, cost-efficient microtransactions.
        </li>
        <li>
          <b>Frontend:</b> Web-based app with wallet authentication, Suins integration, inbox/outbox, pay-to-send settings, and address management.
        </li>
        <li>
          <b>Backend Services:</b> Server-side encryption, real-time notifications, hybrid storage, and secure session management.
        </li>
      </ul>
    </section>

    {/* Use Cases */}
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">Use Cases</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>Secure Wallet-to-Wallet Communication:</b> Encrypted messaging between wallets (e.g., DAOs notify members).
        </li>
        <li>
          <b>Spam-Proof Business Communication:</b> Pay-to-send ensures only serious messages reach users (e.g., DeFi auditors).
        </li>
        <li>
          <b>User-Owned Messaging for Communities:</b> dApps integrate SuiMail for private, in-app messaging.
        </li>
        <li>
          <b>Cross-Chain Notifications & Alerts:</b> Receive verified alerts from dApps and protocols.
        </li>
        <li>
          <b>KOL Inbox Monetization:</b> Influencers charge for access, monetizing their inbox.
        </li>
        <li>
          <b>Earning from Spam:</b> Users earn fees for receiving non-whitelisted messages.
        </li>
        <li>
          <b>Marketing Campaigns with Verified Reach:</b> Projects pay to reach opted-in users, who earn rewards for engagement.
        </li>
      </ul>
    </section>

    {/* Roadmap */}
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">Roadmap</h2>
      <ul className="list-disc ml-6 text-gray-700 mb-2">
        <li>
          <b>Q2 2025:</b> MVP Development, Testnet Deployment.
        </li>
        <li>
          <b>Q3 2025:</b> Beta Launch, Community Onboarding.
        </li>
        <li>
          <b>Q3–Q4 2025:</b> User Growth, dApp Integration.
        </li>
        <li>
          <b>Q4 2025+:</b> Mainnet Expansion, Monetization, Cross-chain alerts, KOL campaigns.
        </li>
      </ul>
      <p className="text-gray-700">
        The goal: establish SuiMail as the go-to protocol for secure, wallet-native communication.
      </p>
    </section>

    {/* Team */}
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">Team</h2>
      <p className="text-gray-700 mb-2">
        SuiMail is built by <b>Team Alpha</b>, a group of college students passionate about blockchain and decentralized communication. Our team includes:
      </p>
      <ul className="list-disc ml-6 text-gray-700 space-y-1">
        <li><b>Abdulwahab Salisu</b> – Team Lead & Co-Founder: Cybersecurity, operations, and strategy.</li>
        <li><b>Oladipo Evangel</b> – Technical Lead: Blockchain engineering and smart contracts.</li>
        <li><b>Abdulwaliy Jamiu</b> – UI/UX Designer: User experience and interface design.</li>
        <li><b>Abundant Joel</b> – Brand Designer: Visual identity and branding.</li>
        <li><b>Abdulwahab Abdullahi</b> – Front-End Developer: Scalable interfaces and wallet integration.</li>
        <li><b>Sarah Terwase</b> – Front-End / Move Developer: UI and smart contract integration.</li>
        <li><b>Ukanah Dean</b> – Full-Stack & Backend Developer: Off-chain infrastructure and APIs.</li>
        <li><b>Gyang Solomon</b> – Graphic Designer: Visual assets and campaign media.</li>
        <li><b>Abdullahi Sofiyullah</b> – Community Manager: Growth, engagement, and partnerships.</li>
      </ul>
      <p className="text-gray-700 mt-2">
        Team Alpha is committed to building a user-first, decentralized messaging protocol for the future of Web3.
      </p>
    </section>

    {/* Governance & Community */}
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">Governance & Community</h2>
      <ul className="list-disc ml-6 text-gray-700 mb-2">
        <li>Community-driven governance with proposals and voting.</li>
        <li>Incentivized participation for testing, bug reporting, and marketing.</li>
        <li>Ambassador programs and working groups for advocacy and feedback.</li>
        <li>Educational initiatives for onboarding Web2 and Web3 users.</li>
        <li>Transparent feedback channels via social platforms.</li>
      </ul>
      <p className="text-gray-700">
        SuiMail aims to foster a censorship-resistant, user-first messaging ecosystem guided by its global community.
      </p>
    </section>

    {/* Legal Disclaimer */}
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">Legal Disclaimer</h2>
      <p className="text-gray-700">
        This whitepaper is for informational purposes only and does not constitute legal, financial, or professional advice. SuiMail is under active development; features and roadmap may change. Engaging with SuiMail involves risks inherent in emerging technologies. Readers should conduct their own research and consult professionals before making decisions.
      </p>
    </section>

    {/* References */}
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">References</h2>
      <ol className="list-decimal ml-6 text-gray-700 space-y-1">
        <li>
          Sui Blockchain Whitepaper – <a href="https://docs.sui.io" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://docs.sui.io</a>
        </li>
        <li>
          Move Language Documentation – <a href="https://move-language.github.io/move" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://move-language.github.io/move</a>
        </li>
        <li>
          XMTP Protocol – <a href="https://xmtp.org" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://xmtp.org</a>
        </li>
        <li>
          EPNS / Push Protocol – <a href="https://push.org" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://push.org</a>
        </li>
        <li>
          Walrus Key Management (Fictional/Internal Concept)
        </li>
        <li>
          Sui Ecosystem Projects & Developer Blogs – <a href="https://sui.io/ecosystem" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://sui.io/ecosystem</a>
        </li>
        <li>
          Product-Led Startup Roadmaps (Generic/Startup Templates)
        </li>
      </ol>
    </section>
  </div>
)
}
export default WhitePaper
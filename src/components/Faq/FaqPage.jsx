import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Key-chain?",
      answer: "Key-chain is a cryptocurrency payment platform that makes it easy for individuals and businesses to use digital currencies for everyday transactions. We focus on security, simplicity, and seamless integration to ensure crypto payments are accessible to everyone."
    },
    {
      question: "How does Key-chain work?",
      answer: "Key-chain allows users to send, receive, and manage cryptocurrency payments effortlessly. Businesses can integrate our system to accept crypto payments, and individuals can use our platform for secure transactions."
    },
    {
      question: "Is Key-chain secure?",
      answer: "Absolutely! We prioritize security by implementing industry-standard encryption, two-factor authentication (2FA), and multi-layered protection to safeguard users' assets and personal information."
    },
    {
      question: "Can businesses accept crypto with Key-chain?",
      answer: "Yes! Key-chain provides businesses with a simple way to integrate cryptocurrency payments, allowing them to accept Bitcoin, Ethereum, and other digital assets while benefiting from lower transaction fees and global reach."
    },
    {
      question: "What cryptocurrencies does Key-chain support?",
      answer: "We support a wide range of cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), Binance Coin (BNB), USDT, and more. We continuously expand our supported assets to meet user needs."
    },
    {
      question: "Are there any transaction fees?",
      answer: "Yes, we charge minimal transaction fees to cover network and security costs. However, our fees are much lower compared to traditional banking and payment gateways."
    },
    {
      question: "Can I use Key-chain for international payments?",
      answer: "Yes, Key-chain enables fast, secure, and borderless cryptocurrency transactions, making it easier to send money globally without the high fees of traditional banking."
    },
    {
      question: "Is there a mobile app for Key-chain?",
      answer: "We are currently developing a mobile app to enhance accessibility and user experience. In the meantime, our web platform is mobile-friendly and works seamlessly on all devices."
    },
    {
      question: "Does Key-chain allow crypto-to-fiat conversions?",
      answer: "Yes, we offer fiat conversion services in supported regions, enabling users to convert cryptocurrency into local currency and withdraw to their bank accounts."
    },
    {
      question: "How do I get started with Key-chain?",
      answer: "To get started, sign up for a free account, link your cryptocurrency wallet, and start making secure and instant transactions with Key-chain."
    },
    {
      question: "Does Key-chain require KYC verification?",
      answer: "For compliance and security reasons, some features may require KYC (Know Your Customer) verification. This helps prevent fraud and ensures a safer experience for all users."
    },
    {
      question: "How fast are transactions on Key-chain?",
      answer: "Transactions on Key-chain are processed instantly or within minutes, depending on the blockchain network's traffic and the type of cryptocurrency used."
    },
    {
      question: "Can I send crypto to people who don’t use Key-chain?",
      answer: "Yes! You can send crypto to any wallet address, even if the recipient is not a Key-chain user."
    },
    {
      question: "Does Key-chain support NFTs?",
      answer: "While our primary focus is on cryptocurrency payments, we are exploring NFT integrations for future updates."
    },
    {
      question: "Can I use multiple wallets with Key-chain?",
      answer: "Yes! Key-chain supports multiple wallets, giving users the flexibility to manage their funds across different accounts."
    },
    {
      question: "Is Key-chain decentralized?",
      answer: "We integrate both centralized and decentralized elements to ensure a smooth user experience while maintaining security and transparency."
    },
    {
      question: "How do I reset my password?",
      answer: "If you forget your password, go to the login page and click 'Forgot Password.' Follow the instructions to reset it securely."
    },
    {
      question: "Does Key-chain work on all devices?",
      answer: "Yes, our platform is optimized for desktops, tablets, and smartphones, ensuring a seamless experience across all devices."
    },
    {
      question: "How do I contact support?",
      answer: "You can reach out to our support team through the help center on our website or email us directly for assistance."
    },
    {
      question: "How do I report a transaction issue?",
      answer: "If you experience any issues with a transaction, contact our support team with the transaction ID, and we’ll assist you in resolving it as quickly as possible."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[100%] md:w-[70%] mx-auto pb-[8%] px-6 pt-[40%] md:pt-[14%] ">
      <h1 data-aos="zoom-in" className="text-3xl font-bold text-center text-gray-800 mb-4">Frequently Asked Questions</h1>
      <p data-aos="zoom-in" className="text-center text-gray-600 mb-8">
        Got questions? We’ve got answers! Browse through our most frequently asked questions to learn more about Key-chain and how it works.
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div data-aos="fade-up" key={index} className="border border-gray-300 rounded-lg p-4 bg-white shadow">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800"
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && <p className="mt-3 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

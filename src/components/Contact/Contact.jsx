import { useState } from 'react';

export default function ContactPage() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Simulate form submission
        const isSuccess = Math.random() > 0.5; // Simulate success or failure
        setIsSubmissionSuccessful(isSuccess);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <section className="relative md:mb-[13%] flex flex-wrap pt-20 lg:h-screen lg:items-center w-[90%] mx-auto">
            <div className="w-full  py-12  sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="mx-auto md:max-w-lg text-center">
                    <h1  data-aos="zoom-in" className="text-2xl font-bold sm:text-4xl">Get in touch!</h1>
                    <p  data-aos="fade-up" className="mt-4 text-sm">
                        Have questions or want to collaborate? We are here to help! Whether you are a business looking to integrate crypto payments or an individual exploring digital transactions, our team is ready to assist you. Reach out to us anytime, and let us make crypto seamless together.!
                    </p>
                </div>
                <form  data-aos="fade-up" onSubmit={handleSubmit} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                    <div >
                        <label htmlFor="email" className="sr-only">Email</label>
                        <div className="relative border rounded-lg">
                            <input
                                type="email"
                                className="w-full rounded-lg capitalize border-0 focus:outline-none p-4 pe-12 text-sm shadow-xs"
                                placeholder="Enter email"
                            />
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name" className="sr-only">Name</label>
                        <div className="relative border rounded-lg">
                            <input
                                type="name"
                                className="w-full rounded-lg border-gray-200 capitalize focus:outline-none p-4 pe-12 text-sm shadow-xs"
                                placeholder="Enter your name"
                            />
                        </div>
                    </div>
                    <div className="relative border rounded-lg">
                        <textarea
                            className="w-full rounded-lg border-gray-200 focus:outline-none capitalize p-4 pe-12 text-sm shadow-xs"
                            placeholder="Enter your message"
                        />
                    </div>
                    <div className="flex items-center justify-center pt-8">
                        <button
                            type="submit"
                            className="inline-block rounded-lg bg-[#FAD129] px-5 py-3 text-sm font-medium text-gray-900"
                        >
                            Send A Message
                        </button>
                    </div>
                </form>
            </div>
            <div  data-aos="fade-left" className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 hidden md:block">
                <img
                    alt=""
                    src="/img/contact.png"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            {isModalVisible && (
                <div className="fixed inset-0  flex z-20 items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white  p-8 rounded-lg text-center w-[90%] md:w-[50%]">
                        <img
                            src={isSubmissionSuccessful ? "/img/verifymark.png" : "/img/Union.png"}
                            alt={isSubmissionSuccessful ? "Success" : "Failure"}
                            className="mx-auto mb-4 w-[35%] md:w-[20%]"
                        />
                        <h2 className="text-2xl font-bold">
                            {isSubmissionSuccessful ? "Thank You!" : "Submission Failed"}
                        </h2>
                        <p className="mt-4">
                            {isSubmissionSuccessful
                                ? "Your message has been successfully sent. We will get back to you soon."
                                : "There was an error sending your message. Please try again."}
                        </p>
                        <button
                            onClick={closeModal}
                            className="mt-6 inline-block text rounded-lg bg-[#FAD129] px-5 py-3 text-sm font-medium text-gray-900"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
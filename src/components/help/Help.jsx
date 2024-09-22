import { useState } from 'react';
import './help.css';

export default function Help() {
    const [isHelpTrue, setHelpTrue] = useState(false);

    const handleHelpClick = () => {
        console.log('Help button clicked: ' + isHelpTrue);
        setHelpTrue(true);
    };

    return (
        <>
            <div id='help' className="help-app mt-[200px] max-w-3xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-4">Help</h1>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold">FAQ</h2>
                    <ul className="list-disc ml-5">
                        <li className="mb-2">
                            <strong>What is OneTap?</strong> - OneTap is an e-commerce platform that allows you to buy and sell items easily.
                        </li>
                        <li className="mb-2">
                            <strong>How do I purchase items?</strong> - Select the item you want and follow the instructions on the product page to complete your purchase.
                        </li>
                        <li className="mb-2">
                            <strong>How can I contact OneTap?</strong> - You can reach us at 
                            <button 
                                onClick={handleHelpClick} 
                                className="contact-us-button px-[12px] py-[8px] focus:outline-none ml-[20px] rounded-md border-solid border-[1px] border-slate-900 transition">
                                Here
                            </button>
                        </li>
                    </ul>

                    {isHelpTrue && (
                        <div className='help-contact mt-4 p-4 border border-gray-300 rounded-lg shadow-md'>
                            <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
                            <form className="space-y-4">
                                <div className='email'>
                                    <label className="block text-sm font-medium">Email</label>
                                    <input 
                                        type='email' 
                                        required 
                                        className="mt-1 p-2 border border-gray-300 rounded w-full" 
                                    />
                                </div>
                                <div className='name'>
                                    <label className="block text-sm font-medium">Name</label>
                                    <input 
                                        type='text' 
                                        required 
                                        className="mt-1 p-2 border border-gray-300 rounded w-full" 
                                    />
                                </div>
                                <div className='message'>
                                    <label className="block text-sm font-medium">Message</label>
                                    <textarea 
                                        required 
                                        className="mt-1 p-2 border border-gray-300 rounded w-full h-24" 
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                                    Submit
                                </button>
                            </form>
                        </div>
                    )}
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold">User Guides</h2>
                    <p>
                        For more detailed instructions, please visit our <a href="/guides" className="text-blue-500 hover:underline">User Guides</a> page.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold">Contact Support</h2>
                    <p>
                        If you have further questions, feel free to contact our support team at <a href="mailto:support@onetap.com" className="text-blue-500 hover:underline">support@onetap.com</a>.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">Additional Resources</h2>
                    <p>
                        Find more information on our <a href="/resources" className="text-blue-500 hover:underline">resources page</a>.
                    </p>
                </section>
            </div>
        </>
    );
}

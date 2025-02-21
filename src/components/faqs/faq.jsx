import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './faq.css';

const faqsData = [
    { id: 1, question: "What is included in the free trial?", answer: "You get full access to our platform for 14 days." },
    { id: 2, question: "Can I cancel my subscription at any time?", answer: "Yes, you can cancel your subscription at any time directly from your account settings." },
    { id: 3, question: "Do you offer discounts for annual plans?", answer: "Yes, we offer a 20% discount for annual subscriptions." },
    { id: 4, question: "Is my data secure on your platform?", answer: "We use industry-standard encryption to keep your data secure." },
    { id: 5, question: "Can I change my plan after I’ve subscribed?", answer: "Yes, you can upgrade or downgrade your plan anytime." },
    { id: 6, question: "Do you offer support for onboarding new users?", answer: "Yes, we provide dedicated onboarding support for new users." },
];

const FAQItem = ({ faq, isActive, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`faq-item ${isActive ? 'active' : ''}`}
        >
            <div className="faq-header">
                <p className="faq-question">{faq.question}</p>
                {isActive ? <ChevronUp  className="faq-icon" size={20} color="#7B7B7B" /> : <ChevronDown className="faq-icon" size={20} color="#7B7B7B"/>}
            </div>
            {isActive && <p className="faq-answer">{faq.answer}</p>}
        </div>
    );
};

export default function FAQ() {
    const [activeId, setActiveId] = useState(null);

    const toggleFAQ = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <div className="faq-container">


            <div className="faq-content">


                <div className="faq-title-container">
                    <span className="mono-sm">GOT QUESTIONS</span>
                    <span className="sectional-title">Everything You Need to Know, All in One Place</span>
                    <span className="body-md-rg">
                        Discover quick and comprehensive answers to common questions about our platform, services, and features
                    </span>
                </div>

                <div className="faq-list">
                    {faqsData.map((faq) => (
                        <FAQItem
                            key={faq.id}
                            faq={faq}
                            isActive={faq.id === activeId}
                            onClick={() => toggleFAQ(faq.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

import React from 'react'
import logo from '../../assets/logonameblue.svg' // Replace with your logo path

const Faq = () => {
    const [openIndex, setOpenIndex] = React.useState(0) // First Q open by default
    const faqsData = [
        {
            question: 'What is Careera?',
            answer: 'Careera is an AI-powered résumé builder that helps you create, track, and optimize professional CVs effortlessly.'
        },
        {
            question: 'Can I create multiple CV versions?',
            answer: 'Yes! Careera allows you to manage multiple résumé versions, making it easy to tailor your applications to different jobs.'
        },
        {
            question: 'How does AI feedback work?',
            answer: 'Careera provides instant AI-driven suggestions and improvements to help your CV stand out to recruiters.'
        },
        {
            question: 'Is my personal data safe?',
            answer: 'Absolutely. Careera uses secure cloud storage and follows best practices to protect your personal and professional information.'
        },
        {
            question: 'Can I track my application progress?',
            answer: 'Yes! You can track the performance and status of your résumés and get actionable insights to improve your job applications.'
        }
    ]

    return (
        <div id='faq' className='relative flex flex-col items-center py-16 px-4 scroll-mt-12'>

            {/* === BACKGROUND LINES === */}
            <div className="absolute inset-0 -z-20">
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                                          linear-gradient(to bottom, #000 1px, transparent 1px)`,
                        backgroundSize: "4rem 4rem",
                        backgroundPosition: "center center",
                    }}
                />
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');
                * { font-family: 'Poppins', sans-serif; }
            `}</style>

            {/* === HEADING === */}
            <div className='text-center mb-6 relative z-10 -mt-6'>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">Frequently Asked Questions</h2>
                <p className='text-base md:text-lg text-slate-500 mt-2 max-w-md mx-auto'>
                    Here you'll find answers to common questions about using Careera.
                </p>
            </div>

            {/* === CONTENT ROW === */}
            <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row gap-8 items-center">

                {/* Left side: FAQ Q&A (vertically centered) */}
                <div className="md:w-1/2 flex flex-col justify-center gap-4 items-start text-left text-slate-800">
                    {faqsData.map((faq, index) => (
                        <div key={index} className='flex flex-col items-start w-full'>
                            <div
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className='flex items-center justify-between w-full cursor-pointer bg-white border border-indigo-100 p-4 rounded'
                                title={openIndex === index ? "Close" : "Open"} // Tooltip for hover
                            >
                                <h2 className='text-base md:text-lg font-semibold'>{faq.question}</h2>
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}
                                >
                                    <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className={`text-base md:text-lg text-slate-500 px-4 transition-all duration-500 ease-in-out ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right side: logo above paragraph (vertically centered) */}
                <div className="md:w-1/2 flex flex-col justify-center items-center text-center text-slate-500">
                    <img src={logo} alt="Careera Logo" className="w-20 h-auto mb-4"/>
                    <p className='text-base md:text-lg w-full whitespace-pre-line'>
                        Here are the answers to
                        some common questions
                        we receive.

                        If you want to ask us a question
                        directly, feel free to schedule a
                        chat with us at the end of the
                        page.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Faq

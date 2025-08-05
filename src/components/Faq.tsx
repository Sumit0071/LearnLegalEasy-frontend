import { useState } from "react";
import { Plus, Minus } from "lucide-react"; // Ensure this is installed

const Faq: React.FC = () => {
  const questions: Record<string, string> = {
    'What is LearnLegalEasy?': 'LearnLegalEasy is an AI-powered legal assistant designed to help users with legal document review, contract analysis, and legal research.',
    'How does the AI summarizer work?': 'The AI summarizer uses advanced natural language processing to analyze legal documents and provide concise summaries.',
    'Is my data secure?': 'Yes, we prioritize user privacy and data security. All data is encrypted and stored securely.',
    'Can I integrate LearnLegalEasy with other tools?': 'Yes, LearnLegalEasy offers API access for integration with various legal tools and platforms.',
    'What support options are available?': 'We offer email support, a community forum, and live chat for Pro and Enterprise users.',
  };

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-[--color-primary] dark:text-[--color-primary]">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {Object.entries(questions).map(([question, answer], index) => (
          <div
            key={index}
            className="rounded-xl border border-[--color-border] shadow-sm transition-all duration-300 bg-[--color-card] text-[--color-card-foreground]"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="flex items-center justify-between w-full px-5 py-4 text-left font-medium hover:bg-[--color-muted] dark:hover:bg-[--color-muted] transition-all"
            >
              <span>{question}</span>
              <span className="ml-4">
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-[--color-primary]" />
                ) : (
                  <Plus className="w-5 h-5 text-[--color-primary]" />
                )}
              </span>
            </button>
            <div
              className={`px-5 pt-0 pb-4 text-sm transition-all duration-300 ${
                openIndex === index ? "block" : "hidden"
              }`}
            >
              {answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

import ChatBar from "@/components/ChatBar";

const Chat = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="flex flex-col w-full max-w-4xl h-screen border-x border-gray-200 dark:border-gray-700 shadow-md">
        
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <h1 className="text-lg font-semibold text-gray-800 dark:text-white">Legal Chat Assistant</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Ask legal questions, upload docs, and get help.</p>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Sample Chat Bubbles */}
          <div className="self-start bg-white dark:bg-gray-700 p-3 rounded-lg shadow text-sm text-gray-900 dark:text-white">
            👩‍⚖️ Hello! I'm your legal assistant. How can I help you today?
          </div>
        </div>

        {/* ChatBar at Bottom */}
        <ChatBar input="hello" voice="" />
      </div>
    </div>
  );
};

export default Chat;

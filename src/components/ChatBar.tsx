import { useRef, useState, useEffect, useCallback } from "react";
import { Paperclip, Send, Mic, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatBarProps {
  input: string;
  voice: string;
}

const ChatBar:React.FC<ChatBarProps> = ({ input, voice }) => {
  const [message, setMessage] = useState(input || "");
  const [files, setFiles] = useState<File[]>([]);
  const [recording, setRecording] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 🧠 Dummy summarizer (stub)
  const summarizeFiles = useCallback(() => {
    files.forEach((file) => {
      console.log("Summarizing", file.name);
      // TODO: integrate real AI summarizer here
    });
  }, [files]);

  useEffect(() => {
    if (voice) {
      setMessage((prev) => `${prev} ${voice}`.trim());
    }
  }, [voice]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      const droppedFiles = Array.from(e.dataTransfer.files);
      setFiles((prev) => [...prev, ...droppedFiles]);
    }
  };

  const handleSend = () => {
    if (message.trim() || files.length) {
      console.log("📝 Message:", message);
      console.log("📎 Files:", files);
      summarizeFiles();
      setMessage("");
      setFiles([]);
    }
  };

  // 🗣️ Speech-to-text
  const startSpeechToText = () => {
    const recognition = new (window as any).webkitSpeechRecognition() || new (window as any).SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onstart = () => setRecording(true);
    recognition.onerror = () => setRecording(false);
    recognition.onend = () => setRecording(false);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setMessage((prev) => `${prev} ${transcript}`.trim());
    };

    recognition.start();
  };

  const removeFile = (fileName: string) => {
    setFiles((prev) => prev.filter((f) => f.name !== fileName));
  };

 return (
  <div
    className="w-full border-t px-4 py-3 flex flex-col gap-2 bg-white dark:bg-gray-900"
    onDrop={handleDrop}
    onDragOver={(e) => e.preventDefault()}
  >
    {/* Attached Files Preview */}
    {files.length > 0 && (
      <div className="max-h-24 overflow-y-auto w-full rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-2">
        <p className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">📎 Attached Files:</p>
        <ul className="space-y-1">
          {files.map((file) => (
            <li key={file.name} className="flex items-center justify-between bg-white dark:bg-gray-700 px-3 py-1 rounded">
              <span className="truncate max-w-[200px] text-sm">{file.name}</span>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => removeFile(file.name)}
                aria-label="Remove file"
              >
                <X className="w-4 h-4 text-red-500" />
              </Button>
            </li>
          ))}
        </ul>
      </div>
    )}

    {/* Chat Input Area */}
    <div className="flex w-full items-center gap-2">
      <div className="flex-1 relative">
        <textarea
          ref={textareaRef}
          rows={1}
          placeholder="Ask your legal question..."
          aria-label="Chat input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-3 pr-14 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
        <Button
          onClick={() => fileInputRef.current?.click()}
          variant="ghost"
          className="absolute right-14 top-1/2 -translate-y-1/2 p-1"
          aria-label="Attach files"
        >
          <Paperclip className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </Button>
        <Button
          onClick={startSpeechToText}
          variant="ghost"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1"
          aria-label="Voice input"
        >
          <Mic className={`w-5 h-5 ${recording ? "text-red-500" : "text-gray-500 dark:text-gray-400"}`} />
        </Button>
      </div>

      <Button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        onClick={handleSend}
        aria-label="Send message"
      >
        <Send className="w-5 h-5" />
      </Button>
    </div>

    {/* Hidden File Input */}
    <input
      ref={fileInputRef}
      type="file"
      multiple
      className="hidden"
      onChange={handleFileChange}
      aria-label="Attach files"
    />
  </div>
);

};

export default ChatBar;

import { useRef, useState, useEffect } from "react";


const AIChat = () => {
    const [inputValue, setInputValue] = useState('');
    const [chatQuota, setChatQuota] = useState(0);
    const [isPrompting, setIsPrompting] = useState(false)
    const [chatInputPlaceholder, setChatInputPlaceholder] = useState('Type your message here')

    const [conversationStore, setConversationStore] = useState([]);
    const [counter, setCounter] = useState(7);

    useEffect(() => {
        // console.log(conversationStore); // Check if this reflects the updated state
    }, [conversationStore]);
    
    const RagCWorker = async (message) => {
        const updatedConversation = [
            ...conversationStore,
            {
                role: 'user',
                id: counter + 1,
                content: message,
            },
        ];
        setCounter(counter + 1)
    
        setConversationStore(updatedConversation);
    
        try {
            setChatInputPlaceholder('Please wait, processing Ekky AI response');
    
            const response = await fetch(
                `https://rag-conversational-w-cfworker.ekky-mulialasardi.workers.dev`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    cache: "no-store",
                    body: JSON.stringify({ messages: updatedConversation.slice(-2) })
                }
            );
    
            const data = await response.json();
    
            const responseData = data[0]?.response?.response || "No response from AI";
    
            setConversationStore(prevState => [
                ...prevState,
                {
                    role: 'robot',
                    id: counter + 1,
                    content: responseData,
                },
            ]);
            setCounter(counter + 1)
            appendMessage(responseData, false);
            setChatInputPlaceholder('Type your response here...');
            setIsPrompting(false);
    
            return responseData;
        } catch (error) {
            // Handle errors here
            console.error('Error:', error);
            appendMessage('Ooops, something bad happened during my AI Generation, seems like im already reaching my API limit. but dont worry. please try again in one minute *oh-ho* 😃', false);
            setChatInputPlaceholder('Type your response here...');
            setIsPrompting(false);
            return 'Error occurred during AI response';
        }
    };
    

    const chatContainerRef = useRef(null);
    
    const appendMessage = (message: String, isSentByCurrentUser: boolean) => {
        const chatContainer = chatContainerRef.current;
        const newMessageElement = document.createElement('div');
        const messageClassName = isSentByCurrentUser ? 'col-start-6 col-end-13 bg-slate-50' : 'col-start-1 col-end-8 bg-red-50';
        const messageAlignmentClassName = isSentByCurrentUser ? 'justify-start' : 'justify-start';
        const messageFlexDirection = isSentByCurrentUser ? 'flex-row-reverse' : '';
        const messageSender = isSentByCurrentUser ? 'You' : 'Ekky AI';
        newMessageElement.className = `p-3 rounded-lg ${messageClassName}`;
        newMessageElement.innerHTML = `
          <div className="flex items-center gap-1 ${messageFlexDirection} ${messageAlignmentClassName}">
            <div
            className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-50 flex-shrink-0"
            >
            ${messageSender}
            </div>
            <div className="relative text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
              <div>${message}</div>
            </div>
          </div>
        `;
        chatContainer.appendChild(newMessageElement);

    };
      
    const handleChatInput = (event) => {
        if (isPrompting == false){
            setInputValue(event.target.value)
        }
    };
  
    const handleChatButton = async () => {
        if (isPrompting == false || chatQuota == 5){

            if(chatQuota == 5){
                setInputValue('');
                setChatInputPlaceholder('Quota Ran Out')
                appendMessage("oh-uh, You have run out of quota, seems like you were having fun with me 🥰, let's chat again, just try to refresh the web", false)
                return
            }

            const message = inputValue.trim();
            if (message) {
              // call the appendMessage function with the message and isSentByCurrentUser parameter
                setInputValue('');
                setChatQuota(chatQuota + 1)
                appendMessage(message, true);
                
                setConversationStore(prevState => [...prevState, { role: 'user', id: counter + 1, content: message }])
                setCounter(counter + 1)

              
                let response = await RagCWorker(message)
                // console.log(response, 'response')
                // appendMessage(response, false)
                // setIsPrompting(false)
                // setChatInputPlaceholder('Type your response here...')
            }
        }


    };


    return (
        <div id="chat-container" className="col-span-12 max-h-96 lg:max-h-64 pb-10">
            <div
            className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 max-h-96 lg:h-full p-4"
            >
            <div className="flex flex-col h-full overflow-x-auto mb-4">
                <div className="flex flex-col h-full">
                    <div className="grid grid-cols-12 gap-y-2" ref={chatContainerRef}>
                        
                    </div>
                </div>
            </div>
            <div
                className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
            >
                <div>
                <button
                    className="flex items-center justify-center text-gray-400 hover:text-gray-600"
                >
                    {chatQuota}/5
                </button>
                </div>
                <div className="flex-grow ml-4">
                <div className="relative w-full">
                    <input
                    type="text"
                    name="chat"
                    value={inputValue}
                    placeholder={chatInputPlaceholder}
                    disabled={isPrompting}
                    id="chat"
                    onChange={handleChatInput}
                    className="flex w-full border rounded-xl focus:outline-none focus:border-neutral-950 pl-4 h-10"
                    />
                </div>
                </div>
                <div className="ml-4">
                <button
                    className="flex items-center justify-center bg-neutral-800 hover:bg-neutral-950 rounded-xl text-white px-4 py-1 flex-shrink-0"
                    onClick={handleChatButton}
                >
                    <span>Send</span>
                    <span className="ml-2">
                    <svg
                        className="w-4 h-4 transform rotate-45 -mt-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                    </svg>
                    </span>
                </button>
                </div>
            </div>
            </div>
        </div>
    )

}

export default AIChat;
import { useTransition } from "@remix-run/react";
// import * as tmImage from '@teachablemachine/image'
import { initgoo, loop, predict, exportDetected } from 'public/p-scripts/recai';
import { useRef, useState } from "react";
import SpanLink from "~/Components/MicroComponents/span-link";

const Recai = () => {
    const [inputState, setInputState] = useState("")
    const [start, setStart] = useState(true)
    const [startStatus, setStartStatus] = useState("Click to start")

    const [gpt, setGpt] = useState(true)
    const [gptStatus, setGptStatus] = useState("Click to generate chat")

    const transition = useTransition()
    
    const xonst = async () => {
        console.log("Starting camera")
        if(start == true){
            setStart(false)
            setStartStatus("✔ Started (this load may take a while, please allow camera access)")
            await initgoo()
            loop()
        }
    }

    const gptRequest = async (prompt: String) => {
        //fetching data from gpt/aws lambda
        setChatInputPlaceholder('Please wait, processing GPT response')

        const response = await fetch(
            `https://eziuqoe7we.execute-api.ap-southeast-1.amazonaws.com/1/?recaiType=${prompt}`,
            {
                headers: {
                    "X-API-Key": "LZoViQWwlK3H7ljxaal2a7g7FRNw3vW65qMHHI8k",
                },
                cache: "no-store"
            }
          )

        return response.json();
    }

    let dataTrash = [
        {
            id: 'T001',
            item: 'Botol Kemasan Air Mineral',
            type: 'PET'
        },
        {
            id: 'P003',
            item: 'Gelas Pelastik',
            type: 'PP'
        },
        {
            id: 'T004',
            item: 'Toples/Kemasan Wadah Plastik',
            type: 'PET'
        },
        {
            id: 'H001',
            item: 'Botol',
            type: 'HDPE'
        },
        {
            id: 'H002',
            item: 'Tempat Sampah/Wadah Besar',
            type: 'HDPE'
        },
        {
            id: 'V001',
            item: 'Pipa',
            type: 'PVC'
        },
        {
            id: 'L001',
            item: 'Kantong/Kresek',
            type: 'LDPE'
        },
        {
            id: 'L002',
            item: 'Jas Hujan',
            type: 'LDPE'
        },
        {
            id: 'P007',
            item: 'Kantong/Plastik Kiloan/Plastik Kemasan',
            type: 'PP'
        },
        {
            id: 'S001',
            item: 'Styrofoam/Wadah Makanan',
            type: 'PS'
        },
        {
            id: 'P001',
            item: 'Tempat Makan/Alat Makan/Botol Minum seperti: Tupperware',
            type: 'PP'
        },
    ]

    const [isPrompting, setIsPrompting] = useState(false)
    const [chatInputPlaceholder, setChatInputPlaceholder] = useState('Try to scan image first')

    const handleDetected = async () => {

        let detected = await exportDetected()
        
        if (detected.status == false){
            alert("Image belum terdeteksi")
            return
        }

        setGptStatus("✔ Chat request generated, please wait")
        setGpt(false)

        setIsPrompting(true)

        let indentified = dataTrash.find(item => item.id == detected.detected)
        let prompt_construct = `${indentified?.item} ${indentified?.type}`
        appendMessage(`Detected: Sejenis ${prompt_construct}`, false)
        let response = await gptRequest(prompt_construct)
        appendMessage(response.choices[0].message.content, false)

        setIsPrompting(false)
        setChatInputPlaceholder('Type your response here...')

        
        // gptRequest(detected)
    }

    const chatContainerRef = useRef(null);
    
    const appendMessage = (message: String, isSentByCurrentUser: boolean) => {
        const chatContainer = chatContainerRef.current;
        const newMessageElement = document.createElement('div');
        const messageClassName = isSentByCurrentUser ? 'col-start-6 col-end-13' : 'col-start-1 col-end-8';
        const messageAlignmentClassName = isSentByCurrentUser ? 'justify-start' : 'justify-start';
        const messageFlexDirection = isSentByCurrentUser ? 'flex-row-reverse' : '';
        const messageSender = isSentByCurrentUser ? 'You' : 'GPT';
        newMessageElement.className = `p-3 rounded-lg ${messageClassName}`;
        newMessageElement.innerHTML = `
          <div className="flex items-center gap-1 ${messageFlexDirection} ${messageAlignmentClassName}">
            <div
            className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-200 flex-shrink-0"
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
      
    const [inputValue, setInputValue] = useState('');
    const [chatQuota, setChatQuota] = useState(0);

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
                appendMessage("You have run out of quota, try to use new image, you could refresh the web", false)
                return
            }

            const message = inputValue.trim();
            if (message) {
              // call the appendMessage function with the message and isSentByCurrentUser parameter
                setInputValue('');
                setIsPrompting(true)
                setChatQuota(chatQuota + 1)
                appendMessage(message, true);
              
                let response = await gptRequest(message)
                appendMessage(response.choices[0].message.content, false)
                setIsPrompting(false)
                setChatInputPlaceholder('Type your response here...')
            }
        }


    };


    return (
      <>
        <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tf.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@latest/dist/teachablemachine-image.min.js"></script>

        <div className="flex flex-col mx-auto border-x-2 border-black 2xl:max-w-[1280px] min-h-screen">
            <div className={ `flex flex-col mx-auto 2xl:max-w-[1280px] transition ${transition.state == 'idle' ? 'opacity-100' : 'opacity-0'} min-h-screen` }>
                <div className="grid grid-cols-12 lg:mx-20 lg:my-24  mt-16 mx-3">
                    
                    <div className="col-span-12 lg:col-span-6 grid grid-cols-6 overflow-y">
                        <div className="col-span-12 lg:col-span-6">
                            <h1 className="text-2xl mb-2">My Project: Recycle AI [Rekai/Recai]</h1>
                            <h2>
                                Pre-Alpha (May 4, 2023) - Accuracy: 30-80%
                            </h2>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <button type="button" onClick={e => xonst()}>{startStatus}</button>
                            
                            <div id="project-container">
                                <div id="webcam-container"></div>
                                <p>Prediction:</p>
                                <div id="label-container" className="flex flex-wrap gap-1"></div>
                                <br />
                                <p id="detected-p">Detected:</p>
                                <p id="chatgpt-p">Chat GPT: <button type="button" onClick={e => handleDetected()}>{gptStatus}</button></p>
                                <br />
                                <div id="chat-container" className="col-span-12">
                                    <div className="flex h-screen antialiased text-gray-800">
                                        <div className="flex flex-col flex-auto h-full pr-10">
                                            <div
                                            className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
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
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 mt-4 lg:mt-0">
                        <h3>Description:</h3>
                        <p className="mx-auto text-justify">
                        Recycle AI is an Image Recognition app that uses Machine Learning and Computer Vision to detect types of recycable trash and also integrate with Open AI. In current state of Pre-Alpha, Recycle AI has some limitation such as small image dataset (est. 1000 pict), and not many different kind of objects that it could recognize.
                        <br/><br/>
                        Future plan is to collect more dataset, Integrate with recycle/waste collector companies or google maps to see where the nearest waste collection zone. potentially AR or integration with Smart City projects
                        <br /><br />
                        Please Allow Camera Access | Refresh the web to scan new image
                        </p>
                        <br /><br />
                        <h3>Technology Used:</h3>
                        <p className="mx-auto text-justify">
                        Python, Javascript, Typescript, Tensorflow, Tensorflow.js, AWS, AWS Lambda, AWS API Gateway, React, Open AI, Web Camera, Bing Images, Data Scraping Script
                        </p>
                        <br/><br/>
                        <h3>Supporting Document:</h3>
                        <SpanLink text="Dokumentasi Notion" linkto="https://mature-damselfly-5ad.notion.site/Buat-Trash-AI-84b4d6ab071049bf824911391811f999" aref={true}/>
                        <br /><br />
                        <h3>Table Kode:</h3>

                        <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table
                                    className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                        <th
                                            scope="col"
                                            className="border-r px-6 py-4 dark:border-neutral-500">
                                            #
                                        </th>
                                        <th
                                            scope="col"
                                            className="border-r px-6 py-4 dark:border-neutral-500">
                                            Kode
                                        </th>
                                        <th
                                            scope="col"
                                            className="border-r px-6 py-4 dark:border-neutral-500">
                                            Tipe
                                        </th>
                                        <th scope="col" className="px-6 py-4">Jenis</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            dataTrash.map((item, index) => (
                                                <tr className="border-b dark:border-neutral-500">
                                                    <td
                                                        className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                        {index + 1}
                                                    </td>
                                                    <td
                                                        className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                                        {item.id}
                                                    </td>
                                                    <td
                                                        className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                                        {item.type}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">{item.item}</td>
                                                </tr>
                                            ))
                                        }
                                        
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>

                </div>
            </div>
        </div>
      </>
    );
};

export default Recai;
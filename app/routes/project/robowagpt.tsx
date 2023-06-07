import { useTransition } from "@remix-run/react";
import { useState } from "react";
import { Pagination, Navigation, Scrollbar} from "swiper";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

const Robowagpt = () => {
    const transition = useTransition()
    const [imageAt, setImageAt] = useState(0);

    const imageList = [
      'kolase',
      'groupchat',
      'privatechat',
      'requestlog',
      'responselog'
    ];
    
    const handleSlider = (direction: string) => {
      const imageLength = imageList.length;
      let imageAtVal = imageAt;
    
      if (direction === 'left') {
        if (imageAtVal - 1 === -1) {
          setImageAt(imageLength - 1);
        } else {
          setImageAt(imageAtVal - 1);
        }
      } else {
        if (imageAtVal + 1 === imageLength) {
          setImageAt(0);
        } else {
          setImageAt(imageAtVal + 1);
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
                    
                    <div className="col-span-12 lg:col-span-6 grid grid-cols-6">
                        <div className="col-span-12 lg:col-span-6 mx-2">
                            <h1 className="text-2xl mb-2">My Project: Robo WA GPT</h1>
                            <h2>
                                Version 1 - (June 5, 2023)
                            </h2>
                            <p>Screenshot:</p>
                            <img className="transition opacity-100" src={`/asset/image/botwa/${imageList[imageAt]}.png`} alt={imageList[imageAt]}/>
                            <span className="mr-1 cursor-pointer" onClick={e => handleSlider('left')}>Prev</span>{imageAt + 1}<span onClick={e => handleSlider('right')} className="ml-1 cursor-pointer">Next</span>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 mt-4 lg:mt-0">
                        <h3>Description:</h3>
                        <p className="mx-auto text-justify">
                        Robo WA GPT is a WhatsApp Bot that uses Open AI Chat GPT for its responses. Users could engage with the bot by using the command "!robo gpt [prompt]" to trigger the bot and it will reply it back automatically. The robot supports private and group chat prompts. 
                        <br/><br/>
                        While developing this bot, I noticed numerous potentials that could be achieved with this bot. Such as making an application based on this bot, getting sentiment analysis from chat messages, and other possible implementation.
                        <br /><br />
                        notice:<br></br>This robot is still very basic without any additional business logic, only fetch messages and sending replies between the users and Chat GPT
                        </p>
                        <br /><br />
                        <h3>Some Technology That Were Used:</h3>
                        <p className="mx-auto text-justify">
                        Javascript, Socket.io, AWS, AWS API Gateway, AWS Lambda, Puppeteer, Open AI Chat GPT and Others.
                        </p>
                    </div>

                </div>
            </div>
        </div>
      </>
    );
};

export default Robowagpt;
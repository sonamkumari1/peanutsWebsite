import React, { useState } from "react";

const WhatsAppBadge = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <div
        id="whatsapp-chat"
        className={`${
          showChat ? "block" : "hidden"
        } fixed w-[350px] bottom-[90px] right-[30px] z-[99] rounded-[10px] shadow-[0_1px_15px_rgba(32,33,36,0.28)] bg-white`}
      >
        <div className="whatsapp-chat-header bg-[#095e54] text-white flex items-start p-2">
          <div className="relative">
            <img
              src="https://i.postimg.cc/x81D94JL/logo.png"
              alt="GM Agro Logo"
              className="rounded-full w-[60px] mr-2"
            />
            <span className="absolute bottom-3 right-3 w-[12px] h-[12px] bg-[#4ad504] rounded-full border-[2px] border-[#095e54] left-[40px] top-[40px]"></span>
          </div>
          <p className="text-sm leading-[1.2] justify-center mt-3">
            <span className="whatsapp-chat-name text-[16px] font-semibold ">
              GM Agro
            </span>
            <br />
            <small>Typically replies within an hour</small>
          </p>
        </div>

        <div className="start-chat">
          <div className="whatsapp-chat-body relative p-5 bg-[#e6ddd4] before:content-[''] before:absolute before:inset-0 before:z-0 before:opacity-[0.08] before:bg-[url('https://elfsight.com/assets/chats/patterns/whatsapp.png')]">
            <div className="dAbFpq flex z-[1]">
              <div className="eJJEeC bg-white w-[52.5px] h-[32px] rounded-full flex justify-center items-center ml-2 opacity-0 transition-all duration-100 z-[1] shadow-[0_1px_0.5px_rgba(0,0,0,0.13)]">
                <div className="hFENyl relative flex">
                  <div className="ixsrax h-[5px] w-[5px] mx-[2px] rounded-full animate-[ZpjSY_1.2s_infinite_linear] bg-[#9e9da2]"></div>
                  <div className="dRvxoz h-[5px] w-[5px] mx-[2px] rounded-full animate-[hPhMsj_1.2s_infinite_linear] bg-[#b6b5ba]"></div>
                  <div className="kXBtNt h-[5px] w-[5px] mx-[2px] rounded-full animate-[iUMejp_1.2s_infinite_linear] bg-[#b6b5ba]"></div>
                </div>
              </div>
              <div className="kAZgZq relative bg-white rounded-[0_8px_8px] p-[7px_14px_6px] mt-[4px] ml-[-54px] max-w-[calc(100%-66px)] z-[2] shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] before:content-[''] before:absolute before:bg-[url('data:image/png;base64,...')] before:bg-center before:bg-no-repeat before:bg-contain before:w-[12px] before:h-[19px] before:left-[-12px] before:top-0">
                <div className="bMIBDo text-[13px] font-bold text-[rgba(0,0,0,0.4)] leading-[18px]">
                  GM Agro
                </div>
                <div className="iSpIQi text-[14px] text-[#111] mt-[4px] leading-[19px]">
                  Hi there 👋
                  <br />
                  <br />
                  How can I help you?
                </div>
                <div className="cqCDVm text-[12px] text-[rgba(17,17,17,0.5)] text-right mt-[4px] mr-[-8px] mb-[-4px]">
                  1:40
                </div>
              </div>
            </div>
          </div>

          <div className="blanter-msg flex p-3 border-t border-[#ddd]">
            <textarea
              id="chat-input"
              placeholder="Write a response"
              maxLength="150"
              rows="1"
              className="w-full text-[14px] p-2 font-[Arial] resize-none outline-none border-none h-[40px] overflow-hidden leading-[20px]"
            ></textarea>
            <a
              href="javascript:void(0);"
              id="send-it"
              className="w-[36px] font-bold p-[10px] bg-[#eee] rounded-[10px] ml-2 flex items-center justify-center"
            >
              <svg viewBox="0 0 448 448" fill="#a6a6a6" height="20" width="20">
                <path d="M.213 32L0 181.333 320 224 0 266.667.213 416 448 224z" />
              </svg>
            </a>
          </div>
        </div>

        <div id="get-number" className="hidden"></div>
        <a
          className="close-chat absolute top-[5px] right-[15px] text-white text-[30px]"
          href="javascript:void(0)"
          onClick={() => setShowChat(false)}
        >
          ×
        </a>
      </div>

      <a
        className="blantershow-chat fixed flex items-center font-normal justify-between z-[98] bottom-[25px] right-[30px] text-[15px] px-5 py-2 rounded-[30px] bg-white text-[#404040] shadow-[0_1px_15px_rgba(32,33,36,0.28)]"
        href="javascript:void(0)"
        title="Show Chat"
        onClick={() => setShowChat(true)}
      >
        <svg width="25" className="mr-2" viewBox="0 0 24 24">
          <path
            fill="#eceff1"
            d="M20.5 3.4A12.1 12.1 0 0012 0 12 12 0 001.7 17.8L0 24l6.3-1.7c2.8 1.5 5 1.4 5.8 1.5a12 12 0 008.4-20.3z"
          />
          <path
            fill="#4caf50"
            d="M12 21.8c-3.1 0-5.2-1.6-5.4-1.6l-3.7 1 1-3.7-.3-.4A9.9 9.9 0 012.1 12a10 10 0 0117-7 9.9 9.9 0 01-7 16.9z"
          />
          <path
            fill="#fafafa"
            d="M17.5 14.3c-.3 0-1.8-.8-2-.9-.7-.2-.5 0-1.7 1.3-.1.2-.3.2-.6.1s-1.3-.5-2.4-1.5a9 9 0 01-1.7-2c-.3-.6.4-.6 1-1.7l-.1-.5-1-2.2c-.2-.6-.4-.5-.6-.5-.6 0-1 0-1.4.3-1.6 1.8-1.2 3.6.2 5.6 2.7 3.5 4.2 4.2 6.8 5 .7.3 1.4.3 1.9.2.6 0 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"
          />
        </svg>
        Chat with Us
      </a>
    </>
  );
};

export default WhatsAppBadge;

import React from "react";

function FaqAccorionItems({ faqVal, onToggle, active }) {
    const { questions, answersPara1,answersPara2,answersPara3 } = faqVal;
  return (
    <div
      className="rounded-20
                                    shadow-custom
                                    mb-3 bg-white
                                    overflow-hidden"
    >
      <div
        className="mb-0
                                        py-8 pl-9
                                        pr-7
                                        border-bottom-0
                                        bg-white"
         
      >
        <button
          className={`btn-reset coodiv-text-10 text-left p-0 accordion-trigger arrow-icon w-100 ${active ? "active" : ""}`}
          type="button"
          onClick={onToggle}
        >
          {questions}
        </button>
      </div>
 
      <div
        
        className={`${active ? "openToogle" : "closeToogle"}`}
        
      >
        <div className={`card-body coodiv-color-blackish-blue-opacity-7 pt-0 pl-9 pr-15 coodiv-text-10 pb-9 faqCard`}>
         <p>{answersPara1}</p>
         <p>{answersPara2}</p>
         <p>{answersPara3}</p>
        </div>
      </div>
    </div>
  );
}

export default FaqAccorionItems;

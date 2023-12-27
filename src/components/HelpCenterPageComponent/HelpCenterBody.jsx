"use client";
import React from "react";
import { useRef, useState } from "react";
import SearchField from "./SearchField";
// import SearchFullScreen from "./SearchFullScreen";
import HcAccordion from "./HcAccordion";
import SearchHCData from "./SearchHCData";
import { Link, animateScroll as scroll } from "react-scroll";
function HelpCenterBody() {
  const [showLargeSearch, setShowLargeSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isActive, setIsActive] = useState("active1");
  const formRef = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    // let n = e.target.name;
    const searchValue = e.target.value;
    if (searchValue.length > 0) {
      const filteredResults = SearchHCData.filter((item) =>
        item.label.toLowerCase().includes(searchValue.toLowerCase())
      );
      // console.log(filteredResults);
      setSearchResults(filteredResults);
      setShowLargeSearch(true);
      // formRef.current.searchlarge.focus();
      // if (n === "search") {
      //   formRef.current.searchlarge.value = searchValue;
      // } else {
      //   formRef.current.search.value = searchValue;
      // }
    } else {
      setSearchResults([]); // Clear search results state
      handleClose(e);
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    setSearchResults([]);
    setShowLargeSearch(false);
    // formRef.current.search.focus();
  };

  return (
    <div className="hcSerachBody">
      <div className="container">
        <div className="hcSearchWrap">
          <div className="col-md-8 col-12">
            <div className="hcSesrchFormWrap">
              <h4>Get back to inspiration</h4>
              <form ref={formRef} className="serachForm">
                <SearchField name="search" onChange={handleChange} />
                {showLargeSearch && searchResults.length > 0 && (
                  <div className="serchResultWrap">
                    {searchResults.map((item) => (
                      <div className="serachResultBox" key={item.id}>
                        <div className="search_result">
                          <Link
                            spy={true}
                            smooth="true"
                            offset={-120}
                            duration={500}
                            to={item.id}
                          >
                            <h3>{item.label}</h3>
                            <p>{item.content}</p>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="tabBtnWrap sidebar">
          <div className="tabPanelWrap">
            <Link
              className={isActive === "active1" ? "tabBtn active1" : "tabBtn"}
              onClick={() => {
                setIsActive("active1");
              }}
              to="generalQns"
              spy={true}
              smooth="true"
              offset={-140}
              duration={500}
            >
              <h3>
                <span>
                  <i className="fas fa-tools"></i>
                </span>
                General Questions
              </h3>
            </Link>
            <Link
              className={isActive === "active2" ? "tabBtn active2" : "tabBtn"}
              onClick={() => {
                setIsActive("active2");
              }}
              to="mailBoxQuestions"
              spy={true}
              smooth="true"
              offset={-140}
              duration={500}
            >
              <h3>
                <span>
                  <i className="fas fa-tools"></i>
                </span>
                Mail Box Questions
              </h3>
            </Link>
            <Link
              className={isActive === "active3" ? "tabBtn active3" : "tabBtn"}
              onClick={() => {
                setIsActive("active3");
              }}
              to="domainQuestions"
              spy={true}
              smooth="true"
              offset={-140}
              duration={500}
            >
              <h3>
                <span>
                  <i className="fas fa-tools"></i>
                </span>
                Domain Questions
              </h3>
            </Link>
            <Link
              className={isActive === "active4" ? "tabBtn active4" : "tabBtn"}
              onClick={() => {
                setIsActive("active4");
              }}
              to="paymentOption"
              spy={true}
              smooth="true"
              offset={-140}
              duration={500}
            >
              <h3>
                <span>
                  <i className="fas fa-tools"></i>
                </span>
                Payment Option
              </h3>
            </Link>
          </div>
        </div>
        <div className="hcOptionsWrapper">
          <div className="hcOptionAccordion">
            <HcAccordion />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpCenterBody;

import React, {useRef, useState} from 'react';
import './styles.scss'

const SearchBox = () => {
    const [isOpen, toggleOpen] = useState(false)
    const [isBlur, toggleBlur] = useState(false)

    const inputRef = useRef();

    console.log("isOpen", isOpen);
    console.log("isBlur", isBlur);
    // console.log("isOpenClickToggle", isOpenClickToggle);

    if (isOpen) {
        // document.getElementsByClassName("input")[0].focus();
        inputRef.current.focus();
    }

    const handleClickOpen = (e) => {
        console.log("Open");

        e.stopPropagation();

        toggleOpen(true);
    }
    const handleClickClose = (e) => {
        console.log("Close");

        e.stopPropagation();
        toggleOpen(false);
    }
    const handleClickToggle = (e) => {
        console.log("Togle");

        e.stopPropagation();

        if (!isBlur) {
            toggleOpen(!isOpen)
        } else if (isBlur && !isOpen){
            toggleOpen(true);
        }
        toggleBlur(false);
    }

    const handleBlur = (e) => {
        console.log("Blur");
        e.stopPropagation();
        toggleOpen(false);
        toggleBlur(true)
    }

    return (
        <div onClick={handleClickToggle} className={isOpen ? "search-wrapper open" : "search-wrapper"}>
            <div className={isOpen ? "search-box open" : "search-box"}>
                <div onClick={handleClickClose} className={isOpen ? "close open" : "close"}>
                    <div className={isOpen ? "close__icon open" : "close__icon"}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path fill="#b2bbc4" d="M37.304 11.282l1.414 1.414-26.022 26.02-1.414-1.413z"></path>
                            <path fill="#b2bbc4" d="M12.696 11.282l26.022 26.02-1.414 1.415-26.022-26.02z"></path>
                        </svg>
                    </div>
                </div>
                <input className="input"
                       ref={inputRef}
                       onBlur={handleBlur}
                       onClick={handleClickOpen}
                       type="text"
                       name="search" autoComplete="off"/>
            </div>
        </div>
    );
};

export default SearchBox;
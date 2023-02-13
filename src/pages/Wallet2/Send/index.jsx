import React, { useState, useRef, useEffect } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";

const Send = () => {
  const [coinWallet, showCoinWallet] = useState(false);
  const [continueOverlay, showContinueOverlay] = useState(false);
  const [enterPin, showEnterPin] = useState(false);
  const [success, showSuccess] = useState(false);

  const coinWalletRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        coinWalletRef.current &&
        !coinWalletRef?.current?.contains(event.target)
      ) {
        showCoinWallet(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [coinWalletRef]);

  useEffect(() => {
    showContinueOverlay(false);
  }, []);

  return (
    <div className="send-page">
      <div className="back-btn">
        <HiOutlineArrowNarrowLeft
          fontSize={23}
          onClick={() => history.back()}
        />
        <p>Send</p>
      </div>

      {success ? (
        <div className="success">
          <img
            src="/assets/images/transfer_success.svg"
            alt="Transaction Successful"
          />
          <p>Transaction Successful</p>
        </div>
      ) : enterPin ? (
        <div className="enter-pin"></div>
      ) : continueOverlay ? (
        <div className="show-continue-overlay">
          <div className="send-details">
            <div>
              <p>From</p>
              <p>ad6524de4df3114bce6dcfaa1daba407359bddcb</p>
            </div>
            <div>
              <p>To</p>
              <p>07359bddcba30ff3af962b0d783550d06chbfi453e</p>
            </div>
            <div>
              <p>Amount</p>
              <p>20 NEAR</p>
            </div>
          </div>
          <button onClick={() => showSuccess(true)}>Send</button>
        </div>
      ) : (
        <div className="amount-box">
          <div className="amount-max">
            <p>Amount</p>
            <p>
              <span className="dollar-color">&#x24;</span>
              0.00 <span className="max">Max</span>
            </p>
          </div>

          <div className="token-details">
            <div className="wallet-address">
              <p>Wallet Address</p>
              <input type="text" />
            </div>
            <div className="select-token-div">
              <div className="select-token">
                <p>Select Token</p>
                <span onClick={() => showCoinWallet(!coinWallet)}>
                  <img src="/assets/images/Icon_Near.svg" alt="Near" />
                  <p>NEAR</p>
                  <MdKeyboardArrowRight fontSize={20} />
                  <div
                    className={`select-coin-wallet ${
                      coinWallet ? "show-coin-wallet" : ""
                    }`}
                    ref={coinWalletRef}
                  >
                    <div>
                      <img src="/assets/images/Icon_Near.svg" alt="Near" />
                      <p>NEAR</p>
                    </div>
                    <div>
                      <img src="/assets/images/Icon_Near2.svg" alt="Near" />
                      <p>Joysticklabs Token</p>
                    </div>
                  </div>
                </span>
              </div>
              <div className="available-to-send">
                <p>Available to Send</p>
                <p>0 NEAR</p>
              </div>
            </div>
          </div>

          <div className="continue-btn">
            <button onClick={() => showContinueOverlay(true)}>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Send;

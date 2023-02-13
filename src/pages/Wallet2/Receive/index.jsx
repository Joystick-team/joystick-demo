import React, { useState, useRef, useEffect } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { FiCopy } from "react-icons/fi";
import QRCode from "react-qr-code";

const Receive = () => {
  return (
    <div className="receive-page">
      <div className="back-btn">
        <HiOutlineArrowNarrowLeft
          fontSize={23}
          onClick={() => history.back()}
        />
        <p>Receive</p>
      </div>

      <div className="qr-code">
        <div className="qr-code-container">
          <QRCode
            size={256}
            style={{ height: "100%", width: "100%" }}
            value="ad6524de4df3114bce6dcfaa1daba407359bddcba30ff3af962b0d783550d06c"
            viewBox={`0 0 256 256`}
          />
        </div>

        <div className="copy-code">
          <p>
            ad6524de4df3114bce6dcfaa1daba407359bddcba30ff3af962b0d783550d06c
          </p>
          <FiCopy
            onClick={() =>
              navigator.clipboard.writeText(
                "ad6524de4df3114bce6dcfaa1daba407359bddcba30ff3af962b0d783550d06c"
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Receive;

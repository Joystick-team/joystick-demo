import "./wallet2.scss";
import { FiSend } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";
import { MdKeyboardArrowUp } from "react-icons/md";
import TransactionHistory from "../../component/TransactionHistory";
import { Link } from "react-router-dom";

const Wallet2 = () => {
  return (
    <div className="wallet2">
      <div className="flex-header">
        <div className="balanceandtransact">
          <div className="total-balance">
            <p>Total Balance</p>
            <p>&#x24;2,663.56</p>
          </div>
          <div className="sendandreceive">
            <Link to="send">
              <div className="send">
                <div className="send-icon">
                  <FiSend />
                </div>
                <p>Send</p>
              </div>
            </Link>
            <Link to="receive">
              <div className="receive">
                <div className="receive-icon">
                  <HiDownload />
                </div>
                <p>Receive</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="tokens">
          <p>Tokens</p>
          <div className="token-list">
            <div className="token-coin">
              <div className="flex-coin-name">
                <img src="/assets/images/Icon_Near.svg" alt="Near" />
                <div className="flex-coinrate">
                  <p>NEAR</p>
                  <span className="flex-percent">
                    <p>&#x24;6.34</p>
                    <MdKeyboardArrowUp />
                    <p>2.5%</p>
                  </span>
                </div>
              </div>
              <div className="price-flex">
                <p>198.24 NEAR</p>
                <p>&#x24;1251.44</p>
              </div>
            </div>

            <div className="token-coin">
              <div className="flex-coin-name">
                <img src="/assets/images/Icon_Near2.svg" alt="Near" />
                <div className="flex-coinrate">
                  <p>Joysticklabs Token</p>
                  <span className="flex-percent">
                    <p>&#x24;1.34</p>
                    <MdKeyboardArrowUp />
                    <p>2.5%</p>
                  </span>
                </div>
              </div>
              <div className="price-flex">
                <p>198.24 JSK</p>
                <p>&#x24;1251.44</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="transaction-table">
        <p>Transaction History</p>
        <TransactionHistory />
      </div>
    </div>
  );
};

export default Wallet2;

import "./transactionhistory.scss";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const TransactionHistory = () => {
  return (
    <div className="transaction-history">
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th align="center" className="text-center">
              Date
            </th>
            <th>Transaction ID</th>
            <th>From</th>
            <th>To</th>
            <th>Token</th>
            <th>Amount</th>
            <th>Note</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <BsArrowLeft color="#FB0505" fontSize={19} />
            </td>
            <td align="center">22/01/2022</td>
            <td>djdodd03djd003...</td>
            <td>Charles Darwin</td>
            <td>74Edernsn...</td>
            <td>
              <div className="flex-coin-label">
                <img src="/assets/images/Icon_Near.svg" alt="NEAR" />
                <p>NEAR</p>
              </div>
            </td>
            <td> &#x24;250</td>
            <td>Transfer</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>
              <BsArrowRight color="#0AFB05" fontSize={19} />
            </td>
            <td align="center">22/01/2022</td>
            <td>djdodd03djd003...</td>
            <td>Charles Darwin</td>
            <td>74Edernsn...</td>
            <td>
              <div className="flex-coin-label">
                <img src="/assets/images/Icon_Near2.svg" alt="NEAR" />
                <p>JSK Token</p>
              </div>
            </td>
            <td> &#x24;250</td>
            <td>Transfer</td>
            <td className="completed">Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;

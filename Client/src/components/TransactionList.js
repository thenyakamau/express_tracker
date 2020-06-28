import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";
import CircularProgress from "@material-ui/core/CircularProgress";

export function TransactionList() {
  const { transactions, getTransactions, loading } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {loading === true ? (
          <center>
            <CircularProgress />
          </center>
        ) : (
          transactions.map((transaction, index) => {
            return (
              <div key={index}>
                <Transaction transaction={transaction} />
              </div>
            );
          })
        )}
      </ul>
    </div>
  );
}

import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import {
  AxiosGetData,
  AxiosDeleteData,
  AxiosPostData,
} from "../services/AxiosConfig";

//initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

//create context
export const GlobalContext = createContext(initialState);

//provider component
export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  async function getTransactions() {
    try {
      const response = await AxiosGetData("", "");
      console.log(response.data);
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await AxiosDeleteData(id);
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function addTransaction(transaction) {
    try {
      const response = await AxiosPostData("", transaction);
      dispatch({
        type: "ADD_TRANSACTION",
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        getTransactions,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

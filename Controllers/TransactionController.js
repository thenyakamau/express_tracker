const Transaction = require("../Models/TransactionModel");

//! Get all transactions
//! Route: GET /api/v1/transactions
//!access Public
async function getTransaction(req, res, next) {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
}
exports.getTransaction = getTransaction;

//! add transactions
//! Route: POST /api/v1/transactions
//!access Public
async function addTransaction(req, res, next) {
  try {
    const transaction = await Transaction.create(req.body);

    return res.status(200).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    if (error.name == "ValidationError") {
      
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        error:messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
}
exports.addTransaction = addTransaction;

//! delete transactions
//! Route: Delete /api/v1/transactions/:id
//!access Public
async function deleteTransaction(req, res, next) {
  return res.status("DELETE transactions");
}
exports.deleteTransaction = deleteTransaction;

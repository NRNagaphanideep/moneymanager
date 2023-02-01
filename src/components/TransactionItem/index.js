import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, amount, title, type} = transactionDetails
  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="table-row">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">{amount}</p>
      <p className="transaction-text">{type}</p>
      <div className="delete-container">
        <button
          className="delete-btn"
          type="button"
          onClick={onDeleteTransaction}
          data-testid="delete"
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem

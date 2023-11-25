import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import dummyData from './dummyData';
import "./style.css"

function UserInfoPage() {
  const { index } = useParams();
  const user = dummyData[index];

  const [newAccount, setNewAccount] = useState({
    bankName: '',
    accountNumber: '',
    balance: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAccount((prevAccount) => ({ ...prevAccount, [name]: value }));
  };

  const addNewAccount = () => {
    dummyData[index].bankAccounts.push(newAccount);
    setNewAccount({ bankName: '', accountNumber: '', balance: 0 });
  };

const sumBalance = () => {
  return user.bankAccounts.reduce(
    (total, account) => total + parseInt(account.balance, 10),
    0
  );
};

  // Function to delete a bank account
  const deleteAccount = (accountNumber) => {
    dummyData[index].bankAccounts = dummyData[index].bankAccounts.filter(
      (account) => account.accountNumber !== accountNumber
    );
  };


  const displayAccounts = () => {
    return user.bankAccounts.map((account) => (
      <div key={account.accountNumber}>
        <p>Bank: {account.bankName}</p>
        <p>Balance: {account.balance}</p>
      </div>
    ));
  };

  return (
    <div className='container'>
      <div id="header">
        
          <h1>Welcome!</h1>
          <p id="username">{user.firstName} {user.lastName}</p>
      </div>
      <div id="totalBalance" >
        <h2>Total Balance</h2>
        <p id="totalAmount">{sumBalance()}</p>
      </div>
      

      <div id="balanceBoxes" >
        {user.bankAccounts.map((account) => (
          <div key={account.id} className="balanceBox">
            {/* Delete button within the current account box */}
            <button className="deleteButton" onClick={() => deleteAccount(account.id)}>
              X
            </button>
            <h3>{account.bankName}</h3>
            <p className="balanceValue">{account.balance}</p>
          </div>
        ))}
      </div>
      <div id="balanceBoxes" >
      <div class="balanceBoxx">
  <h4>Add New Bank Account:</h4>
  <form>
    <label>
      Bank Name:
      <input
        type="text"
        name="bankName"
        value={newAccount.bankName}
        onChange={handleInputChange}
      />
    </label>
    <br />
    <label>
      Account Number:
      <input
        type="text"
        name="accountNumber"
        value={newAccount.accountNumber}
        onChange={handleInputChange}
      />
    </label>
    <br />
    <label>
      Balance:
      <br/>
      <input
        type="number"
        name="balance"
        value={newAccount.balance}
        onChange={handleInputChange}
      />
    </label>
    <br />
    <br />

    <button type="button" onClick={addNewAccount}>
      Add Account
    </button>
  </form>
</div>

          
      </div>
      <Link to="/">Back to Choose Page</Link>
    </div>
  );
}

export default UserInfoPage;

import React, { Component } from "react";
import Main from "./contracts/Main.json";
import getWeb3 from "./getWeb3";
import { ethers } from 'ethers';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import "./App.css";

import Navbar from "./Components/Navbar"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Rent from "./Pages/Rent/Rent"
import CreateRent from "./Pages/CreateRent/CreateRent"
import History from "./Pages/History/History"

class App extends Component {
  constructor(){
    super()
    this.state = { 
      storageValue: 0, 
      web3: null, 
      accounts: null, 
      contract: null,
      account: null
    };
    this.getRentables = this.getRentables.bind(this)
    this.getPersonalRentables = this.getPersonalRentables.bind(this)
    this.getPersonalRents = this.getPersonalRents.bind(this)
    this.createRentable = this.createRentable.bind(this)
    this.createRent = this.createRent.bind(this)
    this.takeDownRentable = this.takeDownRentable.bind(this)
  }
  

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = Main.networks[networkId];
      const instance = new web3.eth.Contract(
        Main.abi,
        deployedNetwork && deployedNetwork.address,
      );

      const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner()

      const URL = 'HTTP://127.0.0.1:7545';
      let provider = new ethers.providers.JsonRpcProvider(URL);
      let gasPrice = provider.getGasPrice();
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance, account: accounts[0], signer, gasPrice});

      await this.getRentables();
      await this.getPersonalRentables();
      await this.getPersonalRents();
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  getRentables = async () => {
    let count = await this.state.contract.methods.getRentCount().call()
    let rentables = []
    for (let i=0; i<count; i++){
      let rentable = await this.state.contract.methods.getRents(i).call()
      rentables.push(rentable)
    }
    this.setState({rentables})
  }

  getPersonalRentables = async () => {
    let count = await this.state.contract.methods.getPersonalRentablesCount(this.state.account).call()
    let personalRentables = []
    for (let i=0; i<count; i++){
      let rentable = await this.state.contract.methods.getPersonalRentables(i, this.state.account).call()
      personalRentables.push(rentable)
    }
    this.setState({personalRentables})
  }

  getPersonalRents = async () => {
    let count = await this.state.contract.methods.getPersonalRentCount(this.state.account).call()
    let personalRents = []
    for (let i=0; i<count; i++){
      let personalRent = await this.state.contract.methods.getPersonalRents(i, this.state.account).call()
      personalRents.push(personalRent)
    }
    this.setState({personalRents})
  }

  createRentable = (location, numGuests, startDate, endDate, price, passCode) => {
    this.state.contract.methods.createRentable(location, numGuests, startDate, endDate, price, passCode, this.state.account).send({from: this.state.account})
  }

  createRent = (startDate, endDate, id) => {
    this.state.contract.methods.rent(startDate, endDate, id, this.state.account).send({from: this.state.account})
  }

  takeDownRentable = (id) => {
    this.state.contract.methods.takeDownRentable(id).send({from: this.state.account})
  }

  getContractBalance = async () => {
    let value = await this.state.contract.methods.smartContractBalance().call()
    console.log(value)
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
    <BrowserRouter>
      <Navbar/>
      <div className="App">
        <div className="app-content-div">
          <Switch>
              <Route path="/dashboard">
                <Dashboard/>
              </Route>
            <Route path="/rent">
              <Rent rentables={this.state.rentables}/>
            </Route>
            <Route path="/history">
              <History/>
            </Route>
            <Route path="/createRent">
              <CreateRent createRentable={this.createRentable}/>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
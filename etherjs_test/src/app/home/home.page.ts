import { Component, OnInit } from '@angular/core';
import { ethers } from "ethers";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  async ngOnInit(): Promise<void> {
    // A Web3Provider wraps a standard Web3 provider, which is
    // what MetaMask injects as window.ethereum into each page
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);

    // MetaMask requires requesting permission to connect users accounts
    console.log(await provider.send("eth_requestAccounts", []));

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = provider.getSigner();
    
  }

}

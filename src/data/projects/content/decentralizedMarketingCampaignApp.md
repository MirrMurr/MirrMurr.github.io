# Decentralized Marketing Campaign Application

For my master's (MSc) thesis, being a FinTech specialization, I decided to go with some sort of finance-related solution, but still exploring the at-the-time cutting edge technologies, such as **Web3** and **blockchains**.

<br />

The abstract was: "Integrating blockchain and smart contracts into the distribution of marketing materials aims to streamline the process and provide a secure and transparent way to distribute materials, direct drip campaigns, while reducing the risk of errors and fraud. This can ensure target customers that the email or message that they received is from a verified source, thus mitigating the chance of being a victim of fishing attacks."

<br />

For the backend, I used an application called **Ganache**; Ganache is a software tool provided by the Truﬄe team that is a local development Ethereum blockchain which you can use to run tests, execute commands, and inspect state while controlling how the chain operates. It has a desktop application as well as a command-line tool called ganache-cli, that can be downloaded from the NPM package registry either globally on your machine, or as a dependency in a specific project. I have chosen the latter, but I have used the graphical user interface more extensively.

<br />

<img src="/images/msc-thesis/ganache-transactions.png" alt="ganache-transactions" width="65%" height="auto" style="align-self: center;" />

<br />

The client application consists of three main funcionalities:

1. Viewing and managing the **campaigns**.
2. Managing the **materials** and content available for each campaign.
3. Managing the **email list** that consists of Crypto-wallet addresses.

<br />

<img src="/images/msc-thesis/ui-campaign-details.png" alt="ui-campaign-details" width="65%" height="auto" style="align-self: center;" />

<br />

The **materials** themselves are actually persisted in a cloud storage provided by **Firebase's Firestore**.

<br />

<img src="/images/msc-thesis/ui-html-editor.png" alt="ui-html-editor" width="65%" height="auto" style="align-self: center;" />

<br />

The end-users, whom posses the **Metamask** addresses can access another 3rd-party application, called **Mailchain**, which is the communication layer for web3. It makes it possible for people to communicate between blockchain wallet addresses and Web3 identities.

<br />

<img src="/images/msc-thesis/mailchain-inbox.png" alt="mailchain-inbox" width="65%" height="auto" style="align-self: center;" />

<br />

For a true end-to-end pipeline experience, through the Mailchain UI, users could report a feedback in a star-based rating system, which would then be persisted and sent through the blockchain and collected in my application.

<br />

<img src="/images/msc-thesis/updated-feedback.png" alt="updated-feedback" width="65%" height="auto" style="align-self: center;" />

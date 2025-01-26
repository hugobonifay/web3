import List from "./List";

const code1 = () => {
  const codeString = `
  // SPDX-License-Identifier: MIT
  pragma solidity ^0.8.0; // Définition de la version du compilateur Solidity

  contract HelloWorld {
    string public message; // Variable d'état publique

    // Fonction exécutée lors du déploiement du contrat
    constructor(string memory initialMessage) {
      message = initialMessage;
    }

    // Fonction pour mettre à jour le message
    function setMessage(string memory newMessage) public {
      message = newMessage;
    }
  }
  `;
  return codeString;
};

const code2 = () => {
  const codesString = `event MessageUpdated(string oldMessage, string newMessage);`;
  return codesString;
};

const code3 = () => {
  const codeString = `
  modifier onlyOwner() {
    require(msg.sender == owner, "Not the owner!");
    _;
  }
  `;
  return codeString;
};

const code4 = () => {
  const codeString = `
  // SPDX-License-Identifier: MIT
  pragma solidity ^0.8.0;

  contract SimpleWallet {
    address public owner;

    constructor() {
      owner = msg.sender; // L'adresse du déployeur est définie comme propriétaire
    }

    // Permet de recevoir des ETH
    receive() external payable {}

    // Permet au propriétaire de retirer des fonds
    function withdraw(uint amount) public {
      require(msg.sender == owner, "Only the owner can withdraw");
      require(address(this).balance >= amount, "Insufficient balance");
      payable(owner).transfer(amount);
    }

    // Consulte le solde du contrat
    function getBalance() public view returns (uint) {
      return address(this).balance;
    }
  }
  `;
  return codeString;
};

const Solidity = () => {
  return (
    <>
      <h2>Solidity</h2>
      <p className="intro">
        Solidity est un langage de programmation orienté objet spécialement
        conçu pour développer des smart contracts qui s'exécutent sur des
        blockchains compatibles avec la machine virtuelle Ethereum (EVM), comme
        Ethereum, Binance Smart Chain, Polygon, et bien d'autres.
      </p>
      <h3>1. Caractéristiques principales de Solidity</h3>
      <List
        items={[
          "Langage haut niveau : Inspiré de langages comme JavaScript, Python et C++, il est facile à apprendre si tu connais déjà ces langages.",
          "Orienté objet : Le code est structuré autour d'objets (ou contrats), avec des variables, des fonctions et des événements.",
          "Statiquement typé : Les types de données sont définis à l'avance (par ex. : uint, string) et ne peuvent pas changer.",
          "Compatibilité avec l'EVM : Solidity génère du bytecode que la machine virtuelle Ethereum peut exécuter.",
        ]}
      />
      <h3>2. Fonctionnement de Solidity</h3>
      <List
        title="Les smart contracts écrits en Solidity suivent un cycle :"
        items={[
          "Écriture du contrat : Les développeurs codent le contrat en Solidity.",
          "Compilation : Le code est compilé en bytecode par un compilateur Solidity.",
          "Déploiement : Ce bytecode est déployé sur la blockchain et devient immuable.",
          "Exécution : Les fonctions du contrat peuvent être appelées via des transactions ou d'autres contrats.",
        ]}
      />
      <h3>3. Structure d'un contrat en Solidity</h3>
      <p>Voici un exemple basique de smart contract en Solidity :</p>
      <pre>
        <code>{code1()}</code>
      </pre>
      <List
        title="Décomposition de cet exemple :"
        items={[
          "pragma solidity ^0.8.0; : Spécifie que le contrat doit être compilé avec une version de Solidity 0.8.0 ou plus récente.",
          "string public message; : Une variable d'état stockée sur la blockchain, accessible publiquement.",
          "constructor(string memory initialMessage) : La fonction constructeur, appelée une seule fois au moment du déploiement.",
          "function setMessage(...) public : Une fonction pour mettre à jour le message. Elle peut être appelée par n'importe qui (car elle est public).",
        ]}
      />
      <h3>4. Concepts clés en Solidity</h3>
      <h4>a) Variables :</h4>
      <List
        items={[
          "Variables d'état : Stockées sur la blockchain (ex. : string public message;).",
          "Variables locales : Utilisées temporairement dans des fonctions, non stockées sur la blockchain.",
          "Variables globales : Informations disponibles sur la blockchain, comme msg.sender (l'adresse de celui qui appelle le contrat).",
        ]}
      />
      <h4>b) Types de données :</h4>
      <List
        items={[
          "Primitifs : uint, int, bool, address, string.",
          "Complexes : struct, array, mapping.",
        ]}
      />
      <h4>c) Modificateurs d'accès :</h4>
      <List
        items={[
          "public : Accessible par tout le monde.",
          "private : Accessible uniquement au contrat.",
          "internal : Accessible au contrat et à ses contrats dérivés.",
          "external : Accessible uniquement en dehors du contrat.",
        ]}
      />
      <h4>d) Fonctions :</h4>
      <List
        items={[
          "Lecture seule : Les fonctions marquées view ne modifient pas l'état de la blockchain.",
          "Pures : Les fonctions marquées pure ne lisent ni ne modifient l'état.",
          "Payables : Les fonctions marquées payable peuvent recevoir de la crypto-monnaie.",
        ]}
      />
      <h4>e) Événements :</h4>
      <p>
        Permettent aux contrats de "publier" des informations, que les
        applications front-end peuvent écouter.
      </p>
      <pre>
        <code>{code2()}</code>
      </pre>
      <h4>f) Modificateurs :</h4>
      <p>
        Permettent de restreindre ou d'ajouter des comportements aux fonctions.
      </p>
      <pre>
        <code>{code3()}</code>
      </pre>
      <h3>5. Un exemple d'application pratique</h3>
      <p>Un contrat pour gérer un portefeuille de cryptomonnaies simples :</p>
      <pre>
        <code>{code4()}</code>
      </pre>
      <List
        title="Fonctionnalités :"
        items={[
          "Intégré à l'écosystème Ethereum : Large communauté, outils comme Remix, Truffle, Hardhat.",
          "Modularité : Facile de créer des composants réutilisables.",
          "Efficacité : Conçu pour optimiser l’utilisation des ressources blockchain.",
        ]}
      />
      <h3>7. Limitations</h3>
      <List
        items={[
          "Complexité technique : Exige des compétences spécifiques, notamment pour éviter des bugs critiques (ex. : reentrancy).",
          "Erreurs coûteuses : Une erreur dans un contrat peut entraîner des pertes financières, car les contrats sont immuables après leur déploiement.",
          "Dépendance à l’EVM : Solidity ne fonctionne que sur les blockchains compatibles avec l'EVM.",
        ]}
      />
    </>
  );
};

export default Solidity;

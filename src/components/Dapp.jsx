import List from "./List";

const Dapp = () => {
  return (
    <>
      <h2>dApps</h2>
      <p className="intro">
        Les dApps (applications décentralisées) sont des applications qui
        fonctionnent sur une blockchain ou un réseau décentralisé au lieu d’être
        hébergées sur des serveurs centralisés. Elles permettent une interaction
        directe avec des smart contracts pour offrir des fonctionnalités
        transparentes, sécurisées et sans intermédiaire.
      </p>
      <h3>1. Qu'est-ce qu'une dApp ?</h3>
      <List
        title="Une dApp est une application qui combine :"
        items={[
          "Une interface utilisateur classique : Comme n’importe quelle application ou site web.",
          "Un backend décentralisé : La logique métier est gérée par des smart contracts sur une blockchain.",
        ]}
      />
      <p>
        Contrairement aux applications traditionnelles (hébergées sur des
        serveurs centralisés), les dApps utilisent un réseau pair-à-pair (P2P)
        pour leurs opérations backend.
      </p>
      <h3>2. Fonctionnement des dApps</h3>
      <List
        title="Frontend (interface utilisateur) :"
        items={[
          "Développé avec des technologies web classiques comme HTML, CSS et JavaScript.",
          "Peut être hébergé sur un réseau décentralisé comme IPFS ou un serveur traditionnel.",
        ]}
      />
      <List
        title="Backend (logique métier) :"
        items={[
          "Basé sur des smart contracts, déployés sur une blockchain comme Ethereum.",
          "Les utilisateurs interagissent avec ces contrats pour effectuer des actions (comme envoyer de la crypto ou acheter un NFT).",
        ]}
      />
      <List
        title="Interaction avec la blockchain :"
        items={[
          "Les utilisateurs interagissent avec les dApps via des portefeuilles crypto (comme MetaMask ou WalletConnect).",
          "Ces portefeuilles permettent de signer des transactions et de gérer les clés privées.",
        ]}
      />
      <h3>3. Caractéristiques des dApps</h3>
      <List
        items={[
          "Décentralisation : Les données et les transactions sont stockées sur une blockchain.",
          "Open source : La plupart des dApps publient leur code pour garantir leur transparence.",
          "Utilisation de tokens : Les dApps fonctionnent souvent avec des tokens pour leurs opérations (paiements, récompenses, gouvernance).",
          "Sans intermédiaire : Les utilisateurs interagissent directement avec les contrats intelligents.",
        ]}
      />
      <h3>4. Catégories de dApps</h3>
      <p>
        Les dApps sont utilisées dans divers domaines. Voici quelques catégories
        populaires :
      </p>
      <h4>a) Finance décentralisée (DeFi) :</h4>
      <p>
        Permettent de prêter, emprunter, échanger et investir des cryptomonnaies
        sans banque.
      </p>
      <List
        title="Exemple :"
        items={[
          "Uniswap : Échange décentralisé (DEX) pour trader des cryptos.",
          "Aave : Plateforme de prêts et d’emprunts.",
        ]}
      />
      <h4>b) Jeux (GameFi) :</h4>
      <p>
        Jeux basés sur la blockchain où les joueurs possèdent leurs actifs en
        jeu (NFTs).
      </p>
      <List
        title="Exemples :"
        items={[
          "Axie Infinity : Jeu où les joueurs collectent et combattent avec des créatures NFT.",
          "Decentraland : Monde virtuel décentralisé.",
        ]}
      />
      <h4>c) Marchés de NFT :</h4>
      <p>
        Plateformes permettant d’acheter, vendre et échanger des objets
        numériques uniques.
      </p>
      <List
        title="Exemples :"
        items={[
          "OpenSea : Premier marché NFT décentralisé.",
          "Rarible : Plateforme axée sur les créateurs.",
        ]}
      />
      <h4>d) Réseaux sociaux décentralisés :</h4>
      <p>
        Alternatives aux réseaux traditionnels, où les utilisateurs contrôlent
        leurs données.
      </p>
      <List
        title="Exemples :"
        items={[
          "Lens Protocol : Réseau social basé sur la blockchain.",
          "Mastodon : Plateforme décentralisée de type Twitter.",
        ]}
      />
      <h4>e) DAO (Decentralized Autonomous Organization) :</h4>
      <p>
        Organisations gouvernées par des smart contracts et gérées par les
        membres via des votes.
      </p>
      <List
        title="Exemples :"
        items={["MakerDAO : DAO qui gère la cryptomonnaie stable DAI."]}
      />
      <h4>f) Identité décentralisée :</h4>
      <p>Gestion de l’identité numérique sans dépendre d’une entreprise.</p>
      <List
        title="Exemples :"
        items={[
          'ENS (Ethereum Name Service) : Fournit des adresses blockchain lisibles comme "alice.eth".',
        ]}
      />
      <h3>5. Avantages des dApps</h3>
      <List
        items={[
          "Transparence : Toutes les transactions et le code des smart contracts sont accessibles publiquement sur la blockchain.",
          "Sécurité : Les données sont décentralisées, ce qui les rend résistantes aux piratages et aux pannes.",
          "Résistance à la censure : Aucune entité centralisée ne peut bloquer ou censurer les utilisateurs.",
          "Propriété des données : Les utilisateurs contrôlent leurs données et leurs actifs via leurs portefeuilles.",
          "Interopérabilité : Les dApps peuvent s’intégrer à d’autres projets blockchain, favorisant un écosystème connecté.",
        ]}
      />
      <h3>6. Limites des dApps</h3>
      <List
        items={[
          "Complexité d’utilisation : Les utilisateurs doivent comprendre les concepts de blockchain, comme les portefeuilles et les frais de transaction (gas fees).",
          "Performance : Les blockchains actuelles, comme Ethereum, peuvent être lentes et coûteuses (saturation du réseau).",
          "Immutabilité : Les bugs dans les smart contracts sont difficiles (voire impossibles) à corriger une fois déployés.",
          "Adoption limitée : Les dApps ne sont pas encore aussi largement utilisées que les applications traditionnelles.",
        ]}
      />
      <h3>7. Exemple d'utilisation pratique :</h3>
      <strong>Uniswap (Exchange décentralisé) :</strong>
      <p>
        But : Échanger des cryptomonnaies sans passer par une plateforme
        centralisée.
      </p>
      <List
        title="Fonctionnement :"
        items={[
          "L’utilisateur connecte son portefeuille (ex. : MetaMask) à l’application.",
          "Il choisit les cryptomonnaies qu’il souhaite échanger (par ex., ETH contre USDT).",
          "La transaction est exécutée automatiquement via des smart contracts, en utilisant des pools de liquidité.",
        ]}
      />
      <h3>8. Les technologies clés derrière les dApps</h3>
      <List
        items={[
          "Blockchain : Ethereum, Binance Smart Chain, Polygon, Solana, etc.",
          "Portefeuilles crypto : MetaMask, Trust Wallet.",
          "Langages de programmation : Solidity, Rust (pour Solana), ou Vyper.",
          "Protocole IPFS : Pour l’hébergement décentralisé des données (au lieu d’un serveur central).",
        ]}
      />
      <h3>Résumé</h3>
      <p>
        Les dApps redéfinissent la façon dont les applications fonctionnent en
        éliminant les intermédiaires, en offrant plus de transparence et en
        rendant les utilisateurs maîtres de leurs données. Leur adoption est
        encore en cours, mais elles sont au cœur de l’évolution vers un Web3
        décentralisé.
      </p>
    </>
  );
};

export default Dapp;

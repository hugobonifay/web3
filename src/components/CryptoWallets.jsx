import List from "./List";

const CryptoWallets = () => {
  return (
    <>
      <h2>Crypto Wallets</h2>
      <p className="intro">
        Un crypto wallet (portefeuille de cryptomonnaies) est une application,
        un logiciel ou un dispositif matériel qui permet aux utilisateurs de
        gérer leurs actifs numériques, comme les cryptomonnaies (Bitcoin,
        Ethereum, etc.) et les tokens (NFTs, tokens ERC-20, etc.). Il ne stocke
        pas littéralement les cryptomonnaies mais contient les clés privées
        nécessaires pour accéder aux fonds sur la blockchain et effectuer des
        transactions.
      </p>
      <h3>1. Qu'est-ce qu'un crypto wallet ?</h3>
      <List
        title="Un crypto wallet agit comme une interface entre toi et la blockchain. Il te permet de :"
        items={[
          "Envoyer des cryptomonnaies (ex. : envoyer de l’Ether à un ami).",
          "Recevoir des cryptomonnaies (ex. : recevoir un paiement en Bitcoin).",
          "Interagir avec des dApps (via des wallets comme MetaMask).",
          "Stocker et gérer des actifs numériques (NFTs, tokens).",
        ]}
      />
      <List
        title="Un wallet est composé de deux éléments essentiels :"
        items={[
          "Clé publique : Une adresse visible publiquement, que tu peux partager pour recevoir des fonds (ex. : 0x1234...abcd).",
          "Clé privée : Un secret cryptographique qui te donne accès à tes fonds (elle ne doit jamais être partagée).",
        ]}
      />
      <h3>2. Types de crypto wallets</h3>
      <p>
        Il existe deux grandes catégories : hot wallets (connectés à Internet)
        et cold wallets (hors ligne).
      </p>
      <h4>a) Hot wallets (portefeuilles chauds) :</h4>
      <List
        items={[
          "Connectés à Internet.",
          "Pratiques pour une utilisation quotidienne.",
        ]}
      />
      <List
        title="Exemples :"
        items={[
          "MetaMask (extension navigateur et application mobile).",
          "Trust Wallet.",
          "Coinbase Wallet.",
        ]}
      />
      <h4>b) Cold wallets (portefeuilles froids) :</h4>
      <List
        items={[
          "Hors ligne, donc beaucoup plus sécurisés.",
          "Idéaux pour conserver des actifs sur le long terme.",
        ]}
      />
      <List
        title="Exemples :"
        items={["Ledger (dispositif matériel).", "Trezor."]}
      />
      <h3>3. Comment fonctionne un crypto wallet ?</h3>
      <p>
        Un wallet est essentiellement une interface pour interagir avec la
        blockchain. Voici les principales étapes :
      </p>
      <h4>a) Création d’un portefeuille :</h4>
      <List
        items={[
          "Lors de l’installation, le wallet génère une phrase de récupération (ou seed phrase), composée généralement de 12 à 24 mots. Elle est utilisée pour recréer tes clés privées en cas de perte.",
          "Une clé privée et une adresse publique sont générées.",
        ]}
      />
      <h4>b) Recevoir des fonds :</h4>
      <List
        items={[
          "Tu donnes ton adresse publique à quelqu’un, qui peut ensuite t’envoyer des fonds.",
        ]}
      />
      <h4>c) Envoyer des fonds :</h4>
      <List
        items={[
          "Tu spécifies l’adresse du destinataire, le montant à envoyer, et signe la transaction avec ta clé privée.",
        ]}
      />
      <h4>d) Interaction avec des dApps :</h4>
      <List
        items={[
          "Les wallets comme MetaMask permettent de se connecter à des applications décentralisées (Uniswap, OpenSea, etc.) pour signer des transactions.",
        ]}
      />
      <h3>4. Focus sur MetaMask</h3>
      <p>
        MetaMask est l’un des wallets les plus populaires. C’est une extension
        de navigateur et une application mobile qui sert de passerelle entre toi
        et l’écosystème Ethereum (et d'autres blockchains compatibles comme
        Polygon ou Binance Smart Chain).
      </p>
      <h4>a) Fonctionnalités de MetaMask :</h4>
      <List
        items={[
          "Gestion de cryptos : Stocker, envoyer et recevoir des cryptos comme ETH, USDT, DAI.",
          "Connexion aux dApps : Interagir avec des plateformes comme Uniswap, OpenSea ou Axie Infinity.",
          "Personnalisation des réseaux : Ajouter des blockchains personnalisées (Polygon, Binance Smart Chain).",
          "Gestion des tokens : Supporte les tokens ERC-20 (cryptos) et ERC-721 (NFTs).",
        ]}
      />
      <h4>b) Comment utiliser MetaMask ? :</h4>
      <List
        items={[
          "Installation : Télécharge l’extension pour Chrome/Firefox ou l’application mobile.",
          "Création de portefeuille : Configure une nouvelle wallet en sauvegardant ta seed phrase (indispensable pour restaurer ton compte).",
          "Ajout de fonds : Envoie des cryptos depuis un autre wallet ou achète directement via des services intégrés.",
          "Connexion aux dApps : Clique sur “Connect Wallet” sur une dApp, puis signe avec MetaMask.",
        ]}
      />
      <h4>c) Exemple d’utilisation de MetaMask avec une dApp :</h4>
      <List
        items={[
          "Tu te rends sur Uniswap (un échange décentralisé).",
          "Clique sur “Connect Wallet” et sélectionne MetaMask.",
          "MetaMask demande ton autorisation pour se connecter.",
          "Une fois connecté, tu peux échanger des cryptos ou fournir de la liquidité en signant des transactions.",
        ]}
      />
      <h3>5. Avantages des crypto wallets</h3>
      <List
        items={[
          "Sécurité : Les clés privées restent en ta possession (si tu utilises un wallet non-custodial).",
          "Accessibilité : Les hot wallets (comme MetaMask) sont faciles à installer et utiliser.",
          "Contrôle total : Pas besoin d’un tiers pour gérer tes fonds.",
          "Interopérabilité : Compatibles avec diverses blockchains et dApps.",
        ]}
      />
      <h3>6. Limitations et risques</h3>
      <List
        items={[
          "Perte des clés privées : Si tu perds ta clé privée ou ta phrase de récupération, tu perds l’accès à tes fonds.",
          "Hack : Les hot wallets connectés à Internet sont vulnérables aux piratages.",
          "Complexité : Peut être intimidant pour les débutants (comprendre les frais de transaction, interagir avec les dApps, etc.).",
        ]}
      />
      <h3>7. Hot wallets vs Cold wallets : Quel choisir ?</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>
                <strong>Critère</strong>
              </th>
              <th>
                <strong>Hot Wallet</strong>
              </th>
              <th>
                <strong>Cold Wallet</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Sécurité</strong>
              </td>
              <td>Moins sécurisé</td>
              <td>Très sécurisé</td>
            </tr>
            <tr>
              <td>
                <strong>Accessibilité</strong>
              </td>
              <td>Rapide et facile</td>
              <td>Plus lent (doit être connecté)</td>
            </tr>
            <tr>
              <td>
                <strong>Usage quotidien</strong>
              </td>
              <td>Idéal pour des transactions fréquentes</td>
              <td>Pas idéal (surtout pour le stockage longue durée)</td>
            </tr>
            <tr>
              <td>
                <strong>Exemples</strong>
              </td>
              <td>MetaMask, Trust Wallet</td>
              <td>Ledger, Trezor</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>Résumé</h3>
      <p>
        Un crypto wallet, comme MetaMask, est ton outil principal pour gérer et
        interagir avec des cryptomonnaies et des dApps. Il te permet de rester
        maître de tes fonds, tout en ouvrant les portes de l’écosystème
        décentralisé. Le choix entre un hot wallet (pratique mais moins
        sécurisé) et un cold wallet (très sécurisé mais moins pratique) dépend
        de tes besoins et de ton niveau de familiarité avec la blockchain.
      </p>
    </>
  );
};

export default CryptoWallets;

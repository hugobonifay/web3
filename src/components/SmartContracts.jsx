import List from "./List";

const SmartContracts = () => {
  return (
    <>
      <h2>Smart contracts</h2>
      <p className="intro">
        Les smart contracts (ou contrats intelligents) sont des programmes
        informatiques auto-exécutables qui s’exécutent sur une blockchain. Ils
        permettent de réaliser automatiquement des actions lorsqu’une ou
        plusieurs conditions prédéfinies sont remplies, sans besoin d’un
        intermédiaire.
      </p>
      <h3>1. Définition simple :</h3>
      <p>
        Un smart contract fonctionne comme un "contrat numérique" où les termes
        de l’accord entre les parties sont directement écrits dans du code. Une
        fois déployé sur la blockchain, il devient immuable, transparent et
        autonome.
      </p>
      <h3>2. Comment ça marche ?</h3>
      <List
        title="Rédaction du contrat :"
        items={[
          "Le contrat est programmé en utilisant un langage de programmation spécifique (par ex., Solidity pour Ethereum).",
          'Les règles et conditions du contrat sont définies dans le code. Exemple : "Si Alice envoie 1 Ether, alors Bob lui transfère un NFT."',
        ]}
      />
      <List
        title="Déploiement sur la blockchain :"
        items={[
          "Une fois le code finalisé, il est déployé sur la blockchain. À partir de là, il ne peut plus être modifié.",
          "Le contrat est accessible publiquement (tout le monde peut voir son code et ses transactions).",
        ]}
      />
      <List
        title="Exécution automatique :"
        items={[
          "Le smart contract s'exécute automatiquement lorsqu'une ou plusieurs conditions sont remplies.",
          "Les actions peuvent inclure le transfert d'argent, l'envoi d'une donnée ou l'exécution d'une autre logique.",
        ]}
      />
      <h3>3. Avantages des smart contracts :</h3>
      <List
        items={[
          "Automatisation : Pas besoin d'intermédiaire (banque, avocat, notaire, etc.). Tout est automatique.",
          "Sécurité : Le code est enregistré sur une blockchain, ce qui le rend immuable et difficile à pirater.",
          "Transparence : Tout le monde peut consulter les règles et voir les transactions.",
          "Efficacité : Moins de paperasse et d'intervention humaine, donc des processus plus rapides.",
        ]}
      />
      <h3>4. Exemples d’utilisation des smart contracts :</h3>
      <List
        title="Finance décentralisée (DeFi) :"
        items={[
          "Prêts automatiques : Un utilisateur peut emprunter des cryptomonnaies s’il dépose une garantie suffisante (collatéral).",
          "Échanges décentralisés : Achat/vente sans passer par une plateforme centralisée (ex. Uniswap).",
        ]}
      />
      <List
        title="Assurance :"
        items={[
          "Si un vol est annulé, un remboursement automatique est envoyé au client grâce aux données vérifiées.",
        ]}
      />
      <List
        title="Immobilier :"
        items={[
          "Achat de propriétés via des tokens : Le transfert de propriété est automatisé dès que le paiement est effectué.",
        ]}
      />
      <List
        title="Supply Chain :"
        items={[
          "Suivi des produits : Un smart contract peut valider les étapes d’une chaîne d’approvisionnement (ex. : quand un colis arrive dans un port).",
        ]}
      />
      <List
        title="NFT (Non-Fungible Tokens) :"
        items={[
          "Les smart contracts gèrent l’achat, la vente et les redevances automatiques pour les créateurs.",
        ]}
      />
      <h3>5. Exemple concret :</h3>
      <p>Imagine une assurance voyage basée sur un smart contract.</p>
      <List
        title="Conditions :"
        items={["Si ton vol est annulé, tu es remboursé."]}
      />
      <List
        title="Fonctionnement :"
        items={[
          "Le smart contract est connecté à une base de données aérienne (via des oracles, voir ci-dessous).",
          "Si le système détecte que ton vol est annulé, il exécute automatiquement le remboursement.",
          "Pas besoin de faire de réclamation ou d’attendre un traitement manuel.",
        ]}
      />
      <h3>6. Les "oracles" :</h3>
      <p>
        Les smart contracts eux-mêmes ne peuvent pas accéder à des informations
        extérieures à la blockchain (comme la météo ou l'état d'un vol). C'est
        là qu'interviennent les oracles, qui agissent comme des "ponts" entre le
        monde extérieur et la blockchain, en fournissant les données
        nécessaires.
      </p>
      <h3>7. Limitations des smart contracts :</h3>
      <List
        items={[
          "Qualité du code : Une erreur dans le code peut entraîner des bugs ou des failles de sécurité. Comme sur la blockchain, le code est immuable, corriger une erreur peut être complexe.",
          "Dépendance aux oracles : Si un oracle fournit de mauvaises données, le contrat peut mal fonctionner.",
          "Complexité technique : Développer un smart contract nécessite une expertise en programmation blockchain.",
          "Régulation : Les smart contracts ne sont pas encore largement reconnus par les lois dans certains pays.",
        ]}
      />
      <h3>Résumé :</h3>
      <p>
        Les smart contracts automatisent des processus qui, dans le monde
        traditionnel, nécessitent souvent des intermédiaires, tout en
        garantissant transparence, sécurité et efficacité. Ils ouvrent des
        possibilités infinies dans la finance, l'assurance, les droits d'auteur,
        et bien d'autres domaines.
      </p>
    </>
  );
};

export default SmartContracts;

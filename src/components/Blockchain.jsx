const Blockchain = () => {
  return (
    <>
      <h2>Blockchain</h2>
      <p className="intro">
        La blockchain est une technologie de stockage et de transmission
        d'informations qui fonctionne comme un registre numérique décentralisé
        et sécurisé.
      </p>
      <h3>1. Qu'est-ce qu'une blockchain ?</h3>
      <p>
        La blockchain, ou chaîne de blocs, est une base de données partagée
        entre plusieurs utilisateurs, organisée sous forme de blocs qui sont
        liés entre eux (comme une chaîne). Chaque bloc contient des
        informations, par exemple :
      </p>
      <ul>
        <li>Des transactions financières,</li>
        <li>Des contrats,</li>
        <li>Des données d'identité.</li>
      </ul>
      <p>
        La particularité ? Elle est décentralisée, ce qui signifie qu'il n'y a
        pas d'autorité centrale pour contrôler ou modifier ces données. Tout est
        géré par un réseau de participants.
      </p>
      <h3>2. Comment fonctionne une blockchain ?</h3>
      <p>Le fonctionnement repose sur plusieurs principes clés :</p>

      <h4>a) Les blocs</h4>
      <p>Chaque bloc contient :</p>
      <ul>
        <li>Une liste de transactions ou d'enregistrements,</li>
        <li>Une référence au bloc précédent (appelée "hash"),</li>
        <li>Un horodatage (timestamp).</li>
      </ul>
      <h4>b) Le hash (empreinte numérique)</h4>
      <p>
        Le hash est une fonction mathématique qui génère une "empreinte" unique
        pour les données du bloc. Si une information dans le bloc est modifiée,
        le hash change complètement, ce qui rend les manipulations détectables.
      </p>
      <h4>c) Le réseau décentralisé</h4>
      <p>
        Les utilisateurs du réseau (appelés "nœuds") partagent une copie
        identique de la blockchain. Ils vérifient collectivement la validité des
        nouveaux blocs via un mécanisme de consensus.
      </p>
      <h4>3. Les mécanismes de sécurité</h4>
      <p>
        La blockchain repose sur des techniques avancées pour assurer sa
        sécurité :
      </p>
      <h4>a) Consensus</h4>
      <p>
        Pour qu'un nouveau bloc soit ajouté à la chaîne, les participants
        doivent se mettre d'accord sur sa validité. Les deux mécanismes les plus
        courants :
      </p>
      <ul>
        <li>
          Proof of Work (PoW) : Les participants résolvent des problèmes
          mathématiques complexes pour valider un bloc. Exemple : Bitcoin.
        </li>
        <li>
          Proof of Stake (PoS) : Les participants "misent" des jetons pour avoir
          le droit de valider un bloc. Exemple : Ethereum 2.0.
        </li>
      </ul>
      <h4>b) Immutabilité</h4>
      <p>
        Une fois qu'un bloc est validé et ajouté à la chaîne, il est extrêmement
        difficile (voire impossible) de le modifier, car cela nécessiterait de
        recalculer les hashes de tous les blocs suivants.
      </p>
      <h3>4. Les avantages de la blockchain</h3>
      <ul>
        <li>
          Transparence : Toutes les transactions sont visibles par tous les
          participants.
        </li>
        <li>
          Sécurité : Les données sont protégées contre les falsifications.
        </li>
        <li>
          Décentralisation : Pas besoin d'une autorité centrale (comme une
          banque ou un gouvernement).
        </li>
        <li>
          Traçabilité : Les informations restent accessibles et vérifiables à
          tout moment.
        </li>
      </ul>
      <h3>5. Les applications de la blockchain</h3>
      <p>
        La blockchain ne se limite pas aux cryptomonnaies comme Bitcoin ou
        Ethereum. Voici quelques domaines où elle est utilisée :
      </p>
      <ul>
        <li>Finance : Paiements rapides et sans intermédiaire,</li>
        <li>
          Logistique : Suivi des produits (ex. : traçabilité alimentaire),
        </li>
        <li>Santé : Stockage sécurisé des données médicales,</li>
        <li>
          Contrats intelligents (smart contracts) : Exécution automatique de
          contrats selon des conditions prédéfinies,
        </li>
        <li>Vote électronique : Systèmes de vote sécurisés et transparents.</li>
      </ul>
      <p>
        En résumé, la blockchain est une technologie révolutionnaire qui promet
        plus de transparence, de sécurité et d'efficacité dans de nombreux
        secteurs.
      </p>
    </>
  );
};

export default Blockchain;

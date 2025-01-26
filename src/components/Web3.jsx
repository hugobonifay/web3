const Web3 = () => {
  return (
    <>
      <h2>Web1, Web2 & Web3</h2>
      <h3>1. Web1 : Le Web statique (1990 - 2005 environ)</h3>
      <p>
        Le Web1 est la première version d'Internet, souvent appelée "web en
        lecture seule".
      </p>
      <p>Caractéristiques :</p>
      <ul>
        <li>
          Sites statiques : Les pages web étaient principalement composées de
          texte et d'images statiques. Les contenus étaient fixes et ne
          changeaient pas souvent.
        </li>
        <li>
          Unidirectionnel : Les utilisateurs consommaient l'information, mais ne
          pouvaient pas interagir ou contribuer directement (pas de
          commentaires, de likes, etc.).
        </li>
        <li>
          Absence d'interactivité : Pas de réseaux sociaux, pas de vidéos
          intégrées, peu d'applications dynamiques.
        </li>
        <li>
          Exemples : Les premiers sites comme Yahoo!, GeoCities, ou les blogs
          rudimentaires.
        </li>
      </ul>
      <p>Limitations :</p>
      <ul>
        <li>Manque d'interactivité.</li>
        <li>Peu ou pas d'implication de l'utilisateur final.</li>
      </ul>
      <h3>2. Web2 : Le Web social et interactif (2005 - aujourd'hui)</h3>
      <p>
        Le Web2 marque l'évolution vers un "web en lecture-écriture", où les
        utilisateurs ne sont plus seulement consommateurs, mais aussi créateurs
        de contenu.
      </p>
      <p>Caractéristiques :</p>
      <ul>
        <li>
          Interaction utilisateur : Les internautes peuvent publier, commenter,
          partager, liker et créer du contenu.
        </li>
        <li>
          Plateformes centralisées : L'émergence des réseaux sociaux, des
          plateformes comme Facebook, YouTube, et des applications comme Uber ou
          Airbnb, où les données des utilisateurs sont contrôlées par des
          entreprises centralisées.
        </li>
        <li>
          Économie du contenu : Les gens peuvent monétiser leurs créations (via
          YouTube, Patreon, etc.).
        </li>
        <li>
          Accessibilité mobile : Explosion des smartphones, rendant Internet
          accessible partout.
        </li>
      </ul>
      <p>Exemples :</p>
      <ul>
        <li>Réseaux sociaux (Facebook, Instagram, TikTok),</li>
        <li>Plateformes collaboratives (Wikipedia, WordPress),</li>
        <li>Applications de partage (Airbnb, Uber).</li>
      </ul>
      <p>Problèmes :</p>
      <ul>
        <li>
          Centralisation excessive : Les données des utilisateurs sont
          contrôlées par des entreprises comme Google, Amazon, et Meta.
        </li>
        <li>
          Manque de confidentialité : La collecte massive de données pour la
          publicité.
        </li>
        <li>
          Inégalités économiques : Les créateurs de contenu ne reçoivent qu’une
          petite partie des revenus générés par leurs créations.
        </li>
      </ul>
      <h3>3. Web3 : Le Web décentralisé (en émergence)</h3>
      <p>
        Le Web3 est une vision d’un "web en lecture-écriture-propriété", où la
        décentralisation et la blockchain jouent un rôle central.
      </p>
      <p>Caractéristiques :</p>
      <ul>
        <li>
          Décentralisation : Les données et services sont répartis sur un réseau
          d’ordinateurs (blockchain) plutôt que contrôlés par une seule entité.
        </li>
        <li>
          Propriété des données : Les utilisateurs gardent le contrôle de leurs
          informations personnelles et peuvent les monétiser s’ils le
          souhaitent.
        </li>
        <li>
          Smart Contracts : Les contrats intelligents permettent d'automatiser
          des transactions sans intermédiaire.
        </li>
        <li>
          Cryptomonnaies et NFT : Les utilisateurs peuvent participer à
          l’économie numérique grâce aux cryptomonnaies et posséder des actifs
          numériques uniques (NFT).
        </li>
        <li>
          Autonomie des créateurs : Les artistes et créateurs peuvent monétiser
          directement leur contenu sans passer par des plateformes
          intermédiaires.
        </li>
      </ul>
      <p>Exemples :</p>
      <ul>
        <li>Réseaux décentralisés comme Ethereum,</li>
        <li>Projets comme OpenSea (NFTs), Uniswap (finance décentralisée),</li>
        <li>
          DAO (Decentralized Autonomous Organizations) : des organisations
          gérées par des communautés.
        </li>
      </ul>
      <p>Avantages :</p>
      <ul>
        <li>Transparence accrue grâce à la blockchain.</li>
        <li>Plus de pouvoir et de contrôle pour les utilisateurs.</li>
        <li>Réduction de la censure et des monopoles.</li>
      </ul>
      <p>Défis :</p>
      <ul>
        <li>Technologie encore jeune et complexe à adopter.</li>
        <li>Consommation énergétique élevée de certaines blockchains.</li>
        <li>Régulations floues ou incertaines.</li>
      </ul>
      <p>Résumé des différences :</p>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>
                <strong>Aspect</strong>
              </th>
              <th>
                <strong>Web1</strong>
              </th>
              <th>
                <strong>Web2</strong>
              </th>
              <th>
                <strong>Web3</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Nature</strong>
              </td>
              <td>Lecture seule</td>
              <td>Lecture-écriture</td>
              <td>Lecture-écriture-propriété</td>
            </tr>
            <tr>
              <td>
                <strong>Interaction</strong>
              </td>
              <td>Passif</td>
              <td>Actif et interactif</td>
              <td>Propriété des données</td>
            </tr>
            <tr>
              <td>
                <strong>Technologie clé</strong>
              </td>
              <td>HTML statique</td>
              <td>Plateformes centralisées</td>
              <td>Blockchain et décentralisation</td>
            </tr>
            <tr>
              <td>
                <strong>Exemples</strong>
              </td>
              <td>Yahoo!, MSN</td>
              <td>Facebook, YouTube, Instagram</td>
              <td>Ethereum, OpenSea, Uniswap</td>
            </tr>
            <tr>
              <td>
                <strong>Contrôle des données</strong>
              </td>
              <td>Centralisé (webmasters)</td>
              <td>Centralisé (grandes entreprises)</td>
              <td>Décentralisé (utilisateurs)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Web3;

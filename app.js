// Données des cartes de l'Oracle des Premiers Principes
const oracleCards = [
    {
        "numero": 1,
        "titre": "Évolution par sélection naturelle",
        "fait_verifie": "Tous les organismes vivants évoluent par sélection naturelle (Darwin, 1859).",
        "question": "Comment puis-je améliorer cette idée ou situation par petits ajustements et adaptations successives ?",
        "principe": "Progrès par itérations",
        "citation": "C'est la survie non du plus fort, mais du plus apte à s'adapter au changement.",
        "image": "01-evolution.png"
    },
    {
        "numero": 2,
        "titre": "Loi de la gravitation universelle",
        "fait_verifie": "Deux corps s'attirent toujours en fonction de leur masse et de la distance qui les sépare (Newton, 1687).",
        "question": "Qu'est-ce qui attire ou repousse au cœur de ce projet ? Quelles forces invisibles influencent la situation ?",
        "principe": "Forces fondamentales",
        "citation": "Ce qui agit à distance agit tout de même."
    },
    {
        "numero": 3,
        "titre": "Conservation de l'énergie",
        "fait_verifie": "L'énergie ne peut être créée ni détruite, seulement transformée (Lavoisier, 18e siècle).",
        "question": "Où est l'énergie cachée ou mal utilisée ici ? Comment puis-je la transformer ?",
        "principe": "Conservation et transformation des ressources",
        "citation": "Rien ne se perd, rien ne se crée, tout se transforme."
    },
    {
        "numero": 4,
        "titre": "Pensée critique",
        "fait_verifie": "Remettre en question les idées reçues permet d'éviter les biais cognitifs (Kahneman & Tversky, 1970).",
        "question": "Quelles croyances non fondées freinent ma compréhension ou mon action ici ?",
        "principe": "Doute méthodique",
        "citation": "Ce n'est pas parce qu'on l'a toujours fait ainsi que c'est juste."
    },
    {
        "numero": 5,
        "titre": "Effet papillon",
        "fait_verifie": "De petits changements peuvent avoir de grands effets (Théorie du chaos - Lorenz, 1963).",
        "question": "Quelle petite action pourrait impacter durablement la situation ?",
        "principe": "Effet cumulatif",
        "citation": "Un battement d'ailes peut déclencher un ouragan."
    },
    {
        "numero": 6,
        "titre": "Autonomie et liberté",
        "fait_verifie": "L'autonomie est la capacité à prendre des décisions indépendantes basées sur la connaissance et la raison (philosophie morale moderne).",
        "question": "Comment puis-je renforcer ma liberté en prenant des décisions basées sur la connaissance plutôt que sur la peur ?",
        "principe": "Liberté par la connaissance",
        "citation": "La liberté ne consiste pas à faire ce que l'on veut, mais à vouloir ce que l'on peut faire."
    },
    {
        "numero": 7,
        "titre": "Principe de parcimonie",
        "fait_verifie": "La solution la plus simple est généralement la meilleure (Rasoir d'Ockham, 14e siècle).",
        "question": "Quelle est la solution la plus directe et simple à ce problème ?",
        "principe": "Simplicité efficace",
        "citation": "Il ne faut pas multiplier les êtres sans nécessité."
    },
    {
        "numero": 8,
        "titre": "Neuroplasticité",
        "fait_verifie": "Le cerveau peut se réorganiser et créer de nouvelles connexions tout au long de la vie (Kandel, 2000).",
        "question": "Quelles nouvelles habitudes puis-je développer pour transformer ma façon de penser ou d'agir ?",
        "principe": "Adaptabilité mentale",
        "citation": "Le cerveau qui se transforme transforme l'être."
    },
    {
        "numero": 9,
        "titre": "Loi de l'offre et de la demande",
        "fait_verifie": "Le prix d'un bien s'établit par l'équilibre entre l'offre et la demande (Adam Smith, 1776).",
        "question": "Qu'est-ce qui est vraiment demandé ici ? Quelle valeur puis-je apporter ?",
        "principe": "Équilibre des échanges",
        "citation": "La valeur réelle réside dans l'utilité perçue."
    },
    {
        "numero": 10,
        "titre": "Principe d'incertitude",
        "fait_verifie": "Il est impossible de connaître simultanément la position et la vitesse d'une particule (Heisenberg, 1927).",
        "question": "Quelles incertitudes dois-je accepter pour avancer ?",
        "principe": "Acceptation de l'inconnu",
        "citation": "L'incertitude est le seul endroit où réside la possibilité."
    },
    {
        "numero": 11,
        "titre": "Méthode scientifique",
        "fait_verifie": "Une hypothèse doit être testable et réfutable pour être considérée comme scientifique (Popper, 1934).",
        "question": "Comment puis-je tester cette idée avant de m'y engager pleinement ?",
        "principe": "Validation empirique",
        "citation": "Une théorie qui n'est pas réfutable n'est pas scientifique."
    },
    {
        "numero": 12,
        "titre": "Loi de Pareto",
        "fait_verifie": "80% des effets proviennent de 20% des causes (Pareto, 1896).",
        "question": "Quels 20% d'efforts pourraient produire 80% des résultats souhaités ?",
        "principe": "Efficacité concentrée",
        "citation": "L'essentiel réside souvent dans le minoritaire."
    },
    {
        "numero": 13,
        "titre": "Thermodynamique - Entropie",
        "fait_verifie": "L'entropie d'un système isolé ne peut qu'augmenter (Deuxième loi de la thermodynamique).",
        "question": "Où dois-je apporter de l'énergie pour maintenir l'ordre et éviter la dégradation ?",
        "principe": "Maintenance active",
        "citation": "L'ordre nécessite un effort constant."
    },
    {
        "numero": 14,
        "titre": "Effet de réseau",
        "fait_verifie": "La valeur d'un réseau augmente proportionnellement au carré du nombre d'utilisateurs (Loi de Metcalfe).",
        "question": "Comment puis-je créer ou rejoindre des réseaux qui multiplieront mes possibilités ?",
        "principe": "Synergie collective",
        "citation": "La force du réseau réside dans ses connexions."
    },
    {
        "numero": 15,
        "titre": "Principe de réciprocité",
        "fait_verifie": "Les humains ont tendance à rendre les faveurs reçues (Cialdini, 1984).",
        "question": "Comment puis-je créer de la valeur pour les autres afin de renforcer mes relations ?",
        "principe": "Échange mutuel",
        "citation": "Donner avant de recevoir ouvre toutes les portes."
    },
    {
        "numero": 16,
        "titre": "Théorie des systèmes",
        "fait_verifie": "Le tout est plus que la somme de ses parties (Bertalanffy, 1968).",
        "question": "Comment les éléments de cette situation interagissent-ils entre eux ?",
        "principe": "Vision systémique",
        "citation": "Comprendre les interactions révèle le potentiel du système."
    },
    {
        "numero": 17,
        "titre": "Principe de falsifiabilité",
        "fait_verifie": "Une affirmation n'a de valeur scientifique que si elle peut être réfutée (Popper).",
        "question": "Quelles preuves pourraient contredire ma conviction actuelle ?",
        "principe": "Remise en question constructive",
        "citation": "La vérité résiste à l'épreuve du doute."
    },
    {
        "numero": 18,
        "titre": "Courbe d'apprentissage",
        "fait_verifie": "La compétence s'acquiert progressivement selon une courbe prévisible (Ebbinghaus, 1885).",
        "question": "À quelle étape de l'apprentissage suis-je ? Que dois-je maîtriser ensuite ?",
        "principe": "Progression méthodique",
        "citation": "Chaque expert était autrefois un débutant."
    },
    {
        "numero": 19,
        "titre": "Loi des rendements décroissants",
        "fait_verifie": "Au-delà d'un certain point, ajouter des ressources produit moins de résultats (Ricardo, 1817).",
        "question": "À partir de quel moment dois-je arrêter d'investir dans cette voie ?",
        "principe": "Optimisation des ressources",
        "citation": "Plus n'est pas toujours mieux."
    },
    {
        "numero": 20,
        "titre": "Principe de causalité",
        "fait_verifie": "Tout effet a une cause (Principe fondamental de la physique).",
        "question": "Quelle est la véritable cause racine de ce problème ?",
        "principe": "Recherche des origines",
        "citation": "Traiter la cause élimine l'effet."
    },
    {
        "numero": 21,
        "titre": "Diversification des risques",
        "fait_verifie": "Répartir les risques réduit la probabilité de perte totale (Théorie moderne du portefeuille - Markowitz, 1952).",
        "question": "Comment puis-je répartir mes efforts pour minimiser les risques ?",
        "principe": "Prudence stratégique",
        "citation": "Ne pas mettre tous ses œufs dans le même panier."
    },
    {
        "numero": 22,
        "titre": "Feedback et boucles de rétroaction",
        "fait_verifie": "Les systèmes s'autorégulent grâce aux boucles de rétroaction (cybernétique - Wiener, 1948).",
        "question": "Quels signaux me permettent de corriger ma trajectoire ?",
        "principe": "Ajustement continu",
        "citation": "Celui qui écoute les signaux navigue avec précision."
    },
    {
        "numero": 23,
        "titre": "Compétence et confiance",
        "fait_verifie": "Les moins compétents surestiment leurs capacités (Effet Dunning-Kruger, 1999).",
        "question": "Dans quel domaine pourrais-je surestimer mes compétences ?",
        "principe": "Humilité cognitive",
        "citation": "Plus on sait, plus on réalise qu'on ne sait pas."
    },
    {
        "numero": 24,
        "titre": "Loi de Moore",
        "fait_verifie": "La puissance de calcul double tous les deux ans (Moore, 1965).",
        "question": "Comment puis-je anticiper l'évolution technologique dans mon domaine ?",
        "principe": "Anticipation exponentielle",
        "citation": "Le futur arrive plus vite qu'on ne le pense."
    },
    {
        "numero": 25,
        "titre": "Principe de superposition",
        "fait_verifie": "En physique quantique, une particule peut être dans plusieurs états simultanément.",
        "question": "Quelles possibilités puis-je maintenir ouvertes avant de faire un choix définitif ?",
        "principe": "Options multiples",
        "citation": "Garder plusieurs portes ouvertes préserve les opportunités."
    },
    {
        "numero": 26,
        "titre": "Théorie des contraintes",
        "fait_verifie": "La performance d'un système est limitée par son maillon le plus faible (Goldratt, 1984).",
        "question": "Quel est le goulot d'étranglement qui limite ma progression ?",
        "principe": "Identification du limitant",
        "citation": "Renforcer le maillon faible libère tout le potentiel."
    },
    {
        "numero": 27,
        "titre": "Principe de relativité",
        "fait_verifie": "La perception dépend du référentiel d'observation (Einstein, 1905).",
        "question": "Depuis quel autre point de vue puis-je considérer cette situation ?",
        "principe": "Relativité des perspectives",
        "citation": "Changer de référentiel change la réalité perçue."
    },
    {
        "numero": 28,
        "titre": "Loi de la spécialisation",
        "fait_verifie": "La division du travail augmente la productivité (Adam Smith, 1776).",
        "question": "Dans quoi dois-je me spécialiser pour maximiser ma contribution ?",
        "principe": "Focus et expertise",
        "citation": "L'excellence naît de la concentration."
    },
    {
        "numero": 29,
        "titre": "Principe d'émergence",
        "fait_verifie": "Des propriétés nouvelles émergent de l'interaction des parties (Théorie de la complexité).",
        "question": "Quelles nouvelles possibilités pourraient émerger de cette combinaison d'éléments ?",
        "principe": "Créativité systémique",
        "citation": "L'innovation naît de l'interaction inattendue."
    },
    {
        "numero": 30,
        "titre": "Cycle de vie des innovations",
        "fait_verifie": "Toute innovation suit un cycle : émergence, croissance, maturité, déclin (Schumpeter).",
        "question": "À quelle phase du cycle se trouve cette idée ou ce projet ?",
        "principe": "Temporalité de l'innovation",
        "citation": "Reconnaître le cycle permet d'agir au bon moment."
    },
    {
        "numero": 31,
        "titre": "Principe de moindre action",
        "fait_verifie": "La nature emprunte toujours le chemin qui minimise l'énergie (Maupertuis, 1744).",
        "question": "Quel est le chemin le plus direct et économe vers mon objectif ?",
        "principe": "Efficience naturelle",
        "citation": "La nature enseigne l'économie d'effort."
    },
    {
        "numero": 32,
        "titre": "Effet de seuil",
        "fait_verifie": "Certains phénomènes ne se manifestent qu'après avoir dépassé un seuil critique.",
        "question": "Quel seuil dois-je franchir pour déclencher le changement souhaité ?",
        "principe": "Masse critique",
        "citation": "Parfois, il faut persévérer jusqu'au point de bascule."
    },
    {
        "numero": 33,
        "titre": "Loi de conservation de l'information",
        "fait_verifie": "L'information ne peut être détruite, seulement transformée (Physique quantique).",
        "question": "Quelles informations précieuses pourrais-je transformer plutôt que d'ignorer ?",
        "principe": "Valorisation informationnelle",
        "citation": "Aucune connaissance n'est jamais vraiment perdue."
    },
    {
        "numero": 34,
        "titre": "Principe de symétrie",
        "fait_verifie": "Les lois de la physique restent invariantes sous certaines transformations (Théorème de Noether).",
        "question": "Quels éléments constants puis-je identifier dans cette situation changeante ?",
        "principe": "Invariants fondamentaux",
        "citation": "Dans le changement, chercher ce qui demeure."
    },
    {
        "numero": 35,
        "titre": "Théorie des jeux",
        "fait_verifie": "Les décisions optimales dépendent des stratégies des autres acteurs (Nash, 1950).",
        "question": "Comment les autres parties prenantes vont-elles réagir à ma décision ?",
        "principe": "Interdépendance stratégique",
        "citation": "Anticiper les réactions améliore les décisions."
    },
    {
        "numero": 36,
        "titre": "Principe holographique",
        "fait_verifie": "Toute l'information d'un volume peut être encodée sur sa surface (Physique théorique).",
        "question": "Quels détails révèlent l'ensemble de la situation ?",
        "principe": "Information fractale",
        "citation": "Le microcosme révèle le macrocosme."
    }
];

// Variables globales
let currentCard = null;

// Éléments du DOM
let homePage, drawingPage, cardPage;
let drawCardBtn, newCardBtn, homeBtn;
let cardNumber, cardTitle, cardFact, cardQuestion, cardPrinciple, cardCitation;
let cardImageContainer, cardImage;

// Fonctions utilitaires
function hideAllPages() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
}

function showPage(pageElement) {
    if (!pageElement) {
        console.error('Page element not found');
        return;
    }
    hideAllPages();
    pageElement.classList.add('active');
}

function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * oracleCards.length);
    return oracleCards[randomIndex]; //[0]; //
}

function displayCard(card) {
    if (!card) {
        console.error('No card provided to display');
        return;
    }
    
    try {
        // Vérifier que tous les éléments DOM nécessaires existent
        if (!cardNumber || !cardTitle || !cardFact || !cardQuestion || !cardPrinciple || !cardCitation) {
            console.error('Required card elements not found');
            return;
        }

        cardNumber.textContent = card.numero;
        cardTitle.textContent = card.titre;
        cardFact.textContent = card.fait_verifie;
        cardQuestion.textContent = card.question;
        cardPrinciple.textContent = card.principe;
        cardCitation.textContent = card.citation;

        // Gestion de l'image
        if (card.image && cardImageContainer && cardImage) {
            cardImage.src = card.image;
            cardImage.alt = `Illustration pour ${card.titre}`;
            cardImageContainer.classList.remove('hidden');
            
            // Ajouter une classe spéciale pour la carte d'évolution
            if (card.numero === 1) {
                cardImage.classList.add('card-image-evolution');
            } else {
                cardImage.classList.remove('card-image-evolution');
            }
            
            // Gestion des erreurs de chargement d'image
            cardImage.onerror = function() {
                console.warn(`Image ${card.image} not found, hiding image container`);
                cardImageContainer.classList.add('hidden');
            };
        } else if (cardImageContainer) {
            // Masquer le conteneur d'image si pas d'image
            cardImageContainer.classList.add('hidden');
        }

        console.log(`Card displayed: ${card.titre} (${card.numero})`);
    } catch (error) {
        console.error('Error displaying card:', error);
    }
}

function drawCard() {
    console.log('Drawing card...');
    
    // Vérifier que les éléments DOM existent
    if (!drawingPage || !cardPage) {
        console.error('Required page elements not found');
        return;
    }
    
    // Sélectionner une carte aléatoire immédiatement
    currentCard = getRandomCard();
    console.log('Selected card:', currentCard);
    
    // Afficher la page d'animation
    showPage(drawingPage);
    
    // Attendre un peu puis préparer les données de la carte
    setTimeout(() => {
        displayCard(currentCard);
        
        // Attendre la fin de l'animation puis afficher la carte
        setTimeout(() => {
            console.log('Showing card page...');
            showPage(cardPage);
        }, 1000);
    }, 500);
}

// Initialisation
function initializeApp() {
    console.log('Initializing Oracle des Premiers Principes...');
    
    // Récupérer les éléments du DOM
    homePage = document.getElementById('home-page');
    drawingPage = document.getElementById('drawing-page');
    cardPage = document.getElementById('card-page');
    
    drawCardBtn = document.getElementById('draw-card-btn');
    newCardBtn = document.getElementById('new-card-btn');
    homeBtn = document.getElementById('home-btn');
    
    cardNumber = document.getElementById('card-number');
    cardTitle = document.getElementById('card-title');
    cardFact = document.getElementById('card-fact');
    cardQuestion = document.getElementById('card-question');
    cardPrinciple = document.getElementById('card-principle');
    cardCitation = document.getElementById('card-citation');
    
    // Nouveaux éléments pour l'image
    cardImageContainer = document.getElementById('card-image-container');
    cardImage = document.getElementById('card-image');
    
    // Vérifier que tous les éléments essentiels sont présents
    const requiredElements = [
        homePage, drawingPage, cardPage,
        drawCardBtn, newCardBtn, homeBtn,
        cardNumber, cardTitle, cardFact, cardQuestion, cardPrinciple, cardCitation
    ];
    
    const missingElements = requiredElements.filter(el => !el);
    if (missingElements.length > 0) {
        console.error('Missing DOM elements:', missingElements);
        return;
    }
    
    // Vérifier les éléments d'image (optionnels)
    if (!cardImageContainer || !cardImage) {
        console.warn('Image elements not found - images will not be displayed');
    }
    
    // Ajouter les gestionnaires d'événements
    if (drawCardBtn) {
        drawCardBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Draw card button clicked');
            drawCard();
        });
    }
    
    if (newCardBtn) {
        newCardBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('New card button clicked');
            drawCard();
        });
    }
    
    if (homeBtn) {
        homeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Home button clicked');
            showPage(homePage);
            currentCard = null;
        });
    }
    
    // Ajouter des attributs d'accessibilité
    if (drawCardBtn) drawCardBtn.setAttribute('aria-label', 'Tirer une carte de l\'oracle');
    if (newCardBtn) newCardBtn.setAttribute('aria-label', 'Tirer une nouvelle carte');
    if (homeBtn) homeBtn.setAttribute('aria-label', 'Retourner à la page d\'accueil');
    
    // Afficher la page d'accueil
    showPage(homePage);
    
    console.log(`Oracle initialisé avec ${oracleCards.length} cartes`);
}

// Gestion du clavier pour l'accessibilité
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if ((cardPage && cardPage.classList.contains('active')) || 
            (drawingPage && drawingPage.classList.contains('active'))) {
            if (homePage) {
                showPage(homePage);
                currentCard = null;
            }
        }
    }
    
    if (event.key === 'Enter' || event.key === ' ') {
        const activeElement = document.activeElement;
        if (activeElement && activeElement.classList.contains('btn')) {
            event.preventDefault();
            activeElement.click();
        }
    }
});

// Initialiser l'application quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // DOM déjà chargé
    initializeApp();
}
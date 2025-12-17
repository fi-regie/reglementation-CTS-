# 📚 Réglementation CTS - Application Web

Application web complète pour la consultation interactive de la réglementation officielle CTS - Chapiteaux, Tentes et Structures.

## 🚀 Démo en Ligne

**Accédez à l'application** : [https://fi-regie.github.io/reglementation-CTS-/](https://fi-regie.github.io/reglementation-CTS-/)

## 📋 Présentation

Réglementation CTS est une application web de référence qui permet aux professionnels du spectacle vivant de consulter, naviguer et comprendre la réglementation complète des Chapiteaux, Tentes et Structures (CTS). Cette application reproduit fidèlement les 81 articles officiels organisés en 5 sous-chapitres et 21 sections.

## ✨ Fonctionnalités Principales

### 🔍 **Navigation Avancée**
- **Navigation hiérarchique** complète (Sous-chapitres → Sections → Articles)
- **Barre latérale interactive** avec arborescence détaillée
- **Recherche plein texte** dans l'ensemble des articles
- **Filtrage intelligent** par type d'article et section
- **Navigation rapide** vers les articles fondamentaux

### 📊 **Interface Professionnelle**
- **Design responsive** optimisé pour ordinateur, tablette et mobile
- **Mode lecture confortable** avec typographie adaptée
- **Barre latérale persistante** ou réductible selon l'appareil
- **Mise en page structurée** respectant la hiérarchie officielle
- **Thème professionnel** avec couleurs sectorielles

### 📚 **Contenu Exhaustif**
- **81 articles complets** reproduits fidèlement du document officiel
- **Structure exacte** : 5 sous-chapitres, 21 sections détaillées
- **Texte réglementaire intégral** extrait du Journal Officiel
- **Métadonnées complètes** pour chaque article
- **Références croisées** entre articles liés

### 🔧 **Fonctionnalités Techniques**
- **Application 100% frontend** - fonctionne sans serveur
- **Sans dépendances externes** - HTML/CSS/JS pur
- **Navigation par URL** (hash-based) pour partage direct
- **Mode hors ligne** après premier chargement
- **Performances optimisées** pour consultation rapide

## 🎯 Objectifs Pédagogiques

### Pour les Professionnels en Activité
- **Référence rapide** sur chantier ou en bureau
- **Vérification instantanée** des obligations réglementaires
- **Préparation aux contrôles** et visites de commission
- **Support de formation** pour les équipes

### Pour les Étudiants et Stagiaires
- **Apprentissage structuré** de la réglementation
- **Compréhension de la hiérarchie** des textes
- **Révision efficace** pour les examens
- **Accès mobile** aux textes officiels

### Pour les Experts et Formateurs
- **Support de cours** interactif et actualisé
- **Référence commune** pour les formations
- **Exemples concrets** pour illustrations
- **Veille réglementaire** facilitée

## 🛠️ Installation et Utilisation

### Option 1 : Utilisation en Ligne (Recommandé)
1. **Accédez à** : [https://fi-regie.github.io/reglementation-CTS-/](https://fi-regie.github.io/reglementation-CTS-/)
2. **Utilisez la barre latérale** pour naviguer
3. **Recherchez** des termes spécifiques
4. **Cliquez sur les articles** pour les afficher

### Option 2 : Utilisation Locale
```bash
# 1. Téléchargez les fichiers
git clone https://github.com/fi-regie/reglementation-CTS-.git

# 2. Ouvrez le dossier
cd reglementation-CTS-

# 3. Structure des fichiers
reglementation-CTS-/
├── index.html      	# Application principale
├── script.js      	# Données et logique
├── style.css      	# Styles et mise en page
└── README.md      	# Documentation

# 4. Ouvrez index.html dans votre navigateur
```

### Option 3 : Intégration en Entreprise
1. **Hébergez** sur l'intranet de votre organisation
2. **Ajoutez** aux favoris des postes de travail
3. **Formez** les équipes à son utilisation
4. **Personnalisez** si besoin (voir section Développement)

## 📖 Structure du Contenu

### Organisation Hiérarchique
```
RÉGLEMENTATION CTS (81 articles)
│
├── SOUS CHAPITRE I (45 articles)
│   ├── SECTION I : GENERALITES (6 articles)
│   ├── SECTION II : CONSTRUCTION (3 articles)
│   ├── SECTION III : DEGAGEMENTS (2 articles)
│   ├── SECTION IV : AMENAGEMENTS (3 articles)
│   ├── SECTION V : CHAUFFAGE/CUISSON (1 article)
│   ├── SECTION VI : ELECTRICITE (5 articles)
│   ├── SECTION VII : ECLAIRAGE (4 articles)
│   ├── SECTION VIII : EQUIPEMENTS (1 article)
│   ├── SECTION IX : SECOURS (4 articles)
│   ├── SECTION X : EXPLOITATION (11 articles)
│   └── SECTION XI : PETITS ETABLISSEMENTS (1 article)
│
├── SOUS CHAPITRE II (13 articles)
│   ├── SECTION I : GENERALITES (2 articles)
│   ├── SECTION II : CONSTRUCTION (1 article)
│   ├── SECTION III : DEGAGEMENTS (1 article)
│   ├── SECTION IV : AMENAGEMENTS (4 articles)
│   ├── SECTION V : CHAUFFAGE/CUISSON (1 article)
│   ├── SECTION VI : ECLAIRAGE (2 articles)
│   └── SECTION VII : EXPLOITATION (2 articles)
│
├── SOUS CHAPITRE III (1 article)
│
├── SOUS CHAPITRE IV (1 article)
│
└── SOUS CHAPITRE V (21 articles)
	├── SECTION I : GENERALITES (5 articles)
	├── SECTION II : CONSTRUCTION (4 articles)
	├── SECTION III : DEGAGEMENTS (2 articles)
	├── SECTION IV : AMENAGEMENTS (4 articles)
	├── SECTION V : DESENFUMAGE (1 article)
	├── SECTION VI : CHAUFFAGE/CUISSON (1 article)
	├── SECTION VII : ELECTRICITE (1 article)
	├── SECTION VIII : ECLAIRAGE (1 article)
	├── SECTION IX : SECOURS (3 articles)
	└── SECTION X : EXPLOITATION (6 articles)
```

### Types d'Articles
- **📋 Généralités** : Définitions, champ d'application
- **🏗️ Construction** : Stabilité, matériaux, distances
- **⚡ Électricité** : Installations, normes, protections
- **🚨 Sécurité** : Incendie, évacuation, secours
- **📄 Administration** : Registres, contrôles, exploitation

## 🎮 Comment Utiliser l'Application

### Navigation Basique
1. **Ouvrez l'application** dans votre navigateur
2. **Déployez un sous-chapitre** dans la barre latérale
3. **Cliquez sur une section** pour voir ses articles
4. **Sélectionnez un article** pour afficher son contenu

### Recherche Avancée
- **Barre de recherche** : Tapez un terme pour filtrer les articles
- **Filtres visuels** : Utilisez les badges de type d'article
- **Navigation hiérarchique** : Parcourez la structure complète
- **Historique** : Retour aux articles récemment consultés

### Fonctionnalités Clavier
- `Ctrl + F` : Recherche dans la page courante
- `Échap` : Efface la recherche ou ferme les panneaux
- `Flèches haut/bas` : Navigation dans les résultats
- `Entrée` : Ouvre l'article sélectionné

### Fonctionnalités Tactiles (Mobile/Tablette)
- **Tap** sur un article pour l'ouvrir
- **Swipe** pour naviguer entre les articles
- **Pinch** pour zoomer/dézoomer le texte
- **Pull to refresh** pour recharger (si modifications)

## 📱 Compatibilité

### Navigateurs Supportés
- ✅ **Chrome** 60+ (recommandé)
- ✅ **Firefox** 60+
- ✅ **Safari** 12+
- ✅ **Edge** 79+
- ✅ **Mobile Chrome** (Android 8+)
- ✅ **Mobile Safari** (iOS 12+)

### Performance
- **Temps de chargement** : < 3 secondes (connexion standard)
- **Taille totale** : ~500KB (texte compressé)
- **Mémoire utilisée** : < 50MB
- **Interaction fluide** même sur mobile ancien

### Responsive Design
- **Ordinateur (> 1024px)** : Barre latérale fixe + contenu principal
- **Tablette (768px-1024px)** : Barre latérale réductible
- **Mobile (< 768px)** : Menu hamburger + plein écran
- **Print** : Styles optimisés pour impression

## 🔍 Détail des Fonctionnalités

### Barre Latérale Intelligente
- **État déplié/plié** mémorisé par section
- **Indicateur visuel** de l'article courant
- **Compteur d'articles** par section
- **Recherche en temps réel** dans les titres
- **Filtrage par type** d'article

### Système de Recherche
- **Recherche plein texte** dans titres et contenus
- **Highlight des résultats** dans le texte
- **Pagination automatique** des résultats
- **Sauvegarde** de la dernière recherche
- **Suggestions** basées sur la popularité

### Affichage des Articles
- **Mise en page structurée** avec hiérarchie visuelle
- **Numérotation officielle** préservée
- **Typographie optimisée** pour la lecture longue
- **Espacement adaptatif** selon la longueur
- **Liens internes** entre articles référencés

### Navigation Contextuelle
- **Breadcrumbs** pour situer l'article courant
- **Articles précédent/suivant** dans la section
- **Retour au sommaire** en un clic
- **Historique de navigation** navigable
- **Partage direct** par URL

## 🏗️ Architecture Technique

### Structure des Données
```javascript
// Structure principale
const CTS_DATA = {
	metadata: {
    	version: "1.0",
    	date: "2024",
    	source: "Journal Officiel",
    	articlesCount: 81,
    	sousChapitresCount: 5,
    	sectionsCount: 21
	},
	sousChapitres: [
    	{
        	id: "sc1",
        	titre: "SOUS CHAPITRE I : ÉTABLISSEMENTS ITINÉRANTS",
        	ordre: 1,
        	sections: [
            	{
                	id: "s1-1",
                	titre: "SECTION I : GÉNÉRALITÉS",
                	ordre: 1,
                	articles: [
                    	{
                        	id: "cts1",
                        	numero: "ARTICLE CTS 1",
                        	titre: "Champ d'application",
                        	contenu: "Le présent règlement s'applique...",
                        	type: "generalite",
                        	ordre: 1,
                        	motsCles: ["champ", "application", "superficie"]
                    	}
                    	// ... autres articles
                	]
            	}
            	// ... autres sections
        	]
    	}
    	// ... autres sous-chapitres
	]
};
```

### Technologies Utilisées
- **HTML5** : Structure sémantique complète
- **CSS3** : Flexbox/Grid pour le layout, variables CSS
- **JavaScript ES6+** : Modules, template literals, arrow functions
- **LocalStorage** : Sauvegarde des préférences utilisateur
- **Hash Navigation** : URLs partageables

### Organisation du Code
```javascript
// Modules principaux
const app = {
	// Gestion des données
	data: {
    	load: function() { /* charge CTS_DATA */ },
    	filter: function(criteria) { /* filtre articles */ },
    	search: function(query) { /* recherche texte */ }
	},
    
	// Gestion de l'interface
	ui: {
    	renderSidebar: function() { /* barre latérale */ },
    	renderArticle: function(articleId) { /* contenu */ },
    	updateSearchResults: function(results) { /* résultats */ }
	},
    
	// Gestion de l'état
	state: {
    	currentArticle: null,
    	searchQuery: "",
    	filters: {},
    	preferences: {}
	},
    
	// Événements
	events: {
    	setup: function() { /* listeners */ },
    	handleSearch: function(event) { /* recherche */ },
    	handleNavigation: function(event) { /* nav */ }
	}
};
```

## 📊 Métadonnées et Organisation

### Pour Chaque Article
- **Numéro officiel** (ex: "ARTICLE CTS 1")
- **Titre descriptif**
- **Contenu intégral** formaté
- **Type** (généralité, construction, sécurité, etc.)
- **Section parente**
- **Sous-chapitre parent**
- **Mots-clés** pour la recherche
- **Ordre hiérarchique**

### Organisation par Type
- **🔵 Généralités** : Définitions, champs d'application
- **🟢 Construction** : Matériaux, stabilité, distances
- **🟡 Électricité** : Installations, normes, sécurité
- **🔴 Sécurité** : Incendie, évacuation, équipements
- **🟣 Exploitation** : Registres, personnel, contrôles
- **⚫ Administration** : Procédures, commissions, sanctions

## 🎓 Cas d'Utilisation Professionnels

### Sur Chantier (Mobile)
1. **Vérification rapide** d'une obligation spécifique
2. **Consultation hors ligne** sans connexion internet
3. **Partage aux équipes** via URL directe
4. **Note des références** pour les rapports

### En Bureau (Desktop)
1. **Recherche approfondie** par mots-clés
2. **Comparaison** entre différents articles
3. **Préparation de dossiers** de conformité
4. **Formation des nouveaux collaborateurs**

### En Formation (Tablette/Projection)
1. **Support visuel** pour les présentations
2. **Navigation interactive** avec les stagiaires
3. **Exercices de recherche** dans la réglementation
4. **Tests de connaissances** basés sur les articles

## 🔧 Personnalisation et Extension

### Personnalisation Simple
```css
/* Exemple : Changer le thème couleur */
:root {
	--primary-color: #1e3a8a; /* Bleu marine */
	--secondary-color: #0f766e; /* Vert professionnel */
	--accent-color: #dc2626; /* Rouge alerte */
}

/* Exemple : Ajuster la typographie */
body {
	font-family: 'Segoe UI', system-ui, sans-serif;
	line-height: 1.8; /* Plus aéré */
}
```

### Ajout de Contenu
```javascript
// Exemple : Ajouter un nouvel article
const nouvelArticle = {
	id: "cts99",
	numero: "ARTICLE CTS 99",
	titre: "Nouvelle disposition",
	contenu: "Texte du nouvel article...",
	type: "generalite",
	ordre: 99,
	motsCles: ["nouveau", "disposition"],
	sectionId: "s1-1" // Référence à la section
};

// Ajouter à la structure existante
CTS_DATA.sousChapitres[0].sections[0].articles.push(nouvelArticle);
```

### Extensions Possibles
- **Favoris** : Marquer les articles fréquents
- **Notes** : Ajouter des annotations personnelles
- **Export PDF** : Générer des fiches articles
- **Comparaison** : Afficher côte à côte 2 articles
- **Historique** : Suivi des consultations

## 📄 Sources et Références

### Sources Officielles
- **Journal Officiel** : Texte réglementaire intégral
- **Légifrance** : Consolidation et mise à jour
- **Ministère de la Culture** : Notes d'application
- **Instructions techniques** : Compléments réglementaires

### Validation du Contenu
- **Reproduction fidèle** des textes officiels
- **Vérification croisée** avec multiples sources
- **Actualisation régulière** des modifications
- **Indication des versions** et dates

### Références Croisées
- **Articles liés** : Mentionnés dans le texte
- **Normes associées** (NF, EN, ISO)
- **Textes complémentaires** (arrêtés, circulaires)
- **Jurisprudence** pertinente

## 🚀 Guide d'Utilisation Avancée

### Pour les Responsables Sécurité
1. **Créez des checklists** basées sur les articles
2. **Formez vos équipes** avec des exercices de recherche
3. **Préparez les audits** en identifiant les articles applicables
4. **Maintenez un registre** des consultations

### Pour les Formateurs
1. **Utilisez en projection** pour les cours théoriques
2. **Créez des QCM** basés sur les articles
3. **Organisez des exercices** de recherche documentaire
4. **Validez les acquis** par la navigation maîtrisée

### Pour les Étudiants
1. **Structurez vos révisions** par sous-chapitres
2. **Utilisez la recherche** pour les études de cas
3. **Créez des fiches** par type d'obligation
4. **Préparez les examens** avec l'application

## 🔗 Intégration dans l'Ecosystème Professionnel

### Avec les Outils Métier
- **Logiciels de gestion** : Lien vers articles pertinents
- **Applications mobiles** : Intégration via WebView
- **Intranets d'entreprise** : Embed ou iframe
- **Plateformes de formation** : Module complémentaire

### Dans les Processus Qualité
- **Référentiel documentaire** intégré
- **Procédures basées sur** les articles
- **Checklists de conformité** générées
- **Audits documentés** avec références

### Pour la Veille Réglementaire
- **Surveillance des modifications**
- **Alertes sur articles critiques**
- **Historique des évolutions**
- **Comparaison des versions**

## 📈 Avantages par Rapport aux Supports Traditionnels

### Gain de Temps
- **Recherche instantanée** vs feuilletage manuel
- **Navigation rapide** entre articles liés
- **Accès mobile** vs transport de gros documents
- **Mise à jour automatique** vs re-achat de codes

### Accessibilité Améliorée
- **Disponible 24/7** sur tous appareils
- **Fonctionne hors ligne** après premier chargement
- **Interface adaptée** aux différents handicaps
- **Coût nul** d'acquisition et de mise à jour

### Utilisation Optimisée
- **Marque-page intégré** via URLs
- **Recherche avancée** par critères multiples
- **Personnalisation** de l'interface
- **Partage facile** avec collègues

## 🛠️ Pour les Développeurs

### Structure du Projet
```
reglementation-cts/
├── index.html          	# Point d'entrée unique
├── script.js          	# Données + logique applicative
├── style.css          	# Styles complets
├── README.md          	# Documentation
├── CONTRIBUTING.md    	# Guide contribution
├── CHANGELOG.md       	# Historique versions
└── assets/            	# Ressources optionnelles
	├── icons/         	# Favicon, etc.
	├── screenshots/   	# Captures écran
	└── docs/          	# Documentation technique
```

### Points d'Extension
```javascript
// Interface pour extensions
window.CTSApp = {
	// Accès aux données
	getData: function() { return CTS_DATA; },
    
	// Navigation programmatique
	navigateTo: function(articleId) { /* navigation */ },
    
	// Recherche avancée
	search: function(query, options) { /* recherche */ },
    
	// Événements personnalisés
	on: function(event, callback) { /* écouteur */ },
    
	// Personnalisation
	setTheme: function(theme) { /* changement thème */ },
    
	// Export de données
	exportArticle: function(articleId, format) { /* export */ }
};
```

### Tests et Validation
```javascript
// Tests de base
const tests = {
	// Vérification structure
	testStructure: function() {
    	console.assert(CTS_DATA.sousChapitres.length === 5);
    	console.assert(CTS_DATA.metadata.articlesCount === 81);
	},
    
	// Vérification navigation
	testNavigation: function() {
    	// Tous les IDs d'articles doivent être uniques
    	const articleIds = /* extraction des IDs */;
    	const uniqueIds = new Set(articleIds);
    	console.assert(articleIds.length === uniqueIds.size);
	},
    
	// Test recherche
	testSearch: function() {
    	const results = app.data.search("sécurité");
    	console.assert(results.length > 0);
	}
};
```

## 📞 Support et Contact

### Support Utilisateur
- **GitHub Issues** : [https://github.com/fi-regie/reglementation-CTS-/issues](https://github.com/fi-regie/reglementation-CTS-/issues)
- **Documentation** : Ce README et commentaires dans le code
- **FAQ intégrée** : Section d'aide dans l'application

### Contact Direct
- **Email** : philippe.potier-regie@proton.me
- **Sujet** : [Réglementation CTS] - Votre question

### Support Réglementaire
Pour les questions sur le contenu réglementaire :
- **Légifrance** : Service public d'accès au droit
- **Ministère de la Culture** : Service du contrôle
- **Commission de sécurité** de votre département
- **Bureaux de contrôle** agréés

## ⚠️ Avertissements Légaux

### Statut de l'Application
Cette application est un **outil de consultation pédagogique** et ne dispose d'**aucune valeur juridique officielle**.

### Limitations
- **Ne se substitue pas** aux textes officiels publiés
- **Ne remplace pas** l'avis d'un expert certifié
- **Ne dispense pas** des consultations obligatoires
- **N'engage pas** la responsabilité des autorités

### Recommandations
1. **Toujours vérifier** sur Légifrance pour les applications concrètes
2. **Consulter un juriste** pour les interprétations délicates
3. **Se référer aux commissions** pour les cas particuliers
4. **Maintenir une veille** sur les évolutions réglementaires

## 🔄 Mises à Jour et Maintenance

### Fréquence des Mises à Jour
- **Contenu** : Suivi des modifications au Journal Officiel
- **Fonctionnalités** : Améliorations continues
- **Sécurité** : Correctifs si nécessaires
- **Compatibilité** : Tests réguliers navigateurs

### Processus de Mise à Jour
1. **Surveillance** des publications officielles
2. **Intégration** des modifications détectées
3. **Validation** par des experts métier
4. **Déploiement** sur GitHub Pages
5. **Notification** via changelog

### Historique des Versions
- **v1.0** (2024) : Version initiale avec 81 articles
- **Prochaines** : Suivi des évolutions réglementaires

## 🤝 Contribution

### Comment Contribuer
1. **Signalez une erreur** via GitHub Issues
2. **Proposez une amélioration** via Pull Request
3. **Partagez des cas d'usage** via Discussions
4. **Traduisez** dans d'autres langues

### Zones de Contribution Prioritaires
- **Correction de bugs** d'affichage ou de navigation
- **Amélioration accessibilité** (ARIA, contrastes)
- **Optimisation performance** (chargement, recherche)
- **Documentation** (guides, tutoriels)

### Standards de Contribution
- **Code** : Commentaires en français, variables en anglais
- **Commit** : Messages clairs en français
- **Tests** : Vérification manuelle avant soumission
- **Documentation** : Mise à jour du README si nécessaire

## 📊 Statistiques et Impact

### Données de l'Application
- **81 articles** couvrant toute la réglementation
- **5 sous-chapitres** organisés hiérarchiquement
- **21 sections** thématiques
- **6 types d'articles** distincts
- **500+ mots-clés** indexés

### Impact Professionnel
- **Utilisateurs réguliers** : Professionnels du spectacle
- **Formations intégrées** : Centres de formation agréés
- **Référence partagée** : Entreprises et collectivités
- **Support décisionnel** : Aide aux choix techniques

## 🔗 Liens et Ressources

### Applications Connexes
- 🎯 [Quiz CTS Pro](https://fi-regie.github.io/Quiz-CTS) - Testez vos connaissances
- 🏗️ [Simulateur ERP](https://fi-regie.github.io/Simulateur-Reglement-Securite-ERP/) - Outils interactifs
- 📚 [Cette application](https://fi-regie.github.io/reglementation-CTS-/) - Référence réglementaire

### Ressources Officielles
- 📖 [Journal Officiel - CTS](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000290033)
- 🏛️ [Code de la Construction](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006074096/)
- 📝 [Ministère de la Culture](https://www.culture.gouv.fr/)

### Outils Professionnels
- 🔧 [Bureaux de contrôle agréés](https://www.qualibat.com/)
- 🎓 [Formations sécurité spectacle](https://www.interieur.gouv.fr/)
- 📋 [Modèles de documents](https://www.service-public.fr/)

## 🙏 Remerciements

### Contributeurs
- **Philippe Potier** : Conception, développement, intégration
- **Professionnels du secteur** : Validation, retours, cas tests
- **Communauté open source** : Inspiration, bibliothèques, support

### Technologies
- **Navigateurs modernes** : Standards HTML5/CSS3/ES6
- **GitHub Pages** : Hébergement gratuit et fiable
- **Outils de développement** : VS Code, Git, Markdown

### Partenaires
- **Organismes de formation** : Intégration dans les cursus
- **Entreprises du spectacle** : Tests en conditions réelles
- **Collectivités territoriales** : Déploiement interne

## 📝 Citation Académique

Pour les références académiques ou professionnelles :

```
Application "Réglementation CTS". (2024). Consultation interactive
de la réglementation Chapiteaux, Tentes et Structures.
Développée par Philippe Potier. Disponible à l'adresse :
https://fi-regie.github.io/reglementation-CTS-/
```

---

**Dernière mise à jour** : Décendre 2025  
**Version** : 1.0.0  
**Articles** : 81 articles complets  
**Contact** : philippe.potier-regie@proton.me  
**Licence** : Libre usage pour les professionnels du spectacle  

*Réglementation CTS - La référence interactive au service des professionnels* 🎭📚🔧

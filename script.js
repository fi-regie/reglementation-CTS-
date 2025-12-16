// ========== DONNÉES OFFICIELLES EXACTES DU PDF ==========

const CTS_DATA = {
    metadata: {
        title: "Règlementation C.T.S.",
        version: "Document Officiel",
        lastUpdate: "Version PDF",
        totalArticles: 81
    },

    sousChapitres: [
        {
            id: "sc1",
            titre: "SOUS CHAPITRE I - ETABLISSEMENTS DU TYPE CTS CHAPITEAUX, TENTES ET STRUCTURES ITINERANTS",
            sections: [
                {
                    id: "s1-1",
                    titre: "SECTION I : GENERALITES",
                    articles: [
                        {
                            id: "cts1",
                            numero: "Article CTS 1",
                            titre: "Etablissements assujettis",
                            contenu: `• 1. Le présent chapitre du livre IV complète les dispositions du livre I du règlement de sécurité. Il fixe les prescriptions applicables aux chapiteaux, tentes et structures. Les autres livres, titres, sections et articles du règlement ne sont pas applicables, sauf s'ils sont expressément mentionnés dans la suite du présent chapitre.

• 2. Les dispositions du présent règlement s'appliquent aux établissements destinés par conception à être clos ou pouvant être rendus clos en tout ou partie et itinérants, possédant une couverture souple, à usage de cirques, de spectacles, de réunions, de bals, de banquets, de colonies de vacances, d'activités sportives, etc. d'une superficie supérieure ou égale à 16 m².

Il s'applique également aux ensembles de tentes juxtaposées ou non isolées au sens du paragraphe 6 du présent article dont la surface cumulée est supérieure ou égale à 16 m².

• 3. Les établissements d'une superficie supérieure ou égale à 16 m² mais inférieure à 50 m² sont soumis aux seules dispositions des paragraphes 1 et 6 du présent article, du paragraphe 2(b) de l'article CTS 5, de l'article CTS 37 et du paragraphe 1 de l'article CTS 52.

• 4. Les établissements comportant deux niveaux (structures à étage) sont soumis aux seules dispositions du sous chapitre V, quel que soit l'effectif du public accueilli et la durée de leur implantation.

• 5. Les campings et les manèges forains ne sont pas visés par le présent type.

• 6. Les établissements distants entre eux de 8 m au moins sont considérés comme autant d'établissements distincts pour l'application du présent règlement. Entre les établissements visés au paragraphe 3, cette distance peut être ramenée à 5 mètres.`,
                            type: "général"
                        },
                        {
                            id: "cts2",
                            numero: "Article CTS 2",
                            titre: "Calcul de l'effectif",
                            contenu: `L'effectif maximal du public admis est déterminé suivant le mode de calcul propre à chaque type d'activité fixé pour les établissements faisant l'objet du livre II.`,
                            type: "général"
                        },
                        {
                            id: "cts3",
                            numero: "Article CTS 3",
                            titre: "Demande de registre de sécurité",
                            contenu: `• 1. Le registre de sécurité est délivré par le préfet du département dans lequel l'établissement est fabriqué, assemblé ou implanté pour la première fois sur le territoire français, après avis de la commission consultative départementale de sécurité et d'accessibilité. La délivrance du registre de sécurité vaut autorisation d'exploiter l'établissement selon les dispositions de l'article CTS 31.

Compte tenu de la spécificité des établissements (ensembles démontables) et de leurs conditions particulières d'exploitation, leur propriétaire ou le fabricant doit au préalable faire appel à un organisme agréé de vérification technique CTS, afin d'établir le registre de sécurité en conformité avec le présent règlement, avant de le transmettre au préfet du département. La composition de ce registre de sécurité est précisée dans l'annexe I au présent chapitre.

L'organisme agréé de vérification technique CTS adresse les documents mentionnés aux chapitre I et chapitre II de l'annexe I au moins un mois avant la date prévue pour la première implantation, au préfet du département dans lequel cette opération est effectuée ou au préfet de Police pour Paris.

Les autres pièces du dossier sont transmises dès que possible au préfet, pour avis, en vue de la délivrance du registre de sécurité.

• 2. Pour les établissements atypiques, innovants, structures à étage, établissements à implantation prolongée ou disposant d'aménagements intérieurs, le registre de sécurité ne peut être délivré qu'après la visite de la commission de sécurité et la notification d'avis favorable vaut registre de sécurité provisoire.

• 3. Pour les établissements modulaires ou multistandard à la conception conformes à un modèle « type » d'un fabricant ou pour les établissements sans aménagement intérieur, le registre de sécurité peut être délivré par le préfet sans la visite de l'établissement par la commission de sécurité.

Toutes les configurations prévues par le fabricant sont décrites dans le dossier adressé au préfet conformément à l'annexe I.
Le récépissé de dépôt du dossier accompagné de l'avis technique favorable formulé par un organisme agréé de vérification technique CTS vaut registre de sécurité provisoire.

• 4. Dans un délai ne dépassant pas un mois après la première implantation, le préfet attribue un numéro d'identification à l'établissement et retourne le registre de sécurité à l'organisme agréé de vérification technique CTS ayant fait la demande.

Pour Paris, la demande de registre de sécurité est adressée au préfet de Police.`,
                            type: "administration"
                        },
                        {
                            id: "cts4",
                            numero: "Article CTS 4",
                            titre: "Agrément des organismes de vérification technique CTS",
                            contenu: `• 1. Les organismes de vérifications techniques candidats à l'agrément du ministre de l'intérieur pour les vérifications réglementaires des chapiteaux, tentes et structures doivent être au préalable accrédités pour cette activité en tant qu'organismes d'inspection de type A au titre de la norme NF ISO/CEI 17020 par le comité français d'accréditation ou par tout autre organisme d'accréditation équivalent signataire de l'accord multilatéral pris dans le cadre de la coordination européenne des organismes d'accréditation.

• 2. La demande d'agrément adressée au ministre de l'intérieur comprend : les informations nécessaires pour identifier le demandeur (identité du responsable ou raison sociale, numéro de KBIS, statuts, adresse, etc.) ;
– les références aux dispositions du règlement de sécurité contre les risques d'incendie et de panique dans les chapiteaux tentes et structures pour lesquels l'agrément est sollicité ;
– un document justifiant que les vérifications faisant l'objet de la demande d'agrément correspondent à la portée d'accréditation de l'organisme ;
– la liste des agences concernées par la demande d'agrément ;
– l'attestation d'examen de recevabilité du système de qualité de l'organisme ou l'attestation d'accréditation et son annexe technique délivrée par le COFRAC ou tout autre organisme d'accréditation équivalant signataire de l'accord multilatéral pris dans le cadre de la coordination européenne des organismes d'accréditation au titre de l'annexe A de la norme NF EN ISO/CEI 17020 mentionnant précisément la portée d'accréditation de l'organisme ;
– un engagement de se conformer, en cas d'agrément, aux dispositions du présent arrêté.

• 3. La demande de renouvellement d'agrément est complétée par les documents suivants :
– une liste représentative des établissements CTS vérifiés dans le cadre de l'agrément au cours des douze mois précédant la demande ;
– un commentaire qualitatif sur les enseignements techniques et juridiques que l'ensemble des vérifications a pu apporter ;
– la liste des organismes agréés de vérification CTS sous-traitants auxquels l'organisme a éventuellement fait appel.

• 4. Le retrait ou la suspension d'un domaine ou d'une partie de domaine d'accréditation peut entraîner le retrait ou la suspension de l'agrément qui lui est lié. Le retrait ou la suspension de l'accréditation délivrée au titre de la norme NF EN ISO/CEI 17020 peut entraîner le retrait ou la suspension de l'agrément dans sa totalité.

• 5. L'agrément ne peut être retiré qu'après présentation par l'organisme de vérification technique CTS de ses observations. Les décisions de retrait ou de suspension sont prises par le ministre de l'intérieur après avis de la commission centrale de sécurité.

• 6. Les décisions prises par le ministre de l'intérieur en application du présent arrêté font l'objet d'une publication au Journal officiel.

• 7. La liste des organismes de vérification technique agréés CTS par le ministre de l'intérieur est rendue publique.`,
                            type: "administration"
                        },
                        {
                            id: "cts5",
                            numero: "Article CTS 5",
                            titre: "Implantation",
                            contenu: `• 1. Généralités Les établissements doivent être implantés sur des aires ne présentant pas de risques notamment d'inflammation rapide et être éloignés des voisinages dangereux.
Les établissements recevant plus de 700 personnes ne doivent pas se trouver distants de plus de 200 mètres d'un point d'eau assurant un débit minimal de 60m3/heure pendant une heure au moins. Si ces conditions ne peuvent être remplies, un service de sécurité incendie disposant des moyens hydrauliques suffisants est mis en place.

Ils doivent être desservis par des voies d'accès et des passages libres suivant les dispositions ci-après :

a) Etablissements recevant de 51 à 300 personnes Un passage libre à l'extérieur de 1m80 de large minimum doit être aménagé sur la moitié au moins du pourtour de l'établissement. Il doit être situé à moins de 60 mètres de la voie publique et lui être relié par un passage de 1m80 permettant le passage du dévidoir des sapeurs-pompiers.

b) Etablissements recevant de 301 à 1500 personnes Un passage libre à l'extérieur de 3 mètres de large minimum doit être aménagé sur la moitié au moins du pourtour de l'établissement. Il doit être relié à la voie publique par une voie d'accès de 3 mètres de large minimum, avec possibilité de demi-tour des engins de secours.

c) Etablissements recevant plus de 1500 personnes Un passage libre à l'extérieur de 3 mètres de large minimum doit être aménagé sur la moitié au moins du pourtour de l'établissement. Il doit être relié à la voie publique par deux voies d'accès, si possible opposées, de 7 mètres de wide minimum.

Les passages libres peuvent se situer sous les systèmes d'ancrage sous réserve qu'il n'y ait pas d'obstacle à la circulation des matériels et engins des sapeurs-pompiers. Ils doivent être suffisamment éclairés en cas d'exploitation nocturne et ne pas comporter de stationnement de véhicules.

• 2. Implantations particulières

a) Etablissement accolé à un bâtiment
Un établissement itinérant peut être accolé à un bâtiment sous réserve que les conditions d'accessibilité des secours à ce bâtiment soient maintenues et que la moitié des dégagements du bâtiment reste indépendante de l'établissement itinérant.

b) Implantation en terrasse
Un établissement itinérant, quelle que soit sa surface, peut être implanté sur la terrasse d'un bâtiment sous réserve que :
– la terrasse soit accessible aux échelles des sapeurs-pompiers ou par tout autre dispositif reconnu équivalent par la commission compétente ;
– au minimum, la moitié de la surface de la terrasse dont une bande de 1m80 de large sur toute la longueur de la façade du bâtiment bordant la voie d'accès des secours reste libre de tout aménagement ;
– la capacité du bâtiment à supporter les surcharges apportées soit vérifiée par un organisme agréé ;
– les dégagements et les issues sur l'extérieur de l'ensemble ainsi créés soient suffisants en nombre et en largeur ;
– la diffusion de l'alarme du bâtiment soit étendue à l'établissement itinérant ;
– soit installé un anémomètre, relié à un dispositif permettant d'informer à tout moment l'exploitant sur la vitesse du vent.

c) Implantation dans un espace clos par des constructions
Un établissement itinérant peut être implanté dans un espace clos par des constructions sous réserve que : les dispositions du •1 soient respectées ;
– les conditions d'accessibilité des secours et d'évacuation des occupants des bâtiments ne soient pas aggravées.`,
                            type: "implantation"
                        },
                        {
                            id: "cts6",
                            numero: "Article CTS 6",
                            titre: "Matières et produits dangereux",
                            contenu: `Il est interdit d'entreposer ou d'utiliser, sauf pour la vente et l'exposition, des matières et substances dangereuses au sens de l'arrêté du 20 avril 1994 modifié relatif à la déclaration, la classification, l'emballage et l'étiquetage des substances.

Il est également interdit d'effectuer des travaux dangereux pendant la présence du public.

Toute activité comprenant l'emploi d'artifices ou de flammes doit faire l'objet d'un examen spécial de la commission de sécurité ; elle ne peut être autorisée que si des mesures de sécurité, appropriées aux risques, sont prises.

(1) Tels que définis dans la nomenclature des installations classées pour la protection de l'environnement (art. 2 de la loi n° 76-663 du 19 juillet 1976 (Journal Officiel du 20 juillet 1976)).`,
                            type: "sécurité"
                        }
                    ]
                },
                {
                    id: "s1-2",
                    titre: "SECTION II : CONSTRUCTION",
                    articles: [
                        {
                            id: "cts7",
                            numero: "Article CTS 7",
                            titre: "Installation – Résistance aux intempéries et risques divers",
                            contenu: `•1. Tous les établissements doivent être conçus et installés pour rester stables sous les effets simultanés d'un vent normal (au sens des règles NV 1965) correspondant à une pression dynamique de base de 0,47 KN par mètre carré, et d'une surcharge de neige de 0,1 KN par mètre carré en projection horizontale.

Pour l'application et par simplification (liées aux conditions d'exploitation) des règles NV 1965 il y a lieu de prendre en compte les éléments suivants :

a) La pression dynamique de base normale de 0,47 KN par mètre carré est indépendante du lieu d'implantation de la construction ;

b) Il n'est pas envisagé de pression dynamique de base extrême. Cette pression dynamique de base normale est susceptible de variation en fonction de la hauteur de la construction, selon les règles NV précitées ;

c) Le calcul est fait pour un site dit normal (ks = 1) ;

d) Aucun effet de masque n'est pris en compte ;

e) Le coefficient de majoration dynamique est égal à 1,25, sauf justification contraire apportée par le calcul ou l'expérimentation.
Les sollicitations dans les éléments de construction (efforts normaux N, tranchants T et moments fléchissants M) calculées sous les charges permanentes, climatiques et autres, sont affectées des coefficients de pondération (ou facteurs de charges, ou coefficients de sécurité) indiqués dans les règlements particuliers du matériau considéré (CM 66 – AL 76…).

•2. L'établissement doit être évacué :
– soit si la précipitation de neige dépasse 4 cm dans la mesure où l'accumulation n'a pu être évitée sur la couverture (par chauffage, déblaiement…) ;
– soit si le vent normal dépasse 100 km/h (ou une valeur supérieure prise en compte lors du calcul de résistance) ;
– soit en cas de circonstances exceptionnelles pouvant mettre en péril la sécurité du public.

•3. Pour les établissements existants il appartient aux propriétaires et/ou aux exploitants d'indiquer la vitesse maximum du vent au-delà de laquelle il est nécessaire de procéder à l'évacuation du public compte tenu notamment de la résistance de la toile. Cette valeur doit être portée dans l'extrait du registre de sécurité.`,
                            type: "construction"
                        },
                        {
                            id: "cts8",
                            numero: "Article CTS 8",
                            titre: "Ossature et enveloppe",
                            contenu: `•1. L'ossature constituant la structure rigide de l'établissement (mâts, potences, cadres, câbles, etc.), ainsi que les dispositifs spéciaux éventuels de protection, doit permettre, en cas d'affaissement de la couverture, le maintien de volumes suffisants pour assurer, en toutes circonstances, l'évacuation du public.

•2. La couverture, la double couverture intérieure éventuelle et la ceinture de l'établissement doivent être réalisées en matériaux de catégorie M 2 dont le procès-verbal de classement en réaction au feu ne comporte pas de limite de durabilité (1).

Les matériaux ne figurant pas sur la liste en annexe III du présent chapitre sont justiciables des épreuves de vieillissement accéléré définies au chapitre II de l'annexe 22 de l'arrêté portant classification des matériaux de construction (2).

Des bandes transparentes en matériaux de catégorie M 3 sont admises si cet aménagement n'entraîne pas une diminution de la résistance mécanique de l'enveloppe et si l'ensemble des conditions suivantes sont réalisées :
– la bande transparente se trouve d'une part, à 0,50 mètre au moins de la partie supérieure de la ceinture (ou de l'élément constituant la couverture), d'autre part, à 0,50 mètre au moins au-dessus de sol ;
– la partie supérieure de la bande ne s'élève pas à plus de 2,50 mètres du niveau du sol ;
– la longueur d'une bande n'excède pas 5 mètres, chaque élément transparent étant distant de 0,50 mètre au moins d'un autre élément transparent ;
– la longueur totale des panneaux comportant des bandes transparentes ne dépasse pas le demi-périmètre de l'établissement.

(1) La preuve du classement en réaction au feu du matériau peut être apportée :
– soit par le marquage "NF -Réaction au feu" attribué par l'Association française de normalisation (AFNOR) ;
– soit par la présentation d'un procès-verbal de réaction au feu (établi par un laboratoire agréé par le ministre de l'intérieur), complétée par la gravure indélébile dans le tissu ou dans les soudures d'assemblage du terme M 2, suivi de la marque du fabricant du tissu (Arrêté du 10 juillet 1987) "et de la référence commerciale du produit" (Arrêté du 22 novembre 2004) « et d'un certificat établi par le confectionneur de l'enveloppe souple attestant qu'il en a réalisé tous les éléments avec une toile correspondant au procès-verbal de réaction au feu ; ce certificat est annexé au registre de sécurité »
(2) Arrêté du 30 juin 1983 (Journal officiel du 1er décembre 1983).

•3. En cas de contestations relatives au classement en réaction au feu des matériaux utilisés, les bureaux de vérifications visés à l'article CTS 4, ainsi que les commissions consultatives départementales de la protection civile, peuvent effectuer (ou faire effectuer) des prélèvements.

Toutefois les matériaux justifiant de la marque de qualité "NF – Réaction au feu" sont dispensés de ces prélèvements.

•4. Toutes dispositions doivent être prises pour que les câbles de contreventement situés à une hauteur inférieure à 2 mètres au-dessus des emplacements accessibles au public ne puissent pas constituer un risque pour les personnes (protection par gaine, signalisation…).`,
                            type: "construction"
                        },
                        {
                            id: "cts9",
                            numero: "Article CTS 9",
                            titre: "Numéro d'identification",
                            contenu: `• 1. Le numéro d'identification, qui correspond également au numéro du registre de sécurité, est délivré par le préfet, ou le préfet de police pour Paris, lors de la procédure de délivrance du registre de sécurité visée à l'article CTS 3.

Le numéro d'identification comprend : une lettre : C pour chapiteau, T pour tente, S pour structure et SE pour structure à étage ;  
2 ou 3 chiffres correspondant au numéro du département ;  
4 chiffres correspondant à l'année de délivrance de l'attestation de conformité ;  
3 chiffres correspondant au numéro de série unique dans l'année de délivrance.  
Exemple : S – 972 – 2009 – 002.

• 2. Le numéro d'identification doit être apposé sur la toile de manière visible et permanente à l'intérieur et à l'extérieur sur chaque panneau formant la couverture, la double couverture et la ceinture de l'établissement. Il doit également figurer sur les principaux éléments de structure de l'établissement. Cette disposition ne s'oppose pas à la présence éventuelle de plusieurs numéros pour un même établissement.`,
                            type: "administration"
                        }
                    ]
                },
                {
                    id: "s1-3",
                    titre: "SECTION III – DEGAGEMENTS",
                    articles: [
                        {
                            id: "cts10",
                            numero: "Article CTS 10",
                            titre: "Sorties",
                            contenu: `• 1. Le nombre et la largeur des sorties de l'établissement sont déterminés en fonction de l'effectif total admissible :

a) De 50 à 200 personnes :  
– par deux sorties ayant chacune une largeur de 1,40 mètre ;

b) De 201 à 500 personnes :  
– par deux sorties ayant chacune une largeur de 1,80 mètre ;

c) Plus de 500 personnes :  
– par deux sorties, ayant chacune une largeur de 1,80 mètre, augmentées d'une sortie complémentaire par 500 personnes (ou fraction de 500 personnes) au-dessus des 500 premières, l'ensemble des largeurs des sorties augmentant de 3 mètres par fraction.

• 2. S'il existe des portes, celles-ci doivent pouvoir s'ouvrir dans le sens de l'évacuation et être signalées en lettres blanches sur fond vert ;  
Lorsqu'il n'existe pas de porte, l'encadrement des sorties doit être matérialisé, tant à l'intérieur qu'à l'extérieur, par une bande verte (ou d'une couleur contrastant avec le fond de toile) d'une largeur minimale de 0,20 mètre. Les pans de toile fermant ces sorties peuvent être baissés mais non condamnés.

Dans tous les cas, les issues doivent pouvoir s'ouvrir par une manœuvre simple et facile. Les sorties doivent être signalées et visibles de jour, comme de nuit, de l'intérieur comme de l'extérieur.  

• 3. Si des sorties d'un établissement sont rendues inutilisables du fait d'une activité particulière elles ne doivent pas être visibles du public. Cette disposition ne doit pas cependant avoir pour effet de diminuer le nombre et la largeur des dégagements correspondant à l'effectif du public admis dans l'établissement pour cette activité particulière.`,
                            type: "sécurité"
                        },
                        {
                            id: "cts11",
                            numero: "Article CTS 11",
                            titre: "Circulations",
                            contenu: `• 1. La distance maximale, mesurée suivant l'axe des circulations (dégagements, allées, pistes, vomitoires, escaliers, etc.), que le public doit parcourir pour atteindre une sortie ne doit pas dépasser 30 mètres.

Toutefois, cette distance est portée à 40 mètres pour les expositions. En ce qui concerne les autres activités, la distance de 40 mètres peut également être autorisée par la commission consultative départementale de la protection civile, de la sécurité et l'accessibilité après examen sur plan des aménagements intérieurs.

•2. Dans les établissements comportant des rangées de sièges, ceux-ci doivent être disposés de manière à former des ensembles desservis par des circulations ayant une largeur minimale de 1,20 mètre. Les sièges en bordure des circulations doivent être alignés, ou tout au moins ne pas former de redents susceptibles d'accrocher les personnes évacuant l'établissement. Un espace de 0,30 mètre doit être aménagé entre les rangées de sièges pour permettre une évacuation facile du public.

•3. Des circulations principales, de 6 mètres de longueur au moins, doivent être prévues en face de chaque sortie. Les poteaux de tour et leurs pinces de fixation ne sont pas considérés comme des obstacles sous réserve que ces pinces :
– d'une part, soient protégées ;
– d'autre part, soient situées dans l'axe des sorties lorsqu'elles sont implantées devant ces sorties.
La largeur de ces circulations doit être égale à celle des sorties correspondantes.

•4. Les tentures sont interdites en travers ou le long des circulations accessibles au public. Les toiles, qu'elles soient relevées ou non, ménageant des baies et faisant corps avec l'enveloppe de l'établissement ne sont pas considérées comme des tentures.`,
                            type: "sécurité"
                        }
                    ]
                },
                {
                    id: "s1-4",
                    titre: "SECTION IV – AMENAGEMENTS",
                    articles: [
                        {
                            id: "cts12",
                            numero: "Article CTS 12 – Mobilier et sièges",
                            titre: "Mobilier et sièges",
                            contenu: `•1. Les aménagements intérieurs (bars, caisses, estrades, podiums, etc.) doivent être solidement fixés au sol, ou constituer des ensembles difficiles à renverser ou à déplacer ; ils ne doivent pas diminuer la largeur des circulations et des sorties.
Ces aménagements doivent être réalisés en matériaux de catégorie M3.

•2. Les chaises et les bancs doivent être disposés par rangées comportant seize places assises au maximum entre deux circulations, l'une des dispositions suivantes devant être respectées :
– chaque siège est fixé au sol ;
– les sièges sont solidarisés par rangée, chaque rangée étant fixée au sol à ses extrémités ;
– les sièges sont solidarisés par rangée, chaque rangée étant reliée de façon rigide aux rangées voisines de manière à former des blocs difficiles à renverser ou à déplacer.

Si ces dispositions ne peuvent pas être respectés, le nombre de rangées entre deux circulations est limité à cinq et le nombre de sièges par rangée est limité à dix, la totalité des places assises de l'établissement étant constituée d'ensembles de 50 sièges.`,
                            type: "aménagement"
                        },
                        {
                            id: "cts13",
                            numero: "Article CTS 13",
                            titre: "Décoration",
                            contenu: `•1. Les éléments flottants de décoration ou d'habillage intérieurs tels que les panneaux publicitaires flottants de surface supérieure à 0,50 mètre carré, les guirlandes, les objets légers de décoration, etc., doivent être réalisés en matériaux de catégorie M1.
Les décors pour aménagements scéniques doivent être réalisés en matériaux de catégorie M 1.

Les tentures doivent être réalisées en matériaux de catégorie M2.

Les vélums éventuels doivent être réalisés en matériaux de catégorie M2. (Arrêté du 22 novembre 2004) Le procès-verbal de classement de réaction au feu doit mentionner qu'il y a eu percement.
Les vélums doivent être pourvus de dispositifs d'accrochage suffisamment nombreux, ou d'armatures de sécurité suffisamment résistantes, pour empêcher leur chute pendant la présence du public.

•2. Les revêtements de sol éventuels doivent être réalisés en matériaux de catégorie M 4. En outre, ils doivent être fixés de manière à prévenir tout risque de chute lors de la circulation des personnes.

•3. Les dispositions de l'arrêté (1) portant réglementation de l'utilisation de certains matériaux et produits dans les établissements recevant du public ne sont pas applicables aux établissements du présent type.
(1) Arrêté du 4 novembre 1975 modifié (Journal Officiel des 10 janvier 1976 et 20 janvier 1977)`,
                            type: "aménagement"
                        },
                        {
                            id: "cts14",
                            numero: "Article CTS 14",
                            titre: "Gradins, planchers, escaliers, galeries",
                            contenu: `•1. Si l'établissement comporte des gradins, ceux-ci doivent être recoupés tous les 11 mètres par un escalier d'une largeur minimale de 0,80 mètre.
Lorsqu'une extrémité d'une rangée de gradins est bordée par un élément de construction (cloison, écran, garde-corps), la rangée doit avoir une longueur maximale de 5,50 mètres.

•2. Les gradins, les planchers et les escaliers doivent être réalisés pour supporter une charge d'exploitation de 500 daN/m². Ils doivent comporter tous les éléments nécessaires à leur stabilité.

Les dessous doivent être rendus inaccessibles au public ; ils ne doivent pas servir de rangement de matériel, de dépôt, de stockage… Ils doivent être maintenus en permanence en parfait état de propreté.

•3. S'il existe des galeries, des garde-corps doivent être disposés de manière à éviter la chute des personnes.

•4. L'effectif maximal du public admis sur les gradins est déterminé comme suit :
– soit le nombre de personnes assises à des places numérotées ;
– soit le nombre de personnes assises à des emplacements non numérotés à raison de 1 personne par 0,50 mètre linéaire.`,
                            type: "construction"
                        }
                    ]
                },
                {
                    id: "s1-5",
                    titre: "SECTION V – INSTALLATIONS DE CHAUFFAGE OU DE CUISSON",
                    articles: [
                        {
                            id: "cts15",
                            numero: "Article CTS 15",
                            titre: "Conditions d'emploi",
                            contenu: `• 1. Seuls sont autorisés à l'intérieur des établissements les appareils de chauffage sans combustion (échangeurs, mélangeurs, générateurs électriques, etc.).
Les générateurs de chaleur à combustion doivent être situés à l'extérieur de l'établissement et à 5 mètres de celui-ci.
Si les générateurs sont à air puisé, ils doivent être à échangeur ; leur conduit de raccordement doit être réalisé en matériaux de catégorie M2.
Si la puissance utile totale installée ne dépasse pas 70 kW, le ou les appareils peuvent être accolés à la paroi extérieure de l'établissement sous réserve que celle-ci soit protégée par un écran réalisé en matériaux incombustibles sur 0,50 mètre au moins autour du ou des générateurs.
Si la puissance utile totale est supérieure à 70 kW le ou les appareils peuvent être situés à 3 mètres de la paroi extérieure de l'établissement sous les réserves suivantes :
– il existe un écran réalisé en matériaux incombustibles sur un mètre au moins autour du ou des générateurs ;
– il existe un clapet coupe-feu 1/2 heure situé dans le conduit, à déclenchement thermique fonctionnant à 70 °C ;
– le conduit de raccordement est réalisé en matériaux de catégorie M2.

• 2. Les appareils de cuisson ou de remise en température sont interdits à l'intérieur des chapiteaux, tentes et structures. Toutefois, à titre exceptionnel, des dérogations peuvent être accordées après avis de la commission de sécurité.

• 3. Les véhicules ou conteneurs spécialisés, destinés à la cuisson ou à la remise en température des aliments dans les établissements conçus pour la restauration sont autorisés à l'intérieur dans les conditions déterminées à l'article CTS 18.

• 4. Les véhicules ou conteneurs spécialisés, destinés à la cuisson ou à la remise en température existants à la date de modification du présent article peuvent conserver le bénéfice des conditions définies ci-dessous :

a) Les appareils de cuisson ou de remise en température sont conformes aux dispositions de l'article GC 3 et ils sont entretenus périodiquement ;

b) Ces appareils sont situés à une distance minimale de deux mètres par rapport à la zone accessible au public ;

c) Le véhicule ou les conteneurs doivent être situés à une distance minimale d'un mètre de l'enveloppe de l'établissement, de tout rideau de partition et de tout élément participant à la structure ;

d) Les appareils visés au a ne peuvent être alimentés que par le gaz ou l'électricité ;

e) Chaque véhicule ou conteneur spécialisé doit être équipé d'un dispositif d'arrêt d'urgence de son alimentation énergétique. Ce dispositif doit être situé à l'extérieur, à proximité de la porte d'accès, facilement accessible, bien signalé et hors de portée du public ;

f) L'alimentation en gaz des véhicules et conteneurs spécialisés doit s'effectuer à partir de récipients d'hydrocarbures liquéfiés.
L'utilisation de ces bouteilles doit être réalisée, pour chaque véhicule ou conteneur, dans les conditions suivantes :
– elles sont limitées au nombre de deux ;
– la capacité unitaire des bouteilles est limitée à 35 kilogrammes ;
– elles sont fixées et raccordées de manière solidaire sur le module ou le conteneur spécialisé ;
– les organes de sécurité et de coupure sont protégés par un capotage ou une protection grillagée évitant les manœuvres intempestives. Le changement et le raccordement des bouteilles doivent s'effectuer hors de la présence du public ;

g) Bloc de cuisine du véhicule :
– les parois intérieures et les revêtements éventuels doivent être réalisés respectivement en matériaux M0 et M2 ;
– les ouvertures latérales sont autorisées à condition qu'elles comportent en partie haute une retombée verticale de 0,30 mètre ;
– les appareils de cuisson ou de remise en température doivent être fixés solidement aux parois ;
– une extraction d'air vicié, des buées ou des graisses débouchant à l'extérieur de l'établissement doit être réalisée au moyen d'un conduit en matériaux M0 et d'un extracteur de ventilation répondant aux dispositions de l'article CH 43 (• 3) ; – le conduit d'extraction doit être implanté de façon telle que la toile ne risque pas d'échauffement dangereux ; de plus il doit être nettoyé régulièrement ;

h) Les installations électriques doivent être conformes à la norme française NF.C.15.100 ;

i) La zone de cuisson doit comporter deux extincteurs adaptés aux risques présentés et facilement accessibles ;

j) Les appareils de cuisson ou de remise en température sont soumis également aux dispositions des articles CTS 3, CTS 35 et CTS 36. Dans le cas où l'ensemble des prescriptions ci-dessus ne peut être réalisé, le véhicule ou les conteneurs doivent être situés à l'extérieur de l'établissement et à une distance minimale de 5 mètres. Ces dispositions ne s'opposent pas à l'installation d'une tente de cuisine, réalisée obligatoirement en matériaux de catégorie M2 et reliée à l'établissement.

• 5. Le stockage éventuel de récipients d'hydrocarbures liquéfiés doit être implanté de façon telle qu'il ne puisse gêner ni l'évacuation du public, ni l'intervention des secours.

Il doit être situé à une distance minimale de 3 mètres de l'établissement et il est limité à 210 kilogrammes par emplacement. Une distance minimale de 10 mètres est imposée entre deux emplacements.`,
                            type: "sécurité"
                        }
                    ]
                },
                {
                    id: "s1-6",
                    titre: "SECTION VI – INSTALLATIONS ELECTRIQUES",
                    articles: [
                        {
                            id: "cts16",
                            numero: "Article CTS 16",
                            titre: "Généralités",
                            contenu: `•1. Les installations électriques comprennent :

a) Les installations propres à l'établissement qui doivent être alimentées à partir d'un tableau électrique tel que ceux définis dans l'article CTS 17 ;

b) Les installations ajoutées par les utilisateurs et qui sont alimentées :
– soit à partir du ou des tableaux définis à l'article CTS 17 ;
– soit à partir d'un tableau indépendant de celui propre à l'établissement.

•2. Les installations électriques doivent être conformes aux normes homologuées les concernant et notamment à la norme NF C 15-100.
Ces installations doivent être compatibles avec le schéma des liaisons à la terre des diverses sources par lesquelles elles sont susceptibles d'être alimentées. Quel que soit le schéma des liaison terre, sauf le schéma TNC, non autorisé, tous les circuits doivent être protégés individuellement ou par groupe, par des dispositifs à courant différentiel-résiduel. Les dispositifs amont à moyenne sensibilité doivent être du type S. Dans le cas du schéma IT, un dispositif à courant différentiel-résiduel doit être installé sur chaque circuit terminal. En outre, chaque canalisation électrique doit comporter un conducteur de protection. Le réseau général de protection doit être relié à une prise de terre.

•3. Lorsque les installations sont alimentées par un (ou plusieurs) groupe(s) électrogène(s), le point neutre du générateur ou, dans le cas où celui-ci ne serait pas accessible, l'extrémité d'un des enroulements, doit être relié à la masse du générateur d'une part, au conducteur principal de protection d'autre part.

•4. Les schémas des installations électriques propres à l'établissement doivent être annexés au registre de sécurité.`,
                            type: "électricité"
                        },
                        {
                            id: "cts17",
                            numero: "Article CTS 17",
                            titre: "Installations propres à l'établissement",
                            contenu: `•1. Le tableau électrique général et les tableaux divisionnaires éventuels doivent être dans des coffrets ou des armoires fermés à clé, fixés à des éléments stables. Le tableau général doit être clairement identifié.
•2. Les parties d'installation situées en amont du tableau général doivent être réalisées par emploi de matériel de classe II ou par isolation équivalente.`,
                            type: "électricité"
                        },
                        {
                            id: "cts18",
                            numero: "Article CTS 18",
                            titre: "Installations ajoutées par les utilisateurs",
                            contenu: `•1. Les tableaux des installations ajoutées par les utilisateurs doivent être placés dans des coffrets ou des armoires fermés à clé, fixés à des éléments stables ; les circuits alimentés à partir de ces tableaux doivent être protégés dans tous les cas par des dispositifs de protection à courant différentiel-résiduel à haute sensibilité.

•2. Les parties d'installations situées en amont des tableaux qui sont alimentés par un branchement indépendant doivent respecter les dispositions du • 2 de l'article CTS 17.`,
                            type: "électricité"
                        },
                        {
                            id: "cts19",
                            numero: "Article CTS 19",
                            titre: "Installations de sonorisation, guirlandes électriques",
                            contenu: `•1. Les circuits alimentant les matériels de sonorisation doivent être protégés à leur origine par des dispositifs de protection à courant différentiel-résiduel à haute sensibilité.

•2. Les guirlandes électriques doivent répondre aux dispositions de la norme NF EN 60598-2-20 et être installées de manière à ne pas faire obstacle à la circulation du public.`,
                            type: "électricité"
                        },
                        {
                            id: "cts20",
                            numero: "Article CTS 20",
                            titre: "Prises de courant et canalisations",
                            contenu: `Les prises de courant alimentant les canalisations mobiles doivent être disposées de manière que ces canalisations ne puissent pas faire obstacle à la circulation du public. La longueur des canalisations mobiles doit être aussi réduite que possible ; les câbles souples qui les constituent doivent être de la catégorie C 2. Les circuits correspondants doivent être protégés par des dispositifs de protection à courant différentiel-résiduel à haute sensibilité.`,
                            type: "électricité"
                        }
                    ]
                },
                {
                    id: "s1-7",
                    titre: "SECTION VII – ECLAIRAGE",
                    articles: [
                        {
                            id: "cts21",
                            numero: "Article CTS 21",
                            titre: "Éclairage normal",
                            contenu: `•1. L'éclairage normal doit être assuré par des luminaires installés à poste fixe ou suspendus d'une façon sûre. Les appareils d'éclairage ne doivent pas faire obstacle à la circulation du public ; leur partie inférieure doit être placée à une hauteur minimale de 2,25 mètres au-dessus des emplacements accessibles au public.

•2. L'installation électrique doit être conçue de manière que la défaillance d'un foyer lumineux, ou la coupure d'un des circuits terminaux qui l'alimente, ne prive pas intégralement d'éclairage normal les emplacements accessibles au public. En conséquence, l'installation de l'éclairage normal doit être alimentée par au moins deux circuits protégés sélectivement contre les surintensités et contre les contacts indirects.`,
                            type: "éclairage"
                        },
                        {
                            id: "cts22",
                            numero: "Article CTS 22",
                            titre: "Eclairage de sécurité",
                            contenu: `•1. Afin de permettre l'évacuation du public et de faciliter l'intervention des secours, un éclairage de sécurité, assurant les fonctions d'évacuation et d'ambiance ou anti-panique, doit être installé.
Cet éclairage doit être assuré
– soit par des blocs autonomes d'éclairage de sécurité ;
– soit par une source centralisée ;
– soit par la combinaison d'une source centralisée et de blocs autonomes.

•2. L'éclairage d'évacuation doit permettre à toute personne d'accéder à l'extérieur de l'établissement à l'aide foyers lumineux assurant la signalisation des issues. L'éclairage d'ambiance doit être basé sur un flux lumineux minimal de cinq lumens par mètre carré calculé en fonction de la surface des circulations. Il est admis que cet éclairage reste à l'état de veille pendant la présence du public à condition de passer automatiquement à l'état de fonctionnement en cas de défaillance de l'éclairage normal. Les appareils assurant le balisage peuvent contribuer à l'éclairage d'ambiance ; leur flux lumineux réel est alors pris en considération en déduisant les pertes de flux dues à la présence des transparents de signalisation.`,
                            type: "éclairage"
                        },
                        {
                            id: "cts23",
                            numero: "Article CTS 23",
                            titre: "Blocs autonomes d'éclairage de sécurité",
                            contenu: `•1. L'éclairage de sécurité par blocs autonomes doit être réalisé par des appareils conformes à la norme de la série NF C 71-800 et admis à la marque NF AEAS ou faire l'objet de toute autre certification de qualité en vigueur dans un Etat membre de la Communauté économique européenne. Cette certification devra alors présenter des garanties équivalentes à celle de la marque NF AEAS, notamment en ce qui concerne l'intervention d'une tierce partie indépendante et les performances prévues par les normes correspondantes.

•2. Le flux lumineux assignés d'un bloc autonome doit être au moins égal à 45 lumens pendant la durée de fonctionnement assignée. Les appareils doivent être alimentés en dérivation sur les circuits de l'éclairage normal correspondant, en aval du dispositif de protection et en amont du dispositif de commande de chaque circuit.

•3. Un système centralisé de télécommande pour la mise en l'état de repos doit être installé.`,
                            type: "éclairage"
                        },
                        {
                            id: "cts24",
                            numero: "Article CTS 24",
                            titre: "Source centralisée de sécurité",
                            contenu: `•1. L'éclairage de sécurité par source centralisée doit comporter une source de sécurité, un tableau de sécurité et des circuits d'éclairage, indépendants des installations d'éclairage normal.

•2. La source de sécurité (groupe électrogène ou source centralisée constituée d'une batterie d'accumulateurs) doit assurer une autonomie minimale d'une heure.

•3. Le tableau de sécurité doit comporter les protections sélectives de chaque départ, une lampe alimentée par la source de sécurité, les dispositifs éventuels de mise en service automatique de l'éclairage de sécurité (en cas de défaillance de l'éclairage normal) et une commande permettant d'assurer cette fonction manuellement. Cette commande doit être connue d'une personne responsable, présente pendant toute la durée de l'exploitation.

Afin de limiter les conséquences d'un incident, une distance de 2 mètres minimum doit séparer le tableau de sécurité de toute autre installation électrique. A défaut, cette distance peut être réduite à 0,50 mètre sous réserve que le tableau de sécurité soit totalement enfermé dans un coffret ou une armoire dont les parois sont réalisées en matériaux de catégorie M 0.

•4. Les circuits, doivent être au nombre de deux au moins pour chacune des fonctions (ambiance et évacuation). Ils doivent être réalisés en câbles de la catégorie C 2 et ne doivent comporter aucune dérivation en aval du tableau de sécurité.

•5. Lorsque la source centrale est constituée par un groupe moteur thermique-générateur, celui-ci peut être arrêté en position d'attente sous réserve de pouvoir prendre automatiquement en charge la totalité des circuits dans un délai maximal de 15 secondes après la défaillance de la source normale. Si le groupe est à l'arrêt pendant la présence du public, la signalisation des issues doit être assurée par des blocs autonomes d'éclairage de sécurité.

Lorsque la source centralisée est constituée d'une batterie d'accumulateurs, celle-ci doit être maintenue en charge par un chargeur à régulation automatique permettant de restituer aux accumulateurs 80 % de leur capacité nominale en moins de 12 heures.`,
                            type: "éclairage"
                        }
                    ]
                },
                {
                    id: "s1-8",
                    titre: "SECTION VIII – EQUIPEMENTS SPECIAUX",
                    articles: [
                        {
                            id: "cts25",
                            numero: "Article CTS 25",
                            titre: "Installations techniques particulières",
                            contenu: `•1. Lorsque des installations techniques sont aménagées dans les établissements, aux fins de créer des effets spéciaux (lumières, fumées, brouillards artificiels, etc.), elles doivent être conformes aux notes techniques du ministre de l'intérieur et aux normes les concernant. Notamment, la norme NF EN 60825 pour les appareils à laser.

•2. Une attention spéciale doit être portée à l'éloignement des équipements spéciaux (générateurs de fumée, projecteurs lasers, tables de mixage, etc.) par interposition d'écrans adaptés ou par mise hors de portée du public.`,
                            type: "technique"
                        }
                    ]
                },
                {
                    id: "s1-9",
                    titre: "SECTION IX – MOYENS DE SECOURS",
                    articles: [
                        {
                            id: "cts26",
                            numero: "Article CTS 26",
                            titre: "Moyens d'extinction",
                            contenu: `•1. La défense contre l'incendie doit être assurée :
– par des extincteurs portatifs à eau pulvérisée, de 6 litres minimum, bien visibles, facilement accessibles et rapidement décrochables, à raison d'un appareil par sortie ;
– par des extincteurs appropriés aux risques particuliers.

•2. Des personnes, spécialement désignées par l'organisateur, doivent être entraînées à la mise en œuvre des moyens d'extinction.`,
                            type: "sécurité"
                        },
                        {
                            id: "cts27",
                            numero: "Article CTS 27",
                            titre: "Service de sécurité incendie",
                            contenu: `•1 – la composition du service de sécurité incendie, assurant la surveillance des établissements, est fixée comme suit :

a) Etablissements recevant 2 500 personnes au plus ;
– par des personnes instruites en sécurité incendie et fournies par l'organisateur ou, à défaut,
– par un ou deux agents de sécurité incendie fournis par l'organisateur ;

b) Etablissements recevant plus de 2 500 personnes :
– par des agents de sécurité incendie fournis par l'organisateur avec un minimum de deux ;

c) Etablissements recevant plus de 2 500 personnes et comportant un espace scénique :
– par des agents de sécurité incendie fournis par l'organisateur avec un minimum de trois ou, à défait,

•2 – Ce service est chargé de l'organisation générale de la sécurité dans l'établissement et a notamment pour missions celles prévues au paragraphe 1 de l'article MS 46, à l'exception de la tenue à jour du registre de sécurité.
La qualification requise pour les agents de sécurité incendie est fixée à l'article MS 48.

•3 – La surveillance peut être assurée par des sapeurs-pompiers d'un service public de secours et de lutte contre l'incendie, conformément aux dispositions de l'article MS 49, après avis de la commission consultative départementale de sécurité et d'accessibilité.`,
                            type: "sécurité"
                        },
                        {
                            id: "cts28",
                            numero: "Article CTS 28",
                            titre: "Alarme",
                            contenu: `•1. L'alarme doit pouvoir être donnée dans tous les établissements par un moyen de diffusion sonore.

•2. Dans les établissements recevant plus de 700 personnes, la diffusion de l'alarme générale doit être obtenue à partir d'un système de sonorisation permettant une diffusion verbale audible de tout point de l'établissement. Ce système peut être :
– soit un dispositif portatif comportant une source d'alimentation autonome (mégaphone par exemple)
– soit le dispositif de sonorisation de l'établissement à condition que son alimentation soit secourue par une source de sécurité qui peut être commune à l'éclairage de sécurité.

•3. Dans tous les cas, le fonctionnement de l'alarme générale doit être précédé de l'arrêt de la diffusion sonore et, dans la mesure du possible, du rétablissement de l'éclairage normal.`,
                            type: "sécurité"
                        },
                        {
                            id: "cts29",
                            numero: "Article CTS 29",
                            titre: "Alerte",
                            contenu: `•1. La liaison avec les sapeurs-pompiers doit être réalisée par téléphone urbain dans les établissements (ou à proximité des établissements) recevant plus de 700 personnes.

•2. Des consignes, affichées bien en vue, doivent indiquer :
– l'emplacement de l'appareil téléphonique ;
– le numéro d'appel des sapeurs-pompiers ;
– l'adresse du centre de secours de premier appel ;
– les dispositions immédiates à prendre en cas d'incendie.`,
                            type: "sécurité"
                        }
                    ]
                },
                {
                    id: "s1-10",
                    titre: "SECTION X – EXPLOITATION",
                    articles: [
                        {
                            id: "cts30",
                            numero: "Article CTS 30",
                            titre: "Registre de sécurité",
                            contenu: `• 1. Le registre de sécurité de l'établissement délivré par le préfet possède le même numéro d'identification que l'établissement auquel il se rapporte. Il est tenu à jour par le propriétaire. Le contenu de ce document est détaillé dans l'annexe I du présent chapitre. Il doit faire apparaître clairement l'ensemble des caractéristiques de l'établissement ainsi que les documents complémentaires de contrôle.

• 2. Des extraits de registre, dont le contenu figure en annexe II, sont délivrés aux organisateurs d'une manifestation ou d'un spectacle pour une implantation donnée. Ces derniers doivent les remplir et les parapher.`,
                            type: "administration"
                        },
                        {
                            id: "cts31",
                            numero: "Article CTS 31",
                            titre: "Demande d'implantation – attestation de bon montage – ouverture au public",
                            contenu: `• 1. Avant toute implantation dans une commune, l'organisateur de la manifestation ou du spectacle doit obtenir l'autorisation du maire. Au préalable, il doit faire parvenir au maire au moins un mois avant la date d'ouverture au public les documents suivants :
– l'extrait de registre de sécurité figurant en annexe II, hors le cas de la première implantation ;
– un descriptif des modalités d'implantation de l'établissement, le type d'activité exercée ;
– un plan des aménagements intérieurs ;
– un descriptif des installations techniques.

• 2. Après chaque montage et avant la première ouverture au public de l'établissement, une attestation de bon montage et de liaisonnement au sol figurant à l'annexe VIII doit être établie par la personne responsable du montage. Cette attestation doit mentionner l'identité de la personne qui a confié la responsabilité du montage et être tenue à la disposition de l'autorité investie du pouvoir de police par l'organisateur de la manifestation. Elle n'exonère en aucun cas le propriétaire et l'exploitant de leurs responsabilités.

• 3. Pour les établissements ayant bénéficié d'une autorisation d'implantation, le maire sollicite, s'il le juge utile, le passage de la commission de sécurité compétente avant l'ouverture au public de la manifestation.`,
                            type: "administration"
                        },
                        {
                            id: "cts31bis",
                            numero: "Article CTS 31 BIS",
                            titre: "Règles d'exploitation de l'éclairage de sécurité",
                            contenu: `• 1. Le personnel doit être instruit des manœuvres à effectuer avant chaque démontage pour assurer la mise à l'état de repos des blocs autonomes, par usage de la télécommande centralisée.

• 2. Avant l'ouverture au public, le personnel doit s'assurer que les blocs autonomes ou la source centralisée constituée d'une batterie d'accumulateurs sont chargés pour leur permettre d'alimenter l'éclairage de sécurité pendant au moins une heure.`,
                            type: "exploitation"
                        },
                        {
                            id: "cts32",
                            numero: "Article CTS 32",
                            titre: "Modifications majeures",
                            contenu: `• 1. Les modifications majeures suivantes font obligatoirement l'objet d'une nouvelle procédure de demande de registre de sécurité selon les dispositions de l'article CTS 3 :
– changement de hauteur d'un établissement ;
– changement de wideur d'un établissement ;
– changement partiel ou total de la toile de couverture d'un chapiteau ;
– acquisition d'une partie d'un établissement « existant » (d'occasion).

• 2. Les modifications mineures suivantes ne donnent pas lieu à une procédure visée à l'article CTS 3 mais à une mise à jour du registre de sécurité par le propriétaire et de l'extrait de registre par l'organisme agréé de vérification technique CTS : extension ou diminution de la longueur d'un établissement modulaire par des éléments structurels identiques au modèle type provenant du fabricant de l'établissement; remplacement à l'identique d'éléments structurels provenant du fabricant de l'établissement (modèle type) ; remplacement partiel ou total de la toile d'une tente ou d'une structure, si le procès-verbal de réaction au feu précise le classement M2 et que cette inscription figure sur la toile de manière indélébile ; détérioration ou destruction d'une partie d'un établissement modulaire monté de manière isolée du reste de l'établissement ; changement de propriétaire d'un établissement.
Dans ce cas, l'organisme agréé de vérification technique CTS est tenu d'informer, dans les plus brefs délais, le préfet du département qui a délivré le registre de sécurité de l'établissement.`,
                            type: "administration"
                        },
                        {
                            id: "cts33",
                            numero: "Article CTS 33",
                            titre: "Retrait du registre de sécurité",
                            contenu: `Le retrait du registre de sécurité est prononcé par le préfet l'ayant délivré, dans les cas suivants : destruction de l'établissement ; non exploitation définitive en ERP ; changement partiel ou total de la toile de couverture d'un chapiteau ; absence de réponse d'un propriétaire à plusieurs demandes préfectorales sur la situation administrative de l'établissement (exploitation, visites périodiques, etc.) 6 mois après la date anniversaire de la visite biennale ; anomalies graves dans l'exploitation ou l'état du matériel de l'établissement mettant en cause la sécurité des personnes. Lorsqu'un retrait de registre de sécurité a été prononcé par le préfet, le propriétaire a l'obligation d'adresser son registre de sécurité dans les plus brefs délais à la préfecture concernée.`,
                            type: "administration"
                        },
                        {
                            id: "cts34",
                            numero: "Article CTS 34",
                            titre: "Vérification périodique de l'établissement",
                            contenu: `• 1. Des vérifications techniques et documentaires sont effectuées tous les deux ans par un organisme agréé de vérification technique CTS. Elles se déroulent en présence du propriétaire ou de son représentant, chargé de la présentation du matériel. Elles font l'objet d'un rapport détaillé.

• 2. Les vérifications techniques portent sur l'état général de tout ou partie des éléments de l'établissement (toile, portiques, mâts, ossatures, mécanismes, fixations, etc.) afin de déceler des anomalies susceptibles de créer une situation dangereuse pour les personnes. Ces vérifications peuvent être réalisées quand l'établissement est démonté. Dans ce cas, le matériel est contrôlé au sol.
La nature du contrôle, point par point, en fonction de l'établissement est décrite dans les annexes VI (chapiteaux) et VII (tentes et structures).

• 3. La vérification documentaire porte sur : la gestion par le propriétaire de l'ensemble du matériel démontable composant l'établissement ; les conditions de stockage ; l'ensemble des rapports de vérifications réglementaires des installations techniques ; le suivi de la mise à jour du registre de sécurité.

• 4. La première visite est effectuée deux ans après la date de délivrance du registre de sécurité.

• 5. Lorsqu'un établissement est affecté par une période d'inexploitation, clairement justifiée par le propriétaire auprès du préfet du département qui lui a délivré le registre de sécurité, la visite périodique pourra être reportée d'autant sans dépasser 6 ans. Dans ce délai et avant toute nouvelle ouverture au public en cas de reprise d'activité, l'établissement devra être vérifié par un organisme agréé de vérification technique CTS (visite périodique) ; le registre de sécurité et l'extrait de registre seront mis à jour.`,
                            type: "contrôle"
                        },
                        {
                            id: "cts35",
                            numero: "Article CTS 35",
                            titre: "Vérification des installations techniques de l'établissement",
                            contenu: `• 1. L'ensemble des installations électriques propres à l'établissement est vérifié annuellement, en alternance, par des personnes ou des organismes agréés et par des techniciens compétents.

• 2. Les autres installations techniques (chauffage, appareils de cuisson, ventilation, etc.) propres à l'établissement doivent être vérifiées une fois tous les deux ans par des personnes ou des organismes agréés pour les familles d'inspection correspondantes.

• 3. En ce qui concerne les installations ajoutées par l'utilisateur, elles doivent être vérifiées avant l'admission du public par des personnes ou des organismes agréés par le ministère de l'intérieur pour ces familles d'inspection.

• 4. Les installations techniques (électricité, chauffage, cuisson, ventilation, etc.) de l'établissement munies de leurs vignettes respectives en cours de validité peuvent être utilisées dans des établissements différents. Les vignettes, attestant du contrôle périodique par des organismes agréés pour ces familles d'inspection, doivent être apposées sur les installations techniques de l'établissement lorsque les non conformités éventuelles ont été levées.

• 5. L'exploitant peut être mis en demeure, après avis de la commission de sécurité, de faire procéder à des vérifications techniques complémentaires par des personnes ou des organismes agréés lorsque des non-conformités sont constatées en cours d'exploitation.`,
                            type: "contrôle"
                        },
                        {
                            id: "cts36",
                            numero: "Article CTS 36",
                            titre: "Rapport de vérification périodique",
                            contenu: `• 1. Le rapport de vérification périodique doit comprendre au minimum les éléments mentionnés dans les annexes VI ou VII. Il est adressé au propriétaire de l'établissement et au préfet ayant délivré le registre de sécurité. Toute anomalie grave de nature à entraîner le retrait du registre de sécurité est signalée au préfet l'ayant délivrée.

• 2. Le propriétaire d'un CTS tient à disposition de l'organisme agréé de vérification technique CTS auquel il fait appel le registre de sécurité, l'extrait de registre et l'ensemble des rapports de vérifications et autres documents de contrôle relatifs à l'exploitation de l'établissement.`,
                            type: "administration"
                        }
                    ]
                },
                {
                    id: "s1-11",
                    titre: "SECTION XI – PETITS ETABLISSEMENTS",
                    articles: [
                        {
                            id: "cts37",
                            numero: "Article CTS 37",
                            titre: "Petits établissements",
                            contenu: `Tout établissement visé à l'article CTS 1 (• 3) doit respecter l'ensemble des dispositions suivantes : il dispose de deux sorties de 0,90 m de largeur au moins ; il doit être fixé au sol ou lesté conformément aux préconisations du fabricant ; l'enveloppe est réalisée en matériaux de catégorie au moins M2 ou C-S30. La preuve de classement est apportée soit par le marquage « NF réaction au feu » soit par la présentation d'un procès-verbal de réaction au feu complétée par la gravure indélébile dans le tissu ou dans les soudures d'assemblage du terme M2, suivi de la marque du fabricant de la toile ; les installations électriques intérieures éventuelles comportent à leur origine, et pour chaque départ, un dispositif de protection à courant différentiel-résiduel à haute sensibilité ; un certificat établi par le confectionneur de l'enveloppe souple attestant qu'il en a réalisé tous les éléments avec une toile correspondant au procès-verbal de réaction au feu.`,
                            type: "général"
                        }
                    ]
                }
            ]
        },
        {
            id: "sc2",
            titre: "SOUS CHAPITRE II - ETABLISSEMENTS DU TYPE CTS CHAPITEAUX, TENTES ET STRUCTURES A IMPLANTATION PROLONGEE",
            sections: [
                {
                    id: "s2-1",
                    titre: "SECTION I – GÉNÉRALITÉS",
                    articles: [
                        {
                            id: "cts38",
                            numero: "Article CTS 38",
                            titre: "Etablissements assujettis",
                            contenu: `Les dispositions du présent sous-chapitre sont applicables aux établissements clos et itinérants visés à l'article CTS 1 mais qui sont implantés pour une durée supérieure à six mois. Les mesures définies au sous-chapitre I sont applicables. Toutefois, certaines d'entre elles sont modifiées ou complétées suivant les dispositions des articles ci-après.`,
                            type: "général"
                        },
                        {
                            id: "cts39",
                            numero: "Article CTS 39",
                            titre: "Implantation",
                            contenu: `En aggravation des dispositions de l'article CTS 5, les véhicules ne peuvent pas être utilisés comme points d'ancrage. En outre l'établissement doit être implanté à plus de :
– Quatre mètres d'un bâtiment ou d'une autre structure si les deux établissements sont à risques courants
– Huit mètres d'un autre bâtiment ou d'une autre structure si l'un au moins des deux établissements est à risques particuliers.

Les distances sont mesurées en projection horizontale (haubans exclus). Si, exceptionnellement, dans certains cas particuliers, ces conditions ne peuvent être satisfaites, la commission de sécurité détermine les mesures d'isolement équivalentes.`,
                            type: "implantation"
                        }
                    ]
                },
                {
                    id: "s2-2",
                    titre: "SECTION II – CONSTRUCTION",
                    articles: [
                        {
                            id: "cts40",
                            numero: "Article CTS 40",
                            titre: "Ossature, enveloppe, ancrages",
                            contenu: `•1. L'exploitant doit fournir une note du constructeur ou d'une personne ou d'un organisme agréé justifiant de la stabilité mécanique de la structure qui figurera dans le registre de sécurité de l'établissement. Les câbles participant à la stabilité de la structure doivent être en acier et comporter une signalisation bien visible, afin d'éviter tout accident ;

Les ancrages doivent être réalisés au moyen de plots en béton ou toute autre solution équivalente à justifier par le calcul, ou à tester.

•2. Si des moteurs électriques sont utilisés pour le bâchage ou le débâchage de l'établissement, ils doivent être hors de portée du public. De plus les manœuvres précitées doivent avoir lieu en présence effective d'un préposé de l'établissement. Ces moteurs doivent comporter des dispositifs mettant les parties dangereuses hors de portée du public. Par ailleurs, un sectionneur condamnable à position d'ouverture, situé sur le tableau principal de l'installation, doit permettre d'interdire l'alimentation électrique du système.

•3. En aggravation des dispositions de l'article CTS 8, les bandes transparentes visées au paragraphe 2 de cet article doivent être en matériaux de catégorie M2.`,
                            type: "construction"
                        }
                    ]
                },
                {
                    id: "s2-3",
                    titre: "SECTION III – DEGAGEMENTS",
                    articles: [
                        {
                            id: "cts41",
                            numero: "Article CTS 41",
                            titre: "Circulations",
                            contenu: `En aggravation des dispositions de l'article CTS 11, paragraphe 3, les poteaux de tour et leurs pinces de fixation ne doivent pas être situés dans les circulations visées à ce paragraphe.`,
                            type: "sécurité"
                        }
                    ]
                },
                {
                    id: "s2-4",
                    titre: "SECTION IV – AMENAGEMENTS",
                    articles: [
                        {
                            id: "cts42",
                            numero: "Article CTS 42",
                            titre: "Sièges",
                            contenu: `•1. Les rangées de sièges doivent dans tous les cas être installées dans les conditions prévues à l'alinéa 1er du paragraphe 2 de l'article CTS 12.

•2. Les éléments fixes ou mobiles utilisés éventuellement pour améliorer le confort des gradins (coussins par exemple) doivent être réalisés en matériaux de catégorie M2 pour les housses et M4 pour les rembourrages.`,
                            type: "aménagement"
                        },
                        {
                            id: "cts43",
                            numero: "Article CTS 43",
                            titre: "Décors, espaces scéniques, loges, caravanes",
                            contenu: `•1. Les décors pour aménagement scéniques doivent être en matériaux de catégorie M1 en réaction au feu ou, par dérogation à l'article CTS 13, en bois naturel classé M3. Les espaces scéniques comportant des dessous sont interdits.

•2. En cas d'espace scénique intégré les dépôts de décors ou d'accessoires combustibles doivent être situés :
– soit à l'extérieur de l'établissement, à une distance de cinq mètres au moins, ou en être séparés par un écran coupe-feu de degré une heure de hauteur suffisante (ou toute autre solution reconnue équivalente par la commission de sécurité) ;
– soit à l'intérieur de l'établissement dans des locaux avec parois et plafonds coupe-feu de degré une heure avec des portes coupe-feu de degré une demi-heure. Si un rideau sépare éventuellement la zone technique ou de service de la zone accessible au public, il doit être réalisé en matériaux de catégorie M2.

•3. Les locaux d'exploitation et les loges doivent être réalisés en matériaux de catégorie M 2 ou en bois naturel de catégorie M3.

•4. Les caravanes et auto-caravanes ne peuvent être installées exceptionnellement à l'intérieur de l'établissement que si elles respectent les normes en vigueur. Toutefois, les installations de gaz et le stockage de ce dernier sont interdits à l'intérieur des véhicules précités.`,
                            type: "aménagement"
                        },
                        {
                            id: "cts44",
                            numero: "Article CTS 44",
                            titre: "Estrades, plates-formes mobiles",
                            contenu: `•1. Les éléments d'estrades réglables en hauteur peuvent ne pas être ceinturés entre eux sous réserve du respect des dispositions suivantes : – aucun matériel ou matériau ne doit être entreposé sous l'estrade ; – le volume situé sous le plancher doit être visitable et régulièrement nettoyé ; – les canalisations électriques éventuelles doivent être des canalisations préfabriquées et être installées sur support incombustible. Les estrades fixes par construction doivent respecter les dispositions de l'article AM 17.

•2. Les installations techniques spéciales installées temporairement doivent faire l'objet d'un avis favorable de la commission de sécurité.`,
                            type: "aménagement"
                        },
                        {
                            id: "cts45",
                            numero: "Article CTS 45",
                            titre: "Aménagements spéciaux",
                            contenu: `Les aménagements particuliers réalisés à l'aide de panneaux, de toile, d'écrans (en vue de l'isolation acoustique par exemple) susceptibles de nuire à l'évacuation des fumées vers la partie haute de l'établissement ou de diminuer la durée de vie des structures par accroissement de la corrosion (phénomènes de condensation) doivent respecter les mesures suivantes :

a) Les aménagements projetés doivent faire l'objet d'un avis d'une personne ou d'un organisme agréé, notamment en ce qui concerne la stabilité mécanique de l'ensemble ;

b) Les matériaux employés doivent être M 1, à l'exception des toiles qui doivent être M 2 ;

c) Les éléments de structure principaux doivent rester facilement accessibles et visibles pour le personnel qualifié chargé de leur contrôle ;

d) L'espace libre résiduel entre ces aménagements d'une part, entre ces aménagements et l'enveloppe générale de l'établissement d'autre part, ne doit pas être utilisé pour le stockage de matériaux combustibles ;

e) Un passage suffisant doit être aménagé en vue d'assurer l'évacuation des fumées vers la partie haute de l'établissement ;

f) Le contrôle des structures par une personne ou un organisme agréé doit être effectué annuellement ;

g) En outre, si les aménagements effectués ont pour effet d'abaisser la hauteur libre continue sous écran à une inférieure à quatre mètres, l'une des dispositions ci-dessous doit être observée :
– soit répartir judicieusement en partie haute et au pourtour de l'établissement des ventilateurs d'extraction assurant leur fonction pendant une heure avec des fumées à 400 °C ;
– soit réduire la distance à parcourir par le public à vingt mètres pour rejoindre une issue donnant directement sur l'extérieur ;
– soit toute autre solution jugée équivalente par la commission de sécurité.`,
                            type: "aménagement"
                        }
                    ]
                },
                {
                    id: "s2-5",
                    titre: "SECTION V – INSTALLATIONS DE CHAUFFAGE OU DE CUISSON",
                    articles: [
                        {
                            id: "cts46",
                            numero: "Article CTS 46",
                            titre: "Stockage d'hydrocarbures liquides",
                            contenu: `Le stockage aérien (extérieur) d'hydrocarbures liquides d'une quantité supérieure à cinquante litres doit être éloigné de dix mètres au moins de l'établissement et être protégé par une clôture efficace. Une cuvette de rétention d'une capacité au moins égale à la totalité des liquides inflammables stockés doit être aménagée.`,
                            type: "sécurité"
                        }
                    ]
                },
                {
                    id: "s2-6",
                    titre: "SECTION VI – ECLAIRAGE",
                    articles: [
                        {
                            id: "cts47",
                            numero: "Article CTS 47",
                            titre: "Eclairage de sécurité",
                            contenu: `En aggravation de l'article CTS 22, paragraphe 2, l'éclairage d'ambiance doit être basé sur un flux lumineux minimal de cinq lumens par mètre carré calculé en fonction de la surface totale accessible au public.`,
                            type: "éclairage"
                        },
                        {
                            id: "cts48",
                            numero: "Article CTS 48",
                            titre: "Blocs autonomes d'éclairage de sécurité",
                            contenu: `Abrogé par arrêté du 19 novembre 2001`,
                            type: "éclairage"
                        }
                    ]
                },
                {
                    id: "s2-7",
                    titre: "SECTION VII – EXPLOITATION",
                    articles: [
                        {
                            id: "cts49",
                            numero: "Article CTS 49",
                            titre: "Registre de sécurité",
                            contenu: `•1. Les dispositions de l'article CTS 30, paragraphe 2, relatives à la délivrance des extraits du registre de sécurité ne sont pas applicables.

•2. La partie II (Exploitation) du registre de sécurité (cf. annexe I prévue à l'article CTS 30, paragraphe 1) doit comporter également les documents attestant la conformité des installations aux dispositions du présent sous-chapitre.`,
                            type: "administration"
                        },
                        {
                            id: "cts50",
                            numero: "Article CTS 50",
                            titre: "Visites des commissions de sécurité",
                            contenu: `Les établissements doivent être visités par la commission de sécurité lors des extensions et, en outre, suivant la fréquence ci-dessous :
– 1ère catégorie : une fois par an ;
– 2ème catégorie : une fois tous les deux ans ;
– 3ème et 4ème catégorie : une fois tous les trois ans.`,
                            type: "contrôle"
                        }
                    ]
                }
            ]
        },
        {
            id: "sc3",
            titre: "SOUS CHAPITRE 3",
            sections: [
                {
                    id: "s3-1",
                    titre: "SECTION UNIQUE",
                    articles: [
                        {
                            id: "cts51",
                            numero: "Article CTS 51",
                            titre: "Etablissements fixes par conception",
                            contenu: `Etablissements fixes par conception Les établissements clos à couverture souple destinés à être implantés de façon permanente dès leur conception et les structures gonflables sont assujettis, en fonction du type d'activité et de l'effectif du public, aux prescriptions concernées des dispositions générales et particulières des livres Ier à III du règlement de sécurité (à l'exclusion des mesures de désenfumage). De plus, les mesures spécifiques de l'architecture textile précisées, d'une part à l'article CTS 8 (paragraphes 1, 2 et 4), complété et modifié par l'article CTS 40, et, d'autre part à l'article CTS 34 sont également applicables.`,
                            type: "général"
                        }
                    ]
                }
            ]
        },
        {
            id: "sc4",
            titre: "SOUS CHAPITRE 4 – EXPLOITATION",
            sections: [
                {
                    id: "s4-1",
                    titre: "SECTION UNIQUE",
                    articles: [
                        {
                            id: "cts52",
                            numero: "Article CTS 52",
                            titre: "Organisation générale de la sécurité",
                            contenu: `• 1. Avant chaque admission du public dans les établissements, un contrôle visuel doit être effectué par l'exploitant ou par une personne compétente qu'il a spécialement désignée. Ce contrôle doit permettre de :
– détecter un désordre manifeste dans le montage ou dans le liaisonnement au sol ;
– détecter un dysfonctionnement ou un risque particulier dans la protection des personnes contre les risques d'incendie et de panique ;
– vérifier la vacuité des passages libres et des voies d'accès des secours ;
– vérifier la présence du service de sécurité incendie.

• 2. Avant la première ouverture au public pour chaque nouvelle implantation, une inspection complémentaire aux dispositions du paragraphe 1 doit être réalisée dans les établissements dont l'effectif admissible du public est supérieur à 700 personnes. Cette inspection consiste à vérifier le montage et le liaisonnement au sol de l'établissement, à contrôler la qualification du personnel constituant le service de sécurité incendie de la manifestation et à s'assurer du respect du présent règlement.
Lorsque l'effectif admissible du public est supérieur à 700 personnes mais inférieur ou égal à 2500 personnes, cette inspection sous la responsabilité de l'exploitant est réalisée par l'une des personnes ou organismes suivants :
– un organisme agréé de vérification technique CTS ;
– une personne titulaire du certificat d'aptitude professionnelle (CAP) de monteur de structures mobiles ; une personne ayant reçu une formation reconnue dans le domaine du montage et de la sécurité incendie dispensée par des organismes agréés de vérification technique CTS ou jugés de compétence équivalente par la commission centrale de sécurité, selon le programme défini à l'annexe X ;
– une personne expérimentée dans le montage des chapiteaux, choisie parmi les employés permanents de l'établissement, reconnue compétente par l'exploitant et justifiant d'une expérience de plus d'une année dans l'assemblage et le montage du matériel inspecté ;

Pour les établissements recevant plus de 2500 personnes, cette inspection est réalisée par un organisme agréé de vérification technique CTS.

• 3. L'inspection prévue au paragraphe 2 doit faire l'objet de la rédaction d'un rapport qui prend position quant à l'opportunité d'ouvrir tout ou partie de la manifestation au public. Il est tenu à la disposition de l'autorité investie du pouvoir de police par l'exploitant.`,
                            type: "exploitation"
                        }
                    ]
                }
            ]
        },
        {
            id: "sc5",
            titre: "SOUS CHAPITRE 5 – ETABLISSEMENTS DU TYPE STRUCTURES A ETAGE",
            sections: [
                {
                    id: "s5-1",
                    titre: "SECTION I GENERALITES",
                    articles: [
                        {
                            id: "cts53",
                            numero: "Article CTS 53",
                            titre: "Etablissements assujettis",
                            contenu: `• 1. Les dispositions du présent sous chapitre ne s'appliquent qu'aux établissements itinérants, destinés par conception à être clos en tout ou partie, comportant deux niveaux au plus et possédant une couverture souple, quel que soit l'effectif du public accueilli et la durée d'implantation.

• 2. Les structures à étage peuvent abriter une ou plusieurs activités à l'exception des : – établissements sanitaires ; – locaux et espaces réservés au sommeil ; – locaux et espaces à usage de stockage ou de réserve.

• 3. Les structures à étage fixes par conception doivent respecter uniquement les dispositions des articles CTS 51 et CTS 68.`,
                            type: "structure"
                        },
                        {
                            id: "cts54",
                            numero: "Article CTS 54",
                            titre: "Calcul de l'effectif",
                            contenu: `L'effectif maximal du public est déterminé suivant le mode de calcul propre à chaque type d'activité, pour chacun des niveaux. Toutefois l'effectif maximal admissible à l'étage ne doit pas excéder une personne par mètre carré de la surface totale du niveau.`,
                            type: "général"
                        },
                        {
                            id: "cts55",
                            numero: "Article CTS 55",
                            titre: "Demande de registre de sécurité, notice de montage",
                            contenu: `• 1. Demande de registre de sécurité : Les dispositions de l'article CTS 3 s'appliquent. Le rapport de l'organisme agréé de vérification technique CTS doit porter sur la stabilité mécanique de l'ossature (montage et assemblage) pour chacune des configurations de montage prévues dans la notice du fabricant.

• 2. Registre de sécurité : les dispositions de l'article CTS 30 s'appliquent. Le fabricant ou le propriétaire doit attester que des calculs de solidité de la structure, pour les différentes configurations de montage prévues à la conception, ont été effectués, qu'ils garantissent la solidité et la stabilité de la structure dans des conditions de charge d'exploitation prévisibles et satisfont aux exigences des articles CTS 58 et CTS 60.

Les limites de charge d'exploitation de la structure, dans ses différentes configurations, doivent être indiquées dans les documents fournis par le fabricant ou établis par le propriétaire. Les configurations de montage non prévues à la conception sont interdites.

• 3. Une notice de montage en français de la structure dans chacune de ses configurations, doit être fournie à l'acheteur par le fabricant.`,
                            type: "administration"
                        },
                        {
                            id: "cts56",
                            numero: "Article CTS 56",
                            titre: "Implantation",
                            contenu: `Les dispositions de l'article CTS 5 s'appliquent, à l'exception de l'ancrage de l'établissement qui ne doit pas être réalisé à partir de véhicules. En outre l'établissement doit être implanté à plus de :
– quatre mètres d'un bâtiment ou d'une autre structure si les deux établissements sont à risques courants ;
– huit mètres d'un bâtiment ou d'une autre structure si l'un au moins des deux établissements est à risques particuliers. Si, exceptionnellement, dans certains cas particuliers, ces conditions ne peuvent être satisfaites, la commission de sécurité détermine les mesures d'isolement équivalentes.`,
                            type: "implantation"
                        },
                        {
                            id: "cts57",
                            numero: "Article CTS 57",
                            titre: "Matières et produits dangereux",
                            contenu: `Les dispositions de l'article CTS 6 s'appliquent.`,
                            type: "sécurité"
                        }
                    ]
                },
                {
                    id: "s5-2",
                    titre: "SECTION II CONSTRUCTION",
                    articles: [
                        {
                            id: "cts58",
                            numero: "Article CTS 58",
                            titre: "Installation – Résistance aux intempéries et risques divers",
                            contenu: `Les dispositions de l'article CTS 7 (• 1 et • 2) s'appliquent. Un anémomètre est relié à un dispositif qui permet d'informer à tout moment l'exploitant sur la vitesse du vent.`,
                            type: "construction"
                        },
                        {
                            id: "cts59",
                            numero: "Article CTS 59",
                            titre: "Stabilité",
                            contenu: `Avant toute implantation, l'exploitant doit s'assurer auprès du propriétaire du terrain que celui-ci n'abrite pas d'éléments de réseaux divers ou ne masque pas des cavités de nature à provoquer des pertes de stabilité de la structure.

Afin de garantir la stabilité de ces structures, susceptibles de générer au niveau des surfaces d'appui des contraintes supérieures à celles des CTS traditionnels, l'implantation dans une configuration donnée doit être précédée de la détermination du taux de travail du sol par un organisme spécialisé.

Cette vérification doit faire l'objet d'un rapport, dont les conclusions sont tenues à la disposition de la commission de sécurité.`,
                            type: "construction"
                        },
                        {
                            id: "cts60",
                            numero: "Article CTS 60",
                            titre: "Ossature – Enveloppe – Ancrage",
                            contenu: `Les dispositions de l'article CTS 8 s'appliquent et sont complétées ainsi :
– les câbles participant à la stabilité de la structure doivent être en acier. Ils doivent être bien signalés afin d'éviter tout accident.
– Les dispositifs d'assemblage des portiques et les cosses des câbles, quelle que soit la technique utilisée pour leur sertissage, ne doivent pas perdre leurs caractéristiques mécaniques à des températures inférieures à 400° C ;
– les dispositifs d'ancrage, de lestage ou toute autre solution équivalente doivent être justifiés par le calcul ou bien testés dans le cadre des vérifications techniques définies à l'article CTS 79.`,
                            type: "construction"
                        },
                        {
                            id: "cts61",
                            numero: "Article CTS 61",
                            titre: "Identification",
                            contenu: `Les dispositions de l'article CTS 9 s'appliquent. Un marquage indélébile et inamovible permettant d'identifier le fabricant doit être apposé sur tous les éléments de la structure participant à la stabilité.`,
                            type: "administration"
                        }
                    ]
                },
                {
                    id: "s5-3",
                    titre: "SECTION III – DEGAGEMENTS",
                    articles: [
                        {
                            id: "cts62",
                            numero: "Article CTS 62",
                            titre: "Sorties",
                            contenu: `Les dispositions de l'article CTS 10, à l'exception de celles du •1 C, s'appliquent à chacun des niveaux de la structure.
Si l'effectif d'un des niveaux est supérieur à 500 personnes, les deux sorties de 1,80 mètre du niveau considéré sont complétées par une issue complémentaire, d'au moins 1,80 mètre, par fraction de 300 personnes au-dessus des 500 premières.
L'évacuation de l'étage doit pouvoir être assurée sans transit par le niveau bas. Les dégagements intérieurs mettant ces deux niveaux en communication ne peuvent constituer que des dégagements supplémentaires au sens de l'article CTS 34.`,
                            type: "sécurité"
                        },
                        {
                            id: "cts63",
                            numero: "Article CTS 63",
                            titre: "Circulations",
                            contenu: `• 1. Les dispositions de l'article CTS 11, à l'exception du •3, s'appliquent à chacun des niveaux dans les conditions suivantes :
– la distance maximale, mesurée suivant l'axe des circulations, pour atteindre une sortie à partir d'un point quelconque du niveau ne doit pas dépasser 30 m, quelle que soit l'activité exercée ;
– à chaque niveau les sorties sont reliées entre elles par des circulations internes d'une largeur de 1,80 mètre. Les escaliers intérieurs, s'ils sont accessibles au public, sont reliés à ces circulations ;
– aucune saillie, aucun dépôt ou obstacle ne doivent se trouver dans les circulations.

• 2. Tous les escaliers destinés à l'évacuation doivent être judicieusement répartis. Ils doivent respecter les dispositions des articles CO 55 et CO 56, selon leur nature et comporter une main courante de chaque côté.

Les escaliers extérieurs doivent être à l'air libre (au sens de l'article CO 54 – •1).

Les marches doivent être antidérapantes. En l'absence de contre marches, les marches successives doivent se recouvrir de 0,05 m.`,
                            type: "sécurité"
                        }
                    ]
                },
                {
                    id: "s5-4",
                    titre: "SECTION IV – AMENAGEMENTS",
                    articles: [
                        {
                            id: "cts64",
                            numero: "Article CTS 64",
                            titre: "Mobilier et sièges",
                            contenu: `• 1. Les aménagements intérieurs (bars, caisses, estrades, podiums, etc.) doivent être solidement fixés au sol, ou constituer des ensembles difficiles à renverser ou à déplacer ; ils ne doivent pas diminuer la largeur des circulations et des sorties.
Ces aménagements doivent être réalisés en matériaux de catégorie M3.

• 2. Les chaises et les bancs disposés par rangées doivent comporter seize places assises au maximum entre deux circulations, l'une des dispositions suivantes devant être respectée :
– chaque siège est fixé au sol ;
– les sièges sont solidarisés par rangée, chaque rangée étant fixée au sol à ses extrémités ;
– les sièges sont solidarisés par rangée, chaque rangée étant reliée de façon rigide aux rangées voisines de manière à former des blocs difficiles à renverser ou à déplacer.

• 3. Les éléments utilisés éventuellement pour améliorer le confort (fauteuils, coussins par exemple) doivent être réalisés en matériaux de catégorie M2, ne perçant pas pour les housses, et M 4 pour les rembourrages.

• 4. L'entreposage d'éléments combustibles est interdit à moins d'un mètre des poteaux.`,
                            type: "aménagement"
                        },
                        {
                            id: "cts65",
                            numero: "Article CTS 65",
                            titre: "Décoration, espaces scéniques, locaux d'exploitation, loges, caravanes",
                            contenu: `• 1. Décoration : les dispositions de l'article CTS 13 s'appliquent à chacun des niveaux, à l'exception des revêtements de sol qui doivent être M3 à l'étage.

• 2. Espaces scéniques :
– les espaces scéniques comportant des dessous sont interdits ;
– les dépôts de décors ou d'accessoires combustibles doivent être situés à l'extérieur de l'établissement, à une distance de cinq mètres au moins, ou en être séparés par un écran coupe-feu de degré une heure, ou toute autre solution reconnue équivalente par la commission de sécurité.
Toutefois ces dispositions ne s'opposent pas à l'édification à proximité de la scène d'un dépôt de service strictement destiné à recevoir des décors, des praticables, des meubles et des accessoires, nécessaires au spectacle en cours dans l'établissement. Ce dépôt ne doit pas excéder la moitié de la superficie de la scène et doit être vidé lorsque l'établissement n'est pas utilisé avec la scène ; – si un rideau sépare la zone technique ou de service de la zone accessible au public, il doit être réalisé en matériaux de catégorie M2.

• 3. Locaux d'exploitation et loges :
– les locaux d'exploitation et les loges doivent être réalisés en matériaux de catégorie M2, ou en matériaux à base de bois de catégorie M3. Si un matériau M2 est utilisé, il doit être non fusible, à l'exception des toiles ;
– dans le cas où les locaux d'exploitation et les loges sont implantés au rez-de-chaussée, un vide d'au moins 0,5 m doit être maintenu entre la partie haute des cloisons et la sous face de la structure du plancher séparatif des deux niveaux.
Cependant, en cas d'implantation à proximité d'une trémie d'escalier, une continuité doit être assurée entre l'écran de cantonnement visé à l'article CTS 67 et la paroi située dans son prolongement.

• 4. Caravanes et auto-caravanes : les caravanes et auto-caravanes ne peuvent pas être installées à l'intérieur de l'établissement.`,
                            type: "aménagement"
                        },
                        {
                            id: "cts66",
                            numero: "Article CTS 66",
                            titre: "Gradins, planchers, escaliers, galeries",
                            contenu: `• 1. Les dispositions de l'article CTS 14 s'appliquent.

En aggravation, les gradins et tribunes aménagés à l'étage doivent respecter les dispositions suivantes :
– ils ne doivent pas excéder cinq rangées de gradinage en profondeur et un mètre en hauteur, sans prendre en compte la hauteur des sièges ;
– la protection des parties hautes doit être assurée par un garde-corps ;
– ils ne comportent que des places assises ;
– ils doivent être aménagés de manière à limiter la capacité d'accueil du public à 16 personnes entre deux circulations et 8 personnes entre une circulation et un obstacle (garde-corps, paroi etc.) ;
l'exploitant ou l'utilisateur de la structure doit attester que leur poids propre, augmenté de la charge d'exploitation est compatible avec les limites fixées par le fabricant.

• 2. En complément des dispositions de l'article CTS 14, les dispositions suivantes sont à prendre en compte :
– les éléments constitutifs du plancher haut doivent être réalisés en matériaux M1 par nature ou par traitement ;
– la mise en œuvre partielle du plancher haut est autorisée, si elle fait partie des configurations prévues par le constructeur ;
– les mezzanines qui interviendraient en complément du plancher séparatif des deux niveaux, même si celui-ci est mis partiellement en œuvre, sont interdites ;
– des gardes corps conformes à la norme NFP 01 012 doivent être installés en limite des vides : trémies, terrasses, plancher partiel, etc.
– un dispositif destiné à éviter la chute des personnes doit être installé en périmétrie du plancher haut lorsque celui-ci rencontre une paroi donnant sur le vide qui n'est pas prévue à cet effet ;
– la structure de l'ensemble des escaliers extérieurs doit être solidaire de celle de la structure du CTS. De plus, les escaliers extérieurs tournants et ceux dont le limon est parallèle à la paroi doivent être protégés, sur toute la hauteur du rez-de-chaussée, par un écran thermique répondant aux dispositions de l'article AM 8, destiné à protéger le public en cas d'évacuation.`,
                            type: "construction"
                        },
                        {
                            id: "cts67",
                            numero: "Article CTS 67",
                            titre: "Equipements et aménagements spéciaux",
                            contenu: `• 1. Installations techniques particulières : les dispositions de l'article CTS 25 s'appliquent après avis de la commission de sécurité.

• 2. Aménagements spéciaux : les aménagements spéciaux sont interdits au rez-de-chaussée des structures. A l'étage, ils doivent respecter les dispositions de l'article CTS 45.

• 3. Points d'accrochage : Les points d'accrochage sur la structure doivent être précisés et leur limite d'emploi définie.

• 4. L'exploitant ou l'utilisateur de la structure doit attester que les charges liées aux aménagements et installations sont compatibles avec les limites fixées par le fabricant.`,
                            type: "aménagement"
                        }
                    ]
                },
                {
                    id: "s5-5",
                    titre: "SECTION V DESENFUMAGE",
                    articles: [
                        {
                            id: "cts68",
                            numero: "Article CTS 68",
                            titre: "Domaine d'application",
                            contenu: `L'évacuation des fumées en cas d'incendie est obtenue par la mise en œuvre des dispositions suivantes :

• 1. Au rez-de-chaussée :
– le rez-de-chaussée de la structure doit comporter des ouvertures latérales totalisant une surface géométrique égale au 1/100ème de la superficie au sol de ce niveau et disposées de manière à assurer un balayage satisfaisant du volume.

Chaque dispositif d'ouverture doit être aisément manœuvrable de l'intérieur comme de l'extérieur de la structure.

Les ouvertures servant au désenfumage doivent être matérialisées, tant à l'intérieur qu'à l'extérieur, par un rond rouge contrastant avec le fond de la paroi d'un diamètre minimum de 15 centimètres.

La partie basse de chaque ouverture doit se trouver à 1.80 m au moins au-dessus du plancher, la partie haute devant se situer dans le volume de cantonnement déterminé ci-après.

Les sorties des structures peuvent participer au désenfumage à condition que la surface libre prise en compte pour l'évacuation des fumées soit comptabilisée à partir de 1.80 m au-dessus du plancher et sous réserve du respect de la mesure précédente ;
– des écrans de cantonnement en matériaux classés M1, non fusibles, de 0,50m de haut, au minimum, doivent être installés en sous face des trémies des escaliers intérieurs et des vides résultant d'un montage partiel du plancher haut ;
– les éléments de plancher doivent être jointifs et non ajourés de manière à limiter le passage des fumées et des gaz chauds au niveau supérieur.

Un dispositif continu, rigide ou souple, visant à limiter le passage des fumées et des gaz chauds au niveau supérieur doit assurer la jonction entre le plancher et la ceinture de la structure. Cette disposition ne s'applique pas au niveau du vide crée lors d'un montage partiel du plancher, lorsque cette configuration est prévue par le constructeur. Ce dispositif doit être réalisé en matériaux classés M1 non fusibles.

L'exploitant, doit désigner le personnel suffisant pour assurer, pendant la présence du public, la mise en œuvre des dispositifs concourant au désenfumage.

• 2. A l'étage : les aménagements particuliers ne doivent pas empêcher les fumées de rejoindre la partie haute de l'établissement.`,
                            type: "sécurité"
                        }
                    ]
                },
                {
                    id: "s5-6",
                    titre: "SECTION VI – INSTALLATIONS DE CHAUFFAGE ET DE CUISSON",
                    articles: [
                        {
                            id: "cts69",
                            numero: "Article CTS 69",
                            titre: "Conditions d'emploi",
                            contenu: `• 1. Chauffage : – les dispositions de l'article CTS 15 (• 1) s'appliquent.

• 2. Cuisson ou remise en température :
– les appareils de cuisson ou de remise en température sont interdits à l'intérieur des structures. Ils doivent obligatoirement être installés à l'extérieur de l'établissement, à une distance d'au moins 4 mètres de la paroi. Ils peuvent être abrités sous une tente. Si cette tente répond aux dispositions des articles CTS 7 (• 1) et CTS 8 (• 2) et (• 3), elle peut être accolée à la structure ;
– les véhicules ou conteneurs spécialisés destinés à la cuisson ou à la remise en température des aliments dans les établissements conçus pour la restauration sont autorisés à l'intérieur dans les conditions déterminées à l'article GC 18 ;
– les véhicules ou conteneurs spécialisés destinés à la cuisson ou à la remise en température existants à la date de modification du présent article doivent être installés à l'extérieur de l'établissement, à une distance d'au moins 5 mètres de la paroi.

• 3. Stockage d'hydrocarbures : – les dispositions des articles CTS 15 (• 5) et CTS 46 s'appliquent.`,
                            type: "sécurité"
                        }
                    ]
                },
                {
                    id: "s5-7",
                    titre: "SECTION VII INSTALLATIONS ELECTRIQUES",
                    articles: [
                        {
                            id: "cts70",
                            numero: "Article CTS 70",
                            titre: "Dispositions générales",
                            contenu: `Les dispositions des articles CTS 16 à 20 s'appliquent.`,
                            type: "électricité"
                        }
                    ]
                },
                {
                    id: "s5-8",
                    titre: "SECTION VIII ECLAIRAGE",
                    articles: [
                        {
                            id: "cts71",
                            numero: "Article CTS 71",
                            titre: "Dispositions générales",
                            contenu: `Les dispositions des articles CTS 21 à 24 et CTS 31 bis s'appliquent.

En aggravation, l'éclairage d'ambiance doit être basé sur un flux lumineux de cinq lumens par mètre carré calculé en fonction de la surface totale accessible au public.

Un éclairage de sécurité doit de plus être installé dans tous les escaliers.`,
                            type: "éclairage"
                        }
                    ]
                },
                {
                    id: "s5-9",
                    titre: "SECTION IX – MOYENS DE SECOURS",
                    articles: [
                        {
                            id: "cts72",
                            numero: "Article CTS 72",
                            titre: "Moyens d'extinction",
                            contenu: `Les dispositions de l'article CTS 26 s'appliquent.`,
                            type: "sécurité"
                        },
                        {
                            id: "cts73",
                            numero: "Article CTS 72",
                            titre: "Service de sécurité incendie",
                            contenu: `• 1. La composition du service de sécurité incendie assurant la surveillance des établissements est fixée comme suit :
a) Etablissements recevant au plus 500 personnes :
– par des personnes instruites en sécurité incendie et fournies par l'organisateur ou, à défaut ;
– par 1 ou 2 agents de sécurité incendie fournis par l'organisateur.

b) De 501 à 2 500 personnes :
– par 2 agents de sécurité incendie au minimum fournis par l'organisateur.

c) Etablissements recevant plus de 2 500 personnes, avec ou sans espace scénique ;
– par 3 agents de sécurité incendie au minimum, dont un chef d'équipe, fournis par l'organisateur ;
– le nombre d'agents de sécurité incendie doit être majoré d'une unité par fraction de 2 500 personnes à partir du seuil de 5 000 personnes.

• 2. Les missions du service de sécurité incendie sont celles définies à l'article MS 46 •1, à l'exception de la tenue à jour du registre de sécurité.
La qualification des agents de sécurité incendie qui le compose est fixée à l'article MS 48.

• 3. La surveillance peut être assurée par des sapeurs-pompiers d'un service public de secours et de lutte contre l'incendie, conformément aux dispositions de l'article MS 49, après avis de la commission consultative départementale de sécurité et d'accessibilité.`,
                            type: "sécurité"
                        },
                        {
                            id: "cts74",
                            numero: "Article CTS 74",
                            titre: "Alarme",
                            contenu: `Les structures à étage doivent être pourvues d'un équipement d'alarme du type 3.

Les déclencheurs manuels et les blocs autonomes d'alarme sonore doivent être disposés judicieusement dans les deux niveaux.

Afin de garantir une parfaite audibilité du signal d'alarme dans tout l'établissement, la sollicitation d'un seul déclencheur manuel doit entraîner le fonctionnement de l'ensemble des blocs autonomes d'alarme sonore.
La diffusion de l'alarme générale peut être complétée par le dispositif de sonorisation de l'établissement. Dans ce cas, ce dispositif doit être alimenté par une alimentation électrique de sécurité (AES) conforme à la norme NFS 61 940.

Le personnel de l'établissement doit être initié au fonctionnement du système d'alarme.

Une personne doit être désignée par l'exploitant afin de gérer, si besoin, le dispositif de sonorisation et rétablir l'éclairage normal de l'établissement, en cas de déclenchement de l'alarme générale.

Un essai quotidien doit être réalisé avant l'ouverture au public, en période d'exploitation.

L'équipement d'alarme doit être maintenu en permanence en bon état de fonctionnement.

Son entretien doit être assuré par un technicien compétent.`,
                            type: "sécurité"
                        },
                        {
                            id: "cts75",
                            numero: "Article CTS 75",
                            titre: "Alerte",
                            contenu: `Les dispositions de l'article CTS 29 s'appliquent quel que soit l'effectif du public.`,
                            type: "sécurité"
                        }
                    ]
                },
                {
                    id: "s5-10",
                    titre: "SECTION X EXPLOITATION",
                    articles: [
                        {
                            id: "cts76",
                            numero: "Article CTS 76",
                            titre: "Ouverture au public et visites des commissions de sécurité",
                            contenu: `• 1. L'ouverture au public d'une structure à étage est soumise à autorisation du maire après consultation de la commission de sécurité compétente.

L'exploitant ou l'utilisateur doit soumettre au maire, un mois au moins avant la date projetée d'ouverture au public, un dossier comprenant :
– l'extrait du registre de sécurité de l'établissement ;
– les modalités de l'implantation projetée, la configuration retenue, la nature de l'exploitation, les aménagements prévus et toute autre information relative à l'exploitation envisagée ;
– une notice récapitulant les dispositions prises pour satisfaire aux mesures prévues par le règlement ;
– les attestations prévues aux articles CTS 66 et CTS 67.

• 2. La visite de la commission de sécurité, avant chaque ouverture au public d'une structure à étage, concerne notamment :
– l'implantation, les aménagements ;
– les conditions d'évacuation ;
– le service de sécurité incendie
– le contrôle des documents prévus à l'article CTS 80.

En complément de la visite préalable à l'ouverture, les établissements à implantation prolongée doivent être visités tous les deux ans par la commission de sécurité.`,
                            type: "administration"
                        },
                        {
                            id: "cts77",
                            numero: "Article CTS 77",
                            titre: "Modifications définitives importantes",
                            contenu: `Les dispositions de l'article CTS 32 s'appliquent.`,
                            type: "administration"
                        },
                        {
                            id: "cts78",
                            numero: "Article CTS 78",
                            titre: "Vérifications techniques",
                            contenu: `Les dispositions de l'article CTS 35 s'appliquent.`,
                            type: "contrôle"
                        },
                        {
                            id: "cts79",
                            numero: "Article CTS 79",
                            titre: "Vérification assemblage",
                            contenu: `L'assemblage de l'établissement et son liaisonnement au sol doivent être vérifiés à chaque montage par un organisme agréé de vérification technique CTS. Cet organisme agréé s'assure notamment que les conclusions du rapport de sol prévu à l'article CTS 59, sont compatibles avec les contraintes de charge de l'établissement et que le montage de la structure a bien été réalisé conformément à la notice de montage du fabricant.

L'assemblage de l'établissement, dans sa configuration maximale, l'état apparent des toiles et des gradins doivent être vérifiés une fois tous les deux ans par un organisme agréé de vérification technique CTS dans les conditions de l'article CTS 34. Ces vérifications peuvent être réalisées à l'occasion d'une visite préalable à l'ouverture en cas de montage en configuration maximale.

En complément de ces dispositions, la stabilité et le liaisonnement au sol des structures à étage à implantation prolongée doivent être vérifiés tous les six mois par un organisme de vérification technique CTS agréé par le ministère de l'intérieur.`,
                            type: "contrôle"
                        },
                        {
                            id: "cts80",
                            numero: "Article CTS 80",
                            titre: "Rapports de vérification et attestations",
                            contenu: `Les dispositions de l'article CTS 36 s'appliquent.

Les rapports, et attestations rédigées dans le cadre des articles CTS 55, CTS 59, CTS 66, CTS 67, CTS 78 et CTS 79 sont tenus à la disposition de la commission de sécurité (modèles d'attestations en annexes IV et V).`,
                            type: "administration"
                        },
                        {
                            id: "cts81",
                            numero: "Article CTS 81",
                            titre: "Inspection",
                            contenu: `Les dispositions de l'article CTS 52 s'appliquent.`,
                            type: "contrôle"
                        }
                    ]
                }
            ]
        }
    ]
};

// ========== VARIABLES GLOBALES ==========
let currentArticle = null;
let allArticles = [];
let menuOverlay = null;

// ========== FONCTIONS PRINCIPALES ==========

// Initialisation
function initApp() {
    console.log('🚀 Initialisation application CTS Officielle...');

    // Créer l'overlay pour mobile
    createMenuOverlay();

    // Extraire tous les articles
    extractAllArticles();

    // Construire la navigation
    buildNavigation();

    // Configurer les événements
    setupEvents();

    // Afficher le dashboard
    showDashboard();

    console.log(`✅ Application prête ! ${allArticles.length} articles officiels chargés.`);
}

// Créer l'overlay pour fermer le menu sur mobile
function createMenuOverlay() {
    menuOverlay = document.createElement('div');
    menuOverlay.className = 'menu-overlay';
    menuOverlay.addEventListener('click', closeMobileMenu);
    document.body.appendChild(menuOverlay);
}

// Ouvrir le menu mobile
function openMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.add('open');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Empêcher le scroll
}

// Fermer le menu mobile
function closeMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('open');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restaurer le scroll
}

// Extraire tous les articles en une liste plate
function extractAllArticles() {
    allArticles = [];

    CTS_DATA.sousChapitres.forEach(sousChapitre => {
        sousChapitre.sections.forEach(section => {
            section.articles.forEach(article => {
                // Ajouter les informations de section et chapitre
                article.section = section.titre;
                article.chapitre = sousChapitre.titre;
                allArticles.push(article);
            });
        });
    });

    console.log(`${allArticles.length} articles officiels extraits.`);
}

// Construire le menu de navigation
function buildNavigation() {
    const navTree = document.getElementById('navigationTree');
    if (!navTree) return;

    navTree.innerHTML = '';

    CTS_DATA.sousChapitres.forEach((chapitre, chapitreIndex) => {
        // Titre du chapitre
        const chapitreDiv = document.createElement('div');
        chapitreDiv.className = 'nav-chapitre';
        chapitreDiv.setAttribute('data-chapter', chapitre.id); // <-- AJOUTER CETTE LIGNE
        chapitreDiv.innerHTML = `<strong>${chapitre.titre}</strong>`;
        navTree.appendChild(chapitreDiv);

        chapitre.sections.forEach((section, sectionIndex) => {
            // Titre de la section
            const sectionDiv = document.createElement('div');
            sectionDiv.className = 'nav-section';
            sectionDiv.innerHTML = `${section.titre}`;
            navTree.appendChild(sectionDiv);

            // Articles de la section
            section.articles.forEach(article => {
                const articleDiv = document.createElement('div');
                articleDiv.className = 'nav-item';

                const link = document.createElement('a');
                link.href = '#';
                link.className = 'nav-link';
                link.innerHTML = `<strong>${article.numero}</strong><br><small>${article.titre}</small>`;

                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    loadArticle(article.id);
                    // Fermer le menu sur mobile après sélection
                    if (window.innerWidth <= 1024) {
                        closeMobileMenu();
                    }
                });

                articleDiv.appendChild(link);
                navTree.appendChild(articleDiv);
            });
        });
    });
}

// Charger un article
function loadArticle(articleId) {
    const article = allArticles.find(a => a.id === articleId);
    if (!article) {
        console.error('Article non trouvé:', articleId);
        return;
    }

    currentArticle = article;

    const content = document.getElementById('articleContent');
    if (!content) return;

    // Formater le contenu (remplacer les retours à la ligne)
    const formattedContent = formatArticleContent(article.contenu);

    content.innerHTML = `
        <div class="article-header">
            <div class="article-meta">
                <span class="article-type">${article.type || 'Article'}</span>
                <span class="article-chapitre">${article.chapitre}</span>
            </div>
            <h1 style="color: var(--primary-color); margin-bottom: 10px;">${article.numero}</h1>
            <h2 style="margin-top: 0; color: #333;">${article.titre}</h2>
            <div class="article-section" style="color: #666; font-size: 14px;">${article.section}</div>
        </div>
        
        <div class="article-body">
            ${formattedContent}
        </div>
        
        <div class="article-footer">
            <button onclick="showDashboard()" class="btn-back">← Retour à l'accueil</button>
        </div>
    `;

    // Mettre à jour l'URL
    window.location.hash = `article-${articleId}`;

    console.log('Article officiel chargé:', article.numero);
}

// Formater le contenu de l'article
function formatArticleContent(content) {
    if (!content) return '';

    // Étape 1 : Transformer les références aux articles en liens
    let processedContent = transformArticleReferences(content);

    // Étape 2 : Diviser par paragraphes comme avant
    const paragraphs = processedContent.split('\n\n');

    let html = '';

    paragraphs.forEach(paragraph => {
        if (paragraph.trim() === '') return;

        // Vérifier si c'est une note
        if (paragraph.includes('(1)') || paragraph.includes('Arrêté du') || paragraph.includes('Journal officiel')) {
            html += `<div class="article-note">${paragraph.replace(/\n/g, '<br>')}</div>`;
        }
        // Vérifier si c'est un paragraphe numéroté (• 1., • 2., etc.)
        else if (paragraph.match(/^•\s*\d+/)) {
            html += `<div class="article-paragraph"><strong>${paragraph.substring(0, 4)}</strong>${paragraph.substring(4).replace(/\n/g, '<br>')}</div>`;
        }
        // Vérifier si c'est un sous-paragraphe (a), b), etc.)
        else if (paragraph.match(/^[a-z]\)/)) {
            html += `<div style="margin-left: 40px; margin-bottom: 15px;">${paragraph.replace(/\n/g, '<br>')}</div>`;
        }
        // Vérifier si c'est une liste (débutant par -)
        else if (paragraph.trim().startsWith('-')) {
            const listItems = paragraph.split('\n').filter(item => item.trim().startsWith('-'));
            html += '<ul style="margin-left: 40px; margin-bottom: 15px;">';
            listItems.forEach(item => {
                html += `<li>${item.substring(1).trim()}</li>`;
            });
            html += '</ul>';
        }
        // Paragraphe normal
        else {
            html += `<p class="article-content-paragraph">${paragraph.replace(/\n/g, '<br>')}</p>`;
        }
    });

    return html;
}

// Transformer les références aux articles en liens cliquables
function transformArticleReferences(content) {
    if (!content) return content;

    // Pattern pour détecter les références d'articles
    // Détecte : article CTS X, articles CTS X, paragraphe ... article CTS X, etc.
    const articlePattern = /((?:article|articles|paragraphe|alinéa)[\s\w\(\)]*?\s)(CTS\s*(\d+)(?:\s*bis)?)(?=[\s,\.\)])/gi;

    // Pattern pour les références multiples
    const multiplePattern = /(articles\s+)(CTS\s*\d+(?:\s*bis)?(?:\s*,\s*CTS\s*\d+(?:\s*bis)?)*\s+et\s+CTS\s*\d+(?:\s*bis)?)/gi;

    let transformedContent = content;

    // D'abord, traiter les références multiples
    transformedContent = transformedContent.replace(multiplePattern, (match, prefix, articlesText) => {
        // Extraire tous les numéros d'articles
        const articleNumbers = articlesText.match(/CTS\s*(\d+(?:bis)?)/gi);

        if (!articleNumbers || articleNumbers.length === 0) {
            return match;
        }

        // Créer des liens pour chaque article
        const linkedArticles = articleNumbers.map(articleRef => {
            const articleNum = articleRef.replace(/CTS\s*/i, '').trim();
            return `<a href="#" onclick="loadArticle('cts${articleNum}'); return false;" class="article-ref">${articleRef}</a>`;
        });

        // Reconstruire la liste avec "et" avant le dernier
        let result = prefix;
        if (linkedArticles.length === 1) {
            result += linkedArticles[0];
        } else {
            const last = linkedArticles.pop();
            result += linkedArticles.join(', ') + ' et ' + last;
        }

        return result;
    });

    // Ensuite, traiter les références simples
    transformedContent = transformedContent.replace(articlePattern, (match, prefix, articleRef, articleNum) => {
        // Vérifier si c'est déjà dans un lien (cas des références multiples déjà traitées)
        if (prefix.includes('href=') || articleRef.includes('href=')) {
            return match;
        }

        const articleId = `cts${articleNum.toLowerCase()}`;
        return `${prefix}<a href="#" onclick="loadArticle('${articleId}'); return false;" class="article-ref">${articleRef}</a>`;
    });

    // Gérer aussi les cas où "CTS X" est mentionné seul dans un contexte clair
    const standalonePattern = /(^|[^\w])(CTS\s*(\d+)(?:\s*bis)?)(?=[\s,\.\)])/g;
    transformedContent = transformedContent.replace(standalonePattern, (match, before, articleRef, articleNum) => {
        // Vérifier si c'est déjà dans un lien
        if (before.includes('href=') || articleRef.includes('href=')) {
            return match;
        }

        // Vérifier le contexte pour éviter de créer des liens partout
        const context = match.toLowerCase();
        if (context.includes('article') ||
            context.includes('alinéa') ||
            context.includes('paragraphe') ||
            context.includes('dispositions') ||
            context.includes('conformément') ||
            context.includes('selon') ||
            context.includes('visé')) {

            const articleId = `cts${articleNum.toLowerCase()}`;
            return `${before}<a href="#" onclick="loadArticle('${articleId}'); return false;" class="article-ref">${articleRef}</a>`;
        }

        return match;
    });

    return transformedContent;
}

// Afficher le tableau de bord
function showDashboard() {
    const content = document.getElementById('articleContent');
    if (!content) return;

    // Compter les articles par type
    const stats = {
        total: allArticles.length,
        sécurité: allArticles.filter(a => a.type === 'sécurité').length,
        construction: allArticles.filter(a => a.type === 'construction').length,
        administration: allArticles.filter(a => a.type === 'administration').length,
        général: allArticles.filter(a => a.type === 'général').length,
        électricité: allArticles.filter(a => a.type === 'électricité').length,
        éclairage: allArticles.filter(a => a.type === 'éclairage').length,
        aménagement: allArticles.filter(a => a.type === 'aménagement').length,
        implantation: allArticles.filter(a => a.type === 'implantation').length,
        exploitation: allArticles.filter(a => a.type === 'exploitation').length,
        contrôle: allArticles.filter(a => a.type === 'contrôle').length,
        technique: allArticles.filter(a => a.type === 'technique').length,
        structure: allArticles.filter(a => a.type === 'structure').length
    };

    content.innerHTML = `
        <div class="dashboard">
            <h2>Règlementation CTS</h2>
            <p class="subtitle">Dispositions applicables aux établissements de type Chapiteaux, Tentes et Structures.</p>

            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-number">${stats.total}</div>
                    <div class="stat-label">Articles</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${stats.sécurité}</div>
                    <div class="stat-label">Sécurité</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${stats.construction}</div>
                    <div class="stat-label">Construction</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${stats.administration}</div>
                    <div class="stat-label">Administration</div>
                </div>
            </div>
            
            <div class="quick-access">
                <h3>🔍 Recherche rapide dans le texte officiel</h3>
                <input type="text" id="quickSearch" placeholder="Rechercher un mot, une expression, un numéro d'article..." class="search-input-large">
                <div id="searchResults" class="search-results"></div>
            </div>

            <div class="recent-articles">
    <h3> CHAPITRE I : Etablissements du Type Cts Chapiteaux, Tentes Et Structures Itinerants </h3>
    <div class="articles-grid">
        <div class="">
            Articles CTS 1 > CTS 37
        
            </div>
        </div>
    </div>
            
            <div class="recent-articles">
                <h3> Articles Généraux</h3>
                <div class="articles-grid">
                    <div class="important-article" onclick="loadArticle('cts1')">
                        <strong>Article CTS 1</strong><br>
                        Etablissements assujettis
                    </div>
                    <div class="important-article" onclick="loadArticle('cts2')">
                        <strong>Article CTS 2</strong><br>
                        Calcul de l'effectif
                    </div>
                    <div class="important-article" onclick="loadArticle('cts3')">
                        <strong>Article CTS 3</strong><br>
                        Demande de registre de sécurité
                    </div>
                    <div class="important-article" onclick="loadArticle('cts4')">
                        <strong>Article CTS 4</strong><br>
                        Agrément des organismes de vérification
                    </div>
                    <div class="important-article" onclick="loadArticle('cts5')">
                        <strong>Article CTS 5</strong><br>
                        Implantation
                    </div>
                    <div class="important-article" onclick="loadArticle('cts6')">
                        <strong>Article CTS 6</strong><br>
                        Matières et produits dangereux
                    </div>
                </div>
            </div>

            <div class="recent-articles">
                <h3> Construction</h3>
                <div class="articles-grid">
                    <div class="important-article" onclick="loadArticle('cts7')">
                        <strong>Article CTS 7</strong><br>
                        Installation – Résistance aux intempéries et risques divers
                </div>
                    <div class="important-article" onclick="loadArticle('cts8')">
                    <strong>Article CTS 8</strong><br>
                    Ossature et enveloppe
                </div>
                    <div class="important-article" onclick="loadArticle('cts9')">
                    <strong>Article CTS 9</strong><br>
                    Numéro d'identification
                </div>
                </div>
            </div>

            <div class="recent-articles">
                <h3> Dégagements</h3>
                <div class="articles-grid">
                    <div class="important-article" onclick="loadArticle('cts10')">
                        <strong>Article CTS 10</strong><br>
                        Sorties
                </div>
                <div class="important-article" onclick="loadArticle('cts11')">
                <strong>Article CTS 11</strong><br>
                Circulations
            </div>
            </div>
        </div>

        <div class="recent-articles">
                <h3> Aménagements</h3>
                <div class="articles-grid">
                    <div class="important-article" onclick="loadArticle('cts12')">
                        <strong>Article CTS 12</strong><br>
                        Mobilier et sièges
                </div>
                <div class="important-article" onclick="loadArticle('cts13')">
                <strong>Article CTS 13</strong><br>
                Décoration
            </div>
            <div class="important-article" onclick="loadArticle('cts14')">
                <strong>Article CTS 14</strong><br>
                Gradins, planchers, escaliers
            </div>
            </div>
        </div>

        <div class="recent-articles">
        <h3> Installations de Chauffage ou de Cuisson</h3>
        <div class="articles-grid">
            <div class="important-article" onclick="loadArticle('cts15')">
                <strong>Article CTS 15</strong><br>
                Conditions d'emploi
                </div>
            </div>
        </div>

        <div class="recent-articles">
        <h3> Installations Electriques</h3>
        <div class="articles-grid">
            <div class="important-article" onclick="loadArticle('cts16')">
                <strong>Article CTS 16</strong><br>
                Généralités
            </div>
            <div class="important-article" onclick="loadArticle('cts17')">
                <strong>Article CTS 17</strong><br>
                Installations propres à l'établissement
            </div>
            <div class="important-article" onclick="loadArticle('cts18')">
                <strong>Article CTS 18</strong><br>
                Installations ajoutées par les utilisateurs
            </div>
            <div class="important-article" onclick="loadArticle('cts19')">
                <strong>Article CTS 19</strong><br>
                Installations de sonorisation, guirlandes électriques
            </div>
            <div class="important-article" onclick="loadArticle('cts20')">
                <strong>Article CTS 20</strong><br>
                Prises de courant et canalisations
            </div>
        </div>
    </div>

    <div class="recent-articles">
    <h3> Installations Éclairage</h3>
    <div class="articles-grid">
        <div class="important-article" onclick="loadArticle('cts21')">
            <strong>Article CTS 21</strong><br>
            Éclairage normal
        </div>
        <div class="important-article" onclick="loadArticle('cts22')">
            <strong>Article CTS 22</strong><br>
            Eclairage de sécurité
        </div>
        <div class="important-article" onclick="loadArticle('cts23')">
            <strong>Article CTS 23</strong><br>
            Blocs autonomes d'éclairage de sécurité
        </div>
        <div class="important-article" onclick="loadArticle('cts24')">
            <strong>Article CTS 24</strong><br>
            Source centralisée de sécurité
            </div>
        </div>
    </div>

    <div class="recent-articles">
    <h3> Équipements Spéciaux </h3>
    <div class="articles-grid">
        <div class="important-article" onclick="loadArticle('cts25')">
            <strong>Article CTS 25</strong><br>
            Installations techniques particulières
            </div>
        </div>
    </div>

    <div class="recent-articles">
    <h3> Moyens de Secours </h3>
    <div class="articles-grid">
        <div class="important-article" onclick="loadArticle('cts26')">
            <strong>Article CTS 26</strong><br>
            Moyens d'extinction
        </div>
        <div class="important-article" onclick="loadArticle('cts27')">
            <strong>Article CTS 27</strong><br>
            Service de sécurité incendie
        </div>
        <div class="important-article" onclick="loadArticle('cts28')">
            <strong>Article CTS 28</strong><br>
            Alarme
        </div>
        <div class="important-article" onclick="loadArticle('cts29')">
            <strong>Article CTS 29</strong><br>
            Alerte
            </div>
        </div>
    </div>

    <div class="recent-articles">
    <h3> Exploitation </h3>
    <div class="articles-grid">
        <div class="important-article" onclick="loadArticle('cts30')">
            <strong>Article CTS 30</strong><br>
            Registre de sécurité
        </div>
        <div class="important-article" onclick="loadArticle('cts31')">
            <strong>Article CTS 31</strong><br>
            Implantation – Attestation – Ouverture public
        </div>
        <div class="important-article" onclick="loadArticle('cts31bis')">
            <strong>Article CTS 31 BIS</strong><br>
            Règles d'exploitation de l'éclairage de sécurité
        </div>
        <div class="important-article" onclick="loadArticle('cts32')">
            <strong>Article CTS 32</strong><br>
            Modifications majeures
        </div>
        <div class="important-article" onclick="loadArticle('cts33')">
            <strong>Article CTS 33</strong><br>
            Retrait du registre de sécurité
        </div>
        <div class="important-article" onclick="loadArticle('cts34')">
            <strong>Article CTS 34</strong><br>
            Vérification périodique de l'établissement
        </div>
        <div class="important-article" onclick="loadArticle('cts35')">
            <strong>Article CTS 35</strong><br>
            Vérification des installations techniques de l'établissement
        </div>
        <div class="important-article" onclick="loadArticle('cts36')">
            <strong>Article CTS 36</strong><br>
            Rapport de vérification périodique
            </div>
        </div>
    </div>

    <div class="recent-articles">
    <h3> Petits Établissements </h3>
    <div class="articles-grid">
        <div class="important-article" onclick="loadArticle('cts37')">
            <strong>Article CTS 37</strong><br>
            Petits établissements
            </div>
        </div>
    </div>
   
    <div class="recent-articles">
        <h3> Autres Chapitres de la Règlementation</h3>
        <div class="articles-grid">
            <div class="important-article" onclick="scrollToChapter('sc2')">
                <strong>CHAPITRE II</strong><br>
                CTS à Implantation Prolongée<br>
                <small>Articles CTS 38 à 50</small>
            </div>
            <div class="important-article" onclick="scrollToChapter('sc3')">
                <strong>CHAPITRE III</strong><br>
                Établissements fixes<br>
                <small>Article CTS 51</small>
            </div>
            <div class="important-article" onclick="scrollToChapter('sc4')">
                <strong>CHAPITRE IV</strong><br>
                Exploitation - Sécurité<br>
                <small>Article CTS 52</small>
            </div>
            <div class="important-article" onclick="scrollToChapter('sc5')">
                <strong>CHAPITRE V</strong><br>
                Structures à Étage<br>
                <small>Articles CTS 53 à 81</small>
            </div>
        </div>
        <p style="text-align: center; color: #666; font-size: 14px; margin-top: 15px;">
            Cliquez sur un chapitre pour explorer ses articles dans le menu de navigation latéral
        </p>
    </div>
        </div>
    </div>
        
            <div class="instructions">

            <h4 style="color: #2c3e50; margin-top: 0; margin-bottom: 15px;">● Objectif de l'application</h4>

                <ul>
                    <li>Fournir aux professionnels du spectacle, régisseurs, exploitants un outil de consultation de la réglementation CTS appliquable aux établissements de type Chapiteaux, Tentes & Structures.</li>
                    <li><strong> l'Application ne se substitue pas :</strong></li>                   
                    <li>Aux textes officiels publiés</li>
                    <li>À l'avis d'experts certifiés</li>
                    <li>Aux commissions de sécurité compétentes</li>
                    <li>À la jurisprudence en vigueur</li>
                </ul> 

        <h4 style="color: #2c3e50; margin-top: 0; margin-bottom: 15px;">● Liens Utiles</h4>
        <ul style="margin-left: 20px; font-size: 14px;">
            <li style="margin-bottom: 10px;">
                <a href="https://www.legifrance.gouv.fr/loda/id/LEGITEXT000020303557" target="_blank" style="color: #0056b3; text-decoration: none;">
                    <strong> Règlement de sécurité ERP</strong><br>
                    <small style="color: #666;">Règlement de sécurité contre les risques d'incendie et de panique dans les établissements recevant du public (ERP)</small>
                </a>
            </li>
            <li style="margin-bottom: 10px;">
                <a href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074096/LEGISCTA000043818891/#LEGISCTA000043818891" target="_blank" style="color: #0056b3; text-decoration: none;">
                    <strong> Sécurité des personnes</strong><br>
                    <small style="color: #666;">Sécurité des personnes contre les risques d'incendie (Articles D141-1 à R146-35)</small>
                </a>
            </li>
            <li style="margin-bottom: 10px;">
                <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000448223" target="_blank" style="color: #0056b3; text-decoration: none;">
                    <strong>Personnel de sécurité incendie</strong><br>
                    <small style="color: #666;">Arrêté du 2 mai 2005 relatif aux missions, à l'emploi et à la qualification du personnel des services de sécurité incendie des ERP</small>
                </a>
            </li>
        </ul>

        <p style="font-size: 12px; color: #777; margin-top: 15px; margin-bottom: 0;"></p>
        <h4 style="color: #2c3e50; margin-top: 0; margin-bottom: 15px;">● Pour toute question ou problème </h4>       
                <ul>
                <a href="https://github.com/fi-regie/reglementation-CTS-" target="_blank" style="color: #0056b3; text-decoration: none;">
                <li><strong>Ouvrir le dépôts</strong><br>
                <small style="color: #666;">https://github.com/fi-regie/reglementation-CTS-</small>
            </a>
        </li>
           
                <a href="https://github.com/fi-regie/reglementation-CTS-/blob/main/README.md" target="_blank" style="color: #0056b3; text-decoration: none;">
                <li><strong>Consulter la documentation</strong><br>
                <small style="color: #666;">[documentation] (README.md)</small>
            </a>
        </li>

                <a href="mailto:philippe.potier-regie@proton.me" target="_blank" style="color: #0056b3; text-decoration: none;">
                <li><strong>Contact</strong><br>
                <small style="color: #666;">philippe.potier-regie@proton.me</small>
            </a>
        </li>     
                
            </ul>           
        </div>

                <div class="important-note">
            <strong> ⚠️ Ce document reproduit l'intégralité de la réglementation officielle CTS à usage consultatif. Pour toute application concrète, se référer aux textes publiés au Journal Officiel.</strong>
            <div style="text-align: center; margin-top: 10px;">
                <a href="https://www.legifrance.gouv.fr/codes/section_lc/JORFTEXT000000290033/LEGISCTA000020370853/" target="_blank" style="display: inline-flex; align-items: center; gap: 5px;">
                    <span style="font-size: 1.2em;"></span>
                    <span> Légiefrance / Journal Officiel / Réglementation CTS Chapiteaux, Tentes et Structures</span>
                    <span style="font-size: 0.9em;">↗</span>
                </a>
            </div>
        </div>
        
    `;

    // Configurer la recherche rapide
    setupQuickSearch();
}

// Configuration de la recherche rapide
function setupQuickSearch() {
    const searchInput = document.getElementById('quickSearch');
    const resultsDiv = document.getElementById('searchResults');

    if (!searchInput || !resultsDiv) return;

    searchInput.addEventListener('input', function (e) {
        const query = e.target.value.toLowerCase().trim();

        if (query.length < 2) {
            resultsDiv.innerHTML = '';
            return;
        }

        // Rechercher dans les articles
        const results = allArticles.filter(article =>
            article.titre.toLowerCase().includes(query) ||
            article.contenu.toLowerCase().includes(query) ||
            article.numero.toLowerCase().includes(query) ||
            article.type.toLowerCase().includes(query)
        );

        // Afficher les résultats
        if (results.length === 0) {
            resultsDiv.innerHTML = '<div style="padding: 15px; text-align: center; color: #666;">Aucun résultat trouvé dans le texte officiel</div>';
            return;
        }

        let html = '<div class="results-list">';
        results.slice(0, 8).forEach(article => {
            // Créer un extrait
            const excerpt = article.contenu.substring(0, 150).replace(/\n/g, ' ') + '...';

            html += `
                <div class="result-item" onclick="loadArticle('${article.id}')">
                    <div class="result-title">
                        <strong>${article.numero}</strong> - ${article.titre}
                    </div>
                    <div class="result-excerpt">${excerpt}</div>
                    <div class="result-meta">
                        <span class="result-type">${article.type}</span>
                        <span class="result-section">${article.section}</span>
                    </div>
                </div>
            `;
        });

        if (results.length > 8) {
            html += `<div style="padding: 10px; text-align: center; color: #666; font-size: 0.9em;">... et ${results.length - 8} résultats supplémentaires</div>`;
        }

        html += '</div>';
        resultsDiv.innerHTML = html;
    });
}

// Rechercher des articles similaires
function searchSimilar() {
    if (!currentArticle) return;

    const query = currentArticle.titre.split(' ')[0]; // Premier mot du titre
    const searchInput = document.getElementById('globalSearch');

    if (searchInput) {
        searchInput.value = query;
        searchInput.focus();
        searchInput.dispatchEvent(new Event('input'));
    }
}

// Toggle menu (desktop et mobile)
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');

    // Mode mobile/tablette
    if (window.innerWidth <= 1024) {
        if (sidebar.classList.contains('open')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }
    // Mode desktop
    else {
        sidebar.classList.toggle('closed');
        mainContent.classList.toggle('sidebar-closed');
    }
}


// Configuration des événements
function setupEvents() {
    // Menu toggle avec fonction unifiée
    const menuButton = document.getElementById('menuToggle');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }

    // Fermer le menu mobile si on redimensionne vers desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024) {
            closeMobileMenu();
        }
    });

    // Recherche principale
    const searchInput = document.getElementById('globalSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function (e) {
            const query = e.target.value.toLowerCase().trim();

            if (query.length < 2) {
                return;
            }

            const results = allArticles.filter(article =>
                article.titre.toLowerCase().includes(query) ||
                article.contenu.toLowerCase().includes(query) ||
                article.numero.toLowerCase().includes(query)
            );

            if (results.length > 0) {
                loadArticle(results[0].id);
            }
        });
    }

    // Gestion du hash URL
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
}

// Gérer les changements d'URL
function handleHashChange() {
    const hash = window.location.hash.substring(1);

    if (hash.startsWith('article-')) {
        const articleId = hash.replace('article-', '');
        loadArticle(articleId);
    } else if (hash === '' || hash === 'dashboard') {
        showDashboard();
    }
}

// Fonction helper pour faire défiler vers un chapitre dans le menu
function scrollToChapter(chapterId) {
    const sidebar = document.getElementById('sidebar');
    const chapterElement = document.querySelector(`[data-chapter="${chapterId}"]`);

    if (chapterElement) {
        // Ouvrir le menu sur mobile
        if (window.innerWidth <= 1024) {
            openMobileMenu();
        }

        // Faire défiler vers le chapitre
        setTimeout(() => {
            chapterElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            chapterElement.style.backgroundColor = '#e3f2fd';
            setTimeout(() => {
                chapterElement.style.backgroundColor = '';
            }, 2000);
        }, 300);
    }
}

// ========== DÉMARRER L'APPLICATION ==========
document.addEventListener('DOMContentLoaded', initApp);

// Exposer les fonctions globalement
window.loadArticle = loadArticle;
window.showDashboard = showDashboard;
window.toggleMenu = toggleMenu;

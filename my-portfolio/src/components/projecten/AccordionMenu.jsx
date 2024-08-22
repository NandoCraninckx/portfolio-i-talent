import React, { useState } from "react";
import "./AccordionMenu.css";
import AccordionItem from "./AccordionItem";
import godotUI from "../../assets/Overview-godot-UI.png";
import godotPlayer from "../../assets/Voorbeeld-player-godot.png";
import mulesoftCourse from "../../assets/indeling-cursus.png";
import exampleFlow from "../../assets/Voorbeeld-flow.png";

const AccordionMenu = () => {
    const [isActive, setIsActive] = useState(0);

    const handleClick = (accordionClick) => {
        setIsActive(accordionClick === isActive ? null : accordionClick);
    };

    return(
        <section className="accordionMenu section" id="accordionMenu">
            <div className="accordionMenu-container container grid">
                <div className="accordionMenu-content grid">
                    <h1 className="accordion-title">Projecten </h1>
                    <div className="accordion-items-container">
                        <div className="accordion-items">
                            <AccordionItem title="Project 1: Portfolio Website"
                                content= {
                                    <div>
                                        <h2 className="accordion-subtitle">Kern</h2>
                                        <p className= "content-paragraph">
                                        De keuze van het eerste project is snel gemaakt en is ook een vrij logische keuze. 
                                        Voor dit opleidingsonderdeel moet er een portfolio gemaakt worden. 
                                        Aangezien dit een IT richting is, komt de keuze om een online portfolio, in de vorm van een website, dus niet al te vreemd. 
                                        </p>
                                        <p className= "content-paragraph">
                                        Er zijn ook nog twee andere redenen waarom dit in de vorm van een website gedaan wordt. 
                                        De eerste reden is dat ik mijn kennis van frontend ontwikkeling wil opfrissen en vooral verder wil ontwikkelen. Mijn focus en interesse zijn meer naar het backend gedeelte van een applicatie. 
                                        Maar het op punt houden van op zijn minst een algemene kennis van het frontend gedeelte mag zeker niet uit het oog verloren worden. 
                                        Ook tijdens mijn opleiding vond ik vaak dat ik “aan het prullen” was met de lay-out. 
                                        Nu dus een perfect moment om hierbij even stil te staan.
                                        </p>
                                        <p className= "content-paragraph">
                                        De tweede reden is omdat ik zelf graag een project met React wil maken. React wordt doorheen de drie schooljaren niet behandeld. 
                                        Zijn twee tegenpolen dan weer wel, Angular en Vue.js. Omdat React toch vaak gebruikt wordt om mee te werken in de bedrijfswereld wil ik hier graag de basis van meekrijgen. 
                                        </p>
                                        <p className= "content-paragraph">
                                        Omdat de website op termijn waarschijnlijk ook voor persoonlijk gebruik ingezet gaat worden, is er goed nagedacht over de uitstraling en feeling ervan. 
                                        Zelf hou ik van een eerder minimalistische stijl en dit kan je ook terugvinden op de site. 
                                        Het persoonlijke karakter van de site wordt versterkt door het zelf ontworpen logo op de homepagina van de website. 
                                        Dit stellen de hoofdletters ‘C’ en ‘N’ voor, wat dan ook mijn initialen zijn. Hiermee wordt een bezoeker begroet bij het laden van de website. 
                                        Een eigen logo maken is iets waar ik in het verleden nog over had nagedacht en zich nu ook goed toe leent.    
                                        </p>
                                        <p className= "content-paragraph">
                                        Om de werking van React beter te leren kennen, heb ik hun website geraadpleegd. Via deze site vind je allerhande gedocumenteerde informatie terug over de basiseigenschappen van React. 
                                        Dit vormt een goede fundering om mee aan de start te gaan. Verder is er online een waaier aan informatie en voorbeelden te vinden die de verschillende mogelijkheden van React tonen. 
                                        Voor mijn eigen website bekeek ik verschillende tutorials op Youtube en las ik documentatie van andere developers. 
                                        Met al deze informatie en mijn eigen voorkeuren had ik een idee over het verder opmaken van de site en welke functionaliteit/animaties ik erin wil verwerken.  
                                        </p>
                                        <p className= "content-paragraph">
                                        De website is opgebouwd uit verschillende componenten. Elk component bezit dan ook zijn eigen functionaliteit en heeft een specifiek doel. Hierdoor is de website in de toekomst makkelijk te onderhouden en uit te breiden.   
                                        </p>
                                        <p className= "content-paragraph">
                                        Wat ik ook belangrijk vind en zeker aandacht aan wil besteden is het online brengen van de website. 
                                        Dit had ik nog nooit gedaan en enkel over horen praten hoe dit in zijn werk gaat. 
                                        Al snel blijkt dat er aan het gebruik van een specifiek domein en het hosten van een website een kostenplaatje hangt. 
                                        Wanneer ik de website in de toekomst daadwerkelijk wil gebruiken en het ook effectief een functioneel nut heeft, kunnen deze kosten verantwoord worden. 
                                        Daarom is er nu voor dit project gekozen voor een gratis hosting service, zonder een eigen specifieke domeinnaam. De hostingprovider die ik gekozen heb is Vercel. 
                                        Zij bieden een gratis pakket aan, ‘Hobby’ genaamd, die een developer kan gebruiken om zijn website op een simpele manier te hosten. 
                                        Via een ingebouwde CI/CD-pipeline kan een GitHub repo gelinkt worden en wordt de website automatisch geüpdatet bij het maken van wijzigingen.  
                                        </p>

                                        <h2 className="accordion-subtitle">Reflectie</h2>
                                        <p className= "content-paragraph">
                                        Wanneer ik terugkijk op het bouwen van deze website is dat over het algemeen met een positief gevoel. 
                                        De basis ligt er en wanneer ik deze later wil gebruiken voor persoonlijk gebruik zijn er slechts enkele aanpassingen nodig. 
                                        Dit is makkelijk in orde te brengen door het bouwen van die specifieke componenten en toe te voegen aan de de pagina.    
                                        </p>
                                        <p className= "content-paragraph">
                                        Tijdens het maken van de website ondervond ik dat het zeker nodig was om dit project te maken. 
                                        Het gebruik van bijvoorbeeld CSS lag blijkbaar ver in het geheugen. 
                                        Dus hiervoor was wat opfrissing nodig. Dit kan ik dan ook aanduiden als de problemen die ik ondervond. 
                                        Het moeten opzoeken of bekijken van tutorials en weer het “prullen” om de layout goed te krijgen.   
                                        </p>
                                        <p className= "content-paragraph">
                                        Wat ik zeer nuttig vond aan het project is dat ik nu weet hoe ik een website online kan brengen. 
                                        Uiteindelijk is dit een vrij standaard en makkelijk proces, maar het moet natuurlijk gekend zijn. 
                                        Jammer dat ik zo ook moet ondervinden dat een website hosten en een domeinnaam kopen, toch een duur iets is. 
                                        Toch als het maar voor een simpel project is. Gelukkig zijn er gratis, maar beperkt in functionaliteit, oplossingen beschikbaar.   
                                        </p>
                                        <p className= "content-paragraph">
                                        Maar ik moet achteraf toch concluderen dat frontend-development nooit mijn voorkeur zal dragen. 
                                        En als ik de vraag krijg waarom, dan komt het volgens mij door de onvoorspelbaarheid die het met zich meebrengt en het niet creatief genoeg zijn. 
                                        Ik ben iemand die graag logica heeft, logisch redeneert en zoals al een paar keer niet aangehaald niet continu moet gaan “prullen” om toch net dat ene ding gecentreerd te krijgen. 
                                        Dit vind ik eerder terug in backend development en nu sinds kort in low code development.   
                                        </p>
                                        <p className= "content-paragraph">
                                        Al bij al ben ik toch blij dat ik dit project gemaakt heb en dat ik nu ook React tussen mijn lijst van gekende tools kan zetten.
                                        Ook is mijn kennis van frontend-development weer opgefrist en dit kan in de toekomst enkel maar van pas komen.   
                                        </p>

                                        <button className="content-button">
                                            <a className="a-link" href="https://github.com/NandoCraninckx/portfolio-i-talent" target="_blank" rel="noopener noreferrer">
                                                Code Github
                                            </a>
                                        </button>
                                    </div>
                                }
                                isActive={isActive === 1}
                                onClick={() => handleClick(1)}/>
                                
                                <AccordionItem title="Project 2: Game ontwikkeld met Godot"
                                content= {
                                    <div>
                                        <h2 className="accordion-subtitle">Kern</h2>
                                        <p className="content-paragraph">
                                        Het onderwerp van het tweede project is ook een vrij makkelijke en snelle beslissing. 
                                        Het maken, of in ieder geval toch de basis aanleren, van een game staat al langer op het to-do lijstje. 
                                        Dit is door de jaren heen op de lange baan geschoven. Daarom is I-Talent hier de ideale gelegenheid voor om mij hier eindelijk aan te zetten. 
                                        </p>
                                        <p className="content-paragraph">
                                        Een game maken is tegenwoordig zeer toegankelijk geworden. Dit door het grote aantal aan tools en documentatie die hiervoor beschikbaar zijn. 
                                        Daarom vind ik het belangrijk om eerst onderzoek te doen naar de tool en dus ook de programmeertaal die ik hiervoor wil gebruiken en het beste past bij mijn noden. Een van deze noden is bijvoorbeeld dat de tool zich moet verlenen om een 2D-game te maken. 
                                        Na wat onderzoek en het lezen/kijken van vergelijkingen tussen de verschillende tools bleven er vier over. Unity, Unreal Engine, Godot en GameMaker. Niet toevallig vier van de meer bekendere tools.
                                        </p>
                                        <p className="content-paragraph">
                                        En deze zijn met een goede reden de meer bekendere omdat ze ook zeer veel functionaliteiten bieden. 
                                        Helaas valt Unreal Engine als eerste af door de grote complexiteit en de vele tijd die nodig is om dit aan te leren. Verder richt Unreal Engine zich voornamelijk op het maken van 3D-games. Voor dit project dus niet meteen wat ik zoek. 
                                        GameMaker is de meest toegankelijke van de vier en stelt zichzelf voor als de ultieme 2D Game Engine. Omdat ik zeker niet uitsluit dat ik hierna nog andere projecten zou willen maken, waaronder misschien ooit een 3D-game, besluit ik ook niet voor deze optie te gaan. 
                                        </p>
                                        <p className="content-paragraph">
                                        De keuze om uiteindelijk voor Godot te kiezen heeft twee redenen. De eerste reden is dat Godot de developer de keuze laat tussen C# of Godot zijn eigen GDScript Language om te programmeren. 
                                        GDScript vertoont veel gelijkenissen met Python en dit is voor mij persoonlijk een programmeertaal die mij meer aanspreekt. Unity biedt enkel C# of C++ aan. Verder is de leercurve van Unity hoger en voor dit project zoek ik iets meer toegankelijk.
                                        </p>
                                        <p className="content-paragraph">
                                        Na Godot geïnstalleerd te hebben, zocht ik naar een goede tutorial. De website van Godot biedt een tutorial voor het maken van een kleine 2D-game. 
                                        Na deze kort te hebben doorgenomen vond ik dat deze iets te “basic” was en zocht ik online naar meer uitgebreide tutorials, deze vond ik via het YouTube-kanaal van Heartbeast. 
                                        Hierop staan gedetailleerd uitgelegde video’s die de functionaliteit van Godot uitleggen en de kijker gelijklopend een RPG-game laten maken.
                                        </p>
                                        <p className="content-paragraph">
                                        Het maken van een 2D-game in Godot kent een logisch verloop. Het begint bij de graphics. Voor deze tutorial worden alle objecten/sprites zelf voorzien. Maar er zou ook gekozen kunnen worden om deze zelf te ontwerpen. 
                                        Hierna wordt er een wereld gebouwd waarop de verschillende objecten interactie kunnen hebben. Deze wereld kan aangekleed worden met verschillende soorten tegels die de developer kiest. Denk hierbij aan gras of zandpaden.
                                        </p>
                                        <img src={godotUI} alt="Overview world" className="content-image" />

                                        <p className="content-paragraph">
                                        Na het maken van de wereld, worden doorgaans de verschillende sprites gedefinieerd. Dit kunnen beweegbare of vaste 2D-objecten zijn. 
                                        Elk object kan zijn eigen specifieke eigenschappen bezitten. Voorbeelden hiervan zijn een hurtbox die aangeeft hoe vaak een object geraakt kan worden vooraleer het verwijderd wordt uit het spel. 
                                        Maar ook een AnimationPlayer die al de verschillende animaties van een object gaat regelen. Als al deze verschillende objecten klaar zijn kunnen ze worden toegevoegd aan de wereld, zoals player, vijanden, bomen, struiken,...
                                        </p>
                                        <img src={godotPlayer} alt="Overview player" className="content-image" />
                                        <p className="content-paragraph">
                                        Wanneer al de gewenste objecten toegevoegd zijn aan de wereld, doet de runtime van Godot zijn werk en wordt de game gestart waarna je een eigen gemaakte game kan spelen. 
                                        In dit geval is het natuurlijk maar een vrij simpel spel met een speler en een paar vijanden. 
                                        Maar de mogelijkheden om een groter en complexer game te maken zijn er. De source code van het spel kan teruggevonden worden op mijn GitHub-pagina via de knop onder de tekst.
                                        </p>

                                        <h2 className="accordion-subtitle">Reflectie</h2>
                                        <p className="content-paragraph">
                                        Met het afronden van het tweede project wordt daarmee ineens ook iets van mijn “bucketlist” gehaald. 
                                        Zoals eerder al aangehaald was dit iets wat ik van kinds af aan al wilde doen. I-Talent verleende zich hiertoe perfect omdat aan dit uitstelgedrag eindelijk een eind kwam.  
                                        </p>
                                        <p className="content-paragraph">
                                        Het uiteindelijke project werd gemaakt met Godot. Hier werd voorafgaand een onderzoek gedaan naar welke tools er allemaal zijn en vooral welke tool het beste geschikt was voor dit project. 
                                        Dit onderzoek vond ik persoonlijk even interessant en leerrijk dan het maken van de game zelf. Dit omdat je een high level beeld krijgt van al de verschillende opties die beschikbaar zijn en wat hun specifieke functionaliteiten zijn. 
                                        Toekomstgericht vind ik het onderzoeksgedeelte aan dit project zeker een meerwaarde. 
                                        Ik sluit zeker niet uit dat ik in de toekomst hier nog een vervolg aan wil geven en nog eens een uitgebreidere, eventueel in 3D, game wil maken. 
                                        Met de kennis die ik nu heb opgedaan van al deze courante tools weet ik sneller welke tool/platform te gebruiken.
                                        </p>
                                        <p className="content-paragraph">
                                        Tijdens de opleiding aan de PXL Hasselt wordt game-development niet echt aangeraakt. 
                                        Wat ik persoonlijk jammer vind, is dat hier geen opleidingsonderdeel of keuzetraject in wordt voorzien. 
                                        Des te meer een argument is om dit zelf als project te doen voor I-Talent. De algemene kennis rond programmeren kwam natuurlijk wel handig van pas.  
                                        </p>
                                        <p className="content-paragraph">
                                        Problemen tijdens het project zijn er niet ondervonden. Het enige dat wel aangehaald kan worden is niet direct een probleem, maar een ondervinding. Dat game-development toch wel een andere manier van programmeren vraagt dan het standaard coderen. 
                                        De basis is zeker hetzelfde maar er komen wel andere aspecten bij kijken, zoals de interactie tussen objecten waarover nagedacht moet worden. Wat een leuke uitbreiding is op enkel coderen.
                                        </p>
                                        <p className="content-paragraph">
                                        Met het project op zijn einde ben ik blij dat ik de keuze gemaakt heb om een game te maken. 
                                        Een zeer leerrijke ervaring en zeker iets waar ik in toekomst het verdere potentieel van wil ontdekken. 
                                        Niet enkel uitsluitend met Godot, maar game-development in het algemeen.
                                        </p>

                                        <button className="content-button">
                                            <a className="a-link" href="https://github.com/NandoCraninckx/rpg-game-godot" target="_blank" rel="noopener noreferrer">
                                                Code Github
                                            </a>
                                        </button>
                                    </div>
                                }
                                isActive={isActive === 2}
                                onClick={() => handleClick(2)}/>

                                <AccordionItem title="Project 3: Certified MuleSoft Developer"
                                content= {
                                    <div>
                                        <h2 className="accordion-subtitle">Kern</h2>
                                        <p className="content-paragraph">
                                        Tijdens mijn stageperiode bij de integratie-experten van Dots & Arrows had ik een aanbod gekregen om na mijn stage bij hen aan de slag te gaan. 
                                        Hiervoor had ik nog nooit gehoord van integratie. Na wat uitleg en een demo van één van de managing partners leek me dit wel iets interessants om mij in te verdiepen en daar was een stage een ideale kans voor. 
                                        In deze periode heb ik ontdekt dat integratie wel ‘mijn ding’ is en daarom ben ik ook ingegaan op het aanbod van Dots & Arrows om bij hen te starten als vaste integratie-ontwikkelaar.
                                        </p>
                                        <p className="content-paragraph">
                                        Dots & Arrows voert hun integratieopdrachten voornamelijk uit via het integratieplatform MuleSoft, waarvan zij ook trotse partners zijn. 
                                        Het is via hen dat ik de kans heb gekregen om een Certified MuleSoft Developer te worden. Om dit te kunnen worden is het afleggen van een examen vereist waarmee je kan aantonen dat je over de nodige competenties beschikt. 
                                        </p>
                                        <p className="content-paragraph">
                                        Om dit examen tot een goed einde te brengen is natuurlijk de nodige voorbereiding nodig. Hiervoor voorziet MuleSoft in cursusmateriaal. 
                                        Dit cursusmateriaal bestaat uit slides, video’s en oefeningen die doorheen de verschillende hoofdstukken aangevuld en/of uitgebreid worden. Dit wordt allemaal beschikbaar gesteld via hun eigen opleidingsplatform Trailhead. 
                                        Er wordt verwacht dat al dit cursusmateriaal via zelfstudie wordt doorgenomen. Na elk hoofdstuk wordt er een soort van quiz voorzien. 
                                        Hiermee kan je jezelf testen of je het volledige hoofdstuk daadwerkelijk begrepen hebt.
                                        </p>
                                        <img src={mulesoftCourse} alt="screenshot course" className="content-image" />
                                        <p className="content-paragraph">
                                        De cursus bestaat uit twee delen. Elk deel geeft een indicatie van het aantal geschatte uren dat hieraan besteed zal worden. 
                                        Dit heeft deels een vertekend beeld omdat het aantal uren dat je hier effectief mee bezig bent, geen rekening houdt met al de oefeningen die gemaakt kunnen worden. Het aantal gespendeerde uren kan dus zeker maal twee gedaan worden.
                                        </p>
                                        <p className="content-paragraph">
                                        Het eerste deel geeft je een meer algemene kijk op wat MuleSoft nu juist is, wat integratie is en hoe dit toe te passen in een bedrijfscontext. 
                                        Verder wordt er gestart met het aanleren van de basis van het Anypoint Platform. Dit is het platform dat MuleSoft aanbiedt aan developers om de integratie daadwerkelijk te gaan bouwen. 
                                        Deze worden gebouwd door een opeenvolging van verschillende componenten met telkens hun eigen functie en doel. 
                                        Aan de hand hiervan kunnen verschillende flows ontworpen worden om zo uiteindelijk tot een herbruikbare API te komen. Anypoint platform biedt hiervoor veel verschillende tools zoals design center, API manager en anypoint studio.
                                        </p>
                                        <img src={exampleFlow} alt="Example flow" className="content-image" />
                                        <p className="content-paragraph">
                                        Deel twee gaat dieper in op het ontwikkelen van deze flows en leert je werken met meer geavanceerde flows, error handling en hoe je records van grote bestanden het beste kunt processen. 
                                        </p>
                                        <p className="content-paragraph">
                                        De oefeningen die beschikbaar waren, verduidelijkten de theorie en gingen op bepaalde vlakken dieper in dan in de theorie vermeld was. 
                                        Omdat bij het maken van bepaalde oefeningen soms toch nog extra verduidelijking nodig was, moest er geregeld nog gezocht worden naar documentatie van bepaalde componenten en werkwijzen.
                                        </p>
                                        <p className="content-paragraph">
                                        Eens al het cursusmateriaal dat MuleSoft zelf beschikbaar stelt was afgerond, is er nog de optie om een voorbeeldexamen te maken. 
                                        Deze bestaat uit zestig meerkeuzevragen die een indicatie geven hoe het echte examen er gaat uitzien en dus een cursist een goede voorbereiding geven aan wat die zich mag verwachten.
                                        </p>
                                        <p className="content-paragraph">
                                        Verder om mijn kennis voor het examen nog verder uit te breiden en natuurlijk ook als oefeningen op toekomstige projecten voor klanten, werd er door het bedrijf zelf uit nog een grote oefening beschikbaar gesteld die een echte case bij een klant moet voorstellen.
                                        </p>

                                        <h2 className="accordion-subtitle">Reflectie</h2>
                                        <p className="content-paragraph">
                                        Op het moment van schrijven ben ik nog steeds bezig met voorbereiden op het examen. 
                                        Meer specifiek met de case die een real-life scenario moet voorstellen. 
                                        Het certificaat heb ik momenteel dus nog niet behaald omdat het examen gepland staat voor september. Toch wil ik zeker dit project gebruiken voor mijn I-Talent portfolio.  
                                        </p>
                                        <p className="content-paragraph">
                                        De reden hiervoor is dat dit project/deze opleiding tot nu toe al een grote meerwaarde is gebleken voor mijn persoonlijke ontwikkeling en ook van groot nut is voor mijn huidige job als Integration Developer. 
                                        Door de omvang van de opleiding vergt dit wel vrij veel tijd van je. Er komt veel nieuwe informatie op je af en dat vraagt de nodige doorzetting.
                                        </p>
                                        <p className="content-paragraph">
                                        Tijdens de opleiding aan PXL Hasselt zijn we niet in aanmerking gekomen met integratie op zich. Toch zijn er in dit domein veel aspecten die terugkomen uit de opleiding. Een voorbeeld hiervan is de eigen scripting en data transformeer taal DataWeave. 
                                        Door de kennis die ik heb opgedaan van verschillende programmeertalen tijdens de opleiding, ben ik hiermee snel aan de slag kunnen gaan. 
                                        Ook de meer specifieke termen en noodzakelijk kennis die nodig is bij het ontwikkelen van API’s, is hier goed van pas gekomen.
                                        </p>
                                        <p className="content-paragraph">
                                        Echte problemen heb ik tijdens de opleiding niet ondervonden. Enkel dat bij sommige delen in de cursus niet diep of diep genoeg wordt ingegaan op bepaalde aspecten. 
                                        Daarom was het nodig om hier zelf onderzoek naar te doen. Wat zeker niet slecht is. Dit omdat in mijn ogen je zelfstandig werken stimuleert en zelf initiatief durft nemen om verder te kijken dan enkel de cursus. 
                                        </p>
                                        <p className="content-paragraph">
                                        Samengevat ben ik blij dat ik de kans krijg om dit traject te doorlopen en dat ik de mogelijkheid krijg om een certified developer te worden. 
                                        </p>
                                        <button className="content-button" >
                                            <a className="a-link" href="https://github.com/NandoCraninckx/exercises-mulesoft" target="_blank" rel="noopener noreferrer">
                                                Code GitHub
                                            </a>
                                        </button>
                                    </div> 
                                }
                                isActive={isActive === 3}
                                onClick={() => handleClick(3)}/>
                        </div>                        
                    </div>
                </div> 
            </div>
        </section> 
    );
};

export default AccordionMenu;
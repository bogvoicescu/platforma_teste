import React, {useState, useContext} from 'react';
import { QuizContext } from '../../Helpers/Context';import "./MainCat.css";
import Nav from '../Nav/Nav';
import Footer from '../Nav/Footer';

const CatIII1p1 = () => {
    const {score, setScore, setGameState, test} = useContext(QuizContext);
    return (
        <div className="MenuContainer">
            <Nav/>
            <div className="Menu">
            <div className="Text">
            <p align="center">
    Declarația Universală a Drepturilor Omului din 10 decembrie 1948 (emitent
    Organizația Națiunilor Unite)
</p>
<p>
    La 10 decembrie 1948, Adunarea Generală a O.N.U. a adoptat şi proclamat
    Declaraţia universala a drepturilor omului. După acest act istoric,
    Adunarea Generală a recomandat statelor membre sa nu precupeteasca nici
    unul din mijloacele care le stau la dispoziţie pentru a publică în mod
    solemn textul Declaraţiei şi „pentru a face astfel ca el să fie distribuit,
    afişat, citit şi comentat, în principal în şcoli şi în alte instituţii de
    învăţământ, indiferent de statutul politic al ţărilor sau teritoriilor”.
</p>
<p align="center">
    <strong>Articolul 1</strong>
</p>
<p>
    Toate fiinţele umane se nasc libere şi egale în demnitate şi în drepturi.
</p>
<p>
    Ele sunt înzestrate cu ratiune şi constiinta şi trebuie să se comporte
    unele faţă de altele în spiritul fraternitatii.
</p>
<p align="center">
    <strong>Articolul 2</strong>
</p>
<p>
    Fiecare om se poate prevala de toate drepturile şi libertăţile proclamate
    în prezenta declaraţie fără nici un fel de deosebire ca, de pilda,
    deosebirea de rasa, culoare, sex, limba, religie, opinie politica sau orice
    alta opinie, de origine naţionala sau socială, avere, naştere sau orice
    alte împrejurări. În afară de aceasta, nu se va face nici o deosebire după
    statutul politic, juridic sau internaţional al tarii sau al teritoriului de
    care tine o persoană, fie ca aceasta ţara sau teritoriu sînt independente,
    sub tutela, neautonome sau supuse vreunei alte limitări de suveranitate.
</p>
<p align="center">
    <strong>Articolul 3</strong>
</p>
<p>
    Orice ființă umană are dreptul la viaţă, la libertate şi la securitatea
    persoanei sale.
</p>
<p align="center">
    <strong>Articolul 4</strong>
</p>
<p>
    Nimeni nu va fi ţinut în sclavie, nici în servitute: sclavajul şi comerţul
    cu sclavi sînt, interzise sub toate formele lor.
</p>
<p align="center">
    <strong>Articolul 5</strong>
</p>
<p>
    Nimeni nu va fi supus la torturi, nici la pedepse sau tratamente crude,
    inumane sau degradante.
</p>
<p align="center">
    <strong>Articolul 6</strong>
</p>
<p>
    Fiecare om are dreptul să i se recunoască pretutindeni personalitatea
    juridică.
</p>
<p align="center">
    <strong>Articolul 7</strong>
</p>
<p>
    Toţi oamenii sînt egali în faţa legii şi au, fără nici o deosebire, dreptul
    la o egală protecţie a legii. Toţi oamenii au dreptul la o protecţie egală
    împotriva oricărei discriminări care ar viola prezenta declaraţie şi
    împotriva oricărei provocări la o asemenea discriminare.
</p>
<p align="center">
    <strong>Articolul 8</strong>
</p>
<p>
    Orice persoană are dreptul la satisfacția efectivă din partea instanţelor
    juridice naţionale competente împotriva actelor care violează drepturile
    fundamentale ce-i sunt recunoscute prin constituţie sau lege.
</p>
<p align="center">
    <strong>Articolul 9</strong>
</p>
<p>
    Nimeni nu trebuie să fie arestat, deţinut sau exilat în mod arbitrar.
</p>
<p align="center">
    <strong>Articolul 10</strong>
</p>
<p>
    Orice persoană are dreptul în deplina egalitate de a fi audiată în mod
    echitabil şi public de către un tribunal independent şi impartial care va
    hotărî fie asupra drepturilor şi obligaţiilor sale, fie asupra temeiniciei
    oricărei acuzari în materie penală îndreptată împotriva sa.
</p>
<p align="center">
    <strong>Articolul 11</strong>
</p>
<p>
    1. Orice persoană acuzată de comiterea unui act cu caracter penal are
    dreptul să fie presupusă nevinovată pînă când vinovăţia sa va fi stabilită
    în mod legal în cursul unui proces public în care i-au fost asigurate toate
    garanţiile necesare apărării sale.
</p>
<p>
    2. Nimeni nu va fi condamnat pentru acţiuni sau omisiuni care nu
    constituiau, în momentul când au fost comise, un act cu caracter penal
    conform dreptului internaţional sau naţional. De asemenea, nu se va aplica
    nici o pedeapsă mai grea decât aceea care era aplicabilă în momentul când a
    fost săvârșit actul cu caracter penal.
</p>
<p align="center">
    <strong>Articolul 12</strong>
</p>
<p>
    Nimeni nu va fi supus la imixtiuni arbitrare în viaţa sa personală, în
    familia sa, în domiciliul lui sau în corespondența sa, nici la atingeri
    aduse onoarei şi reputaţiei sale. Orice persoană are dreptul la protecţia
    legii împotriva unor asemenea imixtiuni sau atingeri.
</p>
<p align="center">
    <strong>Articolul 13</strong>
</p>
<p>
    1. Orice persoană are dreptul de a circula în mod liber şi de a-şi alege
    reşedinţa în interiorul graniţelor unui stat.
</p>
<p>
    2. Orice persoană are dreptul de a părăsi orice ţara, inclusiv a sa, şi de
    a reveni în ţara sa.
</p>
<p align="center">
    <strong>Articolul 14</strong>
</p>
<p>
    1. În caz de persecuție, orice persoană are dreptul de a căuta azil şi de a
    beneficia de azil în alte țări.
</p>
<p>
    2. Acest drept nu poate fi invocat în caz de urmărire ce rezultă în mod
    real dintr-o crimă de drept comun sau din acţiuni contrare scopurilor şi
    principiilor Organizaţiei Naţiunilor Unite.
</p>
<p align="center">
    <strong>Articolul 15</strong>
</p>
<p>
    1. Orice persoană are dreptul la o cetăţenie.
</p>
<p>
    2. Nimeni nu poate fi lipsit în mod arbitrar de cetăţenia sa sau de dreptul
    de a-şi schimba cetăţenia.
</p>
<p align="center">
    <strong>Articolul 16</strong>
</p>
<p>
    1. Cu începere de la împlinirea virstei legale, bărbatul şi femeia, fără
    nici o restrictie în ce priveşte rasa, naţionalitatea sau religia, au
    dreptul de a se căsători şi de a întemeia o familie. Ei au drepturi egale
    la contractarea căsătoriei, în decursul căsătoriei şi la desfacerea ei.
</p>
<p>
    2. Căsătoria nu poate fi încheiată decît cu consimţământul liber şi deplin
    al viitorilor soţi.
</p>
<p>
    3. Familia constituie elementul natural, şi fundamental al societăţii şi
    are dreptul la ocrotire din partea societăţii şi a statului.
</p>
<p align="center">
    <strong>Articolul 17</strong>
</p>
<p>
    1. Orice persoană are dreptul la proprietate, atât singură, cât şi în
    asociaţie cu alţii.
</p>
<p>
    2. Nimeni nu poate fi lipsit în mod arbitrar de proprietatea sa.
</p>
<p align="center">
    <strong>Articolul 18</strong>
</p>
<p>
    Orice om are dreptul la libertatea gândirii, de conștiință şi religie;
    acest drept include libertatea de a-şi schimba religia sau convingerea,
    precum şi libertatea de a-şi manifesta religia sau convingerea, singur sau
    împreună cu alţii, atât în mod public, cât şi privat, prin învăţătura,
    practici religioase, cult şi îndeplinirea riturilor.
</p>
<p align="center">
    <strong>Articolul 19</strong>
</p>
<p>
    Orice om are dreptul la libertatea opiniilor şi exprimării; acest drept
    include libertatea de a avea opinii fără imixtiune din afară, precum şi
    libertatea de a căuta, de a primi şi de a răspândi informaţii şi idei prin
    orice mijloace şi independent de frontierele de stat.
</p>
<p align="center">
    <strong>Articolul 20</strong>
</p>
<p>
    1. Orice persoană are dreptul la libertatea de întrunire şi de asociere
    paşnică.
</p>
<p>
    2. Nimeni nu poate fi silit să facă parte dintr-o asociaţie.
</p>
<p align="center">
    <strong>Articolul 21</strong>
</p>
<p>
    1. Orice persoană are dreptul de a lua parte la conducerea treburilor
    publice ale țării sale, fie direct, fie prin reprezentanţi liber aleşi.
</p>
<p>
    2. Orice persoană are dreptul de acces egal la funcţiile publice din ţara
    sa.
</p>
<p>
    3. Voinţa poporului trebuie să constituie baza puterii de stat; aceasta
    voinţa trebuie să fie exprimată prin alegeri nefalsificate, care să aibă
    loc în mod periodic prin sufragiu universal, egal şi exprimat prin vot
    secret sau urmînd o procedură echivalenta care să asigure libertatea
    votului.
</p>
<p align="center">
    <strong>Articolul 22</strong>
</p>
<p>
    Orice persoană, în calitatea sa de membru al societăţii, are dreptul la
    securitatea socială; ea este îndreptătiță ca prin efortul naţional şi
    colaborarea internationala, ținându-se seama de organizarea şi resursele
    fiecărei țări, să obţină realizarea drepturilor economice, sociale şi
    culturale indispensabile pentru demnitatea sa şi libera dezvoltare a
    personalităţii sale.
</p>
<p align="center">
    <strong>Articolul 23</strong>
</p>
<p>
    1. Orice persoană are dreptul la muncă, la libera alegere a muncii sale, la
    condiţii echitabile şi satisfăcătoare de muncă, precum şi la ocrotirea
    împotriva somajului.
</p>
<p>
    2. Toţi oamenii, fără nici o discriminare, au dreptul la salariu egal
    pentru muncă egală.
</p>
<p>
    3. Orice om care muncește are dreptul la o retribuire echitabilă şi
    satisfăcătoare care să-i asigure atât lui, cât şi familiei sale, o
    existență conformă cu demnitatea umană şi completată, la nevoie, prin alte
    mijloace de protecţie socială.
</p>
<p>
    4. Orice persoană are dreptul de a întemeia sindicate şi de a se afilia la
    sindicate pentru apărarea intereselor sale.
</p>
<p align="center">
    <strong>Articolul 24</strong>
</p>
<p>
    Orice persoană are dreptul la odihnă şi recreatie, inclusiv la o limitare
    rezonabilă a zilei de muncă şi la concedii periodice plătite.
</p>
<p align="center">
    <strong>Articolul 25</strong>
</p>
<p>
    1. Orice om are dreptul la un nivel de trai care să-i asigure sănătatea şi
    bunăstarea lui şi familiei sale, cuprinzând hrana, îmbrăcămintea, locuinta,
    îngrijirea medicală, precum şi serviciilor sociale necesare; el are dreptul
    la asigurare în caz de şomaj, boala, invaliditate, văduvie, batrinete sau
    în celelalte cazuri de pierdere a mijloacelor de subzistență, în urma unor
    împrejurări independente de voinţa sa.
</p>
<p>
    2. Mama şi copilul au dreptul la ajutor şi ocrotire deosebite. Toţi copiii,
    fie ca sânt născuţi în cadrul unei căsătorii sau în afară acesteia, se
    bucură de aceeaşi protecţie socială.
</p>
<p align="center">
    <strong>Articolul 26</strong>
</p>
<p>
    1. Orice persoană are dreptul la învăţătură. Învăţământul trebuie să fie
    gratuit, cel puţin în ceea ce priveşte învăţământul elementar şi general.
    Învăţămîntul tehnic şi profesional trebuie să fie la îndemâna tuturor, iar
    învăţământul superior trebuie să fie de asemenea egal, accesibil tuturora,
    pe bază de merit.
</p>
<p>
    2. Învăţămîntul trebuie să urmărească dezvoltarea deplină a personalităţii
    umane şi întărirea respectului faţă de drepturile omului şi libertăţile
    fundamentale. El trebuie să promoveze înţelegerea, toleranta, prietenia
    între toate popoarele şi toate grupurile rasiale sau religioase, precum şi
    dezvoltarea activităţii Organizaţiei Naţiunilor Unite pentru menţinerea
    păcii.
</p>
<p>
    3. Părinţii au dreptul de prioritate în alegerea felului de învăţământ
    pentru copiii lor minori.
</p>
<p align="center">
    <strong>Articolul 27</strong>
</p>
<p>
    1. Orice persoană are dreptul de a lua parte în mod liber la viaţa
    culturală a colectivităţii, de a se bucura de arte şi de a participa la
    progresul ştiinţific şi la binefacerile lui.
</p>
<p>
    2. Fiecare om are dreptul la ocrotirea intereselor morale şi materiale care
    decurg din orice lucrare ştiinţifică, literară sau artistică al carei autor
    este.
</p>
<p align="center">
    <strong>Articolul 28</strong>
</p>
<p>
    Orice persoană are dreptul la o orânduire socială şi internațională în care
    drepturile şi libertăţile expuse în prezenta declaraţie pot fi pe deplin
    înfăptuite.
</p>
<p align="center">
    <strong>Articolul 29</strong>
</p>
<p>
    1.
        Orice persoană are îndatoriri faţă de colectivitate, deoarece numai în
        cadrul acesteia este posibilă dezvoltarea liberă şi deplină a
        personalităţii sale.
</p>
<p>
    2.
        În exercitarea drepturilor şi libertăţilor sale, fiecare om nu este
        supus decât numai îngrădirilor stabilite prin lege, exclusiv în scopul
        de a asigura cuvenită recunoaştere şi respectare a drepturilor şi
        libertăţilor altora şi ca să fie satisfăcute justele cerinţe ale
        moralei, ordinii publice şi bunăstării generale într-o societate
        democratică.
</p>
<p>
    3. Aceste drepturi şi libertăţi nu vor putea fi în nici un caz exercitate
    contrar scopurilor şi principiilor Organizaţiei Naţiunilor Unite.
</p>
<p align="center">
    <strong>Articolul 30</strong>
</p>
<p>
    Nici o dispoziţie a prezentei Declaraţii nu poate fi interpretată ca
    implicând pentru vreun stat, grupare sau persoană dreptul de a se deda la
    vreo activitate sau de a savârși vreun act îndreptat spre desfiinţarea unor
    drepturi sau libertăţi enunţate în prezenta declaraţie.
</p>
</div>
        
               <button onClick={()=>setGameState("catiii1")} className='back'>Înapoi</button>
        </div>
        <Footer />
</div>
    );
};

export default CatIII1p1;
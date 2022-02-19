import React, {useState, useContext} from 'react';
import { QuizContext } from '../../Helpers/Context';import "./MainCat.css";
import Nav from '../Nav/Nav';
import Footer from '../Nav/Footer';

const CatIII2p1 = () => {
    const {score, setScore, setGameState, test} = useContext(QuizContext);
    return (
        <div className="MenuContainer">

            <Nav/>
            <div className="Menu">
            <div className="Text">
            <p align="center">
    <strong>
        Constituția României ( Tilul II Drepturile, libertățile și îndatoririle
        fundamentale)
    </strong>
</p>
<p align="center">
    <strong>Articolul 15</strong>
</p>
<p align="center">
    <strong>Universalitatea</strong>
</p>
<p>
    (1) Cetăţenii beneficiază de drepturile şi de libertăţile consacrate prin
    Constituţie şi prin alte legi şi au obligaţiile prevăzute de acestea.
</p>
<p>
    (2) Legea dispune numai pentru viitor, cu excepţia legii penale sau
    contravenţionale mai favorabile.
</p>
<p align="center">
    <strong>Articolul 16</strong>
</p>
<p align="center">
    <strong>Egalitatea în drepturi</strong>
</p>
<p>
    (1) Cetăţenii sunt egali în faţa legii şi a autorităţilor publice, fără
    privilegii şi fără discriminări.
</p>
<p>
    (2) Nimeni nu este mai presus de lege.
</p>
<p>
    (3) Funcţiile şi demnităţile publice, civile sau militare, pot fi ocupate,
    în condiţiile legii, de persoanele care au cetăţenia română şi domiciliul
    în ţara. Statul român garantează egalitatea de sanse între femei şi bărbaţi
    pentru ocuparea acestor funcţii şi demnitati.
</p>
<p>
    (4) În condiţiile aderării României la Uniunea Europeană, cetăţenii Uniunii
    care îndeplinesc cerinţele legii organice au dreptul de a alege şi de a fi
    aleşi în autorităţile administraţiei publice locale.
</p>
<p align="center">
    <strong>Articolul 17</strong>
</p>
<p align="center">
    <strong>Cetăţenii români în străinătate</strong>
</p>
<p>
    Cetăţenii români se bucura în străinătate de protecţia statului român şi
    trebuie să-şi îndeplinească obligaţiile, cu excepţia acelora ce nu sunt
    compatibile cu absenta lor din ţara.
</p>
<p align="center">
    <strong>Articolul 18</strong>
</p>
<p align="center">
    <strong>Cetăţenii străini şi apatrizii</strong>
</p>
<p>
    (1) Cetăţenii străini şi apatrizii care locuiesc în România se bucura de
    protecţia generală a persoanelor şi a averilor, garantată de Constituţie şi
    de alte legi.
</p>
<p>
    (2) Dreptul de azil se acordă şi se retrage în condiţiile legii, cu
    respectarea tratatelor şi a convenţiilor internaţionale la care România
    este parte.
</p>
<p align="center">
    <strong>Articolul 19</strong>
</p>
<p align="center">
    <strong>Extrădarea şi expulzarea</strong>
</p>
<p>
    (1) Cetăţeanul român nu poate fi extrădat sau expulzat din România.
</p>
<p>
    (2) Prin derogare de la prevederile alineatului (1), cetăţenii români pot
    fi extrădaţi în baza convenţiilor internaţionale la care România este
    parte, în condiţiile legii şi pe bază de reciprocitate.
</p>
<p>
    (3) Cetăţenii străini şi apatrizii pot fi extrădaţi numai în baza unei
    convenţii internaţionale sau în condiţii de reciprocitate.
</p>
<p>
    (4) Expulzarea sau extrădarea se hotărăşte de justiţie.
</p>
<p align="center">
    <strong>Articolul 20</strong>
</p>
<p align="center">
    <strong>Tratatele internaţionale privind drepturile omului</strong>
</p>
<p>
    (1) Dispoziţiile constituţionale privind drepturile şi libertăţile
    cetăţenilor vor fi interpretate şi aplicate în concordanta cu Declaraţia
    Universala a Drepturilor Omului, cu pactele şi cu celelalte tratate la care
    România este parte.
</p>
<p>
    (2) Dacă există neconcordanțe între pactele şi tratatele privitoare la
    drepturile fundamentale ale omului, la care România este parte, şi legile
    interne, au prioritate reglementările internaţionale, cu excepţia cazului
    în care Constituţia sau legile interne conţin dispoziţii mai favorabile.
</p>
<p align="center">
    <strong>Articolul 21</strong>
</p>
<p align="center">
    <strong>Accesul liber la justiţie</strong>
</p>
<p>
    (1) Orice persoană se poate adresa justiţiei pentru apărarea drepturilor, a
    libertăţilor şi a intereselor sale legitime.
</p>
<p>
    (2) Nici o lege nu poate îngrădi exercitarea acestui drept.
</p>
<p>
    (3) Părţile au dreptul la un proces echitabil şi la soluţionarea cauzelor
    într-un termen rezonabil.
</p>
<p>
    (4) Jurisdictiile speciale administrative sunt facultative şi gratuite.
</p>
<h2 align="center">
        <strong>Drepturile şi libertăţile fundamentale</strong>
</h2>
<p align="center">
    <strong>Articolul 22</strong>
</p>
<p align="center">
    <strong>Dreptul la viaţă şi la integritate fizică şi psihică</strong>
</p>
<p>
    (1) Dreptul la viaţă, precum şi dreptul la integritate fizică şi psihică
    ale persoanei sunt garantate.
</p>
<p>
    (2) Nimeni nu poate fi supus torturii şi nici unui fel de pedeapsă sau de
    tratament inuman ori degradant.
</p>
<p>
    (3) Pedeapsa cu moartea este interzisă.
</p>
<p align="center">
    <strong>Articolul 23</strong>
</p>
<p align="center">
    <strong>Libertatea individuală</strong>
</p>
<p>
    (1) Libertatea individuală şi siguranţa persoanei sunt inviolabile.
</p>
<p>
    (2) Percheziţionarea, reţinerea sau arestarea unei persoane sunt permise
    numai în cazurile şi cu procedura prevăzute de lege.
</p>
<p>
    (3) Reţinerea nu poate depăşi 24 de ore.
</p>
<p>
    (4) Arestarea preventivă se dispune de judecător şi numai în cursul
    procesului penal.
</p>
<p>
    (5) În cursul urmăririi penale arestarea preventivă se poate dispune pentru
    cel mult 30 de zile şi se poate prelungi cu câte cel mult 30 de zile, fără
    ca durata totală să depăşească un termen rezonabil, şi nu mai mult de 180
    de zile.
</p>
<p>
    (6) În faza de judecată instanţa este obligată, în condiţiile legii, sa
    verifice periodic, şi nu mai târziu de 60 de zile, legalitatea şi
    temeinicia arestării preventive şi sa dispună, de îndată, punerea în
    libertate a inculpatului, dacă temeiurile care au determinat arestarea
    preventivă au încetat sau dacă instanţa constată că nu există temeiuri noi
    care să justifice menţinerea privarii de libertate.
</p>
<p>
    (7) Încheierile instanţei privind măsura arestării preventive sunt supuse
    căilor de atac prevăzute de lege.
</p>
<p>
    (8) Celui reţinut sau arestat i se aduc de îndată la cunoştinţa, în limba
    pe care o înţelege, motivele reţinerii sau ale arestării, iar învinuirea,
    în cel mai scurt termen; învinuirea se aduce la cunoştinţa numai în
    prezenta unui avocat, ales sau numit din oficiu.
</p>
<p>
    (9) Punerea în libertate a celui reţinut sau arestat este obligatorie, dacă
    motivele acestor măsuri au dispărut, precum şi în alte situaţii prevăzute
    de lege.
</p>
<p>
    (10) Persoana arestata preventiv are dreptul sa ceara punerea sa în
    libertate provizorie, sub control judiciar sau pe cauţiune.
</p>
<p>
    (11) Până la rămânerea definitivă a hotărârii judecătoreşti de condamnare,
    persoana este considerată nevinovată.
</p>
<p>
    (12) Nici o pedeapsă nu poate fi stabilită sau aplicată decât în condiţiile
    şi în temeiul legii.
</p>
<p>
    (13) Sancţiunea privativă de libertate nu poate fi decât de natura penală.
</p>
<p align="center">
    <strong>Articolul 24</strong>
</p>
<p align="center">
    <strong>Dreptul la apărare</strong>
</p>
<p>
    (1) Dreptul la apărare este garantat.
</p>
<p>
    (2) În tot cursul procesului, părţile au dreptul să fie asistate de un
    avocat, ales sau numit din oficiu.
</p>
<p align="center">
    <strong>Articolul 25</strong>
</p>
<p align="center">
    <strong>Libera circulaţie</strong>
</p>
<p>
    (1) Dreptul la liberă circulaţie, în ţară şi în străinătate, este garantat.
    Legea stabileşte condiţiile exercitării acestui drept.
</p>
<p>
    (2) Fiecărui cetăţean îi este asigurat dreptul de a-şi stabili domiciliul
    sau reşedinţa în orice localitate din ţară, de a emigra, precum şi de a
    reveni în ţară.
</p>
<p align="center">
    <strong>Articolul 26</strong>
</p>
<p align="center">
    <strong>Viaţa intimă, familială şi privată</strong>
</p>
<p>
    (1) Autorităţile publice respectă şi ocrotesc viaţa intimă, familială şi
    privată.
</p>
<p>
    (2) Persoana fizică are dreptul sa dispună de ea însăşi, dacă nu încalcă
    drepturile şi libertăţile altora, ordinea publică sau bunele moravuri.
</p>
<p align="center">
    <strong>Articolul 27</strong>
</p>
<p align="center">
    <strong>Inviolabilitatea domiciliului</strong>
</p>
<p>
    (1) Domiciliul şi reşedinţa sunt inviolabile. Nimeni nu poate pătrunde sau
    rămâne în domiciliul ori în reşedinţa unei persoane fără învoirea acesteia.
</p>
<p>
    (2) De la prevederile alineatului (1) se poate deroga prin lege pentru
    următoarele situaţii:
</p>
<p>
    a) executarea unui mandat de arestare sau a unei hotărâri judecătoreşti;
</p>
<p>
    b) înlăturarea unei primejdii privind viaţa, integritatea fizica sau
    bunurile unei persoane;
</p>
<p>
    c) apărarea securităţii naţionale sau a ordinii publice;
</p>
<p>
    d) prevenirea răspândirii unei epidemii.
</p>
<p>
    (3) Percheziţia se dispune de judecător şi se efectuează în condiţiile şi
    în formele prevăzute de lege.
</p>
<p>
    (4) Percheziţiile în timpul nopţii sunt interzise, în afară de cazul
    infracţiunilor flagrante.
</p>
<p align="center">
    <strong>Articolul 28</strong>
</p>
<p align="center">
    <strong>Secretul coresponden</strong>
    <strong>ț</strong>
    <strong>ei</strong>
</p>
<p>
    Secretul scrisorilor, al telegramelor, al altor trimiteri poştale, al
    convorbirilor telefonice şi al celorlalte mijloace legale de comunicare
    este inviolabil.
</p>
<p align="center">
    <strong>Articolul 29</strong>
</p>
<p align="center">
    <strong>Libertatea conştiinţei</strong>
</p>
<p>
    (1) Libertatea gândirii şi a opiniilor, precum şi libertatea credinţelor
    religioase nu pot fi îngrădite sub nici o formă. Nimeni nu poate fi
    constrâns să adopte o opinie ori să adere la o credinţă religioasă,
    contrare convingerilor sale.
</p>
<p>
    (2) Libertatea conştiinţei este garantată; ea trebuie să se manifeste în
    spirit de toleranță şi de respect reciproc.
</p>
<p>
    (3) Cultele religioase sunt libere şi se organizează potrivit statutelor
    proprii, în condiţiile legii.
</p>
<p>
    (4) În relaţiile dintre culte sunt interzise orice forme, mijloace, acte
    sau acţiuni de învrăjbire religioasă.
</p>
<p>
    (5) Cultele religioase sunt autonome faţă de stat şi se bucură de sprijinul
    acestuia, inclusiv prin înlesnirea asistenţei religioase în armată, în
    spitale, în penitenciare, în azile şi în orfelinate.
</p>
<p>
    (6) Părinţii sau tutorii au dreptul de a asigura, potrivit propriilor
    convingeri, educaţia copiilor minori a căror răspundere le revine.
</p>
<p align="center">
    <strong>Articolul 30</strong>
</p>
<p align="center">
    <strong>Libertatea de exprimare</strong>
</p>
<p>
    (1) Libertatea de exprimare a gandurilor, a opiniilor sau a credinţelor şi
    libertatea creaţiilor de orice fel, prin viu grai, prin scris, prin
    imagini, prin sunete sau prin alte mijloace de comunicare în public, sunt
    inviolabile.
</p>
<p>
    (2) Cenzura de orice fel este interzisă.
</p>
<p>
    (3) Libertatea presei implica şi libertatea de a înfiinţa publicaţii.
</p>
<p>
    (4) Nici o publicaţie nu poate fi suprimată.
</p>
<p>
    (5) Legea poate impune mijloacelor de comunicare în masa obligaţia de a
    face publică sursa finanţării.
</p>
<p>
    (6) Libertatea de exprimare nu poate prejudicia demnitatea, onoarea, viaţa
    particulară a persoanei şi nici dreptul la propria imagine.
</p>
<p>
    (7) Sunt interzise de lege defăimarea tarii şi a naţiunii, îndemnul la
    război de agresiune, la ura naţionala, rasială, de clasă sau religioasă,
    incitarea la discriminare, la separatism teritorial sau la violență
    publică, precum şi manifestările obscene, contrare bunelor moravuri.
</p>
<p>
    (8) Răspunderea civilă pentru informaţia sau pentru creaţia adusă la
    cunoştinţa publică revine editorului sau realizatorului, autorului,
    organizatorului manifestării artistice, proprietarului mijlocului de
    multiplicare, al postului de radio sau de televiziune, în condiţiile legii.
    Delictele de presă se stabilesc prin lege.
</p>
<p align="center">
    <strong>Articolul 31</strong>
</p>
<p align="center">
    <strong>Dreptul la informaţie</strong>
</p>
<p>
    (1) Dreptul persoanei de a avea acces la orice informaţie de interes public
    nu poate fi îngrădit.
</p>
<p>
    (2) Autorităţile publice, potrivit competențelor ce le revin, sunt obligate
    să asigure informarea corectă a cetăţenilor asupra treburilor publice şi
    asupra problemelor de interes personal.
</p>
<p>
    (3) Dreptul la informaţie nu trebuie să prejudicieze măsurile de protecţie
    a tinerilor sau securitatea naţională.
</p>
<p>
    (4) Mijloacele de informare în masa, publice şi private, sunt obligate să
    asigure informarea corectă a opiniei publice.
</p>
<p>
    (5) Serviciile publice de radio şi de televiziune sunt autonome. Ele
    trebuie să garanteze grupurilor sociale şi politice importante exercitarea
    dreptului la antenă. Organizarea acestor servicii şi controlul parlamentar
    asupra activităţii lor se reglementează prin lege organică.
</p>
<p align="center">
<strong>Articolul 32</strong>
</p>
<p align="center">
    <strong>Dreptul la învăţătură</strong>
</p>
<p>
    (1) Dreptul la învăţătură este asigurat prin învăţământul general
    obligatoriu, prin învăţământul liceal şi prin cel profesional, prin
    învăţământul superior, precum şi prin alte forme de instrucţie şi de
    perfecţionare.
</p>
<p>
    (2) Învăţământul de toate gradele se desfăşoară în limba română. În
    condiţiile legii, învăţământul se poate desfăşura şi într-o limbă de
    circulaţie internațională.
</p>
<p>
    (3) Dreptul persoanelor aparţinând minorităţilor naţionale de a învaţă
    limba lor maternă şi dreptul de a putea fi instruite în această limbă sunt
    garantate; modalităţile de exercitare a acestor drepturi se stabilesc prin
    lege.
</p>
<p>
    (4) Învăţământul de stat este gratuit, potrivit legii. Statul acordă burse
    sociale de studii copiilor şi tinerilor proveniţi din familii defavorizate
    şi celor institutionalizați, în condiţiile legii.
</p>
<p>
    (5) Învăţământul de toate gradele se desfăşoară în unităţi de stat,
    particulare şi confesionale, în condiţiile legii.
</p>
<p>
    (6) Autonomia universitară este garantată.
</p>
<p>
    (7) Statul asigură libertatea învăţământului religios, potrivit cerinţelor
    specifice fiecărui cult. În şcolile de stat, învăţământul religios este
    organizat şi garantat prin lege.
</p>
<p align="center">
    <strong>Articolul 33</strong>
</p>
<p align="center">
    <strong>Accesul la cultură</strong>
</p>
<p>
    (1) Accesul la cultura este garantat, în condiţiile legii.
</p>
<p>
    (2) Libertatea persoanei de a-şi dezvolta spiritualitatea şi de a accede la
    valorile culturii naţionale şi universale nu poate fi îngrădită.
</p>
<p>
    (3) Statul trebuie să asigure păstrarea identităţii spirituale, sprijinirea
    culturii naţionale, stimularea artelor, protejarea şi conservarea
    moştenirii culturale, dezvoltarea creativității contemporane, promovarea
    valorilor culturale şi artistice ale României în lume.
</p>
<p align="center">
    <strong>Articolul 34</strong>
</p>
<p align="center">
    <strong>Dreptul la ocrotirea sănătăţii</strong>
</p>
<p>
    (1) Dreptul la ocrotirea sănătăţii este garantat.
</p>
<p>
    (2) Statul este obligat să ia măsuri pentru asigurarea igienei şi a
    sănătăţii publice.
</p>
<p>
    (3) Organizarea asistenţei medicale şi a sistemului de asigurări sociale
    pentru boală, accidente, maternitate şi recuperare, controlul exercitării
    profesiilor medicale şi a activităţilor paramedicale, precum şi alte măsuri
    de protecţie a sănătăţii fizice şi mentale a persoanei se stabilesc
    potrivit legii.
</p>
<p align="center">
    <strong>Articolul 35</strong>
</p>
<p align="center">
    <strong>Dreptul la mediu sănătos</strong>
</p>
<p>
    (1) Statul recunoaşte dreptul oricărei persoane la un mediu înconjurător
    sănătos şi echilibrat ecologic.
</p>
<p>
    (2) Statul asigură cadrul legislativ pentru exercitarea acestui drept.
</p>
<p>
    (3) Persoanele fizice şi juridice au îndatorirea de a proteja şi a ameliora
    mediul înconjurător.
</p>
<p align="center">
    <strong>Articolul 36</strong>
</p>
<p align="center">
    <strong>Dreptul de vot</strong>
</p>
<p>
    (1) Cetăţenii au drept de vot de la vârsta de 18 ani, împliniţi până în
    ziua alegerilor inclusiv.
</p>
<p>
    (2) Nu au drept de vot debilii sau alienaţii mintal, puşi sub interdicţie,
    şi nici persoanele condamnate, prin hotărâre judecătorească definitivă, la
    pierderea drepturilor electorale.
</p>
<p align="center">
    <strong>Articolul 37</strong>
</p>
<p align="center">
    <strong>Dreptul de a fi ales</strong>
</p>
<p>
    (1) Au dreptul de a fi aleşi cetăţenii cu drept de vot care îndeplinesc
    condiţiile prevăzute în articolul 16 alineatul (3), dacă nu le este
    interzisă asocierea în partide politice, potrivit articolului 40 alineatul
    (3).
</p>
<p>
    (2) Candidaţii trebuie să fi împlinit, până în ziua alegerilor inclusiv,
    vârsta de cel puţin 23 de ani pentru a fi aleşi în Camera Deputaţilor sau
    în organele administraţiei publice locale, vârsta de cel puţin 33 de ani
    pentru a fi aleşi în Senat şi vârsta de cel puţin 35 de ani pentru a fi
    aleşi în funcţia de Preşedinte al României.
</p>
<p align="center">
    <strong>Articolul 38</strong>
</p>
<p align="center">
    <strong>Dreptul de a fi ales în Parlamentul</strong>
    <strong>European</strong>
</p>
<p>
    În condiţiile aderării României la Uniunea Europeană, cetăţenii români au
    dreptul de a alege şi de a fi aleşi în Parlamentul European.
</p>
<p align="center">
    <strong>Articolul 39</strong>
</p>
<p align="center">
    <strong>Libertatea întrunirilor</strong>
</p>
<p>
    Mitingurile, demonstraţiile, procesiunile sau orice alte întruniri sunt
    libere şi se pot organiza şi desfăşura numai în mod paşnic, fără nici un
    fel de arme.
</p>
<p align="center">
    <strong>Articolul 40</strong>
</p>
<p align="center">
    <strong>Dreptul de asociere</strong>
</p>
<p>
    (1) Cetăţenii se pot asocia liber în partide politice, în sindicate, în
    patronate şi în alte forme de asociere.
</p>
<p>
    (2) Partidele sau organizaţiile care, prin scopurile ori prin activitatea
    lor, militează împotriva pluralismului politic, a principiilor statului de
    drept ori a suveranităţii, a integrităţii sau a independentei României sunt
    neconstituţionale.
</p>
<p>
    (3) Nu pot face parte din partide politice judecătorii Curţii
    Constituţionale, avocaţii poporului, magistraţii, membrii activi ai
    armatei, poliţiştii şi alte categorii de funcţionari publici stabilite prin
    lege organică.
</p>
<p>
    (4) Asociaţiile cu caracter secret sunt interzise.
</p>
<p align="center">
    <strong>Articolul 41</strong>
</p>
<p align="center">
    <strong>Munca şi protecţia socială a muncii</strong>
</p>
<p>
    (1) Dreptul la muncă nu poate fi îngrădit. Alegerea profesiei, a meseriei
    sau a ocupaţiei, precum şi a locului de muncă este liberă.
</p>
<p>
    (2) Salariaţii au dreptul la măsuri de protecţie socială. Acestea privesc
    securitatea şi sănătatea salariaţilor, regimul de muncă al femeilor şi al
    tinerilor, instituirea unui salariu minim brut pe ţara, repausul
    săptămânal, concediul de odihnă plătit, prestarea muncii în condiţii
    deosebite sau speciale, formarea profesională, precum şi alte situaţii
    specifice, stabilite prin lege.
</p>
<p>
    (3) Durata normală a zilei de lucru este, în medie, de cel mult 8 ore.
</p>
<p>
    (4) La munca egală, femeile au salariu egal cu bărbaţii.
</p>
<p>
    (5) Dreptul la negocieri colective în materie de muncă şi caracterul
    obligatoriu al convenţiilor colective sunt garantate.
</p>
<p align="center">
    <strong>Articolul 42</strong>
</p>
<p align="center">
    <strong>Interzicerea muncii forţate</strong>
</p>
<p>
    (1) Munca forţată este interzisă.
</p>
<p>
    (2) Nu constituie munca forţată:
</p>
<p>
    a) activităţile pentru îndeplinirea îndatoririlor militare, precum şi cele
    desfăşurate, potrivit legii, în locul acestora, din motive religioase sau
    de conștiință;
</p>
<p>
    b) munca unei persoane condamnate, prestată în condiţii normale, în
    perioada de detenţie sau de libertate condiţionată;
</p>
<p>
    c) prestaţiile impuse în situaţia creată de calamități ori de alt pericol,
    precum şi cele care fac parte din obligaţiile civile normale stabilite de
    lege.
</p>
<p align="center">
    <strong>Articolul 43</strong>
</p>
<p align="center">
    <strong>Dreptul la grevă</strong>
</p>
<p>
    (1) Salariaţii au dreptul la grevă pentru apărarea intereselor
    profesionale, economice şi sociale.
</p>
<p>
    (2) Legea stabileşte condiţiile şi limitele exercitării acestui drept,
    precum şi garanţiile necesare asigurării serviciilor esenţiale pentru
    societate.
</p>
<p align="center">
    <strong>Articolul 44</strong>
</p>
<p align="center">
    <strong>Dreptul de proprietate privată</strong>
</p>
<p>
    (1) Dreptul de proprietate, precum şi creanţele asupra statului, sunt
    garantate. Conţinutul şi limitele acestor drepturi sunt stabilite de lege.
</p>
<p>
    (2) Proprietatea privată este garantată şi ocrotită în mod egal de lege,
    indiferent de titular. Cetăţenii străini şi apatrizii pot dobândi dreptul
    de proprietate privată asupra terenurilor numai în condiţiile rezultate din
    aderarea României la Uniunea Europeană şi din alte tratate internaţionale
    la care România este parte, pe bază de reciprocitate, în condiţiile
    prevăzute prin lege organică, precum şi prin moştenire legală.
</p>
<p>
    (3) Nimeni nu poate fi expropriat decât pentru o cauză de utilitate
    publică, stabilită potrivit legii, cu dreapta şi prealabilă despăgubire.
</p>
<p>
    (4) Sunt interzise naţionalizarea sau orice alte măsuri de trecere silită
    în proprietate publică a unor bunuri pe baza apartenentei sociale, etnice,
    religioase, politice sau de alta natura discriminatorie a titularilor.
</p>
<p>
    (5) Pentru lucrări de interes general, autoritatea publică poate folosi
    subsolul oricărei proprietăţi imobiliare, cu obligaţia de a despăgubi
    proprietarul pentru daunele aduse solului, plantaţiilor sau construcţiilor,
    precum şi pentru alte daune imputabile autorităţii.
</p>
<p>
    (6) Despăgubirile prevăzute în alineatele (3) şi (5) se stabilesc de comun
    acord cu proprietarul sau, în caz de divergență, prin justiţie.
</p>
<p>
    (7) Dreptul de proprietate obligă la respectarea sarcinilor privind
    protecţia mediului şi asigurarea bunei vecinătăţi, precum şi la respectarea
    celorlalte sarcini care, potrivit legii sau obiceiului, revin
    proprietarului.
</p>
<p>
    (8) Averea dobândită licit nu poate fi confiscată. Caracterul licit al
    dobândirii se prezumă.
</p>
<p>
    (9) Bunurile destinate, folosite sau rezultate din infracţiuni ori
    contravenţii pot fi confiscate numai în condiţiile legii.
</p>
<p align="center">
    <strong>Articolul 45</strong>
</p>
<p align="center">
    <strong>Libertatea economică</strong>
</p>
<p>
    Accesul liber al persoanei la o activitate economică, libera iniţiativă şi
    exercitarea acestora în condiţiile legii sunt garantate.
</p>
<p align="center">
    <strong>Articolul 46</strong>
</p>
<p align="center">
    <strong>Dreptul la moştenire</strong>
</p>
<p>
    Dreptul la moştenire este garantat.
</p>
<p align="center">
    <strong>Articolul 47</strong>
</p>
<p align="center">
    <strong>Nivelul de trai</strong>
</p>
<p>
    (1) Statul este obligat sa ia măsuri de dezvoltare economică şi de
    protecţie socială, de natura să asigure cetăţenilor un nivel de trai
    decent.
</p>
<p>
    (2) Cetăţenii au dreptul la pensie, la concediu de maternitate plătit, la
    asistenţa medicală în unităţile sanitare de stat, la ajutor de şomaj şi la
    alte forme de asigurări sociale publice sau private, prevăzute de lege.
    Cetăţenii au dreptul şi la măsuri de asistenţă socială, potrivit legii.
</p>
<p align="center">
    <strong>Articolul 48</strong>
</p>
<p align="center">
    <strong>Familia</strong>
</p>
<p>
    (1) Familia se întemeiază pe căsătoria liber consimţită între soţi, pe
    egalitatea acestora şi pe dreptul şi îndatorirea părinţilor de a asigura
    creşterea, educaţia şi instruirea copiilor.
</p>
<p>
    (2) Condiţiile de încheiere, de desfacere şi de nulitate a căsătoriei se
    stabilesc prin lege. Căsătoria religioasă poate fi celebrată numai după
    căsătoria civilă.
</p>
<p>
    (3) Copiii din afară căsătoriei sunt egali în faţa legii cu cei din
    căsătorie.
</p>
<p align="center">
    <strong>Articolul 49</strong>
</p>
<p align="center">
    <strong>Protecţia copiilor şi a tinerilor</strong>
</p>
<p>
    (1) Copiii şi ţinerii se bucura de un regim special de protecţie şi de
    asistenţa în realizarea drepturilor lor.
</p>
<p>
    (2) Statul acorda alocaţii pentru copii şi ajutoare pentru îngrijirea
    copilului bolnav ori cu handicap. Alte forme de protecţie socială a
    copiilor şi a tinerilor se stabilesc prin lege.
</p>
<p>
    (3) Exploatarea minorilor, folosirea lor în activităţi care le-ar dăuna
    sănătăţii, moralităţii sau care le-ar pune în primejdie viaţa ori
    dezvoltarea normală sunt interzise.
</p>
<p>
    (4) Minorii sub vârsta de 15 ani nu pot fi angajaţi ca salariaţi.
</p>
<p>
    (5) Autorităţile publice au obligaţia să contribuie la asigurarea
    condiţiilor pentru participarea liberă a tinerilor la viaţa politică,
    socială, economică, culturală şi sportivă a țării.
</p>
<p align="center">
    <strong>Articolul 50</strong>
</p>
<p align="center">
    <strong>Protecţia persoanelor cu handicap</strong>
</p>
<p>
    Persoanele cu handicap se bucură de protecţie specială. Statul asigură
    realizarea unei politici naţionale de egalitate a sanselor, de prevenire şi
    de tratament ale handicapului, în vederea participării efective a
    persoanelor cu handicap în viaţa comunităţii, respectând drepturile şi
    îndatoririle ce revin părinţilor şi tutorilor.
</p>
<p align="center">
    <strong>Articolul 51</strong>
</p>
<p align="center">
    <strong>Dreptul de petiţionare</strong>
</p>
<p>
    (1) Cetăţenii au dreptul să se adreseze autorităţilor publice prin petiţii
    formulate numai în numele semnatarilor.
</p>
<p>
    (2) Organizaţiile legal constituite au dreptul să adreseze petiţii exclusiv
    în numele colectivelor pe care le reprezintă.
</p>
<p>
    (3) Exercitarea dreptului de petiţionare este scutită de taxă.
</p>
<p>
    (4) Autorităţile publice au obligaţia să răspundă la petiţii în termenele
    şi în condiţiile stabilite potrivit legii.
</p>
<p align="center">
    <strong>Articolul 52</strong>
</p>
<p align="center">
    <strong>Dreptul persoanei vătămate de o autoritate publică</strong>
</p>
<p>
    (1) Persoana vătămată într-un drept al său ori într-un interes legitim, de
    o autoritate publică, printr-un act administrativ sau prin nesoluţionarea
    în termenul legal a unei cereri, este îndreptătiță să obţină recunoaşterea
    dreptului pretins sau a interesului legitim, anularea actului şi repararea
    pagubei.
</p>
<p>
    (2) Condiţiile şi limitele exercitării acestui drept se stabilesc prin lege
    organică.
</p>
<p>
    (3) Statul răspunde patrimonial pentru prejudiciile cauzate prin erorile
    judiciare. Răspunderea statului este stabilită în condiţiile legii şi nu
    inlatura răspunderea magistraţilor care şi-au exercitat funcţia cu
    rea-credinţa sau grava neglijenţa.
</p>
<p align="center">
    <strong>Articolul 53</strong>
</p>
<p align="center">
    <strong>
        Restrângerea exerciţiului unor drepturi sau al unor libertăţi
    </strong>
</p>
<p>
    (1) Exerciţiul unor drepturi sau al unor libertăţi poate fi restrâns numai
    prin lege şi numai dacă se impune, după caz, pentru: apărarea securităţii
    naţionale, a ordinii, a sănătăţii ori a moralei publice, a drepturilor şi a
    libertăţilor cetăţenilor; desfăşurarea instrucţiei penale; prevenirea
    consecinţelor unei calamități naturale, ale unui dezastru ori ale unui
    sinistru deosebit de grav.
</p>
<p>
    (2) Restrângerea poate fi dispusă numai dacă este necesară într-o societate
    democratică. Măsura trebuie să fie proporţională cu situaţia care a
    determinat-o, să fie aplicată în mod nediscriminatoriu şi fără a aduce
    atingere existenţei dreptului sau a libertăţii.
</p>
<p align="center">
    <strong>Îndatoririle fundamentale</strong>
</p>
<p align="center">
    <strong>Articolul 54</strong>
</p>
<p align="center">
    <strong>Fidelitatea faţă de ţară</strong>
</p>
<p>
    (1) Fidelitatea faţă de ţara este sacră.
</p>
<p>
    (2) Cetăţenii cărora le sunt încredinţate funcţii publice, precum şi
    militarii, răspund de îndeplinirea cu credinţă a obligaţiilor ce le revin
    şi, în acest scop, vor depune jurământul cerut de lege.
</p>
<p align="center">
    <strong>Articolul 55</strong>
</p>
<p align="center">
    <strong>Apărarea </strong>
    <strong>ț</strong>
    <strong>ă</strong>
    <strong>rii</strong>
</p>
<p>
    (1) Cetăţenii au dreptul şi obligaţia să apere România.
</p>
<p>
    (2) Condiţiile privind îndeplinirea îndatoririlor militare se stabilesc
    prin lege organică.
</p>
<p>
    (3) Cetăţenii pot fi încorporaţi de la vârsta de 20 de ani şi până la
    vârsta de 35 de ani, cu excepţia voluntarilor, în condiţiile legii
    organice.
</p>
<p align="center">
    <strong>Articolul 56</strong>
</p>
<p align="center">
    <strong>Contribuţii financiare</strong>
</p>
<p>
    (1) Cetăţenii au obligaţia să contribuie, prin impozite şi prin taxe, la
    cheltuielile publice.
</p>
<p>
    (2) Sistemul legal de impuneri trebuie să asigure aşezarea justă a
    sarcinilor fiscale.
</p>
<p>
    (3) Orice alte prestaţii sunt interzise, în afară celor stabilite prin
    lege, în situaţii excepţionale.
</p>
<p align="center">
    <strong>Articolul 57</strong>
</p>
<p align="center">
    <strong>Exercitarea drepturilor şi a libertăţilor</strong>
</p>
<p>
    Cetăţenii români, cetăţenii străini şi apatrizii trebuie să-şi exercite
    drepturile şi libertăţile constituţionale cu bună-credinţă, fără să încalce
    drepturile şi libertăţile celorlalţi.
</p>
<h2 align="center">
<strong>Avocatul Poporului</strong>
</h2>
<p align="center">
    <strong>Articolul 58</strong>
</p>
<p align="center">
    <strong>Numirea şi rolul</strong>
</p>
<p>
    (1) Avocatul Poporului este numit pe o durată de 5 ani pentru apărarea
    drepturilor şi libertăţilor persoanelor fizice. Adjuncții Avocatului
    Poporului sunt specializaţi pe domenii de activitate.
</p>
<p>
    (2) Avocatul Poporului şi adjunctii săi nu pot îndeplini nici o alta
    funcţie publică sau privată, cu excepţia funcţiilor didactice din
    învăţământul superior.
</p>
<p>
    (3) Organizarea şi funcţionarea instituţiei Avocatul Poporului se stabilesc
    prin lege organică.
</p>
<p align="center">
    <strong>Articolul 59</strong>
</p>
<p align="center">
    <strong>Exercitarea atribuţiilor</strong>
</p>
<p>
    (1) Avocatul Poporului îşi exercită atribuţiile din oficiu sau la cererea
    persoanelor lezate în drepturile şi în libertăţile lor, în limitele
    stabilite de lege.
</p>
<p>
    (2) Autorităţile publice sunt obligate să asigure Avocatului Poporului
    sprijinul necesar în exercitarea atribuţiilor sale.
</p>
<p align="center">
    <strong>Articolul 60</strong>
</p>
<p align="center">
    <strong>Raportul în faţa Parlamentului</strong>
</p>
<p>
    Avocatul Poporului prezintă celor două Camere ale Parlamentului rapoarte,
    anual sau la cererea acestora. Rapoartele pot conţine recomandări privind
    legislaţia sau măsuri de altă natură, pentru ocrotirea drepturilor şi a
    libertăţilor cetăţenilor.
</p>
</div>
                <button onClick={()=>setGameState("catiii2")} className='back'>Înapoi</button>
        </div>
        <Footer />
</div>
    );
};

export default CatIII2p1;
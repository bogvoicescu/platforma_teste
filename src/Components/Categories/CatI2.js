import React, { useContext} from 'react';
import { QuizContext } from '../../Helpers/Context';
import "./MainCat.css";
import "../../App.css"
import Nav from '../Nav/Nav';
import Footer from '../Nav/Footer';

function CatI2() {
    const {setGameState} = useContext(QuizContext);
    return (
    <div className="MenuContainer">

        <Nav/>
        <div className="Menu">
   <div className="Text">
   <p align="center">
    <strong>
        LEGEA nr. 218 din 23 aprilie 2002 (*republicată*) privind organizarea
        şi funcţionarea Poliţiei Române
    </strong>
</p>
<p align="center">
    Organizarea, funcționarea și atribuțiile Poliției Române<strong></strong>
</p>
<p align="center">
    <strong>Structura organizatorică</strong>
</p>
<p align="center">
    <strong>Articolul 5</strong>
</p>
<p>
    Poliţia Română are următoarea structură organizatorică:
</p>
<p>
    a) Inspectoratul General al Poliţiei Române;
</p>
<p>
    b) unităţi teritoriale aflate în subordinea Inspectoratului General al
    Poliţiei Române, Direcţia generală de poliţie a municipiului Bucureşti şi
    inspectoratele judeţene de poliţie;
</p>
<p>
    c) instituţii de învăţământ pentru formarea şi pregătirea continuă a
    personalului;
</p>
<p>
    d) alte unităţi necesare pentru îndeplinirea atribuţiilor specifice
    poliţiei, înfiinţate potrivit legii.
</p>
<p align="center">
    <strong>Articolul 6</strong>
</p>
<p>
    În cadrul Poliţiei Române funcţionează Corpul Naţional al Poliţiştilor,
    persoană juridică de drept public, ale cărei atribuţii sunt stabilite prin
    legea privind statutul poliţistului.
</p>
<p align="center">
    <strong>Articolul 7</strong>
</p>
<p>
    Inspectoratul General al Poliţiei Române este unitatea centrală a poliţiei,
    cu personalitate juridică şi competenţă teritorială generală, care conduce,
    îndrumă şi controlează activitatea unităţilor de poliţie subordonate,
    desfăşoară activităţi de investigare şi cercetare a infracţiunilor deosebit
    de grave, circumscrise crimei organizate, criminalităţii
    economico-financiare sau bancare, a altor infracţiuni ce fac obiectul
    cauzelor penale aflate în supravegherea Parchetului de pe lângă Înalta
    Curte de Casaţie şi Justiţie, precum şi orice alte atribuţii date în
    competenţa sa prin lege.
</p>
<p align="center">
    <strong>Articolul 8</strong>
</p>
<p>
    (1) Inspectoratul General al Poliţiei Române este condus de un inspector
    general, cu rang de secretar de stat, numit prin decizie a
    prim-ministrului, la propunerea ministrului afacerilor interne, după
    consultarea Corpului Naţional al Poliţiştilor.
</p>
<p>
    (2) Inspectorul general este ajutat de adjuncţi numiţi de către ministrul
    afacerilor interne, la propunerea sa, cu consultarea Corpului Naţional al
    Poliţiştilor.
</p>
<p align="center">
    <strong>Articolul 9</strong>
</p>
<p>
    (1) În cadrul Inspectoratului General al Poliţiei Române funcţionează
    Consiliul Superior, denumit în continuare Consiliu, constituit din
    inspectorul general al Inspectoratului General al Poliţiei Române,
    adjuncţii inspectorului general al Inspectoratului General al Poliţiei
    Române, şefii direcţiilor generale şi ai direcţiilor din Inspectoratul
    General al Poliţiei Române, 5 şefi ai unităţilor teritoriale ale poliţiei,
    desemnaţi prin rotaţie în fiecare an, preşedintele Corpului Naţional al
    Poliţiştilor şi rectorul Academiei de Poliţie „Alexandru Ioan Cuza“.
</p>
<p>
    (2) Consiliul se întruneşte o dată pe trimestru sau ori de câte ori este
    nevoie, sub conducerea inspectorului general al Inspectoratului General al
    Poliţiei Române. Consiliul analizează şi hotărăşte activităţile Poliţiei
    Române conform strategiei Ministerului Afacerilor Interne. Hotărârile se
    adoptă cu votul a cel puţin două treimi din numărul membrilor săi.
    Hotărârile Consiliului se duc la îndeplinire prin grija inspectorului
    general al Inspectoratului General al Poliţiei Române.
</p>
<p>
    (3) Desemnarea nominală a membrilor Consiliului şi funcţionarea acestuia se
    stabilesc prin dispoziţie a inspectorului general al Inspectoratului
    General al Poliţiei Române.
</p>
<p align="center">
    <strong>Articolul 10</strong>
</p>
<p>
    În aplicarea legii inspectorul general al Inspectoratului General al
    Poliţiei Române emite dispoziţii obligatorii pentru personalul din
    subordine, la elaborarea cărora consultă Corpul Naţional al Poliţiştilor şi
    Consiliul.
</p>
<p align="center">
    <strong>Articolul 11</strong>
</p>
<p>
    Inspectoratul General al Poliţiei Române are în structura sa organizatorică
    direcţii generale, direcţii, servicii şi birouri, înfiinţate prin ordin al
    ministrului afacerilor interne, în limita fondurilor la dispoziţie.
</p>
<p align="center">
    <strong>
        Unităţi teritoriale din subordinea Inspectoratului General al Poliţiei
        Române
    </strong>
</p>
<p align="center">
    <strong>Articolul 12</strong>
</p>
<p>
    (1) În municipiul Bucureşti se organizează şi funcţionează ca unitate cu
    personalitate juridică Direcţia generală de poliţie a municipiului
    Bucureşti, condusă de un director general, ajutat de adjuncţi.
</p>
<p>
    (2) În judeţe se organizează şi funcţionează, ca unităţi cu personalitate
    juridică, inspectorate de poliţie, conduse de un inspector-şef, ajutat de
    adjuncţi.
</p>
<p>
    (3) Directorul general al Direcţiei generale de poliţie a municipiului
    Bucureşti şi inspectorii-şefi ai inspectoratelor de poliţie judeţene sunt
    numiţi şi eliberaţi din funcţie prin ordin al ministrului afacerilor
    interne, la propunerea inspectorului general al Inspectoratului General al
    Poliţiei Române, după consultarea Corpului Naţional al Poliţiştilor şi cu
    avizul consultativ al prefectului.
</p>
<p align="center">
    <strong>Articolul 13</strong>
</p>
<p>
    (1) În cadrul Direcţiei generale de poliţie a municipiului Bucureşti se
    organizează şi funcţionează unităţi de poliţie ale sectoarelor,
    corespunzător organizării administrativ-teritoriale a acestuia.
</p>
<p>
    (2) În fiecare sector se organizează şi funcţionează secţii de poliţie.
    Numărul acestora se stabileşte prin ordin al ministrului afacerilor
    interne, în funcţie de întinderea teritoriului, numărul populaţiei, de
    numărul şi importanţa obiectivelor economice, sociale şi politice.
</p>
<p align="center">
    <strong>Articolul 14</strong>
</p>
<p>
    (1) În municipii şi oraşe funcţionează poliţii municipale şi orăşeneşti,
    iar în comune, posturi de poliţie.
</p>
<p>
    (2) În municipii pot fi înfiinţate secţii de poliţie, iar în comunele cu
    sate şi cătune dispersate pot fi înfiinţate birouri de poliţie, potrivit
    criteriilor prevăzute la art. 13 alin. (2).
</p>
<p align="center">
    <strong>Articolul 15</strong>
</p>
<p>
    (1) În structura organizatorică a Poliţiei Române pot fi înfiinţate şi alte
    unităţi pentru prevenirea şi combaterea infracţionalităţii.
</p>
<p>
    (2) Numărul, competenţa şi structura organizatorică ale acestor unităţi se
    stabilesc prin ordin al ministrului afacerilor interne, la propunerea
    inspectorului general al Inspectoratului General al Poliţiei Române, după
    consultarea Corpului Naţional al Poliţiştilor.
</p>
<p>
    (3) Şefii unităţilor organizate în condiţiile alin. (1) şi (2) sunt numiţi
    şi eliberaţi din funcţie prin ordin al ministrului afacerilor interne.
</p>
<p align="center">
    <strong>Articolul 16</strong>
</p>
<p>
    (1) Atribuţiile şi structura organizatorică ale Inspectoratului General al
    Poliţiei Române, Direcţiei generale de poliţie a municipiului Bucureşti şi
    inspectoratelor de poliţie judeţene se stabilesc prin regulamente de
    organizare şi funcţionare.
</p>
<p>
    (2) Regulamentul de organizare şi funcţionare a Inspectoratului General al
    Poliţiei Române se aprobă de ministrul afacerilor interne, iar cele ale
    unităţilor teritoriale, de către inspectorul general al Inspectoratului
    General al Poliţiei Române.
</p>
<p align="center">
    <strong>Autoritatea teritorială de ordine publică</strong>
</p>
<p align="center">
    <strong>Articolul 17</strong>
</p>
<p>
    (1) La nivelul municipiului Bucureşti şi al fiecărui judeţ se organizează
    şi funcţionează autoritatea teritorială de ordine publică, organism cu rol
    consultativ, a cărui activitate se desfăşoară în interesul comunităţii.
</p>
<p>
    (2) Autoritatea teritorială de ordine publică este constituită din şeful
    Direcţiei generale de poliţie a municipiului Bucureşti sau al
    inspectoratului de poliţie judeţean, un reprezentant al Corpului Naţional
    al Poliţiştilor, subprefect, 6 consilieri desemnaţi de Consiliul General al
    Municipiului Bucureşti, respectiv de consiliul judeţean, 3 reprezentanţi ai
    comunităţii desemnaţi de primarul general al municipiului Bucureşti,
    respectiv de preşedintele consiliului judeţean, şeful Direcţiei generale de
    jandarmi a municipiului Bucureşti sau al inspectoratului judeţean, şeful
    Inspectoratului pentru Situaţii de Urgenţă al Municipiului Bucureşti sau
    şeful inspectoratului pentru situaţii de urgenţă judeţean, şeful
    serviciului teritorial al Poliţiei de Frontieră Române şi, după caz, şeful
    poliţiei locale din municipiul reşedinţă de judeţ.
</p>
<p>
    (3) Participarea şefului Direcţiei generale de jandarmi a municipiului
    Bucureşti sau al inspectoratului de jandarmi judeţean şi a şefului
    Inspectoratului pentru Situaţii de Urgenţă al Municipiului Bucureşti sau a
    şefului inspectoratului pentru situaţii de urgenţă judeţean în autoritatea
    teritorială de ordine publică se realizează în legătură cu activităţile
    desfăşurate de aceste instituţii în calitate de forţe de sprijin care
    participă la planificarea şi executarea activităţilor de menţinere a
    ordinii şi siguranţei publice sub conducerea Poliţiei Române.
</p>
<p>
    (4) Aspectele referitoare la activităţile desfăşurate de structurile
    Ministerului Afacerilor Interne şi cele ale poliţiei locale în planul
    menţinerii ordinii şi siguranţei publice se prezintă integrat prin
    intermediul Direcţiei generale de poliţie a municipiului Bucureşti sau
    inspectoratului de poliţie judeţean.
</p>
<p>
    (5) Desemnarea nominală a autorităţii teritoriale de ordine publică este
    validată de către Consiliul General al Municipiului Bucureşti sau de către
    consiliul judeţean pentru o perioadă de 4 ani.
</p>
<p>
    (6) Autoritatea teritorială de ordine publică este condusă de un preşedinte
    ales cu votul majoritar din rândul consilierilor din Consiliul General al
    Municipiului Bucureşti sau al consiliilor judeţene pe o perioadă de 4 ani.
</p>
<p align="center">
    <strong>Articolul 18</strong>
</p>
<p>
    Autoritatea teritorială de ordine publică are următoarele atribuţii:
</p>
<p>
    a) contribuie la elaborarea planului de activităţi şi la fixarea
    obiectivelor şi indicatorilor de performanţă minimali, având ca scop
    protejarea intereselor comunităţii şi asigurarea climatului de siguranţă
    publică;
</p>
<p>
    b) sesizează şi propune măsuri de înlăturare a deficienţelor din
    activitatea de poliţie;
</p>
<p>
    c) face propuneri pentru soluţionarea de către organele de poliţie a
    sesizărilor care îi sunt adresate, referitoare la încălcarea drepturilor şi
    libertăţilor fundamentale ale omului, potrivit prezentei legi;
</p>
<p>
    d) organizează consultări cu membrii comunităţilor locale şi cu
    organizaţiile neguvernamentale cu privire la priorităţile siguranţei
    persoanei şi a ordinii publice;
</p>
<p>
    e) prezintă trimestrial informări în şedinţele Consiliului General al
    Municipiului Bucureşti sau ale consiliului judeţean, după caz, asupra
    nivelului de asigurare a securităţii şi siguranţei civice a comunităţii;
</p>
<p>
    f) elaborează anual un raport asupra eficienţei activităţii unităţilor de
    poliţie, care se dă publicităţii.
</p>
<p align="center">
    <strong>Articolul 19</strong>
</p>
<p>
    (1) Autoritatea teritorială de ordine publică se întruneşte în şedinţe
    ordinare sau extraordinare, trimestrial sau ori de câte ori este nevoie.
</p>
<p>
    (2) La şedinţele autorităţii teritoriale de ordine publică au dreptul să
    participe, cu statut de invitat, prefectul municipiului Bucureşti,
    respectiv al judeţului, primarul general al municipiului Bucureşti,
    respectiv preşedintele consiliului judeţean, conducătorii serviciilor
    publice descentralizate ale ministerelor şi ale celorlalte autorităţi ale
    administraţiei publice centrale de specialitate. Şedinţele autorităţii
    teritoriale de ordine publică pot fi şi publice.
</p>
<p>
    (3) În exercitarea atribuţiilor sale autoritatea teritorială de ordine
    publică emite hotărâri cu caracter de recomandare.
</p>
<p>
    (4) Autoritatea teritorială de ordine publică nu are competenţe în
    problemele operative ale poliţiei.
</p>
<p align="center">
    <strong>Articolul 20</strong>
</p>
<p>
    Cheltuielile necesare pentru desfăşurarea activităţii autorităţii
    teritoriale de ordine publică se suportă din bugetul municipiului
    Bucureşti, respectiv din cel al judeţului.
</p>
<p>
    <strong>
        Raporturile dintre poliţie şi autorităţile administraţiei publice
        locale
    </strong>
</p>
<p align="center">
    <strong>Articolul 22</strong>
</p>
<p>
    (1) În plan teritorial unităţile de poliţie cooperează cu prefecţii,
    autorităţile administraţiei publice locale, autorităţile judecătoreşti,
    serviciile publice deconcentrate ale ministerelor şi ale celorlalte organe
    de specialitate ale administraţiei publice centrale, precum şi cu
    reprezentanţi ai comunităţii.
</p>
<p>
    (2) În vederea înfiinţării unor noi unităţi, secţii, birouri sau posturi de
    poliţie vor fi consultate Consiliul General al Municipiului Bucureşti,
    consiliile judeţene şi consiliile locale ale municipiilor, oraşelor ori
    comunelor, după caz, care vor pune la dispoziţie spaţiile necesare
    funcţionării acestora.
</p>
<p align="center">
    <strong>Articolul 23</strong>
</p>
<p>
    (1) Şeful Direcţiei Generale de Poliţie a Municipiului Bucureşti, şefii
    inspectoratelor de poliţie judeţene, ai poliţiilor municipale şi orăşeneşti
    şi ai posturilor de poliţie comunale prezintă informări anuale în faţa
    autorităţii teritoriale de ordine publică, Consiliului General al
    Municipiului Bucureşti, consiliilor judeţene, consiliilor municipale,
    orăşeneşti sau comunale, după caz, referitoare la măsurile întreprinse în
    îndeplinirea atribuţiilor specifice.
</p>
<p>
    (2) Şefii unităţilor prevăzute la alin. (1) informează, trimestrial sau ori
    de câte ori este nevoie, prefecţii, primarul general al municipiului
    Bucureşti, preşedinţii consiliilor judeţene, primarii sectoarelor
    municipiului Bucureşti, ai municipiilor, oraşelor şi comunelor, după caz,
    despre evoluţia fenomenelor antisociale şi modul în care au fost
    îndeplinite sarcinile pe plan local.
</p>
<p align="center">
    <strong>Articolul 24</strong>
</p>
<p>
    Unităţile teritoriale de poliţie cooperează cu consiliile locale şi, după
    caz, cu primarii pentru îndeplinirea hotărârilor sau dispoziţiilor scrise
    ale acestora, emise în limita competenţelor lor în domeniul ordinii
    publice.
</p>
<p align="center">
    <strong>Articolul 25</strong>
</p>
<p>
    (1) În cazuri justificate de evenimente deosebite, între autorităţile
    administraţiei publice locale şi unităţile de poliţie, de comun acord, se
    pot încheia protocoale în vederea îndeplinirii eficiente a atribuţiilor
    poliţiei.
</p>
<p>
    (2) Dacă poliţia nu îşi îndeplineşte responsabilităţile în baza
    protocolului încheiat, administraţia publică se poate adresa organului
    superior de poliţie.
</p>
<p align="center">
    <strong>Atribuţiile Poliţiei Române</strong>
</p>
<p align="center">
    <strong>Articolul 26</strong>
</p>
<p>
        (1) Poliţia Română are următoarele atribuţii principale:

</p>
<p>
    1. apără viaţa, integritatea corporală şi libertatea persoanelor,
    proprietatea privată şi publică, celelalte drepturi şi interese legitime
    ale cetăţenilor şi ale comunităţii;
</p>
<p>
    2. aplică măsuri pentru menţinerea ordinii şi siguranţei publice, aplică
    măsuri, potrivit competenţelor stabilite prin lege, pentru prevenirea şi
    combaterea fenomenului infracţional şi terorismului, de identificare şi
    contracarare a acţiunilor elementelor care atentează la viaţa, libertatea,
    sănătatea şi integritatea persoanelor, a proprietăţii private şi publice,
    precum şi a altor interese legitime ale comunităţii;
</p>
<p>
    3. sprijină unităţile de jandarmerie cu informaţii pentru asigurarea sau
    restabilirea ordinii şi liniştii publice, cu ocazia mitingurilor,
    manifestaţiilor cultural-sportive şi altele asemenea;
</p>
<p>
    4. asigură, direct sau în cooperare cu alte instituţii abilitate potrivit
    legii, executarea controalelor tehnice şi intervenţiilor pirotehnice pentru
    prevenirea, descoperirea şi neutralizarea dispozitivelor explozive,
    radioactive, nucleare, chimice sau biologice amplasate în scopul tulburării
    ordinii publice, vătămării integrităţii corporale, sănătăţii persoanelor
    sau provocării de daune proprietăţii publice ori private;
</p>
<p>
    5. desfăşoară activităţi de negociere şi asigură intervenţia, pentru
    eliberarea persoanelor lipsite de libertate în mod ilegal, imobilizarea sau
    neutralizarea persoanelor care folosesc arme de foc ori alte mijloace care
    pot pune în pericol viaţa, sănătatea sau integritatea corporală a
    persoanei;
</p>
<p>
    6. desfăşoară activităţi specifice, potrivit competenţelor stabilite prin
    lege, ca reacţie la acte de terorism iminente sau în desfăşurare în scopul
    împiedicării ori limitării efectelor acestuia, neutralizării acţiunilor
    agresive şi/sau a mijloacelor şi dispozitivelor utilizate de terorişti;
</p>
<p>
    7. avizează şi controlează, în condiţiile legii, înfiinţarea societăţilor
    private de detectivi, pază, supraveghere şi gardă de corp;
</p>
<p>
    8. culege informaţii în vederea cunoaşterii, prevenirii şi combaterii
    infracţiunilor, precum şi a altor fapte ilicite;
</p>
<p>
    9. realizează activităţi de prevenire şi combatere a corupţiei, a
    criminalităţii economico-financiare, a celei transfrontaliere, a
    infracţiunii în domeniul informaticii şi a crimei organizate;
</p>
<p>
    10. desfăşoară, potrivit competenţei, activităţi pentru constatarea
    faptelor penale şi efectuează cercetări în legătură cu acestea;
</p>
<p>
    11. asigură paza şi funcţionarea, în condiţiile legii, a locurilor de
    reţinere şi de arest preventiv organizate în cadrul unităţilor de poliţie;
</p>
<p>
    12. constată contravenţii şi aplică sancţiuni contravenţionale, potrivit
    legii;
</p>
<p>
    13. asigură protecţia martorului, colaboratorului, informatorului şi a
    victimei, în condiţiile legii;
</p>
<p>
    14. asigură protecţia poliţiştilor, magistraţilor şi a familiilor acestora,
    în cazurile în care viaţa, integritatea corporală sau avutul acestora sunt
    supuse unor ameninţări, precum şi a conducătorilor autorităţilor străine,
    cu atribuţii în domeniul afacerilor interne sau justiţiei, aflaţi în
    România în vizite oficiale sau în misiune;
</p>
<p>
    15. desfăşoară activităţi de depistare a persoanelor care se sustrag
    urmăririi penale, executării pedepselor sau altor hotărâri judecătoreşti,
    precum şi a persoanelor dispărute;
</p>
<p>
    16. desfăşoară activităţi de prevenire şi combatere a migraţiei ilegale;
</p>
<p>
    16^1. desfăşoară activităţi specifice, direct sau în cooperare cu alte
    entităţi publice sau private, potrivit competenţelor stabilite prin lege,
    pentru protecţia animalelor;
</p>
<p>
    17. foloseşte metode şi mijloace tehnico-ştiinţifice în cercetarea locului
    faptei şi la examinarea probelor şi a mijloacelor materiale de probă,
    efectuând constatări şi expertize criminalistice, prin specialişti şi/sau
    experţi proprii acreditaţi, precum şi rapoarte criminalistice de
    constatare, rapoarte de constatare tehnico-ştiinţifice, rapoarte de
    interpretare a urmelor sau de evaluare a comportamentului infracţional ori
    a personalităţii criminale;
</p>
<p>
    18. efectuează, independent sau în cooperare, evaluări, studii şi cercetări
    ştiinţifice pentru îmbunătăţirea metodelor şi mijloacelor folosite în
    activitatea de poliţie, în special a celor tehnico-ştiinţifice
    criminalistice, de analiză a informaţiilor, de prevenire şi combatere a
    infracţiunilor sau a altor fapte ilegale, precum şi pentru identificarea
    unor noi metode şi mijloace;
</p>
<p>
    19. exercită controlul, potrivit legii, asupra deţinerii, portului şi
    folosirii armelor şi muniţiilor, a materialelor explozive, a precursorilor
    de explozivi, asupra modului în care se efectuează operaţiunile cu arme,
    muniţii, materii explozive şi precursori de explozivi, precum şi asupra
    funcţionării atelierelor de reparat arme şi asupra poligoanelor de tir;
</p>
<p>
    20. exercită controlul asupra respectării regimului materialelor
    radioactive şi nucleare, substanţelor toxice, stupefiantelor şi
    substanţelor dopante, precum şi asupra altor obiecte şi materii supuse
    autorizării, potrivit legii;
</p>
<p>
    21. supraveghează şi controlează circulaţia pe drumurile publice, în afara
    cazurilor exceptate prin lege, şi colaborează cu alte autorităţi publice,
    instituţii, asociaţii şi organizaţii neguvernamentale, pentru îmbunătăţirea
    organizării şi sistematizării circulaţiei, asigurarea stării tehnice a
    autovehiculelor, perfecţionarea pregătirii conducătorilor auto şi luarea
    unor măsuri de educaţie rutieră a participanţilor la trafic;
</p>
<p>
    22. desfăşoară activităţi specifice de poliţie în domeniul transporturilor
    feroviare, navale şi aeriene;
</p>
<p>
    23. exercită controlul asupra legalităţii stabilirii domiciliului sau
    reşedinţei cetăţenilor români şi străini aflaţi pe teritoriul ţării, în
    condiţiile legii;
</p>
<p>
    24. ţine evidenţa nominală a cetăţenilor români cu obligaţii militare în
    mediul rural;
</p>
<p>
    25. organizează, în condiţiile legii, cazierul judiciar pentru ţinerea
    evidenţei persoanelor condamnate ori împotriva cărora s-au luat alte măsuri
    cu caracter penal şi constituie baza de date necesare pentru îndeplinirea
    atribuţiilor operative specifice poliţiei;
</p>
<p>
    26. efectuează studii şi cercetări privind dinamica infracţionalităţii în
    România şi propune măsuri de prevenire a acesteia;
</p>
<p>
    27. acordă sprijin, potrivit legii, autorităţilor administraţiei publice
    centrale şi locale în vederea desfăşurării activităţii acestora;
</p>
<p>
    28. participă, în condiţiile legii, împreună cu alte unităţi ale
    Ministerului Afacerilor Interne, în colaborare cu trupe ale Ministerului
    Apărării Naţionale, unităţi de protecţie civilă şi alte organe prevăzute de
    lege, la activităţile de salvare şi evacuare a persoanelor şi bunurilor
    periclitate de incendii, explozii, avarii, accidente, epidemii, calamităţi
    naturale şi catastrofe, precum şi de limitare şi înlăturare a urmărilor
    provocate de astfel de evenimente;
</p>
<p>
    29. colaborează cu instituţiile de învăţământ şi cu organizaţiile
    neguvernamentale pentru pregătirea antiinfracţională a populaţiei;
</p>
<p>
    30. desfăşoară, potrivit legii, activităţi specifice de cooperare şi
    asistenţă poliţienească internaţională, precum şi de cooperare judiciară
    internaţională în materie penală, conlucrează cu structuri de profil din
    alte state şi de la nivelul unor instituţii internaţionale pentru
    prevenirea şi combaterea criminalităţii transfrontaliere ori pentru schimb
    sau transfer de experienţă şi bune practici;
</p>
<p>
    31. participă la constituirea forţelor internaţionale de poliţie, destinate
    unor misiuni de instruire, asistenţă şi cooperare poliţienească sau pentru
    acţiuni umanitare;
</p>
<p>
    32. îndeplineşte orice alte atribuţii stabilite prin lege.
</p>
<p>
    (2) Pentru îndeplinirea atribuţiilor ce îi revin Poliţia Română îşi
    organizează propria bază de date, potrivit legii.
</p>
<p align="center">
    <strong>Articolul 27</strong>
</p>
<p>
    (1) Ministrul afacerilor interne, cu avizul procurorului general al
    Parchetului de pe lângă Înalta Curte de Casaţie şi Justiţie, desemnează
    poliţişti care au calitatea de organe de cercetare ale poliţiei judiciare.
</p>
<p>
    (2) Urmărirea penală se efectuează în mod obligatoriu de procuror în cazul
    infracţiunilor săvârşite de poliţiştii care au calitatea de organe de
    cercetare ale poliţiei judiciare.
</p>
<p align="center">
    <strong>Articolul 28</strong>
</p>
<p>
    (1) În îndeplinirea activităţilor specifice poliţistul are competenţa
    teritorială corespunzătoare unităţii de poliţie din care face parte.
</p>
<p>
    (2) În caz de continuare a unei măsuri sau activităţi specifice poliţistul
    poate acţiona şi pe raza teritorială a altor unităţi de poliţie, comunicând
    despre aceasta unităţii competente.
</p>
<p>
    (3) În caz de detaşare sau misiune ordonată pe raza teritorială a altei
    unităţi de poliţie, poliţistul are competenţa teritorială stabilită pentru
    acea unitate. Poliţistul încadrat în Inspectoratul General al Poliţiei
    Române are competenţă teritorială generală.
</p>
<p>
    (4) Poliţistul este obligat să intervină şi în afara orelor de program, a
    atribuţiilor sale de serviciu şi a competenţei teritoriale a unităţii din
    care face parte, când ia cunoştinţă de existenţa unei infracţiuni
    flagrante, precum şi pentru conservarea probelor în cazul altor infracţiuni
    a căror cercetare va fi efectuată de organele competente.
</p>
   </div>
               <button onClick={()=>setGameState("cati")} className='back'>Înapoi</button>
        </div>
        <Footer />
</div>
    );
};

export default CatI2;
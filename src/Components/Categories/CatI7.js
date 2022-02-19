import React, {useState, useContext} from 'react';
import { QuizContext } from '../../Helpers/Context';
import "./MainCat.css";
import "../../App.css"
import Nav from '../Nav/Nav';
import Footer from '../Nav/Footer';

function CatI7() {
    const {score, setScore, setGameState, test} = useContext(QuizContext);
    return (
    <div className="MenuContainer">

        <Nav/>
        <div className="Menu">
        <div className="Text">
        <h2 align="center">

        Legea nr. 80 din 11 iulie 1995 privind statutul cadrelor militare.
</h2>
<h2 align="center">
</h2>
<h2 align="center">
    Statutul cadrelor militare
</h2>
<div>
    <p>
        <em>
            În cadrul acestui capitol, vor fi expuse prevederi din Legea nr. 80
            din 11 iulie 1995 privind statutul cadrelor militare.
        </em>
        <em></em>
    </p>
</div>
<h3 align="center">
Dispoziţii generale
</h3>
<p align="center">
    <strong>Articolul 1</strong>
</p>
<p>
    Prin cadre militare, în sensul prezentei legi, se înţelege cetăţenii români
    cărora li s-a acordat grad de ofiţer, maistru militar sau subofiţer, în
    raport cu pregătirea lor militară şi de specialitate, în condiţiile
    prevăzute de lege.
</p>
<p>
    Cadrele militare sunt în serviciul naţiunii.
</p>
<p align="center">
    <strong>Articolul 2</strong>
</p>
<p>
    Potrivit gradelor pe care le au, cadrele militare sunt constituite în
    corpul subofiţerilor, corpul maiştrilor militari şi corpul ofiţerilor.
</p>
<p>
    Gradele cadrelor militare, în ordinea lor ierarhică, sunt:
</p>
<p>
    A. Subofiţeri:
</p>
<p>
    a) sergent major;
</p>
<p>
    b) plutonier;
</p>
<p>
    c) plutonier major;
</p>
<p>
    d) plutonier adjutant;
</p>
<p>
    e) plutonier adjutant şef.
</p>
<p>
    B. Maiştri militari:
</p>
<p>
    a) maistru militar clasa a IV-a;
</p>
<p>
    b) maistru militar clasa a III-a;
</p>
<p>
    c) maistru militar clasa a II-a;
</p>
<p>
    d) maistru militar clasa a I;
</p>
<p>
    e) maistru militar principal.
</p>
<p>
    C. Ofiţeri:
</p>
<p>
    a) ofiţeri cu grade inferioare:
</p>
<p>
    – sublocotenent, respectiv aspirant pentru cei din marina militară;
</p>
<p>
    – locotenent;
</p>
<p>
    – căpitan;
</p>
<p>
    b) ofiţeri cu grade superioare:
</p>
<p>
    – maior, respectiv locotenent-comandor pentru cei din aviaţia şi marina
    militară;
</p>
<p>
    – locotenent-colonel, respectiv căpitan-comandor pentru cei din aviaţia şi
    marina militară;
</p>
<p>
    – colonel, respectiv comandor pentru cei din aviaţia şi marina militară;
</p>
<p>
    c) generali şi amirali, prevăzuţi la alin. 2^1 paragraful B lit. c);
</p>
<p>
    Gradele cadrelor militare în ordinea lor ierarhică în Ministerul Apărării
    Naţionale sunt:
</p>
<p>
    A.Subofiţeri:
</p>
<p>
    a) sergent;
</p>
<p>
    b) sergent-major;
</p>
<p>
    c) plutonier;
</p>
<p>
    d) plutonier-major;
</p>
<p>
    e) plutonier adjutant;
</p>
<p>
    f) plutonier adjutant principal.
</p>
<p>
    A^1.Maiştri militari:
</p>
<p>
    a) maistru militar clasa a V-a;
</p>
<p>
    b) maistru militar clasa a IV-a;
</p>
<p>
    c) maistru militar clasa a III-a;
</p>
<p>
    d) maistru militar clasa a II-a;
</p>
<p>
    e) maistru militar clasa I;
</p>
<p>
    f) maistru militar principal.
</p>
<p>
    B.Ofiţeri:
</p>
<p>
    a) ofiţeri cu grade inferioare:
</p>
<p>
    – sublocotenent, respectiv aspirant, pentru cei din arma marină;
</p>
<p>
    – locotenent;
</p>
<p>
    – căpitan;
</p>
<p>
    b) ofiţeri cu grade superioare:
</p>
<p>
    – maior, respectiv locotenent-comandor, pentru cei din arma aviaţie şi arma
    marină;
</p>
<p>
    – locotenent-colonel, respectiv căpitan-comandor, pentru cei din arma
    aviaţie şi arma marină;
</p>
<p>
    – colonel, respectiv comandor, pentru cei din arma aviaţie şi arma marină;
</p>
<p>
    c) generali şi amirali:
</p>
<p>
    – general de brigadă - cu o stea, respectiv general de flotilă aeriană - cu
    o stea, pentru cei din arma aviaţie şi contraamiral de flotilă - cu o stea,
    pentru cei din arma marină;
</p>
<p>
    – general-maior - cu două stele, respectiv contra-amiral - cu două stele,
    pentru cei din arma marină;
</p>
<p>
    – general-locotenent - cu trei stele, respectiv vice-amiral - cu trei
    stele, pentru cei din arma marină;
</p>
<p>
    – general - cu patru stele, respectiv amiral - cu patru stele, pentru cei
    din arma marină.
</p>
<p align="center">
    <strong>Articolul 3</strong>
</p>
<p>
    Gradul militar este un drept al titularului şi reprezintă recunoaşterea în
    plan social a calităţii de cadru militar. Gradul de ofiţer, maistru militar
    şi subofiţer nu se poate pierde decât în cazurile şi în condiţiile
    prevăzute de lege.
</p>
<p align="center">
    <strong>Articolul 4</strong>
</p>
<p>
    Cadrele militare se pot afla în una dintre următoarele situaţii:
</p>
<p>
    a) în activitate, când ocupă o funcţie militară. Calitatea de cadru militar
    în activitate se menţine şi pe timpul cât acestea sunt eliberate din
    funcţii pentru a urma diferite forme de pregătire în interesul serviciului,
    sunt suspendate din funcţii, precum şi atunci când sunt puse la dispoziţie:
    în vederea încadrării sau trecerii în rezervă ori în retragere; pentru
    cazurile de boală stabilite prin hotărâre a Guvernului; pe timpul cât sunt
    în captivitate. Pot fi ofiţeri, maiştri militari sau subofiţeri în
    activitate persoanele care au cetăţenie română şi domiciliul în ţară;
</p>
<p>
    b) în rezervă, când nu ocupă o funcţie militară, dar întrunesc condiţiile
    prevăzute de lege pentru a fi chemate să îndeplinească serviciul militar ca
    rezervişti concentraţi sau mobilizaţi, iar la nevoie, în calitate de cadre
    militare în activitate;
</p>
<p>
    c) în retragere, când, potrivit legii, nu mai pot fi chemate pentru
    îndeplinirea serviciului militar.
</p>
<p align="center">
    <strong>Articolul 5</strong>
</p>
<p>
    Ofiţerii, maiştrii militari şi subofiţerii în activitate sunt militari
    profesionişti. Profesia de cadru militar este menită să asigure
    funcţionarea, perfecţionarea şi conducerea organismului militar în timp de
    pace şi de război.
</p>
<p>
    Accesul în profesie, precum şi evoluţia ulterioară pe treptele ierarhiei
    militare au la baza principiile şi normele cuprinse în prezenta lege. În
    aplicarea acestora, pentru cadrele militare ale Ministerului Apărării
    Naţionale se elaborează Ghidul carierei militare, aprobat prin hotărâre a
    Guvernului.
</p>
<p>
    Pentru structurile militare ale Ministerului Afacerilor Interne se
    elaborează ghiduri ale carierei specifice fiecărei arme, care se aprobă
    prin hotărâre a Guvernului.
</p>
<p align="center">
    <strong>Articolul 6</strong>
</p>
<p>
    În exercitarea atribuţiilor ce le revin potrivit legii şi prevederilor
    regulamentelor militare, ofiţerii, maiştrii militari şi subofiţerii sunt
    investiţi cu exerciţiul autorităţii publice, bucurându-se de protecţie
    potrivit legii penale.
</p>
<p>
    Cadrele militare prevăzute la art. 2 alin. 2 paragraful C lit. c) şi alin.
    2^1 paragraful B lit. c) au rangul de demnitari ai statului român în
    exercitarea funcţiilor prevăzute cu grad de general/similar, fără a
    beneficia de drepturi suplimentare conferite de această calitate.
</p>
<h3 align="center">
Îndatoriri
</h3>
<p align="center">
    <strong>Articolul 8</strong>
</p>
<p>
    Cadrele militare au următoarele îndatoriri principale:
</p>
<p>
    a) să fie loiale şi devotate statului român şi forţelor sale armate, să
    lupte pentru apărarea României, la nevoie până la sacrificiul vieţii, să
    respecte şi să apere valorile democraţiei constituţionale;
</p>
<p>
    b) să respecte jurământul militar şi prevederile regulamentelor militare,
    să execute întocmai şi la timp ordinele comandanţilor şi ale şefilor, fiind
    responsabile de modul în care îndeplinesc misiunile ce le sunt
    încredinţate. Cadrelor militare nu li se poate ordona şi le este interzis
    să execute acte contrare legii, obiceiurilor războiului şi convenţiilor
    internaţionale la care România este parte; neexecutarea ordinelor în aceste
    condiţii nu atrage răspunderea penală şi civilă a subordonaţilor;
</p>
<p>
    c) să preţuiască onoarea şi gloria de luptă ale forţelor armate ale
    României, ale armei şi unităţii din care fac parte, precum şi demnitatea
    gradului şi a uniformei militare pe care le poartă;
</p>
<p>
    d) să-şi perfecţioneze pregătirea profesională, să asigure instruirea
    temeinică şi educarea subordonaţilor şi să apere drepturile acestora;
</p>
<p>
    e) să acţioneze pentru întreţinerea regulamentară şi menţinerea în stare de
    operativitate a tehnicii şi armamentului şi pentru folosirea şi
    administrarea eficientă a bunurilor din dotare;
</p>
<p>
    f) să păstreze cu stricteţe secretul militar, de stat şi de serviciu,
    precum şi caracterul confidenţial al unor activităţi şi documente.
</p>
<p>
    Cadrele militare în activitate au obligaţia să participe la misiuni în
    afara teritoriului statului român, în funcţie de cerinţele Ministerului
    Apărării Naţionale, pentru îndeplinirea obligaţiilor asumate de România
    prin convenţii şi tratate internaţionale.
</p>
<p>
    Poate face excepţie, la cerere, de la prevederile alin. 2 cadrul militar
    care întâmpină greutăţi familiale deosebite şi se încadrează în una dintre
    următoarele situaţii:
</p>
<p>
    a) formează o familie monoparentală;
</p>
<p>
    b) este întreţinător unic de familie, al copilului/fratelui/ părintelui;
</p>
<p>
    c) unul sau ambii părinţi sunt invalizi de gradul I sau II, indiferent de
    vârstă, şi nu mai are alţi fraţi sau surori majori, apţi de muncă, ori mai
    are fraţi sau surori, dar aceştia nu pot contribui la întreţinerea
    părinţilor deoarece sunt elevi sau studenţi, sunt invalizi de gradul I sau
    II ori execută o pedeapsă privativă de libertate;
</p>
<p>
    d) soţul este grav bolnav, încadrat în gradul I sau II de invaliditate;
</p>
<p>
    e) ambii soţi sau fraţi ar urma să participe la misiune în aceeaşi perioadă
    şi nu îşi exprimă acordul în acest sens;
</p>
<p>
    f) în caz de calamităţi naturale.
</p>
<h3 align="center">
Drepturi
</h3>
<p align="center">
    <strong>Articolul 9</strong>
</p>
<p>
    Cadrele militare în activitate au dreptul la:
</p>
<p>
    a) soldă lunară, compusă din solda de grad, soldă de funcţie, gradaţii şi
    indemnizaţii, precum şi la prime, premii, sporuri şi alte drepturi băneşti,
    ale căror cuantumuri se stabilesc prin hotărâre a Guvernului;
</p>
<p>
    b) echipament, hrană, asistenţă medicală, medicamente, locuinţă de
    serviciu, gratuite, concedii şi scutiri medicale plătite, în condiţiile
    stabilite prin hotărâre a Guvernului;
</p>
<p>
    c) reduceri sau scutiri de impozit pe venit şi ale cuantumului chiriei,
    ajutoare şi alte drepturi, potrivit reglementărilor în vigoare;
</p>
<p>
    d) transport gratuit, în condiţiile stabilite prin hotărâre a Guvernului;
</p>
<p>
    e) suportarea de către Ministerul Apărării Naţionale a sumelor necesare
    pentru asigurarea asistenţei juridice a cadrelor militare pentru fapte
    săvârşite de către acestea în exercitarea, potrivit legii, a atribuţiilor
    de serviciu, în condiţiile stabilite prin ordin al ministrului apărării
    naţionale.
</p>
<p align="center">
    <strong>Articolul 9^1</strong>
</p>
<p>
    Cadrele militare trecute în rezervă sau direct în retragere au dreptul la
    pensie militară de stat, potrivit legii.
</p>
<p align="center">
    <strong>Articolul 11</strong>
</p>
<p>
    Pensionării militari decoraţi cu ordinul „Meritul Militar” clasele a III-a,
    a II-a şi I beneficiază de un spor de 10%, 15% şi, respectiv, 20% al
    cuantumului pensiei.
</p>
<p align="center">
    <strong>Articolul 12</strong>
</p>
<p>
    Cadrele militare în activitate au dreptul să urmeze învăţământul superior
    militar sau civil, postuniversitar, doctoratul sau alte forme de
    perfecţionare a pregătirii, cu respectarea normelor legale.
</p>
<p align="center">
    <strong>Articolul 13</strong>
</p>
<p>
    Cadrele militare în activitate pot fi trimise la studii în străinătate,
    prin concurs, cu aprobarea ministrului apărării naţionale.
</p>
<p>
    Cadrele militare în activitate care au absolvit şcoli şi academii militare,
    cursuri sau alte forme de pregătire în străinătate beneficiază de drepturi
    depline la încadrarea şi promovarea în funcţii corespunzătoare studiilor
    din ţara cu care le-au fost echivalate diplomele dobândite, în condiţiile
    legii şi ale reglementărilor militare.
</p>
<p align="center">
    <strong>Articolul 14</strong>
</p>
<p>
    În timp de pace, cadrele militare în activitate au dreptul la concediu de
    odihnă, concediu de odihnă suplimentar pentru activitate în locuri de muncă
    cu condiţii deosebite - vătămătoare, grele sau periculoase - şi la concediu
    de studii.
</p>
<p>
    Regulile privind durata şi acordarea concediului de odihnă, concediului de
    odihnă suplimentar şi a concediului de studii, precum şi compensarea în
    bani a concediului de odihnă neefectuat se stabilesc prin hotărâre a
    Guvernului.
</p>
<p align="center">
    <strong>Articolul 14^1</strong>
</p>
<p>
    În timp de pace, cadrele militare în activitate au dreptul la concedii fără
    plată, pe o durată de cel mult 4 ani, în următoarele situaţii:
</p>
<p>
    a) solicită să îşi urmeze soţia sau soţul trimis în străinătate de către
    Ministerul Afacerilor Externe, de alte ministere, autorităţi administrative
    autonome, organe ori alte instituţii de specialitate ale administraţiei
    publice centrale, pentru îndeplinirea unei misiuni permanente în
    străinătate la misiunile diplomatice, la oficiile consulare sau la alte
    reprezentanţe naţionale, structuri şi comandamente din cadrul
    organizaţiilor internaţionale din care România face parte, pentru o
    perioadă mai mare de 6 luni;
</p>
<p>
    b) au fost selectate pentru a ocupa temporar posturi în structurile din
    cadrul organizaţiilor internaţionale din care România face parte, în baza
    aprobării prealabile a ministrului apărării naţionale.
</p>
<p>
    Pentru alte cazuri, temeinic motivate, cadrele militare în activitate au
    dreptul la concedii fără plată, pe durată determinată, de cel mult un an.
</p>
<p>
    Concediile fără plată prevăzute la alin. 1 şi 2 se aprobă de către
    ministrul apărării naţionale sau de către comandanţii stabiliţi de
    acesta.Ministrul apărării naţionale poate prelungi durata concediilor fără
    plată prevăzute la alin. 1 şi 2 cu cel mult un an. În Ministerul Afacerilor
    Interne, prelungirea concediilor fără plată prevăzute la alin. 1 şi 2 se
    aprobă potrivit competenţelor de gestiune a resurselor umane.
</p>
<p>
    În perioada concediului fără plată, acordat potrivit prevederilor alin. 1
    sau 2, cadrele militare sunt suspendate din funcţie şi nu beneficiază de
    niciun drept din partea Ministerului Apărării Naţionale, cu excepţia celui
    privind folosirea locuinţei de serviciu, în cazul când se dispune de
    aceasta.
</p>
<p>
    Perioada concediului fără plată nu constituie vechime în serviciu pentru
    stabilirea pensiei, vechime în activitate pentru acordarea Semnului
    onorific În Serviciul Patriei şi/sau pentru acordarea gradaţiei următoare
    în condiţiile legii.
</p>
<p>
    În situaţia prevăzută la alin. 1 lit. a), la stabilirea stagiului în gradul
    pe care îl au cadrele militare se ia în calcul o perioadă egală cu trei
    pătrimi din durata concediului fără plată.
</p>
<p>
    În situaţia prevăzută la alin. 1 lit. b), la stabilirea stagiului în gradul
    pe care îl au cadrele militare se ia în calcul întreaga durată a
    concediului fără plată.În situaţia prevăzută la alin. 2, durata concediului
    fără plată nu se ia în calcul la stabilirea stagiului în grad.
</p>
<p>
    La încetarea concediului fără plată, instituţia are obligaţia de a numi
    cadrul militar pe o funcţie vacantă sau să îl pună la dispoziţie în vederea
    încadrării.
</p>
<p align="center">
    <strong>Articolul 14^2</strong>
</p>
<p>
    În timp de pace, cadrele militare în activitate confirmate în serviciul
    medical pot beneficia, pe lângă drepturile prevăzute la art. 14^1, de
    concedii fără plată, pe o durată de cel mult 4 ani, pentru formare
    profesională.La încetarea concediului fără plată acordat potrivit alin. 1,
    instituţia are obligaţia de a reîncadra cadrul militar, din oficiu, pe
    funcţia de pe care a fost suspendat, prin rezervarea acesteia, cu excepţia
    situaţiei în care unitatea este supusă procesului de reorganizare sau
    restructurare, iar postul se desfiinţează.Dispoziţiile art. 14^1 alin. 3,
    5, 6 şi 8^1 se aplică în mod corespunzător în situaţia acordării
    concediilor fără plată pentru formarea profesională, prevăzută la alin. 1.
</p>
<p align="center">
    <strong>Articolul 14^3</strong>
</p>
<p>
    Cadrele militare în activitate au dreptul, anual, la un concediu pentru
    formare profesională, plătit, de până la 15 zile lucrătoare, cu aprobarea
    comandantului unităţii militare, în condiţiile stabilite prin ordin al
    ministrului apărării naţionale.
</p>
<p>
    Durata concediului pentru formare profesională nu poate fi dedusă din
    durata concediului de odihnă anual şi este asimilată unei perioade de muncă
    efectivă în ceea ce priveşte drepturile cuvenite personalului militar.
</p>
<p align="center">
    <strong>Articolul 14^4</strong>
</p>
<p>
    Cadrele militare în activitate, din cadrul Ministerului Apărării Naţionale,
    pe timpul cât se află în concediu de odihnă, concediu paternal,
    incapacitate temporară de muncă şi în permisie beneficiază de solda de
    funcţie, solda de grad, gradaţii şi, după caz, solda de comandă,
    indemnizaţiile, compensaţiile, sporurile, primele, majorările şi alte
    drepturi salariale cu caracter permanent cuvenite pentru perioada
    respectivă.
</p>
<p align="center">
    <strong>Articolul 15</strong>
</p>
<p>
    Femeile, cadre militare în activitate, au dreptul la concediu de
    maternitate şi beneficiază de pauze pentru alimentarea şi îngrijirea
    copilului, precum şi de alte drepturi prevăzute de lege pentru femeile
    salariate din administraţia publică.
</p>
<p>
    Cadrele militare în activitate au dreptul la concediu şi indemnizaţie
    pentru îngrijirea copilului bolnav, concediu de acomodare, concediu
    paternal, concediu şi indemnizaţie pentru creşterea copilului, în
    condiţiile prevăzute de dispoziţiile legale în vigoare.
</p>
<p>
    La stabilirea stagiului în gradul pe care îl au cadrele militare se ia în
    calcul întreaga durată a concediului prevăzut la alin. 2.
</p>
<p align="center">
    <strong>Articolul 16</strong>
</p>
<p>
    Cadrele militare în activitate care urmează cursurile de zi ale
    instituţiilor de învăţământ superior beneficiază, în locul concediilor de
    odihnă, de vacante, conform programelor de învăţământ ale instituţiilor
    respective şi ordinului ministrului apărării naţionale.
</p>
<p align="center">
    <strong>Articolul 17</strong>
</p>
<p>
    Pentru rezolvarea unor situaţii personale sau familiale deosebite, cadrelor
    militare în activitate, precum şi celor în rezervă, pe timpul cât sunt
    concentrate sau mobilizate în unităţi militare, li se pot acorda permisii.
</p>
<p>
    Durata permisiilor şi comandanţii care au dreptul să le aprobe se stabilesc
    prin regulamentele militare.
</p>
<p align="center">
    <strong>Articolul 18</strong>
</p>
<p>
    Timpul acordat pentru permisii, scutiri şi concedii medicale nu se scade
    din durata concediului anual de odihnă sau a concediului de odihnă
    suplimentar.
</p>
<p align="center">
    <strong>Articolul 19</strong>
</p>
<p>
    Pe timpul stării de urgenţă şi de asediu, comandanţii/şefii structurilor
    militare pot dispune întreruperea concediilor de odihnă, de odihnă
    suplimentare, fără plată, de studii şi pentru formare profesională ale
    cadrelor militare în activitate din subordine, în funcţie de nevoile
    instituţiilor militare.
</p>
<p>
    Pe timpul stării de urgenţă, comandanţii/şefii structurilor militare pot
    dispune unilateral efectuarea totală sau parţială a concediilor de
    odihnă/de odihnă suplimentare pentru cadrele militare în activitate din
    subordine.
</p>
<p>
    La declararea mobilizării sau a stării de război, concediile de odihnă, de
    odihnă suplimentare, fără plată, paternal, de acomodare, pentru creşterea
    copilului, de studii, pentru formare profesională, vacanţele şi permisiile
    se întrerup, cadrele militare în activitate fiind obligate să se prezinte
    la unităţile militare de care aparţin, în cel mai scurt timp posibil.
</p>
<p>
    Pe timpul mobilizării şi pe timp de război, cadrelor militare în activitate
    şi celor în rezervă, concentrate sau mobilizate, li se pot acorda permisii
    sau concedii, în condiţii stabilite prin ordin al conducătorului
    instituţiei.
</p>
<p>
    Pe timpul stării de urgenţă, de asediu, de mobilizare şi pe timp de război,
    comandanţii/şefii stabilesc programul de lucru al cadrelor militare, în
    funcţie de evoluţia situaţiei şi misiunile încredinţate.
</p>
<p>
    Pe timpul stării de urgenţă, de asediu, de mobilizare şi pe timp de război,
    cadrele militare pot efectua deplasări în alte garnizoane sau unităţi
    administrativ-teritoriale, altele decât cele din care face parte unitatea
    militară în care îşi desfăşoară activitatea, ori pot părăsi teritoriul
    naţional, în condiţiile stabilite prin ordin al conducătorului instituţiei.
</p>
<p align="center">
    <strong>Articolul 20^1</strong>
</p>
<p>
    Cadrele militare în activitate numite în prima funcţie/mutate în interesul
    serviciului, detaşate şi/sau împuternicite într-o altă garnizoană decât cea
    în care îşi au domiciliul şi care nu deţin locuinţă proprietate personală
    în acea garnizoană, nici ei şi nici soţiile sau soţii acestora, în situaţia
    în care nu li se poate asigura spaţiu de locuit corespunzător, au dreptul
    la o compensaţie lunară pentru chirie de până la 50% din solda lunară.
</p>
<p>
    Cadrele militare în activitate numite în prima funcţie, mutate în interesul
    serviciului, detaşate şi/sau împuternicite într-o garnizoană în care îşi au
    domiciliul, dar care nu deţin locuinţă proprietate personală, nici ei şi
    nici soţiile sau soţii acestora, în situaţia în care nu li se poate asigura
    spaţiu de locuit corespunzător, pot beneficia, în cazuri justificate, pe
    baza rezultatelor anchetei sociale efectuate de o comisie constituită prin
    ordin al ministrului apărării naţionale, de compensaţia lunară pentru
    chirie, prevăzută la alin. 1, la propunerea comandanţilor sau a şefilor
    cadrelor militare respective.
</p>
<p>
    Cadrele militare care îndeplinesc condiţiile de acordare a compensaţiei
    lunare pentru chirie potrivit alin. 1 şi 2 şi care contractează un credit
    ipotecar/imobiliar destinat achiziţionării unei locuinţe sau încheie un
    contract de vânzare-cumpărare cu plata în rate a unei locuinţe beneficiază
    de compensaţia lunară pentru chirie, pe o perioadă ce nu poate depăşi
    durata de derulare a creditului sau contractului de vânzare-cumpărare cu
    plata în rate, respectiv pentru plata ratei sau a unei fracţiuni din rata
    aferentă creditului sau contractului de vânzare-cumpărare cu plata în rate.
    În această situaţie, compensaţia lunară pentru chirie se acordă în
    cuantumul prevăzut la alin. 1, dar nu poate depăşi rata lunară plătită
    pentru creditul ipotecar/imobiliar sau pentru contractul de
    vânzare-cumpărare cu plata în rate.
</p>
<p>
    În situaţia prevăzută la alin. 2^1, compensaţia lunară pentru chirie se
    acordă pentru o singură locuinţă achiziţionată pe timpul carierei.
</p>
<p>
    Compensaţia lunară pentru chirie nu se poate acorda concomitent pentru
    situaţia prevăzută la alin. 1 şi 2 şi pentru situaţia prevăzută la alin.
    2^1, caz în care cadrul militar optează pentru una dintre aceste situaţii.
    Ministerul Apărării Naţionale nu îi asigură cadrului militar care a optat
    pentru situaţia prevăzută la alin. 2^1 un spaţiu de locuit corespunzător în
    garnizoana unde acesta a achiziţionat locuinţa pe durata existenţei
    situaţiei de la alin. 2^1.
</p>
<p>
    Pentru persoanele prevăzute la alin. 2^1, sumele se justifică cu un
    contract de credit ipotecar/imobiliar destinat achiziţionării unei locuinţe
    sau un contract de vânzare-cumpărare cu plata în rate a unei locuinţe.
</p>
<p>
    Cadrele militare în activitate, mutate sau detaşate şi/sau împuternicite,
    prevăzute la alin. 1, pot beneficia de compensaţie lunară pentru chirie
    într-o singură garnizoană.
</p>
<p>
    Prin rata lunară prevăzută la alin. 2^1 se înţelege suma tuturor costurilor
    lunare generate de contractul de credit ipotecar/imobiliar destinat
    achiziţionării unei locuinţe sau de contractul de vânzare-cumpărare cu
    plata în rate a unei locuinţe conform scadenţarului de plată, mai puţin
    cele legate de rambursările anticipate, eventualele dobânzi penalizatoare
    şi alte costuri care nu se regăsesc în scadenţarul de plată a ratelor
    lunare. (Alineatul 2^5) Cuantumul concret al compensaţiei prevăzute la
    alin. 1, 2 şi 2^1, precum şi condiţiile de acordare a acesteia se stabilesc
    prin hotărâre a Guvernului, la propunerea ministrului apărării naţionale.
</p>
<p>
    Soţiile sau soţii cadrelor militare mutate în interesul serviciului într-o
    altă garnizoană, care au fost încadrate în muncă şi au întrerupt
    activitatea datorită mutării împreună cu soţii sau soţiile, au dreptul la o
    indemnizaţie lunară de 50% din solda lunară a cadrelor militare pe care
    le-au urmat, până la o nouă angajare sau până la prestarea unei activităţi
    autorizate aducătoare de venituri, dar nu mai mult de 9 luni de la data
    mutării cadrului militar.
</p>
<p>
    De indemnizaţia lunară prevăzută la alin. 4 beneficiază şi soţii sau
    soţiile care, la data mutării cadrelor militare pe care le-au urmat, erau
    înscrise ca şomeri la agenţiile pentru ocuparea forţei de muncă judeţene
    sau a municipiului Bucureşti, dar numai după expirarea, potrivit legii, a
    termenului de plată a indemnizaţiei de şomaj.
</p>
<p align="center">
    <strong>Articolul 21</strong>
</p>
<p>
    Ofiţerilor, maiştrilor militari şi subofiţerilor în activitate şi celor în
    rezervă, concentraţi sau mobilizaţi în unităţile militare, li se acordă
    despăgubiri pentru cazurile de invaliditate sau de deces produse ca urmare
    a unor acţiuni militare, prin accidente, catastrofe sau alte asemenea
    evenimente intervenite în timpul şi din cauza serviciului militar sau a
    unor misiuni în cadrul forţelor internaţionale destinate menţinerii păcii
    ori constituite în scopuri umanitare.
</p>
<p>
    Cuantumul despăgubirilor ce se acordă cadrelor devenite invalide, respectiv
    urmaşilor celor decedate, se stabileşte prin hotărâre a Guvernului.
</p>
<p>
    La cerere, personalul militar încadrat în gradul III de invaliditate sau
    clasat apt limitat pentru serviciul militar de către comisiile de expertiză
    medico-militară, în timpul ori în legătură cu exercitarea atribuţiilor de
    serviciu, poate fi menţinut sau rechemat în activitate în funcţii militare
    ori încadrat în funcţii civile fără examen sau concurs, în instituţiile din
    sistemul de apărare, ordine publică şi siguranţă naţională, în condiţiile
    stabilite prin ordin al conducătorului instituţiei.
</p>
<p align="center">
    <strong>Articolul 22</strong>
</p>
<p>
    Cadrele militare în activitate şi familiile acestora beneficiază, ca măsura
    de protecţie socială, de înlesniri stabilite prin ordin al ministrului
    apărării naţionale, în folosirea caselor de odihnă, sanatoriilor, căminelor
    de garnizoană şi a altor amenajări recreative şi sportive.
</p>
<p>
    Cheltuielile ce decurg din aplicarea acestor măsuri vor fi suportate din
    bugetul Ministerului Apărării Naţionale.
</p>
<p align="center">
    <strong>Articolul 23</strong>
</p>
<p>
    Membrii familiilor cadrelor militare în activitate beneficiază gratuit de:
</p>
<p>
    a) asistenţă medicală şi medicamente în cadrul reţelei sanitare a
    Ministerului Apărării Naţionale sau în alte reţele sanitare, cu decontarea
    cheltuielilor de către acest minister;
</p>
<p>
    b) transport, atunci când ofiţerii, maiştrii militari sau subofiţerii sunt
    mutaţi în interes de serviciu dintr-o garnizoană în alta.
</p>
<p>
    Membrii familiilor cadrelor militare în activitate beneficiază şi de pensie
    de urmaş, precum şi de alte drepturi în conformitate cu prevederile legale.
</p>
<p>
    La decesul unui cadru militar în activitate, Ministerul Apărării Naţionale
    acordă familiei acestuia sau persoanei care a suportat cheltuielile
    ocazionate de deces, după caz, un ajutor suplimentar în cuantum de două
    solde lunare neimpozabile.
</p>
<p align="center">
    <strong>Articolul 25</strong>
</p>
<p>
    Copiii cadrelor militare în activitate, decedate în timpul şi din cauza
    serviciului, ca urmare a unor acţiuni militare, accidente, catastrofe sau a
    unor acte de devotament excepţional ori a unor misiuni în cadrul forţelor
    internaţionale destinate menţinerii păcii ori constituite în scopuri
    umanitare, pot fi transferaţi la liceele militare sau în instituţiile
    militare de învăţământ care formează maiştri militari, subofiţeri ori
    ofiţeri, pe baza unui test de aptitudini, a rezultatelor la învăţătură
    obţinute în instituţiile civile de învăţământ şi potrivit normelor aprobate
    de ministrul apărării naţionale.
</p>
<p>
    Copiii personalului militar clasat inapt sau apt limitat pentru serviciul
    militar de către comisiile de expertiză medico-militară ori, după caz,
    decedat, în timpul sau în legătură cu exercitarea atribuţiilor de serviciu,
    pot fi înmatriculaţi, la cerere, fără examen, în instituţiile de învăţământ
    ale instituţiilor din sistemul de apărare, ordine publică şi siguranţă
    naţională, dacă îndeplinesc condiţiile legale.
</p>
<p>
    Copiii aflaţi în întreţinerea personalului militar clasat inapt sau apt
    limitat pentru serviciul militar de către comisiile de expertiză
    medico-militară ori, după caz, decedat, în timpul sau în legătură cu
    exercitarea atribuţiilor de serviciu, precum şi soţul ori soţia acestuia
    pot fi numiţi în funcţii militare sau încadraţi în funcţiile civile, fără
    examen ori concurs, în instituţiile din sistemul de apărare, ordine publică
    şi siguranţă naţională, dacă îndeplinesc condiţiile legale.
</p>
<p>
    Prin ordin al conducătorului instituţiei se stabilesc condiţiile şi
    procedura de aplicare a prevederilor prezentului articol.
</p>
<p align="center">
    <strong>Articolul 26</strong>
</p>
<p>
    Ofiţerii, maiştrii militari şi subofiţerii în rezervă şi în retragere,
    pensionari militari, au dreptul gratuit la asistenţă medicală şi
    medicamente în condiţiile art. 23 alin. 1 lit. a) şi au acces la cercurile
    militare, casele de odihnă, sanatoriile, căminele de garnizoană şi alte
    amenajări recreative sau sportive, beneficiind de înlesniri stabilite prin
    ordin al ministrului apărării naţionale.
</p>
<p>
    De aceleaşi drepturi beneficiază şi ofiţerii, maiştrii militari şi
    subofiţerii în rezervă şi în retragere, foşti pensionari militari de
    invaliditate datorită unor accidente în serviciu ori unor boli contractate
    în timpul şi din cauza îndeplinirii obligaţiilor militare, care ulterior au
    optat pentru pensia din sistemul asigurărilor sociale de stat.
</p>
<p>
    Membrii familiilor cadrelor militare în rezervă şi în retragere, pensionari
    militari, beneficiază gratuit de asistenţă medicală în condiţiile art. 23
    alin. 1 lit. a).
</p>
<p align="center">
    <strong>Articolul 27</strong>
</p>
<p>
    La trecerea în rezervă sau direct în retragere, cadrelor militare care au
    cel puţin 20 de ani de serviciu militar şi s-au distins prin activitatea
    desfăşurată, precum şi celor care au adus patriei servicii deosebite, chiar
    dacă nu au o vechime de 20 de ani de serviciu militar, li se poate acorda
    dreptul de a purta uniforma militară.
</p>
<p>
    Criteriile de acordare şi de retragere a acestui drept, precum şi
    situaţiile în care cadrele militare prevăzute la alin. 1 pot purta uniforma
    militară se stabilesc prin regulamente militare.
</p>
<h3 align="center">
        Interzicerea sau restrângerea exerciţiului unor drepturi şi libertăţi
</h3>
<p align="center">
    <strong>Articolul 28</strong>
</p>
<p>
    Cadrelor militare în activitate le este interzisă exercitarea următoarelor
    drepturi:
</p>
<p>
    a) să facă parte din partide, formaţiuni sau organizaţii politice ori să
    desfăşoare propagandă prin orice mijloace sau alte activităţi în favoarea
    acestora ori a unui candidat independent pentru funcţii publice;
</p>
<p>
    b) să candideze pentru a fi alese în administraţia publică locală, în
    Parlamentul României şi în Parlamentul European, precum şi în funcţia de
    Preşedinte al României;
</p>
<p>
    c) să declare sau să participe la grevă.
</p>
<p align="center">
    <strong>Articolul 29</strong>
</p>
<p>
    Cadrelor militare în activitate le este restrânsă exercitarea unor drepturi
    şi libertăţi, astfel:
</p>
<p>
    a) exprimarea în public a opiniilor politice nu este permisă;
</p>
<p>
    b) exprimarea în public a unor opinii contrare intereselor României şi
    forţelor armate nu este permisă;
</p>
<p>
    c) prezentarea, în public, de informaţii cu caracter militar de către
    cadrele militare nu este permisă, cu excepţia celor care au atribuţii în
    acest sens, potrivit normelor stabilite prin ordin al ministrului apărării
    naţionale;
</p>
<p>
    d) aderarea la culte religioase este liberă, mai puţin la cele care,
    potrivit legii, contravin normelor de păstrare a ordinii publice, precum şi
    la cele care încalcă bunele moravuri sau afectează exercitarea profesiei;
</p>
<p>
    e) constituirea în diferite forme de asociere cu caracter profesional,
    tehnico-ştiinţific, cultural, sportiv-recreativ sau caritabil, cu excepţia
    celor sindicale ori care contravin comenzii unice, ordinii şi disciplinei
    specifice instituţiei armatei, este permisă în condiţiile stabilite prin
    regulamentele militare.
</p>
<p>
    g) participarea la mitinguri, demonstraţii, procesiuni sau întruniri cu
    caracter politic ori sindical este interzisă, cu excepţia activităţilor la
    care se participa în misiune;
</p>
<p>
    h) cadrele militare în activitate se pot deplasa în străinătate în
    condiţiile ce se stabilesc prin ordin al ministrului apărării naţionale;
</p>
<p>
    i) pe timpul stării de urgenţă, de asediu, de mobilizare şi pe timp de
    război, primirea în audienţă şi soluţionarea petiţiilor se suspendă.
</p>
<p align="center">
    <strong>Articolul 30</strong>
</p>
<p>
    Ofiţerii, maiştrii militari şi subofiţerii în activitate au obligaţia de a
    nu efectua activităţi care contravin demnităţii, prestigiului şi normelor
    de comportare ce decurg din calitatea lor de cadre militare.
</p>
<p>
    Cadrelor militare în activitate le este interzis:
</p>
<p>
    a) să îndeplinească alte funcţii decât cele în care sunt încadrate, cu
    excepţia cumulului prevăzut de lege, în condiţiile stabilite prin ordin al
    ministrului apărării naţionale;
</p>
<p>
    b) să fie asociat unic ori să participe direct la administrarea sau
    conducerea unor organizaţii ori societăţi comerciale, cu excepţia celor
    numite în consiliile de administraţie ale regiilor autonome şi societăţilor
    comerciale din subordinea, coordonarea sau sub autoritatea Ministerului
    Apărării Naţionale şi ale filialelor acestora, din cadrul industriei de
    apărare sau în legătură cu aceasta.
</p>
<p align="center">
    <strong>Articolul 31</strong>
</p>
<p>
    Ofiţerii, maiştrii militari şi subofiţerii în rezervă, pe timpul cât sunt
    concentraţi sau mobilizaţi în unităţi militare, pot rămâne membri ai
    partidelor, formaţiunilor sau organizaţiilor politice, precum şi ai
    sindicatelor din care fac parte, dar le este interzisă desfăşurarea
    oricăror activităţi cu caracter politic sau sindical, în unităţi militare.
</p>
<p align="center">
    <strong>Disciplina militară</strong>
</p>
<p align="center">
    <strong>Articolul 32</strong>
</p>
<p>
    Disciplina militară constituie unul dintre factorii determinanţi ai
    capacităţii operaţionale a forţelor armate şi se bazează atât pe acceptarea
    conştientă a normelor de comportament stabilite, cât şi pe acordarea
    recompenselor şi aplicarea sancţiunilor disciplinare.
</p>
<p>
    Disciplina militară asigură respectarea de către militari a normelor
    legale, a ordinelor comandanţilor/şefilor date cu respectarea normelor de
    drept, regulilor de angajare ori obiceiurilor războiului, pentru menţinerea
    capacităţii operaţionale a unităţii, îndeplinirea misiunilor specifice şi
    buna desfăşurare a activităţilor din armată.
</p>
<p>
    Comandantul/Şeful dispune de prerogativă disciplinară, având competenţa de
    a acorda recompense şi de a aplica sancţiuni disciplinare cadrelor
    militare, potrivit prezentei legi.
</p>
<p align="center">
    <strong>Articolul 33</strong>
</p>
<p>
    Cadrelor militare li se pot acorda următoarele recompense:
</p>
<p>
    a) înaintarea în gradul următor, în mod excepţional, în condiţiile
    prevăzute la art. 64;
</p>
<p>
    b) înaintarea în gradul următor, înainte de termen, în condiţiile prevăzute
    la art. 63;
</p>
<p>
    c) conferirea de decoraţii şi titluri de onoare;
</p>
<p>
    d) conferirea de medalii, ordine şi semne onorifice;
</p>
<p>
    e) alte recompense morale, financiare sau materiale, în condiţii stabilite
    prin ordin al conducătorului instituţiei militare; recompensele financiare
    se acordă în condiţiile prevăzute de lege pentru premierea personalului
    plătit din fonduri publice.
</p>
<p align="center">
    <strong>Articolul 34</strong>
</p>
<p>
    Încălcarea de către cadrele militare, cu vinovăţie, a îndatoririlor de
    serviciu angajează răspunderea acestora disciplinară, materială, civilă sau
    penală, după caz.
</p>
<p>
    Cadrele militare răspund individual pentru faptele şi actele proprii
    sancţionate de lege, săvârşite atât în exercitarea atribuţiilor de serviciu
    ori în legătură cu acesta, cât şi în afara serviciului.
</p>
<p>
    Sunt absolvite de orice răspundere cadrele militare care prin exercitarea,
    în limitele legii, a atribuţiilor de serviciu au cauzat vătămări unor
    persoane ori au adus prejudicii patrimoniului acestora.
</p>
<p align="center">
    <strong>Articolul 34^1</strong>
</p>
<p>
    Constituie abateri disciplinare faptele săvârşite cu vinovăţie de către
    cadrele militare prin care au încălcat normele legale, regulamentele
    militare, ordinele şi dispoziţiile legale ale comandanţilor/şefilor
    ierarhici, dacă acestea nu au fost săvârşite în astfel de condiţii încât să
    fie considerate infracţiuni, potrivit legii penale.
</p>
<p align="center">
    <strong>Articolul 35</strong>
</p>
<p>
    Cadrelor militare li se pot aplica următoarele sancţiuni disciplinare:
</p>
<p>
    a) avertisment;
</p>
<p>
    b) mustrare scrisă;
</p>
<p>
    c) diminuarea soldei de funcţie cu un procent de până la 10% pe o perioadă
    de maximum 3 luni;
</p>
<p>
    d) diminuarea soldei de comandă cu un procent de 5-10% pe o perioadă de
    maximum 3 luni;
</p>
<p>
    e) amânarea înaintării în gradul următor pe timp de un an sau 2 ani;
</p>
<p>
    f) retrogradarea în funcţie până la cel mult nivelul gradului deţinut;
</p>
<p>
    g) trecerea în rezervă.
</p>
<p>
    Pentru aceeaşi abatere se poate aplica doar o singură sancţiune
    disciplinară.
</p>
<p>
    Sancţiunile disciplinare se aplică în termen de cel mult 6 luni de la data
    constatării, dar nu mai târziu de 2 ani de la data săvârşirii faptei;
    termenul de 6 luni este termen de prescripţie, iar cel de 2 ani este termen
    de decădere.
</p>
<p>
    Termenul de 6 luni prevăzut la alin. 3 se suspendă, de drept, pe perioada
    şi în situaţiile următoare:
</p>
<p>
    a) de la data sesizării, în condiţiile legii, a organelor de urmărire
    penală şi până la data soluţionării definitive a cauzei, dacă pentru fapta
    care constituie abatere disciplinară s-a dispus sesizarea organelor de
    urmărire penală;
</p>
<p>
    b) de la data suspendării raporturilor de serviciu şi până la data reluării
    activităţii;
</p>
<p>
    c) pe durata concediilor, permisiilor, învoirilor, misiunilor, stării de
    captivitate ori în alte situaţii de absenţă motivată, în condiţiile legii.
</p>
<p>
    Prin excepţie de la prevederile alin. 3, sancţiunile disciplinare se pot
    aplica după expirarea termenului de 2 ani de la data săvârşirii faptei,
    doar în situaţia în care organele de urmărire penală sesizate decid că
    fapta săvârşită nu constituie infracţiune şi comunică decizia după
    expirarea acestui termen.În situaţia prevăzută la alin. 5, sancţiunea se
    aplică în termen de cel mult 6 luni de la data comunicării deciziei
    organului de urmărire penală, care este termen de decădere.
</p>
<p align="center">
    <strong>Articolul 35^1</strong>
</p>
<p>
    Sancţiunile disciplinare prevăzute la art. 35 alin. 1 lit. a)-d) se aplică
    de către:
</p>
<p>
    a) comandanţii/şefii unităţilor militare în care sunt încadrate cadrele
    militare care au săvârşit abaterile disciplinare;
</p>
<p>
    b) comandanţii/şefii unităţilor militare în care sunt detaşate cadrele
    militare care au săvârşit abaterile disciplinare;
</p>
<p>
    c) comandanţii/şefii ierarhici ai celor prevăzuţi la lit. a) şi b).
</p>
<p>
    Sancţiunile disciplinare prevăzute la art. 35 alin. 1 lit. e) şi f) se
    aplică de către comandanţii/şefii care au competenţe de numire în funcţii.
    Sancţiunea disciplinară prevăzută la art. 35 alin. 1 lit. g) se aplică de
    către conducătorul instituţiei militare.Pe timpul stării de urgenţă, de
    asediu, de mobilizare şi pe timp de război, sancţiunile disciplinare pentru
    cadrele militare în activitate se aplică astfel:
</p>
<p>
    a) avertismentul sau mustrarea scrisă - de către comandanţii/şefii
    nemijlociţi şi superiorii acestora;
</p>
<p>
    b) diminuarea soldei de funcţie sau de comandă - de către comandanţii de
    brigăzi/similare şi superiorii acestora;
</p>
<p>
    c) amânarea înaintării în gradul următor - comandanţii de divizii/similare,
    comandantul Comandamentului forţelor pentru operaţii speciale şi
    comandantul Comandamentului apărării cibernetice şi superiorii acestora;
</p>
<p>
    d) retrogradarea în funcţie - şefii categoriilor de forţe, comandantul
    Comandamentului logistic întrunit, comandantul Comandamentului
    comunicaţiilor şi informaticii.
</p>
<p>
    Şefii structurilor centrale aplică sancţiunile prevăzute la alin. 4 pentru
    întregul personal militar din subordine.
</p>
<p>
    Dispoziţiile alin. 4 şi 5 se aplică în mod corespunzător Serviciului de
    Informaţii Externe, Serviciului Român de Informaţii, Serviciului de
    Protecţie şi Pază şi Serviciului de Telecomunicaţii Speciale, funcţiile
    similare celor prevăzute la alin. 4 fiind echivalate prin ordin al
    conducătorului instituţiei.
</p>
<p align="center">
    <strong>Articolul 35^2</strong>
</p>
<p>
    Comandantul/Şeful aplică sancţiuni disciplinare cadrelor militare din
    subordinea sa ori de câte ori constată sau este sesizat că acestea au
    săvârşit o abatere disciplinară, în mod direct sau, după caz, pe baza
    rezultatului cercetării disciplinare prealabile ori a hotărârii consiliului
    de onoare.
</p>
<p>
    În cazul în care comandantul/şeful este sesizat cu privire la comiterea
    unei fapte care poate constitui abatere disciplinară, persoana care
    sesizează are obligaţia de a susţine reclamaţia cu date şi indicii de
    natură obiectivă referitoare la fapta săvârşită.
</p>
<p>
    La individualizarea sancţiunii disciplinare se ţine seama de gravitatea
    faptei, care se evaluează după următoarele criterii:
</p>
<p>
    a) împrejurările în care a fost săvârşită fapta;
</p>
<p>
    b) gradul de vinovăţie;
</p>
<p>
    c) dimensiunile disfuncţiilor create în activitatea instituţiei;
</p>
<p>
    d) gradul de afectare a ordinii şi disciplinei militare;
</p>
<p>
    e) natura şi gravitatea consecinţelor faptei;
</p>
<p>
    f) motivul săvârşirii faptei şi scopul urmărit;
</p>
<p>
    g) existenţa, în antecedentele disciplinare ale militarului, a altor
    sancţiuni disciplinare care nu au fost radiate.
</p>
<p>
    La stabilirea sancţiunii disciplinare pentru abaterile disciplinare
    săvârşite pe timpul stării de urgenţă, de asediu, de mobilizare şi pe timp
    de război, comandantul/şeful cu competenţe de aplicare a acesteia are în
    vedere gravitatea faptei care constituie abatere disciplinară şi efectele
    produse de aceasta, prin raportare la împrejurarea în care aceasta a fost
    săvârşită.
</p>
<p align="center">
    <strong>Articolul 35^3</strong>
</p>
<p>
    Sancţiunile disciplinare prevăzute la art. 35 alin. 1 lit. a) şi b) se
    aplică direct de către comandanţii/şefii care au competenţe în acest sens.
    Sancţiunile disciplinare prevăzute la art. 35 alin. 1 lit. c)-g) se aplică
    după efectuarea cercetării disciplinare prealabile. Sancţiunile
    disciplinare prevăzute la art. 35 alin. 1 lit. e)-g) se aplică numai în
    baza hotărârii consiliului de onoare.Pe timpul stării de urgenţă, de
    asediu, de mobilizare şi pe timp de război, prin excepţie de la prevederile
    alin. 2 şi 3, comandanţii/şefii aplică sancţiunile disciplinare în mod
    direct sau pot dispune efectuarea unei cercetări disciplinare pentru
    fundamentarea deciziei.
</p>
<p>
    Pentru efectuarea cercetării disciplinare prevăzute la alin. 4,
    comandanţii/şefii desemnează, în funcţie de complexitatea faptelor, un
    ofiţer sau o comisie, care întocmeşte şi prezintă un raport, în termen de
    maximum 7 zile calendaristice de la data desemnării.
</p>
<p align="center">
    <strong>Articolul 35^4</strong>
</p>
<p>
    Prin procedură disciplinară, în sensul prezentei legi, se înţelege
    cercetarea disciplinară prealabilă şi/sau activitatea consiliilor de
    onoare.
</p>
<p>
    Cercetarea disciplinară şi activitatea consiliilor de onoare au la bază
    următoarele principii:
</p>
<p>
    a) prezumţia de nevinovăţie, conform căreia se prezumă că orice cadru
    militar este considerat nevinovat pentru fapta sesizată ca abatere
    disciplinară, atât timp cât vinovăţia sa nu a fost dovedită;
</p>
<p>
    b) garantarea dreptului la apărare, conform căruia se recunoaşte dreptul
    cadrului militar de a fi audiat şi de a propune dovezi în apărarea sa; în
    tot cursul procedurilor, cadrul militar are dreptul de a da explicaţii când
    socoteşte că este necesar, precum şi de a fi asistat de un apărător ales,
    care trebuie să aibă studii juridice, cu respectarea normelor privind
    protecţia informaţiilor clasificate;
</p>
<p>
    c) celeritatea procedurilor, care presupune obligaţia de soluţionare fără
    întârziere a cauzei;
</p>
<p>
    d) contradictorialitatea, care presupune asigurarea posibilităţii
    persoanelor aflate pe poziţii divergente de a se exprima cu privire la
    orice act sau fapt care are legătură cu abaterea de la disciplina militară
    ce face obiectul sesizării;
</p>
<p>
    e) proporţionalitatea, conform căreia trebuie respectat un raport corect
    între gravitatea abaterii de la disciplina militară, circumstanţele
    săvârşirii acesteia şi sancţiunea disciplinară propusă a fi aplicată;
</p>
<p>
    f) legalitatea, conform căreia întreaga procedură se desfăşoară potrivit
    normelor legale;
</p>
<p>
    g) unicitatea, conform căreia pentru o abatere de la disciplina militară nu
    se poate aplica decât o singură sancţiune disciplinară.
</p>
<p>
    Procedura disciplinară nu este publică.
</p>
<p>
    Comunicarea actelor în procedura disciplinară se poate efectua în oricare
    dintre modalităţile prevăzute de lege.
</p>
<p align="center">
    <strong>Articolul 35^5</strong>
</p>
<p>
    Comandantul/Şeful unităţii militare unde îşi desfăşoară activitatea cadrul
    militar care a săvârşit fapta dispune efectuarea cercetării disciplinare
    prealabile de către un ofiţer sau o comisie, în funcţie de complexitatea
    faptelor.
</p>
<p>
    Cadrele militare desemnate conform alin. 1 nu se pot afla în una dintre
    următoarele situaţii:
</p>
<p>
    a) este persoana care a sesizat comiterea faptei sau parte vătămată prin
    comiterea faptei;
</p>
<p>
    b) este soţ/soţie, rudă sau afin până la gradul al patrulea inclusiv al/a
    cadrului militar ale cărui fapte sunt cercetate, ale persoanei care a
    sesizat comiterea faptei sau ale părţii vătămate prin comiterea faptei;
</p>
<p>
    c) este subordonat nemijlocit sau direct faţă de oricare dintre persoanele
    prevăzute la lit. a) şi b);
</p>
<p>
    d) are grad inferior cadrului militar ale cărui fapte sunt cercetate;
</p>
<p>
    e) se găseşte în alte situaţii de conflict de interese prevăzute de lege.
</p>
<p>
    În situaţia în care, la nivelul unităţii militare în care îşi desfăşoară
    activitatea cadrul militar ale cărui fapte sunt cercetate, nu sunt
    identificate cadre militare care să corespundă criteriilor prevăzute la
    alin. 2, comandantul/şeful unităţii militare solicită sprijin eşalonului
    ierarhic superior.
</p>
<p align="center">
    <strong>Articolul 35^6</strong>
</p>
<p>
    Cadrului militar ale cărui fapte sunt cercetate i se aduce la cunoştinţă,
    de îndată, în scris, despre efectuarea cercetării disciplinare prealabile,
    despre obiectul acesteia, precum şi despre drepturile şi obligaţiile pe
    care le are.
</p>
<p align="center">
    <strong>Articolul 35^7</strong>
</p>
<p>
    Ofiţerul sau comisia prevăzut/prevăzută la art. 35^5 alin. 1 întocmeşte un
    raport, pe care îl prezintă comandantului/şefului ierarhic care a dispus
    efectuarea cercetării, în termen de cel mult 20 de zile lucrătoare de la
    data desemnării.Raportul prevăzut la alin. 1 conţine concluziile cercetării
    şi propuneri privind aplicarea/neaplicarea unei sancţiuni disciplinare
    cadrului militar a cărui fapte au fost cercetate sau trimiterea acestuia în
    faţa consiliului de onoare, după caz. Comandantul/Şeful ierarhic analizează
    raportul cercetării prealabile şi poate adopta una dintre următoarele
    decizii:
</p>
<p>
    a) clasarea dosarului de cercetare prealabilă, în cazul inexistenţei
    faptei, prescrierii faptei, constatării nevinovăţiei cadrului militar sau
    în cazul încetării raportului de serviciu al acestuia;
</p>
<p>
    b) aplicarea uneia dintre sancţiunile prevăzute de art. 35 alin. 1 lit.
    a)-d);
</p>
<p>
    c) trimiterea în faţa consiliului de onoare, pe baza propunerilor cuprinse
    în raportul de cercetare, când gravitatea faptelor săvârşite impune
    aplicarea unei sancţiuni mai aspre.
</p>
<p>
    În termen de 5 zile lucrătoare de la data primirii raportului,
    comandantul/şeful ierarhic aduce la cunoştinţa cadrului militar în cauză
    decizia prevăzută la alin. 3, în formă scrisă.
</p>
<p align="center">
    <strong>Articolul 35^8</strong>
</p>
<p>
    Pentru apărarea onoarei cadrelor militare în activitate, precum şi pentru
    cercetarea faptelor sesizate ca abateri disciplinare, în cadrul
    instituţiilor militare se constituie consilii de onoare.
</p>
<p>
    Consiliul de onoare are în componenţă 3 sau 5 membri titulari, ofiţeri în
    activitate, care se aleg pe o perioadă de 2 ani; ofiţerul cu gradul şi
    funcţia cele mai mari este şi preşedintele consiliului.
</p>
<p>
    Pentru fiecare membru titular al consiliului de onoare se desemnează, în
    condiţiile prevăzute la alin. 2, câte un membru supleant. Nivelul
    structurilor la care se constituie consiliile de onoare, modul de
    constituire, procedurile de lucru ale acestora, precum şi alte aspecte
    procedurale pentru aplicarea prevederilor prezentei secţiuni referitoare la
    procedura disciplinară se stabilesc prin ordin al ministrului apărării
    naţionale, ministrului afacerilor interne, directorului Serviciului Român
    de Informaţii, directorului Serviciului de Telecomunicaţii Speciale,
    directorului Serviciului de Informaţii Externe, respectiv al directorului
    Serviciului de Protecţie şi Pază, după caz.
</p>
<p align="center">
    <strong>Articolul 35^9</strong>
</p>
<p>
    Hotărârea consiliului de onoare se adoptă cu majoritatea voturilor
    exprimate de membrii acestuia şi se aduce la cunoştinţa cadrelor militare,
    pe bază de semnătură.
</p>
<p>
    Consiliul de onoare poate adopta una dintre următoarele hotărâri:
</p>
<p>
    a) constatarea inexistenţei faptei, a nevinovăţiei sau a prescrierii
    faptei;
</p>
<p>
    b) declararea vinovăţiei cadrului militar, cu propunerea aplicării uneia
    dintre sancţiunile prevăzute de art. 35 alin. 1.
</p>
<p align="center">
    <strong>Articolul 35^10</strong>
</p>
<p>
    În situaţia aplicării sancţiunii disciplinare în baza unei hotărâri a
    consiliului de onoare, actul administrativ de sancţionare se emite şi se
    comunică cadrului militar în termen de 20 de zile lucrătoare de la data
    înregistrării hotărârii consiliului de onoare la unitatea/structura al
    cărei comandant/şef are competenţa de aplicare a sancţiunii disciplinare.
</p>
<p>
    Actul administrativ de aplicare a sancţiunii disciplinare se emite, în
    formă scrisă, de comandantul/şeful care are competenţe de aplicare a
    acesteia şi se comunică în scris celui sancţionat.
</p>
<p>
    Sub sancţiunea nulităţii absolute, în actul administrativ de aplicare a
    sancţiunii disciplinare se înscriu în mod obligatoriu:
</p>
<p>
    a) descrierea faptei care constituie abatere disciplinară;
</p>
<p>
    b) precizarea prevederilor care au fost încălcate;
</p>
<p>
    c) motivele pentru care au fost înlăturate apărările formulate în timpul
    cercetării disciplinare prealabile, cu excepţia aplicării sancţiunilor
    prevăzute la art. 35 alin. 1 lit. a) şi b);
</p>
<p>
    d) temeiul de drept în baza căruia sancţiunea disciplinară se aplică;
</p>
<p>
    e) termenul în care sancţiunea disciplinară poate fi contestată;
</p>
<p>
    f) organul competent la care sancţiunea disciplinară poate fi contestată.
</p>
<p align="center">
    <strong>Articolul 35^11</strong>
</p>
<p>
    Cadrele militare au dreptul să conteste aplicarea sancţiunilor prevăzute la
    art. 35 alin. 1 lit. a)-d) în termen de 5 zile lucrătoare de la comunicarea
    deciziei de sancţionare, prin raport adresat în scris comandantului/şefului
    ierarhic superior celui care a emis decizia.Comandantul/Şeful ierarhic
    prevăzut la alin. 1 se pronunţă prin decizie motivată, în termen de 30 de
    zile lucrătoare de la data înregistrării contestaţiei, pe baza unei
    cercetări efectuate în condiţiile prevăzute la art. 35^5 - 35^7, astfel:
</p>
<p>
    a) menţine decizia contestată, când constată că este temeinică şi legală;
</p>
<p>
    b) anulează decizia contestată, când constată că aceasta a fost emisă fără
    temei legal sau asupra altei persoane;
</p>
<p>
    c) anulează decizia contestată şi aplică o sancţiune mai uşoară, când
    constată că sancţiunea aplicată este prea aspră în raport cu gravitatea
    faptelor;
</p>
<p>
    d) Abrogată.
</p>
<p>
    e) anulează decizia contestată şi decide trimiterea în faţa consiliului de
    onoare, pe baza propunerilor cuprinse în raportul de cercetare, când
    gravitatea faptelor săvârşite impune aplicarea unei sancţiuni mai aspre.
</p>
<p>
    Decizia prevăzută la alin. 2 este definitivă, se comunică cadrelor militare
    contestatare în termen de 5 zile de la data pronunţării şi poate fi atacată
    la instanţa de contencios administrativ competentă, potrivit legii.
</p>
<p align="center">
    <strong>Articolul 35^12</strong>
</p>
<p>
    Cadrele militare au dreptul să conteste aplicarea sancţiunilor prevăzute la
    art. 35 alin. 1 lit. e)-g) în termen de 30 de zile de la comunicarea
    deciziei de sancţionare, la instanţa de contencios administrativ
    competentă, potrivit legii.
</p>
<p align="center">
    <strong>Articolul 35^13</strong>
</p>
<p>
    Pentru abaterile disciplinare săvârşite pe timpul stării de urgenţă, de
    asediu, de mobilizare şi pe timp de război, procedura disciplinară nu se
    suspendă, cu excepţia situaţiilor în care, potrivit legii, au fost sesizate
    organele de urmărire penală.
</p>
<p align="center">
    <strong>Articolul 35^14</strong>
</p>
<p>
    Actul administrativ prin care se aplică sancţiunea pentru abaterile
    disciplinare săvârşite pe timpul stării de urgenţă, de asediu, de
    mobilizare şi pe timp de război produce efecte de la data comunicării
    acestuia şi poate fi contestat direct la instanţa de contencios
    administrativ, potrivit legii.
</p>
<p align="center">
    <strong>Articolul 36</strong>
</p>
<p>
    Ofiţerii în activitate provin din:
</p>
<p>
    a) absolvenţi cu diplomă de licenţă ai instituţiilor militare de învăţământ
    pentru formarea ofiţerilor, cu excepţia celor prevăzuţi la art. 37 lit. c);
</p>
<p>
    b) absolvenţi ai anului IV din instituţiile militare de învăţământ superior
    cu durata studiilor mai mare de 4 ani;
</p>
<p>
    c) absolvenţi ai instituţiilor militare de învăţământ din alte state,
    similare celor prevăzute la lit. a), trimişi la studii de către Ministerul
    Apărării Naţionale;
</p>
<p>
    c^1) absolvenţi cu diplomă de licenţă ai instituţiilor civile de învăţământ
    superior, şcolarizaţi pentru nevoi ale Ministerului Apărării Naţionale şi
    în condiţiile stabilite prin ordin al ministrului apărării naţionale;
</p>
<p>
    d) ofiţeri în rezervă şi ofiţeri rezervişti voluntari care au promovat
    testele de aptitudini şi îndeplinesc celelalte condiţii stabilite prin
    ordin al miniştrilor sau al şefilor instituţiilor componente ale sistemului
    apărării naţionale, ordinii publice şi securităţii naţionale, în vederea
    chemării sau rechemării în activitate;
</p>
<p>
    e) maiştri militari, subofiţeri, soldaţi şi gradaţi profesionişti, în
    activitate, absolvenţi cu diplomă de licenţă ai instituţiilor civile de
    învăţământ superior, cu profil corespunzător specialităţilor militare, care
    au vârsta de cel mult 45 de ani, au promovat testele de aptitudini şi
    îndeplinesc celelalte condiţii stabilite prin ordin al miniştrilor sau
    şefilor instituţiilor componente ale sistemului apărării naţionale, ordinii
    publice şi securităţii naţionale;
</p>
<p>
    f) maiştri militari şi subofiţeri care, în timp de război, îndeplinesc cel
    puţin 3 luni, cu rezultate foarte bune şi bune, funcţii prevăzute a fi
    încadrate cu ofiţeri în unităţile militare aflate în zona acţiunilor
    militare;
</p>
<p>
    g) persoane care au vârsta de cel mult 45 de ani, sunt absolvente cu
    diplomă de licenţă ale unei instituţii de învăţământ superior, cu profil
    corespunzător specialităţilor militare, au promovat testele de aptitudini
    şi îndeplinesc celelalte condiţii stabilite prin ordin al miniştrilor sau
    şefilor instituţiilor componente ale sistemului apărării naţionale, ordinii
    publice şi securităţii naţionale;
</p>
<p>
    h) maiştri militari, subofiţeri, soldaţi şi gradaţi profesionişti în
    activitate, absolvenţi cu diplomă de licenţă ai instituţiilor militare de
    învăţământ superior;
</p>
<p>
    i) urmaşi ai personalului Ministerului Apărării Naţionale decedat în timpul
    şi din cauza serviciului, ca urmare a unor acţiuni militare, accidente,
    catastrofe sau a unor acte de devotament excepţional ori a unor misiuni în
    cadrul forţelor internaţionale destinate menţinerii păcii ori constituite
    în scopuri umanitare, care au vârsta de cel mult 45 de ani, au absolvit cu
    diplomă de licenţă o instituţie de învăţământ superior, cu profil
    corespunzător specialităţilor militare, au promovat testele de aptitudini
    şi îndeplinesc celelalte condiţii stabilite prin ordin al ministrului
    apărării naţionale;
</p>
<p>
    j) maiştri militari, subofiţeri, soldaţi şi gradaţi profesionişti, în
    activitate, răniţi în timpul şi din cauza acţiunilor militare desfăşurate
    în afara teritoriului statului român, absolvenţi cu diplomă de licenţă ai
    unei instituţii de învăţământ superior, cu profil corespunzător
    specialităţilor militare, au promovat testele de aptitudini şi îndeplinesc
    celelalte condiţii stabilite prin ordin al ministrului apărării naţionale;
</p>
<p>
    k) maiştri militari, subofiţeri, soldaţi şi gradaţi profesionişti, în
    rezervă sau cu statut de rezervist voluntar, care au vârsta de cel mult 45
    de ani, care au absolvit cu diplomă de licenţă o instituţie de învăţământ
    superior, cu profil corespunzător specialităţilor militare, au promovat
    testele de aptitudini şi îndeplinesc celelalte condiţii stabilite prin
    ordin al ministrului apărării naţionale.
</p>
<p>
    În Ministerul Afacerilor Interne, Serviciul de Telecomunicaţii Speciale şi
    Serviciul Român de Informaţii, pentru persoanele prevăzute la alin. 1 lit.
    e), g) şi k) nu se aplică limita de vârstă de cel mult 45 de ani.
</p>
<p>
    În Ministerul Apărării Naţionale, persoanele prevăzute la alin. 1 lit. d)
    şi j) pot fi chemate sau rechemate în activitate dacă au vârsta de cel mult
    45 de ani.
</p>
<p align="center">
    <strong>Articolul 37</strong>
</p>
<p>
    Ofiţerii în rezervă provin din:
</p>
<p>
    a) ofiţeri trecuţi din activitate în rezervă;
</p>
<p>
    b) absolvenţi cu diplomă de licenţă ai instituţiilor civile de învăţământ
    superior care au îndeplinit serviciul militar cu termen redus, în raport cu
    nevoile forţelor armate şi cu rezultatele obţinute la examenul-concurs
    susţinut la terminarea pregătirii militare;
</p>
<p>
    c) absolvenţi ai instituţiilor militare de învăţământ pentru formarea
    ofiţerilor, şcolarizaţi la solicitarea aviaţiei şi marinei civile sau a
    altor beneficiari;
</p>
<p>
    d) maiştri militari şi subofiţeri în rezervă, care, în timp de război,
    îndeplinesc cel puţin 3 luni, cu rezultate foarte bune şi bune, funcţii
    prevăzute a fi încadrate cu ofiţeri în unităţile militare aflate în zona
    acţiunilor militare;
</p>
<p>
    e) absolvenţi cu diplomă de licenţă ai instituţiilor civile de învăţământ
    superior sau, la nevoie, ai liceelor, cu diplomă de bacalaureat ori ai
    şcolilor echivalente, cu diplomă, cu profil corespunzător specialităţilor
    militare deficitare în Ministerul Apărării Naţionale, care au vârsta de cel
    mult 45 de ani;
</p>
<p>
    f) studenţi ai instituţiilor militare de învăţământ pentru formarea
    ofiţerilor care au promovat penultimul an de studii, în situaţia în care nu
    mai pot continua pregătirea, dar sunt apţi pentru serviciul militar. Nu se
    acordă grad de ofiţer studenţilor exmatriculaţi.
</p>
<p align="center">
    <strong>Articolul 38</strong>
</p>
<p>
    Maiştrii militari în activitate provin din:
</p>
<p>
    a) absolvenţi cu diplomă ai instituţiilor de învăţământ pentru formarea
    maiştrilor militari, cu excepţia celor prevăzuţi la art. 39 lit. b);
</p>
<p>
    b) subofiţeri în activitate care au un stagiu neîntrerupt de cel puţin un
    an, în funcţii de exploatare, întreţinere şi reparare a tehnicii militare,
    au promovat examenul de trecere în corpul maiştrilor militari şi
    îndeplinesc celelalte condiţii stabilite prin dispoziţie a şefului Statului
    Major al Apărării;
</p>
<p>
    c) maiştri militari în rezervă şi maiştri militari rezervişti voluntari,
    care au promovat testele de aptitudini şi îndeplinesc celelalte condiţii
    stabilite prin ordin al ministrului apărării naţionale, în vederea chemării
    sau rechemării în activitate;
</p>
<p>
    d) soldaţi şi gradaţi profesionişti în activitate, absolvenţi ai
    instituţiilor sau unităţilor militare de învăţământ pentru formarea
    maiştrilor militari;
</p>
<p>
    e) soldaţi şi gradaţi profesionişti în activitate, absolvenţi ai studiilor
    postliceale corespunzătoare specialităţilor militare şi ai cursului de
    formare a maiştrilor militari în activitate, în condiţiile stabilite prin
    ordin al ministrului apărării naţionale;
</p>
<p>
    f) urmaşi ai personalului Ministerului Apărării Naţionale decedat în timpul
    şi din cauza serviciului, ca urmare a unor acţiuni militare, accidente,
    catastrofe sau a unor acte de devotament excepţional ori a unor misiuni în
    cadrul forţelor internaţionale destinate menţinerii păcii ori constituite
    în scopuri umanitare, care au vârsta de cel mult 45 de ani, absolvenţi ai
    studiilor postliceale corespunzătoare specialităţilor militare, care au
    promovat testele de aptitudini şi îndeplinesc celelalte condiţii stabilite
    prin ordin al ministrului apărării naţionale;
</p>
<p>
    g) subofiţeri, soldaţi şi gradaţi profesionişti, în activitate, răniţi în
    timpul şi din cauza acţiunilor militare desfăşurate în afara teritoriului
    statului român, absolvenţi ai studiilor postliceale corespunzătoare
    specialităţilor militare, care au promovat testele de aptitudini şi
    îndeplinesc celelalte condiţii stabilite prin ordin al ministrului apărării
    naţionale;
</p>
<p>
    h) soldaţi şi gradaţi profesionişti, în activitate, cu o vechime de cel
    puţin 15 ani în această calitate, absolvenţi ai studiilor postliceale
    corespunzătoare specialităţilor militare, care au promovat testele de
    aptitudini şi îndeplinesc celelalte condiţii stabilite prin ordin al
    ministrului apărării naţionale.
</p>
<p>
    În Ministerul Apărării Naţionale, persoanele prevăzute la alin. 1 lit. b),
    c), e), g) şi h) pot fi chemate sau rechemate în activitate dacă au vârsta
    de cel mult 45 de ani.
</p>
<p>
    În Serviciul Român de Informaţii şi Serviciul de Telecomunicaţii Speciale
    nu se aplică limita de vârstă prevăzută la alin. 1 lit. f).
</p>
<p align="center">
    <strong>Articolul 39</strong>
</p>
<p>
    Maiştri militari în rezervă provin din:
</p>
<p>
    a) maiştri militari trecuţi din activitate în rezervă;
</p>
<p>
    b) absolvenţi cu diplomă ai instituţiilor militare de învăţământ pentru
    formarea maiştrilor militari, şcolarizaţi la solicitarea aviaţiei şi
    marinei civile sau a altor beneficiari;
</p>
<p>
    c) persoane în vârstă de cel mult 45 de ani, care au o pregătire tehnica de
    nivel liceal sau postliceal în specialităţi militare deficitare;
</p>
<p>
    d) subofiţeri în rezervă care au absolvit şcoli de maiştri în specialităţi
    necesare forţelor armate.
</p>
<p align="center">
    <strong>Articolul 40</strong>
</p>
<p>
    Subofiţerii în activitate provin din:
</p>
<p>
    a) absolvenţi cu diplomă ai instituţiilor militare de învăţământ pentru
    formarea subofiţerilor;
</p>
<p>
    b) soldaţi şi gradaţi profesionişti în activitate care au promovat testele
    de aptitudini şi concursul sau examenul susţinut în acest scop şi
    îndeplinesc condiţiile stabilite prin ordin al ministrului apărării
    naţionale;
</p>
<p>
    c) subofiţeri în rezervă şi subofiţeri rezervişti voluntari care au
    promovat testele de aptitudini şi îndeplinesc celelalte condiţii stabilite
    prin ordin al ministrului apărării naţionale, în vederea chemării sau
    rechemării în activitate;
</p>
<p>
    d) gradaţi care, în timp de război, îndeplinesc cu rezultate bune, cel
    puţin 3 luni, funcţii prevăzute a fi încadrate cu subofiţeri în unităţile
    militare aflate în zona acţiunilor militare;
</p>
<p>
    e) soldaţi şi gradaţi profesionişti în activitate, în rezervă sau cu statut
    de rezervist voluntar, absolvenţi ai studiilor postliceale sau superioare
    corespunzătoare specialităţilor militare, care au absolvit cursul de
    formare a subofiţerilor, în condiţiile stabilite prin ordin al ministrului
    apărării naţionale;
</p>
<p>
    f) soldaţi şi gradaţi profesionişti în activitate, absolvenţi ai
    programelor de studii postliceale pentru formarea subofiţerilor în
    activitate;
</p>
<p>
    g) persoane care au vârsta de cel mult 45 de ani, au promovat testele de
    aptitudini şi îndeplinesc celelalte condiţii stabilite prin ordin al
    miniştrilor sau şefilor instituţiilor componente ale sistemului apărării
    naţionale, ordinii publice şi securităţii naţionale şi care au pregătire de
    nivel liceal, postliceal sau superior.
</p>
<p>
    În Ministerul Apărării Naţionale, persoanele prevăzute la alin. 1 lit. b),
    c) şi e) pot fi chemate sau rechemate în activitate dacă au vârsta de cel
    mult 45 de ani.
</p>
<p>
    În Ministerul Afacerilor Interne, Serviciul Român de Informaţii şi
    Serviciul de Telecomunicaţii Speciale nu se aplică limita de vârstă
    prevăzută la alin. 1 lit. g).
</p>
<p align="center">
    <strong>Articolul 41</strong>
</p>
<p>
    Subofiţerii în rezervă provin din:
</p>
<p>
    a) absolvenţi ai instituţiilor militare de învăţământ pentru formarea
    subofiţerilor în rezervă;
</p>
<p>
    b) subofiţeri trecuţi din activitate în rezervă;
</p>
<p>
    c) absolvenţi ai instituţiilor civile de învăţământ superior care au
    îndeplinit serviciul militar cu termen redus, în raport cu nevoile forţelor
    armate şi cu rezultatele obţinute la examenul-concurs susţinut la
    terminarea pregătirii militare;
</p>
<p>
    d) studenţi ai instituţiilor militare de învăţământ pentru formarea
    ofiţerilor care au promovat cel puţin anul I de studii, în situaţia în care
    nu mai pot continua pregătirea, dar sunt apţi pentru serviciul militar. Nu
    se acordă gradul de subofiţer studenţilor exmatriculaţi;
</p>
<p>
    e) gradaţi în rezervă care, în urma unei concentrări de instrucţie, au fost
    calificaţi în specialităţi militare necesare forţelor armate, pentru
    funcţii de subofiţeri;
</p>
<p>
    f) sergenţi în rezervă care, în ultimele 6 luni ale serviciului militar în
    termen, au îndeplinit cu rezultate bune şi foarte bune funcţii prevăzute a
    fi încadrate cu ofiţeri sau subofiţeri;
</p>
<p>
    g) gradaţi care, în timp de război, îndeplinesc cel puţin 3 luni, cu
    rezultate bune şi foarte bune, funcţii prevăzute a fi încadrate cu ofiţeri
    sau subofiţeri, în unităţile militare aflate în zona acţiunilor militare;
</p>
<p>
    h) absolvenţi ai liceelor, şcolilor profesionale ori ai unei şcoli
    echivalente, în raport cu nevoile forţelor armate şi care au absolvit o
    formă de pregătire militară organizată de Ministerul Apărării Naţionale.
</p>
<p align="center">
    <strong>Articolul 41^1</strong>
</p>
<p>
    Persoanele care urmează să devină cadre militare în condiţiile art. 36
    alin. 1 lit. a)-c^1) şi h), ale art. 38 lit. a) şi d) şi ale art. 40 alin.
    1 lit. a), la admiterea într-o instituţie militară de învăţământ pentru
    formarea ofiţerilor, maiştrilor militari sau subofiţerilor în activitate,
    încheie cu Ministerul Apărării Naţionale contracte cu durata de 8 ani de la
    numirea lor în prima funcţie, potrivit normelor stabilite prin ordin al
    ministrului apărării naţionale.În condiţiile prevăzute la art. 36 alin. 1
    lit. d)-g) şi i), la art. 38 lit. b)-c) şi e) şi la art. 40 alin. 1 lit.
    b)-g), persoanele în cauză încheie cu Ministerul Apărării Naţionale
    contracte cu durata de 4 ani, potrivit normelor stabilite prin ordin al
    ministrului apărării naţionale. Durata contractelor încheiate în condiţiile
    alin. 1, 2 şi 14 se prelungeşte de drept, prin acte adiţionale, cu o durată
    cuprinsă între 4 şi 8 ani, stabilită prin ordin al ministrului apărării
    naţionale, în situaţia în care cadrele militare în activitate sunt trimise
    cu acordul lor şi admise la studii universitare de licenţă, master,
    doctorat sau la studii postliceale, finanţate de la bugetul de stat şi
    organizate în instituţii de învăţământ din ţară şi străinătate, la forma de
    învăţământ cu frecvenţă.
</p>
<p>
    După expirare, contractele pot fi reînnoite, în funcţie de opţiunea
    părţilor, pe perioade succesive cu durata de până la 4 ani, potrivit
    normelor aprobate prin ordin al ministrului apărării naţionale.
</p>
<p>
    Contractele încheiate în condiţiile alin. 4 încetează de drept în
    situaţiile prevăzute la alin. 3, la data înmatriculării în instituţia de
    învăţământ.Începând cu data prevăzută la alin. 5, cadrele militare în cauză
    încheie noi contracte cu o durată cuprinsă între 4 şi 8 ani, care se
    stabileşte prin ordin al ministrului apărării naţionale.Dispoziţiile alin.
    3, alin. 5 şi 6 se aplică în mod corespunzător în situaţia prevăzută la
    art. 36 alin. 1 lit. h).
</p>
<p>
    Cadrele militare care au o vechime ca ofiţer, maistru militar sau subofiţer
    în activitate de cel puţin 15 ani pot încheia cu Ministerul Apărării
    Naţionale contracte până la împlinirea limitei de vârstă în grad.
</p>
<p>
    Cu 6 luni înainte de expirarea contractului, părţile sunt obligate să se
    încunoştinţeze reciproc asupra intenţiei de reînnoire a acestuia.
</p>
<p>
    În situaţia în care înainte de expirarea duratei stabilite, cadrele
    militare reziliază contractul potrivit art. 85 alin. 1 lit. h), acestea
    sunt obligate să anunţe Ministerul Apărării Naţionale cu cel puţin 30 de
    zile înainte, iar în cazul în care se află pe perioada contractului
    prevăzut la alin. 1, 2 şi 14 sau, după caz, alin. 3, alin. 6 şi 7, cadrele
    militare sunt obligate şi să restituie cheltuielile de întreţinere şi de
    instruire pe timpul şcolarizării, proporţional cu perioada de contract
    rămasă neexecutată. Aceeaşi obligaţie de restituire a cheltuielilor de
    întreţinere şi de instruire pe timpul şcolarizării revine cadrelor
    militare, dacă sunt trecute în rezervă de către Ministerul Apărării
    Naţionale, potrivit art. 85 alin. 1 lit. i)-n), art. 87 şi 88, înainte de
    expirarea contractelor prevăzute la alin. 1, 2 şi 14 sau, după caz, alin.
    3, alin. 6 şi 7, proporţional cu perioada de contract rămasă neexecutată.În
    situaţia în care Ministerul Apărării Naţionale trece în rezervă cadrele
    militare înainte de expirarea contractelor, potrivit art. 85 alin. 1 lit.
    e), sau la expirarea contractelor, potrivit art. 85 alin. 1 lit. e^1), din
    iniţiativa Ministerului Apărării Naţionale, acestea beneficiază de măsuri
    de protecţie socială conform prevederilor legale. Contractele pot fi
    reziliate prin acordul ambelor părţi în situaţia în care trecerea în
    rezervă a cadrelor militare se face potrivit art. 85 alin. 1 lit. f) şi g).
    În aceste cazuri părţile nu au obligaţii una faţă de cealaltă. Prin
    excepţie de la prevederile alin. 1, personalul navigant de aviaţie încheie
    cu Ministerul Apărării Naţionale contracte cu durata de 12 ani de la
    numirea lor în prima funcţie. Durata contractelor prevăzute la alin. 1
    pentru ofiţerii medici, medici dentişti şi farmacişti se prelungeşte cu un
    număr de ani egal cu durata corespunzătoare pregătirii în rezidenţiat.
    Normele de restituire a cheltuielilor de întreţinere şi de instruire pe
    timpul şcolarizării prevăzute la alin. 10 şi 11 se aprobă prin ordin al
    ministrului apărării naţionale.
</p>
<p align="center">
    <strong>Articolul 41^2</strong>
</p>
<p>
    Persoanele care urmează să devină cadre militare în Serviciul de
    Telecomunicaţii Speciale în condiţiile art. 36 alin. 1 lit. a)-c^1) şi h),
    ale art. 38 alin. 1 lit. a) şi d) şi ale art. 40 alin. 1 lit. a), la
    admiterea într-o instituţie de învăţământ, încheie cu Serviciul de
    Telecomunicaţii Speciale contracte cu durata de 10 ani, în cazul
    ofiţerilor, şi, respectiv, 8 ani în cazul maiştrilor militari şi
    subofiţerilor, de la prima numire în funcţie.
</p>
<p align="center">
    <strong>Articolul 42</strong>
</p>
<p>
    Cadrele militare în retragere provin din:
</p>
<p>
    a) ofiţeri în activitate sau în rezervă, precum şi maiştri militari şi
    subofiţeri în rezervă, care au depăşit limita de vârstă în grad pentru
    clasa a III-a în rezervă prevăzută la art. 86 alin. 4;
</p>
<p>
    b) ofiţeri, maiştri militari şi subofiţeri în activitate sau în rezervă,
    clasaţi de către comisiile de expertiza medico-militară "inapt pentru
    serviciul militar, cu scoatere din evidenţă".
</p>
<p align="center">
    <strong>Articolul 43</strong>
</p>
<p>
    Trecerea cadrelor militare din activitate în rezervă sau direct în
    retragere, precum şi chemarea din rezervă în activitate se fac după cum
    urmează:
</p>
<p>
    a) generalii şi amiralii, prin decret al Preşedintelui României, la
    propunerea ministrului apărării naţionale;
</p>
<p>
    b) ceilalţi ofiţeri, prin ordin al ministrului apărării naţionale;
</p>
<p>
    c) maiştrii militari şi subofiţerii, prin ordin al comandanţilor stabiliţi
    de ministrul apărării naţionale.
</p>
<p>
    În Ministerul Afacerilor Interne, trecerea cadrelor militare în rezervă sau
    direct în retragere, precum şi chemarea din rezervă în activitate a
    cadrelor militare prevăzute la alin. 1 lit. b) şi c) se face în mod
    corespunzător de către persoanele care, potrivit art. 45 alin. 2, au
    competenţa de acordare a gradelor militare.
</p>
<p>
    Nu pot fi chemate în activitate cadrele militare cărora li s-au acordat
    grade în rezervă în baza art. 37 lit. e) şi nu au absolvit o instituţie
    civilă de învăţământ superior, precum şi în baza art. 39 lit.
    c).Subofiţerii cărora li s-a acordat grad în rezervă în baza art. 41 lit.
    e), f) şi h) pot fi chemaţi în activitate, în condiţiile stabilite prin
    ordin al ministrului apărării naţionale, dacă nu au împlinit vârsta de 45
    de ani.
</p>
<p align="center">
    <strong>Articolul 44</strong>
</p>
<p>
    Scoaterea din evidenţa militară a ofiţerilor, maiştrilor militari şi
    subofiţerilor în rezervă şi trecerea lor în retragere se fac după cum
    urmează:
</p>
<p>
    a) generalii şi amiralii, prin ordin al şefului Statului Major General;
</p>
<p>
    b) ceilalţi ofiţeri, prin ordin al comandanţilor stabiliţi de şeful
    Statului Major General;
</p>
<p>
    c) maiştrii militari şi subofiţerii, prin ordin al comandanţilor centrelor
    militare judeţene, municipale sau de sector.
</p>
<p align="center">
    <strong>
        Acordarea gradelor şi înaintarea cadrelor militare în gradele următoare
    </strong>
</p>
<p align="center">
    <strong>Articolul 45</strong>
</p>
<p>
    Acordarea gradelor şi înaintarea în gradele următoare se fac după cum
    urmează:
</p>
<p>
    a) gradele de general şi amiral în activitate şi în rezervă, în timp de
    pace şi în timp de război, prin decret al Preşedintelui României, la
    propunerea ministrului apărării naţionale, după consultarea colegiului
    ministerului;
</p>
<p>
    b) gradele de ofiţeri în activitate, cu excepţia celor prevăzute la lit.
    a), în timp de pace, prin ordin al ministrului apărării naţionale;
</p>
<p>
    c) gradele de ofiţeri în rezervă, cu excepţia celor prevăzute la lit. a),
    în timp de pace, prin ordin al şefului Statului Major General;
</p>
<p>
    d) în timp de război, acordarea gradului de sublocotenent şi înaintarea în
    gradele de locotenent şi căpitan în activitate sau în rezervă se fac de
    către comandanţii stabiliţi de şeful Marelui Cartier General, iar în cele
    de ofiţeri cu grade superioare, de şeful Marelui Cartier General;
</p>
<p>
    e) gradele de maiştri militari şi subofiţeri în activitate, în timp de pace
    şi în timp de război, prin ordin al ministrului apărării naţionale sau al
    comandanţilor stabiliţi de acesta;
</p>
<p>
    f) gradele de maiştri militari şi subofiţeri în rezervă, în timp de pace şi
    în timp de război, prin ordin al comandanţilor stabiliţi de ministrul
    apărării naţionale.
</p>
<p>
    În Ministerul Afacerilor Interne, acordarea gradelor prevăzute la alin. 1
    lit. b)-f) şi înaintarea în gradele următoare se face de către:
</p>
<p>
    a) ministrul afacerilor interne, pentru conducătorii unităţilor
    Ministerului Afacerilor Interne pe care le coordonează direct şi adjuncţii
    acestora, pentru cadrele militare din unităţile aparatului central şi
    unităţile subordonate Ministerului Afacerilor Interne ai căror conducători
    nu au calitatea de ordonatori de credite, la propunerea şefului unităţii,
    precum şi pentru conducătorii unităţilor subordonate Ministerului
    Afacerilor Interne şi adjuncţii/locţiitorii acestora, la propunerea
    secretarului de stat/secretarului general care coordonează activitatea
    structurii în care sunt încadrate cadrele militare;
</p>
<p>
    b) inspectorii generali/similari pentru cadrele militare din inspectoratul
    general/similar şi unităţile din subordinea inspectoratului general/similar
    ai căror conducători nu au calitatea de ordonatori de credite, precum şi
    pentru conducătorii unităţilor subordonate inspectoratului general/similar
    şi adjuncţii/locţiitorii acestora;
</p>
<p>
    c) şefii unităţilor Ministerului Afacerilor Interne care au calitatea de
    ordonatori de credite, pentru cadrele militare din subordine, altele decât
    cele prevăzute la lit. a) şi b).
</p>
<p align="center">
    <strong>Articolul 46</strong>
</p>
<p>
    Acordarea gradelor de ofiţeri, maiştri militari şi subofiţeri în
    activitate, precum şi înaintarea în gradele următoare a acestora se fac, de
    regulă, o dată pe an, la data stabilită prin ordin al ministrului apărării
    naţionale.
</p>
<p>
    Acordarea gradelor celor prevăzuţi la art. 36 alin. 1 lit. c)-g) şi i)-k),
    art. 38 alin. 1 lit. b), c) şi e)-h) şi art. 40 alin. 1 lit. b)-e) şi g) se
    poate face în tot cursul anului.
</p>
<p>
    Înaintarea ofiţerilor, maiştrilor militari şi subofiţerilor în activitate
    în gradele următoare, în condiţiile prevăzute la art. 63, se face la datele
    stabilite prin ordin al ministrului apărării naţionale, iar în cele
    prevăzute la art. 64, precum şi la chemarea sau rechemarea în activitate a
    cadrelor militare în rezervă se poate face în tot cursul anului.
</p>
<p align="center">
    <strong>Articolul 47</strong>
</p>
<p>
    Gradele de ofiţeri, maiştri militari şi subofiţeri în rezervă se acordă
    după cum urmează:
</p>
<p>
    a) o data pe an - celor prevăzuţi la art. 37 lit. c) şi e), art. 39 lit.
    b), c) şi d) şi art. 41 lit. e) şi f);
</p>
<p>
    b) la data terminării pregătirii militare sau a trecerii în rezervă - celor
    prevăzuţi la art. 37 lit. b) şi f) şi art. 41 lit. a), c) şi d);
</p>
<p>
    c) în tot cursul anului - celor prevăzuţi la art. 37 lit. d) şi art. 41
    lit. g) şi h).
</p>
<p>
    Înaintarea în gradele următoare a ofiţerilor, maiştrilor militari şi
    subofiţerilor în rezervă se face, de regulă, o dată pe an, la data
    stabilită prin ordin al ministrului apărării naţionale, iar în condiţiile
    prevăzute la art. 64, în tot cursul anului.
</p>
<p align="center">
    <strong>Articolul 48</strong>
</p>
<p>
    Gradele de sublocotenent şi aspirant se acordă celor prevăzuţi la art. 36
    alin. 1 lit. a)-c) şi f) şi art. 37 lit. b)-d) şi f).În Ministerul Apărării
    Naţionale, celor prevăzuţi la art. 36 alin. 1 lit. c^1) şi h) şi la art. 37
    lit. e) li se acordă gradele de sublocotenent sau aspirant, după caz.În
    Ministerul Apărării Naţionale, gradele se acordă celor prevăzuţi la art. 36
    alin. 1 lit. e), g) şi i)-k) în raport cu nivelul structurii şi specificul
    funcţiei vacante, precum şi vechimea în specialitatea studiilor necesare
    ocupării acesteia, potrivit normelor stabilite prin ordin al ministrului
    apărării naţionale.
</p>
<p align="center">
    <strong>Articolul 49</strong>
</p>
<p>
    Abrogat.
</p>
<p align="center">
    <strong>Articolul 50</strong>
</p>
<p>
    Gradul de maistru militar clasa a IV-a se acordă celor prevăzuţi la art. 38
    lit. a) şi art. 39 lit. b).La trecerea în corpul maiştrilor militari, celor
    prevăzuţi la art. 38 lit. b) şi art. 39 lit. d) li se acordă gradele de
    maistru militar, în raport cu gradele de subofiţer pe care le au, astfel:
</p>
<p>
    a) gradul de maistru militar clasa a III-a, plutonierilor;
</p>
<p>
    b) gradul de maistru militar clasa a II-a, plutonierilor majori;
</p>
<p>
    c) gradul de maistru militar clasa I, plutonierilor adjutanţi;
</p>
<p>
    d) gradul de maistru militar principal, plutonierilor adjutanţi şefi.
</p>
<p>
    Pentru a li se acordă gradele de maistru militar clasa I, respectiv maistru
    militar principal, subofiţerii prevăzuţi la alin. 2 lit. c) şi d) trebuie
    să promoveze şi examenul pentru maistru militar clasa I. Celor care nu
    promovează acest examen li se poate acorda gradul de maistru militar clasa
    a II-a sau pot rămâne cu gradul de subofiţer avut.Maiştrilor militari
    proveniţi din corpul subofiţerilor şi cărora li s-au acordat grade în
    condiţiile prevăzute la alin. 2, la înaintarea în gradul următor, li se ia
    în considerare stagiul avut în ultimul grad de subofiţer.În Ministerul
    Apărării Naţionale, celor prevăzuţi la art. 38 lit. a) şi d)-h) şi la art.
    39 lit. b) şi c) li se acordă gradul de maistru militar clasa a V-a.
</p>
<p align="center">
    <strong>Articolul 51</strong>
</p>
<p>
    Gradul de sergent major se acordă celor prevăzuţi la art. 40 alin. 1 lit.
    a), b) şi d) şi art. 41 lit. a), c), d) şi f).În Ministerul Apărării
    Naţionale, celor prevăzuţi la art. 40 alin. 1 lit. a), b) şi d)-g) şi la
    art. 41 lit. a) şi c)-h) li se acordă gradul de sergent.
</p>
<p>
    În Ministerul Administraţiei şi Internelor, persoanelor care devin cadre
    militare în condiţiile art. 40 lit. b) li se acordă grade militare în
    funcţie de pregătire, de vechimea în specialitate, de stagiile minime în
    grad şi de vârsta acestora.
</p>
<p align="center">
    <strong>Articolul 52</strong>
</p>
<p>
    Persoanelor prevăzute la art. 36 alin. 1 lit. e), g) şi h), art. 36 alin.
    2, art. 37 lit. e), art. 39 lit. c), art. 40 alin. 1 lit. g) şi la art. 41
    lit. e), g) şi h) li se acordă grade militare în funcţie de pregătirea lor,
    vechimea în specialitatea dobândită pe timpul studiilor, raportată la
    stagiile minime în grad, precum şi de vârsta acestora.
</p>
<p>
    În Ministerul Afacerilor Interne, persoanelor prevăzute la art. 36 alin. 1
    lit. g) li se acordă gradul de sublocotenent.
</p>
<p>
    Prin excepţie de la prevederile alin. 2, gradele se pot acorda în funcţie
    de vechimea în specialitate corespunzătoare studiilor absolvite, raportat
    la atribuţiile din fişa postului.
</p>
<p>
    În Ministerul Afacerilor Interne, persoanelor prevăzute la art. 36 alin. 1
    lit. e) şi h) li se acordă gradul în funcţie de vechimea în structurile
    Ministerului Afacerilor Interne, astfel:
</p>
<p>
    a) sub 5 ani - sublocotenent;
</p>
<p>
    b) între 5 şi 10 ani - locotenent;
</p>
<p>
    c) peste 10 ani -căpitan.
</p>
<p align="center">
    <strong>Articolul 53</strong>
</p>
<p>
    Înaintarea în grad a cadrelor militare se poate face la termen, înainte de
    termen sau în mod excepţional, iar a celor în rezervă, la termen sau în mod
    excepţional.
</p>
<p>
    Înaintarea în grad a ofiţerilor, maiştrilor militari şi subofiţerilor în
    activitate şi în rezervă se face în ordinea ierarhică a gradelor, în raport
    cu nevoile şi posibilităţile forţelor armate, pe baza competentei
    profesionale şi conduitei morale, consemnate în aprecierile de serviciu.
</p>
<p>
    La înaintarea în grad a ofiţerilor, se va acorda prioritate celor care prin
    profesionalism şi rezultate deosebite obţinute în muncă, prin cultură,
    personalitate, spirit de organizare şi iniţiativă au perspective de a
    îndeplini funcţii superioare şi au stagiu în grad mai mare.
</p>
<p>
    Pe parcursul întregii cariere militare, cadrele militare în activitate pot
    beneficia de cel mult două înaintări în grad înainte de termen şi/sau în
    mod excepţional, cu excepţia celor care execută misiuni speciale sau în
    afara teritoriului naţional.
</p>
<p>
    Pentru merite deosebite în atingerea unor obiective deosebite în
    activitate, cadrul militar din Ministerul Afacerilor Interne poate fi
    avansat în gradul militar imediat următor, înaintea îndeplinirii stagiului
    minim, în condiţiile stabilite prin ordin al ministrului afacerilor
    interne.
</p>
<p align="center">
    <strong>Articolul 54</strong>
</p>
<p>
    În timp de pace, ofiţerii, maiştrii militari şi subofiţerii în activitate
    vor fi înaintaţi în grad, la termen, cu respectarea prevederilor art. 53,
    dacă îndeplinesc şi următoarele condiţii:
</p>
<p>
    a) au împlinit stagiul minim în grad prevăzut la art. 94 şi 95 sau
    împlinesc acest stagiu în cursul anului calendaristic respectiv;
</p>
<p>
    b) au fost apreciaţi pe întreaga perioadă a stagiului minim în grad, iar
    cei care au depăşit acest stagiu, şi în anul premergător înaintării în
    grad, cel puţin cu calificativul "corespunzător"; anii în care li s-au
    acordat calificative inferioare acestuia nu se socotesc la calculul
    stagiului minim în grad.
</p>
<p>
    Cadrele militare aflate în situaţiile prevăzute la art. 14^1 alin. 1 şi la
    art. 15 alin. 2 sunt exceptate de la condiţia prevăzută la alin. 1 lit. b)
    privind întocmirea aprecierii de serviciu.
</p>
<p align="center">
    <strong>Articolul 55</strong>
</p>
<p>
    Pentru a fi propuşi la înaintarea în grad, la termen, ofiţerii în
    activitate trebuie să fie încadraţi cu cel puţin un an înainte de data la
    care se fac înaintările în grad în funcţii prevăzute în statele de
    organizare cu grad superior celui pe care îl au.
</p>
<p>
    Ofiţerii studenţi la cursurile de zi ale instituţiilor de învăţământ
    superior se considera încadraţi în funcţii prevăzute în statele de
    organizare cu grade superioare celor pe care le au.
</p>
<p>
    Pentru a fi propuşi la înaintarea în grad, la termen, ofiţerii în
    activitate din Ministerul Afacerilor Interne, Serviciul de Telecomunicaţii
    Speciale şi Serviciul Român de Informaţii trebuie să fie
    încadraţi/împuterniciţi cu cel puţin un an înainte de data la care se fac
    înaintările în grad în funcţii prevăzute în statele de organizare cu grad
    superior celui pe care îl au.
</p>
<p align="center">
    <strong>Articolul 56</strong>
</p>
<p>
    În timp de pace, pentru înaintarea ofiţerilor, maiştrilor militari şi
    subofiţerilor în activitate în unele grade superioare, pe lângă condiţiile
    prevăzute la art. 54 şi 55, se mai cer următoarele:
</p>
<p>
    A.În gradele de maistru militar clasa I şi plutonier adjutant - să fi
    promovat examenul de grad;
</p>
<p>
    B.În gradele de maior şi locotenent-comandor:
</p>
<p>
    a) să fi absolvit un curs de perfecţionare în specialitate, stabilit prin
    ordin al ministrului apărării naţionale. Se exceptează de la această
    condiţie:
</p>
<p>
    – absolvenţii cu diplomă de licenţă ai Academiei de Înalte Studii Militare
    ori ai altor instituţii militare de învăţământ superior de acelaşi nivel,
    stabilite prin ordin al ministrului apărării naţionale, ai instituţiilor
    militare de învăţământ echivalente acestora din alte state, precum şi ai
    instituţiilor civile de învăţământ superior;
</p>
<p>
    – ofiţerii studenţi care au promovat cel puţin anul I de studii la Academia
    de Înalte Studii Militare sau anii I-III de studii la alte instituţii
    militare de învăţământ superior, conform celor stabilite prin ordin al
    ministrului apărării naţionale, precum şi ofiţerii studenţi care au
    promovat aceiaşi ani de studii la instituţii militare de învăţământ
    similare din alte state;
</p>
<p>
    b) să aibă un stagiu, indiferent de arme şi specialităţi militare, de cel
    puţin 3-5 ani în funcţii la unităţi, până la eşalonul regiment (similar),
    inclusiv sau la instituţii şi formaţiuni militare ori la unităţi
    productive. Durata stagiului pentru fiecare armă şi specialitate militară
    şi eşaloanele similare regimentului se stabilesc prin dispoziţie a şefului
    Statului Major General.
</p>
<p>
    Se exceptează de la obligativitatea stagiului la unităţi militare căpitănii
    care îndeplinesc funcţii în alte specialităţi militare decât cele de
    comanda şi stat major, stabilite prin dispoziţia şefului Statului Major
    General.
</p>
<p>
    C. În gradele de colonel şi comandor, să îndeplinească cumulativ condiţiile
    de studii, precum şi pe cea privind stagiul minim la unităţi, prevăzute la
    lit. a), b) şi respectiv c):
</p>
<p>
    a) să fi absolvit, cu diplomă de licenţă, Academia de Înalte Studii
    Militare ori alte instituţii militare de învăţământ superior de acelaşi
    nivel din ţara sau din străinătate, stabilite prin ordin al ministrului
    apărării naţionale, sau o instituţie civilă de învăţământ superior;
</p>
<p>
    b) să fi absolvit cursuri de capacitate pentru gradul de colonel sau
    comandor. Admiterea la acest curs se face pe bază de examen. Se exceptează
    de la această condiţie locotenent-coloneii şi căpitan-comandorii care deţin
    titlul de doctor ori au absolvit o formă de învăţământ postacademic,
    postuniversitar sau un masterat în ţară sau în străinătate, stabilite prin
    ordin al ministrului apărării naţionale;
</p>
<p>
    c) să aibă un stagiu, corespunzător pe arme şi specialităţi militare, de
    6-8 ani la unităţi şi mari unităţi până la corp de armată sau similare
    inclusiv. Durata stagiului pentru fiecare armă şi specialitate militară şi
    eşaloanele similare marilor unităţi până la eşalonul corp de armată se
    stabilesc prin dispoziţie a şefului Statului Major General.
</p>
<p>
    Se exceptează de la obligativitatea stagiului la unităţi militare
    locotenent-coloneii şi căpitan-comandorii care îndeplinesc funcţii în alte
    specialităţi militare decât cele de comanda şi stat major, stabilite prin
    dispoziţie a şefului Statului Major General.
</p>
<p align="center">
    <strong>Articolul 57</strong>
</p>
<p>
    Profilurile corespunzătoare studiilor universitare de licenţă din
    instituţiile civile de învăţământ superior care dau dreptul ofiţerilor
    absolvenţi ai acestor instituţii să fie înaintaţi în gradele prevăzute la
    art. 56 alin. 1 paragrafele B şi C se stabilesc în raport cu specialităţile
    militare ale ofiţerilor sau cu funcţiile pe care le îndeplinesc, prin ordin
    al ministrului apărării naţionale.
</p>
<p align="center">
    <strong>Articolul 58</strong>
</p>
<p>
    În timp de pace, pentru acordarea gradelor de general de brigadă, general
    de flotilă aeriană şi contraamiral, pe lângă condiţiile prevăzute la art.
    55 alin. 1, coloneii şi comandorii trebuie să promoveze examenul prevăzut
    în acest scop.Pot participa la examenul pentru acordarea gradului de
    general coloneii şi comandorii care îndeplinesc următoarele condiţii:
</p>
<p>
    a) au fost apreciaţi în ultimii 2 ani cu calificativul de cel puţin ”foarte
    bun”;
</p>
<p>
    b) au o vechime în grad de cel puţin 2 ani;
</p>
<p>
    c) sunt încadraţi în funcţii prevăzute în statele de organizare cu grade de
    general de brigadă, similare sau superioare.
</p>
<p>
    Pentru a fi înaintaţi în gradul următor, generalii şi amiralii trebuie să
    se distingă printr-o înaltă competenţă profesională, rezultate remarcabile
    în îndeplinirea atribuţiilor şi să fie încadraţi cu cel puţin un an înainte
    de data la care se fac înaintările în grad, în funcţii prevăzute în statele
    de organizare cu grad superior celui pe care îl au.
</p>
<p>
    Candidaţii la examenul pentru acordarea gradului de general, precum şi
    generalii care se propun pentru înaintarea în gradul următor se supun
    aprobării Consiliului Suprem de Apărare a Ţării de către ministrul apărării
    naţionale, cu consultarea prealabilă a colegiului ministerului.
</p>
<p align="center">
    <strong>Articolul 59</strong>
</p>
<p>
    Locotenent-coloneii şi căpitan-comandorii pot fi detaşaţi la cursul de
    capacitate pentru gradul de colonel sau comandor începând din primul an al
    stagiului minim în grad, de regulă, în ordinea promoţiilor, avînd
    prioritate cei cărora le expira stagiul în grad. În caz de nepromovare,
    examenul de absolvire a cursului se poate susţine încă o data, după cel
    puţin un an.
</p>
<p>
    Maiştrii militari clasa a II-a şi plutonierii majori pot susţine examenul
    de grad începând cu ultimii doi ani de stagiu minim în grad şi, în caz de
    nepromovare, îl pot susţine încă o data, după cel puţin un an. Sunt scutiţi
    de examen plutonierii majori care l-au promovat până la intrarea în vigoare
    a prezentei legi.
</p>
<p>
    Normele privind participarea coloneilor şi comandorilor la examenul pentru
    gradul de general, locotenent-coloneilor şi căpitan-comandorilor la cursul
    de capacitate, precum şi a maiştrilor militari clasa a II-a şi a
    plutonierilor majori la examenul de grad, organizarea şi desfăşurarea
    acestora se stabilesc prin ordin al ministrului apărării naţionale.
</p>
<p align="center">
    <strong>Articolul 60</strong>
</p>
<p>
    În timp de război, ofiţerii, maiştrii militari şi subofiţerii în
    activitate, precum şi cei în rezervă mobilizaţi în unităţi militare, pot fi
    înaintaţi în gradul următor dacă au împlinit stagiul minim în grad, au
    îndeplinit atribuţiile şi au executat misiunile ce li s-au încredinţat,
    fără a se impune respectarea celorlalte condiţii prevăzute pentru timp de
    pace.
</p>
<p>
    Ofiţerii, maiştrii militari şi subofiţerii prevăzuţi la alin. 1, care se
    disting în îndeplinirea misiunilor, pot fi înaintaţi în gradul următor şi
    înaintea împlinirii stagiului minim în grad.Înaintarea în grad a ofiţerilor
    în condiţiile alin. 1 şi 2 se face în limita necesarului prevăzut în
    statele de organizare.
</p>
<p align="center">
    <strong>Articolul 61</strong>
</p>
<p>
    În timp de pace, ofiţerii, maiştrii militari şi subofiţerii în rezervă pot
    fi înaintaţi în gradul următor, în raport cu nevoile forţelor armate, după
    expirarea stagiului minim în grad, dacă au o comportare demnă, au obţinut
    rezultate bune şi foarte bune pe timpul concentrării şi au fost propuşi
    prin aprecierile de serviciu.
</p>
<p align="center">
    <strong>Articolul 62</strong>
</p>
<p>
    În timp de pace, pentru înaintarea în gradele de colonel şi comandor, în
    afară condiţiilor prevăzute la art. 61, ofiţerii în rezervă trebuie să fi
    absolvit, cu diplomă de licenţă, o instituţie militară de învăţământ
    superior. Se exceptează de la prevederile alin. 1 absolvenţii instituţiilor
    civile de învăţământ superior care, la mobilizare, sunt încadraţi pe
    funcţii prevăzute cu studii corespunzătoare specialităţii în care sunt
    pregătiţi.
</p>
<p align="center">
    <strong>Articolul 63</strong>
</p>
<p>
    Ofiţerii, maiştrii militari şi subofiţerii în activitate care se disting
    prin modul de îndeplinire a atribuţiilor, pregătire profesională şi
    comportare demnă pot fi înaintaţi în gradul următor şi înaintea expirării
    stagiului minim în grad, dacă până la data când se fac astfel de înaintări
    au împlinit cel puţin jumătate de stagiul respectiv, cu respectarea strictă
    a celorlalte condiţii, mai puţin a celor prevăzute la art. 56 alin. 1
    paragrafele A, B şi C lit. c). Nu fac obiectul înaintării în grad, în
    condiţiile alin. 1:
</p>
<p>
    a) sublocotenenţii şi aspiranţii;
</p>
<p>
    b) ofiţerii, maiştrii militari şi subofiţerii care au fost condamnaţi penal
    sau care, de la ultima lor înaintare în grad, au fost sancţionaţi ca urmare
    a hotărârii consiliilor de onoare.
</p>
<p align="center">
    <strong>Articolul 64</strong>
</p>
<p>
    Ofiţerii, maiştrii militari şi subofiţerii în activitate şi în rezervă
    care, în executarea misiunilor sau în alte situaţii, săvârşesc fapte de
    eroism şi acte exemplare de curaj pot fi înaintaţi în gradul următor, în
    mod excepţional, atât în timp de pace cât şi în timp de război, chiar dacă
    nu îndeplinesc condiţiile prevăzute la art. 54-56 şi 61.
</p>
<p align="center">
    <strong>Articolul 65</strong>
</p>
<p>
    Locotenent-coloneii şi căpitan-comandorii în activitate cărora le-a expirat
    stagiul minim în grad, dar nu au putut fi înaintaţi în grad pe timpul cât
    s-au aflat în activitate întrucât nu au fost încadraţi pe funcţii prevăzute
    cu grade corespunzătoare celor la care urmau să fie avansaţi, la trecerea
    în rezervă sau direct în retragere prin aplicarea art. 85 lit. a)-e) vor fi
    înaintaţi în gradul următor şi trecuţi în rezervă sau direct în retragere
    cu noul grad, dacă îndeplinesc celelalte condiţii prevăzute în prezenta
    lege.
</p>
<p align="center">
    <strong>Articolul 66</strong>
</p>
<p>
    Coloneilor şi comandorilor în activitate, care au o vechime în grad de
    minimum 5 ani şi au fost încadraţi în această perioadă de cel puţin 3 ani
    în funcţii prevăzute în statele de organizare cu grad de general sau
    similare şi care au fost apreciaţi în ultimii 3 ani cu calificativul
    "foarte bun", la trecerea în rezervă sau direct în retragere li se poate
    acorda gradul de general de brigadă cu o stea, respectiv de general de
    flotilă aeriană cu o stea sau contraamiral de flotilă cu o stea, şi vor fi
    trecuţi în rezervă sau direct în retragere cu noul grad.
</p>
<p>
    Prevederile alin. 3 nu se aplică celor trecuţi în rezervă sau direct în
    retragere prin aplicarea art. 85 lit. e^1)-l), art. 87 şi art. 88.
</p>
<p>
    Coloneilor şi comandorilor în rezervă li se poate acorda gradul de general
    de brigadă/similar cu o stea, doar în timp de război.
</p>
<p align="center">
    <strong>Articolul 67</strong>
</p>
<p>
    Cu prilejul evocării unor evenimente importante din istoria patriei şi
    forţelor armate ale României, ofiţerii, maiştrii militari şi subofiţerii în
    retragere, în mod excepţional, pot fi înaintaţi la gradul următor;
    coloneilor şi comandorilor li se poate acorda gradul de general, iar
    maiştrilor militari principali şi plutonierilor adjutanţi şefi li se poate
    acorda gradul de sublocotenent.
</p>
<p>
    Înaintarea în grad, respectiv acordarea gradului celor prevăzuţi la alin.
    1, se face prin:
</p>
<p>
    a) decret al Preşedintelui României, pentru generali şi amirali, la
    propunerea ministrului apărării naţionale, după consultarea de către acesta
    a colegiului ministerului;
</p>
<p>
    b) ordin al ministrului apărării naţionale pentru ceilalţi ofiţeri, pentru
    maiştri militari şi subofiţeri.
</p>
<p align="center">
    <strong>Articolul 68</strong>
</p>
<p>
    Ofiţerii, maiştrii militari şi subofiţerii care şi-au sacrificat viaţa
    săvârşind acte de devotament excepţional vor fi înaintaţi post-mortem în
    gradul următor, iar coloneilor şi comandorilor li se va acorda post-mortem
    gradul de general.
</p>
<p>
    Maiştrilor militari, subofiţerilor, gradaţilor şi soldaţilor care şi-au
    sacrificat viaţa în aceleaşi condiţii li se poate acorda post-mortem gradul
    de sublocotenent.
</p>
<p>
    Înaintarea în grad, respectiv acordarea gradului în aceste situaţii, se
    face în tot cursul anului conform prevederilor art. 45.
</p>
<p align="center">
    <strong>Articolul 69</strong>
</p>
<p>
    Degradarea militară se aplică, în condiţiile prevăzute de legea penală,
    cadrelor militare în activitate, în rezervă şi în retragere, condamnate la
    pedeapsa complimentară a degradării militare prin hotărâre judecătorească.
</p>
<p align="center">
    <strong>Articolul 70</strong>
</p>
<p>
    Ofiţerii, maiştrii militari şi subofiţerii în activitate, în rezervă şi în
    retragere, cărora li s-a aprobat renunţarea la cetăţenia română ori au
    dobândit şi o altă cetăţenie şi s-au stabilit în străinătate, se scot din
    evidenţa militară.
</p>
<p align="center">
    <strong>Articolul 71</strong>
</p>
<p>
    Ofiţerii, maiştrii militari şi subofiţerii prevăzuţi la art. 69 şi 70 se
    scot din evidenţa militară, astfel:
</p>
<p>
    a) prin ordin al şefului Statului Major General, cei care au avut grade de
    generali şi amirali;
</p>
<p>
    b) prin ordin al comandanţilor stabiliţi de şeful Statului Major General,
    cei care au avut grade de ofiţeri, maiştri militari sau subofiţeri.
</p>
<p align="center">
    <strong>Articolul 72</strong>
</p>
<p>
    În cazul în care intervine o altă hotărâre judecătorească, prin care s-a
    pronunţat achitarea sau prin care nu se mai aplică pedeapsa complimentară a
    degradării militare, cei în cauză sunt reluaţi în evidenţa militară, cu
    gradul avut, prin ordinul celor care au dispus scoaterea din evidenţă. În
    această situaţie, timpul cât au fost degradaţi se include în calculul
    stagiului în grad, iar cadrele militare respective pot cere prin instanţa
    judecătorească reparaţii morale şi materiale pentru prejudiciile ce li s-au
    adus.
</p>
<p>
    Ofiţerii, maiştrii militari şi subofiţerii cărora li s-a aplicat degradarea
    militară şi care au fost amnistiaţi sau graţiaţi de pedeapsa complimentară
    a degradării militare, precum şi cei care au fost reabilitaţi se reiau în
    evidenţa militară şi, în raport cu nevoile forţelor armate, li se poate
    reda orice grad militar, până la gradul avut inclusiv.
</p>
<p>
    Cadrele militare în rezervă care au redobândit cetăţenia română şi anterior
    au fost scoase din evidenţa militară, pot fi reluate în evidenţă, la
    repatriere.
</p>
<p>
    Redarea gradului potrivit alin. 2 se face prin:
</p>
<p>
    a) decret al Preşedintelui României, pentru generali şi amirali;
</p>
<p>
    b) ordin al şefului Statului Major General, pentru ceilalţi ofiţeri,
    maiştri militari şi subofiţeri.
</p>
<p>
    Redarea gradului ca urmare a amnistierii, graţierii sau reabilitării nu
    atrage, de drept, rechemarea în activitate, iar timpul cât au fost
    degradaţi nu se ia în calculul stagiului în grad şi al vechimii de cadre
    militare în activitate.
</p>
<p align="center">
    <strong>Articolul 73</strong>
</p>
<p>
    Cadrelor militare li se întocmesc aprecieri de serviciu.
</p>
<p>
    Aprecierea de serviciu constituie unicul document de valoare a competentei
    profesionale, a calităţii morale, a perspectivelor de dezvoltare şi
    promovare, pe baza căruia ofiţerii, maiştrii militari şi subofiţerii sunt
    înaintaţi în gradul următor.
</p>
<p>
    Aprecierea de serviciu a cadrelor militare în activitate se face periodic,
    precum şi în cazurile stabilite de ministrul apărării naţionale.
</p>
<p>
    Cadrelor militare în rezervă li se întocmesc aprecieri de serviciu în anul
    în care sunt propuse la înaintarea în grad.
</p>
<p>
    Metodologia întocmirii aprecierilor de serviciu, în timp de pace, precum şi
    sistemul de apreciere în timp de război se stabilesc prin ordin al
    ministrului apărării naţionale, ministrului afacerilor interne,
    directorului Serviciului Român de Informaţii, directorului Serviciului de
    Telecomunicaţii Speciale, directorului Serviciului de Informaţii Externe,
    respectiv al directorului Serviciului de Protecţie şi Pază. Aprecierea se
    exprimă prin unul dintre următoarele calificative: «excepţional», «foarte
    bun», «bun», «corespunzător», «mediocru» sau «necorespunzător
</p>
<p align="center">
    <strong>Articolul 74</strong>
</p>
<p>
    Încadrarea ofiţerilor, maiştrilor militari şi subofiţerilor în funcţii se
    face ţinând seama de nevoile forţelor armate, de competenţa şi conduita
    morală ale acestora.
</p>
<p>
    La numirea în funcţii se va respecta principiul potrivit căruia ofiţerii,
    maiştrii militari şi subofiţerii să nu fie subordonaţi altora cu grade mai
    mici. Excepţie de la acest principiu pot face cadrele militare care nu au
    studii superioare de specialitate şi care se subordonează celor care au o
    astfel de pregătire, precum şi cadrele militare aparţinând Ministerului de
    Interne, Serviciului Român de Informaţii, Serviciului de Informaţii
    Externe, Serviciului de Telecomunicaţii Speciale, Ministerului Justiţiei şi
    Serviciului de Protecţie şi Paza.
</p>
<p>
    La încadrarea ofiţerilor în funcţii se va tine seama şi de experienţa
    dobândită pe treptele ierarhiei militare, promovarea efectuându-se, de
    regulă, în funcţii sau la eşaloane imediat superioare.
</p>
<p>
    Pentru determinarea aptitudinilor şi cunoştinţelor ofiţerilor, necesare la
    încadrarea în anumite funcţii stabilite prin ordin al ministrului apărării
    naţionale, se vor folosi teste ori se va organiza examen sau concurs.
    Condiţiile privind studiile, stagiul în funcţii şi alte criterii necesare
    pentru încadrarea şi promovarea ofiţerilor în unele funcţii se stabilesc
    prin ordin al ministrului apărării naţionale.
</p>
<p align="center">
    <strong>Articolul 75</strong>
</p>
<p>
    Cadrele militare se numesc în funcţii prevăzute în statele de organizare cu
    grade egale sau mai mari faţă de cele pe care le au. Competenţele de numire
    se stabilesc prin ordin al ministrului apărării naţionale.
</p>
<p>
    În structurile Ministerului Apărării Naţionale, cadrele militare pot fi
    numite în funcţii prevăzute cu grade egale sau mai mari cu cel mult două
    trepte faţă de gradele pe care le deţin.
</p>
<p>
    În structurile Ministerului Apărării Naţionale, ofiţerii, maiştrii militari
    şi subofiţerii în activitate, proveniţi în condiţiile art. 36 alin. 1 lit.
    e)-g) şi i)-k), respectiv ale art. 38 lit. e)-h) şi art. 40 alin. 1 lit.
    b), e) şi g), pot încadra funcţii prevăzute în statele de organizare cu
    gradul de cel mult locotenent-colonel/similar, respectiv maistru militar
    clasa I/plutonier-adjutant.
</p>
<p>
    Fac excepţie de la prevederile alin. 2 şi 3 cadrele militare confirmate în
    armele şi specialităţile militare şi care îşi desfăşoară activitatea în
    domeniile stabilite prin Ghidul carierei militare.
</p>
<p align="center">
    <strong>Articolul 75^1</strong>
</p>
<p>
    Selecţionarea cadrelor militare din Ministerul Apărării Naţionale pentru
    numirea în funcţii prevăzute în statele de organizare cu grad superior
    celui pe care îl au se face de către comisiile de selecţie constituite în
    acest scop, potrivit Ghidului carierei militare, iar în situaţii care impun
    adoptarea de măsuri urgente, cadrele militare pot fi numite în funcţii
    similare celor deţinute sau superioare acestora prin ordin al ministrului
    apărării naţionale.
</p>
<p>
    Cadrele militare din Ministerul Apărării Naţionale nu pot fi numite în
    funcţii prevăzute în statele de organizare cu grade inferioare celor pe
    care le au. În mod excepţional căpitănii şi maiorii în vârsta de până la 42
    de ani pot fi menţinuţi sau numiţi în funcţii prevăzute în statele de
    organizare cu grade inferioare celor pe care le au, până la data de 31
    decembrie 2003.
</p>
<p align="center">
    <strong>Articolul 76</strong>
</p>
<p>
    Mutarea cadrelor militare în activitate dintr-o unitate în alta, precum şi
    în cadrul aceleiaşi unităţi se efectuează o singură dată pe an, cu excepţia
    situaţiilor deosebite stabilite prin ordin al ministrului apărării
    naţionale.
</p>
<p>
    Pe timpul stării de urgenţă, de asediu, de mobilizare şi pe timp de război,
    mutarea cadrelor militare dintr-o unitate în alta, precum şi în cadrul
    aceleiaşi unităţi poate fi efectuată ori de câte ori este nevoie.
</p>
<p align="center">
    <strong>Articolul 77</strong>
</p>
<p>
    Cadrele militare în activitate pot fi detaşate la alte unităţi pentru
    îndeplinirea unor misiuni sau pentru a urma o forma de perfecţionare a
    pregătirii pe o perioadă de cel mult un an, durata care poate fi
    prelungită, cu aprobarea ministrului apărării naţionale, până la cel mult 2
    ani.
</p>
<p>
    Pe timpul detaşării, cadrele militare rămân încadrate în funcţiile şi
    unităţile militare din care au fost detaşate şi beneficiază de toate
    drepturile legale.
</p>
<p align="center">
    <strong>Articolul 77^1</strong>
</p>
<p>
    Cadrele militare în activitate pot îndeplini, temporar, prin împuternicire,
    atribuţiile unei alte funcţii vacante, în condiţiile stabilite prin ordin
    al conducătorului instituţiei, pentru o perioadă de până la 6 luni,
    interval care poate fi prelungit cu aprobarea conducătorului instituţiei,
    în aceleaşi condiţii.
</p>
<p>
    Cadrele militare în activitate din Ministerul Apărării Naţionale pot
    îndeplini, temporar, prin împuternicire, atribuţiile unei alte funcţii
    vacante, în condiţiile stabilite prin ordin al ministrului apărării
    naţionale, pentru o perioadă de până la 6 luni, interval care poate fi
    prelungit cu aprobarea ministrului apărării naţionale până la cel mult un
    an.
</p>
<p>
    Cadrele militare în activitate pot îndeplini, temporar, prin împuternicire,
    atribuţiile unei alte funcţii al cărei titular lipseşte o perioadă mai mare
    de o lună, în condiţiile stabilite prin ordin al ministrului apărării
    naţionale, până la încetarea situaţiei care a condus la vacantarea
    temporară a funcţiei.
</p>
<p>
    Pe timpul exercitării atribuţiilor funcţiilor în care au fost
    împuternicite, cadrele militare au obligaţiile şi drepturile
    corespunzătoare funcţiilor respective.
</p>
<p>
    Prin excepţie de la prevederile alin. 1, în Ministerul Afacerilor Interne,
    prelungirea perioadei de împuternicire se aprobă potrivit competenţelor de
    gestiune a resurselor umane.
</p>
<p align="center">
    <strong>Articolul 77^2</strong>
</p>
<p>
    Personalul Ministerului Apărării Naţionale poate fi detaşat în cadrul
    organismelor şi organizaţiilor internaţionale, în conformitate cu
    legislaţia în vigoare.
</p>
<p align="center">
    <strong>Articolul 77^3</strong>
</p>
<p>
    Personalul militar şi civil beneficiază de despăgubiri pentru cazurile de
    invaliditate, iar membrii familiei care au, potrivit legii, dreptul la
    pensie de urmaş, pentru cazurile de deces, produse ca urmare a unor acţiuni
    militare, prin accidente, catastrofe sau alte asemenea evenimente
    intervenite în timpul şi din cauza serviciului. Modalităţile de stabilire
    şi acordare a despăgubirilor se reglementează prin ordin al conducătorului
    instituţiei.
</p>
<p align="center">
    <strong>Articolul 78</strong>
</p>
<p>
    Numirea în funcţie şi eliberarea din funcţie în unităţile militare, cu
    excepţia funcţiilor publice în care numirea se face potrivit legii, precum
    şi detaşarea cadrelor militare în condiţiile art. 77 se fac, în timp de
    pace şi în timp de război, conform competentelor stabilite prin ordin al
    ministrului apărării naţionale.
</p>
<p>
    Numirea în funcţiile prevăzute în statele de organizare cu grade de general
    de corp de armată, general-comandor, viceamiral-comandor şi superioare
    acestora se face cu avizul Consiliului Superior de Apărare a Ţării.
</p>
<p>
    Împuternicirea sau încetarea împuternicirii cadrelor militare în activitate
    din Ministerul Apărării Naţionale se efectuează conform competenţelor
    stabilite prin ordin al ministrului apărării naţionale.
</p>
<p align="center">
    <strong>Articolul 79</strong>
</p>
<p>
    Încadrarea şi promovarea în funcţii a ofiţerilor de justiţie se fac
    potrivit actelor normative specifice acestora.
</p>
<p>
    Încadrarea şi promovarea ofiţerilor în funcţii didactice se fac potrivit
    prevederilor prezentei legi şi ale actelor normative aplicabile
    instituţiilor militare de învăţământ.
</p>
<p>
    Medicilor şi farmaciştilor militari li se acordă grade profesionale conform
    normelor legale.
</p>
<p align="center">
    <strong>Articolul 80</strong>
</p>
<p>
    Căpitănii, locotenent-coloneii şi căpitan-comandorii care, pentru a fi
    înaintaţi în gradul următor, trebuie să absolve una dintre formele de
    pregătire menţionate la art. 56 alin. 1 paragrafele B şi, respectiv C, însă
    până la expirarea stagiului minim nu au absolvit-o, nu pot deţine funcţii
    prevăzute în statul de organizare cu grade superioare celor pe care le au.
</p>
<p align="center">
    <strong>Articolul 81</strong>
</p>
<p>
    Ofiţerii în activitate pot fi numiţi în funcţii inferioare gradelor pe care
    le au, în următoarele situaţii:
</p>
<p>
    a) când se produc modificări în statele de organizare sau în cazul
    reorganizării armatei;
</p>
<p>
    b) în cazuri excepţionale, la cererea ofiţerilor sau când sunt propuşi prin
    aprecierile de serviciu, pentru motive bine justificate;
</p>
<p>
    c) când sunt sancţionaţi cu retrogradarea în funcţie.
</p>
<p>
    În situaţiile menţionate la alin. 1 lit. b) şi c), ofiţerii pot fi numiţi
    în funcţii prin derogare de la prevederile art. 74 alin. 2. Numirea în
    funcţii, în condiţiile prevăzute la alin. 1 lit. b) şi c) se face cu
    aprobarea ministrului apărării naţionale sau a comandanţilor stabiliţi de
    acesta.
</p>
<p align="center">
    <strong>Articolul 82</strong>
</p>
<p>
    Situaţia ofiţerilor, maiştrilor militari şi subofiţerilor în activitate,
    care sunt puşi la dispoziţie, se soluţionează după cum urmează:
</p>
<p>
    a) pentru cei puşi la dispoziţie în vederea încadrării sau trecerii în
    rezervă ori în retragere, în termen de cel mult 3 luni. În cazuri
    excepţionale, cu aprobarea ministrului apărării naţionale, acest termen
    poate fi prelungit cu încă cel mult 3 luni. Pe timpul cât se află în
    această situaţie, cei în cauză îndeplinesc atribuţiile stabilite de
    comandanţii unităţilor militare la a căror dispoziţie sunt;
</p>
<p>
    b) pentru cei puşi la dispoziţie în cazurile de boală stabilite prin
    hotărâre a Guvernului, la expirarea termenului de internare şi a
    concediilor medicale pentru tratament, fără a depăşi termenul maxim
    prevăzut de reglementările în vigoare pentru bolnavii salariaţi în
    administraţia publică. Cadrele militare restabilite vor fi numite în
    funcţie, iar cele a căror boală se menţine vor fi trecute, după caz, în
    rezervă sau în retragere, cu drept de pensie conform legii;
</p>
<p>
    c) pentru cei căzuţi în captivitate, în termen de cel mult 3 luni de la
    înapoierea în ţara. În această perioadă comisii speciale, stabilite prin
    dispoziţie a şefului Statului Major General, vor cerceta condiţiile căderii
    în captivitate şi comportarea celor în cauză pe timpul acesteia. În funcţie
    de rezultat, cei găsiţi nevinovaţi vor fi încadraţi în funcţii, iar cei
    vinovaţi de fapte ce cad sub incidenţa legii penale vor fi trecuţi în
    rezervă.
</p>
<p align="center">
    <strong>Articolul 83</strong>
</p>
<p>
    Ofiţerii, maiştrii militari şi subofiţerii fac parte din arme sau servicii
    şi au specialităţi militare, în raport cu profilul pregătirii lor
    profesionale.
</p>
<p>
    Nomenclatorul armelor, serviciilor şi specialităţilor militare se
    stabileşte prin dispoziţie a şefului Statului Major General.
</p>
<p align="center">
    <strong>Articolul 84</strong>
</p>
<p>
    Trecerea ofiţerilor, maiştrilor militari şi subofiţerilor dintr-o armă,
    serviciu sau specialitate militară în alta se poate efectua, în raport cu
    nevoile armatei, după obţinerea unei pregătiri corespunzătoare, prin una
    dintre următoarele forme:
</p>
<p>
    a) absolvirea, cu diplomă de licenţă, a unei academii militare sau a unei
    instituţii civile de învăţământ superior cu profil corespunzător armelor,
    serviciilor şi specialităţilor militare necesare armatei ori a unor
    instituţii militare de învăţământ pentru formarea ofiţerilor, de către cei
    care nu au avut studii de acest nivel;
</p>
<p>
    b) absolvirea unui curs de perfecţionare sau de specializare în arma,
    serviciul sau specialitatea în care urmează a fi confirmate şi o experienţă
    practică de cel puţin 2 ani în funcţii corespunzătoare acestora, timp în
    care să fi fost apreciaţi cu cel puţin calificativul «bun
</p>
<p>
    Maiştrii militari şi subofiţerii pot fi trecuţi dintr-o armă, serviciu sau
    specialitate militară în alta şi prin promovarea examenului de grad, dacă
    înainte de susţinerea acestuia au un stagiu practic neîntrerupt de minimum
    2 ani în noua armă, serviciu sau specialitate militară, pe timpul căruia au
    fost apreciaţi cu calificativul cel puţin „bun”.
</p>
<p>
    Ofiţerii, maiştrii militari şi subofiţerii se trec dintr-o armă, serviciu
    sau specialitate militară în alta prin ordin al comandanţilor stabiliţi de
    ministrul apărării naţionale.
</p>
<p align="center">
    <strong>Articolul 85</strong>
</p>
<p>
    Ofiţerii, maiştrii militari şi subofiţerii în activitate pot fi trecuţi în
    rezervă sau direct în retragere, după caz, în următoarele situaţii:
</p>
<p>
    a) la împlinirea vârstei standard de pensionare pentru limită de vârstă;
</p>
<p>
    a^1) la împlinirea vârstei care conferă dreptul la pensie de serviciu
    pentru limită de vârstă cu reducerea vârstei standard de pensionare, în
    condiţiile legii;
</p>
<p>
    b) sunt clasaţi "inapt pentru serviciul militar" de către comisiile de
    expertiză medico-militară, cu excepţia situaţiei în care a intervenit
    menţinerea în activitate în condiţiile art. 21 alin. 4;
</p>
<p>
    c) sunt clasaţi "apt limitat" de către comisiile de expertiză
    medico-militară, cu excepţia situaţiei în care a intervenit menţinerea în
    activitate în condiţiile art. 21 alin. 4;
</p>
<p>
    d) au împlinit limita de vârstă în grad;
</p>
<p>
    e) când, în urma reorganizării unor unităţi şi a reducerii unor funcţii din
    statele de organizare, nu sunt posibilităţi pentru a fi încadraţi în alte
    funcţii sau unităţi, precum şi pentru alte motive sau nevoi ale
    Ministerului Apărării Naţionale;
</p>
<p>
    e^1) la expirarea termenului prevăzut în contractul încheiat în condiţiile
    art. 41^1, dacă una dintre părţi nu este de acord cu reînnoirea acestuia;
</p>
<p>
    f) pentru a fi numiţi într-o funcţie publică, civilă, cu menţiunea de a fi
    trecuţi în rezervă;
</p>
<p>
    g) la cerere, pentru motive bine întemeiate;
</p>
<p>
    h) prin demisie;
</p>
<p>
    i) când manifestă dezinteres în îndeplinirea atribuţiilor şi sarcinilor de
    serviciu sau în perfecţionarea pregătirii lor militare şi de specialitate;
</p>
<p>
    i^1) când nu promovează baremele de pregătire fizică, în condiţiile
    stabilite prin ordin al conducătorului instituţiei;
</p>
<p>
    j) când comit abateri grave de la prevederile regulamentelor militare sau
    de la alte dispoziţii legale;
</p>
<p>
    k) când, pentru o infracţiune săvârşită din culpă, li s-a aplicat prin
    hotărâre judecătorească suspendarea executării pedepsei sub supraveghere
    ori a amenzii, precum şi în cazurile când au beneficiat de amnistie sau
    graţiere înainte de începerea executării pedepsei;
</p>
<p>
    l) când încalcă prevederile art. 4 lit. a) referitoare la deţinerea
    cetăţeniei române şi a domiciliului în ţară;
</p>
<p>
    m) în cazul neavizării în vederea acordării autorizaţiei de acces la
    informaţii clasificate sau certificatului de securitate, la retragere ori
    în cazul în care aceste documente nu sunt revalidate, din motive imputabile
    cadrului militar în condiţiile legii;
</p>
<p>
    n) după punerea la dispoziţie, potrivit legii, ca urmare a limitării
    nivelului de acces la informaţii clasificate, atunci când nu se identifică
    o funcţie corespunzătoare gradului deţinut cu o prevedere a nivelului de
    acces la informaţii clasificate înscrisă în fişa postului, la nivelul
    acordat după limitare.
</p>
<p>
    Trecerea în rezervă sau direct în retragere se face din oficiu, în
    condiţiile prevăzute la alin. 1 lit. a), b), d), e), e^1), f), i^1), l), m)
    şi n), la cererea cadrului militar, în situaţia prevăzută la alin. 1 lit.
    a^1), la propunerea consiliilor de onoare, în condiţiile prevăzute la alin.
    (1) lit. i) şi j), iar în celelalte condiţii, la propunerea comandanţilor
    unităţilor din care fac parte, înaintată ierarhic.
</p>
<p>
    În Ministerul Afacerilor Interne, trecerea în rezervă sau direct în
    retragere din oficiu, în condiţiile prevăzute la alin. 1 lit. e), m) şi n),
    se dispune după expirarea perioadei de punere la dispoziţie, atunci când nu
    s-a putut realiza numirea într-o funcţie corespunzătoare. (Alineatul 2^1)
</p>
<p>
    Raportul comandanţilor privind trecerea în rezervă a cadrelor militare în
    condiţiile prevăzute la alin. 1 lit. h) se înaintează pe cale ierarhică,
    împreună cu raportul de demisie, celor în a căror competenţă intră,
    potrivit art. 43, trecerea în rezervă. Până la comunicarea ordinului de
    trecere în rezervă, cei în cauză sunt obligaţi să-şi îndeplinească
    atribuţiile funcţiilor în care sunt încadraţi, precum şi toate îndatoririle
    ce le revin. Pe timpul stării de urgenţă, de asediu, de mobilizare şi pe
    timp de război, cadrele militare nu se trec în rezervă în condiţiile alin.
    1 lit. a), a^1), c), d), e), e^1), g), h), i), i^1) şi j).
</p>
<p>
    Ofiţerii în activitate care au împlinit limita de vârstă în grad pentru
    clasa a III-a în rezervă, prevăzută la art. 86 alin. 4, precum şi cadrele
    militare care au fost clasate medical «inapt pentru serviciul militar cu
    scoatere din evidenţă» se trec direct în retragere, prin aplicarea uneia
    dintre prevederile alin. 1, în raport cu motivele care determină schimbarea
    situaţiei militare.
</p>
<p>
    Cadrele militare nu pot fi trecute în rezervă ca urmare a prezentării
    demisiei pe timpul executării misiunilor prevăzute la art. 2 din Legea nr.
    42/2004 privind participarea forţelor armate la misiuni în afara
    teritoriului statului român, cu modificările ulterioare, precum şi pe
    timpul executării altor misiuni în străinătate.
</p>
<p align="center">
    <strong>Articolul 86</strong>
</p>
<p>
    Limitele de vârstă în grad până la care cadrele militare pot fi menţinute
    în activitate sunt vârstele standard de pensionare pentru limită de vârstă
    prevăzute de legislaţia asigurărilor sociale şi pensiilor care
    reglementează sistemul public de pensii pentru instituţiile din domeniul
    apărării naţionale, ordinii publice şi siguranţei naţionale.
</p>
<p>
    Limitele de vârstă în grad până la care generalii şi amiralii pot fi
    menţinuţi în activitate sunt:
</p>
<p>
    a) pentru general de brigadă cu o stea, respectiv general de flotilă
    aeriană cu o stea, pentru cei din arma aviaţie, şi contraamiral de flotilă
    cu o stea, pentru cei din arma marină - 56 de ani;
</p>
<p>
    b) pentru general-maior cu două stele, respectiv contraamiral cu două
    stele, pentru cei din arma marină - 57 de ani;
</p>
<p>
    c) pentru general-locotenent cu trei stele, respectiv viceamiral cu trei
    stele, pentru cei din arma marină - 58 de ani;
</p>
<p>
    d) pentru general cu patru stele, respectiv amiral cu patru stele, pentru
    cei din arma marină - 59 de ani.
</p>
<p>
    În situaţia în care limitele de vârstă în grad prevăzute la alin. 2 sunt
    mai mici decât vârstele standard de pensionare pentru limită de vârstă
    prevăzute de legislaţia asigurărilor sociale şi pensiilor care
    reglementează sistemul public de pensii pentru instituţiile din domeniul
    apărării naţionale, ordinii publice şi siguranţei naţionale, generalii şi
    amiralii sunt menţinuţi în activitate până la vârsta standard.
</p>
<p>
    Prevederile alin. 2 se aplică exclusiv Ministerului Apărării Naţionale.
</p>
<p>
    Generalii şi amiralii din cadrul Ministerului Afacerilor Interne,
    Serviciului Român de Informaţii, Serviciului de Informaţii Externe,
    Serviciului de Telecomunicaţii Speciale şi Serviciului de Protecţie şi Pază
    sunt menţinuţi în activitate după împlinirea vârstei standard de
    pensionare, până la vârsta de 60 de ani, sau sunt trecuţi în rezervă, la
    cerere, în condiţiile prevederilor legale în vigoare.
</p>
<p>
    În raport cu nevoile de încadrare, cadrele militare pot fi menţinute în
    activitate după împlinirea vârstei standard de pensionare până la vârsta de
    60 de ani, cu aprobarea anuală a conducătorului instituţiei.
</p>
<p>
    Limitele de vârstă în grad până la care cadrele militare în rezervă pot fi
    menţinute în evidenţă sunt de 55 de ani pentru clasa I, 60 de ani pentru
    clasa a II-a şi 63 de ani pentru clasa a III-a.
</p>
<p>
    După împlinirea vârstei de 60 de ani, generalii şi amiralii din Ministerul
    Afacerilor Interne, Serviciul Român de Informaţii şi Serviciul de
    Informaţii Externe pot fi menţinuţi în activitate până la împlinirea
    vârstei de 62 de ani, la cerere, dacă starea de sănătate le permite
    rezolvarea în foarte bune condiţii a atribuţiilor ce le revin, cu aprobarea
    conducătorului instituţiei.
</p>
<p>
    Cadrele militare din Ministerul Afacerilor Interne, altele decât cele
    prevăzute la alin. 5, sunt menţinute în activitate după împlinirea vârstei
    standard de pensionare până la vârsta de 60 de ani, la cererea acestora,
    după cum urmează:
</p>
<p>
    a) cu aprobarea ministrului afacerilor interne, pentru ofiţeri;
</p>
<p>
    b) cu aprobarea inspectorilor generali/similari, pentru maiştri militari şi
    subofiţeri;
</p>
<p>
    c) prevederile cuprinse la lit. a) şi b) se aplică şi cadrelor militare
    care au obţinut o aprobare în prealabil.
</p>
<p align="center">
    <strong>Articolul 86^1</strong>
</p>
<p>
    Prin excepţie de la prevederile art. 86, personalul militar de specialitate
    medico-sanitar, indiferent de gradul militar deţinut, poate fi menţinut în
    activitate după împlinirea vârstei standard de pensionare, la cerere, cu
    aprobarea conducătorului instituţiei, până la împlinirea vârstei de
    pensionare stabilită pentru personalul de specialitate medico-sanitar
    civil.
</p>
<p align="center">
    <strong>Articolul 87</strong>
</p>
<p>
    Ofiţerii, maiştrii militari şi subofiţerii în activitate condamnaţi prin
    hotărâre judecătorească la pedeapsa închisorii cu executarea acesteia,
    precum şi cei condamnaţi pentru infracţiuni săvârşite cu intenţie la
    pedeapsa închisorii cu suspendarea executării ori cu amenda se trec în
    rezervă sau direct în retragere.
</p>
<p>
    Cadrele militare în activitate condamnate prin hotărâre judecătorească
    rămasă definitivă la pedeapsa închisorii cu executarea acesteia se trec în
    rezervă sau direct în retragere din oficiu.
</p>
<p>
    Cadrele militare în activitate din Ministerul Apărării Naţionale condamnate
    pentru infracţiuni săvârşite cu intenţie la pedeapsa amenzii penale sau cu
    închisoare, cu suspendarea executării ori graţiate înainte de începerea
    executării pedepsei sau cu privire la care s-a dispus amânarea aplicării
    pedepsei pot fi trecute în rezervă sau direct în retragere ori pot fi
    menţinute în activitate, pe baza propunerilor înaintate ierarhic, prin
    ordin al comandanţilor/şefilor care au competenţe în acest sens, stabilite
    prin ordin al ministrului apărării naţionale, dispoziţiile art. 43
    aplicându-se în mod corespunzător.
</p>
<p align="center">
    <strong>Articolul 88</strong>
</p>
<p>
    Ofiţerii, maiştrii militari şi subofiţerii în activitate, pentru care
    consiliile de onoare au stabilit că au încălcat prevederile art. 28 şi art.
    30 alin. 2 se trec în rezervă sau direct în retragere.
</p>
<p align="center">
    <strong>Articolul 89</strong>
</p>
<p>
    Hotărârea privind menţinerea în activitate a cadrelor militare trimise în
    judecată pentru săvârşirea de infracţiuni se ia după soluţionarea
    definitivă a cauzei.
</p>
<p>
    Cadrele militare în activitate din Ministerul Apărării Naţionale se
    suspendă din funcţie pe perioada în care, fiind în stare de arest
    preventiv, sunt urmărite penal, trimise în judecată ori sunt judecate de
    către instanţele judecătoreşti. Pe perioada suspendării din funcţie,
    ofiţerii, maiştrii militari şi subofiţerii nu beneficiază de niciun drept
    din partea Ministerului Apărării Naţionale.
</p>
<p>
    Prin excepţie de la prevederile alin. 2, cadrele militare, pe perioada
    suspendării din funcţie, pot beneficia de dreptul prevăzut la art. 9 lit.
    e) şi de dreptul de folosinţă a locuinţei de serviciu.Cadrele militare în
    activitate din Serviciul Român de Informaţii, Serviciul de Telecomunicaţii
    Speciale şi Serviciul de Protecţie şi Pază se pun la dispoziţie când sunt
    trimise în judecată sau sunt judecate de către instanţele judecătoreşti în
    stare de libertate pentru fapte în legătură cu exercitarea atribuţiilor
    funcţiilor în care sunt încadrate sau împuternicite.
</p>
<p>
    În Ministerul Apărării Naţionale, cadrele militare în activitate se pun la
    dispoziţie când sunt trimise în judecată sau sunt judecate de către
    instanţele judecătoreşti în stare de libertate pentru fapte în legătură cu
    exercitarea atribuţiilor funcţiilor în care sunt încadrate, numai la
    propunerea consiliilor de onoare şi a comandanţilor de unităţi.
</p>
<p>
    Cadrele militare puse la dispoziţie în condiţiile prevăzute la alin. 4 şi 5
    îndeplinesc atribuţiile stabilite, în scris, de comandanţii unităţilor din
    care fac parte şi beneficiază de drepturile băneşti corespunzătoare
    gradului pe care îl au, la minimum, precum şi de celelalte drepturi
    stabilite cadrelor militare în activitate conform dispoziţiilor legale.În
    cazul în care s-a dispus achitarea, încetarea procesului penal, renunţarea
    la aplicarea pedepsei, clasarea ori renunţarea la urmărirea penală, cadrele
    militare care au fost suspendate din funcţie în condiţiile alin. 2 şi care
    s-au aflat la dispoziţie în condiţiile alin. 4 şi 5 sunt repuse în
    drepturile avute la data suspendării din funcţie sau la data punerii la
    dispoziţie, după caz, inclusiv în funcţia deţinută anterior sau în una
    echivalentă, şi vor primi toate drepturile ce li s-ar fi acordat în
    perioada cât s-au aflat suspendate, respectiv puse la dispoziţie, potrivit
    normelor legale în vigoare la data reîncadrării în funcţie.
</p>
<p>
    Cadrele militare din Ministerul Apărării Naţionale şi Ministerul Afacerilor
    Interne suspendate din funcţie sau care sau aflat la dispoziţie, în
    condiţiile legii, faţă de care s-a dispus amânarea aplicării pedepsei, sunt
    repuse în drepturile avute la data suspendării din funcţie sau la data
    punerii la dispoziţie, după caz, inclusiv în funcţia deţinută anterior sau
    în una echivalentă, şi vor primi toate drepturile ce li s-ar fi acordat în
    perioada cât s-au aflat suspendate, respectiv puse la dispoziţie, potrivit
    normelor legale în vigoare la data reîncadrării în funcţie.
</p>
<p>
    Cadrele militare condamnate prin hotărâre judecătorească rămasă definitivă
    la o pedeapsă privativă de libertate cu executarea acesteia care anterior
    au fost suspendate din funcţii se trec în rezervă începând cu data
    suspendării.
</p>
<p>
    Cadrelor militare care au comis fapte pentru care s-a început urmărirea
    penală sau pentru care au fost trimise în judecată li se pot aplica
    sancţiuni disciplinare numai după soluţionarea cauzei de către parchet ori
    de către instanţa de judecată. În acest timp procedura disciplinară se
    suspendă.
</p>
<p align="center">
    <strong>Articolul 90</strong>
</p>
<p>
    Cadrele militare în activitate, care nu îndeplinesc condiţiile de
    pensionare, nu pot fi trecute în rezervă pe timpul cât se află în
    incapacitate temporară de muncă, fiind internate în spitale ori sanatorii,
    se găsesc în concedii medicale sau în concediu pentru creşterea copilului,
    iar cadrele militare femei, nici în perioada gravidităţii, a concediului de
    risc maternal şi a celui de maternitate, acordate potrivit art. 15.
</p>
<p align="center">
    <strong>Articolul 91</strong>
</p>
<p>
    Ofiţerii, maiştrii militari şi subofiţerii, care au angajamente sau
    contracte cu Ministerul Apărării Naţionale, prin care se obligă să
    îndeplinească serviciul în armată o anumită perioadă de timp, în situaţia
    în care nu respectă angajamentul/contractul şi sunt trecuţi în rezervă prin
    aplicarea uneia dintre prevederile de la art. 85 alin. 1 lit. g)-n), art.
    87 şi art. 88, sunt obligaţi să restituie, după caz, cheltuielile de
    întreţinere şi instruire pe timpul şcolarizării ori alte cheltuieli
    ocazionate de situaţiile pentru care s-au încheiat angajamente sau
    contracte, în condiţii stabilite prin ordin al ministrului apărării
    naţionale.
</p>
<p align="center">
    <strong>Articolul 91^1</strong>
</p>
<p>
    Candidatul admis în instituţiile de formare profesională iniţială ale
    Ministerului Afacerilor Interne sau care formează personal pentru nevoile
    Ministerului Afacerilor Interne este obligat să încheie un angajament că va
    lucra în cadrul Ministerului Afacerilor Interne, pentru o perioadă de 10
    ani de la data naşterii raportului de serviciu.
</p>
<p>
    La încetarea calităţii de elev al unei instituţii de formare profesională
    iniţială a Ministerului Afacerilor Interne sau care formează personal
    pentru nevoile Ministerului Afacerilor Interne, ca urmare a admiterii
    într-o altă instituţie de formare profesională iniţială a Ministerului
    Afacerilor Interne sau care formează personal pentru nevoile Ministerului
    Afacerilor Interne, se completează un nou angajament, încheiat în
    condiţiile alin. 1, care cumulează şi perioada anterioară rămasă de
    executat, stabilită proporţional cu perioada de şcolarizare. La admiterea
    maistrului militar/subofiţerului din cadrul Ministerului Afacerilor Interne
    la un program de studii de licenţă, cu frecvenţă, în cadrul unei instituţii
    de învăţământ superior a Ministerului Afacerilor Interne sau care formează
    personal pentru nevoile Ministerului Afacerilor Interne se completează un
    nou angajament, încheiat în condiţiile alin. 1, care cumulează şi perioada
    anterioară rămasă de executat.
</p>
<p>
    Cadrul militar din Ministerul Afacerilor Interne care urmează un program de
    formare profesională continuă sau un curs de iniţiere în carieră este
    obligat să încheie un angajament că va lucra în cadrul Ministerului
    Afacerilor Interne, pentru o perioadă stabilită prin ordin al ministrului
    afacerilor interne, proporţional cu durata/valoarea cursului sau
    programului urmat.
</p>
<p>
    Elevul/Studentul unei instituţii de formare profesională iniţială a
    Ministerului Afacerilor Interne sau care formează personal pentru nevoile
    Ministerului Afacerilor Interne sau cadrul militar din Ministerul
    Afacerilor Interne care refuză încheierea unui nou angajament în condiţiile
    alin. 2 şi 3 sau care nu respectă condiţiile angajamentelor încheiate, este
    obligat să restituie, proporţional cu perioada rămasă de executat,
    cheltuielile efectuate în total pe timpul şcolarizării/desfăşurării
    programelor/cursurilor, potrivit reglementărilor în vigoare.
</p>
<p>
    Limitele de vârstă şi stagiile minime în grad
</p>
<p align="center">
    <strong>Articolul 92</strong>
</p>
<p>
    Abrogat.
</p>
<p align="center">
    <strong>Articolul 92^1</strong>
</p>
<p>
    Abrogat.
</p>
<p align="center">
    <strong>Articolul 93</strong>
</p>
<p>
    Abrogat.
</p>
<p align="center">
    <strong>Articolul 93^1</strong>
</p>
<p>
    Abrogat.
</p>
<p align="center">
    <strong>Articolul 94</strong>
</p>
<p>
    În timp de pace, stagiul minim în grad pentru înaintarea în gradul următor
    a ofiţerilor, maiştrilor militari şi subofiţerilor în activitate se
    stabileşte astfel:
</p>
<p>
    A.Pentru ofiţeri:
</p>
<p>
    a) sublocotenent şi aspirant 3 ani
</p>
<p>
    b) locotenent 5 ani
</p>
<p>
    c) căpitan 5 ani
</p>
<p>
    d) maior şi locotenent-comandor 5 ani
</p>
<p>
    e) locotenent-colonel şi căpitan-comandor 5 ani.
</p>
<p>
    Pentru gradele de colonel, comandor şi superioare acestora nu se stabilesc
    stagii în grad.
</p>
<p>
    B.Pentru maiştri militari:
</p>
<p>
    a) maistru militar clasa a V-a 2ani;
</p>
<p>
    b) maistru militar clasa a IV-a 4 ani;
</p>
<p>
    c) maistru militar clasa a III-a 5 ani;
</p>
<p>
    d) maistru militar clasa a II-a 7 ani;
</p>
<p>
    e) maistru militar clasa I 6 ani.
</p>
<p>
    C.Pentru subofiţeri:
</p>
<p>
    a) sergent 3 ani;
</p>
<p>
    b) sergent-major 4 ani;
</p>
<p>
    c) plutonier 5 ani;
</p>
<p>
    d) plutonier-major 7 ani;
</p>
<p>
    e) plutonier adjutant 6 ani.
</p>
<p align="center">
    <strong>Articolul 94^1</strong>
</p>
<p>
    Abrogat.
</p>
<p align="center">
    <strong>Articolul 95</strong>
</p>
<p>
    La calculul stagiului minim în grad nu se ia în considerare timpul în care
    cadrele militare în activitate din Ministerul Apărării Naţionale au
    absentat de la program datorită incapacităţii temporare de muncă, dacă
    absenţele însumează 365 de zile pe parcursul a 2 ani calendaristici
    consecutivi.
</p>
<p align="center">
    <strong>Articolul 96</strong>
</p>
<p>
    Stagiul minim în grad se reduce cu un an pentru ofiţerii, maiştrii militari
    şi subofiţerii în activitate care, pe întreaga durata a stagiului,
    îndeplinesc funcţii de personal navigant din aviaţie, de paraşutişti, de
    personal ambarcat pe submarine, pe vedete torpiloare sau pe alte nave
    similare, stabilite prin ordin al ministrului apărării naţionale, precum şi
    pentru scafandri.
</p>
<p align="center">
    <strong>Articolul 97</strong>
</p>
<p>
    În timp de pace, stagiul minim în grad pentru ofiţerii, maiştrii militari
    şi subofiţerii în rezervă este mai mare cu un an decât cel prevăzut la art.
    94, iar în timp de război este cel de la articolul respectiv. La chemarea
    sau rechemarea în activitate, pentru stabilirea stagiului în gradul pe care
    îl au, li se iau în calcul trei pătrimi din stagiul în gradul pe care îl au
    ca rezervişti.
</p>
<p align="center">
    <strong>Articolul 98</strong>
</p>
<p>
    În timp de război, stagiul minim în grad se reduce la jumătate pentru
    ofiţerii, maiştrii militari şi subofiţerii în activitate, precum şi pentru
    cei în rezervă mobilizaţi în unităţi militare. Timpul cât sunt încadraţi în
    unităţi în zona acţiunilor militare se socoteşte dublu la calculul
    stagiului minim în grad.
</p>
<p align="center">
    <strong>Articolul 99</strong>
</p>
<p>
    Timpul cât ofiţerii, maiştrii militari şi subofiţerii în activitate au fost
    condamnaţi cu suspendarea condiţionată a executării pedepsei ori au fost
    condamnaţi cu executarea acesteia, însă au fost amnistiaţi sau graţiaţi
    înainte de a începe executarea, precum şi în timpul cât ofiţerii, maiştrii
    militari şi subofiţerii în rezervă au fost condamnaţi la închisoare cu
    executarea pedepsei într-un loc de detenţie sau prin muncă fără privare de
    libertate, nu se ia în calculul stagiului minim în grad, cu excepţia
    cazurilor când, în urma rejudecării cauzei, instanţa competentă a pronunţat
    achitarea.
</p>
<p align="center">
    <strong>Dispoziţii finale şi tranzitorii</strong>
</p>
<p align="center">
    <strong>Articolul 100</strong>
</p>
<p>
    Sistemul de evidenţă şi gestiune a cadrelor militare în activitate şi în
    rezervă, metodologiile specifice acestor activităţi, în timp de pace şi în
    timp de război, precum şi organele care ţin evidenţa se stabilesc prin
    ordin al ministrului apărării naţionale, mai puţin situaţiile reglementate
    prin lege.
</p>
<p>
    Actul oficial prin care se dovedeşte, în cadrul Ministerului Apărării
    Naţionale, vechimea în serviciul militar şi funcţiile îndeplinite de
    ofiţeri, maiştri militari şi subofiţeri este fişa matricolă.
</p>
<p>
    Pentru cadrele militare în activitate din Ministerul Apărării Naţionale se
    emit legitimaţii militare, în condiţii stabilite prin ordin al ministrului
    apărării naţionale.
</p>
<p>
    Organizarea şi funcţionarea sistemului de recrutare şi selecţie a
    candidaţilor în vederea admiterii la studii/cursuri pentru formarea
    iniţială a cadrelor militare în activitate se stabilesc prin ordin al
    ministrului apărării naţionale.
</p>
<p align="center">
    <strong>Articolul 101</strong>
</p>
<p>
    Ofiţerii, maiştrii militari şi subofiţerii în activitate pot fi detaşaţi
    pentru a executa misiuni în afară Ministerului Apărării Naţionale.
    Detaşarea şi încetarea detaşării se fac prin ordin al ministrului apărării
    naţionale sau a comandanţilor stabiliţi de acesta.
</p>
<p>
    Pe timpul detaşării, ofiţerii, maiştrii militari şi subofiţerii au
    îndatoririle şi drepturile ce le revin din calitatea de cadru militar în
    activitate, precum şi obligaţia de a participa la pregătirea militară în
    cadrul unităţii stabilite de Ministerul Apărării Naţionale.
</p>
<p>
    În situaţia când interesele Ministerului Apărării Naţionale o impun, se
    poate dispune încetarea detaşării cadrelor militare prin ordinul
    ministrului apărării naţionale sau al comandanţilor stabiliţi de acesta.
</p>
<p align="center">
    <strong>Articolul 102</strong>
</p>
<p>
    Ofiţerii, maiştrii militari şi subofiţerii trecuţi în rezervă sau direct în
    retragere pot fi angajaţi în sectoarele civile pe baza licenţei sau
    diplomei de absolvire a instituţiilor militare de învăţământ ori li se iau
    în considerare studiile militare potrivit echivalării stabilite printr-un
    nomenclator elaborat de Ministerul Apărării Naţionale şi Ministerul
    Învăţământului, cu avizul Ministerului Muncii şi Protecţiei Sociale.
</p>
<p align="center">
    <strong>Articolul 103</strong>
</p>
<p>
    Ofiţerilor, maiştrilor militari şi subofiţerilor trecuţi în rezervă
    potrivit prevederilor art. 85 alin. 1 lit. c), d) şi e) şi care nu
    îndeplinesc condiţiile pentru a beneficia de pensie militară de serviciu li
    se va asigura, cu prioritate, recalificarea şi reintegrarea în muncă prin
    grija Ministerului Muncii şi Protecţiei Sociale.
</p>
<p align="center">
    <strong>Articolul 104</strong>
</p>
<p>
    În sensul prevederilor prezentei legi, prin termenul unităţi militare se
    înţelege companiile şi batalioanele corp aparte, precum şi toate eşaloanele
    de nivel similar şi superioare acestora.
</p>
<p>
    În caz de război unităţile considerate ca făcînd parte din zona acţiunilor
    militare se stabilesc de către Marele Cartier General.
</p>
<p align="center">
    <strong>Articolul 105</strong>
</p>
<p>
    Pentru menţinerea legăturii ofiţerilor, maiştrilor militari şi
    subofiţerilor în rezervă cu preocupările curente din cadrul armatei,
    Ministerul Apărării Naţionale organizează acţiuni de informare a acestora
    cu privire la diverse laturi şi aspecte ale dezvoltării ştiinţei şi artei
    militare, ale perfecţionării procesului de pregătire a trupelor şi ale
    înzestrării cu tehnică militară.
</p>
<p align="center">
    <strong>Articolul 105^1</strong>
</p>
<p>
    Cadrele militare au dreptul de a se asocia pentru a constitui, în
    condiţiile legii, case de ajutor reciproc care pot funcţiona în spaţii puse
    la dispoziţie, cu titlu gratuit şi cu suportarea costului utilităţilor de
    unităţile militare.
</p>
<p>
    Din comisia de cenzori a caselor de ajutor reciproc, înfiinţate potrivit
    alin. 1, face parte obligatoriu şi un reprezentant desemnat de
    comandantul/şeful unităţii militare respective.
</p>
<p align="center">
    <strong>Articolul 106</strong>
</p>
<p>
    Ofiţerii în activitate şi în rezervă care la data intrării în vigoare a
    prezentei legi au gradul de locotenent major vor fi înaintaţi în gradul
    următor astfel:
</p>
<p>
    a) cei care sunt în ultimul an de stagiu în grad ori au depăşit acest
    stagiu vor fi înaintaţi în gradul de căpitan;
</p>
<p>
    b) ofiţerii în activitate care au o vechime în grad de până la 4 ani şi
    ofiţerii în rezervă care au o vechime în grad de până la 5 ani vor fi
    înaintaţi în gradul de căpitan şi li se va prelungi stagiul în acest grad
    cu numărul de ani cu care au fost înaintaţi în grad mai devreme decât în
    condiţiile prevăzute de reglementările existente până la intrarea în
    vigoare a prezentei legi.
</p>
<p>
    Ofiţerii în activitate menţionaţi la alin. 1 se înaintează în gradul
    următor fără a li se cere să fie încadraţi în funcţii prevăzute în statele
    de organizare cu grad egal sau mai mare decât gradul de căpitan.Ofiţerilor
    care la aceeaşi data au gradul de locotenent li se prelungeşte stagiul în
    grad, peste cel stabilit la art. 94, cu 3 ani celor în activitate şi cu 4
    ani celor în rezervă.Ofiţerii în activitate menţionaţi la alin. 3, pe
    timpul celor 3 ani, dar numai până la prima modificare a soldelor de grad,
    vor primi solda de grad corespunzătoare gradului de locotenent major,
    prevăzută în reglementările existente la data intrării în vigoare a
    prezentei legi.
</p>
<p align="center">
    <strong>Articolul 107</strong>
</p>
<p>
    Dispoziţiile art. 55 alin. 1, referitoare la vechimea în funcţii prevăzute
    în statele de organizare cu grad superior celui pe care îl au ofiţerii ce
    urmează a fi înaintaţi în gradul următor, se aplică după un an de la
    intrarea în vigoare a prezentei legi.Dispoziţiile art. 56 alin. 1
    paragraful B lit. a) şi ale art. 80 se aplică ofiţerilor în activitate după
    o perioadă de 3 ani, timp în care se poate organiza şi examenul pentru
    gradul de maior, iar cele de la art. 56 alin. 1 paragraful B lit. b) şi
    paragraful C lit. c), după o perioadă de 6 ani de la intrarea în vigoare a
    prezentei legi.Timp de 3 ani de la intrarea în vigoare a prezentei legi,
    locotenent-coloneii şi căpitan-comandorii care nu îndeplinesc condiţiile
    prevăzute la art. 56 alin. 1 paragraful C lit. b) vor putea fi înaintaţi în
    gradul următor în urma promovării examenului pentru gradul de colonel,
    respectiv de comandor. În termen de 5 ani de la intrarea în vigoare a
    prezentei legi se vor elimina toate cazurile care intră sub incidenţa
    dispoziţiilor art. 74 alin. 2. Ofiţerii cu grade de la căpitan la
    locotenent-colonel şi căpitan-comandor care, în termen de un an de la data
    intrării în vigoare a prezentei legi, sunt trecuţi în rezervă sau direct în
    retragere prin aplicarea art. 85 lit. a)-e) şi nu au fost înaintaţi în grad
    pe timpul cât s-au aflat în activitate, deoarece nu erau încadraţi pe
    funcţii corespunzătoare noilor grade, la trecerea în rezervă sau direct în
    retragere vor fi înaintaţi în gradul următor, chiar dacă nu îndeplinesc
    condiţiile prevăzute la cap. IV, cu excepţia celor de la art. 54.
</p>
<p>
    Cadrelor militare li se conferă ordinul sau medalia "Meritul Militar",
    conform prevederilor legale în vigoare, acordându-li-se brevete care atestă
    decoraţiile conferite.
</p>
<p>
    Locotenent-coloneii şi căpitan-comandorii fără studii militare superioare,
    încadraţi pe funcţii de colonel, respectiv comandor, vor putea fi avansaţi
    în gradul următor, în timp de 3 ani de la intrarea în vigoare a prezentei
    legi, în urma promovării examenului pentru gradul de colonel, respectiv
    comandor, chiar dacă nu îndeplinesc condiţiile prevăzute la art. 56 alin. 1
    paragraful C lit. a).
</p>
<p align="center">
    <strong>Articolul 108</strong>
</p>
<p>
    Prevederile din prezenta lege referitoare la cadrele militare în rezervă şi
    în retragere, pensionari militari, se aplică şi celor aflaţi în plată la
    intrarea în vigoare a prezentei legi.
</p>
<p align="center">
    <strong>Articolul 108^1</strong>
</p>
<p>
    Gradul de sergent acordat militarilor din Ministerul Apărării Naţionale
    până la data intrării în vigoare a prezentei ordonanţe de urgenţă se
    înlocuieşte cu gradul de caporal.
</p>
<p align="center">
    <strong>Articolul 109</strong>
</p>
<p>
    Dispoziţiile prezentei legi se aplică în mod corespunzător şi ofiţerilor,
    maiştrilor militari şi subofiţerilor aparţinând Ministerului de Interne şi
    Ministerului Justiţiei, respectiv serviciilor de stat specializate în
    domeniul apărării şi siguranţei naţionale care, potrivit legii, au în
    structurile proprii personal militar.
</p>
<p>
    Competențele ministrului apărării naţionale, stabilite prin prezenta lege,
    sunt îndeplinite, după caz, de conducătorii ministerelor şi serviciilor
    respective; cele ale şefului Statului Major General, de către înlocuitorii
    de drept ai acestora, iar cele ale colegiului ministerului, de consiliul
    director.
</p>
<p>
    Dispoziţiile art. 2 alin. 2^1 lit. A, lit. A^1, lit. B lit. a) şi b), art.
    5 alin. 2, art. 35^1 alin. 4 şi 5, art. 36 alin. 1 lit. i) şi alin. 3, art.
    37 lit. e), art. 38alin. 2, art. 40alin. 2, art. 41^1, art. 48 alin. 2 şi
    3, art. 50alin. 5, art. 51alin. 2, art. 53 alin. 4, art. 75alin. 2-4, art.
    75^1, art. 77^1 alin. 2, art. 85 alin. 1 lit. e^1) şi art. 108^1 se aplică
    în exclusivitate cadrelor militare din structurile Ministerului Apărării
    Naţionale.
</p>
<p>
    Numirea, promovarea, transferul, limitele de vârstă, condiţiile de
    menţinere în magistratură şi celelalte aspecte ale carierei profesionale a
    judecătorilor şi procurorilor militari sunt supuse normelor care
    reglementează statutul judecătorilor şi procurorilor.
</p>
<p>
    Dispoziţiile art. 27 se aplică în exclusivitate cadrelor militare din
    Ministerul Apărării Naţionale, Ministerul Administraţiei şi Internelor,
    Serviciul de Telecomunicaţii Speciale, Serviciul de Protecţie şi Pază şi
    Serviciul Român de Informaţii.
</p>
<p>
    Dispoziţiile art. 85 alin. 1 lit. n) se aplică în exclusivitate cadrelor
    militare din Ministerul Apărării Naţionale, Ministerul Administraţiei şi
    Internelor, Serviciul de Telecomunicaţii Speciale, Serviciul Român de
    Informaţii şi Serviciul de Informaţii Externe.
</p>
<p>
    Dispoziţiile art. 77^1 şi art. 78 alin. 3 se aplică în exclusivitate
    cadrelor militare din Ministerul Apărării Naţionale, Ministerul
    Administraţiei şi Internelor, Serviciul Român de Informaţii, Serviciul de
    Protecţie şi Pază şi Serviciul de Telecomunicaţii Speciale.
</p>
<p>
    Dispoziţiile art. 85 alin. 6 se aplică în exclusivitate cadrelor militare
    din Ministerul Apărării Naţionale, Ministerul Administraţiei şi Internelor,
    Serviciul de Informaţii Externe, Serviciul Român de Informaţii şi Serviciul
    de Telecomunicaţii Speciale.
</p>
<p>
    Dispoziţiile art. 87 alin. 1 se aplică în exclusivitate cadrelor militare
    din Ministerul Administraţiei şi Internelor şi Serviciul de Protecţie şi
    Pază.
</p>
<p>
    Dispoziţiile art. 87 alin. 2 se aplică în exclusivitate cadrelor militare
    din Ministerul Apărării Naţionale, Serviciul Român de Informaţii, Serviciul
    de Informaţii Externe şi Serviciul de Telecomunicaţii Speciale.
</p>
<p>
    Dispoziţiile art. 87 alin. 3 se aplică în exclusivitate cadrelor militare
    din Ministerul Apărării Naţionale, Serviciul Român de Informaţii, Serviciul
    de Informaţii Externe şi Serviciul de Telecomunicaţii Speciale.
</p>
<p>
    Dispoziţiile art. 89 alin. 5 se aplică în exclusivitate cadrelor militare
    din Ministerul Apărării Naţionale, Serviciul de Informaţii Externe şi
    Ministerul Afacerilor Interne.
</p>
<p>
    Dispoziţiile art. 2 alin. 2, art. 35^13, art. 51 alin. 1, art. 52 alin. 1,
    art. 55 alin. 1 privind durata îndeplinirii funcţiei, art. 56-59, art. 62,
    art. 77^1 alin. 1, art. 80 şi 81 nu se aplică ofiţerilor, maiştrilor
    militari şi subofiţerilor din structurile Ministerului Apărării Naţionale.
</p>
<p>
    Abrogat.
</p>
<p>
    Dispoziţiile art. 91^1 se aplică şi Serviciului Român de Informaţii şi
    Serviciului de Protecţie şi Pază.
</p>
<p>
    Dispoziţiile art. 95 nu se aplică ofiţerilor, maiştrilor militari şi
    subofiţerilor din Serviciul Român de Informaţii, Serviciul de Informaţii
    Externe, Serviciul de Telecomunicaţii Speciale şi Serviciul de Protecţie şi
    Pază.
</p>
<p align="center">
    <strong>Articolul 110</strong>
</p>
<p>
    Transferul cadrelor militare între ministerele şi serviciile menţionate la
    art. 109 se face prin ordin al conducătorului instituţiei din subordinea
    căreia se transferă, la cererea ori cu acordul conducătorului instituţiei
    la care se transferă.În situaţia transferului prevăzut la alin. 1, precum
    şi în cazul rechemării în activitate în termen de 60 de zile de la data
    trecerii în rezervă, instituţia la care se transferă/încadrează preia toate
    drepturile şi obligaţiile care decurg din contractele şi angajamentele
    încheiate potrivit art. 41^1, 41^2, 91 şi 91^1 şi aflate în derulare la
    data transferului/încadrării.
</p>
<p>
    În situaţiile prevăzute la alin. 2, instituţia la care se
    transferă/încadrează acordă în continuare drepturile prevăzute la art. 20^1
    alin. 2^1.
</p>
<p align="center">
    <strong>Articolul 111</strong>
</p>
<p>
    Miniştrii, secretarii de stat, subsecretarii de stat şi asimilaţii
    acestora, civili, din Ministerul Apărării Naţionale şi instituţiile
    prevăzute la art. 109, beneficiază de drepturile materiale stabilite în
    prezenta lege pentru cadrele militare în activitate, echivalente ofiţerilor
    cu grad de general, respectiv de amiral.
</p>
<p align="center">
    <strong>Articolul 112</strong>
</p>
<p>
    În sensul prevederilor prezentei legi, familia cadrelor militare cuprinde
    soţul, copiii şi părinţii aflaţi în întreţinerea legală a acestora.
</p>
        </div>
           <button onClick={()=>setGameState("cati")} className='back'>Înapoi</button>
        </div>
        <Footer />
</div>
    );
};

export default CatI7;
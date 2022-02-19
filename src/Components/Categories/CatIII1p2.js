import React, {useState, useContext} from 'react';
import { QuizContext } from '../../Helpers/Context';import "./MainCat.css";
import Nav from '../Nav/Nav';
import Footer from '../Nav/Footer';

const CatIII1p2 = () => {
    const {score, setScore, setGameState, test} = useContext(QuizContext);
    return (
        <div className="MenuContainer">
            <Nav/>
            <div className="Menu">
            <div className="Text">
            <p align="center">
    Convenția din 4 noiembrie 1950 pentru apărarea drepturilor omului și a
    libertăților fundamentale, actualizată ( Titlul I Drepturi și libertăți)
</p>
<p align="center">
    <strong>Articolul 2</strong>
</p>
<p align="center">
    <strong>Dreptul la viaţă</strong>
</p>
<p>
    1. Dreptul la viaţă al oricărei persoane este protejat prin lege. Moartea
    nu poate fi cauzată cuiva în mod intenţionat, decât în executarea unei
    sentinţe capitale pronunţate de un tribunal în cazul în care infracţiunea
    este sancţionată cu aceasta pedeapsă prin lege.
</p>
<p>
    2. Moartea nu este considerată ca fiind cauzată prin încălcarea acestui
    articol în cazurile în care aceasta ar rezulta dintr-o recurgere absolut
    necesară la forţă:
</p>
<p>
    a) pentru a asigura apărarea oricărei persoane împotriva violenţei ilegale;
</p>
<p>
    b) pentru a efectua o arestare legală sau pentru a împiedica evadarea unei
    persoane legal deţinute;
</p>
<p>
    c) pentru a reprima, conform legii, tulburări violente sau o insurecţie.
</p>
<p align="center">
    <strong>Articolul 3</strong>
</p>
<p align="center">
    <strong>Interzicerea torturii</strong>
</p>
<p>
    Nimeni nu poate fi supus torturii, nici pedepselor sau tratamentelor
    inumane ori degradante.
</p>
<p align="center">
    <strong>Articolul 4</strong>
</p>
<p align="center">
    <strong>Interzicerea sclaviei şi a muncii forţate</strong>
</p>
<p>
    1. Nimeni nu poate fi ţinut în sclavie sau în condiţii de aservire.
</p>
<p>
    2. Nimeni nu poate fi constrâns să execute o muncă forţată sau obligatorie.
</p>
<p>
    3. Nu se consideră muncă forţată sau obligatorie în sensul prezentului
    articol:
</p>
<p>
    a) orice muncă impusă în mod normal unei persoane supuse detenţiei în
    condiţiile prevăzute de art. 5 din prezenta convenţie sau în timpul în care
    se află în libertate condiţionată;
</p>
<p>
    b) orice serviciu cu caracter militar sau, în cazul celor care refuză să
    satisfacă serviciul militar din motive de conştiinţă, în ţările în care
    acest lucru este recunoscut ca legitim, un alt serviciu în locul
    serviciului militar obligatoriu;
</p>
<p>
    c) orice serviciu impus în situaţii de criză sau de calamităţi care
    ameninţă viaţă sau bunăstarea comunităţii;
</p>
<p>
    d) orice muncă sau serviciu care face parte din obligaţiile civile normale.
</p>
<p align="center">
    <strong>Articolul 5</strong>
</p>
<p align="center">
    <strong>Dreptul la libertate şi la siguranţă</strong>
</p>
<p>
    1. Orice persoană are dreptul la libertate şi la siguranţă. Nimeni nu poate
    fi lipsit de libertatea sa, cu excepţia următoarelor cazuri şi potrivit
    căilor legale:
</p>
<p>
    a) dacă este deţinut legal pe baza condamnării pronunţate de către un
    tribunal competent;
</p>
<p>
    b) dacă a făcut obiectul unei arestări sau al unei deţineri legale pentru
    nesupunerea la o hotărâre pronunţată, conform legii, de către un tribunal
    ori în vederea garantării executării unei obligaţii prevăzute de lege;
</p>
<p>
    c) dacă a fost arestat sau reţinut în vederea aducerii sale în faţa
    autorităţii judiciare competente, atunci când există motive verosimile de a
    bănui că a săvârşit o infracţiune sau când există motive temeinice de a
    crede în necesitatea de a-l împiedica sa săvârşească o infracţiune sau să
    fugă după săvârşirea acesteia;
</p>
<p>
    d) dacă este vorba de detenţia legală a unui minor, hotărâtă pentru
    educaţia sa sub supraveghere sau despre detenţia sa legală, în scopul
    aducerii sale în faţa autorităţii competente;
</p>
<p>
    e) dacă este vorba despre detenţia legală a unei persoane susceptibile să
    transmită o boala contagioasă, a unui alienat, a unui alcoolic, a unui
    toxicoman sau a unui vagabond;
</p>
<p>
    f) dacă este vorba despre arestarea sau detenţia legală a unei persoane
    pentru a o împiedica să pătrundă în mod ilegal pe teritoriu sau împotriva
    căreia se află în curs o procedură de expulzare ori de extrădare.
</p>
<p>
    2. Orice persoană arestată trebuie să fie informată, în termenul cel mai
    scurt şi într-o limbă pe care o înţelege, asupra motivelor arestării sale
    şi asupra oricărei acuzaţii aduse împotriva sa.
</p>
<p>
    3. Orice persoană arestată sau deţinută, în condiţiile prevăzute de
    paragraful 1 lit. c) din prezentul articol, trebuie adusă de îndată
    înaintea unui judecător sau a altui magistrat împuternicit prin lege cu
    exercitarea atribuţiilor judiciare şi are dreptul de a fi judecată într-un
    termen rezonabil sau eliberată în cursul procedurii. Punerea în libertate
    poate fi subordonată unei garanţii care să asigure prezentarea persoanei în
    cauză la audiere.
</p>
<p>
    4. Orice persoană lipsită de libertatea sa prin arestare sau deţinere are
    dreptul să introducă un recurs în faţa unui tribunal, pentru ca acesta să
    statueze într-un termen scurt asupra legalităţii deţinerii sale şi să
    dispună eliberarea sa dacă deţinerea este ilegală.
</p>
<p>
    5. Orice persoană care este victima unei arestări sau a unei deţineri în
    condiţii contrare dispoziţiilor acestui articol are dreptul la reparaţii.
</p>
<p align="center">
    <strong>Articolul 6</strong>
</p>
<p align="center">
    <strong>Dreptul la un proces echitabil</strong>
</p>
<p>
    1. Orice persoană are dreptul la judecarea în mod echitabil, în mod public
    şi într-un termen rezonabil a cauzei sale, de către o instanţă independentă
    şi imparţială, instituită de lege, care va hotărâ fie asupra încălcării
    drepturilor şi obligaţiilor sale cu caracter civil, fie asupra temeiniciei
    oricărei acuzaţii în materie penală îndreptate împotriva sa. Hotărârea
    trebuie sa fie pronunţată în mod public, dar accesul în sala de şedinţe
    poate fi interzis presei şi publicului pe întreagă durata a procesului sau
    a unei părţi a acestuia în interesul moralităţii, al ordinii publice ori al
    securităţii naţionale într-o societate democratică, atunci când interesele
    minorilor sau protecţia vieţii private a părţilor la proces o impun, sau în
    măsura considerată absolut necesară de către instanţă atunci când, în
    împrejurări speciale, publicitatea ar fi de natură să aducă atingere
    intereselor justiţiei.
</p>
<p>
    2. Orice persoană acuzată de o infracţiune este prezumată nevinovată până
    ce vinovăţia va fi legal stabilită.
</p>
<p>
    3. Orice acuzat are, în special, dreptul:
</p>
<p>
    a) să fie informat, în termenul cel mai scurt, într-o limbă pe care o
    înţelege şi în mod amănunţit, asupra naturii şi cauzei acuzaţiei aduse
    împotriva sa;
</p>
<p>
    b) să dispună de timpul şi de înlesnirile necesare pregătirii apărării
    sale;
</p>
<p>
    c) să se apere el însuşi sau să fie asistat de un apărător ales de el şi,
    dacă nu dispune de mijloacele necesare pentru a plăti un apărător, să poată
    fi asistat în mod gratuit de un avocat din oficiu, atunci când interesele
    justiţiei o cer;
</p>
<p>
    d) să întrebe sau să solicite audierea martorilor acuzării şi să obţină
    citarea şi audierea martorilor apărării în aceleaşi condiţii ca şi martorii
    acuzării;
</p>
<p>
    e) să fie asistat în mod gratuit de un interpret, dacă nu înţelege sau nu
    vorbeşte limba folosită la audiere.
</p>
<p align="center">
    <strong>Articolul 7</strong>
</p>
<p align="center">
    <strong>Nici o pedeapsă fără lege</strong>
</p>
<p>
    1. Nimeni nu poate fi condamnat pentru o acţiune sau o omisiune care, în
    momentul în care a fost săvârşită, nu constituia o infracţiune, potrivit
    dreptului naţional şi internaţional. De asemenea, nu se poate aplica o
    pedeapsă mai severă decât aceea care era aplicabilă în momentul săvârşirii
    infracţiunii.
</p>
<p>
    2. Prezentul articol nu va aduce atingere judecării şi pedepsirii unei
    persoane vinovate de o acţiune sau de o omisiune care, în momentul
    săvârşirii sale, era considerată infracţiune potrivit principiilor generale
    de drept recunoscute de naţiunile civilizate.
</p>
<p align="center">
    <strong>Articolul 8</strong>
</p>
<p align="center">
    <strong>Dreptul la respectarea vieţii private şi de familie</strong>
</p>
<p>
    1. Orice persoană are dreptul la respectarea vieţii sale private şi de
    familie, a domiciliului său şi a corespondenţei sale.
</p>
<p>
    2. Nu este admis amestecul unei autorităţi publice în exercitarea acestui
    drept decât în măsura în care acest amestec este prevăzut de lege şi dacă
    constituie o măsură care, într-o societate democratică, este necesară
    pentru securitatea naţională, siguranţă publică, bunăstarea economică a
    ţării, apărarea ordinii şi prevenirea faptelor penale, protejarea sănătăţii
    sau a moralei, ori protejarea drepturilor şi libertăţilor altora.
</p>
<p align="center">
    <strong>Articolul 9</strong>
</p>
<p align="center">
    <strong>Libertatea de gândire, de conştiinţă şi de religie</strong>
</p>
<p>
    1. Orice persoană are dreptul la libertatea de gândire, de conştiinţă şi de
    religie; acest drept include libertatea de a-şi schimba religia sau
    convingerea, precum şi libertatea de a-şi manifesta religia sau convingerea
    în mod individual sau în colectiv, în public sau în particular, prin cult,
    învăţămînt, practici şi îndeplinirea ritualurilor.
</p>
<p>
    2. Libertatea de a-şi manifesta religia sau convingerile nu poate face
    obiectul altor restrângeri decât acelea care, prevăzute de lege, constituie
    măsuri necesare, într-o societate democratică, pentru siguranţă publică,
    protecţia ordinii, a sănătăţii sau a moralei publice ori pentru protejarea
    drepturilor şi libertăţilor altora.
</p>
<p align="center">
    <strong>Articolul 10</strong>
</p>
<p align="center">
    <strong>Libertatea de exprimare</strong>
</p>
<p>
    1. Orice persoană are dreptul la libertatea de exprimare. Acest drept
    cuprinde libertatea de opinie şi libertatea de a primi sau de a comunica
    informaţii ori idei fără amestecul autorităţilor publice şi fără a ţine
    seama de frontiere. Prezentul articol nu împiedică statele sa supună
    societăţile de radiodifuziune, de cinematografie sau de televiziune unui
    regim de autorizare.
</p>
<p>
    2. Exercitarea acestor libertăţi ce comportă îndatoriri şi responsabilităţi
    poate fi supusă unor formalităţi, condiţii, restrângeri sau sancţiuni
    prevăzute de lege, care constituie măsuri necesare, într-o societate
    democratică, pentru securitatea naţională, integritatea teritorială sau
    siguranţă publică, apărarea ordinii şi prevenirea infracţiunilor, protecţia
    sănătăţii sau a moralei, protecţia reputaţiei sau a drepturilor altora
    pentru a împiedica divulgarea de informaţii confidenţiale sau pentru a
    garanta autoritatea şi imparţialitatea puterii judecătoreşti.
</p>
<p align="center">
    <strong>Articolul 11</strong>
</p>
<p align="center">
    <strong>Libertatea de întrunire şi de asociere</strong>
</p>
<p>
    1. Orice persoană are dreptul la libertatea de întrunire paşnică şi la
    libertatea de asociere, inclusiv dreptul de a constitui cu alţii sindicate
    şi de a se afilia la sindicate pentru apărarea intereselor sale.
</p>
<p>
    2. Exercitarea acestor drepturi nu poate face obiectul altor restrângeri
    decât acelea care, prevăzute de lege, constituie măsuri necesare, într-o
    societate democratică, pentru securitatea naţională, siguranţă publică,
    apărarea ordinii şi prevenirea infracţiunilor, protejarea sănătăţii sau a
    moralei ori pentru protecţia drepturilor şi libertăţilor altora. Prezentul
    articol nu interzice ca restrângeri legale să fie impuse exercitării
    acestor drepturi de către membrii forţelor armate, ai poliţiei sau ai
    administraţiei de stat.
</p>
<p align="center">
    <strong>Articolul 12</strong>
</p>
<p align="center">
    <strong>Dreptul la căsătorie</strong>
</p>
<p>
    Începând cu vârsta stabilită prin lege, bărbatul şi femeia au dreptul de a
    se căsători şi de a întemeia o familie conform legislaţiei naţionale ce
    reglementează exercitarea acestui drept.
</p>
<p align="center">
    <strong>Articolul 13</strong>
</p>
<p align="center">
    <strong>Dreptul la un recurs efectiv</strong>
</p>
<p>
    Orice persoană, ale carei drepturi şi libertăţi recunoscute de prezenta
    convenţie au fost încălcate, are dreptul sa se adreseze efectiv unei
    instanţe naţionale, chiar şi atunci când încălcarea s-ar datora unor
    persoane care au acţionat în exercitarea atribuţiilor lor oficiale.
</p>
<p align="center">
    <strong>Articolul 14</strong>
</p>
<p align="center">
    <strong>Interzicerea discriminării</strong>
</p>
<p>
    Exercitarea drepturilor şi libertăţilor recunoscute de prezenta convenţie
    trebuie sa fie asigurată fără nici o deosebire bazată, în special, pe sex, rasa, culoare, limba, religie, opinii politice sau orice alte opinii, origine naţională sau socială, apartenenţa la o minoritate naţională, avere naştere sau orice altă situaţie.
</p>
<p align="center">
    <strong>Articolul 15</strong>
</p>
<p align="center">
    <strong>Derogare în caz de stare de urgenţă</strong>
</p>
<p>
    1. În caz de război sau de alt pericol public ce ameninţă viaţă naţiunii,
    orice înaltă parte contractantă poate lua măsuri care derogă de la
    obligaţiile prevăzute de prezenta convenţie, în măsura strictă în care
    situaţia o cere şi cu condiţia ca aceste măsuri să nu fie în contradicţie
    cu alte obligaţii care decurg din dreptul internaţional.
</p>
<p>
    2. Dispoziţia precedenta nu îngăduie nici o derogare de la art. 2, cu
    excepţia cazului de deces rezultând din acte licite de război, şi nici de
    la art. 3, art. 4 paragraful 1 şi art. 7.
</p>
<p>
    3. Orice înaltă parte contractantă ce exercită acest drept de derogare îl
    informează pe deplin pe secretarul general al Consiliului Europei cu
    privire la măsurile luate şi la motivele care le-au determinat. Aceasta
    trebuie, de asemenea, sa informeze pe secretarul general al Consiliului
    Europei şi asupra datei la care aceste măsuri au încetat a fi în vigoare şi
    de la care dispoziţiile convenţiei devin din nou deplin aplicabile.
</p>
<p align="center">
    <strong>Articolul 16</strong>
</p>
<p align="center">
    <strong>Restricţii ale activităţii politice a străinilor</strong>
</p>
<p>
    Nici o dispoziţie a art. 10, 11 şi 14 nu poate fi considerată ca
    interzicând înaltele părţi contractante sa impună restrângeri activităţii
    politice a străinilor.
</p>
<p align="center">
    <strong>Articolul 17</strong>
</p>
<p align="center">
    <strong>Interzicerea abuzului de drept</strong>
</p>
<p>
    Nici o dispoziţie din prezenta convenţie nu poate fi interpretată ca
    implicând, pentru un stat, un grup sau un individ, un drept oarecare de a
    desfăşura o activitate sau de a îndeplini un act ce urmăreşte distrugerea
    drepturilor sau a libertăţilor recunoscute de prezenta convenţie sau de a
    aduce limitări mai ample acestor drepturi şi libertăţi decât acelea
    prevăzute de aceasta convenţie.
</p>
<p align="center">
    <strong>Articolul 18</strong>
</p>
<p align="center">
    <strong>Limitarea folosirii restrângerii drepturilor</strong>
</p>
<p>
    Restrângerile care, în termenii prezentei convenţii, sunt aduse
    respectivelor drepturi şi libertăţi nu pot fi aplicate decât în scopul
    pentru care ele au fost prevăzute.
</p>
</div>
               <button onClick={()=>setGameState("catiii1")} className='back'>Înapoi</button>
        </div>
        <Footer />
</div>
    );
};

export default CatIII1p2;
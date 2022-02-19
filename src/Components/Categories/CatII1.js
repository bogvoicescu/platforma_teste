import React, {useState, useContext} from 'react';
import { QuizContext } from '../../Helpers/Context';
import "./MainCat.css";
import "../../App.css"
import Nav from '../Nav/Nav';
import Footer from '../Nav/Footer';

function CatII1() {
    const {score, setScore, setGameState, test} = useContext(QuizContext);
    return (
    <div className="MenuContainer">

        <Nav/>
        <div className="Menu">
        <div className="Text">
        <h2 align="center">
Parlamentul
</h2>
<p>
    Puterea legislativă este reprezentantă de Parlament. Acesta este organul
    reprezentativ suprem al poporului român şi unica autoritate legiuitoare a
    țării. Parlamentul este alcătuit din Camera Deputaţilor şi Senat, care sunt
    alese prin vot universal, egal, direct, secret şi liber exprimat, potrivit
    legii electorale.
</p>
<p>
    Camera Deputaţilor şi Senatul sunt alese pentru un mandat de 4 ani, care se
    prelungeşte de drept în stare de mobilizare, de război, de asediu sau de
    urgență, până la încetarea acestora.
</p>
<p>
    Cele două camere se întrunesc în două sesiuni ordinare pe an. Prima sesiune
    începe în luna februarie şi nu poate depăşi sfârşitul lunii iunie. A doua
    sesiune începe în luna septembrie şi nu poate depăşi sfârşitul lunii
    decembrie. Se pot întruni şi în sesiuni extraordinare, la cererea
    Preşedintelui României, a biroului permanent al fiecărei Camere ori a cel
    puţin o treime din numărul deputaţilor sau al senatorilor. Convocarea
    Camerelor se face de preşedinţii acestora.
</p>
<p>
    Camera Deputaţilor şi Senatul adoptă legi, hotărâri şi moţiuni, în prezența
    majorităţii membrilor. Şedinţele celor două Camere sunt publice, dar pot
    hotărî ca anumite şedinţe să fie secrete.
</p>
<p>
    Parlamentul adoptă:
</p>
<p>
    - legi constituţionale (cele de revizuire a Constituţiei),
</p>
<p>
    - legi organice (sistemul electoral; organizarea şi funcţionarea
    Autorităţii Electorale Permanente; organizarea, funcţionarea şi finanţarea
    partidelor politice; organizarea şi desfăşurarea referendumului;
    organizarea Guvernului şi a Consiliului Suprem de Apărare a Țării; regimul
    stării de mobilizare parţială sau totală a forţelor armate şi al stării de
    război; regimul stării de asediu şi al stării de urgenta; infracţiunile,
    pedepsele şi regimul executării acestora; acordarea amnistiei sau a
    graţierii colective; regimul juridic general al proprietăţii şi al
    moştenirii; organizarea generală a învăţământului; organizarea
    administraţiei publice locale, a teritoriului, precum şi regimul general
    privind autonomia locală ș.a.) şi
</p>
<p>
    - legi ordinare.
</p>
<p>
    <strong></strong>
</p>
<p>
    <strong>Ini</strong>
    <strong>ț</strong>
    <strong>iativa legislativ</strong>
    <strong>ă</strong>
    <strong></strong>
</p>
<p>
    Iniţiativa legislativă aparţine, după caz, Guvernului, deputaţilor,
    senatorilor sau unui număr de cel puţin 100.000 de cetăţeni cu drept de
    vot. Cetăţenii care îşi manifesta dreptul la iniţiativa legislativă trebuie
    să provină din cel puţin un sfert din judeţele tarii, iar în fiecare din
    aceste judeţe, respectiv în municipiul Bucureşti, trebuie să fie
    înregistrate cel puţin 5.000 de semnături în sprijinul acestei iniţiative.
    Nu pot face obiectul iniţiativei legislative a cetăţenilor problemele
    fiscale, cele cu caracter internaţional, amnistia şi graţierea.
</p>
<p>
    Adoptarea legilor și a hotărârilor
</p>
<p>
    Legile organice şi hotărârile privind regulamentele Camerelor se adoptă cu
    votul majorităţii membrilor fiecărei Camere. Legile ordinare şi hotărârile
    se adoptă cu votul majorităţii membrilor prezenţi din fiecare Cameră.
</p>
<p>
    <strong></strong>
</p>
<p>
    <strong>Promulgarea legii</strong>
</p>
<p>
    Legea se trimite, spre promulgare, Preşedintelui României. Promulgarea
    legii se face în termen de cel mult 20 de zile de la primire. Înainte de
    promulgare, Preşedintele poate cere Parlamentului, o singură dată,
    reexaminarea legii. Dacă Preşedintele a cerut reexaminarea legii ori dacă
    s-a cerut verificarea constituţionalităţii ei, promulgarea legii se face în
    cel mult 10 zile de la primirea legii adoptate după reexaminare sau de la
    primirea deciziei Curţii Constituţionale, prin care i s-a confirmat
    constituţionalitatea.
</p>
<p>
    <strong>Intrarea în vigoare a legii</strong>
</p>
<p>
    Legea se publică în Monitorul Oficial al României şi intră în vigoare la 3
    zile de la data publicării sau la o dată ulterioară prevăzută în textul ei.
</p>
<p>
    <strong>Mandatul reprezentativ</strong>
</p>
<p>
    În exercitarea mandatului, deputaţii şi senatorii sunt în serviciul
    poporului. Orice mandat imperativ este nul.
</p>
<p>
    Deputaţii şi senatorii intră în exerciţiul mandatului la data întrunirii
    legale a Camerei din care fac parte, sub condiţia validării alegerii şi a
    depunerii jurământului. Jurământul se stabileşte prin lege organică.
</p>
<p>
    Calitatea de deputat sau de senator încetează la data întrunirii legale a
    Camerelor nou alese sau în caz de demisie, de pierdere a drepturilor
    electorale, de incompatibilitate ori de deces.
</p>
<p>
    <strong>Incompatibilităţi</strong>
</p>
<p>
    Nimeni nu poate fi, în acelaşi timp, deputat şi senator.
</p>
<p>
    Calitatea de deputat sau de senator este incompatibilă cu exercitarea
    oricărei funcţii publice de autoritate, cu excepţia celei de membru al
    Guvernului. Alte incompatibilităţi se stabilesc prin lege organică.
</p>
<p>
    <strong>Imunitatea parlamentară</strong>
</p>
<p>
    Deputaţii şi senatorii nu pot fi traşi la răspundere juridică pentru
    voturile sau pentru opiniile politice exprimate în exercitarea mandatului.
</p>
<p>
    Deputaţii şi senatorii pot fi urmăriţi şi trimişi în judecata penală pentru
    fapte care nu au legătură cu voturile sau cu opiniile politice exprimate în
    exercitarea mandatului, dar nu pot fi perchezitionati, reţinuţi sau
    arestaţi fără încuviinţarea Camerei din care fac parte, după ascultarea
    lor. Urmărirea şi trimiterea în judecata penală se pot face numai de către
    Parchetul de pe lângă Înaltă Curte de Casaţie şi Justiţie. Competenţa de
    judecată aparţine Înaltei Curţi de Casaţie şi Justiţie.
</p>
<p>
    În caz de infracţiune flagrantă, deputaţii sau senatorii pot fi reţinuţi şi
    supuşi percheziţiei. Ministrul justiţiei îl va informa neîntârziat pe
    preşedintele Camerei asupra reţinerii şi a percheziţiei. În cazul în care
    Camera sesizată constata că nu există temei pentru reţinere, va dispune
    imediat revocarea acestei măsuri.
</p>
<p>
    <strong>Consiliul Legislativ</strong>
</p>
<p>
    Consiliul Legislativ este organ consultativ de specialitate al
    Parlamentului, care avizează proiectele de acte normative în vederea
    sistematizării, unificării și coordonării întregii legislații. El ține
    evidența oficială a legislației României.
</p>
<p>
    Înființarea, organizarea și funcționarea Consiliului Legislativ se
    stabilesc prin lege organică.
</p>
       </div>
            <button onClick={()=>setGameState("catii")} className='back'>Înapoi</button>
        </div>
        <Footer />
</div>
    );
};

export default CatII1;
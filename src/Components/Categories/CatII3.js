import React, {useState, useContext} from 'react';
import { QuizContext } from '../../Helpers/Context';
import "./MainCat.css";
import "../../App.css"
import Nav from '../Nav/Nav';
import Footer from '../Nav/Footer';

function CatII3() {
    const {score, setScore, setGameState, test} = useContext(QuizContext);
    return (
    <div className="MenuContainer">

        <Nav/>
        <div className="Menu">
        <div className="Text">
        <h2 align="center">
Guvernul
</h2>
<p>
    <strong>Rolul și structura</strong>
</p>
<p>
    Guvernul, potrivit programului sau de guvernare acceptat de Parlament,
    asigură realizarea politicii interne şi externe a țării şi exercită
    conducerea generală a administraţiei publice. Guvernul este alcătuit din
    prim-ministru, miniştri şi alţi membri stabiliţi prin lege organică.
</p>
<p>
    <strong>Investitura</strong>
</p>
<p>
    Preşedintele României desemnează un candidat pentru funcţia de
    prim-ministru, în urma consultării partidului care are majoritatea absolută
    în Parlament ori, dacă nu există o asemenea majoritate, a partidelor
    reprezentate în Parlament. Candidatul pentru funcţia de prim-ministru va
    cere, în termen de 10 zile de la desemnare, votul de încredere al
    Parlamentului asupra programului şi a întregii liste a Guvernului.
    Programul şi lista Guvernului se dezbat de Camera Deputaţilor şi de Senat,
    în şedinţă comună. Parlamentul acordă încredere Guvernului cu votul
    majorităţii deputaţilor şi senatorilor.
</p>
<p>
    <strong>Incompatibilită</strong>
    <strong>ț</strong>
    <strong>i</strong>
</p>
<p>
    Funcţia de membru al Guvernului este incompatibilă cu exercitarea altei
    funcţii publice de autoritate, cu excepţia celei de deputat sau de senator.
    De asemenea, ea este incompatibilă cu exercitarea unei funcţii de
    reprezentare profesională salarizate în cadrul organizaţiilor cu scop
    comercial.
</p>
<p>
    <strong></strong>
</p>
<p>
    <strong>Primul-ministru</strong>
</p>
<p>
    Primul-ministru conduce Guvernul şi coordonează activitatea membrilor
    acestuia, respectând atribuţiile ce le revin. De asemenea, prezintă Camerei
    Deputaţilor sau Senatului rapoarte şi declaraţii cu privire la politica
    Guvernului, care se dezbat cu prioritate. Preşedintele României nu îl poate
    revoca pe primul-ministru.
</p>
<p>
    <strong>Actele Guvernului</strong>
</p>
<p>
    Guvernul adoptă hotărâri şi ordonanţe. Hotărârile se emit pentru
    organizarea executării legilor. Ordonanţele se emit în temeiul unei legi
    speciale de abilitare, în limitele şi în condiţiile prevăzute de aceasta.
    Hotărârile şi ordonanţele adoptate de Guvern se semnează de
    primul-ministru, se contrasemnează de miniştrii care au obligaţia punerii
    lor în executare şi se publică în Monitorul Oficial al României.
    Nepublicarea atrage inexistența hotărârii sau a ordonanţei. Hotărârile care
    au caracter militar se comunică numai instituţiilor interesate.
</p>
<p>
    <strong></strong>
</p>
<p>
    <strong>Încetarea mandatului</strong>
</p>
<p>
    Guvernul îşi exercită mandatul până la data validării alegerilor
    parlamentare generale. Guvernul este demis la data retragerii de către
    Parlament a încrederii acordate sau dacă primul-ministru se află în una
    dintre situaţiile prevăzute la articolul 106, cu excepţia revocării, ori
    este în imposibilitatea de a-şi exercită atribuţiile mai mult de 45 de
    zile. Guvernul al cărui mandat a încetat potrivit celor de mai sus,
    îndeplineşte numai actele necesare pentru administrarea treburilor publice,
    până la depunerea jurământului de membrii noului Guvern.
</p>
<p>
    <strong>Mo</strong>
    <strong>ț</strong>
    <strong>iunea de cenzur</strong>
    <strong>ă</strong>
</p>
<p>
    Camera Deputaţilor şi Senatul, în şedinţă comună, pot retrage încrederea
    acordată Guvernului prin adoptarea unei moţiuni de cenzură, cu votul
    majorităţii deputaţilor şi senatorilor. Moţiunea de cenzură poate fi
    initiață de cel puţin o pătrime din numărul total al deputaţilor şi
    senatorilor şi se comunică Guvernului la data depunerii. Dacă moţiunea de
    cenzură a fost respinsă, deputaţii şi senatorii care au semnat-o nu mai pot
    iniţia, în aceeaşi sesiune, o nouă moţiune de cenzură.
</p>
<p>
    <strong>Raporturile Parlamentului cu Guvernul</strong>
</p>
<p>
    Guvernul şi celelalte organe ale administraţiei publice, în cadrul
    controlului parlamentar al activităţii lor, sunt obligate să prezinte
    informaţiile şi documentele cerute de Camera Deputaţilor, de Senat sau de
    comisiile parlamentare, prin intermediul preşedinţilor acestora. În cazul
    în care o iniţiativă legislativă implica modificarea prevederilor bugetului
    de stat sau a bugetului asigurărilor sociale de stat, solicitarea
    informării este obligatorie.
</p>
<p>
    Membrii Guvernului au acces la lucrările Parlamentului. Dacă li se solicita
    prezența, participarea lor este obligatorie. Guvernul şi fiecare dintre
    membrii săi au obligaţia să răspundă la întrebările sau la interpelările
    formulate de deputaţi sau de senatori, în condiţiile prevăzute de
    regulamentele celor două Camere ale Parlamentului.
</p>
<p>
    Camera Deputaţilor sau Senatul poate adopta o moţiune simplă prin care
    să-şi exprime poziţia cu privire la o problemă de politică internă sau
    externă ori, după caz, cu privire la o problemă ce a făcut obiectul unei
    interpelări.
</p>
<p>
    <strong>Moţiunea de cenzură</strong>
</p>
<p>
    Camera Deputaţilor şi Senatul, în şedinţă comună, pot retrage încrederea
    acordată Guvernului prin adoptarea unei moţiuni de cenzură, cu votul
    majorităţii deputaţilor şi senatorilor.
</p>
<p>
    Moţiunea de cenzură poate fi initiață de cel puţin o pătrime din numărul
    total al deputaţilor şi senatorilor şi se comunică Guvernului la data
    depunerii. Moţiunea de cenzură se dezbate după 3 zile de la data când a
    fost prezentată în şedinţa comună celor două Camere.
</p>
<p>
    Dacă moţiunea de cenzură a fost respinsă, deputaţii şi senatorii care au
    semnat-o nu mai pot iniţia, în aceeaşi sesiune, o nouă moţiune de cenzură,
    cu excepţia cazului în care Guvernul îşi angajează răspunderea.
</p>
<p>
    <strong>Angajarea răspunderii Guvernului</strong>
</p>
<p>
    Guvernul îşi poate angaja răspunderea în faţa Camerei Deputaţilor şi a
    Senatului, în şedinţa comuna, asupra unui program, a unei declaraţii de
    politica generală sau a unui proiect de lege.
</p>
<p>
    Guvernul este demis dacă o moţiune de cenzură, depusă în termen de 3 zile
    de la prezentarea programului, a declaraţiei de politica generală sau a
    proiectului de lege, a fost votată în condiţiile de mai sus. Dacă Guvernul
    nu a fost demis, proiectul de lege prezentat, modificat sau completat, după
    caz, cu amendamente acceptate de Guvern, se consideră adoptat, iar
    aplicarea programului sau a declaraţiei de politică generală devine
    obligatorie pentru Guvern.
</p>
<p>
    În cazul în care Preşedintele României cere reexaminarea legii adoptate,
    dezbaterea acesteia se va face în şedinţa comuna a celor două Camere.
</p>
<p>
    <strong>Delegarea legislativă</strong>
</p>
<p>
    Parlamentul poate adopta o lege specială de abilitare a Guvernului pentru a
    emite ordonanţe în domenii care nu fac obiectul legilor organice.
</p>
<p>
    Legea de abilitare va stabili, în mod obligatoriu, domeniul şi data până la
    care se pot emite ordonanţe. Dacă legea de abilitare o cere, ordonanţele se
    supun aprobării Parlamentului, potrivit procedurii legislative, până la
    împlinirea termenului de abilitare. Nerespectarea termenului atrage
    încetarea efectelor ordonanţei.
</p>
<p>
    Guvernul poate adopta ordonanţe de urgenţă numai în situaţii extraordinare
    a căror reglementare nu poate fi amânată, având obligaţia de a motiva
    urgenta în cuprinsul acestora.
</p>
<p>
    Ordonanţa de urgență intră în vigoare numai după depunerea sa spre
    dezbatere în procedura de urgență la Camera competentă să fie sesizată şi
    după publicarea ei în Monitorul Oficial al României. Camerele, dacă nu se
    afla în sesiune, se convoacă în mod obligatoriu în 5 zile de la depunere
    sau, după caz, de la trimitere. Dacă în termen de cel mult 30 de zile de la
    depunere, Camera sesizată nu se pronunţa asupra ordonanţei, aceasta este
    considerată adoptată şi se trimite celeilalte Camere care decide de
    asemenea în procedura de urgență. Ordonanţa de urgență cuprinzând norme de
    natura legii organice se aproba cu majoritatea prevăzută la articolul 76
    alineatul (1).
</p>
<p>
    Ordonanţele de urgență nu pot fi adoptate în domeniul legilor
    constituţionale, nu pot afecta regimul instituţiilor fundamentale ale
    statului, drepturile, libertăţile şi îndatoririle prevăzute de Constituţie,
    drepturile electorale şi nu pot viza măsuri de trecere silită a unor bunuri
    în proprietate publică.
</p>
<p>
    Ordonanţele cu care Parlamentul a fost sesizat se aprobă sau se resping
    print-o lege în care vor fi cuprinse şi ordonanţele ale căror efecte au
    încetat potrivit alineatului (3).
</p>
<p>
    Prin legea de aprobare sau de respingere se vor reglementa, dacă este
    cazul, măsurile necesare cu privire la efectele juridice produse pe
    perioada de aplicare a ordonanţei.
</p>
       </div>
            <button onClick={()=>setGameState("catii")} className='back'>Înapoi</button>
        </div>
        <Footer />
</div>
    );
};

export default CatII3;
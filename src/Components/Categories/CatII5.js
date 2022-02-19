import React, {useState, useContext} from 'react';
import { QuizContext } from '../../Helpers/Context';
import "./MainCat.css";
import "../../App.css"
import Nav from '../Nav/Nav';
import Footer from '../Nav/Footer';

function CatII5() {
    const {score, setScore, setGameState, test} = useContext(QuizContext);
    return (
    <div className="MenuContainer">

        <Nav/>
        <div className="Menu">
        <div className="Text">
        <h2 align="center">
Autoritatea judecătorească
</h2>
<p>
    <strong>Instanțele judecătorești</strong>
</p>
<p>
    Justiţia se înfăptuieşte în numele legii, fiind unică, imparțială şi egală
    pentru toţi. Judecătorii sunt independenţi şi se supun numai legii.
</p>
<p>
    <strong>Statutul judecătorilor</strong>
</p>
<p>
    Judecătorii numiţi de Preşedintele României sunt inamovibili, în condiţiile
    legii. Propunerile de numire, precum şi promovarea, transferarea şi
    sancţionarea judecătorilor sunt de competenţa Consiliului Superior al
    Magistraturii, în condiţiile legii sale organice. Funcţia de judecător este
    incompatibilă cu orice alta funcţie publică sau privată, cu excepţia
    funcţiilor didactice din învăţământul superior.
</p>
<p>
    <strong>Competen</strong>
    <strong>ț</strong>
    <strong>a</strong>
</p>
<p>
    Justiţia se realizează prin Înaltă Curte de Casaţie şi Justiţie şi prin
    celelalte instanţe judecătoreşti stabilite de lege. Competenţa instanţelor
    judecătoreşti şi procedura de judecată sunt prevăzute numai prin lege.
</p>
<p>
    Înaltă Curte de Casaţie şi Justiţie asigură interpretarea şi aplicarea
    unitară a legii de către celelalte instanţe judecătoreşti, potrivit
    competenței sale. Este interzisă înfiinţarea de instanţe extraordinare.
    Prin lege organică pot fi înfiinţate instanţe specializate în anumite
    materii, cu posibilitatea participării, după caz, a unor persoane din afară
    magistraturii. Controlul judecătoresc al actelor administrative ale
    autorităţilor publice, pe calea contenciosului administrativ, este
    garantat, cu excepţia celor care privesc raporturile cu Parlamentul, precum
    şi a actelor de comandament cu caracter militar. Instanţele de contencios
    administrativ sunt competente să soluţioneze cererile persoanelor vătămate
    prin ordonanţe sau, după caz, prin dispoziţii din ordonanţe declarate
    neconstituţionale.
</p>
<p>
    Şedinţele de judecată sunt publice, afară de cazurile prevăzute de lege.
    Procedura judiciară se desfăşoară în limba română. Cetăţenii români
    aparţinând minorităţilor naţionale au dreptul să se exprime în limba
    maternă în faţa instanţelor de judecată, în condiţiile legii organice.
</p>
<p>
    Modalităţile de exercitare a dreptului prevăzut mai sus, inclusiv prin
    folosirea de interpreţi sau traduceri, se vor stabili astfel încât să nu
    împiedice buna administrare a justiţiei şi sa nu implice cheltuieli
    suplimentare pentru cei interesaţi.
</p>
<p>
    Cetăţenii străini şi apatrizii care nu înţeleg sau nu vorbesc limba română
    au dreptul de a lua cunoştinţa de toate actele şi lucrările dosarului, de a
    vorbi în instanţă şi de a pune concluzii, prin interpret; în procesele
    penale acest drept este asigurat în mod gratuit.
</p>
<p>
    Împotriva hotărârilor judecătoreşti, părţile interesate şi Ministerul
    Public pot exercita căile de atac, în condiţiile legii. Instanţele
    judecătoreşti dispun de poliţia pusă în serviciul lor.
</p>
<p>
    <strong>Ministerul Public</strong>
</p>
<p>
    În activitatea judiciară, Ministerul Public reprezintă interesele generale
    ale societăţii şi apara ordinea de drept, precum şi drepturile şi
    libertăţile cetăţenilor. Ministerul Public îşi exercită atribuţiile prin
    procurori constituiţi în parchete, în condiţiile legii. Parchetele
    funcţionează pe lângă instanţele de judecată, conduc şi supraveghează
    activitatea de cercetare penală a poliţiei judiciare, în condiţiile legii.
</p>
<p>
    Procurorii îşi desfăşoară activitatea potrivit principiului legalităţii, al
    imparţialităţii şi al controlului ierarhic, sub autoritatea ministrului
    justiţiei. Funcţia de procuror este incompatibilă cu orice alta funcţie
    publică sau privată, cu excepţia funcţiilor didactice din învăţământul
    superior.
</p>
<p>
    <strong></strong>
</p>
<p>
    <strong>Consiliul Superior al Magistraturii</strong>
</p>
<p>
    Consiliul Superior al Magistraturii este garantul independenţei justiţiei.
    CSM este alcătuit din 19 membri, din care:
</p>
<p>
    a) 14 sunt aleşi în adunările generale ale magistraţilor şi validati de
    Senat; aceştia fac parte din două secţii, una pentru judecători şi una
    pentru procurori; prima secţie este compusa din 9 judecători, iar cea de-a
    doua din 5 procurori;
</p>
<p>
    b) 2 reprezentanţi ai societăţii civile, specialişti în domeniul dreptului,
    care se bucura de înaltă reputaţie profesională şi morală, aleşi de Senat;
    aceştia participa numai la lucrările în plen;
</p>
<p>
    c) ministrul justiţiei, preşedintele Înaltei Curţi de Casaţie şi Justiţie
    şi procurorul general al Parchetului de pe lângă Înaltă Curte de Casaţie şi
    Justiţie.
</p>
<p>
    Preşedintele Consiliului Superior al Magistraturii este ales pentru un
    mandat de un an, ce nu poate fi reînnoit, dintre magistraţii prevăzuţi la
    punctul a).
</p>
<p>
    Durata mandatului membrilor Consiliului Superior al Magistraturii este de 6
    ani. Hotărârile Consiliului Superior al Magistraturii se iau prin vot
    secret.
</p>
<p>
    <strong>Atribu</strong>
    <strong>ț</strong>
    <strong>ii</strong>
</p>
<p>
    Consiliul Superior al Magistraturii propune Preşedintelui României numirea
    în funcţie a judecătorilor şi a procurorilor, cu excepţia celor stagiari,
    în condiţiile legii.
</p>
<p>
    Consiliul Superior al Magistraturii îndeplineşte rolul de instanţa de
    judecată, prin secţiile sale, în domeniul răspunderii disciplinare a
    judecătorilor şi a procurorilor, potrivit procedurii stabilite prin legea
    sa organică. În aceste situaţii, ministrul justiţiei, preşedintele Înaltei
    Curţi de Casaţie şi Justiţie şi procurorul general al Parchetului de pe
    lângă Înaltă Curte de Casaţie şi Justiţie nu au drept de vot. Hotărârile
    Consiliului Superior al Magistraturii în materie disciplinară pot fi
    atacate la Înaltă Curte de Casaţie şi Justiţie. Consiliul Superior al
    Magistraturii îndeplineşte şi alte atribuţii stabilite prin legea sa
    organică, în realizarea rolului sau de garant al independenţei justiţiei.
</p>
       </div>
            <button onClick={()=>setGameState("catii")} className='back'>Înapoi</button>
        </div>
        <Footer />
</div>
    );
};

export default CatII5;
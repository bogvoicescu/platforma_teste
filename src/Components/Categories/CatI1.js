import React, {useState, useContext} from 'react';
import { QuizContext } from '../../Helpers/Context';
import "./MainCat.css";
import "../../App.css"
import Nav from '../Nav/Nav';
import Footer from '../Nav/Footer';

function CatI1() {
    const {score, setScore, setGameState, test} = useContext(QuizContext);
    return (
    <div className="MenuContainer">

        <Nav className="TextNav"/>
        <div className="Menu">
            <div className='Text'>
            <p align="center">
    Ordonanța de urgență nr. 30 din 25 aprilie 2007 privind organizarea şi
    funcţionarea Ministerului Afacerilor Interne
</p>
<p align="center">
    Art. 3, alin (1), lit. b)
</p>
<h3 align="center">
    Atribuții principale
</h3>
<p align="center">
    <strong>Articolul 3</strong>
</p>
<p>
    (1) Ministerul Afacerilor Interne îndeplineşte următoarele atribuţii
    principale:
</p>
<p>
    b) în domeniul ordinii, siguranţei publice şi securităţii naţionale:
</p>
<p>
    1. stabileşte, potrivit legii, măsuri pentru apărarea drepturilor şi
    libertăţilor fundamentale ale omului, precum şi a proprietăţii publice şi
    private;
</p>
<p>
    2. organizează şi desfăşoară, prin structuri specializate, potrivit
    competenţei, activităţi pentru prevenirea şi combaterea terorismului, a
    criminalităţii organizate, a traficului şi consumului ilicit de droguri, a
    traficului de persoane, a migraţiei ilegale, a criminalităţii informatice,
    precum şi a altor fenomene infracţionale şi fapte antisociale;
</p>
<p>
    3. coordonează, evaluează şi monitorizează, prin organele de specialitate,
    la nivel naţional, aplicarea politicilor în domeniul traficului de
    persoane, precum şi a celor din domeniul protecţiei şi asistenţei acordate
    victimelor acestuia;
</p>
<p>
    4. organizează, îndrumă şi coordonează activitatea de protecţie a
    persoanelor, bunurilor, obiectivelor şi valorilor şi organizează paza
    obiectivelor de importanţă deosebită date în competenţă potrivit legii;
</p>
<p>
    5. elaborează şi asigură punerea în aplicare a documentelor strategice şi
    operaţionale privind întrebuinţarea, planificarea şi realizarea capacităţii
    operaţionale a forţelor de ordine şi siguranţă publică pe timp de pace, în
    situaţii de criză şi la război;
</p>
<p>
    6. desfăşoară, prin structuri specializate, potrivit competenţei,
    activităţi de prevenire şi combatere a acţiunilor de nerespectare a
    regimului juridic al produselor militare şi al produselor şi tehnologiilor
    cu dublă utilizare;
</p>
<p>
    7. asigură, potrivit competenţelor, desfăşurarea activităţii pentru
    efectuarea cercetărilor în legătură cu săvârşirea unor fapte prevăzute de
    legea penală;
</p>
<p>
    8. organizează activitatea de protecţie a martorilor;
</p>
<p>
    9. solicită de la autorităţi publice, de la persoane fizice sau juridice
    informaţii, date şi documente necesare în vederea îndeplinirii atribuţiilor
    stabilite prin lege şi în limitele acesteia; poate recompensa persoanele
    fizice care acordă sprijin ministerului pentru îndeplinirea atribuţiilor
    specifice, din fondul repartizat cu această destinaţie, în condiţiile
    stabilite prin ordin al ministrului;
</p>
<p>
    10. asigură respectarea regimului frontierei de stat a României şi
    realizează coordonarea interministerială în acest domeniu;
</p>
<p>
    11. asigură, prin structurile specializate, aplicarea strategiei şi
    politicii Guvernului în domeniul pregătirii economiei naţionale şi a
    teritoriului pentru apărare, în condiţiile legii;
</p>
<p>
    12. constituie şi utilizează Registrul naţional al armelor şi Cazierul
    judiciar;
</p>
<p>
    13. constituie şi utilizează Sistemul naţional de evidenţă a străinilor;
    asigură respectarea regimului juridic al străinilor pe teritoriul României;
</p>
<p>
    14. implementează politicile României în domeniul azilului;
</p>
<p>
    15. organizează şi execută asigurarea medicală şi psihologică a
    personalului propriu care participă la misiuni specifice;
</p>
<p>
    16. conduce activitatea de informaţii, contrainformaţii şi securitate în
    domeniile sale de competenţă;
</p>
<p>
    (2) Ministerul Afacerilor Interne îndeplineşte orice alte atribuţii
    stabilite prin lege.
</p>
            </div>
            <button onClick={()=>setGameState("cati")} className='back'>Înapoi</button>
        </div>
        <Footer />
</div>
    );
};

export default CatI1;
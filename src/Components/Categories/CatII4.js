import React, {useState, useContext} from 'react';
import { QuizContext } from '../../Helpers/Context';
import "./MainCat.css";
import "../../App.css"
import Nav from '../Nav/Nav';
import Footer from '../Nav/Footer';

function CatII4() {
    const {score, setScore, setGameState, test} = useContext(QuizContext);
    return (
    <div className="MenuContainer">

        <Nav/>
        <div className="Menu">
        <div className="Text">
        <h2 align="center">
Administrația publică
</h2>
<p align="center">
    <strong></strong>
</p>
<p align="center">
    <strong>Administraţia publică centrala de specialitate</strong>
</p>
<p>
    Ministerele se organizează numai în subordinea Guvernului. Alte organe de
    specialitate se pot organiza în subordinea Guvernului ori a ministerelor
    sau ca autorităţi administrative autonome.
</p>
<p>
    Ministerele se înfiinţează, se organizează şi funcţionează potrivit legii.
    Guvernul şi ministerele, cu avizul Curţii de Conturi, pot înfiinţa organe
    de specialitate, în subordinea lor, numai dacă legea le recunoaşte această
    competenţă. Autorităţi administrative autonome se pot înfiinţa prin lege
    organică.
</p>
<p>
    <strong>Forţele armate</strong>
</p>
<p>
    Armata este subordonată exclusiv voinţei poporului pentru garantarea
    suveranităţii, a independenței şi a unităţii statului, a integrităţii
    teritoriale a țării şi a democraţiei constituţionale. În condiţiile legii
    şi ale tratatelor internaţionale la care România este parte, armata
    contribuie la apărarea colectivă în sistemele de alianță militară şi
    participa la acţiuni privind menţinerea sau restabilirea păcii.
</p>
<p>
    Structura sistemului naţional de apărare, pregătirea populaţiei, a
    economiei şi a teritoriului pentru apărare, precum şi statutul cadrelor
    militare, se stabilesc prin lege organică.
</p>
<p>
    Prevederile alineatelor (1) şi (2) se aplică, în mod corespunzător, şi
    celorlalte componente ale forţelor armate stabilite potrivit legii.
</p>
<p>
    Organizarea de activităţi militare sau paramilitare în afară unei
    autorităţi statale este interzisă. Pe teritoriul României pot intra,
    staţiona, desfăşura operaţiuni sau trece trupe străine numai în condiţiile
    legii sau ale tratatelor internaţionale la care România este parte.
</p>
<p>
    <strong>Consiliul Suprem de Apărare a </strong>
    <strong>Ț</strong>
    <strong>ă</strong>
    <strong>rii</strong>
</p>
<p>
    Consiliul Suprem de Apărare a Țării organizează şi coordonează unitar
    activităţile care privesc apărarea tarii şi securitatea naţională,
    participarea la menţinerea securităţii internaţionale şi la apărarea
    colectivă în sistemele de alianță militară, precum şi la acţiuni de
    menţinere sau de restabilire a păcii.
</p>
<p align="center">
    <strong></strong>
</p>
<p>
    <strong>Administra</strong>
    <strong>ț</strong>
    <strong>ia public</strong>
    <strong>ă</strong>
    <strong> local</strong>
    <strong>ă</strong>
</p>
<p>
    Administraţia publică din unităţile administrativ-teritoriale se întemeiază
    pe principiile descentralizării, autonomiei locale şi deconcentrării
    serviciilor publice. În unităţile administrativ-teritoriale în care
    cetăţenii aparţinând unei minorităţi naţionale au o pondere semnificativă
    se asigură folosirea limbii minorităţii naţionale respective în scris şi
    oral în relaţiile cu autorităţile administraţiei publice locale şi cu
    serviciile publice deconcentrate, în condiţiile prevăzute de legea
    organică. Autorităţile administraţiei publice, prin care se realizează
    autonomia locală în comune şi în oraşe, sunt consiliile locale alese şi
    primării aleşi. Consiliul judeţean este autoritatea administraţiei publice
    pentru coordonarea activităţii consiliilor comunale şi orăşeneşti, în
    vederea realizării serviciilor publice de interes judeţean.
</p>
<p>
    <strong>Prefectul</strong>
</p>
<p>
    Guvernul numeşte un prefect în fiecare judeţ şi în municipiul Bucureşti.
    Prefectul este reprezentantul Guvernului pe plan local şi conduce
    serviciile publice deconcentrate ale ministerelor şi ale celorlalte organe
    ale administraţiei publice centrale din unităţile
    administrativ-teritoriale. Atribuţiile prefectului se stabilesc prin lege
    organică. Între prefecţi, pe de o parte, consiliile locale şi primari,
    precum şi consiliile judeţene şi preşedinţii acestora, pe de altă parte, nu
    există raporturi de subordonare. Prefectul poate ataca, în faţa instanţei
    de contencios administrativ, un act al consiliului judeţean, al celui local
    sau al primarului, în cazul în care considera actul ilegal. Actul atacat
    este suspendat de drept.
</p>       </div>
            <button onClick={()=>setGameState("catii")} className='back'>Înapoi</button>
        </div>
        <Footer />
</div>
    );
};

export default CatII4;
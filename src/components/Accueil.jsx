import React from 'react';
import '../style/accueil.css';
import pdf from '../media/CV Samuel GEORGE.pdf';





const Accueil = () => {

    return <>
          <div className="container_top">
            <h3>Bonjour je suis,</h3>
            <h1>Samuel George</h1>
            <p className="student">Etudiant développeur web Full Stack</p>
            
            <button className="btn_download">
                {/* <a href="./cv.pdf" download>Télécharger mon cv</a> */}
                <a href={pdf} target = "_blank">Télécharger mon cv</a>
            </button>
        </div>
        
    </>
}
export default Accueil;
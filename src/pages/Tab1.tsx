import React from 'react';
import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import logo1 from '../assets/logos/79250fb3b1-235.png'
import logo2 from '../assets/logos/0dd7732864-235.png'
import logo3 from '../assets/logos/12bcf4ad80-235.png'
import logo4 from '../assets/logos/20815c01b6-235.png'
import logo5 from '../assets/logos/20b289e5ff-235.png'
import logo6 from '../assets/logos/c7b009065e-235.png'
import logo7 from '../assets/logos/bd2ca11be2-235.png'

import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className="content">
        <div className="cards-container">
          <div className="card success">
              <img className="card-image" src={logo1}></img>
          </div>
          <div className="card standby">
              <img className="card-image" src={logo2}></img>
          </div>
          <div className="card success">
              <img className="card-image" src={logo3}></img>
          </div>
          <div className="card new">
              <img className="card-image" src={logo4}></img>
          </div>
          <div className="card new">
              <img className="card-image" src={logo5}></img>
          </div>
          <div className="card locked">
              <img className="card-image" src={logo6}></img>
          </div>
          <div className="card locked">
              <img className="card-image" src={logo7}></img>
          </div>
        </div>
      </div>
    </IonPage>
  );
};

export default Tab1;

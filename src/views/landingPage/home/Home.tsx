import { Button } from 'antd';
import avatar from '../../../assets/developer.jpg';

const Home = () => {
   return (
      <div className="home-container">
         <div className="home-content">
            <img src={avatar} alt="Avatar" className="home-avatar" />

            <div className="home-description">
               <span className="home-text" style={{ fontSize: 45 }}>Carlos Sosa Q.</span>
               <span className="home-text" style={{ fontSize: 20, marginTop: -10 }}>Desarrollador Web y Móvil</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 15 }}>
               <Button>Download CV</Button>
            </div>
         </div>
      </div>
   )
}

export default Home;

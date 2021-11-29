import React from 'react';
import { Layout } from 'antd';
import '../../assets/css/landingPage.css';
import Header from './Header';
import Footer from './Footer';

const LandingPage: React.FC = ({ children }) => {
   return (
      <>
         <div className="l-container">
            <header className="l-header">
               <Header />
            </header>
            <main className="l-content">
               {children}
            </main>
            <footer className="l-footer">
               <Footer />
            </footer>
         </div>
         {/* <Layout style={{ minHeight: '100vh' }}>
            <Header />
            <Layout.Content style={{ backgroundColor: '#F9F9F9', display: 'flex' }}>
               {children}
            </Layout.Content>
            <Footer />
         </Layout> */}
      </>
   )
};

export default LandingPage;

interface IBasicInfo {
   label: string;
   value: string;
}

const basicInfo: IBasicInfo[] = [
   { label: 'COUNTRY', value: 'Portuguesa - Venezuela' },
   { label: 'AGE', value: '26 years' },
   { label: 'WHATSAPP/\nTELEGRAM', value: '(+58) 416-7509166' },
   { label: 'GITHUB', value: '@cjsq24' },
   { label: 'LANGUAJE', value: 'Inglés B1' }
];

const AboutMe = () => {
   return (
      <div className="l-about-me-content">
         <div className="l-basic-information">
            <h2 className="l-about-me-content-title">Información Básica:</h2>
            {basicInfo.map((data, i) => (
               <div key={i} className="l-basic-information-item">
                  <span className="l-basic-information-label">{data.label}:</span>
                  <span className="l-basic-information-value">{data.value}</span>
               </div>
            ))}
         </div>
         <div className="l-about-me-information">
            <h2 className="l-about-me-content-title">Acerca de mi:</h2>
            <p className="l-about-me-paragraph">
               ¡Hola! Mi nombre es Carlos Sosa. Soy Desarrollador Web y Móvil.
               Cuento con más de 4 años de experiencia en el mundo del desarrollo, trabajando con PHP, JavaScript y MySql (Usando frameworks como JQuery, Bootstrap y ahora aprendiendo Laravel). Tengo un año aproximadamente trabajando en proyectos con React, React Native y Node JS. Quiero seguir especializándome en estas últimas tecnologías y así seguir adquiriendo más experiencia, siempre abierto a aprender. Me gusta trabajar en equipo, me gusta el análisis y la resolución de problemas más allá de sólo programar.
            </p>
         </div>
      </div>
   )
}

export default AboutMe;

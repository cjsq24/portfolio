import images from '../../../assets/images';

interface ISkillList {
   image: string[];
   name: string;
   experience: string;
   description: string;
}

const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

const skillList: ISkillList[] = [
   {
      image: ['php'],
      name: 'PHP',
      experience: 'Medium (3 years)',
      description: lorem,
   }, {
      image: ['javascript'],
      name: 'JavaScript',
      experience: 'Medium (4 years)',
      description: lorem,
   }, {
      image: ['html5', 'css3'],
      name: 'HTML5/CSS3',
      experience: 'Medium (3 years)',
      description: lorem,
   }, {
      image: ['reactJs'],
      name: 'React JS',
      experience: 'Medium (1 year)',
      description: lorem,
   }, {
      image: ['reactNative'],
      name: 'React Native',
      experience: 'Medium (1 year)',
      description: lorem,
   }, {
      image: ['nodeJs'],
      name: 'Node JS',
      experience: 'Medium (1 year)',
      description: lorem,
   }, {
      image: ['laravel'],
      name: 'Laravel',
      experience: 'Noob',
      description: lorem,
   }
];

const Skills = () => {

   const showDescription = (index: number) => {
      //Cerramos los divs de descripción
      const skillDescriptionList = document.querySelectorAll(`.l-skills-description-container`) as NodeListOf<HTMLInputElement>;
      skillDescriptionList.forEach(ele => {
         ele.style.height = '0';
      })
      
      //abrimos el div seleccionado
      const div = document.querySelector(`#l-skills-description-${index}`) as HTMLInputElement;
      div.style.height = (div.clientHeight) ? '0' : div.scrollHeight + 'px'
   }

   return (
      <div className="l-skills-container">
         <h1 className="l-title">Professional Skills</h1>
         <div className="l-skills-content">
            {skillList.map((skill, i) => (
               <div key={i} className="l-skills-item" onClick={() => showDescription(i)}>
                  <div className="l-skills-icon-container">
                     {skill.image.map((image, o) => (
                        <img key={o} src={images[image]} alt={image} style={{ height: 40, width: 40 }} />
                     ))}
                  </div>
                  <div className="l-skills-text-container">
                     <span className="l-skills-text">{skill.name}</span>
                  </div>
                  <div className="l-skills-experience-container">
                     <span className="l-skills-text" style={{ fontWeight: 'normal' }}>{skill.experience}</span>
                  </div>
                  <div className="l-skills-description-container" id={`l-skills-description-${i}`}>
                     <p style={{ padding: '10px 10px' }}>
                        {skill.description}
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Skills;

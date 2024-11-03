
/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/project-1.jpg',
      title: 'Boulevard market',
      tags: ['API', 'MVC', 'Development'],
      projectLink: 'https://dosya222.github.io/boulevarmarket/'
    },
    {
      imgSrc: '/images/project-2.jpg',
      title: 'Street 88',
      tags: ['API', 'SPA'],
      projectLink: 'https://dosya222.github.io/street/'
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Grayson',
      tags: ['Development', 'API'],
      projectLink: 'https://dosya222.github.io/grayson/'
    },
    {
      imgSrc: '/images/project-4.jpg',
      title: 'GoTrip',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://dosya222.github.io/gotrip/'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'Silver Hause',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://dosya222.github.io/silver-hause/'
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'Weather white/dark',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://dosya222.github.io/weather/dist/'
    },
  ];


const Work = () => {
  return (
<section 
id="work"
className="section"
>
<div className="container">
    <h2 className="headline-2 mb-8 reveal-up">
    My portfolio highlights
    </h2>
     
     <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(288px,_1fr))] ">
        {
            works.map(({ imgSrc, title, tags, projectLink }, key) =>
            (
                <ProjectCard 
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"
                />
            )
            )
        }
     </div>

</div>
</section>
  )
}

export default Work
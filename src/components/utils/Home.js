import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "../style/home.css"
import { useEffect,useState } from 'react';
import {motion} from "framer-motion"
import VerifiedIcon from '@mui/icons-material/Verified';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import { Button, CircularProgress, Link, useMediaQuery } from '@mui/material';

import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper/modules';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
// import styles bundle
import 'swiper/css/bundle'

import { message, Space } from 'antd';

export default function Home() {
  return (
    <div className='Home'>
      <LinesOnPage/>
      {/*<FirstView/>*/}
      <FirstViewText/>
    </div>
  )
}

const FirstView=()=>{
let arr=[10,20,30,40,55,60,70,80,90,100,10,1,1,1,1,1,1,1]
const matches = useMediaQuery('(max-width:800px)');
  return(
    <div className={`bubble-container ${matches&&"bubble-container-small"}`}>
      <div className="wrapper">
         {arr.map((e,index)=>{
          return <div style={{animationDelay:`${index+3}s`,left:`${e}px`}} key={index}></div>
         })}
      
      </div>
  </div>
  )
}

const LinesOnPage=()=>{
  let [arr,setArr]=useState([1,2,3,4,5,6,7,8,9,10,1,1,1,1,1,1,1,4345,4,4,44,4,4,5])  
  const matches = useMediaQuery('(max-width:800px)');
  useEffect(()=>{
    if(matches) setArr([1,2,3,4,5,6,7,8,9,10,1,1,1,])
  },[matches])
    return(
    <div className="line-container">
         {arr.map((e,index)=>{
          return <div className='each-lines' key={index}></div>
         })}
      
    </div>
  )
}

const FirstViewText=()=>{
  let text=`<h1>Nesredin Haji</h1> <div>Mernstack Developer <br/> and <br/>Python Developer</div>`
  let delay=100
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return(
    <div   className={`Home-lists`}>
        <section  id="home" className='Home-desc'>

          <div className='Home-desc-left'>
              <div className='Home-desc-left-greet'>Hello I'm</div>
              <span   className='Home-desc-left-postion' dangerouslySetInnerHTML={{ __html: currentText }}></span>
          </div>
          <div className='Home-desc-right'><img src="/photo_2023-09-04_22-04-33-removebg-preview.png" width={100}/></div>
        </section>
        <About/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>

  )
  }

const About=()=>{

  return(
    <motion.section  id="about"
      initial={{opacity:0,y:200}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.9}}
      viewport={{once:true}}
      className='Home-about'>
        <h1>About</h1>
        <div className='Home-about-disc'>
            <p>I am an experienced and enthusiastic MERN (MongoDB, Express.js, React.js, Node.js) + Python developer with more than 1 and a half years of professional experience. Throughout my career, I have developed a strong foundation in full-stack web development and have worked on various projects, from creating responsive user interfaces to implementing server-side logic and managing databases.
            </p>
            <p>
            I am a driven and dedicated developer with a passion for coding, problem-solving, and continuous skill enhancement. Thriving on cutting-edge technologies and industry trends, I deliver high-quality solutions that meet client requirements and provide exceptional user experiences. Additionally, as a collaborative team player experienced in fast-paced, agile development environments, I eagerly embrace new challenges to contribute to project success.
            </p>
            <div className='Home-about-disc-pics'> 
            <motion.div 
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:0.9,delay:1}}
                ><img src="/javascript_logo.png" width={100}/></motion.div>
              <div>+</div>
              <motion.div 
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:0.9,delay:3}}><img src="/Python-logo-notext.svg.png" width={100}/></motion.div>
            </div>
        </div>

    </motion.section>
  )
}

const Experience = () => {
  return (
    <section  id="services"
    className='Home-Experience'>
      <h1>Services</h1>
      <div className='Home-Experience-disc'>

        <motion.div 
              initial={{opacity:0,x:-200}}
              whileInView={{opacity:1,x:0}} 
              viewport={{once:true}}
              transition={{duration:0.9,delay:1}} className='Home-Experience-disc-each'>
          <div  className='Home-Experience-disc-each-image'><img src='/content_creator.png' width={20}/></div>
          <div className='Home-Experience-disc-each-expln'>
              <h3>Content Creation</h3>
              <p>With a focus on content creation, I have developed expertise in creating engaging and impactful content for various platforms.</p>
           </div>
        </motion.div>


        <motion.div 
              initial={{opacity:0,x:-100}}
              whileInView={{opacity:1,x:0}} 
              viewport={{once:true}}
              transition={{duration:0.9,delay:2}} className='Home-Experience-disc-each'>
          <div className='Home-Experience-disc-each-image'><img src='/frontend_pic.jpg' width={20}/></div>
          <div className='Home-Experience-disc-each-expln'>
              <h3>Frontend</h3>
              <p>Utilizing React and Next.js, I have honed my skills in designing intuitive and visually appealing user interfaces and experiences.</p>
          </div>
        </motion.div>

        <motion.div 
              initial={{opacity:0,x:-100}}
              whileInView={{opacity:1,x:0}} 
              viewport={{once:true}}

              transition={{duration:0.9,delay:3}} className='Home-Experience-disc-each'>
           <div className='Home-Experience-disc-each-image'><img src='/backend.jpg' width={20}/></div>
           <div className='Home-Experience-disc-each-expln'>
              <h3>Backend Development</h3>
              <p>Proficient in both Node.js and Django, I have hands-on experience in building robust and scalable backend solutions.</p>
            </div>
        </motion.div>

        <motion.div 
              initial={{opacity:0,x:100}}
              whileInView={{opacity:1,x:0}} 
              viewport={{once:true}}

              transition={{duration:0.9,delay:1}} className='Home-Experience-disc-each'>
            <div className='Home-Experience-disc-each-image'><img src='/mongodb-atlas_database.webp' width={20}/></div>
            <div className='Home-Experience-disc-each-expln'>
              <h3>Database Management</h3>
              <p>I have worked extensively with databases, ensuring efficient management and organization of data for seamless application functionality.</p>
            </div>
        </motion.div>

        <motion.div 
              initial={{opacity:0,x:100}}
              whileInView={{opacity:1,x:0}} 
              viewport={{once:true}}

              transition={{duration:0.9,delay:2}} className='Home-Experience-disc-each'>
           <div className='Home-Experience-disc-each-image'><img src='/machine_learning_pic.png' width={20}/></div>
          <div className='Home-Experience-disc-each-expln'>
              <h3>Machine Learning</h3>
              <p>My knowledge of machine learning techniques allows me to develop intelligent solutions that automate processes and extract insights from data.</p>
            </div>
        </motion.div>

         <motion.div 
              initial={{opacity:0,x:100}}
              whileInView={{opacity:1,x:0}} 
              viewport={{once:true}}

              transition={{duration:0.9,delay:3}} className='Home-Experience-disc-each'>
           <div className='Home-Experience-disc-each-image'><img src='/nlp_poc.webp' width={20}/></div>
           <div className='Home-Experience-disc-each-expln'>
              <h3>Natural Language Processing (NLP)</h3>
               <p>With a keen interest in NLP, I have explored and implemented techniques to process and analyze human language data.</p>
           </div>

        </motion.div>

      </div>
    </section>
  );
}

const Skills=()=>{

  let skills=[
    {
      name:"Frontend",
      skill:["HTML",'CSS',"React","Next"]
    },
    {
      name:"Backend",
      skill:["Node js",'MongoDB',"Django"]
    },
    {
      name:"AI",
      skill:["Machine learning",'NLP']
    },
    {
      name:"Dev Tools",
      skill:["VS-code", 'Git', 'GitHub',"Postman","npm, Yarn"]
    },
    {
      name:"AI Tools",
      skill:["TensorFlow, PyTorch and Keras",'Pandas and numpy', 'Transformers (Hugging Face)', 'spaCy and Gensim',"other different working and managing tools"]
    },
  ]
  return(
    <section id="skills" className='Home-skills'>
          <h1>Skills</h1>
          <div className='Home-skills-all'>
              {skills.map((e,index)=>{

                return  <motion.div 
                        initial={{opacity:0,y:200}}
                        whileInView={{opacity:1,y:0}} 
                        viewport={{once:true}}
                        transition={{duration:0.9,delay:index}}  key={index} className='Home-skills-each'>
                          <h3>{e.name}</h3>
                             {e.skill.map((a,index)=>{
                               return  <div key={index} className='Home-skills-each-disc'>
                                            <div><VerifiedIcon style={{color:"green"}}/> </div>
                                            <div  className='Home-skills-each-disc-name'>{a}</div>
                                      </div>
                             })}
                      </motion.div>
              })}
              
          </div>
    </section>
  )
}

const Projects=()=>{

  const Projects=[
    {
      name:"Bullo Doc Field",
      disc:"This website is a sophisticated tool that facilitates the comparison of documents stored within a document store with other files you wish to check for similarity. It provides a comprehensive solution for identifying similarities between the documents in the store and the files you want to analyze. Additionally, the platform offers robust functionality for document and text summarization, allowing you to generate concise summaries for both documents and text passages. With thus website, you can effortlessly examine document similarity and leverage powerful summarization capabilities to extract key insights from your files.",
      github:"https://github.com/Nesril/Bullo_Doc_Field",
      url:"",
      folder:"doc",
      frameworks:"Python + Django + React js + MongoDB",
      pics:["Screenshot (35).png","Screenshot (23).png","Screenshot (24).png","Screenshot (25).png",
      "Screenshot (26).png","Screenshot (27).png","Screenshot (29).png",
      "Screenshot (30).png","Screenshot (31).png","Screenshot (32).png","Screenshot (33).png",
      "Screenshot (34).png","Screenshot (36).png","Screenshot (37).png",
      "Screenshot (38).png","Screenshot (39).png","Screenshot (40).png","Screenshot (41).png",
      "Screenshot (42).png","Screenshot (43).png","Screenshot (44).png","Screenshot (45).png",
      "Screenshot (46).png","Screenshot (47).png","Screenshot (48).png","Screenshot (49).png",
      "Screenshot (50).png","Screenshot (51).png","Screenshot (52).png","Screenshot (53).png",
      "Screenshot (54).png","Screenshot (55).png","Screenshot (56).png","Screenshot (57).png",
      "Screenshot (58).png","Screenshot (59).png","Screenshot (60).png","Screenshot (61).png",
      "Screenshot (62).png","Screenshot (63).png","Screenshot (64).png","Screenshot (65).png",
      "Screenshot (66).png","Screenshot (67).png","Screenshot (68).png","Screenshot (69).png",
      "Screenshot (70).png","Screenshot (71).png","Screenshot (72).png","Screenshot (73).png",
      "Screenshot (74).png","Screenshot (75).png","Screenshot (76).png","Screenshot (77).png",
      "Screenshot (78).png","Screenshot (79).png","Screenshot (80).png"
    ]
    },
    {
      name:"Chat App",
      disc:"It's an innovative MERN stack chat application that goes beyond traditional chatting. Alongside its chat functionality, the application offers a unique feature called the Memory Section. In this section, you can effortlessly store your cherished memories and easily share them with others at the click of a button. The application boasts a beautiful and interactive user interface, enhancing your overall experience and making it visually appealing.",
      github:"https://github.com/Nesril/Chat-App",
      url:"",
      folder:"chatapp",
      frameworks:"Express js + Node js + React js + MongoDB",
      pics:["Screenshot (82).png","Screenshot (83).png","Screenshot (84).png","Screenshot (85).png",
      "Screenshot (86).png","Screenshot (87).png","Screenshot (88).png","Screenshot (89).png",
      "Screenshot (90).png","Screenshot (91).png","Screenshot (92).png","Screenshot (93).png",
      "Screenshot (94).png","Screenshot (95).png","Screenshot (96).png","Screenshot (97).png",
      "Screenshot (98).png","Screenshot (99).png","Screenshot (100).png","Screenshot (101).png",
      "Screenshot (102).png","Screenshot (103).png","Screenshot (104).png","Screenshot (105).png",
      "Screenshot (106).png","Screenshot (107).png","Screenshot (108).png","Screenshot (109).png",
      "Screenshot (110).png","Screenshot (111).png","Screenshot (112).png","Screenshot (113).png",
      "Screenshot (114).png","Screenshot (115).png",]
    },
    {
      name:"Alif Developers",
      github:"https://github.com/Nesril/Alif-Developers",
      disc:"Our bootcamp offers a diverse range of programming languages to aspiring students. We provide comprehensive training in various programming languages, ensuring that students gain proficiency in their chosen field. Our unique approach includes grouping students into cohorts and assigning dedicated mentors to guide and support them throughout their learning journey. By pairing students with experienced mentors, we foster a collaborative and personalized learning environment, enabling students to develop their skills effectively. Join our bootcamp and embark on a rewarding educational experience in your desired programming language.",
      url:"https://alifdevelopers01.netlify.app/",
      frameworks:"Javascript + Python + MongoDB",
      folder:"alif",
      pics:["Screenshot (4).png","Screenshot (5).png","Screenshot (6).png",
      "Screenshot (7).png","Screenshot (8).png","Screenshot (9).png","Screenshot (10).png","Screenshot (11).png",
      "Screenshot (12).png","Screenshot (13).png","Screenshot (14).png","Screenshot (15).png","Screenshot (16).png",
      "Screenshot (17).png","Screenshot (18).png",]
    }
  ]
  return(
    <section id="projects" className='home-projects'>
       <h1>Projects</h1>
       <div className='home-projects-all'>
         
           {Projects.map((e,index)=>{

              return<EachProjects data={e} key={index} index={index}/>
           })}
       </div>
    </section>
    )
}

const EachProjects=({index,data})=>{

return(
  <motion.div 
      initial={{opacity:0,y:200}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.9,delay:index}}
      className='home-projects-each'
      viewport={{once:true}}>

            <h3>{data?.name}</h3>
            <div className='home-projects-each-image'><Slider folder={data.folder} slides={data.pics}/></div>
             <div className='home-projects-eachdisc'>{data.disc}</div>
             <div className='home-projects-each-frameworks'>{data.frameworks}</div>
            <div className='home-projects-each-links'>
               {data.url&&<div><Link href={data.url}><Button>Demo</Button></Link></div>}
                <div><Link href={data.github}><IconButton ><GitHubIcon/></IconButton></Link></div>
            </div>
  </motion.div>
)
}


const Slider = ({ slides,folder }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      effect={"cube"}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <img src={`/${folder}/${slide}`} width={100} alt={"slider.pic"}/>
        </SwiperSlide>
      ))}
    </Swiper>
  )

}



const Contact = () => {
  const form = useRef();
   let [name,getName]=useState("")
   let [email,getEmail]=useState("")
   let [messag,getMessag]=useState("")

   const [messageApi, contextHolder] = message.useMessage();
  const Success = (text) => {
    messageApi.open({
      type: 'success',
      content: text,
    });
  };
  const Error = (text) => {
    messageApi.open({
      type: 'error',
      content: text,
    });
  };


   const [loading,setLoading]=useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        Success("Message Successfully sent !!")
          setLoading(false)
      }, (error) => {
        setLoading(false)
          Error("Error occured, please try again!!")
      });
  };

  const isEmailValid = email && !/^\S+@\S+\.\S+$/.test(email);
  return (
    <section id="contact" className='home-contact'>
          {contextHolder}
         <h1>Contact</h1>
         <div  className='home-contact-section'>
         <motion.div 
              initial={{opacity:0,y:200}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.9}}
              viewport={{once:true}} className='home-contact-form'>
                <form ref={form} onSubmit={sendEmail}>
                  <div className='home-contact-form-name'><label>Name</label></div>
                  <input type="text" value={name} onChange={(e)=>getName(e.target.value)} name="user_name" />
                 
                  <div className='home-contact-form-name'><label>Email</label></div>
                  <input type="email" value={email} onChange={(e)=>getEmail(e.target.value)}  name="user_email" />
                  {isEmailValid && <div style={{ color: 'red' }}>Please enter a valid email address</div>} 
                  <div className='home-contact-form-name'><label>Message</label></div>
                  <textarea name="message" value={messag} onChange={(e)=>getMessag(e.target.value)}  />
                  <div style={{textAlign:"center"}}>{loading?<CircularProgress/>:<Button disabled={!name||!email||isEmailValid||!messag} type="submit" >Send</Button>}</div>
                </form>
            </motion.div>
            <motion.div 
              initial={{opacity:0,scale:0}}
              whileInView={{opacity:1,scale:1}}
              transition={{duration:0.9}}
              viewport={{once:true}}  className='home-contact-Image'>
              <img src='/2b07f62987e987d4e53e84aa8b963b-unscreen.gif' width={200} />
            </motion.div>

         </div>
         <div className='home-contact-links'>
               <div><a  target="_blank"  href="https://nesredinhaji715@gmail.com"><IconButton ><EmailIcon className='home-contact-links-email'/></IconButton></a></div>
               <div><a  target="_blank" href="https://github.com/Nesril"><IconButton><GitHubIcon className='home-contact-links-github'/></IconButton></a></div>
               <div><a  target="_blank" href="https://www.linkedin.com/in/nesril03/"><IconButton><LinkedInIcon className='home-contact-links-linked'/></IconButton></a></div>
               <div><a  target="_blank" href="https://web.telegram.org/k/#@nesril03"><IconButton><TelegramIcon className='home-contact-links-telegram'/></IconButton></a></div>
               <div><a  target="_blank" href="https://www.instagram.com/nesril135/"><IconButton><InstagramIcon className='home-contact-links-insta'/></IconButton></a></div>
         </div>
    </section>
  );
};
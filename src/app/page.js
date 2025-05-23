"use client"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.css"
import { useState } from "react";
import Image from "next/image";
import gif from "./wave.gif"
import aboutimg from "./download.gif";
import projectdata from "./project";
import { Frontend, Backend, Tools } from "./image";
import Rendercolumn from "./Render";
import { Linkedin, Github, Mainlink, Instagram } from "./svg";
import { SendMsg } from "./sendmsg";
import { motion } from "framer-motion";
import reactimage from "./skillimage/react.png";
import nodeimage from "./skillimage/node.png";
import mongodbimahe from "./skillimage/mongo.png";
import dockerimage from "./skillimage/docker.png";
import solidityimage from "./skillimage/solidity.png";
export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
      }
    }
  }
  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },

  }
  const [sidebaropen, setsidebaropen] = useState(false);
  return (
    <>

      <section className="header sticky top-0 z-10">

        <div className="navbar flex justify-between items-center mx-2.5 p-7 ">
          <h3 className="font-extrabold text-lg">
            <Link href="#home"> Malay Kumar</Link>
          </h3>
          <div className="nav hidden md:block ">
            <ul className="flex">
              <li className="mx-5">
                <Link href="#home">Home</Link>
              </li>
              <li className="mx-5">
                <Link href="#about">About</Link>
              </li>
              <li className="mx-5">
                <Link href="https://tech-tidbits.netlify.app/" target="_blank">My Blogs</Link>
              </li>
              <li className="mx-5">
                <Link href="#project">Project</Link>
              </li>
              <li className="mx-5">
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>

          <FontAwesomeIcon className="md:hidden" icon={faBars} style={{
            fontSize: "30px",
            cursor: "pointer",
            color: "#fff",
            transition: "all 0.3s ease-in-out",
            transform: sidebaropen ? "rotate(180deg)" : "rotate(0deg)",

          }} onClick={() => {
            setsidebaropen(!sidebaropen)
          }} />
        </div>
      </section>
      <section className={`header-mobileview ${sidebaropen ? style.sidebar_on : style.sidebar_off}`}>
        <div className="cross"><FontAwesomeIcon className="" icon={faX} onClick={() => {
          setsidebaropen(!sidebaropen)
        }} /></div>
        <ul>
          <li>
            <Link onClick={() => {
              setsidebaropen(!sidebaropen)
            }} href="#home">Home</Link>
          </li>
          <li>
            <Link onClick={() => {
              setsidebaropen(!sidebaropen)
            }} href="#about">About</Link>
          </li>
          <li>
            <Link onClick={() => {
              setsidebaropen(!sidebaropen)
            }} href="https://tech-tidbits.netlify.app/" target="_blank">My Blogs</Link>
          </li>
          <li>
            <Link onClick={() => {
              setsidebaropen(!sidebaropen)
            }} href="#project">Project</Link>
          </li>
          <li>
            <Link onClick={() => {
              setsidebaropen(!sidebaropen)
            }} href="#contact">Contact</Link>
          </li>
        </ul>

      </section>

      <section id="home" className="herosection flex lg:justify-evenly items-center flex-col-reverse lg:flex-row ">
        <div className="hero-content text-center lg:text-start">
          <h1 className=" sm:text-5xl text-4xl font-extrabold flex items-end lg:w-28 lg:justify-between justify-center text-gray-100">Hi<span><Image src={gif} alt="gif..." width={0} height={0} style={{ width: '60px', height: '60px' }} /></span></h1>
          <h1 className="  sm:text-4xl text-3xl font-extrabold mt-5 text-gray-100">I&apos;m <span style={{
            color: "#c770f0"
          }}>Malay Kumar</span></h1>
          <h2 className=" mt-2 font-medium	sm:text-3xl text-2xl text-gray-100">I&apos;m a <span className="font-bold">Full Stack  Developer</span></h2>

          <p className="mt-8 lg:mx-0 mx-8 text-gray-100" style={{ color: "#ffffff" }}>Background in Computer Science. Passion for Tech. India Based.</p>
          <p className="mt-2 lg:mx-0 mx-8 text-gray-100" style={{ color: "#ffffff" }}>Currently Pursuing Bachlor&apos;s Degree in Computer Science and Technology</p>
          <span className="flex mt-5 items-center profilelink justify-center lg:justify-start">
            <Link className="mr-3" target="_blank" href="https://www.linkedin.com/in/malaykumarbehera/"><Linkedin /></Link>
            <Link className="ml-3" target="_blank" href="https://github.com/Malay207/Malay-Kumar.git"><Github /></Link>
          </span>
          <div>
            <button className="my-8 me-7 border-2 border-white	rounded-3xl p-3 hover:bg-white hover:text-black "><Link href="https://drive.google.com/file/d/1oL9RZm5_1aB7vFcUsgqbxLcANFjHxlfs/view?usp=sharing" target="_blank">DOWNLOAD CV &rarr;</Link></button>
            <button className="my-8 border-2 border-white	rounded-3xl px-5 py-3 hover:bg-white hover:text-black "><Link href="https://www.fiverr.com/malaykumar2002" target="_blank">HIRE ME</Link></button>
          </div>
        </div>
        <div className="hero-profileimage"></div>

      </section>
      <section id="about" className="aboutsection flex items-center  justify-evenly lg:flex-row flex-col ">
        <motion.div
          className="about-image relative my-14 mx-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            ease: "backInOut",
            delay: 0.5
          }}
          viewport={{ once: true }}
        >
          {/* Floating Bubbles */}
          {[
            { left: "16%", top: "60%", img: reactimage },
            { left: "36%", top: "36%", img: nodeimage },
            { left: "65%", top: "75%", img: mongodbimahe },
            { left: "18%", top: "5%", img: dockerimage },
            { left: "74%", top: "27%", img: solidityimage },
          ].map((pos, i) => (
            <motion.div
              key={i}
              className="bubble absolute w-12 h-12 sm:w-20 sm:h-20 rounded-full border-2 bg-slate-900 border-slate-900"
              style={{
                top: pos.top,
                left: pos.left,
              }}
              initial={{ y: 10 }}
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: Math.random() * 2 + 1, // Random duration between 1-3s
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
                delay: Math.random() * 1.5
              }}

            >
              {/* Add Image Here */}
              <Image
                src={pos.img} // Replace with your actual image path
                alt="Bubble"
                layout="fill" // Makes it cover the div
                objectFit="contain" // Ensures it stays inside
              />
            </motion.div>
          ))}

          {/* Profile Image */}
          <Image alt="img..." src={aboutimg} height={0} width={0} />
        </motion.div>
        <motion.div className="about-content lg:w-1/2 mx-10 lg:mx-0 text-center lg:text-start"
          initial={{
            opacity: 0,
            y: 100
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.4,
            ease: "backInOut",
            delay: 0.60
          }}
          viewport={{
            once: true
          }}
        >
          <h3 className="text-gray-100 text-4xl font-extrabold">About Me</h3>
          <p className="mt-5 text-lg text-justify lg:me-5">Hello! My name is <span style={{ color: "#c770f0" }}>Malay Kumar Behera</span>, and I am a passionate software developer. When I started my career, I had limited knowledge of coding. However, I began learning from YouTube and wrote some small programs, which sparked my interest in the field. Since then, I have dedicated significant effort to mastering various programming languages, including JavaScript, Python, Java, and C. Additionally, I have expertise in databases such as MongoDB, SQL, and in-memory databases like Redis.
            <br />
            <br />
            Currently, my primary stack is MERN, complemented by Tailwind CSS, TypeScript, and Flutter for mobile/iOS applications and blockchain development. I am always eager to learn new technologies and expand my skill set.
            <br />
            <br />
            In my spare time, I enjoy playing cricket, listening to music, exploring new technologies, working from home, and continually learning new skills.
          </p>

        </motion.div>

      </section>

      <section className="skills sm:my-20 my-16 sm:mx-20  sm:block flex flex-col items-center">
        <h3 className="text-gray-100 text-4xl mb-5  font-extrabold text-center">SKILLS</h3>
        <motion.div className="all-skills m-auto justify-center md:w-full w-4/5 grid md:grid-cols-2 grid-cols-1  gap-x-4 gap-y-8 "
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          <motion.div className=" Skill w-full h-full border-2 border-slate-400 rounded-lg "
            variants={item} viewport={{ once: "true" }} id="frontend">
            <h2 className="text-center sm:text-3xl text-2xl mt-2 font-bold" style={{ color: "#ffffff" }}>Frontend Development</h2>
            <div className="skill_item flex items-start justify-evenly">
              {
                Rendercolumn(Frontend)
              }

            </div>
          </motion.div>
          <motion.div className="Skill w-full h-full border-2 border-slate-400 rounded-lg"
            variants={item} viewport={{ once: "true" }} id="backend">
            <h2 className="text-center sm:text-3xl text-2xl mt-2 font-bold" style={{ color: "#ffffff" }}>Backend Development</h2>
            <div className="skill_item flex items-start justify-evenly">
              {
                Rendercolumn(Backend)
              }

            </div>
          </motion.div>
          <motion.div className="Skill w-full h-full border-2 border-slate-400 rounded-lg"
            variants={item} viewport={{ once: "true" }} id="tools">
            <h2 className="text-center sm:text-3xl text-2xl mt-2 font-bold" style={{ color: "#ffffff" }}>Tools/Devops</h2>
            <div className="skill_item flex items-start justify-evenly">
              {
                Rendercolumn(Tools)
              }

            </div>
          </motion.div>

        </motion.div>
      </section>

      <section id="project" className="projects lg:mx-20 mx:10 mt-20 mb-0">
        <h3 className="text-gray-100 text-4xl mb-5  font-extrabold  text-center">Project</h3>
        <div className="allproject lg:block flex overflow-x-scroll">
          {
            projectdata.map((data, index) => {
              return (
                <motion.div key={index} className={index % 2 !== 0 ? 'project flex lg:mx-0 me-5  lg:flex-row-reverse lg:justify-between justify-end flex-col-reverse items-center lg:my-32 ' : 'project flex lg:mx-0 me-5  lg:justify-between justify-end lg:flex-row flex-col-reverse items-center  lg:my-32'}
                  initial={{
                    opacity: 0,
                    y: 80
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "backInOut",
                    delay: 0.4
                  }}
                  viewport={{
                    once: true
                  }}
                >
                  <div className="proj-content sm:px-10 px-7 lg:w-1/2">
                    <div className="text-sm tracking-wider font-bold mb-3.5">{data.head}</div>
                    <h2 className="text-2xl font-extrabold tracking-wider">{data.title}</h2>
                    <p className="mb-5 sm:text-lg text-justify">
                      {data.content}
                    </p>
                    <div className="tag mb-3.5">
                      {
                        data.stack.map((stack, subindex) => {
                          return (
                            <span key={subindex} className="me-3 mb-4 text-base">{stack}</span>
                          )
                        })
                      }

                    </div>
                    <div className="projlinks flex ">
                      <Link className="me-3" href={data.git} target="_blank" aria-label="External Link"><Github /></Link>
                      <Link className="me-3" href={data.deploy} target="_blank" aria-label="External Link"><Mainlink /></Link>
                    </div>
                  </div>
                  <div className="img mb-5 sm:mx-10 mx-7  lg:h-1/2 lg:w-1/2 w-9/12">
                    <Image
                      className="rounded-3xl w-[300px] h-[250px] lg:w-[400px] lg:h-[300px]"
                      src={data.img}
                      alt="proj..."
                      height={0}
                      width={0}
                    />
                  </div>
                </motion.div>
              )
            })
          }

        </div>
      </section>

      <section id="contact" className="contactdetails lg:my-0 my-16">
        <h1 className=" text-gray-100 text-4xl   font-extrabold  text-center mb-7">Hello! 👋 How&apos;s it going?</h1>

        <p className="sm:w-1/2 text-center m-auto text-lg mb-24">If you have any questions or are interested in working with me, please don&apos;t hesitate to reach out. You can contact me via email or connect with me on LinkedIn. I look forward to hearing from you and exploring potential opportunities for collaboration.</p>

        <div className="sm:mx-28 mx-10 ">
          <h4 className="text-gray-100 text-3xl text-center   font-bold   mb-16 ">Don&apos;t be shy! Hit me up! 👇</h4>
          <div className="contact-platform ">
            <div className="connection1 flex md:justify-center justify-start lg:flex-row flex-col items-center">
              <div className="profileimg me-10">
              </div>
              <div className="connection-details mx-20">
                <h3 className="text-white text-3xl font-bold">Malay Kumar Behera</h3>
                <p className="text-xl">
                  <a href="mailto:malaykbehera@gmail.com">malaykbehera@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="connection2 flex flex-wrap justify-center">
              <button className="sm:my-6 my-3 mx-3 text-xl border-2 border-white flex items-center w-fit	rounded-3xl p-2 hover:bg-white hover:text-black ">
                <Linkedin />
                <Link className="ms-2" href="https://www.linkedin.com/in/malaykumarbehera/" target="_blank">LinkedIn</Link>
              </button>

              <button className="sm:my-6 my-3 mx-3 text-xl border-2 border-white flex items-center w-fit	rounded-3xl p-2 hover:bg-white hover:text-black ">
                <Github />
                <Link className="ms-2" href="https://github.com/Malay207/Malay-Kumar.git" target="_blank">GitHub</Link>
              </button>

              <button className="sm:my-6 my-3 mx-3 text-xl border-2 border-white	rounded-3xl p-2 flex items-center w-fit  hover:bg-white hover:text-black ">
                <Instagram />
                <Link href="https://www.instagram.com/ma.lay1994/" className="ms-2" target="_blank">Instagram</Link>
              </button>
            </div>
            <div className="connectin3  sm:m-auto md:w-3/5">
              <SendMsg />
            </div>

          </div>
        </div>
      </section>
      <section className="footer mt-5 border-t-2 border-gray-600">
        <footer>
          <div className="part1 flex justify-between items-center sm:mx-14 mx-6 my-6">
            <h3 className="font-extrabold text-lg"><Link href="#"> Malay Kumar</Link></h3>
            <button className=" hover:text-sky-500 "><Link href="https://drive.google.com/file/d/1oL9RZm5_1aB7vFcUsgqbxLcANFjHxlfs/view?usp=sharing" target="_blank">DOWNLOAD CV</Link></button>
          </div>
          <p className="text-center mb-6">
            © {new Date().getFullYear()} Malay Kumar. All rights reserved.
          </p>

        </footer>
      </section>

    </>
  );
}

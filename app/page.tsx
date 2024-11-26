'use client'
import Header from "./_components/Header/Header";
import Banner from "./_components/Banner/banner";
import Footer from "./_components/footer/footer";
import 'bootstrap/dist/css/bootstrap.css';
import SkillCarousel from "./_components/skills/skill-carousel";
import Connect from "./_components/contact/connect";
import MakeTabs from "./_components/tabs/Tabs";
import ParticlesComponent from "@/utilities/particles-bg";

export default function Home() {
  return (
    <main className="">
      <Header/>
      <Banner/>
      
      <div id='skills' className='container overflow-hidden bg-dark text-center p-3 text-light' style={{ transform: 'translateY(-50px)', borderRadius: '30px' }}>
      <h1 className='text-center text-light'>Skills</h1>
      <p className='text-center text-light d-flex justify-content-center' style={{ paddingLeft: '5rem', paddingRight: '5rem' }}>{'my Name is Ahmed Abuseta, I live in tanta. Front-end {react} dev.'}</p>
      
        <SkillCarousel />
        <ParticlesComponent />
        </div>
      <MakeTabs />
      <Connect/>
      <Footer/>
      
    </main>
  );
}

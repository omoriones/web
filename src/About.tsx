import { Header } from "./components/header"
import { HeroAbout } from "./components/heroAbout"
import { Comment } from "./components/block/comment"
import { Gallery } from "./components/gallery"
import { Title } from "./components/block/title"
import { Experience } from "./components/block/experience"
import { Footer } from "./components/footer"
import { Tag } from "./components/tag"

import ScrollToTop from "./hooks/ScrollToTop"


function About() {
  return (
    <>
		<ScrollToTop />

      <Header level={"project"} />

      <HeroAbout />

      <Comment 
        title="I started as a developer" 
        text="Yep, developer. I have spent 8 years of my life studying a Bachelor in Computer Engineering thinking that I was enjoying 
        coding websites until I wanted to build my own one. SH*T."
      />
      <Comment 
        title="I became enthusiasm about design "
        text="Building my website I realized that I have no clue about designing, interfaces and user experience. I spend many years 
        self-learning on blogs, books, and many online courses. I am a self-taught nomad. "
      />
      <Comment 
        title="9 years designing digital products"
        text="Now I have become a Product Designer that helps startups to improve their digital products through data, user testings, 
        metrics and always trying new alternatives to enhance the user satisfaction."
      />

      <Gallery
        mediaName01="src/assets/images/omoriones/omoriones-01.jpg"
        tag01={<Tag text="Catalonia, Spain"/>}
        mediaType01="image"
		  alt01="Hiking in Catalonia, Spain "
        mediaName02="src/assets/images/omoriones/omoriones-02.mp4"
        tag02={<Tag text="Catalonia, Spain"/>}
        mediaType02="video"
        mediaName03="src/assets/images/omoriones/omoriones-03.mp4"
        tag03={<Tag text="Navarre, Spain"/>}
        mediaType03="video"
      />

      <Title
        title={"My experience"} 
      />

      <Experience
        position="Senior Product / Design System Designer"
        company="GammaUX for HP"
        dates="Jan 2025 - Present"
        text="I managed the several design systems, ensuring components were properly configured, consistent across systems, and met accessibility 
        standards. I worked closely with the development team to ensure accurate and aligned implementation."
      />

      <Experience
        position="Senior Product Designer "
        company="Mango"
        dates="May 2024 - Jan 2025 "
        text="I managed the Mango Outlet website, implementing micro-initiatives to improve conversion rates, tokenizing our design systems, and 
        handling related maintenance and improvement tasks. "
      />

      <Experience
        position="Senior Product Designer "
        company="Huru Ventures"
        dates="Mar 2024 - Ago 2025"
        text="I crafted the entire user journey for this NFT rental platform, its visual identity featuring 3D designs, and a professional investor deck."
      />

      <Experience
        position="Product Designer"
        company="Stayforlong"
        dates="Dic 2018 - Mar 2024"
        text="I designed the entire design ecosystem, defined user journeys, addressed pain points through user testing, and maintained the entire 
        design system."
      />

      <Experience
        position="UX / UI Designer"
        company="Lowtaux"
        dates="Jan 2018 - Sept 2018"
        text="I revamped the entire brand with a modern UI, restructured the information architecture, and enhanced the UX writing."
      />

      <Experience
        position="UX / UI Designer + Frontend Developer"
        company="Clubberize"
        dates="Feb 2017 - Oct 2017"
        text="While designing their three hyper-connected products (an app, a dashboard, and a landing page), I also worked on developing their code."
      />


      <Gallery
        mediaName01="src/assets/images/omoriones/omoriones-04.jpg"
        tag01={<Tag text="Catalonia, Spain"/>}
        mediaType01="image"
		  alt01="Climbing a summit in Catalonia, Spain"
        mediaName02="src/assets/images/omoriones/omoriones-05.jpg"
        tag02={<Tag text="Navarre, Spain"/>}
        mediaType02="image"
		  alt02="Up on a hill in Navarre, Spain"
        mediaName03="src/assets/images/omoriones/omoriones-06.jpg"
        tag03={<Tag text="Basque Country, Spain"/>}
        mediaType03="image"
		  alt03="Views from the top of the Basque Country"
      />


      <Title
        title="How do I design"
      />

      <Comment 
        title="User-centric"
        text="The most important thing about products are the users that interact with them. That's why designing should be based on data and 
        metrics in order to bring the best experience ever. Like a tailored suit."
      />

      <Comment 
        title="Meaningful"
        text="Creating a valuable user experience is key to designing a meaningful product, addressing needs, emotions, and goals to make 
        interactions purposeful and impactful."
      />

      <Comment 
        title="Accessible"
        text="Ensuring that all users, regardless of disabilities or limitations, can interact with and benefit from digital products or 
        services is a must. Design is for everyone!"
      />

      <Comment 
        title="Scalable"
        text="It's key to adapt to increasing demands without sacrificing performance or quality. This way, your product can expand 
        efficiently, reach more users, and ensure sustainability while reducing costs."
      />

      <Comment 
        title="Simple"
        text="Less is more. Always."
      />


      <Gallery
        mediaName01="src/assets/images/omoriones/omoriones-07.mp4"
        tag01={<Tag text="Osaka, Japan"/>}
        mediaType01="video"
        mediaName02="src/assets/images/omoriones/omoriones-08.mp4"
        tag02={<Tag text="Tokyo, Japan"/>}
        mediaType02="video"
        mediaName03="src/assets/images/omoriones/omoriones-09.mp4"
        tag03={<Tag text="Kyoto, Japan"/>}
        mediaType03="video"
      />


      <Title
        title="What I'm learning from this amazing journey"
      />

      <Comment 
        title="Do what you want"
        text="It's the only way to be happy."
      />

      <Comment 
        title="Be brave"
        text="Do not fear the unknown. Enjoy trying new things and learn from it."
      />

      <Comment 
        title="Do it now"
        text="The time is now. If you are always waiting for the perfect moment, you will miss infinite opportunities and new amazing paths."
      />

      
      <Footer />
    </>
  )
}

export default About

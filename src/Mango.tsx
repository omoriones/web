import { Header } from "./components/header"
import { ProjectName } from "./components/block/projectName"
import { ProjectMain } from "./components/block/projectMain"
import { Comment } from "./components/block/comment"
import { Title } from "./components/block/title"
import { Footer } from "./components/footer"
import { ImagePDP } from "./components/imagePDP"
import { ProjectCases } from "./components/block/projectCases"
import { Card } from "./components/card"
import { MoreProjects } from "./components/moreProjects"
import { LinkSecondary } from "./components/link/linkSecondary"
import { Divider } from "./components/divider"

import ScrollToTop from "./hooks/ScrollToTop"


function Mango() {
  return (
    <>
		<ScrollToTop />

      <Header level={"project"} />

		<Divider />

      <ImagePDP
        name01="src/assets/images/mango/cover-mango-01.jpg"
		  alt="Mango project"
      />

      <ProjectName
        company="Mango"
        description="Senior Product Designer   |   UI / UX · Prototyping · Design System · Motion   |   2024 - 2025"
      />

      <ProjectMain
        subtitle="About the project"
        title="Taking fashion further with sustainability and innovation"
        description="Mango is a Spanish fashion brand offering contemporary clothing, accessories, and footwear, blending modern design 
        with affordable prices.<br />
		  <br />
			It focuses on sustainability, authenticity, and innovation to create products that connect with people worldwide.<br />
			<br />
			With over 30 years of history, Mango is a leading reference in the global fashion industry."
      />

      <Title
        number="01"
        title="Understanding the problem"
      />

      <Comment
        title="Elevating their digital products"
        text="As part of their 2025 goals, one of Mango's biggest challenges was to update their visual identity, elevating the UI to match the 
        company's new strategy. Implementing those changes was a cross-team effort."
      />

      <Comment
        title="Micro-iterations for conversion"
        text="Being part of the online team, our main goal as product designers was to increase conversion by implementing micro-iterations 
        on the web and app while iterating on the product."
      />

      <Comment
        title="Improving its Design System"
        text="Our Design System was a bottleneck due to the lack of resources supporting it. I was one of the product designers who helped 
        enhance it by implementing tokenization and establishing its nomenclature. To do so, I  had to audit the three design systems Mango had."
      />

      <ImagePDP 
        name01="src/assets/images/mango/mango-01.jpg"
		  alt="Mango project"
      />


      <Title
        number="02"
        title="Elevating their digital products"
      />

      <Comment
        title="Applying the new visual identity"
        text="Once the visual principles of Mango's new UI and the new typography were defined, it was time to apply them not only to the 
        design system's components but also in a cohesive way, ensuring that all designs conveyed the same visual language."
      />

      <Comment
        title="Working with versions"
        text="To do this, it was necessary to establish a clear roadmap and deadlines, dividing the project into tasks so that we could add 
        them to our sprints. It was a collective effort from every online team to coordinate and deliver it as one."
      />

      <Comment
        title="Touchpoint by touchpoint"
        text="As each team works on a specific part of the e-commerce, we had to maintain very fluent communication and stay hyper-connected, 
        because we have shared user journeys and components."
      />

      <ImagePDP 
        name01="src/assets/images/mango/mango-02.jpg"
		  alt="Mango project"
      />

      <Title
        number="03"
        title="Micro-iterations for conversion"
      />

      <Comment
        title="UX research and benchmarking"
        text="A large majority of our work as product designers at Mango was making micro-iterations to increase the main goal of the 
        e-commerce: the conversion rate. That's why we regularly carried out several researches and benchmarking to validate our hypotheses 
        and ideas."
      />

      <Comment
        title="Making decisions as a team"
        text="We took the opinion of each of our team members very seriously. That's why we analysed the advantages and disadvantages 
        of the possible approaches on the table, considering them from a design perspective, as well as from a technical and product vision."
      />

      <Comment
        title="Validating with AB tests"
        text="Once we agreed on the solution, it was time to design it and then develop it within an A/B test. We usually performed only 
        A/B tests, rather than A/B/C tests, because the results are clearer and the data collection time is shorter. Depending on the 
        project, we prioritised one metric over another, always keeping conversion as the ultimate goal."
      />


      <ImagePDP 
        name01="src/assets/images/mango/mango-03.jpg"
		  alt="Mango project"
      />


      <Title
        number="04"
        title="Improving its Design System"
      />

      <Comment
        title="A clear and valid nomenclature"
        text="Before starting to create tokens recklessly, we had to establish a nomenclature system that would be valid for our three 
        design systems: e-commerce, internal tools, and content management. I carried out a thorough audit of all three to finally come 
        up with a tailored and personalized solution."
      />

      <Comment
        title="Tokens and more tokens"
        text="I tokenised all variables we had in our three design systems. We started with colour, typography, sizing and spacing. It 
        was quite a difficult task as we had different typography for each brand and each device. But we did it!"
      />


      <ImagePDP 
        name01="src/assets/images/mango/mango-04.jpg"
        name02="src/assets/images/mango/mango-05.jpg"
        name03="src/assets/images/mango/mango-06.jpg"
        name04="src/assets/images/mango/mango-07.jpg"
		  alt="Mango project"
      />
      
      <ProjectCases
        title="Case studies"
        text="These are 2 real case studies of this project: how we found out, what we did, what we got and what we did after that. 
        In other words, the entire design process."
        button={<LinkSecondary label={"2 case studies"} href={""} iconSrc={'src/assets/icons/out.svg'} target="_blank"/>}
      />



      <Title
        title="What I've learned from this project"
      />

      <Comment
        title="Outline the importance of small details"
        text="First of all, I have to mention that I have only worked as a product designer in startups, where the daily focus is on 
        solving major problems, and small details are often overlooked. <br />
		  <br />
			Here, I had the opportunity to explore design in depth and in a very meticulous way. For example, I worked on several motion proposals 
			for a list of links and the behaviour of the search box. Doing these kinds of tasks made me realise that when you have the time, you can 
			unlock hidden skills you didn't know you had.<br />
			<br />
			Additionally, working in a larger design environment with different designer profiles helped me grow professionally and expand my knowledge 
			about digital products.<br />
			<br />
			It was definitely an enriching experience in all aspects."
      />


      <MoreProjects
        card01={<Card projectName="Stayforlong" projectSubtitle="An online marketplace specialized in long stays." access="public" totalImages={8}/>}
        card02={<Card projectName="Huru" projectSubtitle="A NFT renting marketplace for gamers by gamers." access="public" totalImages={8}/>}
      />
      
      
      <Footer />

    </>

  );
};

export default Mango

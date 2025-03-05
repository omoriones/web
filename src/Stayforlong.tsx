import { Header } from "./components/header"
import { ProjectName } from "./components/block/projectName"
import { ProjectMain } from "./components/block/projectMain"
import { Comment } from "./components/block/comment"
import { Title } from "./components/block/title"
import { Footer } from "./components/footer"
import { ProjectCases } from "./components/block/projectCases"
import { ImagePDP } from "./components/imagePDP"
import { MoreProjects } from "./components/moreProjects"
import { Card } from "./components/card"
import { Prototype } from "./components/block/prototype"
import { LinkSecondary } from "./components/link/linkSecondary"
import { Divider } from "./components/divider"
import { ImageCover } from "./components/imageCover"

import ScrollToTop from "./hooks/ScrollToTop"


function Stayforlong() {
  return (
    <>

		<ScrollToTop />

      <Header level={"project"} />

		<Divider />

      <ImageCover 
        src="src/assets/images/stayforlong/cover-stayforlong"
		  alt="Stayforlong project"
      />

      <ProjectName
        company="Stayforlong"
        description="Product Designer   |   Research · UI UX · Design System · Prototyping · Icon   |   2018 - 2024"
      />

      <ProjectMain
        subtitle="About the project"
        title="Find the perfect hotel for your long stay holiday"
        description="Stayforlong is an Online Travel Agency (OTA) that rewards vacationers with the best hotel deals: the longer they stay, 
        the better the prices. More nights, better rates! <br /> 
		  <br />
		  It was founded with the belief that people deserve greater benefits when 
        they enjoy longer vacations, while hoteliers can also boost their occupancy rates. It's a win-win situation: both guests and hotels 
        receive special treatment and rewards."
        prototype01={
          <Prototype 
            title="Prototype on Figma" 
            name01={<LinkSecondary label="Mobile" href="https://www.figma.com/proto/wQw4y4R7eJPxPiHhMk3G8M/Stayforlong?page-id=845%3A56227&node-id=845-56264&p=f&viewport=2823%2C399%2C0.1&t=Fdcw50m1JsD7DqRE-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=845%3A56264" iconSrc="src/assets/icons/out.svg" target="_blank"/>} 
            name02={<LinkSecondary label="Tablet" href="https://www.figma.com/proto/wQw4y4R7eJPxPiHhMk3G8M/Stayforlong?page-id=856%3A96531&node-id=856-96556&p=f&viewport=702%2C312%2C0.04&t=DMMIkqkCxpV2po2p-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=856%3A96556" iconSrc="src/assets/icons/out.svg" target="_blank"/>} 
            name03={<LinkSecondary label="Desktop" href="https://www.figma.com/proto/wQw4y4R7eJPxPiHhMk3G8M/Stayforlong?page-id=856%3A116683&node-id=856-116684&p=f&viewport=366%2C317%2C0.04&t=RmPFS2kEjob4E5Oo-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=856%3A116684" iconSrc="src/assets/icons/out.svg" target="_blank"/>} 
          />}
      />

      

      <Title
        number="01"
        title="Understanding the problem"
      />

      <Comment
        title="Thousands of users, low conversion rate"
        text="Startups experiencing rapid growth and receiving thousands of daily visits had significant potential to increase their 
        revenue by improving their conversion rate. That's why optimizing it became a top priority."
      />

      <Comment
        title="No UX visibility"
        text="Since they lacked a tool to measure user performance, we analyzed which of the available market options would be the most 
        suitable. Hotjar turned out to be an effective and user-friendly starter pack."
      />

      <Comment
        title="More retention needed"
        text="Another key objective was to become the go-to choice for vacationers. Our goal was to remain top-of-mind for potential 
        customers whenever they booked holiday accommodations. To achieve this, we focused heavily on web usability, email flows, branding, 
        and performance optimization."
      />

      <ImagePDP
        name01="src/assets/images/stayforlong/stayforlong-01.jpg"
		  alt="Stayforlong project"
      />


      <Title
        number="02"
        title="From zero to hero"
      />

      <Comment
        title="No Design System"
        text="I joined the company when it was still a fledgling startup, without a design system or established guidelines. My first 
        priority was to review each webpage, catalog all the components, and document them in Figma. This process was guided by the 
        principles of Atomic Design."
      />

      <Comment
        title="Tidying up like Marie Kondo"
        text="Thousands of components, many of them quite similar, emerged during the process. It was time to organize, eliminate 
        duplicates, and consolidate to streamline the system and reduce the overall number of components. The fewer components we 
        had, the easier maintenance became."
      />

      <Comment
        title="Working with developers"
        text="The implementation of the new Design System was a gradual and intricate process. It required close collaboration 
        with the development team, making it both challenging and time-consuming. Overseeing and managing tasks allowed me to 
        gain valuable experience on the technical aspects of the projects."
      />

      <Comment
        title="Don't forget about your enemies"
        text="Keeping your friends close and your enemies closer is key to standing out from competitors and shining bright like a 
        diamond. However, it's crucial to do so without ever losing our identity and heart. We have analyzed and learned from our 
        'enemies' in the market to distinguish ourselves."
      />

      <ImagePDP 
        name01="src/assets/images/stayforlong/stayforlong-02.jpg"
		  alt="Stayforlong project"
      />

      <Title
        number="03"
        title="Let's get to know the product"
      />

      <Comment
        title="Setting up a whole UX metrics system"
        text="Once the Design System was in place, it was time to understand our audience. We set up a monthly NPS to track customer 
        satisfaction, as well as conducting moderated user interviews each month using tools like Hotjar, ContentSquare, UserTesting, 
        or Maze. This was just the beginning."
      />

      <Comment
        title="Quite good but not enough"
        text="We saw that our NPS was quite high for our marketplace, and we supported this with quick, short surveys. However, our 
        conversion rate had plenty of room for improvement. We mapped our conversion funnel and identified where the problems were. 
        We were ready to get to work!"
      />

      <Comment
        title="Aligning with company goals"
        text="Among all the areas that needed improvement, it was essential to prioritize those aligned with the company's objectives, 
        rather than personal preferences. This proved to be a valuable learning experience during my time at the company."
      />


      <ImagePDP 
        name01="src/assets/images/stayforlong/stayforlong-03.jpg"
		  alt="Stayforlong project"
      />


      <Title
        number="04"
        title="Discovery"
      />

      <Comment
        title="Uncovering UX weaknesses"
        text="We carried out several actions to identify pain points and validate assumptions, including user testing, quick surveys 
        to gather additional information, and, of course, a monthly NPS to track user satisfaction. We also analyzed heatmaps and tracked 
        our conversion funnel."
      />

      <Comment
        title="Web performance is also UX"
        text="We also tracked user performance metrics, such as LCP (Largest Contentful Paint), total errors, loading times, and more. 
        It became evident that excessive waiting times were contributing to an increased bounce rate. Users want speed."
      />

      <Comment
        title="Defining and prioritizing"
        text="As trivial as it may sound, documenting all problems with evidence and insights, then organizing them in an Impact-Effort Matrix, 
        helped us pinpoint where and how to start addressing them."
      />


      <ImagePDP 
        name01="src/assets/images/stayforlong/stayforlong-04.jpg"
		  alt="Stayforlong project"
      />

      <Title
        number="05"
        title="Exploration"
      />

      <Comment
        title="Be brave"
        text="This is the moment to be creative and bold. Propose any possible solution to the problem. Benchmarking can be a great source of ideas!"
      />

      <Comment
        title="In case of doubt, validate it"
        text="Once all proposals are on the table, one or two are selected by the Product Trio (Product Manager, Technical Lead, and myself 
        as the Product Designer). If there were any doubts about the selection, we validated them through quick user testing."
      />

      <ImagePDP 
        name01="src/assets/images/stayforlong/stayforlong-05.jpg"
		  alt="Stayforlong project"
      />

      <Title
        number="06"
        title="Delivery"
      />

      <Comment
        title="Specifying all requirements"
        text="In this phase, I documented all the requirements for the solution, including assets, user flow diagrams, specifications, 
        functionalities, use cases, and occasionally, technical details."
      />

      <Comment
        title="Double checking the implementation"
        text="The QA team and I ensured everything was in order by first testing in private local environments and then double-checking in production."
      />


      <ImagePDP 
        name01="src/assets/images/stayforlong/stayforlong-06.jpg"
        name02="src/assets/images/stayforlong/stayforlong-07.jpg"
        name03="src/assets/images/stayforlong/stayforlong-08.jpg"
		  alt="Stayforlong project"
      />

      <Title
        number="07"
        title="And back to the start"
      />

      <Comment
        title="Never stop iterating"
        text="If you are a Product Designer, you probably know that this work is never-ending. Users evolve, demand new features, and 
        ultimately, they hold the reins, as products are created for them."
      />

      <ProjectCases
        title="Case studies"
        text="These are three real case studies from this project: how we discovered the issues, what we did, what we achieved, and 
        what happened afterward. In other words, the entire design process."
        button={<LinkSecondary label={"3 case studies"} href={"https://www.figma.com/proto/KffyTwXLMrHh47Z8ZYUARy/Case-Studies?page-id=178%3A1207&node-id=178-1208&p=f&viewport=-109%2C157%2C0.09&t=wu7ZTuyjLPSW3upm-1&scaling=contain&content-scaling=fixed&starting-point-node-id=178%3A1208"} iconSrc={'src/assets/icons/out.svg'} target="_blank"/>}
      />


      <Title
        title="What I've learned from this project"
      />

      <Comment
        title="Amazing enriching adventure"
        text="I joined Stayforlong when it was just getting started – a small team with a lot of tasks and a focus on solutions, not problems.<br />
		  <br />
			I watched my teammates soar, and I went along for the ride. I started as a UI/UX designer and later took on the role of Product Designer, 
			leading my own team.<br />
			<br />
			I quickly learned to manage my own tasks, coordinate with others, handle multiple projects simultaneously, and navigate between different 
			departments. I had a front-row seat to watch the projects I worked on come to life, grow, and hit the production floor.<br />
			<br />
			Every day brought a new challenge, and that's what kept things exciting."
      />
      
      
      <MoreProjects
        card01={<Card projectName="Mango" projectSubtitle="A fashion brand known for its modern clothing." access="private" totalImages={1}/>}
        card02={<Card projectName="Huru" projectSubtitle="A NFT renting marketplace for gamers by gamers." access="public" totalImages={8}/>}
      />

      
      <Footer />

    </>

  );
};

export default Stayforlong

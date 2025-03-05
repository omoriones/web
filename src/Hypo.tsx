import { Header } from "./components/header"
import { ProjectName } from "./components/block/projectName"
import { ProjectMain } from "./components/block/projectMain"
import { Comment } from "./components/block/comment"
import { Title } from "./components/block/title"
import { Footer } from "./components/footer"
import { ImagePDP } from "./components/imagePDP"
import { MoreProjects } from "./components/moreProjects"
import { Card } from "./components/card"
import { Prototype } from "./components/block/prototype"
import { LinkSecondary } from "./components/link/linkSecondary"
import { Divider } from "./components/divider"
import { ImageCover } from "./components/imageCover"

import ScrollToTop from "./hooks/ScrollToTop"


function Hypo() {
  return (
    <>
		<ScrollToTop />
		
      <Header level={"project"} />

		<Divider />

      <ImageCover 
        src="src/assets/images/hypo/cover-hypo"
		  alt="Hypo project"
      />

      <ProjectName
        company="Hypo"
        description="UX/UI designer   |   Rebranding · UI UX · Design System · Prototyping   |   2018"
      />

      <ProjectMain
        subtitle="About the project"
        title="The first mortgage chatbot for customize your home loan"
        description="Hypo is the first chatbot specialized in mortgages that asks the right questions to customize your home loan. 
        Through Hypo's conversation, in less than 5 minutes, you will receive the best rates negotiated by Lowtaux.<br />
		  <br />
		  You can also find the API to integrate Hypo into other websites and a blog about the future of mortgages."
        prototype01={
          <Prototype 
            title="Prototype on Figma" 
            name01={<LinkSecondary label="Mobile" href="https://www.figma.com/proto/gqSGt4JOn8RZT9MgiCiNRU/Hypo?page-id=1%3A8771&node-id=811-29519&p=f&viewport=3633%2C461%2C0.14&t=ErdpEqFdpO0CwI41-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=811%3A29519" iconSrc="src/assets/icons/out.svg" target="_blank"/>} 
            name02={<LinkSecondary label="Tablet" href="https://www.figma.com/proto/gqSGt4JOn8RZT9MgiCiNRU/Hypo?page-id=1%3A8772&node-id=135-15223&p=f&viewport=2787%2C441%2C0.11&t=rot1UBggFGk9KBDh-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=135%3A15223" iconSrc="src/assets/icons/out.svg" target="_blank"/>} 
            name03={<LinkSecondary label="Desktop" href="https://www.figma.com/proto/gqSGt4JOn8RZT9MgiCiNRU/Hypo?page-id=1%3A8773&node-id=24-14163&p=f&viewport=1697%2C523%2C0.07&t=qzkNo4ixH4OYgQ1Q-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=24%3A14163" iconSrc="src/assets/icons/out.svg" target="_blank"/>} 
          />}
      />

      <Title
        number="01"
        title="Addressing the challenge"
      />

      <Comment
        title="Creating a chatbot"
        text="It was my first time diving into the world of chatbots, so I had to do a condensed masterclass on what they were, how 
        they worked, and how they were impacting society."
      />

      <Comment
        title="Creating the content"
        text="Also, there were many ideas that had to be translated into words, then paragraphs, sections, and finally pages—ranging 
        from articles to legal information to API guides. A complete challenge."
      />

      <Comment
        title="Creating a client space"
        text="After the chatbot conversation, all the information was stored in databases, and users could edit their responses to adjust 
        their personalized mortgage. This required a complex and detailed UX definition."
      />


      <Title
        number="02"
        title="Analyzing the competence"
      />

      <Comment
        title="Knowing the market"
        text="The major competitors in the mortgage market inspired me on how we could stand out and be unique. The chatbot had to be fun, 
        light-hearted, conversational, and quick."
      />

      <ImagePDP 
        name01="src/assets/images/hypo/hypo-01.jpg"
		  alt="Hypo project"
      />

      <Title
        number="03"
        title="Designing from zero"
      />

      <Comment
        title="Designing Hypo"
        text="Hypo was chosen as the name, derived from 'hyper' (hyp-o), reflecting its nature as the first and fastest mortgage chatbot. 
        Designed to feel like it came from the future, it had to be robotic yet humanized, so users could relate to it as an equal."
      />

      <Comment
        title="Hypo is almost human"
        text="Hypo has feelings: it's happy to see you, confused when something doesn't make sense, surprised when you return, and sad 
        when you leave."
      />

      <Comment
        title="The color"
        text="As it was a product from Lowtaux, it had to follow the same color scheme. I reused the vibrant turquoise, applied it with 
        gradients, and paired it with soft gray tones."
      />

      <Comment
        title="The typography"
        text="To give it a futuristic touch and differentiate it slightly from Lowtaux, the chosen typography was Roboto: readable, 
        easy, and visionary."
      />


      <ImagePDP 
        name01="src/assets/images/hypo/hypo-02.jpg"
		  alt="Hypo project"
      />


      <Title
        number="04"
        title="The solution"
      />

      <Comment
        title="The future is Hypo"
        text="In an old-school market, a chatbot was a risky yet innovative solution, aimed at connecting with younger people, making 
        processes easier and faster, and reducing costs. We were pioneers."
      />


      <ImagePDP 
        name01="src/assets/images/hypo/hypo-03.jpg"
        name02="src/assets/images/hypo/hypo-04.jpg"
        name03="src/assets/images/hypo/hypo-05.jpg"
        name04="src/assets/images/hypo/hypo-06.jpg"
        name05="src/assets/images/hypo/hypo-07.jpg"
        name06="src/assets/images/hypo/hypo-08.jpg"
		  alt="Hypo project"
      />



      <Title
        title="What I've learned from this project"
      />

      <Comment
        title="I'm not afraid to fail"
        text="It was my first project where I had to do everything from scratch—nothing was done yet. I had to write all the content, 
        come up with catchy copy, create and design Hypo, and give it a strong enough personality to stand out from the competition.<br />
		  <br />
			I'm incredibly proud of the results, and I consider it one of my masterpieces.<br />
			<br />
			The key takeaway from this project is not to be afraid of failing when trying something for the first time. You should always try, even if you're unsure how to do it."
      />
                  
                  
      <MoreProjects
        card01={<Card projectName="Lowtaux" projectSubtitle="A mortgage website for getting the lowest rate." access="public" totalImages={8}/>}
        card02={<Card projectName="Huru" projectSubtitle="A NFT renting marketplace for gamers by gamers." access="public" totalImages={8}/>}
      />

      
      <Footer />

    </>

  );
};

export default Hypo

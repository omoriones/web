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


function AppHuru() {
  return (
    <>
      <Header level={"project"} />

		<Divider />

      <ImageCover
        src="src/assets/images/huru/cover-huru"
		  alt="Huru project"
      />

      <ProjectName
        company="Huru"
        description="Senior Product Designer   |   Research · UI UX · Design System · Prototyping · Icon   |   2024"
      />

      <ProjectMain
        subtitle="About the project"
        title="A platform for renting/lending NFTs for gamers by gamers"
        description="Huru is a marketplace where you can rent Non-Fungible Tokens (NFTs) to enhance your gameplay or monetise unused NFTs 
        by lending them.<br />
		  <br />
        This project leverages the ERC-4907 sharing protocol to create smart contracts between gamers, enabling temporary user changes 
        while retaining NFT ownership. This ensures protection for both lenders and renters. Additionally, Huru allows you to play using 
        your own account, eliminating the need to create fake accounts for revenue sharing with strangers."
        prototype01={
          <Prototype 
            title="Prototype on Figma (Marketplace)" 
            name01={<LinkSecondary label="Mobile" href="https://www.figma.com/proto/CooGBmKzCWFrogZIik9vMT/Huru?page-id=1490%3A28406&node-id=1490-28480&p=f&viewport=1959%2C351%2C0.11&t=mCuDDRfZfK6G85aE-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1490%3A28480" iconSrc="src/assets/icons/out.svg" target="_blank"/>} 
            name02={<LinkSecondary label="Tablet" href="https://www.figma.com/proto/CooGBmKzCWFrogZIik9vMT/Huru?page-id=1501%3A46372&node-id=1501-46435&p=f&viewport=1280%2C513%2C0.07&t=E6XevXoS7gXaZJlh-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1501%3A46435" iconSrc="src/assets/icons/out.svg" target="_blank"/>} 
            name03={<LinkSecondary label="Desktop" href="https://www.figma.com/proto/CooGBmKzCWFrogZIik9vMT/Huru?page-id=1507%3A22357&node-id=1507-22398&p=f&viewport=832%2C510%2C0.04&t=TPhcazU8MtnWXoD3-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1507%3A22398" iconSrc="src/assets/icons/out.svg" target="_blank"/>} 
          />}
        prototype02={
          <Prototype 
            title="Prototype on Figma (Landing page)" 
            name01={<LinkSecondary label="Mobile" href="https://www.figma.com/proto/CooGBmKzCWFrogZIik9vMT/Huru?page-id=1520%3A19561&node-id=1520-22471&p=f&viewport=636%2C467%2C0.07&t=pUATEosmYAw72Lnd-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1520%3A22471" iconSrc="src/assets/icons/out.svg" target="_blank"/>} 
            name02={<LinkSecondary label="Tablet" href="https://www.figma.com/proto/CooGBmKzCWFrogZIik9vMT/Huru?page-id=1520%3A22441&node-id=1520-23586&p=f&viewport=610%2C464%2C0.08&t=SF8derLJxilvWlrF-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1520%3A23586" iconSrc="src/assets/icons/out.svg" target="_blank"/>} 
            name03={<LinkSecondary label="Desktop" href="https://www.figma.com/proto/CooGBmKzCWFrogZIik9vMT/Huru?page-id=1520%3A22442&node-id=1520-24464&p=f&viewport=543%2C464%2C0.1&t=qu5UjVgFljEq7kON-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1520%3A24464" iconSrc="src/assets/icons/out.svg" target="_blank"/>} 
          />}
      />

      <Title
        number="01"
        title="Addressing the challenge"
      />

      <Comment
        title="An unknown path"
        text="As a self-proclaimed nerd, my initial knowledge of NFTs was limited—I had little understanding of sharing protocols, 
        trader pain points, or even cryptocurrencies and crypto wallets. For this reason, my first step was to dive into the NFT 
        crypto world and absorb a wealth of new information."
      />

      <Comment
        title="A revolutionary NFT marketplace"
        text="Once I became familiar with the crypto vocabulary, I was able to understand NFT trading and realized how Huru could 
        address its key challenges: maintaining NFT ownership and preventing users from sharing revenue with unknown individuals. 
        This would make Huru the first marketplace to offer such protection and security."
      />

      <Comment
        title="Hands on"
        text="With Huru only having a modest logo for its branding, it was time to showcase who Huru was and why it could be a game 
        changer through a strong visual identity. To achieve this, I designed not only the marketplace itself but also a landing 
        page to provide more information about their projects."
      />


      <Title
        number="02"
        title="Evaluating competitors"
      />

      <Comment
        title="Pros and cons"
        text="Since the world of NFTs was largely unfamiliar to me, I conducted research on Huru's main competitors and analyzed 
        their strengths and weaknesses, focusing on areas such as UI, UX, user flows, and information architecture. From this analysis,
        I was able to draw several key conclusions, which are detailed below. This made the direction of the project crystal clear."
      />

      <ImagePDP 
        name01="src/assets/images/huru/huru-01.png"
		  alt="Huru project"
      />

      <Title
        number="03"
        title="Discovery"
      />

      <Comment
        title="Trading, mapping and hiding"
        text="Mapping the NFT trading user flow and simplifying all user stories was crucial to integrating the new protocol into an 
        existing system. It wasn't about reinventing the wheel but rather adding new scenarios and ensuring they were transparent to users."
      />

      <Comment
        title="Big screens and good readability"
        text="Designing for a high-demand niche where users' money is at stake requires delivering a high-quality interface tailored to 
        their needs. In this case, that meant prioritizing large gamer screens over the typical mobile-first design approach—flipping 
        the usual process on its head. Paradoxically, to ensure readability, I chose to keep information within a narrow column at the 
        center of the screen."
      />


      <ImagePDP 
        name01="src/assets/images/huru/huru-02.png"
		  alt="Huru project"
      />


      <Title
        number="04"
        title="Exploration"
      />

      <Comment
        title="3D language and dark mode"
        text="Exploring the world of 3D image generation was essential when working with NFTs for gaming—not mandatory, 
        but highly desirable. I learned to use 3D design tools to create striking visuals and also gained experience designing 
        in dark mode for the first time in a professional setting."
      />

      <Comment
        title="Accessibility for everyone"
        text="As you grow as a designer, you come to understand the importance of accessibility and begin designing products that 
        are inclusive for everyone. Elements like button minimum widths, ARIA attributes, focus order, text contrast, and alt text 
        may not be immediately visible but are essential considerations even before the development phase begins. While the happy path 
        is crucial, addressing corner cases is equally important."
      />


      <ImagePDP 
        name01="src/assets/images/huru/huru-03.png"
		  alt="Huru project"
      />

      <Title
        number="05"
        title="Delivery"
      />

      <Comment
        title="Firs time freelancing"
        text="Life is a labyrinth, and you never know where it will lead. However, you need to be prepared. For this project, I decided 
        to try freelancing for the first time, which meant establishing a process, writing contracts, and setting deadlines, including 
        file-delivery agreements."
      />

      <ImagePDP 
        name01="src/assets/images/huru/huru-04.png"
        name02="src/assets/images/huru/huru-05.png"
        name03="src/assets/images/huru/huru-06.png"
        name04="src/assets/images/huru/huru-07.png"
		  alt="Huru project"
      />

      <Title
        number="07"
        title="What I've learned from this project"
      />

      <Comment
        title="Leaving the comfort zone"
        text="This challenging project introduced many unexpected firsts that led to valuable learning experiences. NFTs, cryptocurrencies, 
		  3D design, dark mode, design configuration, and accessibility are just some of the new areas of knowledge I will apply to future projects.<br />
		  <br />
			I would have loved to continue designing Huru's marketplace and see it implemented as a fully developed platform with real users, 
			where I could have measured performance and gathered feedback.<br />
			<br />
			Ultimately, I feel I've become a better designer by pushing my boundaries. I'm always eager to explore the unknown and can't wait 
			for the next project!"
      />
            
            
      <MoreProjects
        card01={<Card projectName="Mango" projectSubtitle="A fashion brand known for its modern clothing." access="private" totalImages={1}/>}
        card02={<Card projectName="Stayforlong" projectSubtitle="An online marketplace specialized in long stays." access="public" totalImages={8}/>}
      />

      
      <Footer />

    </>

  );
};

export default AppHuru

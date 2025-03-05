import { Header } from './components/header'
import { ProjectName } from './components/block/projectName'
import { ProjectMain } from './components/block/projectMain'
import { Comment } from './components/block/comment'
import { Title } from './components/block/title'
import { Footer } from './components/footer'
import { ImagePDP } from './components/imagePDP'
import { MoreProjects } from './components/moreProjects'
import { Card } from './components/card'
import { Prototype } from './components/block/prototype'
import { LinkSecondary } from './components/link/linkSecondary'
import { Divider } from './components/divider'
import { ImageCover } from './components/imageCover'

import ScrollToTop from './hooks/ScrollToTop'

function Lowtaux() {
  return (
    <>
      <ScrollToTop />

      <Header level={'project'} />

      <Divider />

      <ImageCover
        src="src/assets/images/lowtaux/cover-lowtaux"
        alt="Lowtaux project"
      />

      <ProjectName
        company="Lowtaux"
        description="UX/UI designer   |   Rebranding · UI UX · Design System · Prototyping   |   2018"
      />

      <ProjectMain
        subtitle="About the project"
        title="Get the lowest rate for your real state projects"
        description="Lowtaux is a mortgage brokerage company founded in June 2006 in Nantes. It negotiates with French banks to secure 
        the lowest rates for its clients. Its philosophy focuses on the well-being of borrowers, always striving to offer them the best options.<br />
		  <br />
			Now, the company aims to improve its online presence to expand its influence and grow in the digital market. They are seeking a new mobile-first 
			design, as they have found that 40% of their online visits come from mobile devices."
        prototype01={
          <Prototype
            title="Prototype on Figma"
            name01={
              <LinkSecondary
                label="Mobile"
                href="https://www.figma.com/proto/h1ITxIxrUHSXCPzScdkSxh/Lowtaux?page-id=5%3A6250&node-id=32-3966&p=f&viewport=55%2C229%2C0.11&t=2kjRc4Fu2XYN1mzm-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=32%3A3966"
                iconSrc="src/assets/icons/out.svg"
                target="_blank"
              />
            }
            name02={
              <LinkSecondary
                label="Tablet"
                href="https://www.figma.com/proto/h1ITxIxrUHSXCPzScdkSxh/Lowtaux?page-id=5%3A6251&node-id=32-4099&p=f&viewport=-21%2C391%2C0.07&t=dbFvebFLliI0sp5c-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=32%3A4099"
                iconSrc="src/assets/icons/out.svg"
                target="_blank"
              />
            }
            name03={
              <LinkSecondary
                label="Desktop"
                href="https://www.figma.com/proto/h1ITxIxrUHSXCPzScdkSxh/Lowtaux?page-id=5%3A6252&node-id=32-4328&p=f&viewport=56%2C423%2C0.05&t=FyA3slNLxb5XeOqo-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=32%3A4328"
                iconSrc="src/assets/icons/out.svg"
                target="_blank"
              />
            }
          />
        }
      />

      <Title number="01" title="Understanding the problem" />

      <Comment
        title="Updating their digital image"
        text="With over 15 years in the French mortgage market, Lowtaux was a company looking for a fresh, modern identity in the digital age. 
        While they had a strong physical presence, their online presence was lacking. This is why they wanted to refresh their branding."
      />

      <Comment
        title="Mobile-first design"
        text="With mobile traffic increasing every day, they asked me to design a UX based on mobile-first principles, focusing on users using 
        smartphones or tablets."
      />

      <ImagePDP
        name01="src/assets/images/lowtaux/lowtaux-01.jpg"
        alt="Lowtaux project"
      />

      <Title number="02" title="Learning about the market" />

      <Comment
        title="Knowing the competence"
        text="They realized they were falling behind as their competitors capitalized on the online market, which was cheaper and more 
        profitable than the traditional office-based model. They didn't want to be left behind."
      />

      <ImagePDP
        name01="src/assets/images/lowtaux/lowtaux-02.jpg"
        alt="Lowtaux project"
      />

      <Title number="03" title="Rebranding the brand" />

      <Comment
        title="New essence"
        text="They wanted their brand to reflect three key aspects: simplicity, modernity, and reliability."
      />

      <Comment
        title="New colors"
        text="Red was too bold for a mortgage company that wanted to convey reliability. Instead, this dark blue would work well 
        as the primary color, while the vibrant turquoise would add the desired modern touch as a secondary color."
      />

      <Comment
        title="New typography"
        text="Round and bold, this typography called Brown conveys strength, modernity, and a fresh new vibe to the brand."
      />

      <ImagePDP
        name01="src/assets/images/lowtaux/lowtaux-03.jpg"
        alt="Lowtaux project"
      />

      <Title number="04" title="Improving the UX" />

      <Comment
        title="Reorganizing like Marie Kondo"
        text="Too much text, too many pages, and redundant information. In this digital era, it's crucial to condense content as 
        much as possible and display only relevant information to users. Making the user journey intuitive and accessible within a 
        few clicks is key to ensuring a positive experience."
      />

      <Comment
        title="New email templates"
        text="Not only with the website but also through emails, the company understood that email marketing is essential for a digital 
        product's success. So, I designed several emails with a humorous tone to encourage user engagement."
      />

      <ImagePDP
        name01="src/assets/images/lowtaux/lowtaux-04.jpg"
        name02="src/assets/images/lowtaux/lowtaux-05.jpg"
        name03="src/assets/images/lowtaux/lowtaux-06.jpg"
        name04="src/assets/images/lowtaux/lowtaux-07.jpg"
        name05="src/assets/images/lowtaux/lowtaux-08.jpg"
        name06="src/assets/images/lowtaux/lowtaux-09.jpg"
        name07="src/assets/images/lowtaux/lowtaux-10.jpg"
        alt="Lowtaux project"
      />

      <Title title="What I've learned from this project" />

      <Comment
        title="Simplicity is key"
        text="With this project, I truly learned why 'less is more' is so important. It was a complete challenge to condense all the information, 
		  articles, pages, and legal details as much as possible, showing only what was important and hiding what wasn't. It took me several weeks 
		  to reorganize the sitemap.<br />
		  <br />
			I also discovered that I can illustrate things on my own. Not as a pro, but as a decent beginner. This made me realize that I can achieve 
			anything I set my mind to, and for those things I don't yet know how to do, it's not a problem — I just need to learn how to do them.<br />
			<br />
			And I love to learn."
      />

      <MoreProjects
        card01={
          <Card
            projectName="Hypo"
            projectSubtitle="An AI chatbot for simulating your mortgage."
            access="public"
            totalImages={8}
          />
        }
        card02={
          <Card
            projectName="Clubberize"
            projectSubtitle="A music event recommender app for live music lovers."
            access="public"
            totalImages={8}
          />
        }
      />

      <Footer />
    </>
  )
}

export default Lowtaux

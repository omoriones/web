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

function Clubberize() {
  return (
    <>
      <ScrollToTop />

      <Header level={'project'} />

      <Divider />

      <ImageCover
        src="src/assets/images/clubberize/cover-clubberize"
        alt="Clubberize project"
      />

      <ProjectName
        company="Clubberize"
        description="UX/UI designer +  Front end Developer   |   Coding · Rebranding · UI UX · Design System · Prototyping   |   2017"
      />

      <ProjectMain
        subtitle="About the project"
        title="The app that recommends you music events and festivals"
        description="Clubberize is an intelligent app that recommends nearby music events and festivals based on your favorite genres. 
        You can explore parties, buy tickets, track artists and venues, and create your own festival schedule.<br />
		  <br />
			But Clubberize is more than just an app; it's also a powerful marketing tool for managers, promoters, and venue owners. 
			With the Clubberize Dashboard, you can access stats for your events, including the number of attendees, demographic metrics, ticketing data, 
			and more detailed analytics.<br />
			<br />
			This data enables you to evaluate the performance of your music event, learn from it, and improve future events to provide an even better 
			experience for your audience."
        prototype01={
          <Prototype
            title="Prototype on Figma"
            name01={
              <LinkSecondary
                label="Dashboard"
                href="https://www.figma.com/proto/mCziUwppf0mkTwximLxMWQ/Clubberize?page-id=125%3A39830&node-id=133-39270&p=f&viewport=-58%2C202%2C0.05&t=9IkDOwzc0UB5Dcj9-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=133%3A39270"
                iconSrc="src/assets/icons/out.svg"
                target="_blank"
              />
            }
            name02={
              <LinkSecondary
                label="Website"
                href="https://www.figma.com/proto/mCziUwppf0mkTwximLxMWQ/Clubberize?page-id=133%3A39269&node-id=274-78137&p=f&viewport=-819%2C25%2C0.1&t=QmoJuOPX6OzcMsE0-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=274%3A78137"
                iconSrc="src/assets/icons/out.svg"
                target="_blank"
              />
            }
            name03={
              <LinkSecondary
                label="App"
                href="https://www.figma.com/proto/mCziUwppf0mkTwximLxMWQ/Clubberize?page-id=4%3A32887&node-id=4-32894&p=f&viewport=233%2C150%2C0.07&t=I8Y9cONB1QqQGa5o-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A32888"
                iconSrc="src/assets/icons/out.svg"
                target="_blank"
              />
            }
          />
        }
      />

      <Title number="01" title="Understanding the problem" />

      <Comment
        title="Updating their image"
        text="Clubberize had an old-school image, very dark and focused on electronic music, as it was originally created for that purpose. 
        However, now they wanted to incorporate more genres, so the app's interface needed to reflect this shift."
      />

      <Comment
        title="An app, a dashboard and a website"
        text="Clubberize offers an app for users and a website for additional information and marketing purposes. There is also a dashboard 
        tool for promoters and managers to add music events to the app, track performance, and monitor user behavior."
      />

      <ImagePDP
        name01="src/assets/images/clubberize/clubberize-01.jpg"
        alt="Clubberize project"
      />

      <Title number="02" title="Analyzing the competence" />

      <Comment
        title="Big competitors, a true challenge"
        text="Huge global companies, such as Resident Advisor and Bandsintown, dominated the market, taking the majority share of music 
        events and festival ticketing. We had to make a difference."
      />

      <ImagePDP
        name01="src/assets/images/clubberize/clubberize-02.jpg"
        alt="Clubberize project"
      />

      <Title number="03" title="A new fresh brand" />

      <Comment
        title="Live music lovers"
        text="We had to come up with a tagline that would summarize the company's new concept, so I could design the new interface 
        accordingly."
      />

      <Comment
        title="Adding a secondary color and a gradient"
        text="To complement the company's primary color, I added a second one and blended them into a gradient. Just like our mood 
        flows with music—sometimes we chill, and sometimes we rock!"
      />

      <Comment
        title="The typography"
        text="It had to be neutral to accommodate the wide range of music genres, but with personality. And it had to be budget-friendly. 
        I love these kinds of challenges, which is why I chose Inter."
      />

      <ImagePDP
        name01="src/assets/images/clubberize/clubberize-03.jpg"
        alt="Clubberize project"
      />

      <Title number="04" title="The app" />

      <Comment
        title="Onboarding"
        text="The app's onboarding was a delicate first step, as we needed to collect the minimum required information to gather data 
        while also asking about users' favorite music genres."
      />

      <Comment
        title="Events, festivals and artists"
        text="Music events and festivals needed to track how many attendees were going, display all available ticket types, and show which 
        artists would be performing. Additionally, artists could provide more information about themselves and list the events they would be 
        participating in. It was crucial to always connect artists with events to streamline the ticket purchasing process for users."
      />

      <Comment
        title="Ticket purchase process"
        text="Simplicity, ease, and speed were the three must-haves of this process."
      />

      <ImagePDP
        name01="src/assets/images/clubberize/clubberize-04.jpg"
        alt="Clubberize project"
      />

      <Title number="05" title="The website" />

      <Comment
        title="Home page"
        text="Designed to be attractive, fresh, and cool, with the main goal of encouraging app downloads. As a secondary goal, users would 
        also find more information about how the app works, as well as a music blog featuring event details and artist interviews."
      />

      <Comment
        title="How it works"
        text="A page that demonstrates how to use the app, highlights its features, and explains why users should download it."
      />

      <Comment
        title="Blog"
        text="A music blog where Clubberizers can learn more about artists through interviews, articles from promoters or venues, and a marketing 
        and SEO tool to help drive more traffic to the app."
      />

      <ImagePDP
        name01="src/assets/images/clubberize/clubberize-05.jpg"
        alt="Clubberize project"
      />

      <Title number="06" title="The dashboard" />

      <Comment
        title="Events, festivals and artists"
        text="Promoters can publish events, set up ticketing, and view stats from past events, such as demographics and ticket sales. 
        The same applies to festivals, with the added option of a calendar to configure when and with whom each artist will perform.<br />
		  <br />
			Artists are key to the system, as without them, events and festivals wouldn't exist. That's why their information must include who they are, 
			what genres they play, and where they will perform."
      />

      <Comment
        title="Venues"
        text="Venues are where artists perform, and as the owner, you can also manage the events at your venue."
      />

      <ImagePDP
        name01="src/assets/images/clubberize/clubberize-06.jpg"
        name02="src/assets/images/clubberize/clubberize-07.jpg"
        name03="src/assets/images/clubberize/clubberize-08.jpg"
        alt="Clubberize project"
      />

      <Title title="What I've learned from this project" />

      <Comment
        title="My first big design system"
        text="Clubberize was an amazing challenge because I had never worked with an ecosystem of three hyper-connected products interacting 
        as a single unit. <br/>
		  <br />
			It might seem like an easy task, but in fact, it wasn't. First, I had to understand how the dashboard worked and how it affected the app. 
			Then, I addressed the UX issues. Next, I created a new interface style for all three projects. Finally, I coded them into a cohesive, living 
			system.<br/>
			<br />
			This experience taught me how to design large-scale design systems."
      />

      <MoreProjects
        card01={
          <Card
            projectName="Stayforlong"
            projectSubtitle="An online marketplace specialized in long stays."
            access="public"
            totalImages={8}
          />
        }
        card02={
          <Card
            projectName="Lowtaux"
            projectSubtitle="A mortgage website for getting the lowest rate."
            access="public"
            totalImages={8}
          />
        }
      />

      <Footer />
    </>
  )
}

export default Clubberize

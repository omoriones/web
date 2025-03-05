import { Card } from '../card'
import classes from './listProjects.module.css'

export const ListProjects = () => {
  return (
    <div className={classes.listProjects}>
      <h4>Projects</h4>

      <div className={classes.listProjectsContainer}>
        <div className={classes.listProjectsSubcontainer}>
          <Card
            projectName={'Mango'}
            projectSubtitle={'A fashion brand known for its modern clothing.'}
            access="private"
            totalImages={1}
          />
          <Card
            projectName={'Stayforlong'}
            projectSubtitle={'An online marketplace specialized in long stays.'}
            access="public"
            totalImages={8}
          />
        </div>

        <div className={classes.listProjectsSubcontainer}>
          <Card
            projectName={'Huru'}
            projectSubtitle={'A NFT renting marketplace for gamers by gamers.'}
            access="public"
            totalImages={8}
          />
          <Card
            projectName={'Clubberize'}
            projectSubtitle={
              'A music event recommender app for live music lovers.'
            }
            access="public"
            totalImages={8}
          />
        </div>

        <div className={classes.listProjectsSubcontainer}>
          <Card
            projectName={'Lowtaux'}
            projectSubtitle={'A mortgage website for getting the lowest rate.'}
            access="public"
            totalImages={8}
          />
          <Card
            projectName={'Hypo'}
            projectSubtitle={'An AI chatbot for simulating your mortgage.'}
            access="public"
            totalImages={8}
          />
        </div>
      </div>
    </div>
  )
}

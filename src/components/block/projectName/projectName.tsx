import classes from './projectName.module.css'

interface ProjectNameProps {
  company: string
  description: string
}

export const ProjectName: React.FC<ProjectNameProps> = ({
  company,
  description,
}) => {
  return (
    <div className={classes.projectName}>
      <h1>{company}</h1>
      <h5>{description}</h5>
    </div>
  )
}

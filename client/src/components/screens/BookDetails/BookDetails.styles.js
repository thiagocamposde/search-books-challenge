import { withStyles } from '@material-ui/styles'
import BookDetails from './BookDetails'

const styles = theme => {
  return {
    root: {
      padding: '5rem 0',
      overflow: 'hidden'
    },
    bookContainer: {
      marginTop: '1rem',
      [theme.breakpoints.down('md')]: {
        padding: '1rem'
      }
    },
    title: {
      marginBottom: '2rem'
    }
  }
}

export default withStyles(styles)(BookDetails)

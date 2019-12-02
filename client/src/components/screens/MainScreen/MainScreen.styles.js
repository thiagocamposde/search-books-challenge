import { withStyles } from '@material-ui/styles'
import MainScreen from './MainScreen'

const styles = theme => {
  return {
    root: {
      backgroundColor: theme.colors.lightBackground
    }
  }
}

export default withStyles(styles)(MainScreen)

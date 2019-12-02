import { withStyles } from '@material-ui/styles'
import SearchBooks from './SearchBooks'

const styles = theme => {
  return {
    root: {
      padding: '1.6rem'
    },
    searchBar: {
      flexGrow: 1
    },
    input: {
      padding: '1.3rem'
    },
    dateTextField: {
      width: '10rem'
    },
    textField: {
      width: '100%'
    },
    resultsFounded: {
      flexGrow: 1,
      textAlign: 'end'
    },
    tablePaper: {
      width: '100%',
      marginTop: '2rem'
    },
    searchButton: {
      padding: '1rem 3rem',
      fontSize: '1rem'
    },
    progress: {
      padding: '50px'
    },
    pagination: {
      listStyleType: 'none',
      color: theme.colors.darkGray1,
      fontSize: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0',
      margin: '0'
    },
    subContainerPagination: {
      borderColor: theme.colors.darkGray1,
      float: 'left',
      border: '0.1rem solid',
      display: 'flex',
      cursor: 'pointer',
      margin: '1rem 2px'
    },
    pageLinkClassName: {
      padding: '5px 15px'
    },
    previousClassName: {
      float: 'left',
      marginRight: '1rem',
      cursor: 'pointer'
    },
    nextClassName: {
      float: 'left',
      marginLeft: '1rem',
      cursor: 'pointer'
    },
    active: {
      backgroundColor: theme.colors.lightGray1
    }

  }
}

export default withStyles(styles)(SearchBooks)

/* listContainer: {
      marginTop: '5rem',
      [theme.breakpoints.down('md')]: {
        width: '100%'
      }
    },
    subContainerPagination: {
      backgroundColor: theme.colors.lightGray2,
      borderColor: theme.colors.darkGray2
    } */

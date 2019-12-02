import React from 'react'
import BookDetails from '../BookDetails'
import { Switch, Route } from 'react-router-dom'
import SearchBooks from '../SearchBooks'

const MainsScreen = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Switch>
        <Route
          exact path='/' render={props => (
            <SearchBooks {...props} />
          )}
        />
        <Route
          path='/book/details/:id?' render={props => (
            <BookDetails {...props} />
          )}
        />
        )}
      />
      </Switch>
    </div>
  )
}

export default MainsScreen

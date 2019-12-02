import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { getBookById } from '../../../api/book.api'
import { Redirect } from 'react-router-dom'
import image from '../../../assets/mockup.jpg'

const BookDetails = ({ baseUrl, match, classes }) => {
  const bookId = match.params.id

  const [book, setBook] = useState(null)

  useEffect(() => {
    if (bookId) {
      getBookById(bookId).then((result) => {
        setBook(result)
      })
    }
  }, [bookId])

  if (!bookId) {
    return <Redirect to={{ pathname: '/' }} />
  }

  if (!book) return null

  return (
    <div className={classes.root}>
      <div className={classes.bookContainer}>
        <Grid container spacing={6} justify='center'>
          <Grid item container justify='flex-end' sm={5}>
            <img className={classes.poster} src={image} alt={book.title} />
          </Grid>
          <Grid container direction='column' item sm={5} spacing={2}>
            <Grid item>
              <Typography className={classes.title} variant='h2' color='textPrimary'>
                <b>{book.titulo}</b>
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom color='textPrimary'>
                <b>ISBN</b>
              </Typography>
              <Typography gutterBottom color='textPrimary'>
                {book.isbn}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom color='textPrimary'>
                <b>Autor</b>
              </Typography>
              <Typography gutterBottom color='textPrimary'>
                {book.autor}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom color='textPrimary'>
                <b>Idioma</b>
              </Typography>
              <Typography gutterBottom color='textPrimary'>
                {book.idioma}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom color='textPrimary'>
                <b>Editora</b>
              </Typography>
              <Typography gutterBottom color='textPrimary'>
                {book.editora}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom color='textPrimary'>
                <b>Ano de publicação</b>
              </Typography>
              <Typography gutterBottom color='textPrimary'>
                {book.ano}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom color='textPrimary'>
                <b>Peso</b>
              </Typography>
              <Typography gutterBottom color='textPrimary'>
                {book.peso}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom color='textPrimary'>
                <b>Dimensões</b>
              </Typography>
              <Typography gutterBottom color='textPrimary'>
                {book.dimensoes}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default BookDetails

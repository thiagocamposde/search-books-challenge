import React, { useEffect, useState } from 'react'
import { Grid, Typography, Button, Divider, Container, TextField, InputAdornment, Paper, Table, TableCell, TableRow, TableBody, CircularProgress } from '@material-ui/core'
import DateRangeIcon from '@material-ui/icons/DateRange'
import SearchIcon from '@material-ui/icons/Search'
import ReactPaginate from 'react-paginate'
import { searchBooks } from '../../../api/book.api'
import { Link } from 'react-router-dom'

const SearchBooks = ({ booksLoading, classes }) => {
  const [books, setBooks] = useState(null)
  const [query, setQuery] = useState('')
  const [startDate, setStartDate] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [totalPages, setTotalPages] = useState(null)
  const [resultsFound, setResultsFound] = useState(null)
  const [currentPage, setPage] = useState(1)

  useEffect(() => {
    fetchBooks(currentPage)
  }, [currentPage])

  const fetchBooks = async () => {
    const response = await searchBooks(query, startDate, dueDate, currentPage)
    setBooks(response.results)
    setTotalPages(response.total_pages)
    setResultsFound(response.total)
  }

  const handlePageClick = (selectedPage) => {
    setPage(selectedPage.selected + 1)
    fetchBooks(selectedPage.selected + 1)
  }

  const handleStartDateChange = (e) => setStartDate(parseInt(e.target.value))

  const handleDueDateChange = (e) => setDueDate(parseInt(e.target.value))

  const handleSearchChange = (e) => setQuery(e.target.value)

  const handleSearchClick = async () => fetchBooks()

  if (!books) return null

  return (
    <Container className={classes.root}>
      <Grid container spacing={2} direction='column'>
        <Grid item container spacing={2} alignItems='center'>
          <Grid item>
            <Typography variant='h2'>SUPERO</Typography>
          </Grid>
          <Grid item className={classes.searchBar}>
            <TextField
              className={classes.textField}
              variant='outlined'
              type='text'
              onChange={e => handleSearchChange(e)}
              name='searchField'
              InputProps={{
                classes: { input: classes.input },
                endAdornment: (
                  <InputAdornment position='end'>
                    <SearchIcon fontSize='large' edge='end' />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item>
            <Button variant='contained' className={classes.searchButton} onClick={() => handleSearchClick()}>BUSCAR</Button>
          </Grid>
        </Grid>

        <Divider />

        <Grid item container spacing={2} alignItems='center'>
          <Grid item>
            <Typography>Filtrar ano de publicação</Typography>
          </Grid>
          <Grid item>
            <TextField
              className={classes.dateTextField}
              variant='outlined'
              type='text'
              onChange={e => handleStartDateChange(e)}
              name='startDate'
              InputProps={{
                classes: { input: classes.input },
                endAdornment: (
                  <InputAdornment position='end'>
                    <DateRangeIcon fontSize='large' edge='end' />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item>
            <Typography>Até</Typography>
          </Grid>
          <Grid item>
            <TextField
              className={classes.dateTextField}
              variant='outlined'
              type='text'
              onChange={e => handleDueDateChange(e)}
              name='dueDate'
              InputProps={{
                classes: { input: classes.input },
                endAdornment: (
                  <InputAdornment position='end'>
                    <DateRangeIcon fontSize='large' edge='end' />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item className={classes.resultsFounded}>
            <Typography>Resultados encontrados: {resultsFound}</Typography>
          </Grid>
        </Grid>

        <Divider />

        <Grid item container spacing={2}>
          <Paper className={classes.tablePaper}>
            <Table className={classes.table}>
              <TableRow style={{ backgroundColor: '#e0e0e0' }}>
                <TableCell align='left'>Livro</TableCell>
                <TableCell align='left'>Autorx</TableCell>
                <TableCell align='left'>Editora</TableCell>
                <TableCell align='left'>Ano</TableCell>
                <TableCell align='left'>Ações</TableCell>
              </TableRow>
              <TableBody>
                {booksLoading
                  ? <CircularProgress className={classes.progress} />
                  : books.map((book, index) => (
                    <TableRow selected={index % 2 !== 0} key={book.name}>
                      <TableCell align='left'>{book.titulo}</TableCell>
                      <TableCell align='left'>{book.autor}</TableCell>
                      <TableCell align='left'>{book.editora}</TableCell>
                      <TableCell align='left'>{book.ano}</TableCell>
                      <TableCell align='left'>
                        <Link to={`/book/details/${book.id}`}>
                        detalhes
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <ReactPaginate
            previousLabel={currentPage > 1 ? 'previous' : null}
            nextLabel={currentPage < totalPages ? 'next' : null}
            breakLabel='...'
            breakClassName='break-me'
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={classes.pagination}
            pageClassName={classes.subContainerPagination}
            activeClassName={classes.active}
            previousClassName={classes.previousClassName}
            nextClassName={classes.nextClassName}
            pageLinkClassName={classes.pageLinkClassName}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default SearchBooks

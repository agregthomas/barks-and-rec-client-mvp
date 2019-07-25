import React from 'react'
import Grid from '@material-ui/core/Grid'

const Layout = (props) => {
  const { xs, sm, md, lg } = props
  return (
    <Grid container
      spacing={8}
    >
      <Grid item
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}>
        {props.children}
      </Grid>
    </Grid>
  )
}

export default Layout

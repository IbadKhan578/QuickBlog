import React from 'react'
import CircularProgress from "@mui/material/CircularProgress";


function Loader() {
  return (
   <Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  )
}

export default Loader
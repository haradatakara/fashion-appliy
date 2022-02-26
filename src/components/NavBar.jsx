import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export const NavBar = () => {
  return (
    <Box>
      <AppBar position='static'>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{
              //margin-right: 8px
              mr: 1,
              '&:hover': {
                boxShadow: 1,
              }
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
          >
            News
          </Typography>
          <Button 
            color='secondary'
            variant='contained'
            //sx={"background-color:red;"}という風にもできる
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
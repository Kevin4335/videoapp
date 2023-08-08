import {Stack} from '@mui/material';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => (
  <Stack direction = "row" alignItems="center" p = {2} sx = {{position: 'sticky', background: '#DAD3AF', top:0, justifyContent:'space-between'}}>
    <Link to="/" style = {{display:'flex', alignItems:'center'}}> 
      <img src= {require("../utils/logos/playbutton.png")} alt = "logo" height = {50} />
    </Link>
    <SearchBar>
      
    </SearchBar>
  </Stack>
)
export default Navbar
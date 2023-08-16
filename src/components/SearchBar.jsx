import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate=useNavigate();
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  }
  return (
    <Paper
        component = "form"
        onSubmit={handleSubmit}
        sx={{
            borderRadius:20,
            border: '3px solid #2C1E74',
            pl: 2,
            boxShadow:'none',
            mr:{sm:5}

        }}
    >
        <input
            className='search-bar'
            placeholder='Search'
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <IconButton type='submit' sx={{p:'10px'}}> 
        <img src= {require("../utils/logos/magnifying-glass.png")} alt = "logo" height = {25} />
        </IconButton>
    </Paper>
  )
}

export default SearchBar
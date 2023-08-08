import React from "react";
import { categories } from "../utils/constants";
import { Stack } from '@mui/material'

const selectedCategory='New'

const SideBar = () => (
  <Stack direction = "row" 
    sx = {{overflowY:"auto", 
            height:{sx:'auto', md:'95%'}, 
            flexDirection:{md:'column'},
        }}>
    {categories.map((category)=>(
        <button
          className="category-btn"
          style={{background:category.name === selectedCategory && '#C23A73', color: '#DAD3AF'}}
          key = {category.name}
          
        >
            <span style = {{color: category.name===selectedCategory ? '#DAD3AF' : '#C23A73', marginRight:'15px'}}>{category.icon}</span>
            <span style = {{opacity: category.name===selectedCategory ? '1' : '0.8'}}>{category.name}</span>
        </button>
    ))}
  </Stack>
)

export default SideBar
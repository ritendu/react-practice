import './Header.css'
import { TextField } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';
const Header = ()=>{
    const [age, setAge] = useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const categories = [
        { value: "English", label: "en" },
        { value: "Hindi", label: "hi" },
        { value: "Spanish", label: "es" },
        { value: "French", label: "fr" },
        { value: "Japanese", label: "ja" },
        { value: "Russian", label: "ru" },
        { value: "German", label: "de" },
        { value: "Italian", label: "it" },
        { value: "Korean", label: "ko" },
        { value: "Brazilian Portuguese", label: "pt-BR" },
        { value: "Arabic", label: "ar" },
        { value: "Turkish", label: "tr" },
      ];

    const darkTheme = createTheme({
        palette: {
          primary:{
            main:"#fff"
          },
        mode:"dark"
        },
      });
    return (
       <div className="header">
        <div className="title">World Hunt</div>
        <div className='inputs'>
            <ThemeProvider theme={darkTheme}>

        <TextField id="standard-basic" label="Standard" variant="standard" />
        <FormControl>
        <InputLabel id="demo-simple-select-label" style={{width:'50px'}}>Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="country"
          className='select'
          onChange={handleChange}
        >
            {categories.map((item)=>{
                return (
                    <MenuItem value={item.value}>{item.value}</MenuItem>
                )
            })}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
            </ThemeProvider>
        </div>
       </div>
    )
}


export default Header
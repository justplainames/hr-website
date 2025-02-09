import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@material-ui/core';
import React from 'react'

export default function Select(props) {

    const {name, label, value, onChange, items, error=null} = props;
    // var uniqueNames = []
    // items.map(({title}) => {
    //     if (uniqueNames.includes(title)){} 
    //     else{uniqueNames.push(title)}
    // })
    return (
        <FormControl
        variant="outlined"
        {...(error && {error:true})}
        >
            <InputLabel>{label}</InputLabel>
            <MuiSelect
            label={label}
            name={name}
            value={value}
            onChange={onChange}>
                <MenuItem value="">None</MenuItem>
                {   
                    items.map(
                        item=>(<MenuItem key={item.title} value={item.title}>{item.label}</MenuItem>)
                    )   
                }
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}


// import { FormControl, InputLabel, Input, FormHelperText, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import "../Payslip.css";
// import DatePicker from '@mui/lab/DatePicker';
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import Stack from "@mui/material/Stack";
// import Grid from '@material-ui/core/Grid';
// import { DataGrid } from '@mui/x-data-grid';
// import MUIDataTable from "mui-datatables";
// import { ThemeProvider } from "@mui/styles";
// import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// export default function Payslip() {
//     let theme = createTheme();
//     theme = responsiveFontSizes(theme);

//     const options = {
//         filterType: 'checkbox',
//     };

//     const monthNames = ["January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"
//     ];
//     const months = [];
//     const [value, setValue] = React.useState(new Date());
//     const [value1, setValue1] = React.useState(new Date());
//     const [updateNewValue, setValue2] = React.useState(new Date());
//     const [updateNewValue1, setValue3] = React.useState(new Date());
//     const columns =
//         [
//             {
//                 name: "Payslip",
//                 options: {
//                     filter: true,
//                     filterType: "custom",
//                     filterList: ['31/01/2021', '31/04/2021'],

//                     filterOptions: {
//                         names: [],
//                         logic(age, filters) {
//                             if (filters[0] && filters[1]) {
//                                 return !(age >= filters[0] && age <= filters[1]);
//                             } else if (filters[0]) {
//                                 return age != filters[0];
//                             } else if (filters[1]) {
//                                 return age != filters[1];
//                             }
//                             return false;
//                         },

//                     },
//                     print: false
//                 }
//             }


//         ]
//         ;

//     const data = [
//         //[monthNames[updateNewValue.getMonth()] + " " + updateNewValue.getFullYear()],
//         //[monthNames[updateNewValue1.getMonth()] + " " + updateNewValue1.getFullYear()],
//         ["31/01/2021"],
//         ["31/02/2021"],
//         ["31/03/2021"],
//         ["31/04/2021"],
//         ["31/05/2021"],
//         ["31/06/2021"],
//         ["31/07/2021"],
//         ["31/08/2021"],
//         ["31/09/2021"],
//         ["31/10/2021"],
//         ["31/11/2021"],
//         ["31/12/2021"]
//     ];

//     return (
//         <>
//             <div id="box">
//                 <center>
//                     <FormControl>
//                         <br />
//                         <br />
//                         <Grid container spacing={10} >
//                             <Grid item lg={6}>
//                                 <div style={{ width: '600px' }}>
//                                     <LocalizationProvider dateAdapter={AdapterDateFns}>
//                                         <Stack spacing={6}>
//                                             <DatePicker

//                                                 views={["month", "year"]}
//                                                 label="From:"
//                                                 minDate={new Date("2012-01-01")}
//                                                 maxDate={new Date("2021-12-31")}
//                                                 value={value}
//                                                 onChange={(newValue) => {
//                                                     setValue(newValue);
//                                                     setValue2(newValue);
//                                                 }}

//                                                 renderInput={(params) => <TextField {...params} helperText={null} />}
//                                             />
//                                         </Stack>
//                                     </LocalizationProvider>
//                                 </div>
//                             </Grid>

//                             <Grid item lg={6}>
//                                 <div style={{ width: '600px' }}>
//                                     <LocalizationProvider dateAdapter={AdapterDateFns}>
//                                         <Stack spacing={6}>
//                                             <DatePicker
//                                                 views={["month", "year"]}
//                                                 label="To:"
//                                                 minDate={new Date("2012-01-01")}
//                                                 maxDate={new Date("2021-12-31")}
//                                                 value={value1}
//                                                 onChange={(newValue1) => {
//                                                     setValue1(newValue1);
//                                                     setValue3(newValue1);
//                                                 }}

//                                                 renderInput={(params) => <TextField {...params} helperText={null} />}
//                                             />

//                                         </Stack>
//                                     </LocalizationProvider>
//                                 </div>
//                             </Grid>

//                         </Grid>
//                     </FormControl>

//                     <div style={{ height: 400, width: '100%' }}>
//                         <br />
//                         <br />
//                         <br />
//                         <ThemeProvider theme={theme}>
//                             <MUIDataTable

//                                 data={data}
//                                 columns={columns}
//                                 options={options}
//                             />
//                         </ThemeProvider>
//                     </div>
//                 </center>
//             </div>
//         </>
//     );

// }

import { FormControl, InputLabel, Input, FormHelperText, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import "../Payslip.css";
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Stack from "@mui/material/Stack";
import Grid from '@material-ui/core/Grid';
import { DataGrid } from '@mui/x-data-grid';
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/styles";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export default function Payslip() {
    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    const options = {
        filterType: 'checkbox',
    };

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const months = [];
    const [value, setValue] = React.useState(new Date());
    const [value1, setValue1] = React.useState(new Date());
    const [updateNewValue, setValue2] = React.useState(new Date());
    const [updateNewValue1, setValue3] = React.useState(new Date());
    const columns =
        [
            {
                name: "Payslip",
                options: {
                    filter: true,
                    filterType: "custom",
                    // filterList: [updateNewValue.getDate() + "/" + updateNewValue.getMonth() + "/" + updateNewValue.getFullYear(), updateNewValue1.getDate() + "/" + updateNewValue1.getMonth() + "/" + updateNewValue1.getFullYear()],

                    filterOptions: {
                        names: [],
                        logic(age, filters) {
                            if (filters[0] && filters[1]) {
                                return !(age >= filters[0] && age <= filters[1]);
                            } else if (filters[0]) {
                                return age != filters[0];
                            } else if (filters[1]) {
                                return age != filters[1];
                            }
                            return false;
                        },

                    },
                    print: false
                }
            }


        ]
        ;

    const data = [
        // [updateNewValue.getDate() + "/" + updateNewValue.getMonth() + "/" + updateNewValue.getFullYear()],
        // [updateNewValue1.getDate() + "/" + updateNewValue1.getMonth() + "/" + updateNewValue1.getFullYear()],
        ["31/01/2021"],
        ["31/02/2021"],
        ["31/03/2021"],
        ["31/04/2021"],
        ["31/05/2021"],
        ["31/06/2021"],
        ["31/07/2021"],
        ["31/08/2021"],
        ["31/09/2021"],
        ["31/10/2021"],
        ["31/11/2021"],
        ["31/12/2021"]
    ];

    return (
        <>
            <div id="box">
                <center>
                    <FormControl>
                        <br />
                        <br />
                        <Grid container spacing={10} >
                            <Grid item lg={6}>
                                <div style={{ width: '600px' }}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Stack spacing={6}>
                                            <DatePicker

                                                views={["month", "year"]}
                                                label="From:"
                                                minDate={new Date("2012-01-01")}
                                                maxDate={new Date("2021-12-31")}
                                                value={value}
                                                onChange={(newValue) => {
                                                    setValue(newValue);
                                                    setValue2(newValue);
                                                }}

                                                renderInput={(params) => <TextField {...params} helperText={null} />}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                </div>
                            </Grid>

                            <Grid item lg={6}>
                                <div style={{ width: '600px' }}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Stack spacing={6}>
                                            <DatePicker
                                                views={["month", "year"]}
                                                label="To:"
                                                minDate={new Date("2012-01-01")}
                                                maxDate={new Date("2021-12-31")}
                                                value={value1}
                                                onChange={(newValue1) => {
                                                    setValue1(newValue1);
                                                    setValue3(newValue1);

                                                }}


                                                renderInput={(params) => <TextField {...params} helperText={null} />}
                                            />

                                        </Stack>
                                    </LocalizationProvider>
                                </div>
                            </Grid>

                        </Grid>
                    </FormControl>

                    <div style={{ height: 400, width: '100%' }}>
                        <br />
                        <br />
                        <br />
                        <ThemeProvider theme={theme}>
                            <MUIDataTable

                                data={data}
                                columns={columns}
                                options={options}
                            />
                        </ThemeProvider>
                    </div>
                </center>
            </div>
        </>
    );

}
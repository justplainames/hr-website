import React, { useState, useEffect } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { forwardRef } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import MaterialTable from 'material-table';
import Box from '@material-ui/core/Box';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Typography } from '@material-ui/core'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { Password } from '@mui/icons-material';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};




const Leaveapproval = () => {
    const columnsforApprove = [
        { field: "nameofapplicant", title: "Name of applicant", width: 200 },
        { field: "dateofapplication", title: "Date of Application", width: 130 },
        { field: "type", title: "Type", width: 130 },
        { field: "startdate", title: "Start Date", width: 130 },
        { field: "enddate", title: "End Date", width: 130 },
        { field: "daysapplied", title: "Days Applied", width: 90 },
        { field: "recommender", title: "Recommender", width: 160 },
        { field: "status", title: "Status", width: 200 }
    ];

 

    function structuring(id, userId, nameofapplicant, dateofapplication, type, startdate, enddate, daysapplied, recommender, approver, status) {

        return { id, userId, nameofapplicant, dateofapplication, type, startdate, enddate, daysapplied, recommender, approver, status }
    }

    let theme = createTheme();
    theme = responsiveFontSizes(theme);


    const [selectedRows, setSelectedRows] = React.useState([]);
    const [data, setdata] = React.useState([]);
    // const handleRowSelection = (e) => {
    //     setDeletedRows([...deletedRows, ...rowss.filter((r) => r.id === e.data.id)]);
    // };


    // const handlePurge = () => {
    //     setRows(rowss.filter((r) => deletedRows.filter((sr) => sr.id === r.id).length < 1)
    //     );
    // };


    const fetchapplies = (id) => {
        setdata([])
        axios.get('http://localhost:5000/leaverequest', {
            params: {
                id: id
            }
        })
            .then(res => {
                console.log(res.data)
                const tabledataa = []
                res.data.map((details) => {
                    const name = details.name
                    const userid = details.userId
                    for (var i = 0; i < details.applies.length; i++) {
                        if (details.applies[i].approvedby === id &&  details.applies[i].approved ===false &&details.applies[i].declined===false ) {
                            tabledataa.push(structuring(details.applies[i]._id,userid , name,
                                details.applies[i].datecreated,
                                details.applies[i].types,
                                details.applies[i].from,
                                details.applies[i].to,
                                details.applies[i].days,
                                details.applies[i].recomemdedby,
                                'nil',
                                details.applies[i].approved))
                        }
                    }
                })
               setdata(tabledataa) 
               console.log(data)
            })
    }


    useEffect(() => {
        const id = localStorage.getItem("isAuthenticated");
        fetchapplies(id)
    }, []);


    const handleBulkDelete = () => {
        const updatedData = data.filter(row => !selectedRows.includes(row))
        //setdata(updatedData);
        console.log(selectedRows)
        const ids = []
        selectedRows.map(id =>{
            ids.push(id.id)
        })
        console.log(ids)
        axios.post('http://localhost:5000/approval',ids).then(res=>{
            console.log(res)
            const id = localStorage.getItem("isAuthenticated");
            fetchapplies(id)
    
        })
        setOpen(false);
        setOpen1(false);
    }

    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
        console.log(selectedRows)
    };

    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    // const theme = createMuiTheme({
    //     palette: {
    //       primary: {
    //         main: '#4caf50',
    //       },
    //       secondary: {
    //         main: '#ff9100',
    //       },
    //     },

    //   });

    const handleBulkDelete1 = () => {
        const updatedData = data.filter(row => !selectedRows.includes(row))
        //setdata(updatedData);
        console.log(selectedRows)
        const ids = []
        selectedRows.map(id =>{
            ids.push(id.id)
        })
        console.log(ids)
        axios.post('http://localhost:5000/reject',ids).then(res=>{
            console.log(res)
            const id = localStorage.getItem("isAuthenticated");
            fetchapplies(id)
        })
        setOpen(false);
        setOpen1(false);
    }


    const handleClose = () => {
        setOpen(false);
        setOpen1(false);

        //onRowsDelete(true);
    };

    return (
        // <ThemeProvider theme={theme}>
        <div className="LeaveApprove">
            <Box sx={{ display: "flex" }}>
                <Box >
                    <Typography variant="h4">
                        Approve Leave Records
                    </Typography>
                </Box>
                {/* <h4 align='center'>Bulk Delete with Material Table</h4> */}

                <Stack direction="row" spacing={5} alignItems="flex-start" justifyContent="flex-end" pb={4} pl={89}>
                    <Button variant="contained" color="success" size="large" onClick={handleClickOpen}> Approve </Button>
                    {/* <Button variant="contained" color="success" size="large" onClick={handleClickOpen} >Approve</Button> */}
                    <Dialog open={open} onClose={handleBulkDelete}>
                        <DialogTitle>Confirmation</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Please confirm that you want to approve the leave for:
                            </DialogContentText>
                            show details of leave
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>No</Button>
                            <Button onClick={handleBulkDelete}>Yes</Button>
                        </DialogActions>
                    </Dialog>
                    <Button variant="contained" color="error" size="large" onClick={handleClickOpen1}> Reject </Button>
                    {/* <Button variant="contained" color="success" size="large" onClick={handleClickOpen} >Approve</Button> */}
                    <Dialog open={open1} onClose={handleBulkDelete}>
                        <DialogTitle>Confirmation</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Please confirm that you want to reject the leave for:
                            </DialogContentText>
                            show details of leave
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>No</Button>
                            <Button onClick={handleBulkDelete1}>Yes</Button>
                        </DialogActions>
                    </Dialog>
                </Stack>
            </Box>

            <MaterialTable
                title=""
                data={data}
                onSelectionChange={(rows) => setSelectedRows(rows)}
                columns={columnsforApprove}
                icons={tableIcons}
                options={{
                    selection: true
                }}
            // actions={[
            //   {
            //     icon: 'delete',
            //     tooltip: "Delete all selected rows",
            //     onClick: () => handleBulkDelete()
            //   }
            // ]}
            />
        </div>
        // </ThemeProvider>


        // <div className="LeaveApprove">
        //     <h1 style={{ fontFamily: "Stone" }}>Elgible Contracts {handlePurge}</h1>
        //     <span className="horizontal-line" />
        //     <div className="centerDiv" style={{ height: 380, width: 950 }}>
        //     <DataGrid
        //         rows={rowss}
        //         columns={columns}
        //         pageSize={10}
        //         checkboxSelection
        //         onRowSelected={handleRowSelection}
        //     />
        //     </div>
        //     <br />
        //     <Button variant="contained" color="primary" onClick={handlePurge}>
        //     Purge
        //     </Button>
        //     </div>
    );
}

export default Leaveapproval
import * as React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { forwardRef } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import MaterialTable from 'material-table';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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
        { field: "id", title: "ID",width: 100 },
        { field: "nameofapplicant",title:"Name of applicant", width: 200 },
        { field: "dateofapplication",title: "Date of Application", width: 130 },
        { field: "type", title: "Type", width: 130 },
        { field: "startdate", title: "Start Date", width: 130 },
        { field: "enddate",title: "End Date", width: 130 },
        { field: "daysapplied",title: "Days Applied",width: 90},
        { field: "recommender",title: "Recommender", width: 160},
        { field: "approver", title: "Approver" ,width: 200 },
        { field: "status", title: "Status", width: 200 }
    ];

    const dataApproveLeave = [
        {
            id:1,
            nameofapplicant:"Mary Tan",
            dateofapplication:"20/10/2021",
            type:"Annual",
            startdate:"02/11/2021",
            enddate:"02/11/2021",
            daysapplied:1,
            recommender:"Benjamin Tan",
            approver:"Benjamin Tan",
            status:"Pending"
        },
        {
            id:2,
            nameofapplicant:"Ben Ong",
            dateofapplication:"20/10/2021",
            type:"Annual",
            startdate:"30/10/2021",
            enddate:"30/10/2021",
            daysapplied:1,
            recommender:"N.A",
            approver:"Benjamin Tan",
            status:"Pending"
        },
        {
            id:3,
            nameofapplicant:"Mary Tan",
            dateofapplication:"31/10/2021",
            type:"Unpaid",
            startdate:"02/10/2021",
            enddate:"03/10/2021",
            daysapplied:2,
            recommender:"Alice Tay",
            approver:"Alison Ng",
            status:"Pending"
        }
    ];    
        

    const [tableData, setTableData] =  React.useState(dataApproveLeave);
    const [selectedRows, setSelectedRows] =  React.useState([]);

    // const handleRowSelection = (e) => {
    //     setDeletedRows([...deletedRows, ...rowss.filter((r) => r.id === e.data.id)]);
    // };

    
    // const handlePurge = () => {
    //     setRows(rowss.filter((r) => deletedRows.filter((sr) => sr.id === r.id).length < 1)
    //     );
    // };

    const handleBulkDelete = () => {
        const updatedData = tableData.filter(row => !selectedRows.includes(row))
        setTableData(updatedData);
        setOpen(false);
      }

    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
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

    const handleClose = () => {
        setOpen(false);
        setOpen1(false);
        //onRowsDelete(true);
    };

      return (
        // <MuiThemeProvider theme={theme}>
            <div className="LeaveApprove">
            <h1 align="Left">Approve Leave</h1>
            {/* <h4 align='center'>Bulk Delete with Material Table</h4> */}
            
                <Stack direction="row" spacing={5}>
                    <Button variant="contained" color="success" size = "large" onClick={handleClickOpen}> Approve </Button>
                    {/* <Button variant="contained" color="success" size="large" onClick={handleClickOpen} >Approve</Button> */}
                        <Dialog open ={open} onClose={handleBulkDelete}>
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
                    <Button variant="contained" color="error" size = "large" onClick={handleClickOpen1}> Reject </Button>
                    {/* <Button variant="contained" color="success" size="large" onClick={handleClickOpen} >Approve</Button> */}
                        <Dialog open ={open1} onClose={handleBulkDelete}>
                            <DialogTitle>Confirmation</DialogTitle>
                            <DialogContent>
                            <DialogContentText>
                                Please confirm that you want to reject the leave for:
                            </DialogContentText>
                            show details of leave 
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose}>No</Button>
                            <Button onClick={handleBulkDelete}>Yes</Button>
                            </DialogActions>
                        </Dialog>
                </Stack>
                <MaterialTable
                    title="Employee Data"
                    data={tableData}
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
        // </MuiThemeProvider>


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
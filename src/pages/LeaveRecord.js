import { ThemeProvider } from "@mui/styles";
import MUIDataTable from "mui-datatables";
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);


const Leaverecord = () => {
    const dataLeaveRecord = [
        ["20/10/2021", "Annual", "02/11/2021", "02/11/2021", 1, "Benjamin Tan", "Benjamin Tan", "Pending"],
        ["20/10/2021", "Annual", "30/10/2021", "30/10/2021", 1, "N.A.", "Benjamin Tan", "Pending"],
        ["31/10/2021", "Unpaid", "02/08/2021", "02/08/2021", 2, "Alice Tay", "Alison Ng", "Approved"],
    ];
    
    //columns for leave records
    const columnsforRecord = [
        {
            name: "Date of Application",
            options: {
                filter: true,
            }
        },
        {
            label: "Type",
            name: "Title",
            options: {
                filter: true
            }
        },
        {
            name: "Start Date",
            options: {
                filter: true
            }
        },
        {
            name: "End Date",
            options: {
                filter: true
            }
        },
        {
            name: "Days Applied",
            options: {
                filter: true
            }
        },
        {
            name: "Recommender",
            options: {
                filter: true
            }
        },
        {
            name: "Approver",
            options: {
                filter: true
            }
        },
        {
            name: "Status",
            options: {
                filter: true
            }
        },
    ];

    const optionsLeaveRecord = {
        filter: true,
        filterType: "multiselect",
        responsive: "scrollMaxHeight",
        selectableRows: "none",
        download: false,
        print: false,
        fixedHeader: false,
    };

      return (
        
            <ThemeProvider theme={theme}>
                <MUIDataTable
                    title={"Leave Records"}
                    data={dataLeaveRecord}
                    columns={columnsforRecord}
                    options={optionsLeaveRecord}
                />
            </ThemeProvider>
      );
    }

export default Leaverecord
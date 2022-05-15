import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { DataGrid } from '@mui/x-data-grid';

export let activeCustomerObject = {};

class List extends Component {
  render() {
    return (
      <div id="listContainer">
        <Button variant="outlined" href="/add">
          Add job
        </Button>
        <DataTable />
      </div>
    );
  }
}

export default List;

const columns = [
  { field: 'id', headerName: 'ID', minWidth: 90, align: 'center', flex: 1 },
  { field: 'customer', headerName: 'Customer', minWidth: 90, flex: 2 },
  { field: 'itemDesc', headerName: 'Item', minWidth: 90, flex: 4 },
  { field: 'workDesc', headerName: 'Work', minWidth: 90, flex: 3 },
  { field: 'status', headerName: 'Status', minWidth: 90, flex: 2 },
  {
    field: 'totalTime',
    headerName: 'Time spent',
    type: 'number',
    minWidth: 90,
    flex: 2,
    headerAlign: 'left',
    align: 'left',
  },
  { field: 'flag', headerName: 'Flag', minWidth: 90, flex: 1 },

  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

// Style override because the component's text is usually black
const theme = createTheme({
  components: {
    // Name of the component
    DataGrid: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: 'primary.light',
          '& .MuiDataGrid-renderingZone': {
            '& .MuiDataGrid-row': {},
          },
        },
      },
    },
  },
});

// Custom table styles go in here
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      color: 'white',
      fontSize: '24',
    },
  })
);

const handleRowClick = (newSelection) => {
  const obj = rows.find((x) => x.id == newSelection);
  activeCustomerObject = obj;
  console.log(activeCustomerObject);
};

export function DataTable() {
  const classes = useStyles();

  const [selectionModel, setSelectionModel] = React.useState([]);

  return (
    <div id="chonky" style={{ width: '90%', color: 'primary.light' }}>
      <DataGrid
        theme={theme}
        rows={rows}
        autoHeight={true}
        rowHeight={75}
        className={classes.root}
        columns={columns}
        checkboxSelection={false}
        pageSize={25}
        // rowsPerPageOptions={[20]}
        // onRowClick={handleRowClick}
        onSelectionModelChange={(newSelection) => {
          handleRowClick(newSelection);
        }}
      />
    </div>
  );
}

// TEST DATA
const rows = [
  {
    id: 1,
    customer: 'Snow',
    itemDesc: 'Omega Seamaster 300',
    workDesc: 'Crown & Stem',
    status: 'Returned',
    totalTime: '2',
    flag: '',
  },
  {
    id: 2,
    customer: 'Shipp',
    itemDesc: 'Patek Philippe Worldtimer',
    workDesc: 'Movement exchange',
    status: 'Complete',
    totalTime: '3.5',
    flag: '',
  },
  {
    id: 3,
    customer: 'Seneca',
    itemDesc: 'Vacheron Constantin',
    workDesc: 'Quartz service',
    status: 'Returned',
    totalTime: '2.25',
    flag: 'Yes',
  },
  {
    id: 4,
    customer: 'Khan',
    itemDesc: 'Rolex Daytona',
    workDesc: 'Full service',
    status: 'Complete',
    totalTime: '2.5',
    flag: '',
  },
  {
    id: 5,
    customer: 'Gordon',
    itemDesc: 'Omega Speedmaster',
    workDesc: 'Refinishing',
    status: 'In progress',
    totalTime: '1.75',
    flag: '',
  },
  {
    id: 6,
    customer: 'Turn',
    itemDesc: 'Rolex Antimagnetique',
    workDesc: 'Full service',
    status: 'In progress',
    totalTime: '0.5',
    flag: '',
  },
  {
    id: 7,
    customer: 'Perkins',
    itemDesc: 'Bulova Apollo',
    workDesc: 'Full service',
    status: 'In progress',
    totalTime: '0.75',
    flag: 'Yes',
  },
  {
    id: 8,
    customer: 'McCoy',
    itemDesc: 'Patek Philippe Unicorn',
    workDesc: 'Battery and pressure test',
    status: 'In progress',
    totalTime: '0.25',
    flag: '',
  },
  {
    id: 9,
    customer: 'France',
    itemDesc: 'George Daniels Chronograph',
    workDesc: 'Refinishing',
    status: 'In progress',
    totalTime: '0.25',
    flag: '',
  },
  {
    id: 10,
    customer: 'Speed',
    itemDesc: 'Bulgari Magsonic',
    workDesc: 'Dial repair',
    status: 'Quote sent',
    totalTime: '0',
    flag: '',
  },
  {
    id: 33,
    customer: 'Coast',
    itemDesc: 'Rolex Paul Newman',
    workDesc: 'Strap replacement',
    status: 'Quote sent',
    totalTime: '0',
    flag: 'Yes',
  },
  {
    id: 56,
    customer: 'Smith',
    itemDesc: 'Zenith Chronomaster',
    workDesc: 'Bezel repair',
    status: 'Received',
    totalTime: '0',
    flag: '',
  },
];

//////////////// OLD DELETE BELOW
/*
function createData(customerName, itemDesc, workDesc, status, totalTime, flag) {
  return { customerName, itemDesc, workDesc, status, totalTime, flag };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell align="right">Item</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Total Time</TableCell>
            <TableCell align="right">Flag</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.customerName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.customerName}
              </TableCell>
              <TableCell align="right">{row.itemDesc}</TableCell>
              <TableCell align="right">{row.workDesc}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.totalTime}</TableCell>
              <TableCell align="right">{row.flag}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

*/

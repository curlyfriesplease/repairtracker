import React, { useEffect, useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { DataGrid } from '@mui/x-data-grid';
// import UserContext from '../main';
import { CustomerContext } from '../main';
import { UserContext } from '../providers/UserProvider';

export let activeCustomerObject;

export function List() {
  const user = useContext(UserContext);
  const [redirect, setredirect] = useState(null);

  useEffect(() => {
    if (!user) {
      setredirect('/settings');
    }
  }, [user]);
  if (redirect) {
    <Navigate to={redirect} />;
  }
  return (
    <div id="listContainer">
      <h2>JOB LIST</h2>
      <Button variant="outlined" href="/add">
        Add job
      </Button>
      <DataTable />
    </div>
  );
}

export default List;

function handleRowClick(newSelection) {
  const obj = rows.find((x) => x.id == newSelection);
  activeCustomerObject = obj;
  console.log(
    '~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~',
    '\n',
    'Active customer object:'
  );
  console.log(activeCustomerObject);
  console.log('~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~');
}

const columns = [
  { field: 'id', headerName: 'ID', minWidth: 90, align: 'center', flex: 1 },
  { field: 'customer', headerName: 'Customer', minWidth: 90, flex: 2 },
  { field: 'itemDesc', headerName: 'Item', minWidth: 90, flex: 4 },
  { field: 'workDesc', headerName: 'Work', minWidth: 90, flex: 3 },
  { field: 'status', headerName: 'Status', minWidth: 90, flex: 2 },
  {
    field: 'timeLogged',
    headerName: 'Time spent',
    type: 'number',
    minWidth: 90,
    flex: 2,
    headerAlign: 'left',
    align: 'left',
  },
  { field: 'flag', headerName: 'Flag', minWidth: 90, flex: 1 },
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
      fontSize: '20',
    },
  })
);

export function DataTable() {
  const classes = useStyles();
  const [customer, setCustomer] = useContext(CustomerContext);

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
          setCustomer({
            ...activeCustomerObject,
          });
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
    email: 'abcdef@fasjdf.com',
    itemDesc: 'Omega Seamaster 300',
    workDesc: 'Crown & Stem',
    quotedPrice: 450,
    timeEstimate: 70,
    timeLogged: 100,
    costs: 160,
    status: 'Returned',
    flag: '',
    log: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'fugit, sed quia consequuntur magni dolores eos',
      'minima veniam, quis nostrum exercitationem ullam corporis',
    ],
  },
  {
    id: 2,
    customer: 'Shipp',
    email: 'adfsf@fasjdf.com',
    itemDesc: 'Patek Philippe Worldtimer',
    workDesc: 'Movement exchange',
    quotedPrice: 450,
    timeEstimate: 130,
    timeLogged: 100,
    costs: 120,
    status: 'Complete',
    flag: '',
    log: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'fugit, sed quia consequuntur magni dolores eos',
      'minima veniam, quis nostrum exercitationem ullam corporis',
    ],
    notes: 'Customer note customer note customer note customer note',
  },
  {
    id: 3,
    customer: 'Seneca',
    email: 'afsdfdsfdsf@fasjdf.com',
    itemDesc: 'Vacheron Constantin',
    workDesc: 'Quartz service',
    quotedPrice: 450,
    timeEstimate: 160,
    timeLogged: 100,
    costs: 100,
    status: 'Returned',
    flag: '🏳️',
    log: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'fugit, sed quia consequuntur magni dolores eos',
      'minima veniam, quis nostrum exercitationem ullam corporis',
    ],
    notes: 'abcdefghijklmnop',
  },
  {
    id: 4,
    customer: 'Khan',
    email: 'a534543543@fasjdf.com',
    itemDesc: 'Rolex Daytona',
    workDesc: 'Full service',
    quotedPrice: 450,
    timeEstimate: 200,
    timeLogged: 100,
    costs: 100,
    status: 'Complete',
    flag: '🏳️',
    log: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'fugit, sed quia consequuntur magni dolores eos',
      'minima veniam, quis nostrum exercitationem ullam corporis',
    ],
    notes: 'lorem ipsum lorem ipsum',
  },
  {
    id: 5,
    customer: 'Gordon',
    email: 'btfgnhrtf@fasjdf.com',
    itemDesc: 'Omega Speedmaster',
    workDesc: 'Refinishing',
    quotedPrice: 450,
    timeEstimate: 40,
    timeLogged: 100,
    costs: 70,
    status: 'In progress',
    flag: '',
    log: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'fugit, sed quia consequuntur magni dolores eos',
      'minima veniam, quis nostrum exercitationem ullam corporis',
    ],
  },
  {
    id: 6,
    customer: 'Turn',
    email: 'a53453464f@fasjdf.com',
    itemDesc: 'Rolex Antimagnetique',
    workDesc: 'Full service',
    quotedPrice: 450,
    timeEstimate: 50,
    timeLogged: 100,
    costs: 40,
    status: 'In progress',
    flag: '',
    log: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'fugit, sed quia consequuntur magni dolores eos',
      'minima veniam, quis nostrum exercitationem ullam corporis',
    ],
  },
  {
    id: 7,
    customer: 'Perkins',
    email: 'a4n646n45f@fasjdf.com',
    itemDesc: 'Bulova Apollo',
    workDesc: 'Full service',
    quotedPrice: 450,
    timeEstimate: 30,
    timeLogged: 100,
    costs: 40,
    status: 'In progress',
    flag: '🚩',
    log: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'fugit, sed quia consequuntur magni dolores eos',
      'minima veniam, quis nostrum exercitationem ullam corporis',
    ],
  },
  {
    id: 8,
    customer: 'McCoy',
    email: '6g46b456b@fasjdf.com',
    itemDesc: 'Patek Philippe Unicorn',
    workDesc: 'Battery and pressure test',
    quotedPrice: 450,
    timeEstimate: 20,
    timeLogged: 100,
    costs: 20,
    status: 'In progress',
    flag: '',
    log: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'fugit, sed quia consequuntur magni dolores eos',
      'minima veniam, quis nostrum exercitationem ullam corporis',
    ],
  },
  {
    id: 9,
    customer: 'France',
    email: '535434b54@fasjdf.com',
    itemDesc: 'George Daniels Chronograph',
    workDesc: 'Refinishing',
    quotedPrice: 450,
    timeEstimate: 190,
    timeLogged: 100,
    costs: 40,
    status: 'In progress',
    flag: '',
    log: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'fugit, sed quia consequuntur magni dolores eos',
      'minima veniam, quis nostrum exercitationem ullam corporis',
    ],
  },
  {
    id: 10,
    customer: 'Speed',
    email: 'abcv23r32vr32@fasjdf.com',
    itemDesc: 'Bulgari Magsonic',
    workDesc: 'Dial repair',
    quotedPrice: 450,
    timeEstimate: 210,
    timeLogged: 100,
    costs: 40,
    status: 'Quote sent',
    flag: '',
    log: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'fugit, sed quia consequuntur magni dolores eos',
      'minima veniam, quis nostrum exercitationem ullam corporis',
    ],
  },
  {
    id: 33,
    customer: 'Coast',
    email: 'a24v34v324v32f@fasjdf.com',
    itemDesc: 'Rolex Paul Newman',
    workDesc: 'Strap replacement',
    quotedPrice: 450,
    timeEstimate: 270,
    timeLogged: 100,
    costs: 60,
    status: 'Quote sent',
    flag: '🚩',
    log: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'fugit, sed quia consequuntur magni dolores eos',
      'minima veniam, quis nostrum exercitationem ullam corporis',
    ],
  },
  {
    id: 56,
    customer: 'Smith',
    email: 'av4234v324f@fasjdf.com',
    itemDesc: 'Zenith Chronomaster',
    workDesc: 'Bezel repair',
    quotedPrice: 450,
    timeEstimate: 220,
    timeLogged: 100,
    costs: 90,
    status: 'Received',
    flag: '',
    log: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'fugit, sed quia consequuntur magni dolores eos',
      'minima veniam, quis nostrum exercitationem ullam corporis',
    ],
  },
];

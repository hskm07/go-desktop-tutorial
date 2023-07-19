import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import './App.css';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70},
    { field: 'firstName', headerName: 'First Neme', width: 130},
    { field: 'lastName', headerName: 'Last Name', width: 130},
    { field: 'age', headerName: 'Age', type: "number", width: 90},
    {
        field: 'fullName',
        headerName: 'Full Name',
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lasName || ''}`,
    },
];


const rows = [
    {id: 1, lastName: "Snow", firstName: 'Jon', age: 35},
    {id: 2, lastName: "Lannister", firstName: 'Cersei', age: 42},
    {id: 3, lastName: "Lannister", firstName: 'Jaime', age: 45},
    {id: 4, lastName: "Stark", firstName: 'Arya', age: 16},
    {id: 5, lastName: "Targaryen", firstName: 'Daenerys', age: null},
    {id: 6, lastName: "Melisandre", firstName: null, age: 150},
];

function DataTable() {
    return (
        <div style={{ height: 400, width: '100%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                pagination
                autoPageSize
                checkboxSelection
            />
        </div>
    );
}


function App() {
    return (
        <div>
            <DataTable></DataTable>
        </div>
    );

}

export default App

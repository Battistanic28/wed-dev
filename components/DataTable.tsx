import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface DataTableProps {
  tableData: {
    columns: string[],
    rows: string[][],
  };
}

const DataTable = ({ tableData }: DataTableProps) => {
  const columns = tableData.columns;
  const rows = tableData.rows;
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="caption table">
        <TableHead>
          <TableRow>
            {columns.map((column, idx) => (
              <TableCell sx={{ fontWeight: 800 }} align="center" key={idx}>
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={idx}>
              {row.map((data, idx) => (
                <TableCell align="center" key={idx}>
                  {data}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;

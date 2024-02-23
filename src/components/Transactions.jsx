import {mockTransactions} from "../mockData";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Transactions() {
  
    return (
      <div className="transactions">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Tax ID</TableCell>
              <TableCell align="center">User</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockTransactions.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{row.txId}</TableCell>
                <TableCell align="center">{row.user}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">${row.cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
  );
}
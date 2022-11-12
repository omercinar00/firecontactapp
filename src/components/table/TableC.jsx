import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DeleteUser, EditUser, GetUser } from '../../utils/functions';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'


const TableC= ({editHandler})=> {
  const {contactList} = GetUser(); 


  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <tyledTableCell>User name</tyledTableCell>
            <tyledTableCell align="right">Phone Number</tyledTableCell>
            <tyledTableCell align="right">Gender</tyledTableCell>
            <tyledTableCell align="right">Delete</tyledTableCell>
            <tyledTableCell align="right">Edit</tyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactList?.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell align="right">{row.phoneNumber}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">
                {" "}
                <DeleteIcon onClick={() => DeleteUser(row.id)} />{" "}
              </TableCell>
              <TableCell align="right">
                {" "}
                <EditIcon
                  onClick={() =>
                    editHandler(
                      row?.id,
                      row?.username,
                      row?.phoneNumber,
                      row?.gender
                    )
                  }
                />{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableC;
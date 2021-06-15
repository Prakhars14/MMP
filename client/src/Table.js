import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#1D1D1D',
    color: theme.palette.common.white,
    textAlign:'center',
  },
  body: {
    fontSize: 14,
    textAlign:'center',

  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(country, idtype, routing, status, action) {
  return { country, idtype, routing, status, action};
}

const rows = [
  createData('AFGANISTAN', 'PASSPORT', 'eKYC VERIFY', 'Enabled', "EDIT"),
  createData('AFGANISTAN', 'PASSPORT', 'eKYC VERIFY', 'Enabled', "EDIT"),
  createData('INDIA', 'PAN CARD', 'eKYC VERIFY', 'Enabled', "EDIT"),
  createData('AFGANISTAN', 'PASSPORT', 'eKYC VERIFY', 'Enabled', "EDIT"),
  createData('INDIA', 'PAN CARD', 'eKYC VERIFY', 'Enabled', "EDIT"),
  createData('AFGANISTAN', 'PASSPORT', 'eKYC VERIFY', 'Enabled', "EDIT"),
  createData('INDIA', 'PAN CARD', 'eKYC VERIFY', 'Enabled', "EDIT"),
  createData('CHINA', 'PASSPORT', 'eKYC VERIFY', 'Enabled', "EDIT"),
  
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,

  },
});

export default function CustoTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Country</StyledTableCell>
            <StyledTableCell align="right">Id Type</StyledTableCell>
            <StyledTableCell align="right">Routing</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
       {/* <StyledTableRow>
        <StyledTableCell component="th" scope="row">
                hii
              </StyledTableCell>
              <StyledTableCell align="right">asadd</StyledTableCell>
              <StyledTableCell align="right">addasd</StyledTableCell>
              <StyledTableCell align="right">asdsad</StyledTableCell>
              <StyledTableCell align="right"><a href="">asdsad</a></StyledTableCell>
              </StyledTableRow>*/}
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.country}
              </StyledTableCell>
              <StyledTableCell align="right">{row.idtype}</StyledTableCell>
              <StyledTableCell align="right">{row.routing}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right"><a href="">{row.action}</a></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
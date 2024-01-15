import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { UserDefinition } from "../api";

interface Props {
  user: UserDefinition;
}

const AccountDetails = (props: Props): JSX.Element => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Key</TableCell>
            <TableCell align="left">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">Entity ID</TableCell>
            <TableCell align="left">{props.user.entityID}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="left">{props.user.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Email</TableCell>
            <TableCell align="left">{props.user.email}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AccountDetails;

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import numeral from 'numeral';
import oneMap from './One.Map.png';

const styles = theme => ({
  waysConn: {
    textAlign: 'right'
  }
});

class Freq1 extends Component {
  render() {
    const { classes } = this.props;

    let strutA;
    if (this.props.radius) {
      strutA = this.props.radius * 1.05146;
    }

    return <Grid container spacing={24}>
      <Grid item xs={6}>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Barra</TableCell>
                <TableCell>Comprimento</TableCell>
                <TableCell>Cúpula</TableCell>
                <TableCell>Esfera</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>A</TableCell>
                <TableCell>{numeral(strutA).format('0.0[00]')}</TableCell>
                <TableCell>25</TableCell>
                <TableCell>30</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2} className={classes.waysConn}>Conectores de 5 vias:</TableCell>
                <TableCell>6</TableCell>
                <TableCell>12</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2} className={classes.waysConn}>Conectores de 4 vias:</TableCell>
                <TableCell>5</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <img src={oneMap} alt="Mapa aereo da frequencia 1" />
      </Grid>
    </Grid>;
  }
}

export default withStyles(styles)(Freq1);

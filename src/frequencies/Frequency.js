import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import numeral from 'numeral';

const styles = theme => ({
  waysConn: {
    textAlign: 'right'
  },
  imageMap: {
    maxWidth: '100%'
  },
  imageMapButton: {
    display: 'inline-block'
  }
});

class Frequency extends Component {
	state = {open: false};

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, imageMap, imageMapAlt, struts, connectors } = this.props;
    const columns = struts[0].length;

    return <React.Fragment>
      <Grid item xs={8}>
        <Paper>
          <Table>
            <TableHead>
              {(columns === 4) && <TableRow>
                <TableCell>Barra</TableCell>
                <TableCell>Comprimento</TableCell>
                <TableCell>Cúpula</TableCell>
                <TableCell>Esfera</TableCell>
              </TableRow>}
              {(columns === 5) && <TableRow>
                <TableCell>Barra</TableCell>
                <TableCell>Comprimento</TableCell>
                <TableCell>3/8</TableCell>
                <TableCell>5/8</TableCell>
                <TableCell>Esfera</TableCell>
              </TableRow>}
            </TableHead>
            <TableBody>
              {struts.map((strut, i) => {
                if (columns === 4) {
                  return <TableRow key={i}>
                    <TableCell>{strut[0]}</TableCell>
                    <TableCell>{numeral(strut[1]).format('0.0[00]')}</TableCell>
                    <TableCell>{strut[2]}</TableCell>
                    <TableCell>{strut[3]}</TableCell>
                  </TableRow>;
                } else {
                  return <TableRow key={i}>
                    <TableCell>{strut[0]}</TableCell>
                    <TableCell>{numeral(strut[1]).format('0.0[00]')}</TableCell>
                    <TableCell>{strut[2]}</TableCell>
                    <TableCell>{strut[3]}</TableCell>
                    <TableCell>{strut[4]}</TableCell>
                  </TableRow>;
                }
              })}
              {connectors.map((conn, i) => (
                <TableRow key={i}>
                  <TableCell colSpan={columns === 4 ? 2 : 3} className={classes.waysConn}>{conn[0]}:</TableCell>
                  <TableCell>{conn[1]}</TableCell>
                  <TableCell>{conn[2]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        {imageMap && <ButtonBase classes={{root: classes.imageMapButton}} onClick={this.handleClickOpen}>
          <img src={imageMap} alt={imageMapAlt} className={classes.imageMap} />
          <div>Clique aqui para visualizar o mapa de montagem</div>
        </ButtonBase>}
        {imageMap && <Dialog
          open={this.state.open}
          onClose={this.handleClose}
					scroll='body'
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{imageMapAlt}</DialogTitle>
          <DialogContent>
						<img src={imageMap} alt={imageMapAlt} className={classes.imageMap} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Fechar
            </Button>
          </DialogActions>
        </Dialog>}
      </Grid>
    </React.Fragment>;
  }
}

export default withStyles(styles)(Frequency);

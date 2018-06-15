import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Freq1 from './frequencies/One.js';
import Freq2 from './frequencies/Two.js';
import './App.css';

const styles = theme => ({
  radius: {
    textAlign: 'center'
  },
  freqTitle: {
    textAlign: 'center',
    paddingTop: '5px'
  }
});

class App extends Component {
  state = {
    radius: ''
  }

  handleChange = name => e => {
    this.setState({
      [name]: parseFloat(e.target.value)
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />

        <Grid container spacing={24}>
          <Grid item xs={12} className={classes.radius}>
            <TextField
              label="Raio da Cúpula"
              type="number"
              value={this.state.radius}
              onChange={this.handleChange('radius')}
              inputProps={{
                min: 0
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography variant="headline" className={classes.freqTitle}>
              Frequencia:
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <AppBar position='static'>
              <Tabs value={0}>
                <Tab label="1" component={Link} to={'/frequencia/1'} />
                <Tab label="2" component={Link} to={'/frequencia/2'} />
                <Tab label="3" component={Link} to={'/frequencia/3'} />
                <Tab label="4" component={Link} to={'/frequencia/5'} />
                <Tab label="5" component={Link} to={'/frequencia/5'} />
                <Tab label="6" component={Link} to={'/frequencia/6'} />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>


        <div className="frequencyResults">
          <Route path='/frequencia/1' component={(props) => <Freq1 {...props} radius={this.state.radius} />} />
          <Route path='/frequencia/2' component={(props) => <Freq2 {...props} radius={this.state.radius} />} />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);

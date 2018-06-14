import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Freq1 from './frequencies/One.js';
import Freq2 from './frequencies/Two.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />

        <List>
          <ListItem button component={Link} to={'/frequencia/1'}>
            <ListItemText primary="1" />
          </ListItem>
          <ListItem button component={Link} to={'/frequencia/2'}>
            <ListItemText primary="2" />
          </ListItem>
        </List>

        <Route path='/frequencia/1' component={Freq1} />
        <Route path='/frequencia/2' component={Freq2} />
      </React.Fragment>
    );
  }
}

export default App;

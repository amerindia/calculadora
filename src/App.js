import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Freq1 from './frequencies/One.js';
import Freq2 from './frequencies/Two.js';
import Freq3 from './frequencies/Three.js';
import Freq4 from './frequencies/Four.js';
import Freq5 from './frequencies/Five.js';
import Freq6 from './frequencies/Six.js';
import './App.css';
import logo from './Logo.png';

const styles = theme => ({
  radius: {
    textAlign: 'center'
  },
  freqTitle: {
    textAlign: 'center',
    paddingTop: '5px'
  },
  tab: {
    minWidth: 132.6
  },
	footer: {
	},
	footerDivider: {
	 marginTop: theme.spacing.unit * 4,
	 marginBottom: theme.spacing.unit * 2
	},
	footerIcon: {
		display: 'inline-block',
		verticalAlign: 'middle',
		marginLeft: theme.spacing.unit * 2
	}
});

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        radius: '',
        selectedFreq: ''
      };
  }

  handleChange = name => e => {
    this.setState({
      [name]: parseFloat(e.target.value)
    });
  }

  setFreq = (e, value) => {
    this.setState({selectedFreq: value});
  }

  render() {
    const { classes, ...props } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />

        <div className='logo'><img src={logo} alt="calculadora de Geodésica - Ameríndia" /></div>
        <h1>Calculadora de Geodésica através do:</h1>

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
          {this.state.radius ? <React.Fragment>
            <Grid item xs={2}>
              <Typography variant="headline" className={classes.freqTitle}>
                Frequência:
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <AppBar position='static'>
                <Tabs value={this.state.selectedFreq} onChange={this.setFreq}>
                  {[1, 2, 3, 4, 5, 6].map(freq => (
                    <Tab
                      value={freq}
                      label={freq}
                      className={classes.tab}
                      key={freq}
                    />
                  ))}
                </Tabs>
              </AppBar>
            </Grid>
          </React.Fragment> : null}

					{this.state.radius >= 0 ? <React.Fragment>
						{this.state.selectedFreq === 1 && <Freq1 {...props} radius={this.state.radius} />}
						{this.state.selectedFreq === 2 && <Freq2 {...props} radius={this.state.radius} />}
						{this.state.selectedFreq === 3 && <Freq3 {...props} radius={this.state.radius} />}
						{this.state.selectedFreq === 4 && <Freq4 {...props} radius={this.state.radius} />}
						{this.state.selectedFreq === 5 && <Freq5 {...props} radius={this.state.radius} />}
						{this.state.selectedFreq === 6 && <Freq6 {...props} radius={this.state.radius} />}
					</React.Fragment> : null}

					<Grid item xs={12}>
						<Typography variant="caption" gutterBottom align="center" className={classes.footer}>
							<Divider className={classes.footerDivider} />
							<a href="http://amerindia.eco.br">Ameríndia - Design em Sustentabilidade</a>
							<a href="https://www.facebook.com/amerindiadesign" className={classes.footerIcon}>
								<svg style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
									<path fill="#000000" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" />
								</svg>
							</a>
							<a href="http://www.instagram.com/amerindia.eco.br" className={classes.footerIcon}>
								<svg style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
									<path fill="#000000" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
								</svg>
							</a>
						</Typography>
					</Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);

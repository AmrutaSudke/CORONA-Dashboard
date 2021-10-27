import {Component} from 'react';
import {Box, Typography, withStyles } from '@material-ui/core';
import logo from './image/COVID19.jpg';
import Cards from './Component/Cards';
import {fetchData } from './Service/API'
import Chart from './Component/Chart';
import Countries from './Component/Countries';




const style={
  container:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
  },
  header:{
background:'#f5f5f5',
width:400,
textAlign:'center',
fontSize:20,
padding:10,
color:'#777'

  },
  lastUpdated:{
    color:'#777',
    fontSize:'12px'
  }
}

class App extends Component{
  state= {
    data:{},
    country: ''
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData})
    console.log(fetchedData)
  }

  handleCountryChange = async(country) => {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country})
    console.log(fetchedData);
  }
  render(){
    const {data} = this.state;
    return(
      <>
      <box className={this.props.classes.container}>
      <Box className={this.props.classes.header}> COVID-19 CORONAVIRUS PANDAMIC </Box>
      <Typography className={this.props.classes.lastUpdated}> Last Updated:{data.lastUpdate && new Date(data.lastUpdate).toDateString()} </Typography>
      <img style={{width:'350px'}} src={logo} alt="covid" ></img>
   <Cards data={data} />

   <Countries handleCountryChange={this.handleCountryChange} />
   <Chart data={data} />


      </box>
      </>
    );
  }
  }

export default withStyles(style)(App);
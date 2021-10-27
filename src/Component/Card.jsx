import { Grid,CardContent, Typography, Box, Card, makeStyles } from "@material-ui/core";
import CountUp from "react-countup";

const useStyle = makeStyles({
    header:{
        background:'#f5f5f5',
        padding:10,

    }
})

const CardComponent = ({cardTitle, value,desc, lastUpdate}) => {

    const classes = useStyle();
  return(
      <Grid component={Card} style={{margin:'20px', borderBottom:'10px solid yellow'}}>
          <Box className={classes.header}>
              <Typography variant="h5" color="textSecondary">{cardTitle}</Typography>


            </Box>

          <CardContent>
              <Typography variant="h5"> 
              <CountUp start={0} end={value} duration={3} separator="," />

            </Typography>
            <Typography color="textSecondary"> {desc} </Typography>
            <Typography> {new Date(lastUpdate).toDateString()} </Typography>

          </CardContent>
      </Grid>
  );
}

export default CardComponent;
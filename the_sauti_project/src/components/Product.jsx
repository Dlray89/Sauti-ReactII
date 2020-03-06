import React from 'react'
import { Card, CardContent, Typography, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2)
    }
}))

const Product = ({ product }) => {
    const { id, user_id, username, location, item, description, price } = product;
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
            <Card className={classes.root}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        User: {username}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {location}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        ${price}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Product

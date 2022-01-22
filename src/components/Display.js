import React from 'react';
import { Typography, AppBar, Button, Card, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import EcoRoundedIcon from '@material-ui/icons/EcoRounded';
import useStyles from './DisplayStyle';

const Display = () => {
    const styles = useStyles();
    const cardArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <EcoRoundedIcon fontSize="large" className={styles.logo} />
                    <Typography variant="h5">
                        Box View
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={styles.container}>
                    <Container maxWidth="sm">
                        {/* gutterbottom adds padding below */}
                        <Typography variant="h2" align="center" gutterBottom>
                            View Images
                        </Typography>
                        <Typography align="center" >
                            This is a box layout images app.You can see the images only in this web app.Tech Stack - HTML, CSS3, Material-ui, Javascript, React
                        </Typography>
                    </Container>
                </div>
                <Container className={styles.cardGrid} maxWidth="md">
                    <div>
                        <Grid container spacing={4}>
                            {
                                cardArr.map((currVal) => (
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Card className={styles.card}>
                                            <CardMedia
                                                className={styles.cardmedia}
                                                image="https://source.unsplash.com/random "
                                            />
                                            <CardContent className={styles.cardContent}>
                                                <Typography variant="h4" gutterBottom>
                                                    Content Heading
                                                </Typography>
                                                <Typography>
                                                    Description of the content. This is a simple dummy blog to show the homepage design of a website.
                                                </Typography>
                                            </CardContent>
                                            <Button variant="contained" color="primary" >
                                                Open
                                            </Button>
                                        </Card>
                                    </Grid>))
                            }
                        </Grid>
                    </div>
                </Container>
            </main>
            <footer className={styles.footer}>
                Copyright © Box View.
            </footer>
        </>)
};

export default Display;
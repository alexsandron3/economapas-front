import { Grid, Typography, Card, CardContent } from '@mui/material';
import React, { Component } from 'react';
export default class Content extends Component {
  render() {
    const { children, cardTitle } = this.props;
    return (
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10} lg={10} mt={6} mb={6}>
          <Card elevation={24} p={6}>
            <CardContent sx={{ mt: 1 }}>
              <Typography variant="h4" mt={1} textAlign="center" p={1}>
                {cardTitle}
              </Typography>
              {children}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { TextField, useRecordContext } from 'react-admin';

import { Product } from '../types';

const ProductShow = () => {
    const record = useRecordContext<Product>();
    if (!record) return null;
    return (
        <Card sx={{ width: 600, margin: 'auto' }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography gutterBottom align="left">
                            <TextField source='name' sx={{ fontSize: "20px", fontWeight: "900" }} />
                        </Typography>
                        <Typography gutterBottom align="left">
                            <TextField source='description' sx={{}} />
                        </Typography>
                        <Typography variant="overline" gutterBottom align="left">
                            Created On {' '} {new Date(record.date).toLocaleDateString()}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} alignSelf="center">
                        <Typography gutterBottom align="center" sx={{ fontSize: "20px", fontWeight: "900" }}>
                        ${' '}<TextField source='price' sx={{ fontSize: "20px", fontWeight: "900" }} />
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ProductShow;
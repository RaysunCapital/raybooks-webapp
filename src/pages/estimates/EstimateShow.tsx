import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { ReferenceField, useRecordContext, useTranslate } from 'react-admin';

import { Customer, Estimate } from '../types';
import Basket from './Basket';
import Totals from './Totals';

const Spacer = () => <Box mb={1}>&nbsp;</Box>;

const EstimateShow = () => {

    const translate = useTranslate();
    const record = useRecordContext<Estimate>();
    if (!record) return null;

    
    return (
        <Card sx={{ width: 600, margin: 'auto' }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="h6" gutterBottom>
                            RayBooks
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" gutterBottom align="right">
                            Estimate #{record.id}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} container alignContent="flex-end">
                        <ReferenceField
                            reference="customers"
                            source="customer_id"
                            link={false}
                        >
                            <CustomerField />
                        </ReferenceField>
                    </Grid>
                </Grid>
                <Box height={20}>&nbsp;</Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom align="left">
                            Date{' '}
                        </Typography>
                        <Typography gutterBottom align="left">
                            {new Date(record.date).toLocaleDateString()}
                        </Typography>
                    </Grid>
                </Grid>
                <Box height={20}>&nbsp;</Box>
                <Typography variant="h6" gutterBottom>
                            {translate('resources.commands.section.items')}
                        </Typography>
                        <div>
                            <Basket />
                        </div>
                        <Spacer />

                        <Typography variant="h6" gutterBottom>
                            {translate('resources.commands.section.total')}
                        </Typography>
                        <div>
                            <Totals />
                        </div>
            </CardContent>
        </Card>
    );
};

const CustomerField = () => {
    const record = useRecordContext<Customer>();
    return record ? (
        <Typography>
            {record.first_name} {record.last_name}
            <br />
            {record.address}
            <br />
            {record.city}
        </Typography>
    ) : null;
};

export default EstimateShow;
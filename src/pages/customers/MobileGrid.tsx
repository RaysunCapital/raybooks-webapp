import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import {
    DateField,
    EditButton,
    useTranslate,
    NumberField,
    RecordContextProvider,
    useListContext,
} from 'react-admin';

import { Customer } from '../types';

const MobileGrid = () => {
    const translate = useTranslate();
    const { data, isLoading } = useListContext<Customer>();

    if (isLoading || data.length === 0) {
        return null;
    }

    return (
        <Box margin="0.5em">
            {data.map(record => (
                <RecordContextProvider key={record.id} value={record}>
                    <Card sx={{ margin: '0.5rem 0' }}>
                        <CardHeader
                            title={`${record.first_name} ${record.last_name}`}
                            subheader={
                                <>
                                    {translate(
                                        'resources.customers.fields.last_seen_gte'
                                    )}
                                    &nbsp;
                                    <DateField source="last_seen" />
                                </>
                            }
                            action={<EditButton />}
                        />
                        <CardContent sx={{ pt: 0 }}>
                            <Typography variant="body2">
                                {translate(
                                    'resources.commands.name',
                                    record.nb_commands || 1
                                )}
                                :&nbsp;
                                <NumberField source="nb_commands" />
                            </Typography>
                            <Typography variant="body2">
                                {translate(
                                    'resources.customers.fields.total_spent'
                                )}
                                :&nbsp;
                            </Typography>
                        </CardContent>
                        
                    </Card>
                </RecordContextProvider>
            ))}
        </Box>
    );
};

export default MobileGrid;
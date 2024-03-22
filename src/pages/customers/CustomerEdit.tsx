import {
    DateInput,
    Edit,
    NullableBooleanInput,
    TextInput,
    PasswordInput,
    SimpleForm,
    useTranslate,
} from 'react-admin';
import { Grid, Box, Typography } from '@mui/material';

import Aside from './Aside';
import FullNameField from './FullNameField';
import SegmentsInput from './SegmentInput';
import { validateForm } from './CustomerCreate';

const CustomerEdit = () => {
    const translate = useTranslate();
    return (
        <Edit title={<CustomerTitle />} aside={<Aside />}>
            <SimpleForm validate={validateForm}>
                <div>
                    <Grid container width={{ xs: '100%', xl: 800 }} spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Typography variant="h6" gutterBottom>
                                {translate(
                                    'resources.customers.fieldGroups.identity'
                                )}
                            </Typography>
                            <Box display={{ xs: 'block', sm: 'flex' }}>
                                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                                    <TextInput
                                        source="first_name"
                                        isRequired
                                        fullWidth
                                    />
                                </Box>
                                <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                                    <TextInput
                                        source="last_name"
                                        isRequired
                                        fullWidth
                                    />
                                </Box>
                            </Box>
                            <TextInput
                                type="email"
                                source="email"
                                isRequired
                                fullWidth
                            />
                            <Box display={{ xs: 'block', sm: 'flex' }}>
                                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                                    <DateInput
                                        source="birthday"
                                        fullWidth
                                        helperText={false}
                                    />
                                </Box>
                                <Box flex={2} ml={{ xs: 0, sm: '0.5em' }} />
                            </Box>

                            <Box mt="1em" />

                            <Typography variant="h6" gutterBottom>
                                {translate(
                                    'resources.customers.fieldGroups.address'
                                )}
                            </Typography>
                            <TextInput
                                source="address"
                                multiline
                                fullWidth
                                helperText={false}
                            />
                            <Box display={{ xs: 'block', sm: 'flex' }}>
                                <Box flex={2} mr={{ xs: 0, sm: '0.5em' }}>
                                    <TextInput
                                        source="city"
                                        fullWidth
                                        helperText={false}
                                    />
                                </Box>
                                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                                    <TextInput
                                        source="stateAbbr"
                                        fullWidth
                                        helperText={false}
                                    />
                                </Box>
                                <Box flex={2}>
                                    <TextInput
                                        source="zipcode"
                                        fullWidth
                                        helperText={false}
                                    />
                                </Box>
                            </Box>

                            <Box mt="1em" />

                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom>
                                {translate(
                                    'resources.customers.fieldGroups.stats'
                                )}
                            </Typography>

                            <SegmentsInput fullWidth />
                            <NullableBooleanInput
                                fullWidth
                                source="has_newsletter"
                            />
                        </Grid>
                    </Grid>
                </div>
            </SimpleForm>
        </Edit>
    );
};

const CustomerTitle = () => <FullNameField size="32" sx={{ margin: '5px 0' }} />;

export default CustomerEdit;
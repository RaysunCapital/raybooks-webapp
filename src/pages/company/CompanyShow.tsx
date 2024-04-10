import { Loading, useGetIdentity, useGetOne } from 'react-admin';
import { Box, Stack } from '@mui/material';

const CompanyShow = () => {
    const { data } = useGetIdentity();
    const { data: user, isLoading, error } = useGetOne('profiles', { id: data?.id });
    if (isLoading) { return <Loading />; }
    if (error) { return <p>ERROR</p>; }
    return <Box>
        <Stack>
            <div>{user.first_name}{user.last_name}</div>
            <div>{user.company}</div>
            <div>{user.telephone}</div>
            <div>{user.address}</div>
            <div>{user.city}</div>
            <div>{user.province}</div>
            <div>{user.country}</div>
        </Stack>
    </Box>;
};
export default CompanyShow;
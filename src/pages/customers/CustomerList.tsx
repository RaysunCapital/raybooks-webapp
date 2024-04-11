import {
    CreateButton,
    DatagridConfigurable,
    ExportButton,
    List,
    SelectColumnsButton,
    TextField,
    TopToolbar,
} from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';
import MobileGrid from './MobileGrid';

const CustomerListActions = () => (
    <TopToolbar>
        <CreateButton />
        <SelectColumnsButton />
        <ExportButton />
    </TopToolbar>
);

const CustomerList = () => {
    const isXsmall = useMediaQuery<Theme>(theme =>
        theme.breakpoints.down('sm')
    );
    const isSmall = useMediaQuery<Theme>(theme => theme.breakpoints.down('md'));
    return (
        <List
            
            sort={{ field: 'last_name', order: 'DESC' }}
            perPage={25}
            
            actions={<CustomerListActions />}
        >
            {isXsmall ? (
                <MobileGrid />
            ) : (
                <DatagridConfigurable
                    rowClick="edit"
                    sx={{
                        '& .column-groups': {
                            md: { display: 'none' },
                            lg: { display: 'table-cell' },
                        },
                    }}
                >
                    
                    
                    <TextField source="last_name"  />
                    <TextField source="first_name" />
                    <TextField source="email" />
                    <TextField source="telephone" />
                </DatagridConfigurable>
            )}
        </List>
    );
};

export default CustomerList;
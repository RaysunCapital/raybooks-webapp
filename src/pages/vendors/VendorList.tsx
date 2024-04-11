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

const VendorListActions = () => (
    <TopToolbar>
        <CreateButton />
        <SelectColumnsButton />
        <ExportButton />
    </TopToolbar>
);

const VendorList = () => {
    const isXsmall = useMediaQuery<Theme>(theme =>
        theme.breakpoints.down('sm')
    );
    const isSmall = useMediaQuery<Theme>(theme => theme.breakpoints.down('md'));
    return (
        <List
            
            sort={{ field: 'last_name', order: 'DESC' }}
            perPage={25}
            
            actions={<VendorListActions />}
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
                    
                    
                    <TextField source="company"  />
                    <TextField source="email" />
                    <TextField source="telephone" />
                </DatagridConfigurable>
            )}
        </List>
    );
};

export default VendorList;
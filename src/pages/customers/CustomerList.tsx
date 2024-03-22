import * as React from 'react';
import {
    BooleanField,
    CreateButton,
    DatagridConfigurable,
    DateField,
    ExportButton,
    List,
    NumberField,
    SelectColumnsButton,
    TextField,
    TopToolbar,
} from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';
import MobileGrid from './MobileGrid';

const VisitorListActions = () => (
    <TopToolbar>
        <CreateButton />
        <SelectColumnsButton />
        <ExportButton />
    </TopToolbar>
);

const VisitorList = () => {
    const isXsmall = useMediaQuery<Theme>(theme =>
        theme.breakpoints.down('sm')
    );
    const isSmall = useMediaQuery<Theme>(theme => theme.breakpoints.down('md'));
    return (
        <List
            
            sort={{ field: 'last_name', order: 'DESC' }}
            perPage={25}
            
            actions={<VisitorListActions />}
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
                    omit={['birthday']}
                >
                    
                    
                    <TextField source="first_name" />
                    <TextField source="email" />
                    <TextField source="last_name"  />
                    <DateField source="birthday" />
                </DatagridConfigurable>
            )}
        </List>
    );
};

export default VisitorList;
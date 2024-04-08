import { useState } from 'react';
import Box from '@mui/material/Box';
import {
    useTranslate,
    DashboardMenuItem,
    MenuItemLink,
    MenuProps,
    useSidebarState,
} from 'react-admin';
import invoices from '../pages/invoices/index';
import products from '../pages/products/index';
import reports from '../pages/reports/index';
import company from '../pages/company';
import expenses from '../pages/expenses';
import customers from '../pages/customers';
import estimates from '../pages/estimates';
import vendors from '../pages/vendors/index';
import SubMenu from './SubMenu';

type MenuName = 'menuCatalog' | 'menuSales' | 'menuCustomers';

const Menu = ({ dense = false }: MenuProps) => {
    const [state, setState] = useState({
        menuCatalog: true,
        menuSales: true,
        menuCustomers: true,
    });
    const translate = useTranslate();
    const [open] = useSidebarState();

    const handleToggle = (menu: MenuName) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <Box
            sx={{
                width: open ? 200 : 50,
                marginTop: 1,
                marginBottom: 1,
                transition: theme =>
                    theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
            }}
        >
            <DashboardMenuItem />
            <MenuItemLink
                to="/products"
                state={{ _scrollToTop: true }}
                primaryText={translate(`resources.products.name`, {
                    smart_count: 2,
                })}
                leftIcon={<products.icon />}
                dense={dense}
            />
            <SubMenu
                handleToggle={() => handleToggle('menuSales')}
                isOpen={state.menuSales}
                name="books.menu.sales"
                icon={<invoices.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to="/invoices"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.invoices.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<invoices.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/estimates"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.estimates.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<estimates.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/customers"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.customers.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<customers.icon />}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuCatalog')}
                isOpen={state.menuCatalog}
                name="books.menu.purchases"
                icon={<expenses.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to="/expenses"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.expenses.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<expenses.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/vendors"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.vendors.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<vendors.icon />}
                    dense={dense}
                />
            </SubMenu>
            <MenuItemLink
                to="/reports"
                state={{ _scrollToTop: true }}
                primaryText={translate(`resources.reports.name`, {
                    smart_count: 2,
                })}
                leftIcon={<reports.icon />}
                dense={dense}
            />
            <MenuItemLink
                to="/company"
                state={{ _scrollToTop: true }}
                primaryText={translate(`books.profile.title`, {
                    smart_count: 2,
                })}
                leftIcon={<company.icon />}
                dense={dense}
            />
        </Box>
    );
};

export default Menu;

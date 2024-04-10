import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useTranslate } from 'react-admin';

import CardWithIcon from './CardWithIcon';

interface Props {
    value?: string;
}

const MonthlyExpenses = (props: Props) => {
    const { value } = props;
    const translate = useTranslate();
    return (
        <CardWithIcon
            to="/expenses"
            icon={ShoppingCartIcon}
            title={translate('books.dashboard.expenses')}
            subtitle={value}
        />
    );
};

export default MonthlyExpenses;

import DollarIcon from '@mui/icons-material/AttachMoney';
import { useTranslate } from 'react-admin';

import CardWithIcon from './CardWithIcon';

interface Props {
    value?: string;
}

const MonthlyRevenue = (props: Props) => {
    const { value } = props;
    const translate = useTranslate();
    return (
        <CardWithIcon
            to="/invoices"
            icon={DollarIcon}
            title={translate('books.dashboard.monthly_revenue')}
            subtitle={'2000'}
        />
    );
};

export default MonthlyRevenue;

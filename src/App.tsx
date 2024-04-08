import { Admin, CustomRoutes, Resource, localStorageStore, useStore } from 'react-admin';
import { Dashboard } from './pages/dashboard';
import { Layout } from './layout';
import { LoginPage, SetPasswordPage, ForgotPasswordPage } from 'ra-supabase';
import { BrowserRouter, Route } from 'react-router-dom';
import { dataProvider } from './providers/dataProvider';
import { authProvider } from './providers/authProvider';
import englishMessages from './i18n/en';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { themes, ThemeName } from './themes/themes';
import invoices from './pages/invoices';
import customers from './pages/customers';
import estimates from './pages/estimates';
import expenses from './pages/expenses';
import products from './pages/products';
import vendors from './pages/vendors';
import CompanyShow from './pages/company/CompanyShow';

const i18nProvider = polyglotI18nProvider(
    locale => {
        if (locale === 'fr') {
            return import('./i18n/fr').then(messages => messages.default);
        }

        // Always fallback on english
        return englishMessages;
    },
    'en',
    [
        { locale: 'en', name: 'English' },
        { locale: 'fr', name: 'Français' },
    ]
);

const store = localStorageStore(undefined, 'RayBooks');

export const App = () => {
    const [themeName] = useStore<ThemeName>('themeName', 'soft');
    const lightTheme = themes.find(theme => theme.name === themeName)?.light;
    const darkTheme = themes.find(theme => theme.name === themeName)?.dark;
    return (
        <BrowserRouter>
            <Admin
                i18nProvider={i18nProvider}
                layout={Layout}
                store={store}
                dashboard={Dashboard}
                dataProvider={dataProvider}
                authProvider={authProvider}
                loginPage={LoginPage}
                lightTheme={lightTheme}
                darkTheme={darkTheme}
                defaultTheme="light"
            >
                <CustomRoutes noLayout>
                    <Route
                        path={SetPasswordPage.path}
                        element={<SetPasswordPage />}
                    />
                    <Route
                        path={ForgotPasswordPage.path}
                        element={<ForgotPasswordPage />}
                    />
                </CustomRoutes>
                <CustomRoutes>
                    <Route
                        path="/reports"
                        element={<div>hi</div>}
                    />
                    <Route
                        path="/company"
                        element={<CompanyShow />}
                    />
                </CustomRoutes>
                <Resource name="invoices" {...invoices} />
                <Resource name="customers" {...customers} />
                <Resource name="estimates" {...estimates} />
                <Resource name="expenses" {...expenses} />
                <Resource name="products" {...products} />
                <Resource name="vendors" {...vendors} />
            </Admin>
        </BrowserRouter>
    )
};
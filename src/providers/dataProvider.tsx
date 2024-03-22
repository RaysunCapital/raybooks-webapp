import { supabaseDataProvider } from 'ra-supabase';
import { supabaseClient } from '../supabase';

export const dataProvider = supabaseDataProvider({
    instanceUrl: 'https://gpuffempfwuwrvznwvgg.supabase.co',
    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwdWZmZW1wZnd1d3J2em53dmdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NjI2MTAsImV4cCI6MjAyNjMzODYxMH0.TXJbQ0rAC5yHRmK_9u_ZMD_s57oCuZi5PDTUTi6ARoY',
    supabaseClient
});
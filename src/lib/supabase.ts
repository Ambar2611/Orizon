import { createClient } from '@supabase/supabase-js';

// The anon key is safe to be exposed to the browser, but ensure Row Level Security (RLS) 
// is enabled on your Supabase tables to prevent unauthorized access.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ahslcapyakwbzlebftji.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoc2xjYXB5YWt3YnpsZWJmdGppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI1Njc5MTIsImV4cCI6MjA5ODE0MzkxMn0.6pXXX2xsd3BNDi71xvooGKJ9twld0FmEWUPEe7qrDGg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

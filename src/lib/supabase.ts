import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vlftvxroahekszurqmqr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsZnR2eHJvYWhla3N6dXJxbXFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIwNzE4NjEsImV4cCI6MjEwNzY0Nzg2MX0.wi_5sha5a9sjVRX9rjyZ9Lm2b0IzHfBeaOtqT_4gb8A';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

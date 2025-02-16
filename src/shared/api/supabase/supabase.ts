import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lhqozxewmfowutqmhfzz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxocW96eGV3bWZvd3V0cW1oZnp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2OTYxMTksImV4cCI6MjA1NTI3MjExOX0.6P6VSfkpByrtAMGtjv2OCiNVKDuUGk7Lppkvp31lh6o';
export const supabase = createClient(supabaseUrl, supabaseKey);
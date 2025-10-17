import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://acfsoxqwylxlwratecsy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjZnNveHF3eWx4bHdyYXRlY3N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwNDE2MDksImV4cCI6MjA3NTYxNzYwOX0.BUgaNNXKIO1BWeukirbUsbnsbjMU4B-M2l-LU0TAbPE'

export const supabase = createClient(supabaseUrl, supabaseKey)
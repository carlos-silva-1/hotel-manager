import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = 'https://ariehkmgfvnprsppiowm.supabase.co';
// RLS is active
export const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyaWVoa21nZnZucHJzcHBpb3dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwMzY4MTEsImV4cCI6MjAwNTYxMjgxMX0.CLLoL9b-vOkWONNIvtzuB0BiopIMGAgiKcUGFA5X5_4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gxnovrprgynqlwoygjqt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4bm92cnByZ3lucWx3b3lnanF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA3Mjg5NzksImV4cCI6MjAwNjMwNDk3OX0.JFbtq1aZc-aKaQ8HMYGWAsktFzTuc4cEF4WlleEQwU0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ewlbxdlqrizocrieaavk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3bGJ4ZGxxcml6b2NyaWVhYXZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxNTM4MDUsImV4cCI6MjAxMzcyOTgwNX0.mEMmDKhVn_LWuTIuAUIHSuGCsIDeQwhFm0USREZbx8g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bplabzvxpuvomsjnfnjx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwbGFienZ4cHV2b21zam5mbmp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0Mzg2NDcsImV4cCI6MjAxNzAxNDY0N30.edIdvt9n6_0T_vWdoPYoFEEXwClWrPHqyEGaY77tpfU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

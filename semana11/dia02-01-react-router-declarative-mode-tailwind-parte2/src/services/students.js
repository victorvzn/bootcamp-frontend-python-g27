import { supabase } from "../lib/supabase"

export const fetchStudents = async () => {
  const response = await supabase.from('students').select()

  console.log(response)

  return response
}
import { useState } from "react";
import { supabase } from "../lib/supabase";

export function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Login (Actualizamos el estado manualmente)
  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    
    if (error) throw error

    setUser(data?.user ?? null)
  }

  // Logout (resetear el estado user)
  const logout = async() => {
    await supabase.auth.signOut()

    setUser(null)
  }

  return {
    user,
    login,
    logout
  }
}
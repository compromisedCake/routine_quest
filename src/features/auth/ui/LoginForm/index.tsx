// src/features/auth/ui/LoginForm.tsx
import { useState } from 'react';
import { supabase } from '../../../../shared/api/supabase/supabase';



export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) console.error(error);
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Войти</button>
    </div>
  );
};
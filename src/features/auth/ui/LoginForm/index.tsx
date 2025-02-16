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
    <div className='p-4 border-2 border-teal-500 rounded flex justify-center items-center w-full bg-accent-content'>
      <form className='flex flex-col w-2/4'>
      <input className='input-primary validator p-4 text-accent' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <div className='validator-hint'>Enter valid email</div>
      <input className='input-primary validator p-4 text-accent' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div className='validator-hint'>Enter valid email</div>
      <button className='btn btn-primary' onClick={handleLogin}>Войти</button>
    </form>
    </div>
  );
};
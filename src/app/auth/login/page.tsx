import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className='w-full max-w-sm'>
      <div className='space-y-4 bg-white border rounded-2xl p-7'>
        <h2 className='text-2xl font-bold text-center'>Bem vindo de volta !</h2>
        <p>Entre com email e senha.</p>

        <Label className='block'>
          Email
          <Input
            type='email'
            placeholder='email@exemplo.com'
            className='mt-1'
          />
        </Label>
        <Label className='block'>
          Senha
          <Input type='password' placeholder='**********' className='mt-1' />
        </Label>

        <Button className='w-full mt-6'>Entrar</Button>
      </div>

      <span className='block mt-3 text-sm text-center bg-white text-muted-foreground'>
        Ainda não tem conta?
        <Link
          href='/auth/signup'
          className='ml-2 font-semibold text-stone-800 hover:underline'
        >
          Criar
        </Link>
      </span>
    </div>
  );
};

export default LoginPage;

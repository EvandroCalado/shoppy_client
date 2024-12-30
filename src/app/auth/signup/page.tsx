import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

const SignUpPage = () => {
  return (
    <div className='w-full max-w-sm'>
      <div className='space-y-4 bg-white border rounded-2xl p-7'>
        <h2 className='text-2xl font-bold text-center'>Seja bem vindo !</h2>
        <p>Criar conta.</p>

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

        <Button className='w-full mt-6'>Criar</Button>
      </div>

      <span className='block mt-3 text-sm text-center bg-white text-muted-foreground'>
        Já tem uma conta?
        <Link
          href='/auth/login'
          className='ml-2 font-semibold text-stone-800 hover:underline'
        >
          Clique aqui
        </Link>
      </span>
    </div>
  );
};

export default SignUpPage;

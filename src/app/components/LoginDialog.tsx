import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { signIn } from 'next-auth/react'
import { GithubLogo, GoogleLogo } from 'phosphor-react'

interface LoginDialogProps {
  isLoginDialogOpen: boolean
  onLoginDialogOpenChange: (status: boolean) => void
}

export function LoginDialog({
  isLoginDialogOpen,
  onLoginDialogOpenChange,
}: LoginDialogProps) {
  return (
    <Dialog onOpenChange={onLoginDialogOpenChange} open={isLoginDialogOpen}>
      <DialogContent className="w-[516px] flex flex-col items-center">
        <DialogHeader>
          <DialogTitle className="text-base font-bold">
            Faça login para deixar sua avaliação
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex flex-col w-[70%] gap-4 mt-5">
          <button
            onClick={() => signIn('google')}
            className="flex items-center h-[72px] bg-slate-700 text-gray-100 text-lg p-4 gap-3 rounded-lg"
          >
            <GoogleLogo size={32} /> Entrar com Google
          </button>
          <button className="flex items-center h-[72px] bg-slate-700 text-gray-100 text-lg p-4 gap-3 rounded-lg">
            <GithubLogo size={32} /> Entrar com Github
          </button>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
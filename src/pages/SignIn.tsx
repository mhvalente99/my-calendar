import { Checkbox } from "@radix-ui/react-checkbox";
import { CalendarBlank, Envelope, LockSimple } from "phosphor-react";
import { Button } from "../components/Button/Button";
import { Heading } from "../components/Heading/Heading";
import { Text } from "../components/Text/Text";
import { TextInput } from "../components/TextInput/TextInput";

export function SignIn() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-green-50">
      <header className="flex flex-col items-center">
        <CalendarBlank width="124" height="124" className="text-green-600"/>

        <Heading size="lg" className="mt-4">
          myCalendar
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">faça login e começe a usar!</Text>
      </header>

      <form className="flex flex-col items-stretch w-full max-w-sm mt-8 gap-3">
        <label htmlFor="email" className="flex flex-col gap-2">
          <Text className="font-semibold">endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type="email" id="email" placeholder="digite seu e-mail"/>
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-2">
          <Text className="font-semibold">senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <LockSimple />
            </TextInput.Icon>

            <TextInput.Input type="password" id="password" placeholder="********"/>
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2 mt-3">
          <Checkbox id="remember"/>
          <Text size="sm" className="text-green-50">Lembrar de mim por 30 dias</Text>
        </label>

        <Button type="submit" className="mt-4">entrar na plataforma</Button>
      </form>

      <footer className="flex flex-col items-center gap-3 mt-8">
        <Text size="sm" asChild>
          <a href="" className="text-gray-400 underline">esqueçeu sua senha?</a>
        </Text>

        <Text size="sm" asChild>
          <a href="" className="text-gray-400 underline">não tem uma conta? crie aqui!</a>
        </Text>
      </footer>
    </div>
  )
}


import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function Inputs() {
  return (
    <div className="grid grid-cols-1 gap-2">
      <fieldset className="grid grid-cols-1 gap-1">
        <Label className="font-normal text-zinc-700 px-1" htmlFor="username">
          Nome do usuário
        </Label>
        <Input
          id="username"
          name="username"
          placeholder="ex: Lucca Teixeira"
          type="text"
        />
      </fieldset>
      <fieldset className="grid grid-cols-1 gap-1">
        <Label className="font-normal text-zinc-700 px-1" htmlFor="email">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          placeholder="ex: lucca.teixeira@email.com"
          type="email"
        />
      </fieldset>
      <fieldset className="grid grid-cols-1 gap-1">
        <Label className="font-normal text-zinc-700 px-1" htmlFor="password">
          Senha
        </Label>
        <Input
          id="password"
          name="password"
          placeholder="Digite sua senha..."
          type="password"
        />
      </fieldset>
      <fieldset className="grid grid-cols-1 gap-1">
        <Label className="font-normal text-zinc-700 px-1" htmlFor="bornDate">
          Data de nascimento
        </Label>
        <Input
          id="bornDate"
          name="bornDate"
          placeholder="12/03/2005"
          type="text"
        />
      </fieldset>
      <fieldset className="grid grid-cols-1 gap-1">
        <Label className="font-normal text-zinc-700 px-1" htmlFor="telphone">Número de telefone</Label>
        <Input
          id="telphone"
          name="telphone"
          placeholder="(75) 98866-3322"
          type="tel"
        />
      </fieldset>
    </div>
  );
}

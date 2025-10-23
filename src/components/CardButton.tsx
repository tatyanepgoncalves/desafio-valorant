import { Label } from "./ui/label";
import { Button } from "./ui/button";

export default function CardButton() {
  return (
    <div className="grid grid-cols-1 gap-2 mt-9">
      <div className="flex items-center gap-1">
        <input type="checkbox" id="text-check" />
        <Label className="font-normal" htmlFor="text-check">
          Aceito os{" "}
          <span className="text-[#1D4ED8] font-medium">
            termos de uso e política de privacidade*
          </span>
        </Label>
      </div>
      <Button className="w-full bg-[#CC4343] py-5  font-bold uppercase">Cadastrar</Button>
    </div>
  );
}

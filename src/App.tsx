import CardButton from "./components/CardButton";
import Inputs from "./components/Inputs";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

export default function App() {

  return (
    <div className="min-h-screen grid items-center justify-center">
      <Card className="w-md grid grid-cols-1">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Cadastro</CardTitle>
        </CardHeader>

        <CardContent className="">
          <Inputs />
          <CardButton />
        </CardContent>
      </Card>
    </div>
  )
}

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"


export function RegisterCard() {
  return (
    <Card className="col-span-full md:col-start-3 md:col-end-7 lg:col-start-5 lg:col-end-9">
      <CardHeader>
        <CardTitle>Regístrate</CardTitle>
        <CardDescription>Las mejores películas en Libélula Movies</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input id="email" placeholder="sammy2455@hotmail.com"/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Nombre y apellido</Label>
              <Input id="email" placeholder="Sammy Camatón"/>
            </div>
            <div className="flex flex-col space-y-1.5">
							<Label htmlFor="password">Contraseña</Label>
							<Input id="password" placeholder="●●●●●●●●" />
            </div>
            <div className="flex flex-col space-y-1.5">
							<Label htmlFor="repeat">Confirmar contraseña</Label>
							<Input id="repeat" placeholder="●●●●●●●●" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href="/login">
          <Button variant="outline">Ir a inicio</Button>
        </Link>
        <Button>Regístrate</Button>
      </CardFooter>
    </Card>
  )
}

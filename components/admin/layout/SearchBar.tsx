import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
 
export function SearchBar() {
  return (
    <div className="flex w-full max-w-md items-center space-x-2">
      <Input type="text" placeholder="Buscar..." />
      <Button type="submit">
        <Search className="w-5" strokeWidth={3}/>
      </Button>
    </div>
  )
}
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import useMovie from "@/modules/movies/hooks/useMovie";
 
export function SearchBar() {

    const {searchQuery, setSearchQuery, handleSearch} = useMovie();

    return (
        <div className="flex w-full max-w-md items-center space-x-2">
            <Input
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
                type="text"
                placeholder="Buscar..."
            />
            <Button
                type="submit"
                onClick={handleSearch}
            >
                <Search className="w-5" strokeWidth={3}/>
            </Button>
        </div>
  )
}
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react";
import { Button } from "../ui/button";

const WriteComment = () => {
    return (
        <div className="space-y-4">
            <div className="space-x-1">
                <button><Star className=""/></button>
                <button><Star className=""/></button>
                <button><Star className=""/></button>
                <button><Star className=""/></button>
                <button><Star className=""/></button>
            </div>
            <Textarea placeholder="Escribe tu reseña..." />
            <Button type="submit">Guardar</Button>
        </div>
    );
}
 
export default WriteComment;
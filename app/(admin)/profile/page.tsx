import Califications from "@/components/browse/Califications";
import MyCalifications from "@/components/profile/MyCalifications";
import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";

const ProfilePage = () => {
    return (
        <div className="max-w-384 mx-auto grid-layout">
            <div className="col-span-full lg:col-start-3 text-center md:text-left">
                <h1 className="header-1">Mi perfil</h1>
            </div>
            <div className="col-span-full md:col-start-1 md:col-span-2 lg:col-start-3">
                <div className="w-full aspect-square bg-white rounded-full flex items-center justify-center text-primary">
                    <UserIcon className="w-52 h-52 md:h-36 md:w-36"/>
                </div>
            </div>
            <div className="col-span-full md:col-span-4 flex flex-col justify-center space-y-4">
                <ul>
                    <li><span>Nombre: </span><span className="text-primary">Sammy Camatón</span></li>
                    <li><span>Correo: </span><span className="text-primary">sammy2455@hotmail.com</span></li>
                </ul>
                <div>
                    <Button>Cerrar Sesión</Button>
                </div>
            </div>
            <div className="col-span-full lg:col-start-3 lg:col-end-11">
                <h2 className="header-2 my-4">Reseñas</h2>
                <MyCalifications/>
            </div>
        </div>
    );
}
 
export default ProfilePage;
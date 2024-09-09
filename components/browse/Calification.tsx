import { UserAvatar } from "./UserAvatar";

const Calification = (props) => {
    return (
        <div className="my-4">
            <div className="flex space-x-4">
                <UserAvatar/>
                <div className="flex flex-col">
                    <span>Sammy2455</span>
                    <span>2024/09/08</span>
                </div>
                {
                    props.movieName //todo: Mostrar solo en la pagina perfil
                    ? (
                        <div className="border-l px-4">
                            <span>Nombre Peli</span>
                        </div>
                    )
                    : null
                }
                
            </div>
            <div className="p-4 bg-white/10 rounded-md">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam et fugit ex nisi architecto incidunt labore nostrum ut possimus porro autem necessitatibus, quos rem voluptatem similique nulla, ipsa animi sunt?</span>
            </div>
        </div>
    );
}
 
export default Calification;
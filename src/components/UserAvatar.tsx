import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getCurrentUser } from "../../actions/getCurrentUser";

const UserAvatar = async() => {
    const currentUser = await getCurrentUser()
    const bcrypt = require('bcrypt');

    return ( 
        <div>

        {currentUser ? 
            <>
            <button>
                    <div className="flex items-center">
                        <Avatar>
                            {/*@ts-ignore*/}
                            <AvatarImage src={currentUser?.image} alt="Imagem de perfil" />
                            <AvatarFallback>ᕕ(ᐛ)ᕗ</AvatarFallback>
                        </Avatar>
                        {currentUser?.name}
                    </div>
            </button> 
            </>
            : <></>
        }
        </div>
     );
}
 
export default UserAvatar;
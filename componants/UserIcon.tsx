import { currentUser } from '@clerk/nextjs/server'

const UserIcon = async ()=>{
    const user = await currentUser();
    if (!user) return <div>Not signed in</div>
    console.log(user)
    return <div>
        <div>
            <img src={user.imageUrl} alt={'user avatar'}/>
        </div>
        <div>
            <div>{user.fullName}</div>
            <div></div>
            <div></div>
        </div>
    </div>
}

export default UserIcon
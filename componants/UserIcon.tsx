import { currentUser } from '@clerk/nextjs/server'

const UserIcon = async ()=>{
    const user = await currentUser();
    if (!user) return <div>Not signed in</div>
    console.log(user)
    const createdAt = new Date (user.createdAt)
    const fullMonthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(createdAt);
    return <div className={'d-flex'}>
        <div>
            <img style={{width:'50px'}} className={'rounded-circle'} src={user.imageUrl} alt={'user avatar'}/>
        </div>
        <div className={'ps-3'}>
            <div>{user.fullName}</div>
            <div>sdfgsdfg</div>
            <div>{`${fullMonthName} ${createdAt.getDate()}, ${createdAt.getFullYear()}`}</div>
        </div>
    </div>
}

export default UserIcon
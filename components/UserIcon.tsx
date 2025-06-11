import { currentUser} from '@clerk/nextjs/server'
import {SignedIn, UserButton} from "@clerk/nextjs";

const UserIcon = async ()=>{

    const user = await currentUser();
    if (!user) return null


    const createdAt = new Date (user.createdAt)
    const fullMonthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(createdAt);
    return <div className={'d-flex border-2 border-secondary rounded-2 bg-body-tertiary shadow-sm p-3 m-md-5'}>
        <div className={'align-content-center'}>
            <SignedIn>
                <UserButton appearance={{
                    elements: {
                        avatarBox: {
                            width: "50px",
                            height: "50px",
                        },
                    },
                }} />
            </SignedIn>
        </div>
        <div className={'ps-3'}>
            <div>{user.fullName}</div>
            <div>{user.emailAddresses[0].emailAddress}</div>
            <div>{`${fullMonthName} ${createdAt.getDate()}, ${createdAt.getFullYear()}`}</div>
        </div>
    </div>
}

export default UserIcon
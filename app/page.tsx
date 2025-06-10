import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import UserIcon from "@/componants/UserIcon";
const Home = ()=>{
  return (
      <div>
          <header className={'navbar bg-body-tertiary'}>
              <SignedOut>
                  <SignInButton />
                  <SignUpButton />
              </SignedOut>
              <SignedIn>
                  <UserButton />
              </SignedIn>
          </header>
          <main>
              <UserIcon></UserIcon>
          </main>
      </div>
  )
}

export default Home
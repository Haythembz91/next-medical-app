import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'

const Home = ()=>{
  return (
      <div>
          <header>
              <SignedOut>
                  <SignInButton />
                  <SignUpButton />
              </SignedOut>
              <SignedIn>
                  <UserButton />
              </SignedIn>
          </header>
      </div>
  )
}

export default Home
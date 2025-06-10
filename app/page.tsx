
import UserIcon from "@/components/UserIcon";
import PatientContainer from "@/components/PatientContainer";
const Home = ()=>{
  return (
      <div>
          <header className={'navbar bg-body-tertiary'}>

          </header>
          <main>
              <UserIcon></UserIcon>
              <PatientContainer></PatientContainer>
          </main>
      </div>
  )
}

export default Home
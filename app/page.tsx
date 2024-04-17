import { ReactNode } from "react"
import FluentLogo from "../components/Logo"
import Wave from "../components/Wave"
import { headerFont } from "./fonts"

export default function Page () {
  return (
    <main className='flex flex-col items-stretch h-full'>
      <h1 className='hidden'>Fluent programming language</h1>

      <div className='flex flex-col gap-10 bg-gray-950 items-center justify-center px-10 py-28'>
        <div className='w-40 h-40'>
          <FluentLogo />
        </div>
        <h2 className={`${headerFont.className} text-4xl font-bold text-gray-300 text-center`}>
          Fluent
        </h2>
        <div className={`${headerFont.className} text-2xl text-gray-200 text-center`}>
          A minimalistic language for scripting and metaprogramming
        </div>
      </div>

      <div className='text-gray-950 bg-middle'>
        <Wave />
      </div>

      <div className='bg-middle p-12 md:p-20'>
        <h2 className='hidden'>
          Highlights
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-screen-xl mx-auto'>
          <Highlight title='Hackable'>
            You are free to experiment with the language and
            change it to suit your needs.
            The core language is so small that you can write your own
            interpreter in a weekend.
          </Highlight>
          <Highlight title='Embeddable'>
            Add Fluent scripting to your application.
            Write application specific APIs in native language and extend
            the Fluent interpreter with custom symbols.
          </Highlight>
          <Highlight title='Extensible'>
            Many language features can be written in the core language.
            Language dialects can be shared as libraries.
          </Highlight>
          <Highlight title='Portable'>
            Fluent is a high level interpreted language that is intended to
            be run on any platform.
          </Highlight>
          <Highlight title='Declarative'>
            Write scalable and maintainable code in pure concatenative and
            functional style.
          </Highlight>
          <Highlight title='Dynamic'>
            The language is dynamically typed but a static type checker is
            planned. You are encouraged to write your static analysis tools.
          </Highlight>
          <Highlight title='Grammatic'>
            It is as easy to write a parser as writing a function in Fluent.
          </Highlight>
          <Highlight title='Homoiconic'>
            One can easily write a Fluent interpreter in Fluent.
          </Highlight>
          <Highlight title='Well-defined'>
            The language is built on clear concepts.
            It is easy to reason about Fluent programs both for humans and for
            machines.
          </Highlight>
          <Highlight title='Spec first'>
            The primary goal of the Fluent project is to provide documentation
            and a recipe for writing interpreters.
          </Highlight>
        </div>
      </div>

      <div className='text-middle bg-gray-950'>
        <Wave />
      </div>

      <div className='bg-gray-950
      flex flex-col gap-6 items-center justify-center p-12 md:p-20'>
        <div className='flex flex-col gap-12'>
          <h2 className={`${headerFont.className} text-5xl font-normal mb-7 text-center text-gray-300`}>
            Application ideas
          </h2>
          <UseCase title='Task automation' icon={TaskAutomationIcon}>
            Automate repetitive tasks with a simple and powerful language.
          </UseCase>
          <UseCase title='Embedded scripting' icon={EmbeddedScriptingIcon}>
            Customize your application with a scripting language.
          </UseCase>
          <UseCase title='M2M communication' icon={M2MCommunicationIcon}>
            Fluent programs naturally communicate via text streams.
          </UseCase>
          <UseCase title='DSLs' icon={DSLsIcon}>
            Create domain-specific languages for your applications.
          </UseCase>
          <UseCase title='Portable logic' icon={PortableLogicIcon}>
            Write your application logic in Fluent and translate it to your
            implementation languages.
          </UseCase>
          <UseCase title='Sandboxing' icon={SandboxingIcon}>
            General scripting languages are notoriously hard to sandbox.
            Fluent is designed with this kind of use in mind.
          </UseCase>
          <UseCase title='Persistent processes' icon={PersistentProcessesIcon}>
            Fluent programs can be paused and resumed.
            A paused program can be serialized to text and stored in a file or a database.
          </UseCase>
        </div>
      </div>

      <div className='text-gray-950 bg-footer'>
        <Wave />
      </div>

      <div className='bg-footer p-8'>
        <h2 className='hidden'>
          Footer
        </h2>
        <div className='text-center'>
          <div>
            © 2024 Fluent contributors
          </div>
        </div>
      </div>

    </main >
  )
}

function Highlight ({ title, link, children }: {
  title: string
  link?: string
  children?: ReactNode
}) {
  return (
    <div>
      <h3 className={`${headerFont.className} font-light text-gray-300 text-3xl mb-5`}>
        {title}
      </h3>
      <div>
        {children}
      </div>
      {link && (
        <a
          className='m-1.5 text-lg self-stretch'
          href={link}
        >
          Learn more
        </a>
      )}
    </div>
  )
}

function UseCase ({ title, icon, children }: {
  title: string
  icon?: ReactNode
  children?: ReactNode
}) {
  return (
    <div className='flex flex-row max-w-screen-md'>
      <div className='text-logo mr-5'>
        {icon}
      </div>
      <div>
        <h3 className={`${headerFont.className} font-light text-gray-300 text-2xl mb-4`}>
          {title}
        </h3>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

const TaskAutomationIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="4rem" viewBox="0 -960 960 960" width="4rem"><path d="M415.851-416.188Q375-457 343-504.5T287-606q-17 29-26 60.5t-9 65.5q0 94.925 66.538 161.462Q385.075-252 480-252q33 0 64.953-9 31.954-9 60.047-26-53-24-100.649-56.188-47.65-32.188-88.5-73ZM432-431q45 46 100.045 80.5Q587.091-316 650-294q-35.353 32.194-78.765 48.597Q527.824-229 481-229q-104.061 0-177.53-73.47Q230-375.939 230-480q0-46.824 16.403-90.235Q262.806-613.647 295-649q22 62.909 56.5 117.955Q386-476 432-431Zm276 57q-5.119-2.059-11.059-3.529Q691-379 686-381q11-23 17-48t6-50.636q0-96.036-66.664-162.7Q575.672-709 479.636-709 454-709 429-703.5q-25 5.5-48 16.5-2-5-3.062-10.224-1.063-5.224-2.938-9.776 24-12 50.895-18 26.894-6 55.105-6 104.061 0 177.53 73.47Q732-584.061 732-480q0 28.211-6 55.105Q720-398 708-374ZM469-826v-88h22v88h-22Zm0 780v-88h22v88h-22Zm264-671-16-16 60-60 16 16-60 60ZM183-167l-16-16 60-60 16 16-60 60Zm643-302v-22h88v22h-88Zm-780 0v-22h88v22H46Zm731 302-60-60 16-16 60 60-16 16ZM227-717l-60-60 16-16 60 60-16 16Zm189 301Z" /></svg>
)

const EmbeddedScriptingIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="4rem" viewBox="0 -960 960 960" width="4rem"><path d="M332-224q-8.55 0-15.275-6.725T310-246v-62h110v-153q-41 12-85 3t-71-36v-64h-62L96-665q34-23 74.5-38.5T254-719q42.885 0 85.942 14.5Q383-690 420-659v-85h368v456q0 27-18.5 45.5T725-224H332Zm110-84h241v20q0 18 12 30t30 12q17 0 29-12t12-30v-434H442v86l214 214v16h-16L512-533l-30 30q-10 11-19.5 17.5T442-473v165ZM212-580h74v76q23 15 43.5 21t38.905 6Q397-477 423-489.5t44-30.5l29-29-78-78q-34.02-35-76.01-52.5T254-697q-34 0-66 10.5T132-661l80 81Zm449 294H332v40h345q-8-7-12-17.823-4-10.822-4-22.177Zm-329 40v-40 40Z" /></svg>
)

const M2MCommunicationIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="4rem" viewBox="0 -960 960 960" width="4rem"><path d="M586-59v-22q119 0 202-82.746Q871-246.493 871-366h22q0 64-24 120t-65.5 97.5Q762-107 706-83T586-59Zm0-116v-22q69 0 119-50t50-119h22q0 78-56.5 134.5T586-175Zm-334.065 65q-9.602 0-18.768-3Q224-116 217-123L67-273q-7-7-10-15.891-3-8.89-3-18.781 0-9.328 2.978-18.103Q59.956-334.55 67-342l114-114q14-14 34-14t34 14l66 65 67-67-65-65q-14-14.449-14-34.725Q303-578 317-592l42-42q14.467-14 34.233-14Q413-648 427-634l65 65 68-68-65-65q-14-14.467-14-34.733Q481-757 495-771l114-114q7.143-7 15.571-10.5Q633-899 642.5-899q9.5 0 18.5 2.5t17 10.5l150 150q6.87 6.521 9.935 16.254Q841-710.014 841-700.555 841-691 838-682t-10 16L714-552q-16 16-34.5 16T645-552l-65-65-68 68 65 65q14 14.467 14 34.733Q591-429 577-415l-41 41q-14.467 14-34.733 14.5Q481-359 467-373l-65-65-67 67 65 66q14 14 14 34t-14 34L286-123q-7.45 7.043-16.225 10.022Q261-110 251.935-110ZM235-137q7 7 17 7t17-7l49-48-188-188-48 49q-7 7-7 17t7 17l153 153Zm103-69 48-49q7-7 7-17t-7-17L233-442q-7-7-17-7t-17 7l-49 48 188 188Zm146-182q7 7 17 7t17-7l46-45q6-7 6-17t-6-17L410-621q-7-6-17-6t-17 6l-45 46q-7 7-7 17t7 17l153 153Zm178-179q7 7 17 7t17-7l49-48-188-188-48 49q-7 7-7 17t7 17l153 153Zm104-68 48-49q7-6 7-16.5t-7-17.5L661-871q-7-7-17.5-7t-16.5 7l-49 48 188 188ZM448-504Z" /></svg>
)

const PortableLogicIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="4rem" viewBox="0 -960 960 960" width="4rem"><path d="M218.882-206Q178-206 149-235.167 120-264.333 120-306H76v-388q0-22.775 15.612-38.388Q107.225-748 130-748h526v142h79l149 200v100h-57q0 41.667-29.201 70.833Q768.598-206 726.882-206q-41.299 0-70.09-29.167Q628-264.333 628-306H319q0 42-29.618 71-29.617 29-70.5 29Zm.618-22q32.5 0 55-22.5t22.5-55q0-32.5-22.5-55t-55-22.5q-32.5 0-55 22.5t-22.5 55q0 32.5 22.5 55t55 22.5ZM98-328h21q6-31 35.041-54 29.041-23 65.143-23 34.102 0 63.959 22.5Q313-360 319-328h315v-398H130q-12 0-22 10t-10 22v366Zm629.5 100q32.5 0 55-22.5t22.5-55q0-32.5-22.5-55t-55-22.5q-32.5 0-55 22.5t-22.5 55q0 32.5 22.5 55t55 22.5ZM656-410h199L722-584h-66v174ZM366-524Z" /></svg>
)

const SandboxingIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="4rem" viewBox="0 -960 960 960" width="4rem"><path d="M480-110 146-297v-370l334-183 334 183v370L480-110ZM370-554q20-27 48.5-42t61.5-15q33 0 61.5 15t48.5 42l188-106-298-165-298 165 188 106Zm99 412v-205q-51-8-85.5-45T349-480q0-14 3-27t8-27L168-642v332l301 168Zm11-229q46 0 77.5-31.5T589-480q0-46-31.5-77.5T480-589q-46 0-77.5 31.5T371-480q0 46 31.5 77.5T480-371Zm11 229 301-168v-332L600-534q5 14 8 27t3 27q0 51-34.5 88T491-347v205Z" /></svg>
)

const PersistentProcessesIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="4rem" viewBox="150 -810 660 660" width="4rem"><path d="M304-312v-336h22v336h-22Zm132 0 277-168-277-168v336Zm22-44v-248l205 124-205 124Zm0-124Z" /></svg>
)

const DSLsIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="4rem" viewBox="0 -960 960 960" width="4rem"><path d="M480-217q-52.479 0-98.867-19.194Q334.745-255.388 299-288l-93 91q-2.667 4-7.333 4-4.667 0-7.667-3.5t-3-7.667q0-4.166 3-6.833l92-92q-33.343-37.163-52.172-83.133Q212-432.103 212-485q0-112.225 77.888-190.112Q367.775-753 480-753h268v268q0 111.225-77.888 189.612Q592.225-217 480-217Zm0-22q102.5 0 174.25-71.75T726-485v-246H480q-102.5 0-174.25 71.75T234-485q0 48.127 17 91.064Q268-351 298-318l213-213q2.667-3 7.333-3 4.667 0 7.928 3.739Q529-527.2 529-523.1t-3 7.1L313-304q32.81 30.182 76.037 47.591Q432.264-239 480-239Zm0-246Z" /></svg>
)

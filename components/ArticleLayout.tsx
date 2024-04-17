import { Sidebar } from "./Sidebar"

export function ArticleLayout ({ children }: {
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-row gap-16 h-full'>
      <div className='basis-80 overflow-y-auto hidden lg:block'>
        <Sidebar />
      </div>
      <div className='grow p-16 max-w-screen-lg overflow-y-auto'>
        {children}
      </div>
      <div className='overflow-y-auto hidden xl:block'>
      </div>
    </div>
  )
}

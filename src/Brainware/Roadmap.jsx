import { roadmap } from './constants'
import { check2, loading1 } from './assets/assets'

function Roadmap() {
  return (
    <section className='mt-[5rem] w-[80%] mx-auto'>
      <div className='text-center space-y-6'>
        <p className=' bg-gradient-to-r from-green-600 via-violet-700 to-pink-900 bg-clip-text text-transparent'>[READY TO GET STARTED]</p>
        <h1>Whats were workin on </h1>
      </div>
      <div className='grid xl:grid-cols-2 grid-cols-1 gap-6 my-[10rem] '>
        {roadmap.map(road=>
          <div className={`   relative rounded-[4.2rem]   ${road.status==='done'?'xl:-translate-y-10':'xl:translate-y-10'} ${road.colorful?'p-[0.7px]  bg-gradient-to-t from-blue-900 via-green-400 to-violet-500   ':'border-1 border-[#282338] border-solid'} `}>
            <div className={` flex flex-col items-center py-[5rem] bg-[#0e0c15]  rounded-[4.2rem]  `}>
              <div className='absolute'>
                <img src='/src/Brainware/assets/assets/grid.png' alt="" />
              </div>
              <div className=' top-[5rem] z-1 w-[80%] '>
                <div className='flex justify-between'>
                  <p className='text-xl bg-gradient-to-r from-green-600 via-violet-700 to-pink-900 bg-clip-text text-transparent'>[ {road.date} ]</p>
                  <div className= 'flex items-center mb-[3rem] gap-2 bg-amber-50 px-4 py-1 rounded-xl text-blue-950 '>
                    <img src={road.status==='progress'? loading1 :check2} width={28} alt="" />
                    <span>{road.status.toUpperCase()}</span>
                  </div>
                </div>
                <div>
                  <img src={road.imageUrl} width={680} alt="" />
                </div>
                <div className='  left-[5rem] sm:mt-[3rem]'>
                  <p className='max-xl:text-[1.8rem] xl:text-[3rem] max-xl:mt-[4rem] '>{road.title}</p>
                  <p className='text-2xl xl:w-[80%] max-xl:text-[1.3rem] text-gray-400'>{road.text}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Roadmap
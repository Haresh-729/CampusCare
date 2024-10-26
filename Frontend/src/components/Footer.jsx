import { list } from 'postcss'
import React from 'react'

const Footer = ({footerAPI: {titles, links}}) => {
  return (
    <>
        <footer name="Footers" className="bg-gradient-to-b from-[#FFE6D6] via-[#f7cbbc] to-[#BE9587] pt-7 pb-5">
            <div className="thrift-container text-black">
                <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5">
                    {titles.map((val, i) => (
                        <div key={i} className="grid items-center">
                            <h1 className="text-lg lg:text-xl md:text-sm uppercase font-bold">{val.title}</h1>
                        </div>
                    ))}
                    {links.map((list,i) => (
                        <ul key={i} className="grid items-center gap-1">
                            {list.map((link, i) =>(
                                <li className="text-2xl sm:text-sm font-semibold" key={i}>{link.link}</li>
                            ))}
                        </ul>
                    ))}
                </div>
                <div className='mt-5 text-center'>
                    <p className='text-sm md:text-center'>Copyright<sup className='text-base font-bold'>&copy;</sup> All Reserved Rights <span className='font-semibold'>HARESH KURADE 2024</span></p>
                </div>

            </div>
        </footer>
    </>
  )
}

export default Footer
import React from 'react'

const TeachingComponent = () => {
  return (
    <div className="grid grid-flow-row grid-cols-5">
        <div className='col-start-2 col-span-4 justify-center mb-5'>
            <h1 className='text-base md:text-xl font-medium'>
                Teaching
            </h1>
            <span className='text-slate-700 text-sm md:text-base'>Read my teaching statement</span>
        </div>

        <div className=" row-start-2 col-start-2 col-span-3 bg-[#FBFFFB] rounded-lg justify-center items-center">
            <h1 className='text-base md:text-xl font-medium mb-1'>
                Graduate Student Instructor
            </h1>
            <div className="rounded-lg border border-gray-200">
                <div className="overflow-x-auto rounded-t-lg">
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">

                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-slate-900">Fall 2023</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-slate-700"></th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-slate-700">
                            Econ 452 - Intermediate introduction to statistics and econometrics II
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-slate-700"></th>
                        </tr>
                    </thead>

                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-slate-900">Fall 2023</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-slate-700"></th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-slate-700">
                            Econ 452 - Intermediate introduction to statistics and econometrics II
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-slate-700"></th>
                        </tr>
                    </thead>

                    </table>
                </div>
                </div>
        </div>
    </div>
  )
}

export default TeachingComponent
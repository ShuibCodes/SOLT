/* eslint-disable */
import React from 'react';
import './tailwind.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
export default function Tickets({plays}) {
	return (
		<div className="relative lg:px-8 ">
		
			<div className="relative max-w-7xl mx-auto mt-24">
               
                <div className="text-left mt-12 m-2 p-2"
                >
                     <h1 style={{fontSize:"26px"}} className= "font-bold text-1xl" >Todays Deals</h1>
                </div>
               
                    
				<div style={{position: 'relative', top:"1rem"}} className="mt-96 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 md:grid-cols-2 lg:max-w-none">
              
					{plays.map((play) => (
                        <>
                        {play.see_tickets_url_infos.length === 0 ? 
                            <div
							style={{ maxWidth:"500px", Width: '450px', borderRadius: '1.2rem', Height: '400px' }}
							key={play.id}
							className="opacity-10 flex flex-col rounded-3xl overflow-hidden grayscale border-2"
						>
							<div className="flex-shrink-0">
								<img className="grayscaled h-48 w-full object-cover" src={play.image} alt="play-image" />
							</div>
							<div className="flex-1 bg-white-500 p-6 flex flex-col justify-between">
								<div className="flex-1">
								<h1 className="mt-3 text-base text-gray-700 text-center text-2xl font-bold">{play.title}</h1>
										<h3 className="mt-3 text-base text-gray-600 text-center">About the Show</h3>
									
								</div>

								
							</div>
                                <div className="">
									<button style={{backgroundColor:"white"}} className="px-12 py-4 w-full m-auto font-bold text-white ">
                                        <a className="text-gray-600" href={play.url}>
                                            SOLD OUT
                                        </a>
                                    </button>
								</div>
						</div>
                        
                        :
                        <div
							style={{ maxWidth:"700px", Width: '500px', borderRadius: '1.2rem', Height: '400px' }}
							key={play.id}
							className="flex flex-col rounded-3xl  overflow-hidden"
						>
							<div className="flex-shrink-0">
								<img className="h-48 w-full object-cover" src={play.image} alt="play-image" />
							</div>
							<div className="flex-1 bg-white p-6 flex flex-col justify-between">
								<div className="flex-1">
                                        <h1 className="mt-3 text-base text-black text-center text-2xl font-bold">{play.title}</h1>
										<h3 className="mt-3 text-base text-gray-500 text-center">About the Show</h3>
									
								</div>

								
							</div>
                                <div className="">
									<button style={{backgroundColor:"red"}} className="px-12 py-4 w-full m-auto font-bold text-white ">
                                    <a style={{backgroundColor:"red"}} className="px-12 py-4 w-full m-auto font-bold text-white " href={play.see_tickets_url_infos[3].url}>
                                            Book Now
                                        </a>
                                    </button>
								</div>
						</div>
                        }
                        </>
						
					))}
				</div>
                </div>
			
		</div>
	);
}



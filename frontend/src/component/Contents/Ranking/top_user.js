import React from "react";

const Topuser = () => {
    return(
        <div className="flex justify-center items-center">
        <div className="flex space-x-10 w-2/3 h-1/3">
            <div className="border-2 w-1/3">
                <img src="https://static.dreamhack.io/main/v2/img/top1.364504e.svg" alt="Top 1 User" />
                <div className="flex space-x-4  place-content-center" style={{ width: '100%', height: '50%' }}>
                     <img src="https://dreamhack-media.s3.amazonaws.com/user/eae08f03658169db15e965c05703cad20121bd2643ff315078d4a88aaa74e528.png" alt="user"/>
                </div>
                <div className="flex space-x-4 place-content-center">
                    <div>
                        RATING
                    </div>
                    <div className="mt-1 w-0 border-r-4 border-slate-300 "></div>
                    <div>
                        참여 CTF 수
                    </div>
                </div>
            </div>

            <div className="border-2 w-1/3">
                <img src="https://static.dreamhack.io/main/v2/img/top2.461a65c.svg" alt="Top 2 User"/>
                    <div className="flex space-x-4  place-content-center" style={{ width: '100%', height: '50%' }}>
                        <img src="https://dreamhack-media.s3.amazonaws.com/user/60906a8dab74fc390383d9b9309d4d75e9feb2a86b24989775954f6887b12063.jpg" alt="user"/>
                    </div>
                    <div className="flex space-x-4  place-content-center">
                    <div>
                        RATING
                    </div>
                    <div className="mt-1 w-0 border-r-4 border-slate-300 "></div>
                    <div>
                        참여 CTF 수
                    </div>
                </div>
            </div>

            <div className="border-2 w-1/3">
                <img src="https://static.dreamhack.io/main/v2/img/top3.a3c950b.svg" alt="Top 3 User"/>
                    <div className="flex space-x-4  place-content-center" style={{ width: '100%', height: '50%' }}>
                        <img src="https://dreamhack-media.s3.amazonaws.com/user/60906a8dab74fc390383d9b9309d4d75e9feb2a86b24989775954f6887b12063.jpg" alt="user"/>
                    </div>
                    <div className="flex space-x-4  place-content-center">
                    <div>
                        RATING
                    </div>
                    <div className="mt-1 w-0 border-r-4 border-slate-300 "></div>
                    <div>
                        참여 CTF 수
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Topuser;
import React from 'react';

class Bottom extends React.Component {
    render() {
        return (
            <div className="h-screen bg-white" >
                <div className="min-h-screen bg-white flex flex-col justify-center align-center 
                    ">
                    <div className="bg-gradient-to-t from-pink-400 to-purple-900 h-96 flex flex-col justify-center align-center 
                        ">
                        <div className="text-white text-5xl font-bold flex justify-center  p-20 text-center">
                            it's free.<br></br>
                            No credit card required.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bottom;
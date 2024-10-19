import { Link  } from 'react-router-dom';

function Text() {
    return ( <>
         <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="p-8 bg-white mt-6 rounded-lg shadow-md">
                    <form   className="p-3 w-96">
                        <h2 className="text-2xl font-bold mb-4">Login</h2>
                         <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                className="w-full p-2 border border-gray-300 rounded mt-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                className="w-full p-2 border border-gray-300 rounded mt-2"
                                required
                            />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                            Login
                        </button>
                    </form>
                    <p> <Link to={"/register"} className="mt-5 text-center block   text-blue-800">สมัครสมาชิก</Link> </p>
                </div>
            </div>
    </> );
}

export default Text ;
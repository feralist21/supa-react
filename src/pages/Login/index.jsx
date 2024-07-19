const LoginPage = () => {
    return (
        <div className="w-full h-screen bg-gray-600 flex flex-col items-center justify-center text-gray-200">
            <h1 className="text-center text-2xl mb-5">Supa React Login</h1>
            <form className="flex flex-col gap-y-4 w-[400px]">
                <div className="flex flex-col gap-y-1">
                    <label className="block" htmlFor="login">
                        Username
                    </label>
                    <input
                        className="block outline-none border-none text-black py-2 px-3"
                        type="text"
                        name="login"
                        id="login"
                    />
                </div>
                <div className="flex flex-col gap-y-1">
                    <label className="block" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="block outline-none border-none text-black py-2 px-3"
                        type="password"
                        name="password"
                        id="password"
                    />
                </div>
                <button
                    className="block w-full p-2 text-center text-white bg-violet-600 uppercase font-bold"
                    type="submit"
                >
                    login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;

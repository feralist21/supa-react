import { DiReact } from 'react-icons/di';
import { DiLinux } from 'react-icons/di';

const Layout = ({ children }) => {
    return (
        <div className='w-full h-screen flex'>
            <div className='w-1/6 bg-slate-800 text-white py-10 px-8'>
                <a href='/' className='flex items-center gap-y-3 mb-14'>
                    <DiReact className='block w-12 h-12' />
                    <p className='text-3xl'>Supa React</p>
                </a>
                <div className='flex flex-col gap-y-3'>
                    <a
                        className='text-lg flex items-center gap-x-2 text-gray-400 hover:text-gray-100'
                        href='/'
                    >
                        <DiLinux className='block w-6 h-6' />
                        <span>Ссылка 1</span>
                    </a>
                </div>
            </div>
            <div className='w-5/6 bg-gray-600 text-white py-10 px-10'>
                <header className='mb-10'>
                    <h1 className='text-3xl'>Заголовок страницы</h1>
                </header>
                <main>{children}</main>
            </div>
        </div>
    );
};

export default Layout;

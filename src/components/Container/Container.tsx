export function Container({ children }: { children: JSX.Element | JSX.Element[] }) {
    return (
        <div className="bg-white container min-w-full p-4 md:p-8 shadow min-h-screen flex flex-col">
            {children}
        </div>
    )
}

export default Container;
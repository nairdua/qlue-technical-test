export function Container({ children }: { children: JSX.Element | JSX.Element[] }) {
    return (
        <div className="bg-white container lg:my-2 min-w-full p-4 md:p-8 shadow min-h-screen flex flex-col">
            {children}
        </div>
    )
}

export default Container;
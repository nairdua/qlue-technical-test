export function Container({ children }: { children: JSX.Element | JSX.Element[] }) {
    return (
        <div className="bg-white container lg:my-2 mx-auto p-4 md:p-8 max-w-6xl shadow min-h-screen flex flex-col">
            {children}
        </div>
    )
}

export default Container;
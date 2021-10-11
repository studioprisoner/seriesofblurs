import Nav from 'components/Nav'

export default function Layout( { children }) {
    
    return (
        <div className="h-screen bg-fixed bg-left bg-cover bg-no-repeat bg-mia-background overflow-y-auto">
            <Nav />
            {children}
        </div>
    )
}
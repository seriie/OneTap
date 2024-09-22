export default function Footer() {
    return (
        <footer className="bg-gray-800 absolute right-0 left-0 text-white py-6">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold">OneTap</h2>
                        <p className="text-sm">Your trusted e-commerce platform.</p>
                    </div>
                    <nav className="space-x-4">
                        <a href="/about" className="hover:underline">About Us</a>
                        <a href="/contact" className="hover:underline">Contact</a>
                        <a href="/privacy" className="hover:underline">Privacy Policy</a>
                        <a href="/terms" className="hover:underline">Terms of Service</a>
                    </nav>
                </div>
                <div className="mt-4 text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} <span className="text-sky-400">OneTap</span>. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}


function Header() {
    return (
        <header
            className="flex justify-end items-center p-4"
            style={{
                width: "90%",  // Full width for the header
                position: "relative",
                fontWeight: "500",
                fontSize: "20px",
                display: "flex",
                justifyContent: "end",
              
            }}
        >
            <div >
                <ul className="flex space-x-6 "
                > {/* Flex to align items in one line with spacing */}
                    <li className="hover:underline cursor-pointer">Works</li>
                    <li className="hover:underline cursor-pointer">Blogs</li>
                    <li className="hover:underline cursor-pointer">Contact</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;


const About = () => {
    return (
        <div className="mx-150 my-30 text-3xl">
            <h1 className="p-4 m-4 text-3xl font-bold">This is About Page</h1>
            <form>
                <input type="text" className="p-2 m-3 border border-black" placeholder="name" />
                <input type="text" className="p-2 m-3 border border-black" placeholder="last name" />
                <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">submit</button>
            </form>
        </div>
    )
}
export default About;
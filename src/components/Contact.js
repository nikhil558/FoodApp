const Contact = () => {
    return (
        <div>
            <h1>Contact us page</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="Name"/>
                <input type="text" className="border border-black p-2 m-2" placeholder="Message"/>
                <button className="border border-black p-2 bg-gray-300 m-2 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact
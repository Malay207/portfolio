import Image from "next/image";
const Rendercolumn = (skills) => {
    const data = Math.ceil(skills.length / 2);
    const firsthalf = skills.slice(0, data);
    const secondhalf = skills.slice(data);
    return (
        <>

            <div id="col1">
                {
                    firsthalf.map((img, index) => {
                        return (
                            <div key={index} className="sm:mx-0 mx-3.5 flex items-start p-2.5" id="col2">
                                <Image src={img.src} alt="img..." height={0} width={0} className="me-1.5" style={{ width: '25px', height: '25px' }} />
                                <div className="lg:text-2xl text-lg">{img.name}</div>
                            </div>

                        )
                    })
                }

            </div>

            <div id="col2">
                {
                    secondhalf.map((img, index) => {
                        return (
                            <div key={index} className="sm:mx-0 mx-3.5 flex items-start p-2.5" id="col2">
                                <Image src={img.src} alt="img..." height={0} width={0} className="me-1.5" style={{ width: '25px', height: '25px' }} />
                                <div className="lg:text-2xl text-lg">{img.name}</div>
                            </div>

                        )
                    })
                }

            </div>
        </>
    )

}

export default Rendercolumn;